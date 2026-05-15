export const siteData = {
  owner: "Your Name",
  role: "Robocon builder, programmer, and teammate",
  heroTag: "Home",
  heroTitle: "A personal record of Robocon work, matches, failures, and growth.",
  heroSubtitle:
    "This site is designed as a public archive of Robocon seasons. You can edit competitions, rewards, history, projects, experiments, support organizations, and a talarhal section directly from the browser.",
  heroImage: "",
  stats: [
    {
      value: "2019",
      label: "First season",
      note: "Change this to your real starting year.",
    },
    {
      value: "05",
      label: "Competitions",
      note: "Use your actual number of major seasons or finals.",
    },
    {
      value: "08",
      label: "Projects",
      note: "Count robots, mechanisms, or serious prototypes.",
    },
  ],
  competitions: [
    {
      year: "2019",
      title: "National Robocon Qualifier",
      location: "Ulaanbaatar, Mongolia",
      theme: "Team entry season",
      result: "First major competition experience",
      summary:
        "Use this section for every competition year. Mention the host city, contest theme, your team result, and what made that season difficult.",
      image: "",
    },
    {
      year: "2025",
      title: "ABU Robocon 2025",
      location: "Ulaanbaatar, Mongolia",
      theme: "Robot Basketball",
      result: "Replace with your team result",
      summary:
        "This is a good place to describe the match format, what robot you built, and how your role changed under competition pressure.",
      image: "",
    },
  ],
  rewards: [
    {
      year: "2024",
      title: "Best Design Award",
      event: "National Robocon Qualifier",
      detail: "Add awards, finalist results, certificates, or team distinctions here.",
      image: "",
    },
    {
      year: "2025",
      title: "Special Recognition",
      event: "University Robotics Program",
      detail: "You can also use this area for sponsor awards, engineering awards, or media recognition.",
      image: "",
    },
  ],
  history: [
    {
      year: "2019",
      title: "Started with observation and simple tasks",
      impact: "Beginning",
      summary:
        "I entered Robocon by learning from older teammates, understanding the workshop, and seeing how mechanical ideas fail in the real world.",
      tags: ["entry", "workshop"],
    },
    {
      year: "2021",
      title: "Moved from parts to systems",
      impact: "Growth",
      summary:
        "Robots stopped feeling like separate mechanisms. I started thinking in terms of integration, constraints, and full-system behavior.",
      tags: ["systems", "integration"],
    },
    {
      year: "2025",
      title: "Pressure improved judgment",
      impact: "Maturity",
      summary:
        "Competition deadlines forced clearer tradeoffs. Simplicity, repairability, and discipline became more important than impressive complexity.",
      tags: ["competition", "decision-making"],
    },
  ],
  projects: [
    {
      name: "Drive Base Revision",
      season: "Season 01",
      focus: "Mobility and stability",
      description:
        "A base platform project where the main goal was making movement more predictable under match conditions.",
      outcome: "Taught repeatability, structure, and the cost of weak tolerances.",
      image: "",
    },
    {
      name: "Manipulator Mechanism",
      season: "Season 02",
      focus: "Actuation and precision",
      description:
        "A robot subsystem that looked acceptable alone but became much harder once it had to cooperate with sensors, chassis, and timing limits.",
      outcome: "Improved interface thinking between mechanical and software layers.",
      image: "",
    },
  ],
  experiments: [
    {
      name: "Sensor Calibration Trial",
      area: "Experiments / Turshlaga",
      summary:
        "Use this section for test rigs, trials, failed ideas, alternate mechanisms, and software experiments that mattered even if they never reached the final robot.",
      takeaway: "Good experiments reduce future risk even when they do not become final solutions.",
      image: "",
    },
    {
      name: "Autonomous Path Test",
      area: "Control and navigation",
      summary:
        "Document what was tested, what changed, and what you learned from the result.",
      takeaway: "Short test loops usually save more time than one big unverified build.",
      image: "",
    },
  ],
  supporters: [
    {
      name: "University Robotics Lab",
      type: "Support / Demjigch Baiguullaga",
      contribution: "Workshop access, tools, and team coordination support.",
      link: "",
      image: "",
    },
    {
      name: "Engineering Sponsor",
      type: "Financial or material support",
      contribution: "Motors, controllers, manufacturing help, logistics, or travel support.",
      link: "",
      image: "",
    },
  ],
  acknowledgements: [
    {
      name: "Team Mentors",
      role: "Talarhal",
      message:
        "Use this section to thank mentors, teammates, teachers, friends, or organizations that directly shaped your Robocon journey.",
      image: "",
    },
    {
      name: "Family and Friends",
      role: "Support beyond the workshop",
      message:
        "This can be personal. It does not need to sound corporate. A strong thanks section makes the site feel honest.",
      image: "",
    },
  ],
  footerNote:
    "Built as a static GitHub Pages site with a browser editor for content, rewards, and images.",
};
