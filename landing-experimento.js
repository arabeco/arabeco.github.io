const tracks = {
  apps: {
    title: "Apps",
    text:
      "Glyph, Mind Practice, Elite50 e KingsWorld ficam como produtos digitais do Lab: apps, jogos e sistemas que podem virar publicação real.",
  },
  studio: {
    title: "Studio",
    text:
      "Studio é a camada visual, simbólica e narrativa do Lab: decks, cartas, vídeos, universos e sistemas de apresentação.",
  },
  info: {
    title: "Infoprodutos",
    text:
      "Mapa do Império: aulas gravadas e ficha digital para organizar sua vida, no seu ritmo.",
  },
};

const projects = {
  glyph: {
    track: "apps",
    title: "Glyph",
    image: "assets/glyph.jpg",
    level: 8,
    progress: 80,
    type: "Sistema de rotina",
    state: "Ciclos e progresso diário",
    siteUrl: "https://www.glyph.life/",
    githubUrl: "https://github.com/arabeco/game-of-life",
    text: "Projeto principal do laboratório: metas, rotina e progresso pessoal com lógica de construção de império.",
    slides: [
      ["Resumo", "GLYPH é um app de evolução pessoal gamificada que transforma objetivos, rotina e identidade em uma jornada estruturada."],
      ["Visão", "O usuário cria arenas da vida, executa ações, atravessa ciclos, desbloqueia campanhas, registra história e constrói legado."],
      ["Sistema", "Planner, Painel Diário, Ciclos, Relatórios, Histórico, Eras, Legado, Oráculo, Mundo Social, Clãs, Loja, Arsenal e Perfil Soberano trabalham como uma experiência única."],
      ["Estado", "Nível 8: refino forte, com foco em fechamento, validação e publicação."],
    ],
  },
  mind: {
    track: "apps",
    title: "Mind Practice",
    image: "assets/mindpractice.jpg",
    level: 8,
    progress: 80,
    type: "Simulador mental",
    state: "Calibração por escolhas",
    text: "Projeto sobre mente, reflexo e leitura de comportamento: escolhas rápidas revelando padrões reais.",
    slides: [
      ["Resumo", "Mind Practice é um simulador de reatividade social sob pressão, feito para treinar leitura e resposta."],
      ["Interface", "Situações sociais aparecem em modo imersivo; cada resposta altera traços comportamentais."],
      ["Sistema", "Cada sessão gera score, deslocamento de perfil e leitura de padrões de decisão."],
      ["Estado", "Nível 8: em refino, com testes e possíveis ajustes pendentes antes do lançamento."],
    ],
  },
  elite50: {
    track: "apps",
    title: "Elite50",
    image: "assets/elite50.jpg",
    level: 8,
    progress: 80,
    type: "Manager game",
    state: "Temporada e gestão",
    text: "Liga pensada como ecossistema competitivo: jogadores, meta, gestão e comunidade em torno da disputa.",
    slides: [
      ["Resumo", "Elite50 é um manager game mobile-first de futebol futurista em tempo real."],
      ["Visão", "O jogador comanda um clube vivo, com rotina curta, atmosfera premium e consequência real em elenco, score, tática e carreira."],
      ["Sistema", "Mundo, clube, elenco, tática, treino, mercado, notícias e partidas entram em um loop contínuo de temporada."],
      ["Estado", "Nível 8: em refino. Lançamento ainda não confirmado."],
    ],
  },
  kingsworld: {
    track: "apps",
    title: "KingsWorld",
    image: "assets/kingsworld.jpg",
    level: null,
    progress: 0,
    type: "Jogo persistente",
    state: "Mundo, cidades e influência",
    githubUrl: "https://github.com/kingsworldgame/King-s-World",
    text: "Mundo de reconstrução onde administrar recursos, proteger pessoas e expandir território fazem parte da mesma tensão.",
    slides: [
      ["Resumo", "KingsWorld é um jogo mobile de estratégia em mundos sazonais."],
      ["Visão", "Cada jogador lidera um reino, escolhe um rei, desenvolve cidades, recruta heróis, explora o mapa e tenta acumular influência."],
      ["Sistema", "Governo, Produção, Sociedade, Quartel e Muralha definem o crescimento real de cada cidade."],
      ["Estado", "Estágio inicial: infraestrutura e design em revisão."],
    ],
  },
  tarot: {
    track: "studio",
    title: "Tarot",
    image: "assets/tarot.jpg",
    level: null,
    progress: 0,
    type: "Sistema simbólico",
    state: "Publicação em preparação",
    text: "Deck autoral onde cada carta funciona como imagem, símbolo e fragmento de mundo.",
    slides: [
      ["Resumo", "Sistema simbólico baseado em cartas de tarot, com estrutura de arquétipos e interpretação."],
      ["Cartas visuais", "Cada carta funciona como imagem, símbolo e fragmento de mundo."],
      ["Sistema de leitura", "Combinação de cartas gera interpretação e reflexão."],
      ["Estado", "Publicação comercial em preparação; formato e plataforma ainda serão definidos."],
    ],
  },
  sabedoria: {
    track: "studio",
    title: "Studio / YouTube",
    image: "assets/sabedoriaanimada.jpg",
    level: null,
    progress: 0,
    type: "Canal visual",
    state: "Narrativa e conhecimento",
    text: "Produção de vídeos para os canais Sabedoria Animada e Frequências Sagradas.",
    slides: [
      ["Resumo", "Sabedoria Animada e Frequências Sagradas: duas frentes de produção para o YouTube."],
      ["Universo", "História, comportamento, filosofia, poder e mistérios entram em séries visuais."],
      ["Estrutura", "Cada vídeo conecta conceitos em uma linha maior e pode influenciar os próximos temas."],
      ["Estado", "Canais em desenvolvimento. Frequências Sagradas é um nome provisório."],
    ],
  },
  course: {
    track: "info",
    title: "Mapa do Império",
    image: "assets/becoslab.jpg",
    level: null,
    progress: 0,
    type: "Curso de organização pessoal",
    state: "Disponível na Hotmart",
    text: "Um percurso para organizar sua rotina, suas prioridades e seus próximos passos. Sete aulas gravadas e uma ficha digital para aplicar no seu ritmo.",
    slides: [
      ["Mapa do Império", "Um percurso para organizar sua rotina, suas prioridades e seus próximos passos. Sete aulas gravadas e uma ficha digital para aplicar no seu ritmo."],
      ["O que você recebe", "Sete aulas: Abertura, Identidade, Vigor, Ordem, Soberania, Integração e Coroação. Uma ficha digital reúne suas decisões e pode ser atualizada e exportada para PDF."],
      ["No seu ritmo", "Aulas gravadas para estudar de forma independente. O curso não inclui tutoria ou acompanhamento individual; o suporte é para dificuldades técnicas de acesso e arquivos."],
    ],
  },};

