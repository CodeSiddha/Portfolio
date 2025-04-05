"use client";

import { useEffect, useState, useRef } from 'react';

const About = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                // Calculate scroll progress within this section
                const viewportHeight = window.innerHeight;
                // Start effect when section is entering viewport
                const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - top) / (viewportHeight + height)));
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Simple dark blue background that matches the Skills section
    const backgroundStyle = {
        backgroundColor: '#0f172a', // blue-950 - very dark blue shade
    };

    return (
        <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden" style={backgroundStyle}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern-dark.svg')] bg-repeat opacity-5"
                    style={{ transform: `translateY(${scrollY * 30}px)` }}
                ></div>

                <div className="absolute top-20 left-10 w-60 h-60 bg-purple-400/10 rounded-full filter blur-3xl"
                    style={{ transform: `translate(${scrollY * 70}px, ${scrollY * 40}px)` }}
                ></div>

                <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/10 rounded-full filter blur-3xl"
                    style={{ transform: `translate(${scrollY * -50}px, ${scrollY * -30}px)` }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl drop-shadow-md">
                        About Me
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="text-xl text-white/90 drop-shadow-sm">
                            Get to know me better
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    {/* Add subtle background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-800/10 z-0"></div>
                    <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl"></div>

                    <div className="order-2 lg:order-1 relative z-10">
                        <h3 className="text-xl font-bold text-white mb-4 drop-shadow-sm tracking-wide">
                            Software Developer with a <span className="text-blue-400">passion</span> for creating
                        </h3>

                        {/* Experience highlight */}
                        <div className="inline-block px-3 py-1.5 bg-blue-900/30 rounded-lg border-l-2 border-blue-400 mb-4">
                            <p className="text-white/90 font-medium text-sm">
                                <span className="text-blue-300 font-semibold">Software Engineer</span> • <span className="text-blue-300 font-semibold">2 years</span> • Kratikal Tech Pvt. Ltd.
                            </p>
                        </div>

                        {/* Consolidated about text - more concise */}
                        <p className="text-base text-white/80 mb-4 leading-relaxed">
                            I have a <span className="font-semibold text-blue-300">Master of Computer Applications (MCA)</span> degree from <span className="font-semibold text-blue-300">MNNIT Allahabad</span>. My education in data structures, algorithms, and software design informs my analytical approach to problem-solving.
                        </p>

                        <p className="text-base text-white/80 mb-4 leading-relaxed">
                            I've <span className="font-semibold text-blue-300 px-1.5 py-0.5 bg-blue-800/30 rounded">led two projects end-to-end</span> from design to production, both now serving real-time users. My work involves database design, RESTful APIs, and cross-functional collaboration. I focus on balancing performance with reliability, and continuously stay updated on emerging technologies.
                        </p>

                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-2 border border-white/30 text-sm font-medium rounded-md text-white bg-blue-600/60 hover:bg-blue-500/80 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center relative z-10">
                        <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-blue-500/50 shadow-2xl group">
                            <img
                                src="/vishal_siddha.jpg"
                                alt="Vishal Siddha"
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 border-8 border-white/10 rounded-full"></div>
                            <div className="absolute -bottom-2 left-0 right-0 text-center bg-gradient-to-t from-blue-900/80 to-transparent py-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                                <p className="text-white font-medium">Vishal Siddha</p>
                                <p className="text-blue-300 text-sm">Software Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 