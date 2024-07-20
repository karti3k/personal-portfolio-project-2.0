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
                <div className={`${isDarkMode ? 'text-custom-blue-green border-custom-blue-green' : 'text-white border-white'} flex justify-around items-center w-[60%] h-14 rounded-3xl border-2`}>

                <button className={`rounded-3xl w-1/3 ${selected === 'Front-End Dev' ? (isDarkMode ? 'drop-shadow-2xl border-2 border-l-0 h-14 bg-black border-custom-blue-green' : 'drop-shadow-2xl h-14 border-2 border-l-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'h-12 bg-custom-black border-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`} onClick={() => setSelected('Front-End Dev')}><span className={`border-b-2 ${selected === 'Front-End Dev' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-black' : 'border-none')}`}>Front-End Dev</span></button>

                    <button className={`w-1/3 h-14 ${selected === 'Graphic Design' ? (isDarkMode ? 'drop-shadow-2xl rounded-3xl bg-black border-2 border-custom-blue-green' : 'drop-shadow-2xl border-2 rounded-3xl bg-custom-blue-40 border-white') : (isDarkMode ? 'rounded-r-none rounded-l-none border-y-2 bg-custom-black border-custom-blue-green' : 'border-y-2 rounded-r-none rounded-l-none bg-custom-blue border-white')}`} onClick={() => setSelected('Graphic Design')}><span className={`border-b-2 ${selected === 'Graphic Design' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-none' : 'border-none')}`}>Graphic Design</span></button>

                    <button className={`rounded-3xl w-1/3 ${selected === 'Video Editing' ? (isDarkMode ? 'drop-shadow-2xl border-2 border-r-0 h-14 bg-black border-custom-blue-green' : 'drop-shadow-2xl h-14 border-2 border-r-0 bg-custom-blue-40 border-white') : (isDarkMode ? 'h-12 bg-custom-black border-custom-blue-green' : 'h-12 bg-custom-blue border-white')}`} onClick={() => setSelected('Video Editing')}><span className={`border-b-2 ${selected === 'Video Editing' ? (isDarkMode ? 'border-custom-blue-green' : 'border-white') : (isDarkMode ? 'border-black' : 'border-none')}`}>Video Editing</span></button>
                </div>
            </div>
        </section>
    )
}

export default Creations