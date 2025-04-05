"use client";

import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [displayText, setDisplayText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const fullText = "Vishal Siddha";
    const typingSpeed = 120; // milliseconds per character

    // Replace these URLs with your actual profile links
    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedin className="text-blue-600 dark:text-blue-400" />, url: 'https://www.linkedin.com/in/vishal-siddha/' },
        { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-200" />, url: 'https://github.com/CodeSiddha' },
        { name: 'LeetCode', icon: <SiLeetcode className="text-orange-500 dark:text-orange-300" />, url: 'https://leetcode.com/u/Siddha100k/' }
    ];

    useEffect(() => {
        // Typing effect
        if (displayText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [displayText]);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const scrollProgress = Math.max(0, Math.min(1, -top / height));
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Simpler background style that transitions from blue to teal to match the About section
    const backgroundStyle = {
        background: `linear-gradient(to bottom, 
            rgba(3, 105, 161, 1) 0%, 
            rgba(15, 118, 110, ${scrollY}) 100%)`,
        transition: 'background 0.3s ease-out',
    };

    // Simpler content opacity effect
    const contentStyle = {
        opacity: 1 - scrollY * 0.5,
        transition: 'opacity 0.3s ease-out'
    };

    return (
        <section
            ref={sectionRef}
            id="home"
            className="pt-20 min-h-screen flex items-center justify-center relative"
            style={backgroundStyle}
        >
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10"
                style={contentStyle}
            >
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                    <span className="block">Hi, I'm</span>
                    <div className="mt-2 flex justify-center items-center">
                        <span className="text-white bg-black/20 px-4 py-2 rounded-lg font-mono inline-flex items-center">
                            <span className="text-blue-300 mr-2">{`const developer = `}</span>
                            <span className="text-green-300">{`"${displayText}"`}</span>
                            <span className={`ml-1 h-8 w-2 bg-white inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                        </span>
                    </div>
                    <div className="text-sm font-mono text-blue-200 mt-2 flex justify-center">
                        <span>{`// Passionate about building scalable web applications`}</span>
                    </div>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-white/90 drop-shadow-md">
                    Backend Developer Building scalable web applications with modern technologies
                </p>

                {/* Social Links */}
                <div className="mt-8 flex justify-center space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-all duration-300 hover:scale-125"
                            aria-label={link.name}
                        >
                            <div className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl">
                                {link.icon}
                            </div>
                            <span className="sr-only">{link.name}</span>
                        </a>
                    ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#experience"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 md:text-lg"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-all duration-300 md:text-lg"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 