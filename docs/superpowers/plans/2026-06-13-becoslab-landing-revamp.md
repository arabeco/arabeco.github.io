# Beco's Lab Landing Revamp — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add tactile feedback and a living, animated quality to the `landing-experimento` orbital interface, fix its technical base (native scroll, reduced-motion, focus, contrast), and raise its aesthetic finish — without changing the stack.

**Architecture:** Pure progressive enhancement over the existing three files. A single `requestAnimationFrame` loop drives idle drift, magnetic cursor, and pointer parallax; everything else is CSS. Dynamic motion composes onto the existing `--orb-x/--orb-y` layout offsets via new `--orb-dx/--orb-dy` properties so it never fights `layoutTrackOrbs()`. All motion lives under `prefers-reduced-motion: no-preference`.

**Tech Stack:** Vanilla HTML, CSS, JavaScript. No build, no dependencies, no test framework. Verification is manual and visual.

---

## Verification conventions

There is no automated test runner. For every "verify" step:

- **Open the page:** load `landing-experimento.html` directly in a browser (double-click or `file://`). A static server is not required.
- **Mobile viewport:** open DevTools (F12) → device toolbar (Ctrl+Shift+M) → set width ≤ 820px.
- **Reduced motion:** DevTools → Command palette (Ctrl+Shift+P) → "Emulate CSS prefers-reduced-motion: reduce".
- **Console:** the Console tab must show zero errors after each change.

## File structure

All work is confined to three existing files (plus possibly `assets/`):

- `landing-experimento.html` — markup. Gains one `<svg>` node (Phase 3) and a font `<link>` (Phase 4).
- `landing-experimento.css` — all styling and the reduced-motion guard. Gains the dynamic-offset composition, `:active`/`:focus-visible` states, core-pulse keyframe, stagger delays, grain, and display-font rules.
- `landing-experimento.js` — interaction logic. Loses the scroll-jacking handlers (Phase 0), gains the single rAF loop (Phases 1–2, 4) and constellation rendering (Phase 3).

---

## Task 1: Remove scroll-jacking, trust native scroll-snap

**Files:**
- Modify: `landing-experimento.js:470-563`

The CSS already declares `scroll-snap-type: y mandatory` on `html` (`landing-experimento.css:17`). The JS reimplements snapping by hijacking `wheel` with `preventDefault`, which fights the native behavior. Remove the JS snapping entirely and keep only the `#contactScreen` hash jump on load.

- [ ] **Step 1: Delete the snapping engine and event handlers**

In `landing-experimento.js`, delete the entire block from `function getCurrentScreenIndex()` through the end of the `resize` listener — current lines 470-563. That removes: `getCurrentScreenIndex`, `snapToScreen`, `snapToNearest`, the `wheel`, `touchstart`, `touchend`, `scroll`, `load`, and `resize` listeners.

Replace that whole block with this minimal version (keeps the hash-jump-to-contact behavior and the orb re-layout on resize, using native scroll):

```js
window.addEventListener("load", () => {
  if (window.location.hash === "#contactScreen") {
    document.querySelector("#contactScreen")?.scrollIntoView();
  }
});

window.addEventListener("resize", () => {
  layoutTrackOrbs(activeTrack, selectedProjectId);
});
```

- [ ] **Step 2: Remove now-unused snap state variables**

Near the top of the file (current lines 200-202), delete these three lines — they were only used by the deleted snapping engine:

```js
let snapTimer = 0;
let touchStartY = 0;
let isSnapping = false;
```

Leave `let activeTrack = "";`, `let selectedProjectId = "";`, `let activeSlideProjectId = "";`, `let activeSlideIndex = 0;` intact.

- [ ] **Step 3: Verify native snap works**

Open the page. Scroll with mouse wheel / trackpad between the lab stage and the contact screen.
Expected: scrolling snaps to one screen at a time via native CSS, momentum feels normal, no double-jumps. On mobile viewport, swipe up/down snaps between the two screens. Console shows zero errors.
Also verify: opening `landing-experimento.html#contactScreen` lands on the contact screen.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.js
git commit -m "Remove scroll-jacking, rely on native scroll-snap"
```

---

## Task 2: Reduced-motion guard, focus-visible, contrast, dead CSS

**Files:**
- Modify: `landing-experimento.css:3` (contrast)
- Modify: `landing-experimento.css:372-415` (dead CSS removal)
- Modify: `landing-experimento.css` (append focus + reduced-motion rules)

- [ ] **Step 1: Raise body-text contrast**

In `landing-experimento.css`, change line 3 from:

```css
  --muted: rgba(246, 239, 225, 0.66);
