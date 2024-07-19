'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Robo from '@/assets/Robo.png';

interface AboutProps {
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["A Front-End Web Developer!", "A Graphic Designer..", "A Video Editor..."];
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
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
    };

    return (
        <main className={`w-full lg:h-screen h-auto flex md:pt-32 md:pb-44 lg:pt-0 lg:pb-0  ${isDarkMode ? 'bg-custom-black' : 'bg-custom-blue'}`}>
            <div className='w-1/2'>
                <div className='p-4 flex flex-col pl-8 md:pl-12 lg:pl-32 pt-12'>
                    <span className={`jua-font text-5xl opacity-10 h-20 drop-shadow-lg ${isDarkMode ? 'text-custom-green' : 'text-white'}`}>About:</span>
                    <h1 className={`jua-font text-4xl w-full h-24 drop-shadow-lg`}>
                        <span className={`${isDarkMode?'text-custom-sky-blue':'text-white'
                        }`}>{`Hi! I'm Kartik Bhatia.`} </span>
                        <span className={`txt-rotate ${isDarkMode?'text-custom-blue-green':'text-custom-sky-blue'}`} data-period="1000" data-rotate='[ "A Front-End Web Developer", "A Graphic Designer", "A Video Editor" ]'>
                            <span className="block">{text}</span>
                        </span>
                    </h1>
                    <p className={`text-justify lg:pr-8 md:pr-6 anekDevanagari-font drop-shadow-lg md:text-lg`}>I am passionate about crafting stunning, user-friendly interfaces and dedicated to creating captivating web applications and websites. My goal is to enhance the user experience through visually appealing designs that make digital products a joy to use. Additionally, I engage in graphic design and video editing alongside my main focus.</p>
                </div>
            </div>
            <div className='w-1/2 h-[75%] flex flex-col justify-center items-center'>
                <Image className={`lg:w-[52%] w-[80%] float-animation md:mt-28 lg:mt-12 ${isDarkMode?'drop-shadow-2xl':'drop-shadow-lg'}`} src={Robo} alt='white robo' />
            </div>
        </main>
    );
};

export default About;