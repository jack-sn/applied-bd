const expertiseData = {
  "business-transformation": {
    title: {
      en: "Business Transformation",

      de: "Business Transformation",
    },

    description: {
      en: "Align leadership, strategy and teams around one direction to make change sustainable and measurable.",

      de: "Führung, Strategie und Teams auf ein gemeinsames Ziel ausrichten, um Wandel nachhaltig und messbar zu gestalten.",
    },

    projects: {
      en: [
        {
          title: "Strategic Leadership Alignment",

          file: "fact-sheets-html/fact-sheet-applied-bd-strategic-leadership-alignment-en.html",
        },

        {
          title: "Efficiency and Strength in Closing",

          file: "fact-sheets-html/fact-sheet-applied-bd-efficiency-and-strength-in-closing-en.html",
        },
      ],

      de: [
        {
          title: "Interne Effizienz und vertriebliche Abschlußstärke",

          file: "fact-sheets-html/fact-sheet-applied-bd-interne-effizienz-und-vertriebliche-abschlußstärke-de.html",
        },

        {
          title: "Führungskräfte-Coaching",

          file: "fact-sheets-html/fact-sheet-führungskräfte-coaching-de.html",
        },
      ],
    },
  },

  "growth-market-development": {
    title: {
      en: "Growth & Market Development",

      de: "Wachstum & Marktentwicklung",
    },

    description: {
      en: "Sharpen customer focus, commercial execution and go-to-market initiatives to turn opportunity into growth.",

      de: "Kundenfokus, kommerzielle Umsetzung und Markteintrittsstrategien schärfen, um Chancen in Wachstum zu verwandeln.",
    },

    projects: {
      en: [
        {
          title: "Business Matching at Tradeshows",

          file: "fact-sheets-html/fact-sheet-applied-bd-business-matching-at-tradeshows-en.html",
        },

        {
          title: "Sales Potential Analysis",

          file: "fact-sheets-html/fact-sheet-applied-bd-sales-potential-analysis-en.html",
        },

        {
          title: "Increasing Customer Impact",

          file: "fact-sheets-html/fact-sheet-applied-bd-increasing-customer-impact-en.html",
        },

        {
          title: "Solution Selling Skills in the Exhibition Industry",

          file: "fact-sheets-html/fact-sheet-applied-bd-solution-selling-skills-in-the-exhibition-industry-2022-en.html",
        },
      ],

      de: [
        {
          title: "Vertriebspotential-Analyse",

          file: "fact-sheets-html/fact-sheet-vertriebspotential-analyse-de.html",
        },

        {
          title:
            "Verbesserung Ihrer Verkaufschancen in aktuellen B2B-Vertriebsprojekten WCS",

          file: "fact-sheets-html/fact-sheet-applied-bd-verbesserung-ihrer-verkaufschancen-in-aktuellen-b2b-vertriebsprojekten-wcs-de.html",
        },

        {
          title: "Eigene Wirkung auf Kunden steigern",

          file: "fact-sheets-html/fact-sheet-applied-bd-eigene-wirkung-auf-kunden-steigern-de.html",
        },
      ],
    },
  },

  "hr-excellence": {
    title: {
      en: "HR Excellence",

      de: "HR Excellence",
    },

    description: {
      en: "Build HR and leadership systems that strengthen talent, performance and organizational capability.",

      de: "HR- und Führungsstrukturen aufbauen, die Talent, Leistung und organisatorische Stärke fördern.",
    },

    projects: {
      en: [
        {
          title: "WCS Training",

          file: "fact-sheets-html/fact-sheet-applied-bd-wcs-training-en.html",
        },

        {
          title: "Executive Coaching",

          file: "fact-sheets-html/fact-sheet-executive-coaching-en2022.html",
        },

        {
          title: "HR Factsheet",

          file: "fact-sheets-html/hr-factsheet-en.html",
        },

        {
          title: "High Engagement Race",

          file: "fact-sheets-html/fact-sheet-high-engagement-race-en.html",
        },
      ],

      de: [
        {
          title: "High Engagement Race",

          file: "fact-sheets-html/fact-sheet-high-engagement-race-de.html",
        },
      ],
    },
  },
};