const panel = document.querySelector("#trackPanel");
const tabs = [...document.querySelectorAll("[data-track]")];
const orbs = [...document.querySelectorAll("[data-orb-track]")];
const resetButton = document.querySelector("[data-reset-lab]");
const projectBackButton = document.querySelector("[data-project-back]");
const labSystem = document.querySelector(".lab-system");
const screens = [...document.querySelectorAll(".snap-screen")];
const slideshow = document.querySelector("#experimentSlideshow");
const slideImage = document.querySelector("#slideImage");
const slideKicker = document.querySelector("#slideKicker");
const slideTitle = document.querySelector("#slideTitle");
const slideText = document.querySelector("#slideText");
const slideState = document.querySelector("#slideState");
const slideDots = document.querySelector("#slideDots");
const contactTopics = [...document.querySelectorAll("[data-contact-topic]")];
const contactTopicInput = document.querySelector("#contactTopicInput");
const contactTopicReadout = document.querySelector("#contactTopicReadout");
const contactName = document.querySelector("#contactName");
const contactEmail = document.querySelector("#contactEmail");
const sendAction = document.querySelector(".send-action");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");
let pointerX = null;
let pointerY = null;
let motionRunning = false;

let activeTrack = "";
let isAllMode = false;
let selectedProjectId = "";
let activeSlideProjectId = "";
let activeSlideIndex = 0;

function trackOrbAngle(trackId, index, total) {
  if (total <= 1) return -90;

  if (total === 2) {
    return trackId === "studio" ? [-160, 20][index] : [-140, 40][index];
  }

  const starts = {
    apps: -135,
    studio: -160,
    info: -90,
  };
  return (starts[trackId] ?? -120) + (360 / total) * index;
}

