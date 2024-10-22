import React from 'react';

const techIconMap = {
  "C#": "https://simpleicons.org/icons/csharp.svg",
  "TypeScript": "https://simpleicons.org/icons/typescript.svg",
  "JavaScript": "https://simpleicons.org/icons/javascript.svg",
  "C++": "https://simpleicons.org/icons/cplusplus.svg",
  "C": "https://simpleicons.org/icons/c.svg",
  "Python": "https://simpleicons.org/icons/python.svg",
  "Go": "https://simpleicons.org/icons/go.svg",
  "SQL": "https://simpleicons.org/icons/postgresql.svg", 
  "Docker": "https://simpleicons.org/icons/docker.svg",
  "React": "https://simpleicons.org/icons/react.svg",
  "Node.js": "https://simpleicons.org/icons/nodedotjs.svg",
  "GIT": "https://simpleicons.org/icons/git.svg",
  "Linux": "https://simpleicons.org/icons/linux.svg",
  "CSS": "https://simpleicons.org/icons/css3.svg",
  "HTML": "https://simpleicons.org/icons/html5.svg",
  "REST APIs": "https://simpleicons.org/icons/api.svg",
  "Unity": "https://simpleicons.org/icons/unity.svg",
  "Prometheus": "https://simpleicons.org/icons/prometheus.svg",
  "Wireshark": "https://simpleicons.org/icons/wireshark.svg",
};

const TechIcons = () => (
  <div className="flex flex-wrap justify-center">
    {Object.keys(techIconMap).map((tech) => (
      <div key={tech} className="m-4 text-center">
        <img
          src={techIconMap[tech]}
          alt={`${tech} Logo`}
          className="w-12 h-12"
        />
        <p className="mt-2">{tech}</p>
      </div>
    ))}
  </div>
);

export default TechIcons;
export { techIconMap };
