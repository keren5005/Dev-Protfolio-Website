import React, { useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    name: 'PromLink',
    description: 'Open-source contribution to Prometheus, written in Go, integrating the Alertmanager component with Mattermost and RocketChat.',
    link: 'https://github.com/keren5005/PromLink',
    image: '/promLink.png'
  },
  {
    name: 'Job Search Manager',
    description: 'A job search management app that integrates with job listing APIs to manage and track job applications.',
    link: 'https://github.com/keren5005/Job-Search-Manager',
    image: '/JobFinder.png'
  },
  {
    name: 'Fully Connected Feed Forward NN',
    description: 'A neural network built in Python for high accuracy in image recognition with multiple activation functions.',
    link: 'https://github.com/keren5005/FullyConnectedFeedForwardNN',
    image: '/nn.png'
  }
];

const TopProjects = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 relative">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-teal-300">Top Projects</h2>

      {/* Left arrow button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        onClick={scrollLeft}
      >
        <FaArrowLeft className="text-xl text-white" />
      </button>

      {/* Scrollable container */}
      <div className="flex space-x-6 overflow-x-auto p-4 snap-x snap-mandatory" ref={scrollContainer}>
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-64 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 snap-center">
            <img 
              src={project.image} 
              alt={`${project.name} project screenshot`} 
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-300">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-teal-500 dark:text-teal-300 mt-4 hover:text-teal-700 dark:hover:text-teal-400"
            >
              <AiFillGithub />
              <span>View on GitHub</span>
            </a>
          </div>
        ))}
      </div>

      {/* Right arrow button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
        onClick={scrollRight}
      >
        <FaArrowRight className="text-xl text-white" />
      </button>
    </section>
  );
};

export default TopProjects;
