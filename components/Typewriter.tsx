import { useState } from 'react';
import { TypewriterEffect } from './ui/typewriter-effect';

export const TypewriterEffectDemo = () => {
  const words = [
    {
      text: 'Your',
    },
    {
      text: 'Path',
    },
    {
      text: 'to',
    },
    {
      text: 'Precision',
    },
    {
      text: 'Agriculture.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

  // Function to redirect to another website
  const redirectToWebsite = () => {
    window.open('https://www.digicrop.ai/home', '_blank'); // Replace with your website URL
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-[15rem]">
      {/* Button for redirect */}
      <button
        onClick={redirectToWebsite}
        className="fixed top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 z-10"
      >
        Visit Our Website
      </button>

      {/* Container for text and typewriter effect */}
      <div className="text-center mb-10">
        <p className="chatbot-text-primary text-lg">Unlock Smart Farming with DigiCrop</p>
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
};
