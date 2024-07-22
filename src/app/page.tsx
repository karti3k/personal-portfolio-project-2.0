'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import About from '@/components/About';
import Creations from '@/components/Creations';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Detect system dark mode preference on initial render
  useEffect(() => {
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Creations isDarkMode={isDarkMode}/>
      <Experience isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};

export default App;