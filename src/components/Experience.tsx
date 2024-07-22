'use client';
import KodersLogo from '@/assets/Koders_logo.jpg'
import React, { useState } from 'react';

interface ExperienceProps {
  isDarkMode: boolean;
}

// Interface for experience items
interface ExperienceItem {
  companyLogo: string;
  companyName: string;
  title: string;
  duration: string;
  details: string[];
  certificate?: string; // Optional certificate image URL
}

// Array of experience items
const experiences: ExperienceItem[] = [
  {
    companyLogo: 'KodersLogo',
    companyName: 'Mirror Company',
    title: 'Frontend Developer Trainee',
    duration: 'Jun 2024 - Aug 2024',
    details: [
      'Developed user-friendly web applications using React and Next.js.',
      'Collaborated with the design team to implement responsive UI designs.',
      'Optimized web applications for performance and scalability.',
      'Implemented Tailwind CSS for consistent and modular styling.'
    ],
    certificate: '/path/to/certificate1.png' // Optional
  },
  {
    companyLogo: '/path/to/logo2.png',
    companyName: 'Another Company',
    title: 'Graphic Design Intern',
    duration: 'Jan 2024 - May 2024',
    details: [
      'Created visual content for social media and marketing campaigns.',
      'Collaborated with the marketing team to design promotional materials.',
      'Ensured brand consistency across all visual assets.',
      'Worked on video editing projects for promotional content.'
    ]
  },
  {
    companyLogo: '/path/to/logo3.png',
    companyName: 'Tech Solutions',
    title: 'Software Engineer Intern',
    duration: 'Sep 2023 - Dec 2023',
    details: [
      'Assisted in the development of backend services using Node.js.',
      'Participated in code reviews and provided constructive feedback.',
      'Wrote unit tests to ensure code quality and reliability.',
      'Contributed to the creation of technical documentation.'
    ]
  },
  {
    companyLogo: '/path/to/logo4.png',
    companyName: 'Creative Agency',
    title: 'Junior Web Developer',
    duration: 'Jun 2023 - Aug 2023',
    details: [
      'Designed and implemented responsive websites using HTML, CSS, and JavaScript.',
      'Worked with clients to understand their requirements and deliver solutions.',
      'Integrated third-party APIs to add functionality to web applications.',
      'Maintained and updated existing websites to improve performance.'
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
    <section id="experience-section" className={`py-8 px-8 md:px-12 lg:px-32 flex flex-col justify-center items-center md:items-start md:justify-start md:flex-col ${isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'} jua-font`}>
      <h2 className={`jua-font text-4xl md:text-5xl pb-8 opacity-10 md:h-20 drop-shadow-lg ${isDarkMode ? 'text-custom-green' : 'text-white'}`}>
                Experience:
            </h2>

      <div className="flex flex-col md:flex-row md:space-x-9 w-full">
        
        {/* Render experience items in two columns */}
        <div className="md:w-1/2 space-y-4">
          {experiences.slice(0, 2).map((experience, index) => (
            <div key={index} className="w-full space-y-4">
              <li className={`list-none py-4 px-2 rounded-xl ${isDarkMode ? 'bg-custom-black border border-custom-blue-green text-custom-blue-green' : 'bg-custom-blue border border-white text-white'}`}>
                
                {/* Button to toggle experience item open/close */}
                <button
                  className="flex justify-between items-center w-full font-normal"
                  onClick={() => toggleExperience(index)}
                >
                  <div className="flex items-center justify-center space-x-4">
                  <img src={experience.companyLogo} alt={`logo`} className="w-10 h-10 object-contain" />
                  <span>{experience.companyName}</span>
                  </div>
                  <span className='px-4'>{experience.title}</span>
                  <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
                </button>

                {/* Section to expand/collapse experience details */}
                <div className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-full' : 'max-h-0'}`}>
                <span className="text-xs">{experience.duration}</span>
                  <ul className="list-disc p-4 space-y-2 anekDevanagari-font text-sm">
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  {experience.certificate && (
                    <img src={experience.certificate} alt="Certificate" className="mt-4 w-full object-contain rounded-md" />
                  )}
                </div>
              </li>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
          {experiences.slice(2).map((experience, index) => (
            <div key={index + 2} className="w-full space-y-4">
              <li className={`list-none py-4 px-2 rounded-xl ${isDarkMode ? 'bg-custom-black border border-custom-blue-green text-custom-blue-green' : 'bg-custom-blue border border-white text-white'}`}>
                
                {/* Button to toggle experience item open/close */}
                <button
                  className="flex justify-between items-center w-full font-normal"
                  onClick={() => toggleExperience(index + 2)}
                >
                  <div className="flex items-center justify-center space-x-4">
                  <img src={experience.companyLogo} alt={`logo`} className="w-10 h-10 object-contain" />
                  <span>{experience.companyName}</span>
                  </div>
                  <span>{experience.title}</span>
                  <span className="ml-2">{openIndex === index + 2 ? '-' : '+'}</span>
                </button>

                {/* Section to expand/collapse experience details */}
                <div className={`overflow-hidden transition-all ${openIndex === index + 2 ? 'max-h-full' : 'max-h-0'}`}>
                <span className="text-xs">{experience.duration}</span>
                  <ul className="list-disc p-4 space-y-2 anekDevanagari-font text-sm">
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  {experience.certificate && (
                    <img src={experience.certificate} alt="Certificate" className="mt-4 w-full object-contain rounded-md" />
                  )}
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;