function layoutTrackOrbs(trackId = activeTrack, focusProjectId = selectedProjectId) {
  if (!trackId || !labSystem) return;

  const trackOrbs = orbs.filter((orb) => orb.dataset.orbTrack === trackId);
  const rect = labSystem.getBoundingClientRect();
  const isMobile = window.matchMedia("(max-width: 820px)").matches;
  const radiusX = Math.min(rect.width * (isMobile ? 0.34 : 0.31), isMobile ? 128 : 320);
  const radiusY = Math.min(
    Math.max(rect.height * (isMobile ? 0.42 : 0.34), isMobile ? 84 : 112),
    isMobile ? 96 : 132,
  );

  trackOrbs.forEach((orb, index) => {
    if (focusProjectId && orb.dataset.project === focusProjectId) {
      orb.style.setProperty("--orb-x", "0px");
      orb.style.setProperty("--orb-y", `${Math.round(-Math.max(radiusY * 0.62, isMobile ? 58 : 72))}px`);
      return;
    }

    const angle = (trackOrbAngle(trackId, index, trackOrbs.length) * Math.PI) / 180;
    const x = Math.cos(angle) * radiusX;
    const y = Math.sin(angle) * radiusY;
    orb.style.setProperty("--orb-x", `${Math.round(x)}px`);
    orb.style.setProperty("--orb-y", `${Math.round(y)}px`);
  });
}

function projectPhase(project) {
  const phases = [
    "Ideia",
    "Infraestrutura",
    "Design",
    "Fluxo",
    "Engine",
    "Persistência",
    "Conexão",
    "Refino",
    "Ataque",
    "Produto Vivo",
  ];
  return phases[Math.max(1, Math.min(10, Number(project.level) || 1)) - 1];
}

function resetToIdle() {
  if ("vibrate" in navigator) navigator.vibrate(4);
  activeTrack = "";
  isAllMode = false;
  selectedProjectId = "";
  panel.hidden = true;
  panel.classList.remove("is-project-panel", "is-entering");
  labSystem?.classList.remove("is-track-active", "is-project-open", "is-all-active");
  if (projectBackButton) projectBackButton.hidden = true;
  tabs.forEach((tab) => {
    tab.classList.remove("is-active");
    tab.setAttribute("aria-selected", "false");
  });
  orbs.forEach((orb) => {
    orb.classList.remove("is-visible", "is-selected", "is-dimmed");
    orb.setAttribute("aria-pressed", "false");
  });
}

function renderAll() {
  activeTrack = "";
  isAllMode = true;
  selectedProjectId = "";
  panel.hidden = false;
  panel.classList.remove("is-project-panel");
  panel.innerHTML = `
    <h2>Todos os sistemas</h2>
    <p>Apps, Studio e Infoprodutos no mesmo mapa. Clique em qualquer um para abrir.</p>
  `;
  animatePanel();
  labSystem?.classList.remove("is-project-open");
  labSystem?.classList.add("is-track-active", "is-all-active");
  labSystem?.removeAttribute("data-active-track");
  if (projectBackButton) projectBackButton.hidden = false;

  tabs.forEach((tab) => {
    tab.classList.remove("is-active");
    tab.setAttribute("aria-selected", "false");
  });

  orbs.forEach((orb, index) => {
    orb.classList.add("is-visible");
    orb.classList.remove("is-selected", "is-dimmed");
    orb.setAttribute("aria-pressed", "false");
    orb.style.setProperty("--orb-index", String(index));
  });
}

function animatePanel() {
  panel.classList.remove("is-entering");
  requestAnimationFrame(() => requestAnimationFrame(() => panel.classList.add("is-entering")));
}

function haptic(ms) {
  if ("vibrate" in navigator) navigator.vibrate(ms);
}

function staggerProjectBlocks() {
  const selectors = [
    ".project-detail-top",
    ".project-detail-hero",
    ".project-detail-desc",
    ".project-progress",
    ".project-detail-meta",
    ".project-detail-actions",
  ];
  const blocks = selectors
    .map((sel) => panel.querySelector(sel))
    .filter(Boolean);
  const STEP = 290;
  blocks.forEach((block, i) => {
    block.style.animationDelay = `${i * STEP}ms`;
    block.classList.add("is-staggered");
    setTimeout(() => haptic(20), i * STEP + 60);
  });
}