```

to:

```css
  --muted: rgba(246, 239, 225, 0.74);
```

- [ ] **Step 2: Remove dead orb-position CSS**

The static positions for `.orb-glyph`, `.orb-mind`, `.orb-elite`, `.orb-kings`, `.orb-blueprint`, `.orb-life`, `.orb-course`, `.orb-studio`, `.orb-partners` (current lines 372-415) are overridden by `.lab-system .project-orb { top:50%; right:auto; bottom:auto; left:50% }` immediately after them, because JS positions every orb via `--orb-x/--orb-y`. Delete the nine rule blocks spanning current lines 372-415 (from `.orb-glyph {` through the closing `}` of `.orb-partners`).

Keep the `.lab-system .project-orb { ... }` rule (current lines 417-422) — it is the one that actually applies.

Note: the matching mobile overrides in the `@media (max-width: 820px)` block (current lines 1180-1203) DO apply on mobile and must be kept. Do not touch those.

- [ ] **Step 3: Add focus-visible to orbs**

Append to `landing-experimento.css` (end of file, before the closing of any media query — i.e. at top level after line 1445):

```css
.core-orb:focus-visible,
.project-orb:focus-visible {
  outline: none;
}

.core-orb:focus-visible .orb-image,
.project-orb:focus-visible .orb-image {
  border-color: rgba(246, 239, 225, 0.9);
  box-shadow:
    0 0 0 3px rgba(102, 231, 205, 0.45),
    0 22px 70px rgba(0, 0, 0, 0.42);
}
```

- [ ] **Step 4: Add the reduced-motion guard**

Append to `landing-experimento.css` (top level, end of file):

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 5: Verify**

Open the page. Tab through with the keyboard: each project orb and the core orb show a clear teal focus ring. Body paragraphs read slightly brighter than before. Pick a project track and confirm orbs still position correctly (proves the deleted CSS was inert). On mobile viewport, orbs still land in their corners. Enable "Emulate prefers-reduced-motion: reduce" and confirm transitions are effectively instant. Console clean.

- [ ] **Step 6: Commit**

```bash
git add landing-experimento.css
git commit -m "Add reduced-motion guard, orb focus ring, contrast bump; drop dead CSS"
```

---

## Task 3: Tactile press + mobile vibration

**Files:**
- Modify: `landing-experimento.css` (append `:active` rules)
- Modify: `landing-experimento.js` (orb click handler, current line 410-412)

The orbs compose several transforms (`translate(-50%,-50%) translate(var(--orb-x),var(--orb-y)) scale(...)`), so a blanket `transform: scale(.94)` would clobber positioning. Press feedback for orbs is done with `filter`/opacity instead; rectangular buttons use `scale`.

- [ ] **Step 1: Add press states**

Append to `landing-experimento.css` (top level, end of file):

```css
.door-tab:active,
.service-strip button:active,
.panel-action:active,
.send-action:active,
.slide-nav:active,
.slide-close:active {
  transform: scale(0.94);
}

.core-orb:active .orb-image,
.project-orb:active .orb-image {
  filter: brightness(1.2);
  border-color: rgba(246, 239, 225, 0.9);
}
```

Note: `.door-tab` already has `transform: translateY(-1px)` on `:hover`/`:focus-visible` (current line 464). The `:active` scale will replace it momentarily during the press — that is the intended "push" feel.

- [ ] **Step 2: Add guarded vibration on orb tap**

In `landing-experimento.js`, replace the orb click wiring (current lines 410-412):

```js
orbs.forEach((orb) => {
  orb.addEventListener("click", () => renderProject(orb.dataset.project));
});
```

with:

```js
orbs.forEach((orb) => {
  orb.addEventListener("click", () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(8);
    }
    renderProject(orb.dataset.project);
  });
});
```

- [ ] **Step 3: Verify**

Open the page. Click and hold a door tab / the "Ver slides" button / the send button: each visibly shrinks while pressed and springs back on release. Press a project orb: its ring brightens during the press. On a real Android device (or any browser exposing the Vibration API), tapping an orb produces a tiny vibration; on unsupported browsers nothing breaks (guarded by the `in navigator` check). Console clean.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.css landing-experimento.js
git commit -m "Add tactile press states and guarded mobile vibration"
```

