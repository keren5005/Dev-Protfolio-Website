import React, { useState, useRef } from 'react';
import ParticleBackground from './ParticleBackground';
import TopProjects from './TopProjects';
import GitHubVisualization from './GitHubVisualization';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

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

  const scrollLeft = () => {
    skillContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    skillContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const skills = [
    'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'Go',
    'SQL', 'Docker', 'React', 'Node.js', 'Git', 'Linux',
    'CSS', 'HTML', 'REST APIs', 'Unity', 'Prometheus', 'Wireshark'
  ];

  return (
    <>
      {/* Parallax Hero Section */}
      <Parallax bgImage="/path-to-background-image.jpg" strength={300}>
        <section className="relative h-screen overflow-hidden bg-white dark:bg-gray-900">
          <ParticleBackground />
          <motion.div
            className="relative z-10 text-center flex flex-col items-center justify-center h-full p-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
                <a href="https://github.com/keren5005" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/keren-cohen-aa6987215/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
                  <AiFillLinkedin />
                </a>
                <a href="mailto:keren5005005@gmail.com" className="hover:text-teal-500">
                  <AiOutlineMail />
                </a>
              </div>
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
          <div ref={skillContainerRef} className="flex overflow-x-auto space-x-4 scrollbar-hide p-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-teal-100 dark:hover:bg-teal-700">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Projects Section */}
      <TopProjects />
      
{/* GitHub Features Section */}
<section className="py-10 bg-gray-50 dark:bg-gray-800">
  <h2 className="text-3xl text-center mb-8 text-teal-600 dark:text-teal-400">GitHub Features</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
    <motion.div
      className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
      whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 128, 123, 0.3)" }} // Hover effect
      transition={{ duration: 0.3 }}
      onClick={() => openModal('GitHub Stats')}
    >
      <h3 className="text-2xl font-bold mb-4 text-teal-600">GitHub Stats</h3>
    </motion.div>
    <motion.div
      className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 text-center cursor-pointer"
      whileHover={{ scale: 1.15, boxShadow: "0px 10px 20px rgba(0, 128, 123, 0.3)" }} // Hover effect
      transition={{ duration: 0.3 }}
      onClick={() => openModal('Contribution Graph')}
    >
      <h3 className="text-2xl font-bold mb-4 text-teal-600">Contribution Graph</h3>
    </motion.div>
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
        <img
          src="https://github-readme-stats.vercel.app/api?username=keren5005&show_icons=true&theme=radical"
          alt="GitHub Stats"
        />
      )}
      {currentFeature === 'Contribution Graph' && (
        <img
          src="https://ghchart.rshah.org/keren5005"
          alt="Contribution Graph"
        />
      )}
      {currentFeature === 'Top Languages' && (
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=keren5005&layout=compact&theme=radical"
          alt="Top Languages"
        />
      )}
      <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
    </div>
  </div>
)}


      {/* GitHub Visualization Section */}
      <GitHubVisualization />

    </>
  );
}
