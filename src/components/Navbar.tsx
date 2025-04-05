"use client";

import { useState, useEffect } from 'react';
import {
    FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope, FaMoon, FaSun,
    FaFileAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    useEffect(() => {
        // Handle scroll for navbar background change
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', href: '#home', icon: <FaHome /> },
        { name: 'About', href: '#about', icon: <FaUser /> },
        { name: 'Skills', href: '#skills', icon: <FaLaptopCode /> },
        { name: 'Experience', href: '#experience', icon: <MdWork /> },
        { name: 'Contact', href: '#contact', icon: <FaEnvelope /> }
    ];

    // Resume URL - update this with your actual resume link
    const resumeUrl = "https://drive.google.com/file/d/1EugXq3DJOiZny3ZwhRI1SRYeJ4_e1f82/view?usp=sharing";

    return (
        <nav className={`fixed w-full z-20 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-md' : 'bg-white dark:bg-dark'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-primary">
                                Vishal<span className="text-dark dark:text-white">Siddha</span>
                            </span>
                        </div>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary flex items-center transition-colors duration-200"
                            >
                                <span className="mr-1">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}

                        {/* Resume Link */}
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 text-sm font-medium bg-primary text-white hover:bg-primary-dark rounded-md flex items-center transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                        >
                            <FaFileAlt className="mr-1" />
                            Resume
                            <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg">
                    <div className="pt-2 pb-3 space-y-1 px-2">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="mr-3 text-gray-500 dark:text-gray-400">{item.icon}</span>
                                {item.name}
                            </a>
                        ))}

                        {/* Resume Link in Mobile Menu */}
                        <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition-colors duration-200 mt-2 mx-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaFileAlt className="mr-3" />
                            Resume
                            <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 