function goToWaitlist() {
  if (window.goToSection) window.goToSection(1);
  else document.querySelector("#contactScreen")?.scrollIntoView({ behavior: "smooth" });
  setContactTopic("Acompanhar");
}

function projectActionsHtml(project) {
  const isApp = project.track === "apps";
  const isInfo = project.track === "info";
  const downloadSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
  const linkSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

  const parts = [];
  parts.push(
    `<button class="panel-action" type="button" data-open-slides>Ver slides</button>`,
  );

  if (isApp) {
    const url = project.downloadUrl;
    if (url) {
      parts.push(
        `<span class="slide-icon-wrap"><a class="slide-icon-action" href="${url}" target="_blank" rel="noopener" aria-label="Baixar ${project.title}">${downloadSvg}</a><span class="slide-icon-tip">Baixar</span></span>`,
      );
    } else {
      parts.push(
        `<span class="slide-icon-wrap is-disabled"><button class="slide-icon-action is-disabled" type="button" disabled aria-label="Baixar ${project.title} em breve">${downloadSvg}</button><span class="slide-icon-tip">Em breve</span></span>`,
      );
    }
  } else if (isInfo) {
    parts.push(
      `<span class="slide-icon-wrap"><button class="slide-icon-action" type="button" data-go-waitlist aria-label="Avise-me quando ${project.title} lançar">${linkSvg}</button><span class="slide-icon-tip">Avise-me</span></span>`,
    );
  } else {
    const url = project.siteUrl;
    if (url) {
      parts.push(
        `<span class="slide-icon-wrap"><a class="slide-icon-action" href="${url}" target="_blank" rel="noopener" aria-label="Acessar ${project.title}">${linkSvg}</a><span class="slide-icon-tip">Acessar</span></span>`,
      );
    } else {
      parts.push(
        `<span class="slide-icon-wrap is-disabled"><button class="slide-icon-action is-disabled" type="button" disabled aria-label="Acessar ${project.title} em breve">${linkSvg}</button><span class="slide-icon-tip">Em breve</span></span>`,
      );
    }
  }

  return parts.join("");
}

