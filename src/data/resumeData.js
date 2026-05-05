export const RESUME_PDF = "/Keren_Cohen_CV.pdf";

export const resumeData = {
  skills: {
    languages: ["Java", "Python", "JavaScript / TypeScript", "C#", "Go", "SQL"],
    frameworks: ["Spring Boot", "Express", "FastAPI", "Node.js"],
    databases: ["MongoDB", "Redis", "MySQL", "PostgreSQL", "Elasticsearch"],
    messaging: ["Kafka", "BullMQ"],
    devops: ["AWS (EC2, S3)", "Docker", "GitHub Actions", "Jenkins"],
    aiTools: ["Claude", "Cursor", "OpenAI", "MCP", "Sentry", "Codex"],
    testing: ["Unit", "Integration", "E2E", "TDD"],
    spoken: "English — Fluent · Hebrew — Native",
  },

  projects: [
    {
      name: "TryAI",
      description:
        "AI comparison & routing platform (tryaii.com). Helps developers and teams pick the right LLM: try a prompt against 6 providers side-by-side and see quality, latency, and cost; routing engine recommends from 35+ models based on priorities; live benchmark dataset covers 335+ LLMs across 8 public sources.",
      link: "https://tryaii.com",
      isExternal: true,
    },
    {
      name: "PromLink",
      description:
        "Extended the official Prometheus Alertmanager (Go) with native Mattermost and Rocket.Chat receivers; each platform isolated behind a clean interface in the existing receiver pipeline, with full setup documentation.",
      link: "https://github.com/keren5005/PromLink",
    },
  ],

  experience: [
    {
      company: "Simploud",
      role: "Software Developer",
      dates: "2025 – Present",
      bullets: [
        "First in-house Software Developer in the company, working directly under the CTO.",
        "Refactoring legacy code toward a scalable, maintainable multi-service architecture.",
        "Developing CI/CD workflows and jobs using GitHub Actions.",
        "Building software with a focus on OOP, design patterns, clean code, and TDD.",
        "Working with AWS and EC2, including CPU and memory monitoring and runtime troubleshooting.",
        "Responsible for improving test coverage across company services — unit, integration, and E2E tests.",
        "Implementing logging and tracing with Sentry, including error handling and token-usage cost tracing.",
        "AI-driven development using Claude, Codex, and Cursor — skills, tools, sub-agents, and MCP workflows.",
        "Multithreaded async architecture with workers, locks, and queues.",
        "Configured Nginx as a reverse proxy and Ngrok for local-to-production tunneling during development.",
        "Stack: Java · Spring Boot · Node.js · Express · JavaScript · REST APIs · AWS · EC2 · Redis · MongoDB · Kafka · GitHub Actions · Sentry · Nginx · Ngrok",
      ],
    },
    {
      company: "AngelSense",
      role: "Software Developer",
      dates: "2024 – 2025",
      bullets: [
        "Developed and maintained RESTful APIs.",
        "Implemented integrations between the product and 3rd-party system APIs.",
        "Built E2E testing automation infrastructure for UI & API.",
        "Optimised server-side code and runtime performance.",
        "Designed and implemented Data Garbage Collection for test users and their data.",
        "Refactored legacy code by applying Clean Code conventions.",
        "Stack: Java · Spring Boot · Swagger · Jenkins · Kafka · Elasticsearch · MongoDB · Redis · MySQL · Docker · SQL · REST APIs · JavaScript",
      ],
    },
    {
      company: "Unit 8200, IDF",
      role: "Software Developer",
      dates: "2023 – 2024",
      bullets: [
        "Built ETL pipelines using internal unit databases and open-source data, integrating multiple data sources and sinks.",
        "Applied OOP and design patterns for modular, maintainable, and high-quality code.",
        "Implemented secure design principles to ensure data confidentiality.",
        "Stack: Python · SQL · PostgreSQL · JavaScript · ETL · OOP & design patterns · secure architecture",
      ],
    },
    {
      company: "One Taldor",
      role: "PMO – Data & Network",
      dates: "2020 – 2021",
      bullets: [
        "Led data-optimisation and network-infrastructure projects during COVID-19 rollout; managed roadmap, budgeting, and stakeholders.",
      ],
    },
    {
      company: "Unit 8200, IDF",
      role: "Cyber Security Analyst",
      dates: "2017 – 2019",
      bullets: [
        "Conducted advanced cybersecurity research and network analysis with international intelligence partners.",
        "Performed threat detection using Python scripts and developed C# investigation tools.",
        "Queried large datasets in SQL and performed deep-packet inspection with Wireshark.",
      ],
    },
  ],

  education: [
    {
      place: "Academic College of Tel-Aviv–Yafo",
      details: "B.Sc. Computer Science (2021–2024).",
    },
    {
      place: "Unit 8200 — Military Courses",
      details: "Cyber Threat · Data Analyst · Commander (2017–2019).",
    },
  ],

  volunteering: [
    {
      org: "Yozmot Organisation",
      details: "Information-security lectures during the Iron Swords War.",
    },
    {
      org: "QueenB",
      details: "Empowering women to pursue computer science.",
    },
  ],

  certifications: [
    {
      name: "Unit 8200 — Cyber Security & Data Analysis",
      details: "Earned through elite military intelligence training programme.",
    },
  ],
};
