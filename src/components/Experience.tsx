"use client";

import { FaBriefcase, FaCalendarAlt, FaLaptopCode, FaCode, FaDatabase, FaServer, FaTools, FaMobile } from 'react-icons/fa';
import { MdWork, MdSchool, MdLocationOn } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Experience = () => {
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

    const experiences = [
        {
            title: "Software Development Engineer",
            company: "Kratikal Tech Pvt. Ltd.",
            location: "Noida, UP",
            period: "June 2023 - Present",
            type: "Full-time",
            description: "Working as a full-stack developer on enterprise web applications, implementing both frontend and backend features with a focus on performance and scalability.",
            responsibilities: [
                "Led end-to-end development of the Threatcop Admin (TA) portal, a centralized user and group management system spanning 4 enterprise applications, reducing administrative overhead by approximately 40% through unified user provisioning and access control.",
                "Designed and implemented a scalable database schema for Threatcop Admin, ensuring backward compatibility and data integrity. Successfully migrated user and group data from 4 separate systems, eliminating data mismatches and achieving 100% consistency.",
                "Developed and deployed Single Sign-On (SSO) functionality using industry-standard protocols. Enabled seamless authentication across all 4 unified applications, enhancing user login efficiency by 75%.",
                "Synchronized Azure Active Directory and Google Workspace with TA, enabling automated real-time user and group management. Reduced manual syncing efforts by 80%.",
                "Executed Azure Marketplace onboarding for TA, facilitating streamlined client procurement and automated subscription lifecycle management via webhooks, reducing manual handling tasks by 60%.",
                "Created an Identity and Access Management (IAM) module using Role-Based Access Control (RBAC), improving security compliance by 50% and operational efficiency by 35%.",
                "Engineered RESTful API infrastructure and connected it with frontend components, enabling seamless data communication and improving application responsiveness by 30%.",
                "Established a centralized license and package management system in TA, ensuring 100% accuracy across multi-application environments.",
                "Resolved 58+ backend API issues in the production system, increasing overall system stability by 75% and enhancing maintainability through structured documentation.",
                "Optimized backend database queries, routing logic, and frontend rendering workflows, reducing latency and significantly improving response times and application performance."
            ],
            technologies: ["React", "Node.js", "MYSQL", "Microservices", "Redux", "Azure AD", "Google Workspace", "SSO", "RBAC"]
        },
        {
            title: "Software Development Intern",
            company: "Kratikal Tech Pvt. Ltd.",
            location: "Noida, UP",
            period: "JAN 2023 - MAY 2023",
            type: "Internship",
            description: "Gained hands-on experience in web development by contributing to a customer-facing web application. Learned software development best practices and agile methodology.",
            responsibilities: [
                "Contributed to the development of Auto-SecT, an internal security automation tool, where I integrated multiple third-party APIs and built backend endpoints to streamline operations.",
                "Actively participated in project planning sessions, contributing to technical discussions and sprint structuring.",
                "Gained hands-on experience with Node.js, REST APIs, and system architecture, setting the foundation for full-time development responsibilities.",
            ],
            technologies: ["React", "JavaScript", "HTML/CSS", "Node.js", "Express"]
        }
    ];

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            }
        })
    };

    return (
        <section ref={sectionRef} id="experience" className="py-20 relative" style={backgroundStyle}>
            <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold tracking-tight text-white inline-block relative drop-shadow-md">
                        <span className="relative z-10">My Experience</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-white/20 -z-10 transform -rotate-1"></span>
                    </h2>
                    <div className="mt-6 max-w-3xl mx-auto">
                        <p className="text-xl text-white/90 drop-shadow-sm">
                            My professional journey as a software developer
                        </p>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative flex flex-col items-start ml-10">
                    {/* Vertical Timeline Line */}
                    <div className="absolute h-full w-1 bg-white/30 left-0 z-0"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="mb-16 w-full flex relative z-10"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInVariants}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 transform -translate-x-1/2 translate-y-6 z-20">
                                <div className="h-8 w-8 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                                    {exp.type === "Internship" ?
                                        <MdSchool className="text-white text-lg" /> :
                                        <MdWork className="text-white text-lg" />
                                    }
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="ml-8 w-full">
                                <div
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-400"
                                >
                                    <div className="flex flex-col mb-4">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center text-white/80 mt-2">
                                            <FaBriefcase className="mr-2 text-blue-300" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                        <div className="flex items-center text-white/70 mt-1">
                                            <MdLocationOn className="mr-2 text-blue-300/80" />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                        <div className="flex items-center text-white/70 mt-1">
                                            <FaCalendarAlt className="mr-2 text-blue-300/80" />
                                            <span className="text-sm">{exp.period}</span>
                                        </div>
                                    </div>

                                    <div className="mb-5 p-4 bg-white/5 rounded-lg">
                                        <p className="text-white/80 italic">
                                            "{exp.description}"
                                        </p>
                                    </div>

                                    <div className="mb-5">
                                        <h4 className="font-bold text-white mb-3 flex items-center">
                                            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                                                <FaLaptopCode className="text-blue-300 text-xs" />
                                            </span>
                                            Key Responsibilities
                                        </h4>
                                        <ul className="space-y-2 ml-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="mr-2 mt-1 text-blue-300/80">
                                                        <BsArrowRight />
                                                    </span>
                                                    <span className="text-white/80 text-sm">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white mb-3 flex items-center">
                                            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-2">
                                                <FaCode className="text-blue-300 text-xs" />
                                            </span>
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Date indicator for visual effect on timeline */}
                                    <div className="absolute top-0 left-0 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-md shadow-blue-500/30">
                                        {exp.period.split(' - ')[0]}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 