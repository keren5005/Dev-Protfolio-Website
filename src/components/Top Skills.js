import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { AiOutlineDown } from 'react-icons/ai';

const TopSkills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const skills = [
    'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'Go',
    'SQL', 'Docker', 'React', 'Node.js', 'Git', 'Linux',
    'CSS', 'HTML', 'REST APIs', 'Unity', 'Prometheus', 'Wireshark'
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-4xl text-center mb-8 text-teal-600 dark:text-teal-400" onClick={() => setIsOpen(!isOpen)}>
        Top Skills <AiOutlineDown className="inline" />
      </h2>
      
      {isOpen && (
        <div className="flex flex-col items-center">
          <div className="overflow-hidden">
            {/* Scrollable Container */}
            <div className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 skill-wrapper">
              {skills.map((skill, index) => (
                <div key={index} className="skill-box" title={skill}>
                  {skill.charAt(0)} {/* Display first letter or icon */}
                </div>
              ))}
            </div>
          </div>

          {/* Swiper Carousel */}
          <Swiper spaceBetween={20} slidesPerView={3}>
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="skill-box">
                {skill}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tooltip/Hover Effect */}
          <div className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <div key={index} className="skill-box" title={skill}>
                {skill.charAt(0)} {/* Show first letter or icon */}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TopSkills;
