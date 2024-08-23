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
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [selected, setSelected] = useState<string>('About');
  const [modeButtonIcon, setModeButtonIcon] = useState<string | StaticImageData>(SunGIF);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  // Update the mode button icon based on isDarkMode state
  useEffect(() => {
    setModeButtonIcon(isDarkMode ? MoonGIF : SunGIF);
  }, [isDarkMode]);

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
    <nav className={`backdrop-blur-3xl z-50 sticky top-0 ${isDarkMode ? 'dark:bg-custom-black bg-custom-black' : 'bg-[#427698]'} w-full h-14 md:h-16 flex items-center justify-between px-8 md:px-12 lg:px-32 anekDevanagari-font border-b ${isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green' : 'border-white'}`}>
      <button
        className={`lg:mb-1 rounded-3xl md:pr-2 border-2 text-sm font-medium lg:font-semibold ${isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green text-custom-blue-green dark:bg-custom-very-light-black bg-custom-very-light-black' : 'text-white bg-custom-blue-40 border-white'}`}
        onClick={toggleDarkMode}
      >
        <Image src={modeButtonIcon} alt='sun/moon' className='rounded-3xl inline md:pr-1 w-7 h-7 md:w-11 md:h-10' />
        <span className='hidden sm:inline'>Change Theme</span>
        <span className='md:hidden pr-2'>Theme</span>
      </button>

      <div className='flex-1 flex justify-center'>
        <div className='flex gap-6 lg:text-lg'>
          <ScrollLink
            to="about-section"
            smooth={true}
            duration={500}
            className={`hover:cursor-pointer md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'About' ? (isDarkMode ? 'dark:bg-custom-light-black bg-custom-very-light-black md:dark:bg-custom-black md:bg-custom-black dark:border-custom-blue-green border-custom-blue-green dark:text-custom-blue-green text-custom-blue-green dark:hover:border-custom-blue-green hover:border-custom-blue-green' : 'bg-custom-blue-40 md:bg-[#427698] border-white hover:border-white text-white') : (isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green border-custom-black' : 'border-[#427698] text-white')}`}
            onClick={() => setSelected('About')}
          >
            <Image src={AboutSVG} alt='i-1' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>About</span>
          </ScrollLink>

          <ScrollLink
            to="creations-section"
            smooth={true}
            duration={500}
            className={`hover:cursor-pointer md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'Creations' ? (isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black md:dark:bg-custom-black md:bg-custom-black dark:border-custom-blue-green border-custom-blue-green dark:text-custom-blue-green text-custom-blue-green dark: hover:border-custom-blue-green' : 'bg-custom-blue-40 md:bg-[#427698] border-white hover:border-white text-white') : (isDarkMode ? 'dark:border-custom-black border-custom-black dark:text-custom-blue-green text-custom-blue-green' : 'border-[#427698] text-white')}`}
            onClick={() => setSelected('Creations')}
          >
            <Image src={CreationsSVG} alt='icon2' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>Creations</span>
          </ScrollLink>

          <ScrollLink
            to="experience-section"
            smooth={true}
            duration={500}
            className={`hover:cursor-pointer md:border-b-2 rounded-3xl p-1 px-2 md:rounded-none md:p-0 ${selected === 'Experience' ? (isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black md:dark:bg-custom-black md:bg-custom-black dark:border-custom-blue-green border-custom-blue-green dark:text-custom-blue-green text-custom-blue-green' : 'bg-custom-blue-40 md:bg-[#427698] border-white hover:border-white text-white') : (isDarkMode ? 'dark:border-custom-black border-custom-black dark:text-custom-blue-green text-custom-blue-green' : 'border-[#427698] text-white')}`}
            onClick={() => setSelected('Experience')}
          >
            <Image src={ExperienceSVG} alt='icon3' width={20} height={20} className={`inline ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            <span className='pl-1 hidden sm:inline'>Experience</span>
          </ScrollLink>
        </div>
      </div>

      <div className='relative'>
        <button
          className={`text-sm px-2 pt-1 font-semibold rounded-3xl border-2 sm:hidden ${isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green dark:bg-custom-very-light-black bg-custom-very-light-black dark:text-custom-blue-green text-custom-blue-green' : 'bg-custom-blue-40 border-white text-white'}`}
          onClick={toggleMenu}
        >
          Connect
        </button>

        {isMenuOpen && (
          <div ref={menuRef} className={`absolute flex flex-col items-start right-0 pt-2 mt-5 w-47 ${isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black' : 'bg-custom-light-blue'} rounded-md shadow-lg z-20`}>
            <Link href={'https://www.linkedin.com/in/kartik-bhatia-13a172229/'} target="_blank" className={`flex flex-col justify-center items-center ${isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green' : 'text-white hover:bg-slate-300'} block px-2 md:px-4 md:py-1 text-sm`}>
              <Image src={LinkedInSVG} alt='s-1' width={19} height={19} className={`ml-1 inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
              LinkedIn
            </Link>
            <Link href={'https://github.com/karti3k'} target="_blank" className={`ml-1 md:ml-0  flex flex-col justify-center items-center ${isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green' : 'text-white hover:bg-slate-300'} block p-2 md:px-4 md:py-1 text-sm`}>
              <Image src={GitHubSVG} alt='s-2' width={20} height={20} className={`inline hover:scale-110 md:pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
              GitHub
            </Link>
            <Link href={'https://www.youtube.com/@code_flux'} target="_blank" className={`flex flex-col justify-center items-center ${isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green' : 'text-white hover:bg-slate-300'} block p-2 md:px-4 md:py-1 text-sm`}>
              <Image src={YouTubeSVG} alt='s-3' width={20} height={20} className={`ml-1 inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
              YouTube
            </Link>
            <Link href={'https://www.behance.net/kartikbhatia23'} target="_blank" className={`ml-1 md:ml-0 flex flex-col justify-center items-center ${isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green' : 'text-white hover:bg-slate-300'} block p-2 md:px-4 md:py-1 text-sm`}><Image src={BehanceSVG} alt='s-4' width={20} height={20} className={`inline hover:scale-110 pr-1 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />Behance</Link>
          </div>)}
        <div className='hidden sm:flex items-center'>
          <Link href={'https://www.linkedin.com/in/kartik-bhatia-13a172229/'} target="_blank" className='pr-2 md:pr-3'>
            <Image src={LinkedInSVG} alt='i-1' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
          <Link href={'https://github.com/karti3k'} target="_blank" className='pr-2 md:pr-3'>
            <Image src={GitHubSVG} alt='i-2' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : 'text-white'}`} />
          </Link>
          <Link href={'https://www.youtube.com/@code_flux'} target="_blank" className='pr-2 md:pr-3'>
            <Image src={YouTubeSVG} alt='i-3' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
          <Link href={'https://www.behance.net/kartikbhatia23'} target="_blank">
            <Image src={BehanceSVG} alt='i-4' width={21} height={21} className={`inline hover:scale-110 ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;
