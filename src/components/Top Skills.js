import React, { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export const scrollLeft = (ref) => {
  ref.current.scrollBy({ left: -300, behavior: 'smooth' });
};

export const scrollRight = (ref) => {
  ref.current.scrollBy({ left: 300, behavior: 'smooth' });
};

const TopSkills = () => {
  const skillsContainerRef = useRef(null);
  const skills = [
    'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'Go',
    'SQL', 'Docker', 'React', 'Node.js', 'Git', 'Linux',
    'CSS', 'HTML', 'REST APIs', 'Unity', 'Prometheus', 'Wireshark'
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl text-center mb-8 text-teal-600 dark:text-teal-400">Top Skills</h2>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow Button */}
        <button
          className="absolute left-8 z-10 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
          onClick={() => scrollLeft(skillsContainerRef)}
        >
          <AiOutlineLeft size={24} />
        </button>

        {/* Skills List */}
        <div
          ref={skillsContainerRef}
          className="flex overflow-x-auto space-x-4 px-12 py-4 scrollbar-hide"
          style={{ maxWidth: '80%', scrollSnapType: 'x mandatory' }} // Ensure the list stays centered
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 
                         font-semibold text-lg py-3 px-6 rounded-lg shadow-md 
                         hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 
                         hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-700 
                         hover:text-teal-600 dark:hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute right-8 z-10 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
          onClick={() => scrollRight(skillsContainerRef)}
        >
          <AiOutlineRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TopSkills;
