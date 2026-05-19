import { siteData as defaultSiteData } from "./data/site-data.js";

const STORAGE_KEY = "robocon-archive-site-data-v6";
const LANGUAGE_STORAGE_KEY = "robocon-archive-language-v1";
const IMAGE_MAX_DIMENSION = 1600;
const SUPPORTED_LANGUAGES = ["en", "mn"];

const uiText = {
  en: {
    titleSuffix: "Robocon Archive",
    brand: "ROBOCON ARCHIVE",
    navHome: "Home",
    navCompetitions: "Competitions",
    navReward: "Awards",
    navHistory: "History",
    navProjects: "Projects",
    navExperiments: "Experiments",
    navSupport: "Support",
    navTalarhal: "Thanks",
    editSite: "Edit Site",
    heroPrimaryAction: "Read the history",
    heroSecondaryAction: "See competitions",
    heroVisualLabel: "Home Visual",
    heroStatsLabel: "Quick Stats",
    competitionsKicker: "Competitions",
    competitionsTitle: "Seasons, venues, themes, and results",
    competitionsDescription:
      "Track the Robocon seasons that mattered, from qualifiers to the biggest stages, with themes, venues, and results.",
    rewardKicker: "Awards",
    rewardTitle: "Awards, placements, and recognition",
    rewardDescription:
      "Use this section for official awards, special mentions, finalist placements, engineering prizes, or certificates.",
    historyKicker: "History",
    historyTitle: "The years that changed the way you build",
    historyDescription:
      "Keep the story chronological. This is the section that shows how the work evolved over time.",
    projectsKicker: "Projects",
    projectsTitle: "Robots, mechanisms, and technical development",
    projectsDescription:
      "This section gathers the robots you built and the experiments that improved them.",
    experimentsKicker: "Experiments",
    experimentsTitle: "Trials and prototypes behind the final builds",
    experimentsDescription:
      "Keep the tests here instead of giving them their own top-level menu. This makes the story easier to follow.",
    supportKicker: "Support",
    supportTitle: "People and organizations that made the work possible",
    talarhalKicker: "Thanks",
    talarhalTitle: "Personal thanks",
    talarhalDescription:
      "This is where the site becomes personal. Thank mentors, teammates, family, sponsors, and anyone whose help mattered.",
    editorKicker: "Editor",
    editorTitle: "Content and images",
    editorDisclaimer:
      "Browser editing works without a backend. Uploaded images are stored locally in this browser unless you export the JSON or commit files into the repo.",
    editorClose: "Close",
    editorSave: "Save in browser",
    editorExport: "Export JSON",
    editorImport: "Import JSON",
    editorReset: "Reset",
    themeLabel: "Theme",
    resultLabel: "Result",
    visitLink: "Visit",
    emptyCompetitions: "Add competitions in the editor.",
    emptyRewards: "Add rewards in the editor.",
    emptyHistory: "Add history entries in the editor.",
    emptyProjects: "Add projects in the editor.",
    emptyExperiments: "Add experiments in the editor.",
    emptySupporters: "Add support organizations in the editor.",
    emptyThanks: "Add thanks entries in the editor.",
    homeImagePlaceholder: "Upload a home image in the editor.",
    competitionImagePlaceholder: "Upload a competition photo.",
    rewardImagePlaceholder: "Upload a reward image or certificate.",
    projectImagePlaceholder: "Upload a project image.",
    experimentImagePlaceholder: "Upload an experiment image.",
    supportImagePlaceholder: "Upload a logo or support image.",
    thanksImagePlaceholder: "Upload an image for this thanks entry.",
    saveSuccess: "Saved in this browser.",
    storageFull:
      "Browser storage is full. Export your JSON or reduce image size before saving again.",
    addSuccess: "added.",
    removeSuccess: "removed.",
    exportSuccess: "Content exported as JSON.",
    importSuccess: "JSON imported.",
    importFailure: "Could not import that JSON file.",
    imageProcessing: "Processing image...",
    imageUpdated: "updated.",
    imageUploadFailed: "Image upload failed.",
    resetConfirm: "Reset all browser-edited content back to the default sample data?",
    resetSuccess: "Content reset to defaults.",
    editorLanguageEnglish: "English",
    editorLanguageMongolian: "Монгол",
  },
  mn: {
    titleSuffix: "Робокон архив",
    brand: "ROBOCON ARCHIVE",
    navHome: "Нүүр",
    navCompetitions: "Тэмцээн",
    navReward: "Шагнал",
    navHistory: "Түүх",
    navProjects: "Төслүүд",
    navExperiments: "Туршилт",
    navSupport: "Дэмжигч",
    navTalarhal: "Талархал",
    editSite: "Сайт засах",
    heroPrimaryAction: "Түүхийг үзэх",
    heroSecondaryAction: "Тэмцээнүүдийг үзэх",
    heroVisualLabel: "Нүүр зураг",
    heroStatsLabel: "Товч үзүүлэлт",
    competitionsKicker: "Тэмцээн",
    competitionsTitle: "Улирал, байршил, сэдэв, үр дүн",
    competitionsDescription:
      "Энэ хэсэгт оролцсон Робоконы гол улирлуудыг, шалгаруулалтаас эхлээд томоохон шат хүртэл сэдэв, байршил, үр дүнтэй нь бүртгэнэ.",
    rewardKicker: "Шагнал",
    rewardTitle: "Шагнал, байр, үнэлгээ",
    rewardDescription:
      "Энэ хэсгийг албан ёсны шагнал, тусгай үнэлгээ, финалын байр, инженерийн шагнал эсвэл сертификатад ашиглана.",
    historyKicker: "Түүх",
    historyTitle: "Таны бүтээх арга барилыг өөрчилсөн он жилүүд",
    historyDescription:
      "Түүхээ цаг хугацааны дарааллаар хадгал. Энэ хэсэг ажил хэрхэн хувьссаныг харуулна.",
    projectsKicker: "Төслүүд",
    projectsTitle: "Робот, механизм, техникийн хөгжил",
    projectsDescription:
      "Энэ хэсэгт бүтээсэн робот, механизм болон тэднийг сайжруулсан туршилтуудыг хамтад нь харуулна.",
    experimentsKicker: "Туршилт",
    experimentsTitle: "Эцсийн бүтээлийн ард байсан сорилт ба прототипууд",
    experimentsDescription:
      "Туршилтыг тусдаа дээд цэс болгохын оронд төслүүдийн дор нэгтгэвэл түүхийг дагахад илүү ойлгомжтой болно.",
    supportKicker: "Дэмжигч байгууллага",
    supportTitle: "Энэ ажлыг боломжтой болгосон хүмүүс ба байгууллагууд",
    talarhalKicker: "Талархал",
    talarhalTitle: "Хувийн талархлын хэсэг",
    talarhalDescription:
      "Энд сайт илүү хувийн өнгө аястай болно. Зөвлөх, багийнхан, гэр бүл, ивээн тэтгэгч, тусалсан бүх хүндээ талархал илэрхийл.",
    editorKicker: "Редактор",
    editorTitle: "Контент ба зургууд",
    editorDisclaimer:
      "Хөтөч дээрх засвар нь backend шаарддаггүй. Оруулсан зургуудыг JSON экспортлох эсвэл репод commit хийх хүртэл зөвхөн энэ хөтөч дээр хадгална.",
    editorClose: "Хаах",
    editorSave: "Хөтөч дээр хадгалах",
    editorExport: "JSON экспортлох",
    editorImport: "JSON импортлох",
    editorReset: "Сэргээх",
    themeLabel: "Сэдэв",
    resultLabel: "Үр дүн",
    visitLink: "Үзэх",
    emptyCompetitions: "Редактороос тэмцээн нэмнэ үү.",
    emptyRewards: "Редактороос шагнал нэмнэ үү.",
    emptyHistory: "Редактороос түүхийн мөр нэмнэ үү.",
    emptyProjects: "Редактороос төсөл нэмнэ үү.",
    emptyExperiments: "Редактороос туршилт нэмнэ үү.",
    emptySupporters: "Редактороос дэмжигч байгууллага нэмнэ үү.",
    emptyThanks: "Редактороос талархлын мөр нэмнэ үү.",
    homeImagePlaceholder: "Редактороос нүүр зургийг оруулна уу.",
    competitionImagePlaceholder: "Тэмцээний зураг оруулна уу.",
    rewardImagePlaceholder: "Шагнал эсвэл сертификатын зураг оруулна уу.",
    projectImagePlaceholder: "Төслийн зураг оруулна уу.",
    experimentImagePlaceholder: "Туршилтын зураг оруулна уу.",
    supportImagePlaceholder: "Лого эсвэл дэмжлэгийн зураг оруулна уу.",
    thanksImagePlaceholder: "Энэ талархлын мөрт зураг оруулна уу.",
    saveSuccess: "Энэ хөтөч дээр хадгаллаа.",
    storageFull:
      "Хөтөчийн хадгалах зай дүүрсэн байна. JSON экспортлох эсвэл зургийн хэмжээг багасгаад дахин оролдоно уу.",
    addSuccess: "нэмэгдлээ.",
    removeSuccess: "устгагдлаа.",
    exportSuccess: "Контентыг JSON файлаар экспортлов.",
    importSuccess: "JSON амжилттай импортлов.",
    importFailure: "Энэ JSON файлыг импортлож чадсангүй.",
    imageProcessing: "Зураг боловсруулж байна...",
    imageUpdated: "шинэчлэгдлээ.",
    imageUploadFailed: "Зураг оруулахад алдаа гарлаа.",
    resetConfirm: "Хөтөч дээрх бүх засварыг анхны жишээ өгөгдөл рүү сэргээх үү?",
    resetSuccess: "Контентыг анхны өгөгдөл рүү сэргээв.",
    editorLanguageEnglish: "English",
    editorLanguageMongolian: "Монгол",
  },
};

