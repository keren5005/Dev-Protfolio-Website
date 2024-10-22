import React from 'react';

const TopSkills = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'Go',
    'SQL', 'Docker', 'React', 'Node.js', 'Git', 'Linux',
    'CSS', 'HTML', 'REST APIs', 'Unity', 'Prometheus', 'Wireshark'
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl text-center mb-8 text-teal-600 dark:text-teal-400">Top Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 
                       font-semibold text-lg py-3 px-6 rounded-lg shadow-md 
                       hover:shadow-xl transition-all duration-300 
                       hover:scale-110 hover:bg-teal-100 dark:hover:bg-teal-700 
                       hover:text-teal-600 dark:hover:text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSkills;
