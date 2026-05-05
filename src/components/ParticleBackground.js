import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { techIconMap } from './TechIcons';

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const iconsArray = Object.keys(techIconMap).map((tech) => ({
    src: techIconMap[tech],
    height: 28,
    width: 28,
  }));

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 28 },
          shape: {
            type: 'image',
            image: iconsArray,
          },
          opacity: {
            value: 0.18,
            random: { enable: true, minimumValue: 0.08 },
          },
          size: {
            value: 22,
            random: { enable: true, minimumValue: 14 },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            outMode: 'bounce',
            random: true,
            straight: false,
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;