const editorSchema = [
  {
    kind: "fields",
    title: "Home",
    description: "Hero text, identity, and home image.",
    fields: [
      { key: "owner", label: "Owner" },
      { key: "role", label: "Role", type: "localized" },
      { key: "heroTag", label: "Home label", type: "localized" },
      { key: "heroTitle", label: "Home title", type: "localizedTextarea" },
      { key: "heroSubtitle", label: "Home subtitle", type: "localizedTextarea" },
      { key: "heroImage", label: "Home image", type: "image" },
      { key: "footerNote", label: "Footer note", type: "localizedTextarea" },
    ],
  },
  {
    kind: "list",
    key: "stats",
    title: "Home Stats",
    description: "Quick numbers shown in the home panel.",
    itemLabel: "Stat",
    summaryKey: "label",
    fields: [
      { key: "value", label: "Value" },
      { key: "label", label: "Label", type: "localized" },
      { key: "note", label: "Note", type: "localizedTextarea" },
    ],
    createItem: () => ({
      value: "00",
      label: makeLocalized("New stat", "Шинэ үзүүлэлт"),
      note: makeLocalized("Explain what this number means.", "Энэ тоо ямар утгатайг тайлбарлана."),
    }),
  },
  {
    kind: "list",
    key: "competitions",
    title: "Competitions",
    description: "Competition entries, themes, locations, and results.",
    itemLabel: "Competition",
    summaryKey: "title",
    fields: [
      { key: "year", label: "Year" },
      { key: "title", label: "Competition title", type: "localized" },
      { key: "location", label: "Location", type: "localized" },
      { key: "theme", label: "Theme", type: "localized" },
      { key: "result", label: "Result", type: "localized" },
      { key: "summary", label: "Summary", type: "localizedTextarea" },
      { key: "image", label: "Competition image", type: "image" },
    ],
    createItem: () => ({
      year: "2026",
      title: makeLocalized("New competition", "Шинэ тэмцээн"),
      location: makeLocalized("City, Country", "Хот, Улс"),
      theme: makeLocalized("Competition theme", "Тэмцээний сэдэв"),
      result: makeLocalized("Team result", "Багийн үр дүн"),
      summary: makeLocalized(
        "Describe what happened in this competition season.",
        "Энэ тэмцээний улиралд юу болсныг тайлбарлана."
      ),
      image: "",
    }),
  },
  {
    kind: "list",
    key: "rewards",
    title: "Awards",
    description: "Awards, certificates, placements, and recognition.",
    itemLabel: "Award",
    summaryKey: "title",
    fields: [
      { key: "year", label: "Year" },
      { key: "title", label: "Award title", type: "localized" },
      { key: "event", label: "Event", type: "localized" },
      { key: "detail", label: "Detail", type: "localizedTextarea" },
      { key: "image", label: "Award image", type: "image" },
    ],
    createItem: () => ({
      year: "2026",
      title: makeLocalized("New award", "Шинэ шагнал"),
      event: makeLocalized("Event or organization", "Арга хэмжээ эсвэл байгууллага"),
      detail: makeLocalized(
        "Describe the result or recognition.",
        "Үр дүн эсвэл үнэлгээг тайлбарлана."
      ),
      image: "",
    }),
  },
  {
    kind: "list",
    key: "history",
    title: "History",
    description: "Chronological story entries.",
    itemLabel: "History entry",
    summaryKey: "title",
    fields: [
      { key: "year", label: "Year" },
      { key: "title", label: "Title", type: "localized" },
      { key: "impact", label: "Impact chip", type: "localized" },
      { key: "summary", label: "Summary", type: "localizedTextarea" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
    createItem: () => ({
      year: "2026",
      title: makeLocalized("New history entry", "Шинэ түүхийн мөр"),
      impact: makeLocalized("Milestone", "Чухал үе"),
      summary: makeLocalized(
        "Describe the turning point in your Robocon history.",
        "Робоконы түүхэн дэх эргэлтийн мөчийг тайлбарлана."
      ),
      tags: ["history", "milestone"],
    }),
  },
  {
    kind: "list",
    key: "projects",
    title: "Projects",
    description: "Robots, major mechanisms, and technical projects.",
    itemLabel: "Project",
    summaryKey: "name",
    fields: [
      { key: "name", label: "Project name", type: "localized" },
      { key: "season", label: "Season", type: "localized" },
      { key: "focus", label: "Focus", type: "localized" },
      { key: "description", label: "Description", type: "localizedTextarea" },
      { key: "outcome", label: "Outcome", type: "localizedTextarea" },
      { key: "image", label: "Project image", type: "image" },
    ],
    createItem: () => ({
      name: makeLocalized("New project", "Шинэ төсөл"),
      season: makeLocalized("Season", "Улирал"),
      focus: makeLocalized("Main focus", "Үндсэн чиглэл"),
      description: makeLocalized("Describe the project or robot.", "Төсөл эсвэл роботыг тайлбарлана."),
      outcome: makeLocalized("Describe the outcome or lesson.", "Үр дүн эсвэл сургамжийг тайлбарлана."),
      image: "",
    }),
  },
  {
    kind: "list",
    key: "experiments",
    title: "Experiments / Turshlaga",
    description: "Tests, prototypes, and failed ideas worth documenting.",
    itemLabel: "Experiment",
    summaryKey: "name",
    fields: [
      { key: "name", label: "Experiment name", type: "localized" },
      { key: "area", label: "Area", type: "localized" },
      { key: "summary", label: "Summary", type: "localizedTextarea" },
      { key: "takeaway", label: "Takeaway", type: "localizedTextarea" },
      { key: "image", label: "Experiment image", type: "image" },
    ],
    createItem: () => ({
      name: makeLocalized("New experiment", "Шинэ туршилт"),
      area: makeLocalized("Test area", "Туршилтын чиглэл"),
      summary: makeLocalized("Describe what was tested.", "Юуг туршсаныг тайлбарлана."),
      takeaway: makeLocalized("Describe what was learned.", "Юу сурсан тухай тайлбарлана."),
      image: "",
    }),
  },
  {
    kind: "list",
    key: "supporters",
    title: "Support / Demjigch Baiguullaga",
    description: "Organizations and groups that supported the work.",
    itemLabel: "Support entry",
    summaryKey: "name",
    fields: [
      { key: "name", label: "Name", type: "localized" },
      { key: "type", label: "Support type", type: "localized" },
      { key: "contribution", label: "Contribution", type: "localizedTextarea" },
      { key: "link", label: "Website link" },
      { key: "image", label: "Support image", type: "image" },
    ],
    createItem: () => ({
      name: makeLocalized("New supporter", "Шинэ дэмжигч"),
      type: makeLocalized("Support type", "Дэмжлэгийн төрөл"),
      contribution: makeLocalized(
        "Describe how this organization supported the work.",
        "Энэ байгууллага ажлыг хэрхэн дэмжсэнийг тайлбарлана."
      ),
      link: "",
      image: "",
    }),
  },
  {
    kind: "list",
    key: "acknowledgements",
    title: "Talarhal",
    description: "Direct thanks to people and groups who mattered.",
    itemLabel: "Thanks entry",
    summaryKey: "name",
    fields: [
      { key: "name", label: "Name", type: "localized" },
      { key: "role", label: "Role or relation", type: "localized" },
      { key: "message", label: "Message", type: "localizedTextarea" },
      { key: "image", label: "Image", type: "image" },
    ],
    createItem: () => ({
      name: makeLocalized("New thanks", "Шинэ талархал"),
      role: makeLocalized("Role or relation", "Холбоо эсвэл үүрэг"),
      message: makeLocalized("Write the thanks message here.", "Талархлын мессежийг энд бичнэ үү."),
      image: "",
    }),
  },
];

let currentLanguage = loadLanguage();
let currentData = loadData();
let statusTimeoutId = null;

const dom = {
  brandLabel: document.getElementById("brand-label"),
  navHome: document.getElementById("nav-home"),
  navCompetitions: document.getElementById("nav-competitions"),
  navReward: document.getElementById("nav-reward"),
  navHistory: document.getElementById("nav-history"),
  navProjects: document.getElementById("nav-projects"),
  navExperiments: document.getElementById("nav-experiments"),
  navSupport: document.getElementById("nav-support"),
  navTalarhal: document.getElementById("nav-talarhal"),
  langEn: document.getElementById("lang-en"),
  langMn: document.getElementById("lang-mn"),
  heroTag: document.getElementById("hero-tag"),
  heroPersona: document.getElementById("hero-persona"),
  heroTitle: document.getElementById("hero-title"),
  heroSubtitle: document.getElementById("hero-subtitle"),
  heroPrimaryAction: document.getElementById("hero-primary-action"),
  heroSecondaryAction: document.getElementById("hero-secondary-action"),
  heroVisualLabel: document.getElementById("hero-visual-label"),
  heroStatsLabel: document.getElementById("hero-stats-label"),
  competitionsKicker: document.getElementById("competitions-kicker"),
  competitionsTitle: document.getElementById("competitions-title"),
  competitionsDescription: document.getElementById("competitions-description"),
  rewardKicker: document.getElementById("reward-kicker"),
  rewardTitle: document.getElementById("reward-title"),
  rewardDescription: document.getElementById("reward-description"),
  historyKicker: document.getElementById("history-kicker"),
  historyTitle: document.getElementById("history-title"),
  historyDescription: document.getElementById("history-description"),
  projectsKicker: document.getElementById("projects-kicker"),
  projectsTitle: document.getElementById("projects-title"),
  projectsDescription: document.getElementById("projects-description"),
  experimentsKicker: document.getElementById("experiments-kicker"),
  experimentsTitle: document.getElementById("experiments-title"),
  experimentsDescription: document.getElementById("experiments-description"),
  supportKicker: document.getElementById("support-kicker"),
  supportTitle: document.getElementById("support-title"),
  talarhalKicker: document.getElementById("talarhal-kicker"),
  talarhalTitle: document.getElementById("talarhal-title"),
  talarhalDescription: document.getElementById("talarhal-description"),
  footerNote: document.getElementById("footer-note"),
  heroMedia: document.getElementById("hero-media"),
  statsGrid: document.getElementById("stats-grid"),
  competitionGrid: document.getElementById("competition-grid"),
  rewardGrid: document.getElementById("reward-grid"),
  historyList: document.getElementById("history-list"),
  projectGrid: document.getElementById("project-grid"),
  experimentGrid: document.getElementById("experiment-grid"),
  supportGrid: document.getElementById("support-grid"),
  thanksGrid: document.getElementById("thanks-grid"),
  timelineFill: document.getElementById("timeline-fill"),
  historySection: document.getElementById("history"),
  editorDrawer: document.getElementById("editor-drawer"),
  editorToggle: document.getElementById("editor-toggle"),
  editorKicker: document.getElementById("editor-kicker"),
  editorTitle: document.getElementById("editor-title"),
  editorDisclaimer: document.getElementById("editor-disclaimer"),
  editorClose: document.getElementById("editor-close"),
  editorSections: document.getElementById("editor-sections"),
  editorSave: document.getElementById("editor-save"),
  editorExport: document.getElementById("editor-export"),
  editorImportText: document.getElementById("editor-import-text"),
  editorReset: document.getElementById("editor-reset"),
  editorImport: document.getElementById("editor-import"),
  editorStatus: document.getElementById("editor-status"),
  metaDescription: document.querySelector('meta[name="description"]'),
};

function makeLocalized(enValue, mnValue) {
  return {
    en: enValue,
    mn: mnValue,
  };
}

function cloneData(value) {
  if (value === undefined) {
    return undefined;
  }

  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isLocalizedObject(value) {
  return isPlainObject(value) && ("en" in value || "mn" in value);
}

function loadLanguage() {
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(stored) ? stored : "en";
}

function persistLanguage() {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
}

function translate(key) {
  return uiText[currentLanguage][key] || uiText.en[key] || "";
}

function getLocalizedValue(value) {
  if (isLocalizedObject(value)) {
    return value[currentLanguage] || value.en || value.mn || "";
  }

  if (value === undefined || value === null) {
    return "";
  }

  return String(value);
}

function normalizeLocalizedValue(value) {
  if (isLocalizedObject(value)) {
    return {
      en: value.en || "",
      mn: value.mn || "",
    };
  }

  if (typeof value === "string") {
    return {
      en: value,
      mn: "",
    };
  }

  return {
    en: "",
    mn: "",
  };
}

function mergeWithDefaults(defaultValue, incomingValue) {
  if (isLocalizedObject(defaultValue)) {
    if (isLocalizedObject(incomingValue)) {
      return {
        en: incomingValue.en ?? defaultValue.en ?? "",
        mn: incomingValue.mn ?? defaultValue.mn ?? "",
      };
    }

    if (typeof incomingValue === "string") {
      return {
        en: incomingValue,
        mn: defaultValue.mn ?? "",
      };
    }

    return cloneData(defaultValue);
  }

  if (Array.isArray(defaultValue)) {
    if (!Array.isArray(incomingValue)) {
      return cloneData(defaultValue);
    }

    if (defaultValue.length === 0) {
      return cloneData(incomingValue);
    }

    const template = defaultValue[0];
    return incomingValue.map((item) =>
      isPlainObject(template) || isLocalizedObject(template)
        ? mergeWithDefaults(template, item)
        : item
    );
  }

  if (isPlainObject(defaultValue)) {
    const result = {};
    const source = isPlainObject(incomingValue) ? incomingValue : {};
    const keys = new Set([...Object.keys(defaultValue), ...Object.keys(source)]);

    keys.forEach((key) => {
      if (key in defaultValue) {
        result[key] = mergeWithDefaults(defaultValue[key], source[key]);
      } else {
        result[key] = cloneData(source[key]);
      }
    });

    return result;
  }

  return incomingValue === undefined || incomingValue === null ? defaultValue : incomingValue;
}

function loadData() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return cloneData(defaultSiteData);
    }

    return mergeWithDefaults(defaultSiteData, JSON.parse(raw));
  } catch (error) {
    console.error("Failed to load saved site data:", error);
    return cloneData(defaultSiteData);
  }
}

