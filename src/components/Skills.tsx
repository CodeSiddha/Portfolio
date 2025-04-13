"use client";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaAws, FaJava, FaGit,
    FaNpm, FaDatabase, FaMicrochip, FaBrain
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql,
    SiSpringboot, SiJest, SiWebpack, SiC, SiCplusplus, SiRedux,
    SiGooglecloud, SiJira, SiPostman
} from 'react-icons/si';
import { TbApi, TbBrandAzure } from 'react-icons/tb';
import { BsFillGearFill } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

    // Simple dark blue background that matches adjacent sections
    const backgroundStyle = {
        backgroundColor: '#0f172a', // blue-950 - very dark blue shade
    };

    const getIcon = (tech: string) => {
        // Map each technology name to its corresponding icon
        switch (tech.toLowerCase()) {
            // Programming Languages
            case 'java': return <FaJava className="text-red-500" />;
            case 'javascript': return <FaJs className="text-yellow-400" />;
            case 'SQL': return <SiTypescript className="text-blue-500" />;
            case 'c': return <SiC className="text-blue-600" />;
            case 'c++': return <SiCplusplus className="text-blue-700" />;

            // Frontend
            case 'html': return <FaHtml5 className="text-orange-500" />;
            case 'css': return <FaCss3Alt className="text-blue-500" />;
            case 'react': return <FaReact className="text-blue-400" />;
            case 'redux': return <SiRedux className="text-purple-600" />;
            case 'next.js': return <SiNextdotjs className="text-black dark:text-white" />;
            case 'tailwind css': return <SiTailwindcss className="text-cyan-400" />;

            // Backend
            case 'node.js': return <FaNodeJs className="text-green-500" />;
            case 'express': return <SiExpress className="text-gray-500" />;
            case 'mongodb': return <SiMongodb className="text-green-600" />;
            case 'mysql': return <SiMysql className="text-blue-600" />;
            case 'rest api': return <TbApi className="text-orange-400" />;
            case 'springboot': return <SiSpringboot className="text-green-500" />;
            case 'microservice': return <FaMicrochip className="text-blue-700" />;

            // Cloud & DevOps
            case 'aws': return <FaAws className="text-orange-500" />;
            case 'azure': return <TbBrandAzure className="text-blue-500" />;
            case 'gcp': return <SiGooglecloud className="text-red-400" />;

            // Tools & Others
            case 'git': return <FaGit className="text-orange-600" />;
            case 'github': return <FaGithub className="text-gray-700 dark:text-gray-300" />;
            case 'jira': return <SiJira className="text-blue-500" />;
            case 'postman': return <SiPostman className="text-orange-600" />;

            default: return <FaDatabase className="text-gray-500" />; // Default icon
        }
    };

    // Define skill categories and their corresponding technologies with proficiency levels
    const skills = [
        {
            category: "Programming Languages",
            description: "Core languages I use for development",
            icon: <FaBrain className="text-purple-400" size={24} />,
            color: "from-purple-500 to-indigo-500",
            technologies: [
                { name: "JavaScript", level: 90 },
                { name: "MYSQL", level: 85 },
                { name: "JAVA", level: 80 },
                { name: "C", level: 70 },
                { name: "C++", level: 75 }
            ]
        },
        {
            category: "Frontend",
            description: "Creating responsive and interactive UIs",
            icon: <FaReact className="text-blue-400" size={24} />,
            color: "from-blue-500 to-cyan-400",
            technologies: [
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
                { name: "React", level: 85 },
                { name: "Redux", level: 80 },
                { name: "Next.js", level: 80 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            category: "Backend",
            description: "Building robust server-side applications",
            icon: <FaNodeJs className="text-green-500" size={24} />,
            color: "from-green-500 to-emerald-400",
            technologies: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 85 },
                { name: "MongoDB", level: 80 },
                { name: "MYSQL", level: 75 },
                { name: "REST API", level: 90 },
                { name: "SPRINGBOOT", level: 75 },
                { name: "Microservice", level: 70 }
            ]
        },
        {
            category: "Cloud & DevOps",
            description: "Deploying and scaling applications",
            icon: <FaAws className="text-orange-400" size={24} />,
            color: "from-orange-500 to-amber-400",
            technologies: [
                { name: "AWS", level: 75 },
                { name: "Azure", level: 70 },
                { name: "GCP", level: 65 },
            ]
        },
        {
            category: "Tools & Others",
            description: "Essential development tools and utilities",
            icon: <FaGit className="text-orange-600" size={24} />,
            color: "from-red-500 to-rose-400",
            technologies: [
                { name: "Git", level: 90 },
                { name: "GitHub", level: 85 },
                { name: "Jira", level: 80 },
                { name: "Postman", level: 85 },
            ]
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5
            }
        })
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4
            }
        }
    };

    return (
        <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden" style={backgroundStyle}>
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern-dark.svg')] bg-repeat opacity-5"
                    style={{ transform: `translateY(${scrollY * -20}px)` }}
                ></div>

                <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl"
                    style={{ transform: `translate(${scrollY * -60}px, ${scrollY * 30}px)` }}
                ></div>

                <div className="absolute bottom-20 left-10 w-60 h-60 bg-indigo-400/10 rounded-full filter blur-3xl"
                    style={{ transform: `translate(${scrollY * 40}px, ${scrollY * -20}px)` }}
                ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl drop-shadow-md">
                        My Skills Arsenal
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="text-xl text-white/90 drop-shadow-sm">
                            A comprehensive showcase of technologies and tools I work with
                        </p>
                    </div>
                </div>

                {/* Main skills container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-16"
                >
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            custom={groupIndex}
                            variants={sectionVariants}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/10"
                        >
                            <div className="flex items-center mb-6 pb-4 border-b border-white/10">
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mr-4">
                                    {skillGroup.icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                                    <p className="text-white/70">{skillGroup.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {skillGroup.technologies.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        className="relative group overflow-hidden"
                                    >
                                        <div className="bg-white/10 rounded-xl p-4 group-hover:bg-white/15 transition-all duration-300 transform group-hover:-translate-y-1 backdrop-blur-sm">
                                            <div className="flex items-center mb-2">
                                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                                                    {getIcon(tech.name)}
                                                </div>
                                                <h4 className="text-base font-medium text-white">{tech.name}</h4>
                                            </div>

                                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                                                <div
                                                    className={`absolute h-full bg-gradient-to-r ${skillGroup.color} rounded-full`}
                                                    style={{ width: `${tech.level}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between mt-1 text-xs text-white/60">
                                                <span>Proficiency</span>
                                                <span className="font-medium">{tech.level}%</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Visual skill web - decorative element */}
                <div className="mt-20 mb-10 relative">
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.flatMap((group) =>
                            group.technologies
                                .filter(tech => tech.level >= 85) // Only show high proficiency skills in web
                                .slice(0, 2) // Limit to 2 per category to avoid overcrowding
                                .map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                delay: Math.random() * 0.5
                                            }
                                        }}
                                        viewport={{ once: true }}
                                        className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                                    >
                                        <div className="flex items-center">
                                            <span className="mr-2">{getIcon(tech.name)}</span>
                                            <span className="text-white text-sm">{tech.name}</span>
                                        </div>
                                    </motion.div>
                                ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills; 