---

## Task 4: Compose a dynamic offset into orb transforms

**Files:**
- Modify: `landing-experimento.css:325-362` (orb transform rules)

This task adds — but does not yet animate — `--orb-dx/--orb-dy`, a second translate that later tasks (drift, magnetic) will drive. Defaulting both to `0px` means this change is visually a no-op until Task 5/6 set them.

- [ ] **Step 1: Add the dynamic offset to the base orb rule**

In `landing-experimento.css`, in the `.project-orb` rule (current lines 325-340), update the custom-property block and `transform`. Change:

```css
.project-orb {
  --orb-x: 0px;
  --orb-y: 0px;
  width: clamp(62px, 6.4vw, 84px);
  height: clamp(62px, 6.4vw, 84px);
  top: 50%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  filter: blur(3px);
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) scale(0.78);
```

to:

```css
.project-orb {
  --orb-x: 0px;
  --orb-y: 0px;
  --orb-dx: 0px;
  --orb-dy: 0px;
  width: clamp(62px, 6.4vw, 84px);
  height: clamp(62px, 6.4vw, 84px);
  top: 50%;
  left: 50%;
  opacity: 0;
  pointer-events: none;
  filter: blur(3px);
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) translate(var(--orb-dx), var(--orb-dy)) scale(0.78);
```

- [ ] **Step 2: Add the dynamic offset to the visible/selected states**

Update `.project-orb.is-visible` (current lines 342-347) transform — change:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) scale(1);
```

to:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) translate(var(--orb-dx), var(--orb-dy)) scale(1);
```

Update `.project-orb.is-dimmed` (current lines 349-354) transform — change:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) scale(0.62);
```

to:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) translate(var(--orb-dx), var(--orb-dy)) scale(0.62);
```

Update `.project-orb.is-selected` (current lines 356-362) transform — change:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) scale(1.72);
```

to:

```css
  transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) translate(var(--orb-dx), var(--orb-dy)) scale(1.72);
```

- [ ] **Step 3: Update the selected-orb transform inside the desktop `:has()` block**

In the `@media (min-width: 821px)` block, `.lab-stage:has(.door-panel.is-project-panel) .project-orb.is-selected` (current lines 608-610) — change:

```css
    transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) scale(1.92);
```

to:

```css
    transform: translate(-50%, -50%) translate(var(--orb-x), var(--orb-y)) translate(var(--orb-dx), var(--orb-dy)) scale(1.92);
```

- [ ] **Step 4: Verify no visual change**

Open the page, select a track, select a project. Everything looks and behaves exactly as before (orbs in the same positions, selection zoom unchanged). This confirms the no-op composition is correct. Console clean.

- [ ] **Step 5: Commit**

```bash
git add landing-experimento.css
git commit -m "Compose dynamic --orb-dx/--orb-dy offset into orb transforms"
```

---

## Task 5: Single rAF loop with idle drift

**Files:**
- Modify: `landing-experimento.js` (append motion module near end, after the load/resize listeners from Task 1)

Introduce the one animation loop the whole revamp shares. This task wires only idle drift; Tasks 6 and 8 extend the same loop.

- [ ] **Step 1: Add motion preference flags near the top of the file**

In `landing-experimento.js`, immediately after the `const` element lookups block (after current line 198, `const sendAction = ...`), add:

```js
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
let pointerX = null;
let pointerY = null;
let motionRunning = false;
```

- [ ] **Step 2: Append the animation loop at the end of the file**

Append to `landing-experimento.js` (very end):

```js
function visibleOrbs() {
  return orbs.filter((orb) => orb.classList.contains("is-visible"));
}

function animateSystem(now) {
  const t = now / 1000;

  visibleOrbs().forEach((orb, index) => {
    const phase = index * 1.7;
    const driftX = Math.sin(t * 0.9 + phase) * 4;
    const driftY = Math.cos(t * 0.7 + phase) * 4;
    orb.style.setProperty("--orb-dx", `${driftX.toFixed(2)}px`);
    orb.style.setProperty("--orb-dy", `${driftY.toFixed(2)}px`);
  });

  requestAnimationFrame(animateSystem);
}

