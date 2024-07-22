import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images for light and dark modes
import FrontendImage1Light from '@/assets/fe_img1_light.jpg';
import FrontendImage1Dark from '@/assets/fe_img1_dark.jpg';
import FrontendImage2Light from '@/assets/fe_img2_light.jpg';
import FrontendImage2Dark from '@/assets/fe_img2_dark.jpg';
import FrontendImage3Light from '@/assets/fe_img3_light.jpg';
import FrontendImage3Dark from '@/assets/fe_img3_dark.jpg';

import GraphicImage1Light from '@/assets/gd_img1_light.jpg';
import GraphicImage1Dark from '@/assets/gd_img1_dark.jpg';
import GraphicImage2Light from '@/assets/gd_img2_light.jpg';
import GraphicImage2Dark from '@/assets/gd_img2_dark.jpg';
import GraphicImage3Light from '@/assets/gd_img3_light.jpg';
import GraphicImage3Dark from '@/assets/gd_img3_dark.jpg';

import VideoImage1Light from '@/assets/ve_img1.jpg';
import VideoImage1Dark from '@/assets/ve_img1.jpg';
import VideoImage2Light from '@/assets/ve_img2.jpg';
import VideoImage2Dark from '@/assets/ve_img2.jpg';
import VideoImage3Light from '@/assets/ve_img3.jpg';
import VideoImage3Dark from '@/assets/ve_img3.jpg';

interface CreationsProps {
  isDarkMode: boolean;
}

