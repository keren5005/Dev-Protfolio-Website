// src/components/Projects.js
import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

// ✅ Only icons that exist in react-icons/si (no SiCsharp)
import {
  SiDocker,
  SiFastapi,
  SiReact,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiMongodb,
  SiNodedotjs,
  SiSpringboot,
  SiOpenjdk,
  SiJavascript,
  SiTypescript,
  SiApachekafka,
  SiElasticsearch,
  SiSwagger,
  SiPostman,
  SiLinux,
  SiJenkins,
  SiCplusplus,
  SiDotnet, // use this for C#/.NET
} from "react-icons/si";

const Tag = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
    {icon}
    {label}
  </span>
);

export default function Projects() {
  // ⭐ Featured project
  const featured = {
    title: "Dockerized Personal Finance Tracker",
    blurb:
      "Full-stack personal finance app with FastAPI backend, React UI, PostgreSQL database, optional Redis cache — all containerized with Docker Compose.",
    link: "https://github.com/keren5005/Dockerized-Personal-Finance-Tracker",
    tags: [
      { icon: <SiDocker />, label: "Docker" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <SiReact />, label: "React" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <SiPython />, label: "Python" },
      { icon: <SiRedis />, label: "Redis" },
    ],
  };

  // Top projects
  const projects = [
    {
      title: "Real-Time Data Pipeline",
      blurb:
        "Event-driven pipeline using Kafka for ingestion and Elasticsearch for search/analytics. Includes REST endpoints with Swagger and Postman collection.",
      link: "https://github.com/keren5005",
      tags: [
        { icon: <SiApachekafka />, label: "Kafka" },
        { icon: <SiElasticsearch />, label: "Elasticsearch" },
        { icon: <SiSwagger />, label: "Swagger" },
        { icon: <SiPostman />, label: "Postman" },
        { icon: <SiDocker />, label: "Docker" },
      ],
    },
    {
      title: "Task Manager API",
      blurb:
        "Node.js/Express API with MongoDB, JWT auth, and robust testing. Production-ready Docker setup.",
      link: "https://github.com/keren5005",
      tags: [
        { icon: <SiNodedotjs />, label: "Node.js" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiDocker />, label: "Docker" },
        { icon: <SiJavascript />, label: "JavaScript" },
      ],
    },
    {
      title: "Portfolio Website",
      blurb:
        "This portfolio — React + Tailwind, animated with Framer Motion. CI/CD friendly and easily extensible.",
      link: "https://github.com/keren5005/Dev-Protfolio-Website",
      tags: [
        { icon: <SiReact />, label: "React" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <SiJenkins />, label: "Jenkins" },
        { icon: <SiLinux />, label: "Linux" },
      ],
    },
    {
      title: "Systems & Languages",
      blurb:
        "Assorted algorithmic and systems demos in C++, Java (Spring), and C#/.NET. Focus on performance and clean architecture.",
      link: "https://github.com/keren5005",
      tags: [
        { icon: <SiCplusplus />, label: "C++" },
        { icon: <SiSpringboot />, label: "Spring Boot" },
        { icon: <SiOpenjdk />, label: "OpenJDK" },
        { icon: <SiDotnet />, label: "C# / .NET" }, // 👈 fixed
      ],
    },
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-teal-600 dark:text-teal-400 mb-6">
          Featured & Top Projects
        </h2>

        {/* ⭐ Featured Project card */}
        <motion.article
          whileHover={{ y: -4 }}
          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 shadow-sm mb-10"
        >
          <h3 className="text-xl font-bold dark:text-gray-100">{featured.title}</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{featured.blurb}</p>

          <div className="flex flex-wrap gap-3 mt-4 text-gray-800 dark:text-gray-200">
            {featured.tags.map((t, i) => (
              <Tag key={i} icon={t.icon} label={t.label} />
            ))}
          </div>

          <div className="mt-5">
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
            >
              <AiFillGithub />
              View on GitHub
            </a>
          </div>
        </motion.article>

        {/* Top Projects list */}
        <h3 className="text-2xl font-semibold text-center text-teal-600 dark:text-teal-400 mb-6">
          Top Projects
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {p.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                {p.blurb}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <Tag key={i} icon={t.icon} label={t.label} />
                ))}
              </div>

              <div className="mt-5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
                >
                  <AiFillGithub />
                  View on GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
