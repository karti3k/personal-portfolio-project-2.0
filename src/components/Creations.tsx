import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images for light and dark modes
import FrontendImage1Light from '@/assets/fe_img1.jpg';
import FrontendImage2Light from '@/assets/fe_img2.jpg';
import FrontendImage3Light from '@/assets/fe_img3.png';

import GraphicImage1Light from '@/assets/gd_img1_light.jpg';
import GraphicImage2Light from '@/assets/gd_img2_light.jpg';
import GraphicImage3Light from '@/assets/gd_img3_light.jpg';

import VideoImage1Light from '@/assets/ve_img1.jpg';
import VideoImage2Light from '@/assets/ve_img2.jpg';
import VideoImage3Light from '@/assets/ve_img3.jpg';

interface CreationsProps {
  isDarkMode: boolean;
}

const Creations: React.FC<CreationsProps> = ({ isDarkMode }) => {
  const [selected, setSelected] = useState<string>('Front-End Dev');

  const projectData = [
    {
      category: 'Front-End Dev',
      image: FrontendImage1Light,
      link: 'https://github.com/karti3k/my-personal-portfolio-project/blob/main/README.md',
    },
    {
      category: 'Front-End Dev',
      image: FrontendImage2Light,
      link: 'https://github.com/karti3k/personal-portfolio-project-2.0/blob/main/README.md',
    },
    {
      category: 'Front-End Dev',
      image: FrontendImage3Light,
      link: 'https://github.com/karti3k/Employee-Activity-Dashboard/blob/main/README.md',
    },
    {
      category: 'Graphic Design',
      image: GraphicImage1Light,
      link: 'https://www.behance.net/gallery/179476323/Some-of-my-poster-designs-and-logo-designs',
    },
    {
      category: 'Graphic Design',
      image: GraphicImage2Light,
      link: 'https://www.behance.net/gallery/184804873/Jainism-Website-Design-Idea',
    },
    {
      category: 'Graphic Design',
      image: GraphicImage3Light,
      link: 'https://www.behance.net/gallery/180831449/Expense-Manger-Web-App-UI-Design-Idea-',
    },
    {
      category: 'Video Editing',
      image: VideoImage1Light,
      link: 'https://youtu.be/ZSl-AeR_eMo?si=GLzk-DXAD1ythsvg',
    },
    {
      category: 'Video Editing',
      image: VideoImage2Light,
      link: 'https://youtu.be/iW4pwtymFWs?si=PeQ67Yts1vXyIhXE',
    },
    {
      category: 'Video Editing',
      image: VideoImage3Light,
      link: 'https://youtu.be/CNXPG9z8kAs?si=Tk3PsjnR1xyZqKpa',
    },
  ];

  const getProjects = () => projectData.filter((project) => project.category === selected);

  return (
    <section id='creations-section'
      className={`md:-mt-12 pt-6 md:pt-0 w-full h-max lg:h-screen px-8 md:px-12 lg:px-32 flex flex-col justify-start ${
        isDarkMode ? 'bg-custom-light-black' : 'bg-custom-blue'
      } anekDevanagari-font`}
    >
      <h2
        className={`text-center anekDevanagari-font font-semibold text-3xl md:text-4xl pb-8 opacity-80 md:h-20 drop-shadow-lg text-[#AFE1AF]`}
      >
        <u>Creations</u>:
      </h2>
      <div
        className={`drop-shadow-lg mt-1 w-full lg:h-[70%] h-screen border rounded-3xl flex flex-col items-center py-6 ${
          isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black dark:border-custom-blue-green border-custom-blue-green' : 'bg-custom-blue-40 border-white'
        }`}
      >
        <div
          className={`${
            isDarkMode ? 'dark:bg-custom-light-black bg-custom-light-black dark:text-custom-blue-green text-custom-blue-green dark:border-custom-blue-green border-custom-blue-green' : 'bg-custom-blue text-white border-white'
          } flex justify-around items-center w-[90%] lg:w-[60%] h-14 rounded-3xl border-2 text-xs md:text-sm lg:text-lg`}
        >
          <button
            className={`rounded-3xl w-1/3 ${selected === 'Front-End Dev' ? (isDarkMode ? 'dark:text-custom-sky-blue text-custom-sky-blue drop-shadow-2xl border-2 border-l-0 h-14 dark:bg-custom-very-light-black bg-custom-very-light-black dark:border-custom-blue-green border-custom-blue-green' : 'drop-shadow-2xl h-14 border-2 border-l-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green h-12 dark:bg-custom-light-black bg-custom-light-black dark:border-custom-blue-green border-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`}
            onClick={() => setSelected('Front-End Dev')}
          >
            <span className={`border-b-2 ${selected === 'Front-End Dev' ? (isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green' : 'border-white') : 'border-none'}`}>Front-End Dev</span>
          </button>
          <button
            className={`w-1/3 h-14 ${selected === 'Graphic Design' ? (isDarkMode ? 'drop-shadow-2xl rounded-3xl dark:bg-custom-very-light-black bg-custom-very-light-black border-2 dark:border-custom-blue-green border-custom-blue-green dark:text-custom-sky-blue text-custom-sky-blue' : 'drop-shadow-2xl border-2 rounded-3xl bg-custom-blue-40 border-white') : (isDarkMode ? 'dark:text-custom-blue-green text-custom-blue-green rounded-r-none rounded-l-none border-y-2 dark:bg-custom-light-black bg-custom-light-black dark:border-custom-blue-green border-custom-blue-green' : 'border-y-2 rounded-r-none rounded-l-none bg-custom-blue border-white')}`}
            onClick={() => setSelected('Graphic Design')}
          >
            <span className={`border-b-2 ${selected === 'Graphic Design' ? (isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green' : 'border-white') : 'border-none'}`}>Graphic Design</span>
          </button>
          <button
            className={`rounded-3xl w-1/3 ${selected === 'Video Editing' ? (isDarkMode ? 'drop-shadow-2xl border-2 border-r-0 h-14 dark:bg-custom-very-light-black bg-custom-very-light-black dark:border-custom-blue-green border-custom-blue-green dark:text-custom-sky-blue text-custom-sky-blue' : 'drop-shadow-2xl h-14 border-2 border-r-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'h-12 dark:bg-custom-light-black bg-custom-light-black dark:border-custom-blue-green border-custom-blue-green dark:text-custom-blue-green text-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`}
            onClick={() => setSelected('Video Editing')}
          >
            <span className={`border-b-2 ${selected === 'Video Editing' ? (isDarkMode ? 'dark:border-custom-blue-green border-custom-blue-green' : 'border-white') : 'border-none'}`}>Video Editing</span>
          </button>
        </div>
        <div className='mt-6 w-full lg:w-[95%] h-full rounded-3xl flex flex-col lg:flex-row justify-center items-center gap-4'>
          {getProjects().map((project, index) => (
            <div
              key={index}
              className={`border-2 ${isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black dark:border-none border-none drop-shadow-2xl' : 'bg-custom-blue-40 border-white'} group w-[85%] md:w-[60%] lg:w-1/3 h-full rounded-3xl relative`}
            >
              <Image
                src={project.image}
                alt={`${selected} project ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-3xl"
              />
              <div className="hidden group-hover:flex absolute bottom-4 w-full justify-evenly">
                <Link href={project.link} passHref target="_blank">
                  <button className={`py-2 px-4 rounded-lg ${isDarkMode ? 'dark:bg-custom-light-black bg-custom-light-black dark:text-custom-blue-green text-custom-blue-green dark:border-custom-blue-green border-custom-blue-green hover:dark:bg-custom-very-light-black hover:bg-custom-very-light-black' : 'bg-custom-blue-40 text-white border-white hover:bg-white hover:text-custom-blue'} border`}>
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Creations;