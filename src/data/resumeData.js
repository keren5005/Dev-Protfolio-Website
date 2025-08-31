// src/data/resumeData.js
export const RESUME_PDF = "/Keren Cohen Software Developer CV.pdf";

export const resumeData = {
  skills: {
    languages: ["Java", "Python", "C#", "TypeScript + JavaScript", "C++", "C", "Go"],
    stack: [
      "SQL",
      "Docker",
      "Spring Boot",
      "Swagger",
      "Kafka",
      "React",
      "MongoDB",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "REST APIs + Postman",
      "Scraping (BeautifulSoup, Selenium, Regex, XPath)",
      "Linux (WSL, Ubuntu)",
      "CSS + HTML",
      "Prometheus",
      "Elasticsearch",
      "Jenkins"
    ],
    spoken: "English — Fluent, Hebrew — Native"
  },

  projects: [
    {
      name: "PromLink",
      description:
        "Open-source contribution to Prometheus (Go); integrated Alertmanager with Mattermost and Rocket.Chat through their APIs."
    },
    {
      name: "Neural Network",
      description:
        "Fully connected feed-forward neural network in Python with several activation functions; achieved strong accuracy for image recognition tasks."
    }
  ],

  experience: [
    {
      company: "AngelSense",
      role: "Software Developer (Maternity cover)",
      dates: "2025",
      bullets: [
        "Developed and maintained RESTful APIs.",
        "Implemented integrations with 3rd-party systems' APIs.",
        "Built E2E testing automation infrastructure for UI & API.",
        "Optimized server-side code and runtime performance.",
        "Implemented data-cleanup workflows for test users and related entities.",
        "Refactored legacy code according to Clean Code conventions.",
        "Technologies: Java, Spring Boot, Swagger, Jenkins, Kafka, Elasticsearch, MongoDB, Redis, MySQL, Docker, SQL, REST APIs, JavaScript."
      ]
    },
    {
      company: "Unit 8200",
      role: "Software Developer",
      dates: "2023–2024",
      bullets: [
        "Built ETL pipelines combining internal-unit and open-source data; integrated multiple data sources and sinks.",
        "Applied OOP and design patterns (Factory, Decorator, Builder, Singleton) for modular, maintainable code.",
        "Implemented secure design principles to ensure data confidentiality.",
        "Technologies: Python, SQL, PostgreSQL, JavaScript, ETL, OOP & design patterns, secure architecture."
      ]
    },
    {
      company: "One Taldor",
      role: "PMO, Data & Network",
      dates: "2020–2021",
      bullets: [
        "Led data-optimization and network-infrastructure projects; supported streamlined distance-learning rollout during COVID-19.",
        "Planned and executed end-to-end product lifecycle (roadmap, budgeting, risks) with cross-functional coordination.",
        "Provided stakeholder reporting and data insights.",
        "Designed large-scale analytics emphasizing security and cost efficiency."
      ]
    },
    {
      company: "Big Idea",
      role: "Tech Instructor (JCC, USA)",
      dates: "2019",
      bullets: [
        "Designed and delivered workshops in programming, robotics, desktop-app development, and game creation.",
        "Engaged diverse student groups in hands-on coding."
      ]
    },
    {
      company: "Unit 8200",
      role: "Cyber Threat Analyst",
      dates: "2017–2019",
      bullets: [
        "Conducted advanced cybersecurity research and network analysis with international intelligence partners.",
        "Performed threat detection using Python scripts; developed C# investigation tools.",
        "Queried large datasets with SQL and performed deep-packet inspection using Wireshark."
      ]
    }
  ],

  education: [
    {
      place: "Academic College of Tel-Aviv–Yafo",
      details:
        "B.Sc. in Computer Science (2021–2024). Most-liked courses: Algorithms (100), Data Structures (92), Object-Oriented Programming (95)."
    },
    {
      place: "Unit 8200 — Military Courses",
      details:
        "Cyber Threat Course, Data Analyst Course, Commander Course (2017–2019)."
    }
  ],

  volunteering: [
    {
      org: "Yozmot Organization",
      details:
        "Delivered tech lectures on information security and cyber threats during the Iron Swords War."
    },
    {
      org: "QueenB",
      details:
        "Contributed to events empowering women to pursue computer science; shared experiences and mentorship."
    }
  ],

  certifications: [
    {
      name: "Unit 8200 Certifications",
      details: "Cyber Security & Data Analysis (from Unit 8200 military training)."
    }
  ]
};