function startMotion() {
  if (motionRunning || reduceMotion.matches) return;
  motionRunning = true;
  requestAnimationFrame(animateSystem);
}

startMotion();
reduceMotion.addEventListener("change", (event) => {
  if (!event.matches) startMotion();
});
```

- [ ] **Step 3: Verify drift**

Open the page and select a track. The orbs gently float — each on its own slow path, a few pixels of travel — while staying near their layout positions. Selecting a project still zooms it correctly (the drift rides on top). Enable "Emulate prefers-reduced-motion: reduce" and reload: orbs are static. Console clean.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.js
git commit -m "Add shared rAF loop with idle orbital drift"
```

---

## Task 6: Magnetic cursor

**Files:**
- Modify: `landing-experimento.js` (extend `animateSystem` and add pointer tracking)

- [ ] **Step 1: Track the pointer (desktop only)**

In `landing-experimento.js`, just above the `function animateSystem` definition added in Task 5, add:

```js
if (finePointer.matches) {
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
  });
  window.addEventListener("pointerleave", () => {
    pointerX = null;
    pointerY = null;
  });
}
```

- [ ] **Step 2: Add magnetic pull inside the loop**

In `animateSystem`, replace the `visibleOrbs().forEach(...)` body so drift and magnetic combine. Replace:

```js
  visibleOrbs().forEach((orb, index) => {
    const phase = index * 1.7;
    const driftX = Math.sin(t * 0.9 + phase) * 4;
    const driftY = Math.cos(t * 0.7 + phase) * 4;
    orb.style.setProperty("--orb-dx", `${driftX.toFixed(2)}px`);
    orb.style.setProperty("--orb-dy", `${driftY.toFixed(2)}px`);
  });
```

with:

```js
  const magnetRadius = 120;
  const magnetStrength = 8;

  visibleOrbs().forEach((orb, index) => {
    const phase = index * 1.7;
    let dx = Math.sin(t * 0.9 + phase) * 4;
    let dy = Math.cos(t * 0.7 + phase) * 4;

    if (finePointer.matches && pointerX !== null) {
      const rect = orb.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distX = pointerX - cx;
      const distY = pointerY - cy;
      const dist = Math.hypot(distX, distY);
      if (dist < magnetRadius && dist > 0) {
        const pull = (1 - dist / magnetRadius) * magnetStrength;
        dx += (distX / dist) * pull;
        dy += (distY / dist) * pull;
      }
    }

    orb.style.setProperty("--orb-dx", `${dx.toFixed(2)}px`);
    orb.style.setProperty("--orb-dy", `${dy.toFixed(2)}px`);
  });
```

- [ ] **Step 3: Verify**

On desktop, move the mouse near an orb: it leans toward the cursor within ~120px and eases back when the cursor leaves. Drift still runs underneath. On mobile viewport (touch, coarse pointer) the magnetic code is skipped — only drift remains. Console clean.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.js
git commit -m "Add magnetic-cursor pull to orbs on fine pointers"
```

---

## Task 7: Choreographed entrance + core pulse

**Files:**
- Modify: `landing-experimento.css` (stagger delay + core pulse keyframe)
- Modify: `landing-experimento.js` (`renderTrack`, set `--orb-index`)

- [ ] **Step 1: Set a per-orb index for stagger**

In `landing-experimento.js`, in `renderTrack` (current lines 288-292), replace:

```js
  orbs.forEach((orb) => {
    orb.classList.toggle("is-visible", orb.dataset.orbTrack === id);
    orb.classList.remove("is-selected", "is-dimmed");
    orb.setAttribute("aria-pressed", "false");
  });
```

with:

```js
  let trackIndex = 0;
  orbs.forEach((orb) => {
    const inTrack = orb.dataset.orbTrack === id;
    orb.classList.toggle("is-visible", inTrack);
    orb.classList.remove("is-selected", "is-dimmed");
    orb.setAttribute("aria-pressed", "false");
    if (inTrack) {
      orb.style.setProperty("--orb-index", String(trackIndex));
      trackIndex += 1;
    }
  });
