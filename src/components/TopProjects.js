import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { motion } from 'framer-motion';

export const scrollLeft = (ref) => {
  ref.current.scrollBy({ left: -300, behavior: 'smooth' });
};

export const scrollRight = (ref) => {
  ref.current.scrollBy({ left: 300, behavior: 'smooth' });
};

export const projects = [
  {
    title: 'PromLink',
    description: 'Open-source contribution to Prometheus, written in Go, integrating the Alertmanager component with Mattermost and RocketChat.',
    githubLink: 'https://github.com/keren5005/PromLink',
    image: './promLink.png',
  },
  {
    title: 'Job Search Manager',
    description: 'A job search management app that integrates with job listing APIs to manage and track job applications.',
    githubLink: 'https://github.com/keren5005/Job-Search-Manager',
    image: './JobFinder.png',
  },
  {
    title: 'Fully Connected Feed Forward NN',
    description: 'A neural network built in Python for high accuracy in image recognition with multiple activation functions.',
    githubLink: 'https://github.com/keren5005/FullyConnectedFeedForwardNN',
    image: './nn.png',
  },
];

function TopProjects() {
  const projectsContainerRef = useRef(null);

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-semibold text-center mb-8 text-teal-600 dark:text-teal-400">Top Projects</h2>
      <div className="relative flex justify-center items-center max-w-full overflow-hidden">
      {/* Left Scroll Button */}
        <motion.button 
        className="absolute left-0 z-10 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
            console.log("Left button clicked"); // Debugging log
            scrollLeft(projectsContainerRef);
        }}
        >
        <AiOutlineLeft size={20} />
        </motion.button>

        {/* Projects Wrapper */}
        <div 
          ref={projectsContainerRef} 
          className="flex justify-center space-x-6 overflow-x-auto scrollbar-hide project-wrapper max-w-screen-lg"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center cursor-pointer w-72 h-auto transform transition-transform duration-300"
              whileHover={{
                scale: 1.1,
                zIndex: 10, // Bring the card forward
                boxShadow: "0px 6px 20px rgba(173, 216, 230, 1)", // Light blue shadow on hover
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-4">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-300 underline transition">
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <motion.button 
          className="absolute right-0 z-10 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollRight(projectsContainerRef)}
        >
          <AiOutlineRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}

export default TopProjects;
