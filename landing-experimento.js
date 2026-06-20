const tracks = {
  apps: {
    title: "Apps",
    text:
      "Glyph, Mind Practice, Elite50 e KingsWorld ficam como produtos digitais do Lab: apps, jogos e sistemas que podem virar publicacao real.",
  },
  studio: {
    title: "Studio",
    text:
      "Studio e a camada visual, simbolica e narrativa do Lab: decks, cartas, videos, universos e sistemas de apresentacao.",
  },
  info: {
    title: "Infoprodutos",
    text:
      "Produtos de conhecimento em construção: ficha de saúde, método de organização e curso guiado. Cadastre o e-mail para ser avisado quando lançar.",
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
    state: "Ciclos e progresso diario",
    siteUrl: "https://glyph.life",
    githubUrl: "https://github.com/arabeco/game-of-life",
    text: "Projeto principal do laboratorio: metas, rotina e progresso pessoal com logica de construcao de imperio.",
    slides: [
      ["Resumo", "GLYPH e um app de evolucao pessoal gamificada que transforma objetivos, rotina e identidade em uma jornada estruturada."],
      ["Visao", "O usuario cria arenas da vida, executa acoes, atravessa ciclos, desbloqueia campanhas, registra historia e constroi legado."],
      ["Sistema", "Planner, Painel Diario, Ciclos, Relatorios, Historico, Eras, Legado, Oraculo, Mundo Social, Clas, Loja, Arsenal e Perfil Soberano trabalham como uma experiencia unica."],
      ["Estado", "Nivel 8: refino forte, com foco em fechamento, validacao e publicacao."],
    ],
  },
  mind: {
    track: "apps",
    title: "Mind Practice",
    image: "assets/mindpractice.jpg",
    level: 6,
    progress: 60,
    type: "Simulador mental",
    state: "Calibracao por escolhas",
    text: "Projeto sobre mente, reflexo e leitura de comportamento: escolhas rapidas revelando padroes reais.",
    slides: [
      ["Resumo", "Mind Practice e um simulador de reatividade social sob pressao, feito para treinar leitura e resposta."],
      ["Interface", "Situacoes sociais aparecem em modo imersivo; cada resposta altera tracos comportamentais."],
      ["Sistema", "Cada sessao gera score, deslocamento de perfil e leitura de padroes de decisao."],
      ["Estado", "Nivel 6: refino, com estrutura madura ainda pedindo calibragem."],
    ],
  },
  elite50: {
    track: "apps",
    title: "Elite50",
    image: "assets/elite50.jpg",
    level: 4,
    progress: 40,
    type: "Manager game",
    state: "Temporada e gestao",
    text: "Liga pensada como ecossistema competitivo: jogadores, meta, gestao e comunidade em torno da disputa.",
    slides: [
      ["Resumo", "Elite50 e um manager game mobile-first de futebol futurista em tempo real."],
      ["Visao", "O jogador comanda um clube vivo, com rotina curta, atmosfera premium e consequencia real em elenco, score, tatica e carreira."],
      ["Sistema", "Mundo, clube, elenco, tatica, treino, mercado, noticias e partidas entram em um loop continuo de temporada."],
      ["Estado", "Nivel 4: sistema funcional crescendo para refino, billing e publicacao."],
    ],
  },
  kingsworld: {
    track: "apps",
    title: "KingsWorld",
    image: "assets/kingsworld.jpg",
    level: 4,
    progress: 40,
    type: "Jogo persistente",
    state: "Mundo, cidades e influencia",
    githubUrl: "https://github.com/kingsworldgame/King-s-World",
    text: "Mundo de reconstrucao onde administrar recursos, proteger pessoas e expandir territorio fazem parte da mesma tensao.",
    slides: [
      ["Resumo", "KingsWorld e um jogo mobile de estrategia em mundos sazonais."],
      ["Visao", "Cada jogador lidera um reino, escolhe um rei, desenvolve cidades, recruta herois, explora o mapa e tenta acumular influencia."],
      ["Sistema", "Governo, Producao, Sociedade, Quartel e Muralha definem o crescimento real de cada cidade."],
      ["Estado", "Nivel 4: base de mundo e produto em consolidacao."],
    ],
  },
  tarot: {
    track: "studio",
    title: "Tarot",
    image: "assets/tarot.jpg",
    level: 10,
    progress: 100,
    type: "Sistema simbolico",
    state: "Vivo",
    text: "Deck autoral onde cada carta funciona como imagem, simbolo e fragmento de mundo.",
    slides: [
      ["Resumo", "Sistema simbolico baseado em cartas de tarot, com estrutura de arquetipos e interpretacao."],
      ["Cartas visuais", "Cada carta funciona como imagem, simbolo e fragmento de mundo."],
      ["Sistema de leitura", "Combinacao de cartas gera interpretacao e reflexao."],
      ["Estado", "Nivel 10: vivo."],
    ],
  },
  mtg: {
    track: "studio",
    title: "MTG Dota",
    image: "assets/mtgdota.jpg",
    level: 9,
    progress: 90,
    type: "Sistema de cartas",
    state: "Polido",
    text: "Sistema visual de cartas que traduz personagens, poderes e itens em composicoes colecionaveis.",
    slides: [
      ["Resumo", "Sistema de criacao de cartas inspirado em Magic e Dota."],
      ["Interface de cartas", "Design e composicao visual de habilidades, atributos, custos e efeitos."],
      ["Aplicacao pratica", "Cartas prontas para uso digital ou fisico."],
      ["Estado", "Nivel 9: polido, proximo de vivo."],
    ],
  },
  sabedoria: {
    track: "studio",
    title: "Sabedoria Animada",
    image: "assets/sabedoriaanimada.jpg",
    level: 6,
    progress: 60,
    type: "Canal visual",
    state: "Narrativa e conhecimento",
    text: "Canal de conhecimento visual: ideias complexas traduzidas em narrativa.",
    slides: [
      ["Resumo", "Canal de videos sobre conhecimento e interpretacao do mundo."],
      ["Universo", "Historia, comportamento, filosofia, poder e misterios entram em series visuais."],
      ["Estrutura", "Cada video conecta conceitos em uma linha maior e pode influenciar os proximos temas."],
      ["Estado", "Nivel 6: refino e validacao."],
    ],
  },
  health: {
    track: "info",
    title: "Ficha saude",
    image: "assets/becoslab.jpg",
    level: 2,
    progress: 20,
    type: "Infoproduto",
    state: "Clareza pessoal",
    text: "Uma ficha organizada para acompanhar saude, sinais, historico e rotina sem virar app pesado.",
    slides: [
      ["Resumo", "Ficha pratica para organizar sinais, historico, rotina e informacoes de saude."],
      ["Formato", "Produto leve: pagina, PDF, checklist ou Notion, sem depender de app."],
      ["Estado", "Nivel 2: ideia clara, ainda precisa embalagem e conteudo final."],
    ],
  },
  life: {
    track: "info",
    title: "Organizar vida",
    image: "assets/becoslab.jpg",
    level: 2,
    progress: 20,
    type: "Metodo pratico",
    state: "Rotina e direcao",
    text: "Material para transformar caos em plano: areas da vida, prioridades, ciclos e acompanhamento.",
    slides: [
      ["Resumo", "Metodo para organizar areas da vida, prioridades e ciclos de execucao."],
      ["Uso", "Uma experiencia guiada para sair do abstrato e montar um plano acompanhavel."],
      ["Estado", "Nivel 2: promessa e estrutura inicial, falta material completo."],
    ],
  },
  course: {
    track: "info",
    title: "Curso",
    image: "assets/becoslab.jpg",
    level: 1,
    progress: 10,
    type: "Produto de conhecimento",
    state: "Conteudo guiado",
    text: "Oferta principal em formato de percurso, com aulas, fichas e checkpoints claros.",
    slides: [
      ["Resumo", "Curso como percurso principal dos infoprodutos do Lab."],
      ["Formato", "Aulas, fichas, checkpoints e entregaveis organizados por etapa."],
      ["Estado", "Nivel 1: espaco reservado, ainda em definicao de promessa e trilha."],
    ],
  },
};

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
    "Persistencia",
    "Conexao",
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

