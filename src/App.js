import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import './App.css';  // Import Tailwind CSS

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [showToolbar, setShowToolbar] = useState(false);

  useEffect(() => {
    // Apply the dark mode to the body and html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-gray-900');
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleToolbar = () => {
    setShowToolbar(!showToolbar);
  };

  const closeToolbar = () => {
    setShowToolbar(false); // Ensure the toolbar closes when this function is triggered
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300 min-h-screen`}>
      <Router>
        {/* Navbar remains unchanged */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Toggle button for the global toolbar */}
        <button
          className="fixed right-4 top-20 z-50 p-3 bg-teal-500 dark:bg-teal-300 rounded-full shadow-lg hover:bg-teal-600 dark:hover:bg-teal-400"
          onClick={toggleToolbar}
        >
          {showToolbar ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>

        {/* Right-side sliding toolbar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-100 dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
            showToolbar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 space-y-4 relative">
            {/* Close button inside the toolbar */}
            <button
              className="absolute top-4 right-4 p-2 bg-teal-500 dark:bg-teal-300 rounded-full shadow-lg hover:bg-teal-600 dark:hover:bg-teal-400"
              onClick={closeToolbar}
            >
              <FaTimes className="text-white" />
            </button>

            <h4 className="text-xl font-bold text-gray-800 dark:text-gray-300">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-teal-600 dark:text-teal-400 hover:text-teal-800" onClick={closeToolbar}>Home</a></li>
              <li><a href="/projects" className="text-teal-600 dark:text-teal-400 hover:text-teal-800" onClick={closeToolbar}>Projects</a></li>
              <li><a href="/contact" className="text-teal-600 dark:text-teal-400 hover:text-teal-800" onClick={closeToolbar}>Contact</a></li>
              <li><a href="/resume" className="text-teal-600 dark:text-teal-400 hover:text-teal-800" onClick={closeToolbar}>Resume</a></li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
              className="mt-4 p-2 bg-teal-500 dark:bg-teal-300 rounded-full shadow-lg hover:bg-teal-600 dark:hover:bg-teal-400"
              onClick={toggleDarkMode}
            >
              {darkMode ? <BsFillSunFill className="text-white" /> : <BsFillMoonFill className="text-white" />}
            </button>
          </div>
        </div>

        {/* Page Content with background applied to full width and height */}
        <main className="container mx-auto p-4 sm:p-6 lg:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
