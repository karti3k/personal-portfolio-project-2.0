'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import RoboLight from '@/assets/robo_light.png';
import RoboDark from '@/assets/robo_dark.png';

interface AboutProps {
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    const [modeButtonIcon, setModeButtonIcon] = useState<string | StaticImageData>(RoboLight);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["A Front-End Web Developer", "A Graphic Designer..", "A Video Editor..."];
    const period = 2000;

    const tick = useCallback(() => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [loopNum, toRotate, isDeleting, text, period]);

    useEffect(() => {
        const ticker = setInterval(tick, delta);

        return () => clearInterval(ticker);
    }, [delta, tick]);

    useEffect(() => {
        setModeButtonIcon(isDarkMode ? RoboDark : RoboLight);
    }, [isDarkMode]);

    return (
        <main id='about-section' className={`w-full lg:h-screen md:h-auto h-screen flex md:gap-0 flex-col md:flex-row md:pt-32 md:pb-44 lg:pt-0 lg:pb-0 ${isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'}`}>
            <div className='md:w-1/2 w-full '>
                <div className='lg:pt-16 md:pt-0 pt-12 md:p-4 flex flex-col pl-8 pr-8 md:pr-0 md:pl-12 lg:pl-32'>
                    <span className={`jua-font text-4xl md:text-5xl opacity-10 h-16 md:h-20 drop-shadow-lg ${isDarkMode ? 'text-custom-green' : 'text-white'}`}>About:</span>
                    <h1 className={`jua-font text-2xl md:text-4xl w-full h-24 md:h-32 lg:h-28 drop-shadow-lg`}>
                        <span className={`text-3xl md:text-4xl ${isDarkMode ? 'text-custom-sky-blue' : 'text-white'}`}>
                            {`Hi! I'm Kartik Bhatia.`}
                        </span>
                        <span className={`txt-rotate ${isDarkMode ? 'text-custom-blue-green' : 'text-custom-sky-blue'}`} data-period="1000" data-rotate='[ "A Front-End Web Developer", "A Graphic Designer", "A Video Editor" ]'>
                            <span className="block">{text}</span>
                        </span>
                    </h1>
                    <p className={`text-white text-justify lg:pr-8 md:pr-6 anekDevanagari-font drop-shadow-lg md:text-lg pb-6 md:pb-0`}>I am passionate about crafting stunning, user-friendly interfaces and dedicated to creating captivating web applications and websites. My goal is to enhance the user experience through visually appealing designs that make digital products a joy to use. Additionally, I engage in graphic design and video editing alongside my main focus.</p>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-screen md:h-[75%] flex justify-start md:justify-center items-center'>
                <Image className={`md:-mt-0 pl-[5%] md:pl-0 lg:w-[52%] md:w-[80%] w-[65%] float-animation md:mt-32 lg:mt-16 ${isDarkMode ? 'drop-shadow-2xl' : 'drop-shadow-lg'}`} src={modeButtonIcon} alt='white robo' />
            </div>
        </main>
    );
};

export default About;