const uiText = {
  en: {
    heroEyebrow: "The Consulting Boutique",

    heroHeading:
      "Business meets HR — a modern consulting partner for growth, transformation and talent development.",

    heroPoints: [
      "Strategic business development",

      "Transformation & leadership alignment",

      "HR excellence & talent development",
    ],

    heroTalk: "Talk to us now",

    heroExplore: "Explore expertise",

    navTalk: "Talk to us",

    sectionIntro:
      "We turn practical expertise into business outcomes by matching leadership, market development and HR programs with measurable progress.",

    expertiseOverview: "Expertise overview",

    factSheetHeading: "See more about my work",

    modalNote: "",

    contactHeading: "Let’s get in touch!",

    contactText:
      "Send a mail, or call so we can get to know you better. We look forward to speaking with you.",

    contactSubmit: "Send message",

    labels: {
      mission: "Mission",

      expertise: "Expertise",

      consultants: "Consultants",

      references: "References",

      contact: "Contact",
    },
  },

  de: {
    heroEyebrow: "Die Beratungsboutique",

    heroHeading:
      "Business trifft HR — moderner Beratungs­partner für Wachstum, Transformation und Talententwicklung.",

    heroPoints: [
      "Strategische Geschäftsentwicklung",

      "Transformation & Führungsausrichtung",

      "HR-Exzellenz & Talententwicklung",
    ],

    heroTalk: "Jetzt sprechen",

    heroExplore: "Expertise entdecken",

    navTalk: "Kontakt",

    sectionIntro:
      "Wir setzen Erfahrung in messbare Ergebnisse um, indem wir Führung, Marktentwicklung und HR-Programme auf klare Ziele ausrichten.",

    expertiseOverview: "Expertenwissen Übersicht",

    factSheetHeading: "Mehr zu meiner Arbeit",

    modalNote: "",

    contactHeading: "Lassen Sie uns ins Gespräch kommen!",

    contactText:
      "Senden Sie eine Nachricht oder rufen Sie an, damit wir Sie besser kennenlernen können.",

    contactSubmit: "Nachricht senden",

    labels: {
      mission: "Mission",

      expertise: "Expertise",

      consultants: "Berater",

      references: "Referenzen",

      contact: "Kontakt",
    },
  },
};

const state = {
  lang: "en",
};

const elements = {
  modal: document.getElementById("expertise-modal"),

  modalTitle: document.getElementById("expertise-modal-title"),

  modalDescription: document.getElementById("expertise-modal-description"),

  modalProjects: document.getElementById("expertise-modal-projects"),

  modalLabel: document.getElementById("expertise-modal-label"),

  modalHeading: document.getElementById("expertise-modal-projects-heading"),

  modalNote: document.getElementById("expertise-modal-note"),

  factsheetModal: document.getElementById("factsheet-modal"),

  factsheetContent: document.getElementById("factsheet-modal-content"),

  langButtons: document.querySelectorAll(".lang-switch"),

  cards: document.querySelectorAll(".service-card[data-expertise]"),

  navTalk: document.getElementById("nav-talk"),

  navMission: document.getElementById("nav-mission"),

  navExpertise: document.getElementById("nav-expertise"),

  navConsultants: document.getElementById("nav-consultants"),

  navReferences: document.getElementById("nav-references"),

  navContact: document.getElementById("nav-contact"),

  heroEyebrow: document.getElementById("hero-eyebrow"),

  heroHeading: document.getElementById("hero-heading"),

  heroPoints: document.querySelectorAll("#hero-points li"),

  heroTalk: document.getElementById("hero-talk"),

  heroExplore: document.getElementById("hero-explore"),

  sectionIntro: document.getElementById("expertise-intro"),

  contactHeading: document.getElementById("contact-heading"),

  contactText: document.getElementById("contact-text"),

  contactSubmit: document.getElementById("contact-submit"),
};

