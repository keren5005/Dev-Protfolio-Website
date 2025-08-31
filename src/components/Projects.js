// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  // NOTE: SiCsharp is NOT exported in your react-icons version — use SiDotnet instead
  SiTypescript, SiJavascript, SiCplusplus, SiPython, SiGo, SiPostgresql,
  SiDocker, SiReact, SiNodedotjs, SiGit, SiLinux, SiCss3, SiHtml5, SiUnity,
  SiPrometheus, SiWireshark, SiDotnet,
} from 'react-icons/si';

const techStackIcons = {
  "C#": <SiDotnet className="text-2xl" />,       // replaced SiCsharp -> SiDotnet
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
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setFilteredRepos(data);
      })
      .catch(() => {
        setRepositories([]);
        setFilteredRepos([]);
      });
  }, []);

  const handleStackFilter = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedStacks((prev) => [...prev, value]);
    } else {
      setSelectedStacks((prev) => prev.filter((stack) => stack !== value));
    }
  };

  useEffect(() => {
    if (selectedStacks.length > 0) {
      const filtered = repositories.filter((repo) =>
        selectedStacks.some(
          (stack) => repo.language === stack || repo.topics?.includes(stack)
        )
      );
      setFilteredRepos(filtered);
    } else {
      setFilteredRepos(repositories);
    }
  }, [selectedStacks, repositories]);

  const clearFilters = () => {
    setSelectedStacks([]);
    setSearchInput("");
  };

  return (
    <section className="container mx-auto p-10 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <h2 className="text-4xl text-center mb-8">Projects</h2>

      <h3 className="text-2xl text-center mb-4 text-neutral-200"></h3>
      <p className="text-center mb-4">
        I currently have <strong>{filteredRepos.length}</strong> project
        {filteredRepos.length !== 1 ? "s" : ""} to share! and some more in the making...
      </p>

      {/* Tech Stack Search/Dropdown Toolbar */}
      <div className="relative text-center mb-6">
        <button
          onClick={() => setDropdownOpen((o) => !o)}
          className="bg-teal-500 text-white px-4 py-2 rounded-md"
        >
          {dropdownOpen ? "Close Tech Stack Filter" : "Filter by Tech Stack"}
        </button>

        {dropdownOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-lg mx-auto mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search tech stack..."
              className="w-full mb-4 p-2 border dark:border-gray-700 rounded-md"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(techStackIcons)
                .filter((stack) =>
                  stack.toLowerCase().includes(searchInput.toLowerCase())
                )
                .map((stack) => (
                  <label key={stack} className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={stack}
                      checked={selectedStacks.includes(stack)}
                      onChange={handleStackFilter}
                      className="form-checkbox h-4 w-4"
                    />
                    <span className="ml-2 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      {techStackIcons[stack]} {stack}
                    </span>
                  </label>
                ))}
            </div>

            {selectedStacks.length > 0 && (
              <button
                onClick={clearFilters}
                className="border border-neutral-300 dark:border-neutral-700 px-4 py-2 mt-4 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <div
            key={repo.id}
            className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-300 truncate">
              {repo.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4 truncate">
              {repo.description}
            </p>
            <div className="text-gray-500 dark:text-gray-400 mb-2">
              <span>{repo.language || "Unknown"}</span>
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
