import React from 'react';

const techIconMap = {
  "TypeScript":  "https://cdn.simpleicons.org/typescript/94a3b8",
  "JavaScript":  "https://cdn.simpleicons.org/javascript/94a3b8",
  "Python":      "https://cdn.simpleicons.org/python/94a3b8",
  "Go":          "https://cdn.simpleicons.org/go/94a3b8",
  "C#":          "https://cdn.simpleicons.org/csharp/94a3b8",
  "C++":         "https://cdn.simpleicons.org/cplusplus/94a3b8",
  "Docker":      "https://cdn.simpleicons.org/docker/94a3b8",
  "React":       "https://cdn.simpleicons.org/react/94a3b8",
  "Node.js":     "https://cdn.simpleicons.org/nodedotjs/94a3b8",
  "PostgreSQL":  "https://cdn.simpleicons.org/postgresql/94a3b8",
  "MongoDB":     "https://cdn.simpleicons.org/mongodb/94a3b8",
  "Redis":       "https://cdn.simpleicons.org/redis/94a3b8",
  "Linux":       "https://cdn.simpleicons.org/linux/94a3b8",
  "Git":         "https://cdn.simpleicons.org/git/94a3b8",
  "Kafka":       "https://cdn.simpleicons.org/apachekafka/94a3b8",
  "Prometheus":  "https://cdn.simpleicons.org/prometheus/94a3b8",
  "Kubernetes":  "https://cdn.simpleicons.org/kubernetes/94a3b8",
  "GitHub":      "https://cdn.simpleicons.org/github/94a3b8",
};

const TechIcons = () => (
  <div className="flex flex-wrap justify-center">
    {Object.keys(techIconMap).map((tech) => (
      <div key={tech} className="m-4 text-center">
        <img src={techIconMap[tech]} alt={`${tech} Logo`} className="w-12 h-12" />
        <p className="mt-2 text-sm text-zinc-400">{tech}</p>
      </div>
    ))}
  </div>
);

export default TechIcons;
export { techIconMap };