function renderModal(expertiseKey) {
  const expertise = expertiseData[expertiseKey];

  if (!expertise) {
    return;
  }

  const language = state.lang;

  const title = expertise.title[language] || expertise.title.en;

  const description =
    expertise.description[language] || expertise.description.en;

  const projects = expertise.projects[language] || expertise.projects.en;

  elements.modalTitle.textContent = title;

  elements.modalDescription.textContent = description;

  elements.modalLabel.textContent = uiText[language].expertiseOverview;

  elements.modalHeading.textContent = uiText[language].factSheetHeading;

  elements.modalNote.textContent = uiText[language].modalNote;

  elements.modalProjects.innerHTML = projects

    .map((project) => {
      return `<li><button class="factsheet-link" data-file="${project.file}" data-title="${project.title.replace(/"/g, "&quot;")}">${project.title}</button></li>`;
    })

    .join("");

  // Attach event listeners to factsheet buttons

  document.querySelectorAll(".factsheet-link").forEach((button) => {
    button.addEventListener("click", () => {
      openFactsheet(button.dataset.file, button.dataset.title);
    });
  });

  elements.modal.classList.add("open");

  elements.modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function openFactsheet(filePath, title) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${filePath}`);

      return response.text();
    })

    .then((html) => {
      elements.factsheetContent.innerHTML = html;

      elements.factsheetModal.classList.add("open", "split-layout");

      elements.factsheetModal.setAttribute("aria-hidden", "false");

      elements.modal.classList.add("split-layout");
    })

    .catch((error) => {
      console.error("Error loading factsheet:", error);

      elements.factsheetContent.innerHTML =
        "<p>Error loading fact sheet. Please try again.</p>";

      elements.factsheetModal.classList.add("open", "split-layout");

      elements.factsheetModal.setAttribute("aria-hidden", "false");

      elements.modal.classList.add("split-layout");
    });
}

function closeFactsheet() {
  elements.factsheetModal.classList.remove("open");

  elements.factsheetModal.classList.remove("split-layout");

  elements.factsheetModal.setAttribute("aria-hidden", "true");

  elements.factsheetContent.innerHTML = "";

  // Remove split-layout from expertise modal when factsheet is closed

  elements.modal.classList.remove("split-layout");
}

function closeModal() {
  if (elements.factsheetModal.classList.contains("open")) {
    closeFactsheet();
  }

  elements.modal.classList.remove("open");

  elements.modal.classList.remove("split-layout");

  elements.modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

function setLanguage(lang) {
  state.lang = lang;

  document.documentElement.lang = lang;

  elements.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  if (elements.heroEyebrow) {
    elements.heroEyebrow.textContent = uiText[lang].heroEyebrow;
  }

  if (elements.heroHeading) {
    elements.heroHeading.textContent = uiText[lang].heroHeading;
  }

  if (elements.heroPoints.length) {
    uiText[lang].heroPoints.forEach((text, index) => {
      if (elements.heroPoints[index]) {
        elements.heroPoints[index].textContent = text;
      }
    });
  }

  if (elements.heroTalk) elements.heroTalk.textContent = uiText[lang].heroTalk;

  if (elements.heroExplore)
    elements.heroExplore.textContent = uiText[lang].heroExplore;

  if (elements.navTalk) elements.navTalk.textContent = uiText[lang].navTalk;

  if (elements.navMission)
    elements.navMission.textContent = uiText[lang].labels.mission;

  if (elements.navExpertise)
    elements.navExpertise.textContent = uiText[lang].labels.expertise;

  if (elements.navConsultants)
    elements.navConsultants.textContent = uiText[lang].labels.consultants;

  if (elements.navReferences)
    elements.navReferences.textContent = uiText[lang].labels.references;

  if (elements.navContact)
    elements.navContact.textContent = uiText[lang].labels.contact;

  if (elements.sectionIntro)
    elements.sectionIntro.textContent = uiText[lang].sectionIntro;

  if (elements.contactHeading)
    elements.contactHeading.textContent = uiText[lang].contactHeading;

  if (elements.contactText)
    elements.contactText.textContent = uiText[lang].contactText;

  if (elements.contactSubmit)
    elements.contactSubmit.textContent = uiText[lang].contactSubmit;
}

function installEventHandlers() {
  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  elements.cards.forEach((card) => {
    const expertiseKey = card.dataset.expertise;

    card.addEventListener("click", () => renderModal(expertiseKey));

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        renderModal(expertiseKey);
      }
    });
  });

  elements.modal.addEventListener("click", (event) => {
    if (
      event.target.dataset.close === "modal" ||
      event.target.classList.contains("modal-close")
    ) {
      closeModal();
    }
  });

  elements.factsheetModal.addEventListener("click", (event) => {
    if (
      event.target === elements.factsheetModal ||
      event.target.dataset.close === "factsheet" ||
      event.target.classList.contains("modal-close")
    ) {
      closeFactsheet();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (elements.factsheetModal.classList.contains("open")) {
        closeFactsheet();
      } else if (elements.modal.classList.contains("open")) {
        closeModal();
      }
    }
  });
}

function init() {
  installEventHandlers();

  setLanguage(state.lang);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