const Creations: React.FC<CreationsProps> = ({ isDarkMode }) => {
  const [selected, setSelected] = useState<string>('Front-End Dev');

  const projectData = [
    {
      category: 'Front-End Dev',
      imageLight: FrontendImage1Light,
      imageDark: FrontendImage1Dark,
      link: 'https://github.com/karti3k/my-personal-portfolio-project/blob/main/README.md',
      liveDemo: 'https://kartikbhatia.vercel.app/',
    },
    {
      category: 'Front-End Dev',
      imageLight: FrontendImage2Light,
      imageDark: FrontendImage2Dark,
      link: 'https://github.com/karti3k/personal-portfolio-project-2.0/blob/main/README.md',
      liveDemo: '',
    },
    {
      category: 'Front-End Dev',
      imageLight: FrontendImage3Light,
      imageDark: FrontendImage3Dark,
      link: 'https://github.com/karti3k/Employee-Activity-Dashboard/blob/main/README.md',
      liveDemo: '',
    },
    {
      category: 'Graphic Design',
      imageLight: GraphicImage1Light,
      imageDark: GraphicImage1Dark,
      link: 'https://www.behance.net/gallery/179476323/Some-of-my-poster-designs-and-logo-designs',
    },
    {
      category: 'Graphic Design',
      imageLight: GraphicImage2Light,
      imageDark: GraphicImage2Dark,
      link: 'https://www.behance.net/gallery/184804873/Jainism-Website-Design-Idea',
    },
    {
      category: 'Graphic Design',
      imageLight: GraphicImage3Light,
      imageDark: GraphicImage3Dark,
      link: 'https://www.behance.net/gallery/180831449/Expense-Manger-Web-App-UI-Design-Idea-',
    },
    {
      category: 'Video Editing',
      imageLight: VideoImage1Light,
      imageDark: VideoImage1Dark,
      link: 'https://youtu.be/ZSl-AeR_eMo?si=GLzk-DXAD1ythsvg',
    },
    {
      category: 'Video Editing',
      imageLight: VideoImage2Light,
      imageDark: VideoImage2Dark,
      link: 'https://youtu.be/iW4pwtymFWs?si=PeQ67Yts1vXyIhXE',
    },
    {
      category: 'Video Editing',
      imageLight: VideoImage3Light,
      imageDark: VideoImage3Dark,
      link: 'https://youtu.be/CNXPG9z8kAs?si=Tk3PsjnR1xyZqKpa',
    },
  ];

  const getProjects = () => projectData.filter((project) => project.category === selected);

  return (
    <section id='creations-section'
      className={`-mt-28 md:-mt-12 w-full h-max lg:h-screen px-8 md:px-12 lg:px-32 flex flex-col justify-center ${
        isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'
      } jua-font`}
    >
      
      <div
        className={`mt-1 w-full lg:h-[70%] h-screen border rounded-3xl flex flex-col items-center py-6 ${
          isDarkMode ? 'bg-custom-black border-custom-blue-green' : 'bg-custom-blue border-white'
        }`}
      >
        <h2
        className={`text-center md:text-left jua-font text-4xl md:text-5xl pb-8 opacity-10 md:h-20 drop-shadow-lg ${
          isDarkMode ? 'text-custom-green' : 'text-white'
        }`}
      >
        Creations:
      </h2>
        <div
          className={`${
            isDarkMode ? 'text-custom-blue-green border-custom-blue-green' : 'text-white border-white'
          } flex justify-around items-center w-[90%] lg:w-[60%] h-14 rounded-3xl border-2 text-xs md:text-sm lg:text-lg`}
        >
          <button
            className={`rounded-3xl w-1/3 ${selected === 'Front-End Dev' ? (isDarkMode ? 'drop-shadow-2xl border-2 border-l-0 h-14 bg-black border-custom-blue-green' : 'drop-shadow-2xl h-14 border-2 border-l-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'h-12 bg-custom-black border-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`}
            onClick={() => setSelected('Front-End Dev')}
          >
            <span className={`border-b-2 ${selected === 'Front-End Dev' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : 'border-none'}`}>Front-End Dev</span>
          </button>
          <button
            className={`w-1/3 h-14 ${selected === 'Graphic Design' ? (isDarkMode ? 'drop-shadow-2xl rounded-3xl bg-black border-2 border-custom-blue-green' : 'drop-shadow-2xl border-2 rounded-3xl bg-custom-blue-40 border-white') : (isDarkMode ? 'rounded-r-none rounded-l-none border-y-2 bg-custom-black border-custom-blue-green' : 'border-y-2 rounded-r-none rounded-l-none bg-custom-blue border-white')}`}
            onClick={() => setSelected('Graphic Design')}
          >
            <span className={`border-b-2 ${selected === 'Graphic Design' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : 'border-none'}`}>Graphic Design</span>
          </button>
          <button
            className={`rounded-3xl w-1/3 ${selected === 'Video Editing' ? (isDarkMode ? 'drop-shadow-2xl border-2 border-r-0 h-14 bg-black border-custom-blue-green' : 'drop-shadow-2xl h-14 border-2 border-r-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'h-12 bg-custom-black border-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`}
            onClick={() => setSelected('Video Editing')}
          >
            <span className={`border-b-2 ${selected === 'Video Editing' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : 'border-none'}`}>Video Editing</span>
          </button>
        </div>
        <div className='mt-6 w-full lg:w-[95%] h-full rounded-3xl flex flex-col lg:flex-row justify-center items-center gap-4'>
          {getProjects().map((project, index) => (
            <div
              key={index}
              className={`border-2 ${isDarkMode ? 'bg-black border-custom-blue-green' : 'bg-custom-blue-40 border-white'} group w-[85%] md:w-[60%] lg:w-1/3 h-full rounded-3xl relative`}
            >
              <Image
                src={isDarkMode ? project.imageDark : project.imageLight}
                alt={`${selected} project ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-3xl"
              />
              <div className="hidden group-hover:flex absolute bottom-4 w-full justify-evenly">
                <Link href={project.link} passHref target="_blank">
                  <button className={`py-2 px-4 rounded-lg ${isDarkMode ? 'bg-black text-custom-blue-green border-custom-blue-green hover:bg-custom-blue-green hover:text-black' : 'bg-custom-blue-40 text-white border-white hover:bg-white hover:text-custom-blue'} border`}>
                    Learn More
                  </button>
                </Link>
                {project.liveDemo && (
                  <Link href={project.liveDemo} passHref target="_blank">
                    <button className={`py-2 px-4 rounded-lg ${isDarkMode ? 'bg-black text-custom-blue-green border-custom-blue-green hover:bg-custom-blue-green hover:text-black' : 'bg-custom-blue-40 text-white border-white hover:bg-white hover:text-custom-blue'} border`}>
                      Live Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;