<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  SiCsharp, SiTypescript, SiJavascript, SiCplusplus, SiPython, SiGo, SiPostgresql,
  SiDocker, SiReact, SiNodedotjs, SiGit, SiLinux, SiCss3, SiHtml5, SiUnity,
  SiPrometheus, SiWireshark,
} from 'react-icons/si';

const techStackIcons = {
  "C#": <SiCsharp className="text-2xl" />,
  "TypeScript": <SiTypescript className="text-2xl" />,
  "JavaScript": <SiJavascript className="text-2xl" />,
  "C++": <SiCplusplus className="text-2xl" />,
  "Python": <SiPython className="text-2xl" />,
  "Go": <SiGo className="text-2xl" />,
  "SQL": <SiPostgresql className="text-2xl" />,
  "Docker": <SiDocker className="text-2xl" />,
  "React": <SiReact className="text-2xl" />,
  "Node.js": <SiNodedotjs className="text-2xl" />,
  "GIT": <SiGit className="text-2xl" />,
  "Linux": <SiLinux className="text-2xl" />,
  "CSS": <SiCss3 className="text-2xl" />,
  "HTML": <SiHtml5 className="text-2xl" />,
  "REST APIs": null,
  "Unity": <SiUnity className="text-2xl" />,
  "Prometheus": <SiPrometheus className="text-2xl" />,
  "Wireshark": <SiWireshark className="text-2xl" />,
};

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [selectedStacks, setSelectedStacks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/keren5005/repos")
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setFilteredRepos(data);
      });
  }, []);

  const handleStackFilter = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedStacks([...selectedStacks, value]);
    } else {
      setSelectedStacks(selectedStacks.filter(stack => stack !== value));
    }
  };

  useEffect(() => {
    if (selectedStacks.length > 0) {
      const filtered = repositories.filter(repo => {
        return selectedStacks.some(stack => repo.language === stack || repo.topics?.includes(stack));
      });
      setFilteredRepos(filtered);
    } else {
      setFilteredRepos(repositories);
    }
  }, [selectedStacks, repositories]);

  const clearFilters = () => {
    setSelectedStacks([]);
  };

  return (
    <section className="container mx-auto p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <h2 className="text-4xl text-center mb-8">Projects</h2>

      <h3 className="text-2xl text-center mb-4 text-teal-600 dark:text-teal-400">
        🎉 Check out my projects! 🎉
      </h3>
      <p className="text-center mb-4">
        I currently have <strong>{filteredRepos.length}</strong> project{filteredRepos.length !== 1 ? 's' : ''} to share! and some more in the making...
      </p>

      {/* Tech Stack Search/Dropdown Toolbar */}
      <div className="relative text-center mb-6">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-teal-500 text-white px-4 py-2 rounded-md"
        >
          {dropdownOpen ? "Close Tech Stack Filter" : "Filter by Tech Stack"}
        </button>

        {dropdownOpen && (
          <div className="absolute w-full max-w-lg mx-auto mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search tech stack..."
              className="w-full mb-4 p-2 border dark:border-gray-700 rounded-md"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(techStackIcons)
                .filter(stack => stack.toLowerCase().includes(searchInput.toLowerCase()))
                .map(stack => (
                  <label key={stack} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={stack}
                      checked={selectedStacks.includes(stack)}
                      onChange={handleStackFilter}
                      className="form-checkbox h-4 w-4 text-teal-600 dark:text-teal-400"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{techStackIcons[stack]} {stack}</span>
                  </label>
                ))}
            </div>

            {selectedStacks.length > 0 && (
              <button
                onClick={clearFilters}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-md"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRepos.map(repo => (
          <div
            key={repo.id}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-300 truncate">{repo.name}</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4 truncate">{repo.description}</p>
            <div className="text-gray-500 dark:text-gray-400 mb-2">
              <span>{repo.language || 'Unknown'}</span>
            </div>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start space-x-2 text-teal-500 dark:text-teal-300 mt-4 hover:text-teal-700 dark:hover:text-teal-400"
            >
              <AiFillGithub className="w-5 h-5" />
              <span className="text-sm">View on GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
=======
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
>>>>>>> feature/unified-top-projects