function goToWaitlist() {
  if (window.goToSection) window.goToSection(1);
  else document.querySelector("#contactScreen")?.scrollIntoView({ behavior: "smooth" });
  setContactTopic("Acompanhar");
}

function projectActionsHtml(project) {
  const parts = [];
  if (project.siteUrl) {
    parts.push(
      `<a class="panel-action" href="${project.siteUrl}" target="_blank" rel="noopener">Acessar</a>`,
    );
  }
  if (project.track === "info") {
    const cls = project.siteUrl ? " panel-action-secondary" : "";
    parts.push(
      `<button class="panel-action${cls}" type="button" data-go-waitlist>Avise-me quando lançar</button>`,
    );
  }
  const secondaryCls = project.siteUrl || project.track === "info" ? " panel-action-secondary" : "";
  parts.push(
    `<button class="panel-action${secondaryCls}" type="button" data-open-slides>Ver slides</button>`,
  );
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
  labSystem?.classList.remove("is-project-open", "is-all-active");
  labSystem?.classList.add("is-track-active");
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
        <span>Nivel ${project.level} - ${projectPhase(project)}</span>
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
  panel.querySelector("[data-open-slides]")?.addEventListener("click", () => openSlides(projectId));
  panel.querySelector("[data-go-waitlist]")?.addEventListener("click", goToWaitlist);
  requestAnimationFrame(() => drawConstellation(projectId));
}