function announceStatus(message) {
  dom.editorStatus.textContent = message;
  window.clearTimeout(statusTimeoutId);
  statusTimeoutId = window.setTimeout(() => {
    dom.editorStatus.textContent = "";
  }, 3200);
}

function persistData(silent = true) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    if (!silent) {
      announceStatus(translate("saveSuccess"));
    }
    return true;
  } catch (error) {
    console.error("Failed to persist site data:", error);
    announceStatus(translate("storageFull"));
    return false;
  }
}

function element(tagName, className, textContent) {
  const node = document.createElement(tagName);
  if (className) {
    node.className = className;
  }
  if (textContent !== undefined) {
    node.textContent = textContent;
  }
  return node;
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function setNodeText(node, value) {
  if (node) {
    node.textContent = value;
  }
}

function createImageShell(source, altText, shellClass, mediaClass, placeholderText) {
  const shell = element("div", shellClass);

  if (source) {
    const image = new Image();
    image.className = mediaClass;
    image.src = source;
    image.alt = altText;
    shell.appendChild(image);
  } else {
    shell.appendChild(element("div", `${mediaClass} media-placeholder`, placeholderText));
  }

  return shell;
}

function applyLanguageChrome() {
  document.documentElement.lang = currentLanguage;
  document.title = `${currentData.owner || "Robocon"} | ${translate("titleSuffix")}`;

  if (dom.metaDescription) {
    dom.metaDescription.content = getLocalizedValue(currentData.heroSubtitle);
  }

  setNodeText(dom.brandLabel, translate("brand"));
  setNodeText(dom.navHome, translate("navHome"));
  setNodeText(dom.navCompetitions, translate("navCompetitions"));
  setNodeText(dom.navReward, translate("navReward"));
  setNodeText(dom.navHistory, translate("navHistory"));
  setNodeText(dom.navProjects, translate("navProjects"));
  setNodeText(dom.navExperiments, translate("navExperiments"));
  setNodeText(dom.navSupport, translate("navSupport"));
  setNodeText(dom.navTalarhal, translate("navTalarhal"));
  setNodeText(dom.editorToggle, translate("editSite"));
  setNodeText(dom.heroPrimaryAction, translate("heroPrimaryAction"));
  setNodeText(dom.heroSecondaryAction, translate("heroSecondaryAction"));
  setNodeText(dom.heroVisualLabel, translate("heroVisualLabel"));
  setNodeText(dom.heroStatsLabel, translate("heroStatsLabel"));
  setNodeText(dom.competitionsKicker, translate("competitionsKicker"));
  setNodeText(dom.competitionsTitle, translate("competitionsTitle"));
  setNodeText(dom.competitionsDescription, translate("competitionsDescription"));
  setNodeText(dom.rewardKicker, translate("rewardKicker"));
  setNodeText(dom.rewardTitle, translate("rewardTitle"));
  setNodeText(dom.rewardDescription, translate("rewardDescription"));
  setNodeText(dom.historyKicker, translate("historyKicker"));
  setNodeText(dom.historyTitle, translate("historyTitle"));
  setNodeText(dom.historyDescription, translate("historyDescription"));
  setNodeText(dom.projectsKicker, translate("projectsKicker"));
  setNodeText(dom.projectsTitle, translate("projectsTitle"));
  setNodeText(dom.projectsDescription, translate("projectsDescription"));
  setNodeText(dom.experimentsKicker, translate("experimentsKicker"));
  setNodeText(dom.experimentsTitle, translate("experimentsTitle"));
  setNodeText(dom.experimentsDescription, translate("experimentsDescription"));
  setNodeText(dom.supportKicker, translate("supportKicker"));
  setNodeText(dom.supportTitle, translate("supportTitle"));
  setNodeText(dom.talarhalKicker, translate("talarhalKicker"));
  setNodeText(dom.talarhalTitle, translate("talarhalTitle"));
  setNodeText(dom.talarhalDescription, translate("talarhalDescription"));
  setNodeText(dom.editorKicker, translate("editorKicker"));
  setNodeText(dom.editorTitle, translate("editorTitle"));
  setNodeText(dom.editorDisclaimer, translate("editorDisclaimer"));
  setNodeText(dom.editorClose, translate("editorClose"));
  setNodeText(dom.editorSave, translate("editorSave"));
  setNodeText(dom.editorExport, translate("editorExport"));
  setNodeText(dom.editorImportText, translate("editorImport"));
  setNodeText(dom.editorReset, translate("editorReset"));

  dom.langEn.classList.toggle("is-active", currentLanguage === "en");
  dom.langMn.classList.toggle("is-active", currentLanguage === "mn");
  dom.langEn.setAttribute("aria-pressed", String(currentLanguage === "en"));
  dom.langMn.setAttribute("aria-pressed", String(currentLanguage === "mn"));
}

function renderPage() {
  applyLanguageChrome();

  setNodeText(dom.heroTag, getLocalizedValue(currentData.heroTag));
  setNodeText(
    dom.heroPersona,
    [currentData.owner, getLocalizedValue(currentData.role)].filter(Boolean).join(" · ")
  );
  setNodeText(dom.heroTitle, getLocalizedValue(currentData.heroTitle));
  setNodeText(dom.heroSubtitle, getLocalizedValue(currentData.heroSubtitle));
  setNodeText(dom.footerNote, getLocalizedValue(currentData.footerNote));

  renderHeroMedia();

  renderStats();
  renderHistory();
  renderCompetitions();
  renderProjects();
  renderExperiments();
  renderRewards();
  renderSupporters();
  renderThanks();
  updateTimelineProgress();
}

function renderHeroMedia() {
  clearNode(dom.heroMedia);

  const collage = element("div", "hero-collage");
  const mainImage = createImageShell(
    currentData.heroImage,
    `${currentData.owner || "Robocon"} home image`,
    "hero-media-shell hero-media-primary",
    "hero-media-image",
    translate("homeImagePlaceholder")
  );
  const secondaryImage = createImageShell(
    "./docs/aidlc/images/2019/Robocon_2019_Quarter_Finals.jpg",
    "Robocon 2019 quarter finals",
    "hero-media-shell hero-media-secondary",
    "hero-media-image",
    translate("competitionImagePlaceholder")
  );

  const logoStack = element("div", "hero-logo-stack");
  const logoOne = new Image();
  logoOne.src = "./docs/aidlc/images/brand/logo-sict-solo.png";
  logoOne.alt = "SICT logo";
  logoOne.className = "hero-logo-stack-mark is-tall";

  const logoTwo = new Image();
  logoTwo.src = "./docs/aidlc/images/brand/logo-robocon-head.png";
  logoTwo.alt = "ABU Robocon logo";
  logoTwo.className = "hero-logo-stack-mark";

  logoStack.append(logoOne, logoTwo);
  collage.append(mainImage, secondaryImage, logoStack);
  dom.heroMedia.appendChild(collage);
}

function renderStats() {
  clearNode(dom.statsGrid);

  currentData.stats.forEach((stat) => {
    const card = element("article", "stat-card");
    card.appendChild(element("span", "stat-value", stat.value));
    card.appendChild(element("span", "stat-label", getLocalizedValue(stat.label)));
    card.appendChild(element("p", "stat-note", getLocalizedValue(stat.note)));
    dom.statsGrid.appendChild(card);
  });
}

function renderEmptyState(container, messageKey) {
  const card = element("article", "empty-card");
  card.appendChild(element("p", "", translate(messageKey)));
  container.appendChild(card);
}

function appendMetaChips(container, chips) {
  const meta = element("div", "card-meta");

  chips
    .map((chip) => getLocalizedValue(chip))
    .filter(Boolean)
    .forEach((chip, index) => {
      meta.appendChild(element("span", index === 0 ? "timeline-year" : "impact-chip", chip));
    });

  container.appendChild(meta);
}

function renderCompetitions() {
  clearNode(dom.competitionGrid);

  if (!currentData.competitions.length) {
    renderEmptyState(dom.competitionGrid, "emptyCompetitions");
    return;
  }

  currentData.competitions.forEach((competition) => {
    const card = element("article", "competition-card");
    card.appendChild(
      createImageShell(
        competition.image,
        getLocalizedValue(competition.title),
        "section-media-shell",
        "section-media-image",
        translate("competitionImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [competition.year, competition.location]);
    body.appendChild(element("h3", "", getLocalizedValue(competition.title)));
    body.appendChild(element("p", "", getLocalizedValue(competition.summary)));
    body.appendChild(
      element(
        "p",
        "section-note",
        `${translate("themeLabel")}: ${getLocalizedValue(competition.theme)}`
      )
    );
    body.appendChild(
      element(
        "p",
        "section-note",
        `${translate("resultLabel")}: ${getLocalizedValue(competition.result)}`
      )
    );
    card.appendChild(body);
    dom.competitionGrid.appendChild(card);
  });
}

function renderRewards() {
  clearNode(dom.rewardGrid);

  if (!currentData.rewards.length) {
    renderEmptyState(dom.rewardGrid, "emptyRewards");
    return;
  }

  currentData.rewards.forEach((reward) => {
    const card = element("article", "reward-card");
    card.appendChild(
      createImageShell(
        reward.image,
        getLocalizedValue(reward.title),
        "section-media-shell",
        "section-media-image",
        translate("rewardImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [reward.year, reward.event]);
    body.appendChild(element("h3", "", getLocalizedValue(reward.title)));
    body.appendChild(element("p", "", getLocalizedValue(reward.detail)));
    card.appendChild(body);
    dom.rewardGrid.appendChild(card);
  });
}

function renderHistory() {
  clearNode(dom.historyList);

  if (!currentData.history.length) {
    renderEmptyState(dom.historyList, "emptyHistory");
    return;
  }

  currentData.history.forEach((item) => {
    const card = element("article", "timeline-card");
    const meta = element("div", "timeline-meta");
    meta.appendChild(element("span", "timeline-year", item.year));
    meta.appendChild(element("span", "impact-chip", getLocalizedValue(item.impact)));
    card.appendChild(meta);
    card.appendChild(element("h3", "", getLocalizedValue(item.title)));
    card.appendChild(element("p", "timeline-copy", getLocalizedValue(item.summary)));

    const tagRow = element("div", "tag-row");
    (Array.isArray(item.tags) ? item.tags : []).forEach((tag) => {
      tagRow.appendChild(element("span", "tag", tag));
    });
    card.appendChild(tagRow);
    dom.historyList.appendChild(card);
  });
}

function renderProjects() {
  clearNode(dom.projectGrid);

  if (!currentData.projects.length) {
    renderEmptyState(dom.projectGrid, "emptyProjects");
    return;
  }

  currentData.projects.forEach((project) => {
    const card = element("article", "project-card");
    card.appendChild(
      createImageShell(
        project.image,
        getLocalizedValue(project.name),
        "section-media-shell",
        "section-media-image",
        translate("projectImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [project.season, project.focus]);
    body.appendChild(element("h3", "", getLocalizedValue(project.name)));
    body.appendChild(element("p", "", getLocalizedValue(project.description)));
    body.appendChild(element("p", "section-note", getLocalizedValue(project.outcome)));
    card.appendChild(body);
    dom.projectGrid.appendChild(card);
  });
}

function renderExperiments() {
  clearNode(dom.experimentGrid);

  if (!currentData.experiments.length) {
    renderEmptyState(dom.experimentGrid, "emptyExperiments");
    return;
  }

  currentData.experiments.forEach((experiment) => {
    const card = element("article", "experiment-card");
    card.appendChild(
      createImageShell(
        experiment.image,
        getLocalizedValue(experiment.name),
        "section-media-shell",
        "section-media-image",
        translate("experimentImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [experiment.area]);
    body.appendChild(element("h3", "", getLocalizedValue(experiment.name)));
    body.appendChild(element("p", "", getLocalizedValue(experiment.summary)));
    body.appendChild(element("p", "section-note", getLocalizedValue(experiment.takeaway)));
    card.appendChild(body);
    dom.experimentGrid.appendChild(card);
  });
}

function renderSupporters() {
  clearNode(dom.supportGrid);

  if (!currentData.supporters.length) {
    renderEmptyState(dom.supportGrid, "emptySupporters");
    return;
  }

  currentData.supporters.forEach((supporter) => {
    const card = element("article", "support-card");
    card.appendChild(
      createImageShell(
        supporter.image,
        getLocalizedValue(supporter.name),
        "section-media-shell",
        "section-media-image",
        translate("supportImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [supporter.type]);
    body.appendChild(element("h3", "", getLocalizedValue(supporter.name)));
    body.appendChild(element("p", "", getLocalizedValue(supporter.contribution)));

    if (supporter.link) {
      const link = element("a", "section-link", translate("visitLink"));
      link.href = supporter.link;
      link.target = "_blank";
      link.rel = "noreferrer";
      body.appendChild(link);
    }

    card.appendChild(body);
    dom.supportGrid.appendChild(card);
  });
}

function renderThanks() {
  clearNode(dom.thanksGrid);

  if (!currentData.acknowledgements.length) {
    renderEmptyState(dom.thanksGrid, "emptyThanks");
    return;
  }

  currentData.acknowledgements.forEach((entry) => {
    const card = element("article", "thanks-card");
    card.appendChild(
      createImageShell(
        entry.image,
        getLocalizedValue(entry.name),
        "section-media-shell",
        "section-media-image",
        translate("thanksImagePlaceholder")
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [entry.role]);
    body.appendChild(element("h3", "", getLocalizedValue(entry.name)));
    body.appendChild(element("p", "", getLocalizedValue(entry.message)));
    card.appendChild(body);
    dom.thanksGrid.appendChild(card);
  });
}

function renderEditor() {
  clearNode(dom.editorSections);
  editorSchema.forEach((sectionSchema) => {
    dom.editorSections.appendChild(createEditorSection(sectionSchema));
  });
}

function createEditorSection(sectionSchema) {
  const section = element("section", "editor-section");
  section.appendChild(element("h3", "editor-section-title", sectionSchema.title));

  if (sectionSchema.description) {
    section.appendChild(element("p", "editor-section-description", sectionSchema.description));
  }

  if (sectionSchema.kind === "fields") {
    const grid = element("div", "editor-field-grid");
    sectionSchema.fields.forEach((field) => {
      grid.appendChild(createEditorField(currentData, field));
    });
    section.appendChild(grid);
    return section;
  }

  const list = element("div", "editor-list");
  currentData[sectionSchema.key].forEach((item, index) => {
    list.appendChild(createEditorListItem(sectionSchema, item, index));
  });
  section.appendChild(list);

  const addButton = element("button", "editor-item-button", `Add ${sectionSchema.itemLabel}`);
  addButton.type = "button";
  addButton.addEventListener("click", () => {
    currentData[sectionSchema.key].push(sectionSchema.createItem());
    persistData();
    renderPage();
    renderEditor();
    announceStatus(`${sectionSchema.itemLabel} ${translate("addSuccess")}`);
  });
  section.appendChild(addButton);

  return section;
}

function createEditorListItem(sectionSchema, item, index) {
  const card = element("article", "editor-item");
  const header = element("div", "editor-item-header");
  const title = getLocalizedValue(item[sectionSchema.summaryKey]) || `${sectionSchema.itemLabel} ${index + 1}`;

  header.appendChild(
    element("h4", "editor-item-title", `${sectionSchema.itemLabel} ${index + 1}: ${title}`)
  );

  const actions = element("div", "editor-item-actions");
  const upButton = makeItemActionButton("Up", () => moveListItem(sectionSchema.key, index, -1));
  const downButton = makeItemActionButton("Down", () => moveListItem(sectionSchema.key, index, 1));
  const removeButton = makeItemActionButton("Remove", () => {
    currentData[sectionSchema.key].splice(index, 1);
    persistData();
    renderPage();
    renderEditor();
    announceStatus(`${sectionSchema.itemLabel} ${translate("removeSuccess")}`);
  });

  if (index === 0) {
    upButton.disabled = true;
  }

  if (index === currentData[sectionSchema.key].length - 1) {
    downButton.disabled = true;
  }

  actions.append(upButton, downButton, removeButton);
  header.appendChild(actions);
  card.appendChild(header);

  const fields = element("div", "editor-field-grid");
  sectionSchema.fields.forEach((field) => {
    fields.appendChild(createEditorField(item, field));
  });
  card.appendChild(fields);

  return card;
}

function makeItemActionButton(label, handler) {
  const button = element("button", "editor-item-action", label);
  button.type = "button";
  button.addEventListener("click", handler);
  return button;
}

function moveListItem(key, index, offset) {
  const list = currentData[key];
  const nextIndex = index + offset;

  if (nextIndex < 0 || nextIndex >= list.length) {
    return;
  }

  const [item] = list.splice(index, 1);
  list.splice(nextIndex, 0, item);
  persistData();
  renderPage();
  renderEditor();
}

function createEditorField(target, field) {
  const wrapper = element("label", "editor-field");
  wrapper.appendChild(element("span", "editor-field-label", field.label));

  if (field.type === "localized") {
    wrapper.appendChild(createLocalizedEditorControl(target, field, false));
    return wrapper;
  }

  if (field.type === "localizedTextarea") {
    wrapper.appendChild(createLocalizedEditorControl(target, field, true));
    return wrapper;
  }

  if (field.type === "textarea") {
    const textarea = document.createElement("textarea");
    textarea.className = "editor-textarea";
    textarea.rows = 4;
    textarea.value = target[field.key] || "";
    textarea.addEventListener("input", () => {
      target[field.key] = textarea.value;
      persistData();
      renderPage();
    });
    wrapper.appendChild(textarea);
    return wrapper;
  }

  if (field.type === "tags") {
    const input = document.createElement("input");
    input.className = "editor-input";
    input.type = "text";
    input.value = Array.isArray(target[field.key]) ? target[field.key].join(", ") : "";
    input.placeholder = "comma, separated, tags";
    input.addEventListener("input", () => {
      target[field.key] = input.value
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);
      persistData();
      renderPage();
    });
    wrapper.appendChild(input);
    return wrapper;
  }

  if (field.type === "image") {
    return createImageEditorField(target, field, wrapper);
  }

  const input = document.createElement("input");
  input.className = "editor-input";
  input.type = "text";
  input.value = target[field.key] || "";
  input.addEventListener("input", () => {
    target[field.key] = input.value;
    persistData();
    renderPage();
  });
  wrapper.appendChild(input);
  return wrapper;
}

function createLocalizedEditorControl(target, field, multiline) {
  const localizedValue = normalizeLocalizedValue(target[field.key]);
  target[field.key] = localizedValue;

  const grid = element("div", "editor-localized-grid");
  ["en", "mn"].forEach((languageCode) => {
    const item = element("div", "editor-localized-item");
    const subLabel = element(
      "span",
      "editor-localized-label",
      languageCode === "en" ? translate("editorLanguageEnglish") : translate("editorLanguageMongolian")
    );
    item.appendChild(subLabel);

    const control = multiline ? document.createElement("textarea") : document.createElement("input");
    control.className = multiline ? "editor-textarea" : "editor-input";

    if (multiline) {
      control.rows = 4;
    } else {
      control.type = "text";
    }

    control.value = localizedValue[languageCode] || "";
    control.addEventListener("input", () => {
      target[field.key][languageCode] = control.value;
      persistData();
      renderPage();
    });
    item.appendChild(control);
    grid.appendChild(item);
  });

  return grid;
}

function createImageEditorField(target, field, wrapper) {
  const preview = element("div", "editor-image-preview");
  const input = document.createElement("input");
  input.className = "editor-input";
  input.type = "text";
  input.placeholder = "Paste an image URL or upload a file";
  input.value = target[field.key] || "";

  const actions = element("div", "editor-file-actions");
  const uploadLabel = element("label", "editor-item-action", "Upload image");
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  fileInput.hidden = true;
  uploadLabel.appendChild(fileInput);

  const clearButton = element("button", "editor-item-action", "Clear");
  clearButton.type = "button";

  const syncPreview = () => {
    clearNode(preview);
    if (target[field.key]) {
      const image = new Image();
      image.src = target[field.key];
      image.alt = field.label;
      preview.appendChild(image);
    } else {
      preview.appendChild(element("span", "", "No image selected."));
    }
  };

  input.addEventListener("input", () => {
    target[field.key] = input.value.trim();
    persistData();
    syncPreview();
    renderPage();
  });

  fileInput.addEventListener("change", async () => {
    const [file] = fileInput.files || [];
    if (!file) {
      return;
    }

    try {
      announceStatus(translate("imageProcessing"));
      target[field.key] = await compressImageFile(file);
      input.value = target[field.key];
      persistData();
      syncPreview();
      renderPage();
      announceStatus(`${field.label} ${translate("imageUpdated")}`);
    } catch (error) {
      console.error("Failed to process image:", error);
      announceStatus(translate("imageUploadFailed"));
    } finally {
      fileInput.value = "";
    }
  });

  clearButton.addEventListener("click", () => {
    target[field.key] = "";
    input.value = "";
    persistData();
    syncPreview();
    renderPage();
  });

  actions.append(uploadLabel, clearButton);
  wrapper.append(input, actions, preview);
  syncPreview();
  return wrapper;
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Selected file is not an image."));
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const scale = Math.min(1, IMAGE_MAX_DIMENSION / Math.max(image.width, image.height || IMAGE_MAX_DIMENSION));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);

      const context = canvas.getContext("2d");
      if (!context) {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Canvas context is unavailable."));
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const format = file.type === "image/png" ? "image/png" : "image/jpeg";
      const dataUrl = canvas.toDataURL(format, format === "image/png" ? undefined : 0.86);
      URL.revokeObjectURL(objectUrl);
      resolve(dataUrl);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to read image."));
    };

    image.src = objectUrl;
  });
}

function updateTimelineProgress() {
  if (!dom.timelineFill || !dom.historySection) {
    return;
  }

  const rect = dom.historySection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const progress = 1 - (rect.bottom - viewportHeight * 0.5) / (rect.height + viewportHeight * 0.5);
  const clamped = Math.max(0.16, Math.min(progress, 1));
  dom.timelineFill.style.height = `${clamped * 100}%`;
}

function setupRevealObserver() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    revealObserver.observe(section);
  });
}

function openEditor() {
  dom.editorDrawer.classList.add("is-open");
  dom.editorDrawer.setAttribute("aria-hidden", "false");
  dom.editorToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("editor-open");
}

function closeEditor() {
  dom.editorDrawer.classList.remove("is-open");
  dom.editorDrawer.setAttribute("aria-hidden", "true");
  dom.editorToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("editor-open");
}

function exportData() {
  const blob = new Blob([JSON.stringify(currentData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "robocon-archive-content.json";
  anchor.click();
  URL.revokeObjectURL(url);
  announceStatus(translate("exportSuccess"));
}

async function importData(file) {
  const fileText = await file.text();
  currentData = mergeWithDefaults(defaultSiteData, JSON.parse(fileText));
  persistData();
  renderPage();
  renderEditor();
  announceStatus(translate("importSuccess"));
}

function resetData() {
  const confirmed = window.confirm(translate("resetConfirm"));

  if (!confirmed) {
    return;
  }

  currentData = cloneData(defaultSiteData);
  persistData();
  renderPage();
  renderEditor();
  announceStatus(translate("resetSuccess"));
}

function setLanguage(languageCode) {
  if (!SUPPORTED_LANGUAGES.includes(languageCode)) {
    return;
  }

  currentLanguage = languageCode;
  persistLanguage();
  renderPage();
  renderEditor();
}

function setupEditorEvents() {
  dom.langEn.addEventListener("click", () => setLanguage("en"));
  dom.langMn.addEventListener("click", () => setLanguage("mn"));

  dom.editorToggle.addEventListener("click", () => {
    if (dom.editorDrawer.classList.contains("is-open")) {
      closeEditor();
    } else {
      openEditor();
    }
  });

  dom.editorClose.addEventListener("click", closeEditor);
  dom.editorSave.addEventListener("click", () => persistData(false));
  dom.editorExport.addEventListener("click", exportData);
  dom.editorImport.addEventListener("change", async () => {
    const [file] = dom.editorImport.files || [];
    if (!file) {
      return;
    }

    try {
      await importData(file);
    } catch (error) {
      console.error("Failed to import JSON:", error);
      announceStatus(translate("importFailure"));
    } finally {
      dom.editorImport.value = "";
    }
  });
  dom.editorReset.addEventListener("click", resetData);
  dom.editorDrawer.addEventListener("click", (event) => {
    if (event.target === dom.editorDrawer) {
      closeEditor();
    }
  });
}

renderPage();
renderEditor();
setupRevealObserver();
setupEditorEvents();
updateTimelineProgress();

window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);
