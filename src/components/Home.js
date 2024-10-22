import React, { useState, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import TopProjects from './TopProjects';
import GitHubVisualization from './GitHubVisualization';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import RandomFactHeader from './RandomFactHeader';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFeature, setCurrentFeature] = useState('');
  const skillContainerRef = useRef(null);

  const openModal = (feature) => {
    setCurrentFeature(feature);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentFeature('');
  };

  // Scroll functions for the skill section arrow buttons
  const scrollLeft = () => {
    skillContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    skillContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Skills data
  const skills = [
    'JavaScript',
    'TypeScript',
    'C#',
    'C++',
    'Python',
    'Go',
    'SQL',
    'Docker',
    'React',
    'Node.js',
    'Git',
    'Linux',
    'CSS',
    'HTML',
    'REST APIs',
    'Unity',
    'Prometheus',
    'Wireshark',
  ];

  return (
    <>
      {/* Parallax Hero Section */}
      <Parallax bgImage="/path-to-background-image.jpg" strength={300}>
        <section className="relative h-screen overflow-hidden bg-white dark:bg-gray-900">
          <ParticleBackground />
          <motion.div
            className="relative z-10 text-center flex flex-col items-center justify-center h-full p-10 safe-zone"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Smaller image and container */}
            <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 max-w-md mx-auto">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-teal-600 dark:border-teal-400">
                <img
                  src="/avatarPictures/hi.png" 
                  alt="Profile Picture"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
                Keren Cohen
              </h2>
              <h3 className="text-xl py-2 dark:text-gray-300">Software Developer</h3>
              <p className="text-base py-3 leading-7 max-w-lg mx-auto text-gray-800 dark:text-gray-200">
                Hi! I'm Keren 👋💻. A driven Junior Developer ready to contribute, learn,
                and grow. Eager for my first role to build impactful solutions and make
                a difference!
              </p>
              <div className="text-3xl flex justify-center gap-4 py-3 text-gray-600 dark:text-gray-400">
                <div className="flex justify-center items-center gap-2">
                  <a
                    href="https://github.com/keren5005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/keren-cohen-aa6987215/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="mailto:keren5005005@gmail.com"
                    className="hover:text-teal-500"
                  >
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
              {/* Download Resume Button */}
              <a
                href="/Keren Cohen Software Developer CV.pdf"
                download="Keren_Cohen_Resume"
                className="mt-4 inline-block bg-teal-600 dark:bg-teal-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 dark:hover:bg-teal-500 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </section>
      </Parallax>

      {/* Skills Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl text-center mb-8 text-teal-600 dark:text-teal-400">Top Skills</h2>
        <div className="relative flex justify-center items-center">
          {/* Left Scroll Button */}
          <button 
            className="absolute left-0 z-10 bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition"
            onClick={scrollLeft}
          >
            <AiOutlineLeft size={24} />
          </button>

          <div ref={skillContainerRef} className="flex overflow-x-auto scrollbar-hide space-x-4 skill-wrapper">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Add hover effect
                transition={{ type: "spring", stiffness: 300 }}
                className="skill-box bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 text-center cursor-pointer"
              >
                <p className="text-lg font-bold transition-colors duration-300">{skill}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button 
            className="absolute right-0 z-10 bg-teal-600 text-white p-3 rounded-full shadow-md hover:bg-teal-700 transition"
            onClick={scrollRight}
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </section>

      {/* GitHub Features Section */}
      <section className="py-10 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl text-center mb-8 text-teal-600 dark:text-teal-400">GitHub Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
          {/* GitHub Stats Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 128, 123, 0.3)" }} // Hover effect
            transition={{ duration: 0.3 }}
            onClick={() => openModal('GitHub Stats')}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-600">GitHub Stats</h3>
          </motion.div>

          {/* Contribution Graph Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 128, 123, 0.3)" }} // Hover effect
            transition={{ duration: 0.3 }}
            onClick={() => openModal('Contribution Graph')}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Contribution Graph</h3>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 128, 123, 0.3)" }} // Hover effect
            transition={{ duration: 0.3 }}
            onClick={() => openModal('Top Languages')}
          >
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Top Languages</h3>
          </motion.div>
        </div>
      </section>

      {/* Modal for Displaying GitHub Features */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-xl w-full transition-transform transform scale-110">
            <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-4">{currentFeature}</h2>
            {currentFeature === 'GitHub Stats' && (
              <div className="flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=keren5005&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
            )}
            {currentFeature === 'Contribution Graph' && (
              <div className="flex justify-center">
                <img
                  src="https://ghchart.rshah.org/keren5005"
                  alt="GitHub Contribution Graph"
                  className="w-full"
                />
              </div>
            )}
            {currentFeature === 'Top Languages' && (
              <div className="flex justify-center">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=keren5005&layout=compact&theme=radical"
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
            )}
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TopProjects Section */}
      <TopProjects />

      {/* GitHub Achievements Section */}
      <GitHubVisualization />
    </>
  );
}
