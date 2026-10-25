const container = document.querySelector("#bioLinks");
for (const slot of window.BECOSLAB_LINKS.filter(slot => slot.enabled)) {
  let destination = null;
  try {
    const url = new URL(slot.url);
    if (["https:", "http:"].includes(url.protocol)) destination = url.href;
  } catch { /* An unconfirmed slot is deliberately not a link. */ }
  const card = document.createElement(destination ? "a" : "div");
  card.className = `bio-card ${slot.color}`;
  card.style.setProperty("--art", `url("${slot.background}")`);
  if (destination) card.href = destination;
  else card.setAttribute("aria-disabled", "true");
  const logo = document.createElement("img");
  logo.src = slot.logo;
  logo.alt = "";
  logo.width = 46;
  logo.height = 46;
  const copy = document.createElement("span");
  copy.className = "card-copy";
  const title = document.createElement("strong");
  title.textContent = slot.title;
  const subtitle = document.createElement("span");
  subtitle.textContent = slot.subtitle;
  copy.append(title, subtitle);
  const end = document.createElement("span");
  end.className = destination ? "card-arrow" : "card-pending";
  end.textContent = destination ? "↗" : "Em preparação";
  if (destination) end.setAttribute("aria-hidden", "true");
  else card.setAttribute("aria-label", `${slot.title} — link em preparação`);
  card.append(logo, copy, end);
  container.append(card);
}
