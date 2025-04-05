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
            title: "Software Engineer",
            company: "XYZ Tech Solutions",
            location: "San Francisco, CA",
            period: "Aug 2022 - Present",
            type: "Full-time",
            description: "Working as a full-stack developer on enterprise web applications, implementing both frontend and backend features with a focus on performance and scalability.",
            responsibilities: [
                "Developed and maintained RESTful APIs using Node.js, Express, and MongoDB",
                "Built responsive frontend components with React and TypeScript",
                "Implemented microservices architecture for improved system scalability",
                "Collaborated with cross-functional teams to deliver high-quality software"
            ],
            technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Microservices", "Redux"]
        },
        {
            title: "Junior Developer",
            company: "ABC Digital",
            location: "New York, NY",
            period: "Jan 2021 - July 2022",
            type: "Full-time",
            description: "Worked on a team developing web applications for clients in the healthcare and finance sectors, focusing on building secure and compliant solutions.",
            responsibilities: [
                "Built and maintained responsive web applications using React",
                "Developed backend services with Node.js and Express",
                "Worked with SQL and NoSQL databases including MySQL and MongoDB",
                "Participated in code reviews and implemented feedback from senior developers"
            ],
            technologies: ["React", "JavaScript", "Node.js", "Express", "MySQL", "AWS"]
        },
        {
            title: "Software Development Intern",
            company: "Tech Innovators",
            location: "Chicago, IL",
            period: "May 2020 - Dec 2020",
            type: "Internship",
            description: "Gained hands-on experience in web development by contributing to a customer-facing web application. Learned software development best practices and agile methodology.",
            responsibilities: [
                "Assisted in developing UI components using React and CSS",
                "Created RESTful APIs with Node.js and Express",
                "Performed unit and integration testing for application modules",
                "Participated in daily standups and sprint planning meetings"
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