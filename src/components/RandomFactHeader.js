import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa'; // Import an icon for the circular button

const RandomFactHeader = () => {
  // Array of random facts about you
  const facts = [
    "I love solving puzzles and coding challenges.",
    "I was part of Unit 8200's cyber intelligence team.",
    "I'm passionate about cybersecurity.",
    "I've contributed to open-source projects like Prometheus integrations.",
    "I enjoy learning new programming languages like Go and TypeScript.",
  ];

  // State to manage the current fact
  const [fact, setFact] = useState('');

  // Function to show a random fact
  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div className="flex items-center justify-start p-4 bg-teal-600 text-white relative">
      <h1 className="text-2xl font-bold mr-4">Keren Cohen</h1>

      {/* Circular Random Fact Button */}
      <button
        className="flex items-center justify-center bg-white text-teal-600 w-10 h-10 rounded-full shadow-lg hover:bg-gray-100 transition"
        onClick={showRandomFact}
        aria-label="Show Random Fact"
      >
        <FaInfoCircle className="text-xl" />
      </button>

      {/* Display the random fact when the button is clicked */}
      {fact && (
        <div className="mt-4 bg-gray-100 text-teal-700 p-3 rounded-lg shadow absolute top-20 left-0 w-full text-center">
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
};

export default RandomFactHeader;