```

- [ ] **Step 2: Add stagger delay to the orb reveal transition**

In `landing-experimento.css`, in the `.project-orb` rule, the existing `transition` (current lines 336-339) reveals opacity/filter/transform. Add a staggered delay. Change:

```css
  transition:
    opacity 260ms ease,
    filter 260ms ease,
    transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
```

to:

```css
  transition:
    opacity 260ms ease calc(var(--orb-index, 0) * 45ms),
    filter 260ms ease calc(var(--orb-index, 0) * 45ms),
    transform 380ms cubic-bezier(0.22, 1, 0.36, 1) calc(var(--orb-index, 0) * 45ms);
```

- [ ] **Step 3: Add the core pulse keyframe**

Append to `landing-experimento.css` (top level, end of file):

```css
@keyframes core-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.035);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .core-orb:not([hidden]) {
    animation: core-pulse 4.5s ease-in-out infinite;
  }
}
```

Note: `.core-orb` base transform is `translate(-50%, -50%)` (current line 246); the keyframe preserves that centering while pulsing. When a project is open, `.lab-system.is-project-open .core-orb` overrides transform to `scale(0.42)` with higher specificity and `opacity: 0`, so the pulse correctly disappears with the core.

- [ ] **Step 4: Verify**

Open the page. The core orb breathes slowly. Click a track: its orbs fan out one after another (staggered ~45ms apart) rather than all at once. Switch tracks: the stagger replays. Open a project: the core fades/shrinks and stops pulsing. Reduced-motion: core is static, orbs appear without stagger delay being noticeable. Console clean.

- [ ] **Step 5: Commit**

```bash
git add landing-experimento.css landing-experimento.js
git commit -m "Add choreographed orb entrance and core pulse"
```

---

## Task 8: Pointer parallax on the orb field and grain

**Files:**
- Modify: `landing-experimento.js` (extend `animateSystem`)
- Modify: `landing-experimento.css` (parallax vars on `.lab-system` and `.lab-noise`)

- [ ] **Step 1: Add parallax custom properties to the layers**

In `landing-experimento.css`, update the `.lab-system` rule (current lines 199-203). Change:

```css
.lab-system {
  position: relative;
  min-height: 255px;
  isolation: isolate;
}
```

to:

```css
.lab-system {
  position: relative;
  min-height: 255px;
  isolation: isolate;
  transform: translate(var(--par-x, 0px), var(--par-y, 0px));
}
```

And update `.lab-noise` (current lines 45-55) by adding a transform. After its existing `mask-image` declaration (current line 54), add inside the rule:

```css
  transform: translate(var(--noise-x, 0px), var(--noise-y, 0px));
```

- [ ] **Step 2: Drive parallax from the loop**

In `landing-experimento.js`, inside `animateSystem`, just before `requestAnimationFrame(animateSystem);`, add:

```js
  if (finePointer.matches && pointerX !== null) {
    const px = (pointerX / window.innerWidth - 0.5) * 2;
    const py = (pointerY / window.innerHeight - 0.5) * 2;
    if (labSystem) {
      labSystem.style.setProperty("--par-x", `${(px * 6).toFixed(2)}px`);
      labSystem.style.setProperty("--par-y", `${(py * 6).toFixed(2)}px`);
    }
    const noise = document.querySelector(".lab-noise");
    if (noise) {
      noise.style.setProperty("--noise-x", `${(px * -10).toFixed(2)}px`);
      noise.style.setProperty("--noise-y", `${(py * -10).toFixed(2)}px`);
    }
  }
```

- [ ] **Step 3: Verify**

On desktop, moving the mouse shifts the orb field a few pixels one way and the background grid the opposite way, creating depth. Orbs still drift and magnetize on top of the field shift. On mobile/coarse pointer there is no parallax. Reduced-motion: loop never starts, layers stay put. Console clean.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.css landing-experimento.js
git commit -m "Add pointer parallax to orb field and noise layer"
```

---

## Task 9: Real film grain via feTurbulence

**Files:**
- Modify: `landing-experimento.html:11` (the `.lab-noise` div)
- Modify: `landing-experimento.css:45-55` (the `.lab-noise` rule)

Replace the CSS line-grid "noise" with an inline SVG turbulence texture for a real analog grain that suits the "becos" theme.

- [ ] **Step 1: Put an SVG grain source in the noise layer**

