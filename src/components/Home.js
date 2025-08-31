// src/components/Home.js
import React, { useState } from 'react';
import ParticleBackground from './ParticleBackground';
import GitHubVisualization from './GitHubVisualization';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

// ✅ SimpleIcons (correct names)
import {
  SiSpringboot,
  SiOpenjdk,
  SiPython,
  SiFastapi,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSwagger,
  SiPostman,
  SiApachekafka,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiElasticsearch,
  SiDocker,
  SiLinux,
  SiJenkins,
  SiGo,
  SiPrometheus,
} from 'react-icons/si';

/* ------------------------- Small tag pill helper ------------------------- */
const Tag = ({ icon, label }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-200">
    <span className="text-lg">{icon}</span>
    {label}
  </span>
);

/* ------------------------- Project list card helper ------------------------- */
const ProjectItem = ({ title, blurb, tags, link }) => (
  <article className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 shadow-sm">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
    <p className="mt-3 text-gray-700 dark:text-gray-300">{blurb}</p>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t, i) => (
        <Tag key={i} icon={t.icon} label={t.label} />
      ))}
    </div>

    <div className="mt-5">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
      >
        <AiFillGithub />
        View on GitHub
      </a>
    </div>
  </article>
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState('');

  const openModal = (feature) => {
    setCurrentFeature(feature);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setCurrentFeature('');
  };

  // Toolbox-style skills (grid)
  const skills = [
    { label: 'Java (Spring Boot)', icon: <SiSpringboot /> },
    { label: 'Java (OpenJDK)', icon: <SiOpenjdk /> },
    { label: 'Python', icon: <SiPython /> },
    { label: 'FastAPI', icon: <SiFastapi /> },
    { label: 'C++', icon: <SiCplusplus /> },
    { label: 'JavaScript', icon: <SiJavascript /> },
    { label: 'TypeScript', icon: <SiTypescript /> },
    { label: 'React', icon: <SiReact /> },
    { label: 'Node.js', icon: <SiNodedotjs /> },
    { label: 'REST APIs', icon: <SiSwagger /> },
    { label: 'Postman', icon: <SiPostman /> },
    { label: 'Kafka', icon: <SiApachekafka /> },
    { label: 'Redis', icon: <SiRedis /> },
    { label: 'MongoDB', icon: <SiMongodb /> },
    { label: 'PostgreSQL', icon: <SiPostgresql /> },
    { label: 'Elasticsearch', icon: <SiElasticsearch /> },
    { label: 'Docker', icon: <SiDocker /> },
    { label: 'Linux', icon: <SiLinux /> },
    { label: 'Jenkins', icon: <SiJenkins /> },
  ];

  const funFacts = ['Started programming at 14', 'Military & industry experience'];

  /* ------------------------------- Projects ------------------------------- */
  const featured = {
    title: 'Dockerized Personal Finance Tracker',
    blurb:
      'Full-stack personal finance app with FastAPI backend, React UI, PostgreSQL database, optional Redis cache — all containerized with Docker Compose.',
    tags: [
      { icon: <SiDocker />, label: 'Docker' },
      { icon: <SiFastapi />, label: 'FastAPI' },
      { icon: <SiReact />, label: 'React' },
      { icon: <SiPostgresql />, label: 'PostgreSQL' },
      { icon: <SiPython />, label: 'Python' },
      { icon: <SiRedis />, label: 'Redis' },
    ],
    link: 'https://github.com/keren5005/Dockerized-Personal-Finance-Tracker',
  };

  const projects = [
    {
      title: 'PromLink',
      blurb:
        'Open-source contribution to Prometheus, written in Go, integrating the Alertmanager component with Mattermost and Rocket.Chat.',
      tags: [
        { icon: <SiGo />, label: 'Go' },
        { icon: <SiPrometheus />, label: 'Prometheus' },
      ],
      link: 'https://github.com/keren5005/prom-link', // update if different
    },
    {
      title: 'Job Search Manager',
      blurb:
        'Job search management app integrating job listing APIs to manage and track applications.',
      tags: [
        { icon: <SiReact />, label: 'React' },
        { icon: <SiNodedotjs />, label: 'Node.js' },
        { icon: <SiPostgresql />, label: 'PostgreSQL' },
      ],
      link: 'https://github.com/keren5005/job-search-manager', // update if different
    },
    {
      title: 'Fully Connected Feed Forward NN',
      blurb:
        'A neural network built in Python for image recognition with multiple activation functions and clear training metrics.',
      tags: [{ icon: <SiPython />, label: 'Python' }],
      link: 'https://github.com/keren5005/FC-Feed-Forward-NN', // update if different
    },
  ];

  return (
    <>
      {/* Hero */}
      <Parallax bgImage="/hero-bg.jpg" strength={200}>
        <section className="relative h-screen overflow-hidden bg-white dark:bg-gray-900">
          <ParticleBackground />
          <motion.div
            className="relative z-10 text-center flex flex-col items-center justify-center h-full p-4"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 max-w-lg w-[92%] md:w-auto">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-teal-600 dark:border-teal-400 mx-auto">
                <img
                  src="/avatarPictures/hi.png"
                  alt="Keren Cohen avatar"
                  className="object-cover w-full h-full"
                />
              </div>

              <h1 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                Keren Cohen
              </h1>
              <h2 className="text-xl mt-1 mb-3 dark:text-gray-300">Software Developer</h2>

              <p className="text-base leading-7 max-w-xl mx-auto text-gray-800 dark:text-gray-200">
                Software Developer with <strong>military</strong> and <strong>industry</strong>{' '}
                experience. I craft reliable backends, clean APIs, and data-driven services.
                Lifelong builder who<strong> started coding at 14</strong> — I love shipping practical
                solutions that help people.
              </p>

              {/* Fun facts */}
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                {funFacts.map((f, i) => (
                  <li
                    key={i}
                    className="px-3 py-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {/* Socials */}
              <div className="text-3xl flex justify-center gap-4 py-4 text-gray-600 dark:text-gray-400">
                <a
                  href="https://github.com/keren5005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/keren-cohen-aa6987215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin />
                </a>
                <a href="mailto:keren5005005@gmail.com" className="hover:text-teal-500" aria-label="Email">
                  <AiOutlineMail />
                </a>
              </div>

              <a
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </section>
      </Parallax>

      {/* Top Skills */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-center mb-2 text-teal-600 dark:text-teal-400">Top Skills</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Tech Stack</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 px-4 py-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔝 Unified Top Projects (Featured + list) */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-teal-600 dark:text-teal-400 mb-8">
            Top Projects
          </h2>

          {/* Featured goes first */}
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 shadow-sm mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                Featured
              </span>
              <h3 className="text-xl font-bold dark:text-gray-100">{featured.title}</h3>
            </div>

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
                className="inline-flex items-center px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Rest of the projects as matching list cards */}
          <div className="space-y-8">
            {projects.map((p, idx) => (
              <ProjectItem key={idx} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Features */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl text-center mb-8 text-teal-600 dark:text-teal-400">GitHub Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10">
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.07, boxShadow: '0px 10px 20px rgba(0, 128, 123, 0.25)' }}
            transition={{ duration: 0.25 }}
            onClick={() => openModal('GitHub Stats')}
          >
            <h3 className="text-2xl font-bold mb-1 text-teal-600">GitHub Stats</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Commits, stars & more</p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.07, boxShadow: '0px 10px 20px rgba(0, 128, 123, 0.25)' }}
            transition={{ duration: 0.25 }}
            onClick={() => openModal('Contribution Graph')}
          >
            <h3 className="text-2xl font-bold mb-1 text-teal-600">Contribution Graph</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Daily activity heatmap</p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.07, boxShadow: '0px 10px 20px rgba(0, 128, 123, 0.25)' }}
            transition={{ duration: 0.25 }}
            onClick={() => openModal('Top Languages')}
          >
            <h3 className="text-2xl font-bold mb-1 text-teal-600">Top Languages</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Repo language split</p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full">
            <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-4">{currentFeature}</h2>

            {currentFeature === 'GitHub Stats' && (
              <img
                src="https://github-readme-stats.vercel.app/api?username=keren5005&show_icons=true&theme=radical"
                alt="GitHub Stats"
                className="w-full"
              />
            )}
            {currentFeature === 'Contribution Graph' && (
              <img src="https://ghchart.rshah.org/keren5005" alt="Contribution Graph" className="w-full" />
            )}
            {currentFeature === 'Top Languages' && (
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=keren5005&layout=compact&theme=radical"
                alt="Top Languages"
                className="w-full"
              />
            )}

            <button onClick={closeModal} className="mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* GitHub Visualization */}
      <GitHubVisualization />
    </>
  );
}
