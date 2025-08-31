import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-teal-600 dark:bg-gray-800 flex justify-between items-center py-6 px-8 shadow-lg">
      <h1 className="text-2xl font-bold text-white dark:text-gray-300">Keren Cohen</h1>
      <ul className="flex items-center space-x-6 text-white dark:text-gray-300">
        <li><Link to="/" className="hover:text-gray-200 dark:hover:text-gray-400">Home</Link></li>
        <li><Link to="/projects" className="hover:text-gray-200 dark:hover:text-gray-400">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200 dark:hover:text-gray-400">Contact</Link></li>
        <li><Link to="/resume" className="hover:text-gray-200 dark:hover:text-gray-400">Resume</Link></li>
        <li>
          {darkMode ? (
            <BsFillSunFill
              onClick={() => setDarkMode(false)}
              className="cursor-pointer text-2xl hover:text-yellow-400"
            />
          ) : (
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(true)}
              className="cursor-pointer text-2xl hover:text-yellow-400"
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