function renderTrack(id) {
  const track = tracks[id] || tracks.apps;
  activeTrack = id;
  isAllMode = false;
  selectedProjectId = "";
  panel.hidden = false;
  panel.classList.remove("is-project-panel");
  panel.innerHTML = `
    <h2>${track.title}</h2>
    <p>${track.text}</p>
  `;
  animatePanel();
  labSystem?.classList.remove("is-project-open");
  labSystem?.classList.add("is-track-active", "is-all-active");
  labSystem?.setAttribute("data-active-track", id);
  if (projectBackButton) {
    projectBackButton.hidden = false;
  }

  tabs.forEach((tab) => {
    const active = tab.dataset.track === id;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

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

  layoutTrackOrbs(id);
}

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

function renderProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  if (!isAllMode && project.track !== activeTrack) {
    renderTrack(project.track);
  }

  selectedProjectId = projectId;
  labSystem?.classList.add("is-project-open");
  panel.hidden = false;
  panel.classList.add("is-project-panel");
  panel.innerHTML = `
    <header class="project-detail-top">
      <p class="project-kicker">${project.type}</p>
      <h2>${project.title}</h2>
    </header>
    <figure class="project-detail-hero" aria-hidden="true">
      <img src="${project.image}" alt="" />
    </figure>
    <div class="project-detail-body">
      <p class="project-detail-desc">${project.text}</p>
      <div class="project-progress" aria-label="Progresso de ${project.title}">
        <span>Nível ${project.level} - ${projectPhase(project)}</span>
        <strong>${project.progress}%</strong>
        <i style="--progress:${project.progress}%"></i>
      </div>
      <div class="project-detail-meta">
        <section><span>Tipo</span><strong>${project.type}</strong></section>
        <section><span>Estado</span><strong>${project.state}</strong></section>
      </div>
      <div class="project-detail-actions">
        ${projectActionsHtml(project)}
      </div>
    </div>
  `;
  animatePanel();
  if (projectBackButton) {
    projectBackButton.hidden = false;
  }

  orbs.forEach((orb) => {
    const selected = orb.dataset.project === projectId;
    const sameTrack = orb.dataset.orbTrack === project.track;
    if (isAllMode) {
      orb.classList.add("is-visible");
      orb.classList.toggle("is-selected", selected);
      orb.classList.toggle("is-dimmed", !selected);
    } else {
      orb.classList.toggle("is-visible", sameTrack);
      orb.classList.toggle("is-selected", selected);
      orb.classList.toggle("is-dimmed", sameTrack && !selected);
    }
    orb.setAttribute("aria-pressed", String(selected));
  });

  layoutTrackOrbs(project.track, projectId);
  panel.querySelector("[data-open-slides]")?.addEventListener("click", () => {
    haptic(8);
    openSlides(projectId);
  });
  panel.querySelector("[data-go-waitlist]")?.addEventListener("click", () => {
    haptic(6);
    goToWaitlist();
  });
  requestAnimationFrame(() => {
    drawConstellation(projectId);
    staggerProjectBlocks();
  });
}

function buildSlideActions(project) {
  if (project === projects.course) {
    return '<a class="presentation-cta" href="https://go.hotmart.com/R108095318H?dp=1" target="_blank" rel="noopener">Comprar na Hotmart</a>';
  }
  if (project.track === "apps") {
    return `${project.siteUrl ? `<a class="presentation-cta" href="${project.siteUrl}" target="_blank" rel="noopener">Conhecer ${project.title}</a>` : ""}<p class="presentation-status">Em desenvolvimento · lançamento ainda não confirmado</p>`;
  }
  const isApp = project.track === "apps";
  const url = isApp ? project.downloadUrl : project.siteUrl;
  const disabled = !url;
  const label = isApp ? "Baixar" : "Acessar";
  const tip = isApp ? "Em breve na loja" : "Em breve";

  const downloadSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
  const linkSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const icon = isApp ? downloadSvg : linkSvg;

  if (disabled) {
    return `
      <span class="slide-icon-wrap is-disabled">
        <button class="slide-icon-action is-disabled" type="button" disabled aria-label="${label} ${project.title} (${tip})" title="${tip}">${icon}</button>
        <span class="slide-icon-tip">${tip}</span>
      </span>
    `;
  }
  return `
    <span class="slide-icon-wrap">
      <a class="slide-icon-action" href="${url}" target="_blank" rel="noopener" aria-label="${label} ${project.title}">${icon}</a>
      <span class="slide-icon-tip">${label}</span>
    </span>
  `;
}

function renderSlides() {
  const project = projects[activeSlideProjectId];
  if (!project || !slideshow) return;

  const slides = project.slides || [];
  const slide = slides[activeSlideIndex] || slides[0];
  if (!slide) return;

  const [title, text] = slide;
  slideImage.src = project.image || "assets/becoslab.jpg";
  slideImage.alt = "";
  slideKicker.textContent = `${project.title} - Slide ${activeSlideIndex + 1} de ${slides.length}`;
  slideTitle.textContent = activeSlideIndex === 0 ? project.title : title;
  slideText.textContent = text;

  const isStateSlide = /estado/i.test(title) && Number.isInteger(project.level);
  slideState.hidden = !isStateSlide;
  slideState.innerHTML = isStateSlide
    ? `
      <div class="slide-state-card">
        <span>Nível ${project.level}</span>
        <strong>${projectPhase(project)}</strong>
        <i style="--progress:${project.progress}%"></i>
      </div>
    `
    : "";

  const prevBtn = document.querySelector("[data-prev-slide]");
  const nextBtn = document.querySelector("[data-next-slide]");
  if (prevBtn) prevBtn.disabled = activeSlideIndex === 0;
  if (nextBtn) nextBtn.disabled = activeSlideIndex >= slides.length - 1;

  const slideActions = document.querySelector("#slideActions");
  if (slideActions) {
    {
      slideActions.innerHTML = buildSlideActions(project);
      slideActions.hidden = false;
      slideActions.querySelector("[data-slide-waitlist]")?.addEventListener("click", () => {
        haptic(6);
        closeSlides();
        goToWaitlist();
      });
      slideActions.querySelectorAll(".slide-icon-action:not(.is-disabled)").forEach((el) => {
        el.addEventListener("click", () => haptic(8));
      });
    }
  }

  slideDots.innerHTML = slides
    .map(
      (_, index) =>
        `<button class="slide-dot${index === activeSlideIndex ? " is-active" : ""}" type="button" data-slide-index="${index}" aria-label="Ir para slide ${index + 1}"></button>`,
    )
    .join("");
  slideDots.querySelectorAll("[data-slide-index]").forEach((button) => {
    button.addEventListener("click", () => {
      activeSlideIndex = Number(button.dataset.slideIndex) || 0;
      renderSlides();
      slideDots.querySelector(`[data-slide-index="${activeSlideIndex}"]`)?.focus();
    });
  });
}

const projectSlugs = { course: "mapa-do-imperio", glyph: "glyph", elite50: "elite", mind: "mind-practice", kingsworld: "kingsworld", tarot: "tarot", sabedoria: "studio" };
const projectOrder = Object.keys(projectSlugs);
let presentationReturnFocus = null;

function openSlides(projectId, updateUrl = true) {
  if (!slideshow || !projects[projectId] || !projectSlugs[projectId]) return;
  const wasClosed = slideshow.hidden;
  if (wasClosed) presentationReturnFocus = document.activeElement;
  activeSlideProjectId = projectId;
  activeSlideIndex = 0;
  slideshow.hidden = false;
  document.querySelector("main").inert = true;
  document.body.classList.add("presentation-open");
  renderSlides();
  const copyButton = document.querySelector("[data-copy-project-link]");
  if (copyButton) copyButton.textContent = "Compartilhar ↗";
  document.title = `${projects[projectId].title} · Beco's Lab`;
  if (updateUrl && location.hash !== `#${projectSlugs[projectId]}`) {
    history.pushState(null, "", `#${projectSlugs[projectId]}`);
  }
  slideshow.scrollTop = 0;
  slideshow.querySelector(".presentation-window")?.scrollTo(0, 0);
  if (wasClosed) document.querySelector("[data-close-slides]").focus();
}

function closeSlides(updateUrl = true) {
  if (!slideshow) return;
  slideshow.hidden = true;
  document.querySelector("main").inert = false;
  document.body.classList.remove("presentation-open");
  document.title = "Beco's Lab";
  if (updateUrl) {
    history.pushState(null, "", location.pathname + location.search);
    renderAll();
  }
  if (presentationReturnFocus?.isConnected && presentationReturnFocus !== document.body) presentationReturnFocus.focus();
  else resetButton?.focus();
}

function syncPresentationRoute() {
  const slug = location.hash.slice(1);
  const id = projectOrder.find(key => projectSlugs[key] === slug);
  if (id) openSlides(id, false);
  else if (!slideshow.hidden) closeSlides(false);
}
window.addEventListener("hashchange", syncPresentationRoute);
window.addEventListener("popstate", syncPresentationRoute);

document.querySelector("[data-copy-project-link]")?.addEventListener("click", async event => {
  const button = event.currentTarget;
  try {
    if (navigator.share) {
      await navigator.share({ title: projects[activeSlideProjectId].title, url: location.href });
    } else {
      await navigator.clipboard.writeText(location.href);
      button.textContent = "Link copiado ✓";
    }
  } catch (error) {
    if (error.name !== "AbortError") button.textContent = "Copie o endereço do navegador";
  }
});
slideshow?.addEventListener("keydown", event => {
  if (event.key !== "Tab") return;
  const focusable = [...slideshow.querySelectorAll("button:not(:disabled), a[href]")].filter(el => el.getClientRects().length);
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

function moveSlide(direction) {
  const project = projects[activeSlideProjectId];
  if (!project?.slides?.length) return;
  const newIdx = activeSlideIndex + direction;
  if (newIdx < 0 || newIdx >= project.slides.length) return;
  activeSlideIndex = newIdx;
  if ("vibrate" in navigator) navigator.vibrate(5);
  renderSlides();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if ("vibrate" in navigator) navigator.vibrate(6);
    if (activeTrack === tab.dataset.track) renderAll();
    else renderTrack(tab.dataset.track);
  });
});

