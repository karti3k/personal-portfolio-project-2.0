'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import KodersLogo from '@/assets/Koders_logo.jpg';
import GrowcifyLogo from '@/assets/growcify_logo.jpg';
import YtChannelLogo from '@/assets/exams_result_yt_channel_logo.jpg';

interface ExperienceProps {
  isDarkMode: boolean;
}

// Interface for experience items
interface ExperienceItem {
  companyLogo: StaticImageData;
  companyName: string;
  title: string;
  duration: string;
  details: string[];
  certificate?: string; // Optional certificate image URL
}

// Array of experience items
const experiences: ExperienceItem[] = [
  {
    companyLogo: KodersLogo,
    companyName: 'Koders',
    title: 'Frontend Dev Trainee',
    duration: 'Jun 2024 - Aug 2024',
    details: [
      'Worked as part of a team of three under the supervision of a lead, ensuring tasks were completed within the deadline.',
      'Participated in weekly meetings with mentors to receive feedback and discuss work progress, where each team member presented their work and addressed any questions.',
      'Designed wireframes using Figma and developed the frontend using Next.js, Tailwind CSS, and TypeScript, ensuring the implementation closely matched the wireframe designs.'
    ],
    // certificate: '/path/to/certificate1.png' // Optional
  },
  {
    companyLogo: GrowcifyLogo,
    companyName: 'Growcify',
    title: 'Graphic Design Intern',
    duration: 'Feb 2024 - Apr 2024',
    details: [
      'Developed and executed a weekly design plan for Growcify\'s social media platform, creating engaging posts and reels using Canva.',
      'Ensured designs adhered to company objectives, brand guidelines, and effectively communicated Growcify\'s SaaS ecommerce platform benefits to small and medium-sized businesses.',
      'Worked closely with the co-founder to gather feedback and refine design concepts, ensuring quality and consistency.',
    ]
  },
  {
    companyLogo: YtChannelLogo,
    companyName: 'Exams Result YT',
    title: 'Video Editor',
    duration: 'Jul 2021 - Sep 2021',
    details: [
      'Created videos on government exams, including application processes and eligibility, for a YouTube channel.',
      'Worked closely with creator, incorporating feedback and making adjustments to meet their specific requirements.',
      'Gained skills in video editing, graphic design, and professional voiceover.'
    ]
  }
];

// React component for Experience section
const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // State to track which experience item is open

  // Function to toggle an experience item open or closed
  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience-section" className={`pt-16 lg:pt-0 py-8 px-8 md:px-12 lg:px-32 flex flex-col justify-center items-center md:justify-start md:flex-col ${isDarkMode ? 'dark:bg-custom-light-black bg-custom-light-black' : 'bg-custom-blue'} anekDevanagari-font pb-10`}>
      <h2 className={`anekDevanagari-font font-semibold text-3xl md:text-4xl pb-8 opacity-80 md:h-20 drop-shadow-lg text-custom-light-blue`}>
        <u>Experience</u>:
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between w-full space-y-4 md:space-y-0">
        {experiences.map((experience, index) => (
          <div key={index} className="w-full md:w-[30%] space-y-4">
            <li className={`list-none py-4 px-2 rounded-xl drop-shadow-lg ${isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black dark:border border-custom-blue-green border border-custom-blue-green dark:text-custom-blue-green dark:text-custom-blue-green text-custom-blue-green' : 'bg-custom-light-blue border border-white text-white'}`}>
              
              {/* Button to toggle experience item open/close */}
              <button
                className={`${isDarkMode ? 'dark:bg-custom-very-light-black bg-custom-very-light-black' : 'bg-custom-light-blue'} flex justify-between items-center w-full font-medium p-2`}
                onClick={() => toggleExperience(index)}
              >
                <div className="flex items-center justify-center px-2 drop-shadow-md">
                  <Image src={experience.companyLogo} alt={`${experience.companyName} logo`} width={40} height={40} className={`border-2 ${isDarkMode ?'border-custom-blue-green':'border-white'} object-contain`} />
                  <span className='pl-4'>{experience.companyName}</span>
                </div>
                <span className='px-4 drop-shadow-lg -mr-4'>{experience.title}</span>
                <span className="ml-2 drop-shadow-lg">{openIndex === index ? '-' : '+'}</span>
              </button>

              {/* Section to expand/collapse experience details */}
              <div className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-full' : 'max-h-0'}`}>
                <span className="text-xs pl-2 mt-2 drop-shadow-md">{experience.duration}</span>
                <ul className="list-disc p-4 space-y-2 anekDevanagari-font text-sm drop-shadow-lg">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                {/* {experience.certificate && (
                  <Image src={experience.certificate} alt="Certificate" width={600} height={400} className="mt-4 w-full object-contain rounded-md" />
                )} */}
              </div>
            </li>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;