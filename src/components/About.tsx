'use client';
import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <main className={`w-full h-lvh ${isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'}`}>
      {/* About component content */}
    </main>
  );
};

export default About;