orbs.forEach((orb) => {
  orb.addEventListener("click", () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(8);
    }
    openSlides(orb.dataset.project);
  });
});

resetButton?.addEventListener("click", () => {
  if ("vibrate" in navigator) navigator.vibrate(6);
  renderAll();
});
projectBackButton?.addEventListener("click", () => {
  if (selectedProjectId) {
    if ("vibrate" in navigator) navigator.vibrate(4);
    if (isAllMode) renderAll();
    else renderTrack(activeTrack || "apps");
  } else {
    resetToIdle();
  }
});

function setContactTopic(topic) {
  if (!contactTopicInput || !contactTopicReadout) return;
  contactTopicInput.value = topic;
  contactTopicReadout.textContent = `Assunto: ${topic}`;
  contactTopics.forEach((button) => {
    const active = button.dataset.contactTopic === topic;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

contactTopics.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  button.addEventListener("click", () => {
    haptic(4);
    setContactTopic(button.dataset.contactTopic);
  });
});

sendAction?.addEventListener("click", () => {
  haptic(12);
  const topic = contactTopicInput?.value || "Contato";
  const name = contactName?.value.trim() || "";
  const email = contactEmail?.value.trim() || "";
  const subject = `Beco's Lab - ${topic}`;
  const body = [`Assunto: ${topic}`, name ? `Nome: ${name}` : "", email ? `E-mail: ${email}` : ""]
    .filter(Boolean)
    .join("\n");
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector("[data-destaque-project]")?.addEventListener("click", (event) => {
  const id = event.currentTarget?.dataset?.destaqueProject;
  if (id) {
    if ("vibrate" in navigator) navigator.vibrate(6);
    openSlides(id);
  }
});

document.querySelector("[data-close-slides]")?.addEventListener("click", () => closeSlides());
document.querySelector("[data-prev-slide]")?.addEventListener("click", () => moveSlide(-1));
document.querySelector("[data-next-slide]")?.addEventListener("click", () => moveSlide(1));

slideshow?.addEventListener("click", (event) => {
  if (event.target === slideshow) {
    closeSlides();
  }
});

(function setupSlideSwipe() {
  if (!slideshow) return;
  let startX = null;
  let startY = null;
  const THRESHOLD = 50;

  slideshow.addEventListener(
    "touchstart",
    (e) => {
      if (slideshow.hidden) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true },
  );

  slideshow.addEventListener(
    "touchend",
    (e) => {
      if (slideshow.hidden || startX === null) return;
      const dx = startX - e.changedTouches[0].clientX;
      const dy = startY - e.changedTouches[0].clientY;
      startX = null;
      startY = null;
      if (Math.abs(dx) < THRESHOLD) return;
      if (Math.abs(dx) < Math.abs(dy)) return;
      moveSlide(dx > 0 ? 1 : -1);
    },
    { passive: true },
  );
})();

window.addEventListener("keydown", (event) => {
  if (slideshow?.hidden === false && event.key === "Escape") {
    closeSlides();
  }
  if (slideshow?.hidden === false && event.key === "ArrowRight") {
    moveSlide(1);
  }
  if (slideshow?.hidden === false && event.key === "ArrowLeft") {
    moveSlide(-1);
  }
});

const initialTrack = new URLSearchParams(window.location.search).get("track");
if (initialTrack && tracks[initialTrack]) {
  renderTrack(initialTrack);
}

window.addEventListener("load", () => {
  if (window.location.hash === "#contactScreen") {
    document.querySelector("#contactScreen")?.scrollIntoView();
  }
});

window.addEventListener("resize", () => {
  layoutTrackOrbs(activeTrack, selectedProjectId);
});

// Native scrolling lets the grid hand off to the page at its boundaries.
window.goToSection = index => {
  const section = document.querySelectorAll(".snap-screen")[index];
  if (!section) return false;
  section.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

function visibleOrbs() {
  return orbs.filter((orb) => orb.classList.contains("is-visible"));
}

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

function animateSystem(now) {
  const t = now / 1000;

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

  if (labSystem?.classList.contains("is-project-open") && selectedProjectId) {
    drawConstellation(selectedProjectId);
  }

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

// Resolve direct links after all presentation controls are initialized.
syncPresentationRoute();

// Keep native scrolling, but show its indicator only while the surface moves.
const scrollIndicatorTimers = new WeakMap();
document.addEventListener("scroll", event => {
  const surface = event.target === document ? document.documentElement : event.target;
  if (!(surface instanceof Element)) return;
  surface.classList.add("is-scrolling");
  clearTimeout(scrollIndicatorTimers.get(surface));
  scrollIndicatorTimers.set(surface, setTimeout(() => {
    surface.classList.remove("is-scrolling");
  }, 850));
}, { capture: true, passive: true });
