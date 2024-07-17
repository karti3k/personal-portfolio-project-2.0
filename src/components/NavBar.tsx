'use client'
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import SunGIF from '@/assets/sun.gif';
import MoonGIF from '@/assets/moon.gif';
import AboutSVG from '@/assets/about.svg';
import CreationsSVG from '@/assets/creations.svg';
import ExperienceSVg from '@/assets/experience.svg';
import LinkedInSVG from '@/assets/linkedin.svg';
import GitHubSVG from '@/assets/github.svg';
import YouttubeSVG from '@/assets/youtube.svg';
import BehanceSVG from '@/assets/behance.svg';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [selected, setSelected] = useState<string>('About');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [modeButtonText, setModeButtonText] = useState<string>('Night Mode?');
  const [modeButtonIcon, setModeButtonIcon] = useState<string | StaticImageData>(SunGIF);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setModeButtonText(isDarkMode ? 'Dark Mode?' : 'Light Mode?');
    setModeButtonIcon(isDarkMode ? SunGIF : MoonGIF);
  };

  // Detect system dark mode preference on initial render
  useEffect(() => {
    setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setModeButtonText(isDarkMode ? 'Light Mode?' : 'Dark Mode?');
    setModeButtonIcon(isDarkMode ? MoonGIF : SunGIF);
  }, []);

  return (
    <nav className={`${isDarkMode ? 'dark:bg-custom-black' : 'bg-custom-blue'} w-full h-20 flex items-center jua-font`}>

        <button className={`rounded-3xl pr-4 border-2 border-white hover:text-slate-600 font-semibold ml-[10%] ${isDarkMode ? 'dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:text-white dark:bg-custom-black' : 'text-white bg-custom-blue-40 hover:text-slate-600'}`}
          onClick={toggleDarkMode}>
            <Image src={modeButtonIcon} width={40} height={40} alt='sun/moon' className='rounded-3xl inline'></Image> {modeButtonText}
        </button>

        <div className='w-auto px-2 align-center m-auto flex gap-6 text-lg'>

            <Link href={''} className={`border-b-2 ${selected === 'About' ? (isDarkMode ? 'dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`} onClick={() => setSelected('About')}>
                <Image src={AboutSVG} alt='i-1' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`}></Image> About
            </Link>

            <Link href={''} className={`border-b-2 ${selected === 'Creations' ? (isDarkMode ? 'dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`}
            onClick={() => setSelected('Creations')}>
                <Image src={CreationsSVG} alt='icon2' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`}></Image> Creations
            </Link>

            <Link href={''} className={`border-b-2 ${selected === 'Experience' ? (isDarkMode ? 'dark:border-custom-black-blue dark:text-custom-black-blue dark:hover:border-custom-black-blue' : 'border-white hover:border-white') : (isDarkMode ? 'border-custom-blue dark:border-custom-black dark:hover:border-custom-black dark:text-custom-black-blue' : 'border-custom-blue hover:border-white')}`}
            onClick={() => setSelected('Experience')}>
                <Image src={ExperienceSVg} alt='icon3' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`}></Image> Experience
            </Link>
            
        </div>

        <div className='w-auto align-center flex gap-4 mr-[10%]'>
            <Link href={''}> <Image src={LinkedInSVG} alt='s-1' width={18} height={18} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`}></Image></Link>
            <Link href={''}> <Image src={GitHubSVG} alt='s-2' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`}></Image></Link>
            <Link href={''}> <Image src={YouttubeSVG} alt='s-3' width={20} height={20} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`}></Image></Link>
            <Link href={''}> <Image src={BehanceSVG} alt='s-4' width={22} height={22} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`}></Image></Link>
        </div>
    </nav>
  );
};

export default NavBar;