import { siteData } from "./data/site-data.js";

const textTargets = [
  ["hero-tag", siteData.heroTag],
  ["hero-title", siteData.heroTitle],
  ["hero-subtitle", siteData.heroSubtitle],
  ["footer-note", siteData.footerNote],
];

for (const [id, value] of textTargets) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value;
  }
}

const statsGrid = document.getElementById("stats-grid");
siteData.stats.forEach((stat) => {
  const card = document.createElement("article");
  card.className = "stat-card";
  card.innerHTML = `
    <span class="stat-value">${stat.value}</span>
    <span class="stat-label">${stat.label}</span>
    <p class="stat-note">${stat.note}</p>
  `;
  statsGrid.appendChild(card);
});

const phaseGrid = document.getElementById("phase-grid");
siteData.phases.forEach((phase) => {
  const card = document.createElement("article");
  card.className = "phase-card";
  card.innerHTML = `
    <h3>${phase.name}</h3>
    <p>${phase.summary}</p>
  `;
  phaseGrid.appendChild(card);
});

const timelineList = document.getElementById("timeline-list");
siteData.timeline.forEach((item) => {
  const card = document.createElement("article");
  card.className = "timeline-card";
  card.innerHTML = `
    <div class="timeline-meta">
      <span class="timeline-year">${item.year}</span>
      <span class="impact-chip">${item.impact}</span>
    </div>
    <h3>${item.title}</h3>
    <p class="timeline-copy">${item.summary}</p>
    <div class="tag-row">
      ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
  timelineList.appendChild(card);
});

const turningPointsGrid = document.getElementById("turning-points-grid");
siteData.turningPoints.forEach((point) => {
  const card = document.createElement("article");
  card.className = "turning-card";
  card.innerHTML = `
    <h3>${point.title}</h3>
    <p>${point.text}</p>
  `;
  turningPointsGrid.appendChild(card);
});

const buildGrid = document.getElementById("build-grid");
siteData.builds.forEach((build) => {
  const card = document.createElement("article");
  card.className = "build-card";
  card.innerHTML = `
    <div class="build-meta">
      <span class="build-season">${build.season}</span>
      <span class="build-focus">${build.focus}</span>
    </div>
    <h3>${build.name}</h3>
    <p>${build.description}</p>
    <p>${build.outcome}</p>
  `;
  buildGrid.appendChild(card);
});

const lessonList = document.getElementById("lesson-list");
siteData.lessons.forEach((lesson) => {
  const card = document.createElement("article");
  card.className = "lesson-card";
  card.innerHTML = `
    <h3>${lesson.title}</h3>
    <p>${lesson.detail}</p>
  `;
  lessonList.appendChild(card);
});

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

const timelineSection = document.getElementById("timeline");
const timelineFill = document.getElementById("timeline-fill");

const updateTimelineProgress = () => {
  if (!timelineSection || !timelineFill) {
    return;
  }

  const rect = timelineSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const progress = 1 - (rect.bottom - viewportHeight * 0.5) / (rect.height + viewportHeight * 0.5);
  const clamped = Math.max(0.16, Math.min(progress, 1));
  timelineFill.style.height = `${clamped * 100}%`;
};

updateTimelineProgress();
window.addEventListener("scroll", updateTimelineProgress, { passive: true });
window.addEventListener("resize", updateTimelineProgress);