In `landing-experimento.html`, replace line 11:

```html
    <div class="lab-noise" aria-hidden="true"></div>
```

with:

```html
    <div class="lab-noise" aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
```

- [ ] **Step 2: Restyle the noise layer for grain**

In `landing-experimento.css`, replace the `.lab-noise` rule (current lines 45-55) with:

```css
.lab-noise {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.05;
  mix-blend-mode: overlay;
  mask-image: radial-gradient(circle at 50% 38%, black 0 44%, transparent 80%);
  transform: translate(var(--noise-x, 0px), var(--noise-y, 0px));
}

.lab-noise svg {
  width: 100%;
  height: 100%;
}
```

- [ ] **Step 3: Verify**

Open the page. The background now has a subtle film grain (not a line grid), strongest toward the center where the mask is, fading at the edges. Parallax from Task 8 still nudges it opposite the cursor. The grain must be subtle — if it dominates, lower `opacity` toward 0.03. Console clean.

- [ ] **Step 4: Commit**

```bash
git add landing-experimento.html landing-experimento.css
git commit -m "Replace grid noise with feTurbulence film grain"
```

---

## Task 10: SVG constellation connecting core to selected orb

**Files:**
- Modify: `landing-experimento.html:52-54` (replace static `.system-line` spans)
- Modify: `landing-experimento.css:205-229` (remove/replace static line rules)
- Modify: `landing-experimento.js` (`renderProject`, `renderTrack`, add `drawConstellation`)

The two fixed diagonal `.system-line` spans are decorative. Replace them with an SVG whose line is redrawn from the core's center to the selected orb each time a project is chosen.

- [ ] **Step 1: Replace the static lines with an SVG in the markup**

In `landing-experimento.html`, replace lines 53-54:

```html
          <span class="system-line line-a" aria-hidden="true"></span>
          <span class="system-line line-b" aria-hidden="true"></span>
```

with:

```html
          <svg class="constellation" aria-hidden="true" preserveAspectRatio="none">
            <line class="constellation-line" x1="0" y1="0" x2="0" y2="0" />
          </svg>
```

- [ ] **Step 2: Replace the static-line CSS with constellation CSS**

In `landing-experimento.css`, delete the `.system-line`, `.line-b`, `.lab-system.is-project-open .line-a`, and `.lab-system.is-project-open .line-b` rules (current lines 205-229). Also delete their mobile override `.system-line { width: 96vw; }` (current lines 1166-1168). Replace the desktop block (where 205-229 were) with:

```css
.constellation {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.constellation-line {
  stroke: rgba(216, 183, 106, 0.55);
  stroke-width: 1;
  opacity: 0;
  transition: opacity 300ms ease;
}

.lab-system.is-project-open .constellation-line {
  opacity: 1;
}
```

- [ ] **Step 3: Add the draw function and wire it in**

In `landing-experimento.js`, add this function just above `function renderProject` (current line 297):

```js
function drawConstellation(projectId) {
  const line = document.querySelector(".constellation-line");
  const core = resetButton;
  const orb = orbs.find((item) => item.dataset.project === projectId);
  if (!line || !core || !orb || !labSystem) return;

  const base = labSystem.getBoundingClientRect();
  const coreRect = core.getBoundingClientRect();
  const orbRect = orb.getBoundingClientRect();

  line.setAttribute("x1", (coreRect.left + coreRect.width / 2 - base.left).toFixed(1));
  line.setAttribute("y1", (coreRect.top + coreRect.height / 2 - base.top).toFixed(1));
  line.setAttribute("x2", (orbRect.left + orbRect.width / 2 - base.left).toFixed(1));
  line.setAttribute("y2", (orbRect.top + orbRect.height / 2 - base.top).toFixed(1));
}
```

Note: when a project is open the core is faded (`opacity: 0`) but still occupies its centered box, so its rect still gives the correct origin point for the line.

In `renderProject`, at the very end of the function (after current line 342, `panel.querySelector("[data-open-slides]")?...`), add:

```js
  requestAnimationFrame(() => drawConstellation(projectId));
```

The `requestAnimationFrame` defer lets the selected orb's layout/transform settle before measuring.

- [ ] **Step 4: Keep the line in sync during motion and resize**

