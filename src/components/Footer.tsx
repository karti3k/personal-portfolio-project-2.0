'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import LinkedInSVG from '@/assets/linkedin.svg';
import GitHubSVG from '@/assets/github.svg';
import YouTubeSVG from '@/assets/youtube.svg';
import BehanceSVG from '@/assets/behance.svg';
import Link from 'next/link';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [isConnectMenuOpen, setIsConnectMenuOpen] = useState<boolean>(false);

  const toggleConnectMenu = () => {
    setIsConnectMenuOpen(!isConnectMenuOpen);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'dark:bg-custom-black' : 'bg-custom-blue'} w-full px-8 md:px-12 lg:px-32 py-4 jua-font border-t ${isDarkMode ? 'border-custom-blue-green' : 'border-white'}`}>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Mobile View: Text with underline for 'Go to top' */}
        <button
          className={`text-lg md:text-sm px-0 md:px-2 py-1 font-semibold rounded-3xl border-2 ${isDarkMode ? 'border-custom-blue-green bg-black text-custom-blue-green hidden md:block' : 'bg-custom-blue-40 border-white text-white hidden md:block'}`}
          onClick={() => scroll.scrollToTop({ smooth: true })}
        >
          Go to top
        </button>

        <div className="text-sm text-center text-white hidden md:block">
          © {currentYear} Kartik Bhatia. All rights reserved.
        </div>

        {/* Mobile View: Centered Social Icons */}
        <div className="flex justify-center mt-4 gap-3 md:hidden">
          <Link href="https://www.linkedin.com/in/kartik-bhatia-13a172229/" target="_blank">
            <Image src={LinkedInSVG} alt="LinkedIn" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
          <Link href="https://github.com/karti3k" target="_blank">
            <Image src={GitHubSVG} alt="GitHub" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
          <Link href="https://www.youtube.com/@code_flux" target="_blank">
            <Image src={YouTubeSVG} alt="YouTube" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
          </Link>
          <Link href="https://www.behance.net/kartikbhatia23" target="_blank">
            <Image src={BehanceSVG} alt="Behance" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''} pt-1`} />
          </Link>
        </div>

        {/* Social Icons Above 'Let's Connect' Button */}
        {isConnectMenuOpen && (
          <div className={`flex justify-center mt-1 gap-3 rounded-md`}>
            <Link href="https://www.linkedin.com/in/kartik-bhatia-13a172229/" target="_blank">
              <Image src={LinkedInSVG} alt="LinkedIn" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            </Link>
            <Link href="https://github.com/karti3k" target="_blank">
              <Image src={GitHubSVG} alt="GitHub" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            </Link>
            <Link href="https://www.youtube.com/@code_flux" target="_blank">
              <Image src={YouTubeSVG} alt="YouTube" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''}`} />
            </Link>
            <Link href="https://www.behance.net/kartikbhatia23" target="_blank">
              <Image src={BehanceSVG} alt="Behance" width={21} height={21} className={`hover:scale-110 drop-shadow-lg ${isDarkMode ? 'custom-svg-color-for-darkmode' : ''} pt-1`} />
            </Link>
          </div>
        )}
        
        <button
          className={`hidden md:flex text-xs md:text-sm px-0 md:px-2 py-1 font-semibold rounded-3xl border-2 ${isDarkMode ? 'border-custom-blue-green bg-black text-custom-blue-green' : 'bg-custom-blue-40 border-white text-white'}`}
          onClick={toggleConnectMenu}
        >
          Let&apos;s connect
        </button>

        <div className="text-sm text-center text-white md:hidden mt-4">
          © {currentYear} Kartik Bhatia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
