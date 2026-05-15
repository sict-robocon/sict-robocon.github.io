import { siteData as defaultSiteData } from "./data/site-data.js";

const STORAGE_KEY = "robocon-archive-site-data-v3";
const IMAGE_MAX_DIMENSION = 1600;

const editorSchema = [
  {
    kind: "fields",
    title: "Home",
    description: "Hero text, identity, and home image.",
    fields: [
      { key: "owner", label: "Owner" },
      { key: "role", label: "Role" },
      { key: "heroTag", label: "Home label" },
      { key: "heroTitle", label: "Home title", type: "textarea" },
      { key: "heroSubtitle", label: "Home subtitle", type: "textarea" },
      { key: "heroImage", label: "Home image", type: "image" },
      { key: "footerNote", label: "Footer note", type: "textarea" },
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
      { key: "label", label: "Label" },
      { key: "note", label: "Note", type: "textarea" },
    ],
    createItem: () => ({
      value: "00",
      label: "New stat",
      note: "Explain what this number means.",
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
      { key: "title", label: "Competition title" },
      { key: "location", label: "Location" },
      { key: "theme", label: "Theme" },
      { key: "result", label: "Result" },
      { key: "summary", label: "Summary", type: "textarea" },
      { key: "image", label: "Competition image", type: "image" },
    ],
    createItem: () => ({
      year: "2026",
      title: "New competition",
      location: "City, Country",
      theme: "Competition theme",
      result: "Team result",
      summary: "Describe what happened in this competition season.",
      image: "",
    }),
  },
  {
    kind: "list",
    key: "rewards",
    title: "Reward",
    description: "Awards, certificates, placements, and recognition.",
    itemLabel: "Reward",
    summaryKey: "title",
    fields: [
      { key: "year", label: "Year" },
      { key: "title", label: "Reward title" },
      { key: "event", label: "Event" },
      { key: "detail", label: "Detail", type: "textarea" },
      { key: "image", label: "Reward image", type: "image" },
    ],
    createItem: () => ({
      year: "2026",
      title: "New reward",
      event: "Event or organization",
      detail: "Describe the result or recognition.",
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
      { key: "title", label: "Title" },
      { key: "impact", label: "Impact chip" },
      { key: "summary", label: "Summary", type: "textarea" },
      { key: "tags", label: "Tags", type: "tags" },
    ],
    createItem: () => ({
      year: "2026",
      title: "New history entry",
      impact: "Milestone",
      summary: "Describe the turning point in your Robocon history.",
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
      { key: "name", label: "Project name" },
      { key: "season", label: "Season" },
      { key: "focus", label: "Focus" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "outcome", label: "Outcome", type: "textarea" },
      { key: "image", label: "Project image", type: "image" },
    ],
    createItem: () => ({
      name: "New project",
      season: "Season",
      focus: "Main focus",
      description: "Describe the project or robot.",
      outcome: "Describe the outcome or lesson.",
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
      { key: "name", label: "Experiment name" },
      { key: "area", label: "Area" },
      { key: "summary", label: "Summary", type: "textarea" },
      { key: "takeaway", label: "Takeaway", type: "textarea" },
      { key: "image", label: "Experiment image", type: "image" },
    ],
    createItem: () => ({
      name: "New experiment",
      area: "Test area",
      summary: "Describe what was tested.",
      takeaway: "Describe what was learned.",
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
      { key: "name", label: "Name" },
      { key: "type", label: "Support type" },
      { key: "contribution", label: "Contribution", type: "textarea" },
      { key: "link", label: "Website link" },
      { key: "image", label: "Support image", type: "image" },
    ],
    createItem: () => ({
      name: "New supporter",
      type: "Support type",
      contribution: "Describe how this organization supported the work.",
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
      { key: "name", label: "Name" },
      { key: "role", label: "Role or relation" },
      { key: "message", label: "Message", type: "textarea" },
      { key: "image", label: "Image", type: "image" },
    ],
    createItem: () => ({
      name: "New thanks",
      role: "Role or relation",
      message: "Write the thanks message here.",
      image: "",
    }),
  },
];

let currentData = loadData();
let statusTimeoutId = null;

const dom = {
  heroTag: document.getElementById("hero-tag"),
  heroPersona: document.getElementById("hero-persona"),
  heroTitle: document.getElementById("hero-title"),
  heroSubtitle: document.getElementById("hero-subtitle"),
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
  editorClose: document.getElementById("editor-close"),
  editorSections: document.getElementById("editor-sections"),
  editorSave: document.getElementById("editor-save"),
  editorExport: document.getElementById("editor-export"),
  editorImport: document.getElementById("editor-import"),
  editorReset: document.getElementById("editor-reset"),
  editorStatus: document.getElementById("editor-status"),
};

function cloneData(value) {
  if (value === undefined) {
    return undefined;
  }

  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeWithDefaults(defaultValue, incomingValue) {
  if (Array.isArray(defaultValue)) {
    if (!Array.isArray(incomingValue)) {
      return cloneData(defaultValue);
    }

    if (defaultValue.length === 0) {
      return cloneData(incomingValue);
    }

    const template = defaultValue[0];
    return incomingValue.map((item) =>
      isPlainObject(template) ? mergeWithDefaults(template, item) : item
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

function persistData(silent = true) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    if (!silent) {
      announceStatus("Saved in this browser.");
    }
    return true;
  } catch (error) {
    console.error("Failed to persist site data:", error);
    announceStatus(
      "Browser storage is full. Export your JSON or reduce image size before saving again."
    );
    return false;
  }
}

function announceStatus(message) {
  dom.editorStatus.textContent = message;
  window.clearTimeout(statusTimeoutId);
  statusTimeoutId = window.setTimeout(() => {
    dom.editorStatus.textContent = "";
  }, 3200);
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

function setText(node, value) {
  node.textContent = value || "";
}

function renderPage() {
  document.title = `${currentData.owner || "Robocon"} | Robocon Archive`;

  setText(dom.heroTag, currentData.heroTag);
  setText(dom.heroPersona, [currentData.owner, currentData.role].filter(Boolean).join(" · "));
  setText(dom.heroTitle, currentData.heroTitle);
  setText(dom.heroSubtitle, currentData.heroSubtitle);
  setText(dom.footerNote, currentData.footerNote);

  clearNode(dom.heroMedia);
  dom.heroMedia.appendChild(
    createImageShell(
      currentData.heroImage,
      `${currentData.owner || "Robocon"} home image`,
      "hero-media-shell",
      "hero-media-image",
      "Upload a home image in the editor."
    )
  );

  renderStats();
  renderCompetitions();
  renderRewards();
  renderHistory();
  renderProjects();
  renderExperiments();
  renderSupporters();
  renderThanks();
  updateTimelineProgress();
}

function renderStats() {
  clearNode(dom.statsGrid);

  currentData.stats.forEach((stat) => {
    const card = element("article", "stat-card");
    card.appendChild(element("span", "stat-value", stat.value));
    card.appendChild(element("span", "stat-label", stat.label));
    card.appendChild(element("p", "stat-note", stat.note));
    dom.statsGrid.appendChild(card);
  });
}

function renderEmptyState(container, message) {
  const card = element("article", "empty-card");
  card.appendChild(element("p", "", message));
  container.appendChild(card);
}

function appendMetaChips(container, chips) {
  const meta = element("div", "card-meta");

  chips.filter(Boolean).forEach((chip, index) => {
    meta.appendChild(element("span", index === 0 ? "timeline-year" : "impact-chip", chip));
  });

  container.appendChild(meta);
}

function renderCompetitions() {
  clearNode(dom.competitionGrid);

  if (!currentData.competitions.length) {
    renderEmptyState(dom.competitionGrid, "Add competitions in the editor.");
    return;
  }

  currentData.competitions.forEach((competition) => {
    const card = element("article", "competition-card");
    card.appendChild(
      createImageShell(
        competition.image,
        competition.title,
        "section-media-shell",
        "section-media-image",
        "Upload a competition photo."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [competition.year, competition.location]);
    body.appendChild(element("h3", "", competition.title));
    body.appendChild(element("p", "", competition.summary));
    body.appendChild(element("p", "section-note", `Theme: ${competition.theme}`));
    body.appendChild(element("p", "section-note", `Result: ${competition.result}`));
    card.appendChild(body);
    dom.competitionGrid.appendChild(card);
  });
}

function renderRewards() {
  clearNode(dom.rewardGrid);

  if (!currentData.rewards.length) {
    renderEmptyState(dom.rewardGrid, "Add rewards in the editor.");
    return;
  }

  currentData.rewards.forEach((reward) => {
    const card = element("article", "reward-card");
    card.appendChild(
      createImageShell(
        reward.image,
        reward.title,
        "section-media-shell",
        "section-media-image",
        "Upload a reward image or certificate."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [reward.year, reward.event]);
    body.appendChild(element("h3", "", reward.title));
    body.appendChild(element("p", "", reward.detail));
    card.appendChild(body);
    dom.rewardGrid.appendChild(card);
  });
}

function renderHistory() {
  clearNode(dom.historyList);

  if (!currentData.history.length) {
    renderEmptyState(dom.historyList, "Add history entries in the editor.");
    return;
  }

  currentData.history.forEach((item) => {
    const card = element("article", "timeline-card");
    const meta = element("div", "timeline-meta");
    meta.appendChild(element("span", "timeline-year", item.year));
    meta.appendChild(element("span", "impact-chip", item.impact));
    card.appendChild(meta);
    card.appendChild(element("h3", "", item.title));
    card.appendChild(element("p", "timeline-copy", item.summary));

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
    renderEmptyState(dom.projectGrid, "Add projects in the editor.");
    return;
  }

  currentData.projects.forEach((project) => {
    const card = element("article", "project-card");
    card.appendChild(
      createImageShell(
        project.image,
        project.name,
        "section-media-shell",
        "section-media-image",
        "Upload a project image."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [project.season, project.focus]);
    body.appendChild(element("h3", "", project.name));
    body.appendChild(element("p", "", project.description));
    body.appendChild(element("p", "section-note", project.outcome));
    card.appendChild(body);
    dom.projectGrid.appendChild(card);
  });
}

function renderExperiments() {
  clearNode(dom.experimentGrid);

  if (!currentData.experiments.length) {
    renderEmptyState(dom.experimentGrid, "Add experiments in the editor.");
    return;
  }

  currentData.experiments.forEach((experiment) => {
    const card = element("article", "experiment-card");
    card.appendChild(
      createImageShell(
        experiment.image,
        experiment.name,
        "section-media-shell",
        "section-media-image",
        "Upload an experiment image."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [experiment.area]);
    body.appendChild(element("h3", "", experiment.name));
    body.appendChild(element("p", "", experiment.summary));
    body.appendChild(element("p", "section-note", experiment.takeaway));
    card.appendChild(body);
    dom.experimentGrid.appendChild(card);
  });
}

function renderSupporters() {
  clearNode(dom.supportGrid);

  if (!currentData.supporters.length) {
    renderEmptyState(dom.supportGrid, "Add support organizations in the editor.");
    return;
  }

  currentData.supporters.forEach((supporter) => {
    const card = element("article", "support-card");
    card.appendChild(
      createImageShell(
        supporter.image,
        supporter.name,
        "section-media-shell",
        "section-media-image",
        "Upload a logo or support image."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [supporter.type]);
    body.appendChild(element("h3", "", supporter.name));
    body.appendChild(element("p", "", supporter.contribution));

    if (supporter.link) {
      const link = element("a", "section-link", "Visit");
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
    renderEmptyState(dom.thanksGrid, "Add thanks entries in the editor.");
    return;
  }

  currentData.acknowledgements.forEach((entry) => {
    const card = element("article", "thanks-card");
    card.appendChild(
      createImageShell(
        entry.image,
        entry.name,
        "section-media-shell",
        "section-media-image",
        "Upload an image for this thanks entry."
      )
    );

    const body = element("div", "section-card-body");
    appendMetaChips(body, [entry.role]);
    body.appendChild(element("h3", "", entry.name));
    body.appendChild(element("p", "", entry.message));
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
    announceStatus(`${sectionSchema.itemLabel} added.`);
  });
  section.appendChild(addButton);

  return section;
}

function createEditorListItem(sectionSchema, item, index) {
  const card = element("article", "editor-item");
  const header = element("div", "editor-item-header");
  const title = item[sectionSchema.summaryKey] || `${sectionSchema.itemLabel} ${index + 1}`;

  header.appendChild(
    element("h4", "editor-item-title", `${sectionSchema.itemLabel} ${index + 1}: ${title}`)
  );

  const actions = element("div", "editor-item-actions");
  const upButton = makeItemActionButton("Up", () => moveListItem(sectionSchema.key, index, -1));
  const downButton = makeItemActionButton("Down", () =>
    moveListItem(sectionSchema.key, index, 1)
  );
  const removeButton = makeItemActionButton("Remove", () => {
    currentData[sectionSchema.key].splice(index, 1);
    persistData();
    renderPage();
    renderEditor();
    announceStatus(`${sectionSchema.itemLabel} removed.`);
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
      announceStatus("Processing image...");
      target[field.key] = await compressImageFile(file);
      input.value = target[field.key];
      persistData();
      syncPreview();
      renderPage();
      announceStatus(`${field.label} updated.`);
    } catch (error) {
      console.error("Failed to process image:", error);
      announceStatus("Image upload failed.");
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
      const scale = Math.min(
        1,
        IMAGE_MAX_DIMENSION / Math.max(image.width, image.height || IMAGE_MAX_DIMENSION)
      );
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
  const progress =
    1 - (rect.bottom - viewportHeight * 0.5) / (rect.height + viewportHeight * 0.5);
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
  announceStatus("Content exported as JSON.");
}

async function importData(file) {
  const fileText = await file.text();
  currentData = mergeWithDefaults(defaultSiteData, JSON.parse(fileText));
  persistData();
  renderPage();
  renderEditor();
  announceStatus("JSON imported.");
}

function resetData() {
  const confirmed = window.confirm(
    "Reset all browser-edited content back to the default sample data?"
  );

  if (!confirmed) {
    return;
  }

  currentData = cloneData(defaultSiteData);
  persistData();
  renderPage();
  renderEditor();
  announceStatus("Content reset to defaults.");
}

function setupEditorEvents() {
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
      announceStatus("Could not import that JSON file.");
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