function buildSlideActions(project) {
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
  slideTitle.textContent = title;
  slideText.textContent = text;

  const isStateSlide = /estado/i.test(title);
  slideState.hidden = !isStateSlide;
  slideState.innerHTML = isStateSlide
    ? `
      <div class="slide-state-card">
        <span>Nivel ${project.level}</span>
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
    if (activeSlideIndex === 0) {
      slideActions.innerHTML = buildSlideActions(project);
      slideActions.hidden = false;
      slideActions.querySelector("[data-slide-waitlist]")?.addEventListener("click", () => {
        closeSlides();
        goToWaitlist();
      });
    } else {
      slideActions.innerHTML = "";
      slideActions.hidden = true;
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
    });
  });
}

function openSlides(projectId) {
  if (!slideshow || !projects[projectId]) return;
  activeSlideProjectId = projectId;
  activeSlideIndex = 0;
  slideshow.hidden = false;
  renderSlides();
}

function closeSlides() {
  if (!slideshow) return;
  slideshow.hidden = true;
}

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
    renderTrack(tab.dataset.track);
  });
});

orbs.forEach((orb) => {
  orb.addEventListener("click", () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(8);
    }
    renderProject(orb.dataset.project);
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
  button.addEventListener("click", () => setContactTopic(button.dataset.contactTopic));
});

sendAction?.addEventListener("click", () => {
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

document.querySelector("[data-close-slides]")?.addEventListener("click", closeSlides);
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

(function setupPageNav() {
  const sections = [...document.querySelectorAll(".snap-screen")];
  if (sections.length < 2) return;

  let currentIdx = 0;
  let isAnimating = false;
  const ANIM_MS = 700;
  const SWIPE_THRESHOLD = 60;
  const WHEEL_THRESHOLD = 28;

  function goTo(idx) {
    if (idx < 0 || idx >= sections.length || isAnimating) return false;
    isAnimating = true;
    currentIdx = idx;
    sections[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      isAnimating = false;
    }, ANIM_MS);
    return true;
  }

  function shouldIgnoreEvent(target) {
    if (!target) return false;
    const tag = target.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
    if (target.closest && target.closest(".experiment-slideshow:not([hidden])")) return true;
    return false;
  }

  let wheelLock = 0;
  window.addEventListener(
    "wheel",
    (e) => {
      if (shouldIgnoreEvent(e.target)) return;
      e.preventDefault();
      if (isAnimating) return;
      const now = Date.now();
      if (now - wheelLock < 120) return;
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      wheelLock = now;
      goTo(currentIdx + (e.deltaY > 0 ? 1 : -1));
    },
    { passive: false },
  );

  let touchStartY = null;
  window.addEventListener(
    "touchstart",
    (e) => {
      if (isAnimating || shouldIgnoreEvent(e.target)) {
        touchStartY = null;
        return;
      }
      touchStartY = e.touches[0].clientY;
    },
    { passive: true },
  );

  window.addEventListener(
    "touchmove",
    (e) => {
      if (touchStartY !== null) e.preventDefault();
    },
    { passive: false },
  );

  window.addEventListener(
    "touchend",
    (e) => {
      if (touchStartY === null || isAnimating) return;
      const dy = touchStartY - e.changedTouches[0].clientY;
      touchStartY = null;
      if (Math.abs(dy) < SWIPE_THRESHOLD) return;
      goTo(currentIdx + (dy > 0 ? 1 : -1));
    },
    { passive: true },
  );

  window.addEventListener("keydown", (e) => {
    if (shouldIgnoreEvent(e.target)) return;
    if (e.key === "ArrowDown" || e.key === "PageDown") {
      e.preventDefault();
      goTo(currentIdx + 1);
    } else if (e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      goTo(currentIdx - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(sections.length - 1);
    }
  });

  window.goToSection = goTo;
})();

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
