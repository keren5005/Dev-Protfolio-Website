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
    height: 20,
    width: 20,
  }));

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 50, // Adjust the number of particles
          },
          shape: {
            type: 'image',
            image: iconsArray,
          },
          opacity: {
            value: 0.7,
          },
          size: {
            value: 20,
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            outMode: 'bounce',
          },
          // Configure particle movement so they avoid the central area
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outMode: 'bounce',
            random: true,
            straight: false,
            // Ensure they only move at the edges
            bounce: false,
            avoid: {
              area: {
                x: 0.5,  // Avoid the central horizontal area (50%)
                y: 0.5,  // Avoid the central vertical area (50%)
                radius: 200, // Increase or decrease this to make the safe zone bigger or smaller
              },
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;