In `landing-experimento.js`, inside `animateSystem`, just before `requestAnimationFrame(animateSystem);`, add:

```js
  if (labSystem?.classList.contains("is-project-open") && selectedProjectId) {
    drawConstellation(selectedProjectId);
  }
```

This keeps the line attached to the orb as it drifts. (On reduced-motion the loop never runs, but the line is still drawn once by the `renderProject` call in Step 3, which is correct for a static view.)

- [ ] **Step 5: Verify**

Open the page, pick a track, select a project. A gold line connects the (now-shrinking) core position to the selected orb and stays attached as the orb drifts. Selecting a different project redraws the line to the new orb. Going back / resetting hides the line (opacity fades out). Resize the window with a project open and the line stays anchored. On reduced-motion, the line draws once and stays put. Console clean.

- [ ] **Step 6: Commit**

```bash
git add landing-experimento.html landing-experimento.css landing-experimento.js
git commit -m "Replace decorative lines with live core-to-orb constellation"
```

---

## Task 11: Distinct marks for the placeholder info projects

**Files:**
- Modify: `landing-experimento.html:80-91` (the three `info` orbs)
- Modify: `landing-experimento.css` (append glyph marks)

`health`, `life`, and `course` currently all render `becoslab.jpg` zoomed (`becoslab-zoom`), so three identical orbs read as unfinished. Give each a distinct CSS-drawn glyph — no new image assets required.

- [ ] **Step 1: Swap the image spans for glyph spans in markup**

In `landing-experimento.html`, replace the three info orbs (lines 80-91). Change the `orb-blueprint` (health), `orb-life` (life), and `orb-course` (course) inner `<span class="orb-image becoslab-zoom"><img .../></span>` to glyph spans:

For `orb-blueprint` (Ficha saúde), replace lines 80-83:

```html
          <button class="project-orb orb-blueprint" type="button" data-orb-track="info" data-project="health" aria-label="Ficha de sa&uacute;de">
            <span class="orb-image becoslab-zoom"><img src="assets/becoslab.jpg" alt="" /></span>
            <span>Ficha sa&uacute;de</span>
          </button>
```

with:

```html
          <button class="project-orb orb-blueprint" type="button" data-orb-track="info" data-project="health" aria-label="Ficha de sa&uacute;de">
            <span class="orb-image orb-glyph-mark glyph-health" aria-hidden="true"></span>
            <span>Ficha sa&uacute;de</span>
          </button>
```

For `orb-life` (Organizar vida), replace lines 84-87 similarly, using `glyph-life`:

```html
          <button class="project-orb orb-life" type="button" data-orb-track="info" data-project="life" aria-label="Organizar a vida">
            <span class="orb-image orb-glyph-mark glyph-life" aria-hidden="true"></span>
            <span>Organizar vida</span>
          </button>
```

For `orb-course` (Curso), replace lines 88-91 similarly, using `glyph-course`:

```html
          <button class="project-orb orb-course" type="button" data-orb-track="info" data-project="course" aria-label="Curso">
            <span class="orb-image orb-glyph-mark glyph-course" aria-hidden="true"></span>
            <span>Curso</span>
          </button>
```

- [ ] **Step 2: Add the glyph styling**

Append to `landing-experimento.css` (top level, end of file):

```css
.orb-glyph-mark {
  background:
    radial-gradient(circle at 50% 35%, rgba(216, 183, 106, 0.18), transparent 70%),
    rgba(5, 7, 16, 0.6);
}

.glyph-health::after,
.glyph-life::after,
.glyph-course::after {
  content: "";
  width: 46%;
  height: 46%;
}

.glyph-health::after {
  background:
    linear-gradient(90deg, transparent 44%, var(--gold) 44% 56%, transparent 56%),
    linear-gradient(0deg, transparent 44%, var(--gold) 44% 56%, transparent 56%);
}

.glyph-life::after {
  border: 2px solid var(--gold);
  border-radius: 999px;
  background: radial-gradient(circle, var(--gold) 0 22%, transparent 26%);
}

.glyph-course::after {
  background: var(--gold);
  clip-path: polygon(0 18%, 100% 0, 100% 82%, 0 100%);
  border-radius: 2px;
}
```

