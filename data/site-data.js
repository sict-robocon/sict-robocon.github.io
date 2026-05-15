export const siteData = {
  owner: "Your Name",
  role: "Robocon builder, programmer, and teammate",
  heroTag: "Personal Robocon Archive",
  heroTitle: "Robocon shaped how I design, fail, rebuild, and compete.",
  heroSubtitle:
    "This site is a narrative record of seasons, prototypes, breakdowns, and breakthroughs. Replace the sample milestones with your real years, robots, photos, and results to turn it into your public Robocon history.",
  stats: [
    {
      value: "2019",
      label: "First season",
      note: "Change this to the year your story began.",
    },
    {
      value: "06",
      label: "Prototype cycles",
      note: "Use your actual count of major robots or rebuilds.",
    },
    {
      value: "03",
      label: "Core roles",
      note: "Driver, mechanic, programmer, lead, or any mix that fits.",
    },
  ],
  phases: [
    {
      name: "Origin",
      summary: "Curiosity, first workshop days, and the moment Robocon became serious.",
    },
    {
      name: "Build",
      summary: "Sensors, chassis, code, testing, and the pressure of iteration.",
    },
    {
      name: "Compete",
      summary: "Match-day decisions, recovery under failure, and lessons that stayed.",
    },
  ],
  timeline: [
    {
      year: "2019",
      title: "First contact with the workshop",
      summary:
        "I arrived with more curiosity than skill. The first weeks were mostly about understanding tools, observing senior teammates, and learning how quickly ideas fail when they meet real hardware.",
      impact: "Foundation",
      tags: ["entry", "learning"],
    },
    {
      year: "2020",
      title: "Learning to trust iteration",
      summary:
        "This season changed my process. Instead of chasing a perfect first design, I started building small, testing early, and accepting rework as part of the system.",
      impact: "Process shift",
      tags: ["prototype", "testing"],
    },
    {
      year: "2021",
      title: "From individual tasks to system thinking",
      summary:
        "The robot stopped feeling like separate parts and started feeling like one argument between mechanics, electronics, and code. That changed how I planned everything.",
      impact: "Systems mindset",
      tags: ["integration", "architecture"],
    },
    {
      year: "2022",
      title: "Pressure exposed weak assumptions",
      summary:
        "Competition prep taught me that most failures appear late only because they were ignored early. Checklists, test loops, and clean communication mattered more than confidence.",
      impact: "Discipline",
      tags: ["competition", "debugging"],
    },
    {
      year: "2023",
      title: "Taking ownership of decisions",
      summary:
        "I became more responsible for tradeoffs: what to simplify, what to keep, and what to cut when time ran out. Robocon became as much about judgment as technical ability.",
      impact: "Leadership",
      tags: ["ownership", "tradeoffs"],
    },
    {
      year: "Next",
      title: "Turning the history into a public record",
      summary:
        "This site is the next step: documenting the journey clearly enough that other people can understand the work, not just the final result.",
      impact: "Archive",
      tags: ["story", "publishing"],
    },
  ],
  turningPoints: [
    {
      title: "Robots taught process, not just mechanics",
      text:
        "The biggest shift was understanding that a robot is rarely lost because one part is bad. It is usually lost because the team had no reliable process for decisions, testing, or fallback plans.",
    },
    {
      title: "Late nights only help when the process is clean",
      text:
        "Effort matters, but unstructured effort burns time. The strongest seasons were the ones where notes, small tests, and honest reviews made the work lighter.",
    },
    {
      title: "Competition reveals character quickly",
      text:
        "The match itself is short. What it reveals is how the team handles pressure, error, ambiguity, and imperfect information. That lesson carries beyond Robocon.",
    },
  ],
  builds: [
    {
      name: "Line Tracking Platform",
      season: "Season 01",
      focus: "Control logic and calibration",
      description:
        "A foundational build where sensor noise, tuning, and repeatability mattered more than ambitious complexity.",
      outcome: "Taught disciplined testing and the value of simple feedback loops.",
    },
    {
      name: "Manipulator Prototype",
      season: "Season 02",
      focus: "Mechanical reliability",
      description:
        "A subsystem that looked fine in isolation but revealed weak assumptions once it was integrated with the rest of the robot.",
      outcome: "Forced better interface thinking between structure, motors, and software.",
    },
    {
      name: "Competition Robot Refresh",
      season: "Season 03",
      focus: "Iteration under deadlines",
      description:
        "A compressed rebuild that prioritized robustness, maintainability, and fast repair paths over flashy features.",
      outcome: "Improved decision-making under schedule pressure.",
    },
  ],
  lessons: [
    {
      title: "Test the risky assumption first",
      detail:
        "If one mechanism, sensor, or dependency can collapse the whole match plan, validate it before polishing anything else.",
    },
    {
      title: "Integration breaks optimistic designs",
      detail:
        "Parts that succeed alone often fail together. Integration should happen early, repeatedly, and without ego.",
    },
    {
      title: "Clear roles make fast teams",
      detail:
        "Under pressure, a team moves better when ownership is visible and decisions are recorded instead of implied.",
    },
    {
      title: "Document while the memory is fresh",
      detail:
        "The story disappears if it stays only in your head. Logs, photos, and post-match notes are part of the engineering work.",
    },
  ],
  footerNote:
    "Built as a static GitHub Pages site so your Robocon history can live on a clean public URL.",
};
