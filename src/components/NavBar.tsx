'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import SunGIF from '@/assets/sun.gif';
import MoonGIF from '@/assets/moon.gif';
import AboutSVG from '@/assets/about.svg';
import CreationsSVG from '@/assets/creations.svg';
import ExperienceSVG from '@/assets/experience.svg';
import LinkedInSVG from '@/assets/linkedin.svg';
import GitHubSVG from '@/assets/github.svg';
import YouTubeSVG from '@/assets/youtube.svg';
import BehanceSVG from '@/assets/behance.svg';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState<string>('About');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [modeButtonIcon, setModeButtonIcon] = useState<string | StaticImageData>(SunGIF);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setModeButtonIcon(isDarkMode ? SunGIF : MoonGIF);
  };

  // Detect system dark mode preference on initial render
  useEffect(() => {
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);
    setModeButtonIcon(systemPrefersDark ? MoonGIF : SunGIF);
  }, []);

  // Toggle menu for social icons
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${isDarkMode ? 'dark:bg-custom-black' : 'bg-custom-blue'} w-full h-14 md:h-20 flex items-center justify-between px-8 md:px-12 lg:px-32`}>

      <button 
        className={`rounded-3xl md:pr-2 border-2 border-white hover:text-slate-600 text-sm font-medium lg:font-semibold ${isDarkMode ? 'dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:text-white dark:bg-black' : 'text-white bg-custom-blue-40 hover:text-slate-600'}`}
        onClick={toggleDarkMode}
      >
        <Image src={modeButtonIcon} alt='sun/moon' className='rounded-3xl inline md:pr-1 w-7 h-7 md:w-11 md:h-10' />
        <span className='hidden sm:inline'>Change Theme</span>
      </button>

      <div className='flex-1 flex justify-center'>
        <div className='flex gap-6 lg:text-lg'>
          <Link href={''} className={`md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'About' ? (isDarkMode ? 'bg-black md:bg-custom-black dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'bg-custom-blue-40 md:bg-custom-blue border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`} onClick={() => setSelected('About')}>
            <Image src={AboutSVG} alt='i-1' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>About</span>
          </Link>

          <Link href={''} className={`md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'Creations' ? (isDarkMode ? 'bg-black md:bg-custom-black dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'bg-custom-blue-40 md:bg-custom-blue border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`}
            onClick={() => setSelected('Creations')}>
            <Image src={CreationsSVG} alt='icon2' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>Creations</span>
          </Link>

          <Link href={''} className={`md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'Experience' ? (isDarkMode ? 'bg-black md:bg-custom-black dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'bg-custom-blue-40 md:bg-custom-blue border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`}
            onClick={() => setSelected('Experience')}>
            <Image src={ExperienceSVG} alt='icon3' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>Experience</span>
          </Link>
        </div>
      </div>

      <div className='relative'>
        <button 
          className={`text-sm px-2 py-1 font-semibold rounded-3xl border-2 sm:hidden ${isDarkMode ? 'border-custom-black-blue bg-black text-custom-black-blue' : 'bg-custom-blue-40 border-white text-white' }`}
          onClick={toggleMenu}
        >
          Connect
        </button>

        {isMenuOpen && (
          <div ref={menuRef} className={`absolute right-0 mt-5 w-48 ${isDarkMode ? 'dark:bg-custom-black' : 'bg-custom-blue-40'} rounded-md shadow-lg py-1 z-20`}>
            <Link href={''} className={`${isDarkMode ? 'dark:text-custom-black-blue dark:hover:bg-gray-800' : 'text-white hover:bg-gray-500'} block px-4 py-2 text-sm`}>
              <Image src={LinkedInSVG} alt='s-1' width={18} height={18} className={`inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
              -LinkedIn
            </Link>
            <Link href={''} className={`${isDarkMode ? 'dark:text-custom-black-blue dark:hover:bg-gray-800' : 'text-white hover:bg-gray-500'} block px-4 py-2 text-sm`}>
              <Image src={GitHubSVG} alt='s-2' width={21} height={21} className={`inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
              -GitHub
            </Link>
            <Link href={''} className={`${isDarkMode ? 'dark:text-custom-black-blue dark:hover:bg-gray-800' : 'text-white hover:bg-gray-500'} block px-4 py-2 text-sm`}>
              <Image src={YouTubeSVG} alt='s-3' width={20} height={20} className={`inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
              -YouTube
            </Link>
            <Link href={''} className={`${isDarkMode ? 'dark:text-custom-black-blue dark:hover:bg-gray-800' : 'text-white hover:bg-gray-500'} block px-4 py-2 text-sm`}>
              <Image src={BehanceSVG} alt='s-4' width={22} height={22} className={`inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
              -Behance
            </Link>
          </div>
        )}

        <div className='hidden sm:flex gap-4'>
          <Link href={''}>
            <Image src={LinkedInSVG} alt='s-1' width={18} height={18} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
          </Link>
          <Link href={''}>
            <Image src={GitHubSVG} alt='s-2' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
          </Link>
          <Link href={''}>
            <Image src={YouTubeSVG} alt='s-3' width={20} height={20} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
          </Link>
          <Link href={''}>
            <Image src={BehanceSVG} alt='s-4' width={22} height={22} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;