Note: `.orb-image` already centers its content via `display: grid; place-items: center` (current lines 283-294), so the `::after` glyph sits centered automatically. The existing `becoslab-zoom` rule still applies to other orbs (e.g. the core's health usages elsewhere) and is untouched.

- [ ] **Step 3: Update the slideshow image fallback (optional consistency)**

These three projects still set `image: "assets/becoslab.jpg"` in the `projects` data (`landing-experimento.js:135,150,165`). The slideshow uses that image. Leave the slideshow image as-is for now — replacing the slideshow media is a content task, not part of this visual pass. No code change in this step; this note prevents an "incomplete" flag during review.

- [ ] **Step 4: Verify**

Open the page, select the Infoprodutos track. The three orbs now show three distinct gold glyphs (a cross/plus for health, a target ring for life, a flag/banner for course) instead of three identical photos. Other tracks' orbs (with real images) are unchanged. Drift, magnetic, selection all still work on the glyph orbs. Console clean.

- [ ] **Step 5: Commit**

```bash
git add landing-experimento.html landing-experimento.css
git commit -m "Give placeholder info orbs distinct CSS glyphs"
```

---

## Task 12: Display typeface for titles

**Files:**
- Modify: `landing-experimento.html:8` (add font `<link>`)
- Modify: `landing-experimento.css` (font var + apply to titles)

**OPEN DECISION (from spec):** font delivery — CDN (one external request) vs. self-hosted in `assets/` (zero external requests). This task assumes the CDN path (Google Fonts, on the allowed `fonts.googleapis.com`/`fonts.gstatic.com` origins). If the user chose self-hosting, swap Step 1 for an `@font-face` pointing at the local file and skip the `<link>`.

The chosen display face is **Space Grotesk** — a geometric grotesk with character that reads as "technical lab" and pairs cleanly with Inter for body. Confirm with the user if they prefer a different face before implementing.

- [ ] **Step 1: Add the font link**

In `landing-experimento.html`, after line 8 (`<link rel="stylesheet" href="landing-experimento.css" />`), add:

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" />
```

- [ ] **Step 2: Define a display font variable**

In `landing-experimento.css`, in `:root` (after current line 7, `--deep: #050610;`), add:

```css
  --display: "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif;
```

- [ ] **Step 3: Apply the display face to titles only**

Append to `landing-experimento.css` (top level, end of file):

```css
.stage-copy h1,
.contact-copy h2,
.slide-copy h2 {
  font-family: var(--display);
  letter-spacing: -0.01em;
}
```

- [ ] **Step 4: Verify**

Open the page. The hero "Beco's Lab", the contact "Trabalhar junto." heading, and slideshow titles render in Space Grotesk; all body text, nav, labels, and panels stay in Inter. Confirm there is no layout shift / flash of unstyled text that breaks the layout (the `display=swap` shows Inter first, then swaps). Offline behavior: if the CDN is blocked, titles fall back to Inter gracefully. Console clean.

- [ ] **Step 5: Commit**

```bash
git add landing-experimento.html landing-experimento.css
git commit -m "Add Space Grotesk display face for titles"
```

---

## Final verification pass

After all tasks:

- [ ] Full walkthrough on desktop: hover orbs (magnetic), idle (drift + core pulse), pointer parallax, pick each track (staggered entrance + distinct info glyphs), select projects (constellation line), open slides, scroll to contact (native snap), tab through everything (focus rings).
- [ ] Full walkthrough on mobile viewport (≤820px): no magnetic/parallax, drift present, vibration on tap (real device), all sections usable, native swipe-snap between screens.
- [ ] Reduced-motion emulation: no loops running, page fully usable and static.
- [ ] Console clean across all of the above.

---

## Self-review notes

- **Spec coverage:** Fase 0 → Tasks 1–2. Fase 1 → Tasks 3, 4, 6. Fase 2 → Tasks 5, 7. Fase 3 → Task 10. Fase 4 → Tasks 8, 9, 11, 12. Contact form correctly excluded per spec. Open question (font delivery) surfaced in Task 12.
- **Composition safety:** Task 4 establishes `--orb-dx/--orb-dy` as a no-op before any task animates it, so drift (Task 5) and magnetic (Task 6) never fight `layoutTrackOrbs()`.
- **Single loop:** Tasks 5, 6, 8, 10 all extend the one `animateSystem` rAF — no competing timers, matching the spec's architecture principle.
