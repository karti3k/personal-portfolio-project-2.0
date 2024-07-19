'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CreationsProps {
    isDarkMode: boolean;
}

const Creations: React.FC<CreationsProps> = ({ isDarkMode }) => {
    const [selected, setSelected] = useState<string>('Front-End Dev');
    return (
        <section className={`pt-24 md:pt-0 -mt-0 md:-mt-12 w-full h-screen px-8 md:px-12 lg:px-32 flex flex-col justify-center ${isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'} jua-font`}>
            <span className={`jua-font text-4xl md:text-5xl opacity-10 md:h-20 drop-shadow-lg ${isDarkMode ? 'text-custom-green' : 'text-white'}`}>
                Creations:
            </span>
            <div className={`mt-1 w-full h-[70%] border rounded-3xl flex flex-col items-center py-6 ${isDarkMode ? 'bg-custom-black border-custom-blue-green' : 'bg-custom-blue border-white'}`}>
                <div className={`${isDarkMode ? 'text-custom-blue-green bg-black border-custom-blue-green' : 'text-white bg-custom-blue-40 border-white'} flex justify-around items-center w-[60%] h-14 rounded-3xl border`}>
                    <button className={`${selected === 'Front-End Dev' ? (isDarkMode ? 'bg-black border-custom-blue-green' : 'bg-custom-blue-40 border-white') : (isDarkMode ? 'bg-custom-black border-custom-blue-green' : 'bg-custom-blue border-white')} border border-r-0 rounded-3xl rounded-r-none w-1/3 h-14`} onClick={() => setSelected('Front-End Dev')}> <span className={`border-b-2 ${selected === 'Front-End Dev' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-black' : 'border-none')}`}>Front-End Dev</span> </button>

                    <button className={`border rounded-3xl w-1/3 h-14 rounded-r-none rounded-l-none ${selected === 'Graphic Design' ? (isDarkMode ? 'bg-black border-custom-blue-green' : 'bg-custom-blue-40 border-white') : (isDarkMode ? 'bg-custom-black border-custom-blue-green' : 'bg-custom-blue border-white')}`} onClick={() => setSelected('Graphic Design')}><span className={`border-b-2 ${selected === 'Graphic Design' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-none' : 'border-none')}`}>Graphic Design</span></button>

                    <button className={`border rounded-3xl w-1/3 h-14 border-l-0 rounded-l-none ${selected === 'Video Editing' ? (isDarkMode ? 'bg-black border-custom-blue-green' : 'bg-custom-blue-40 border-white') : (isDarkMode ? 'bg-custom-black border-custom-blue-green' : 'bg-custom-blue border-white')}`} onClick={() => setSelected('Video Editing')}><span className={`border-b-2 ${selected === 'Video Editing' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-black' : 'border-none')}`}>Video Editing</span></button>
                </div>
            </div>
        </section>
    )
}

export default Creations