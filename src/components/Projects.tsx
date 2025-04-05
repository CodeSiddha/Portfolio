"use client";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
    FaDocker, FaAws, FaEye, FaCode
} from 'react-icons/fa';
import {
    SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb,
    SiFirebase, SiRedux, SiChartdotjs, SiStripe
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Projects = () => {
    const getIcon = (tech: string) => {
        // Map each technology name to its corresponding icon
        switch (tech.toLowerCase()) {
            case 'react': return <FaReact className="mr-1 text-blue-400" />;
            case 'node.js': return <FaNodeJs className="mr-1 text-green-500" />;
            case 'express': return <SiExpress className="mr-1 text-gray-500" />;
            case 'mongodb': return <SiMongodb className="mr-1 text-green-600" />;
            case 'stripe': return <SiStripe className="mr-1 text-blue-500" />;
            case 'next.js': return <SiNextdotjs className="mr-1 text-black dark:text-white" />;
            case 'typescript': return <SiTypescript className="mr-1 text-blue-500" />;
            case 'firebase': return <SiFirebase className="mr-1 text-yellow-500" />;
            case 'tailwind css': return <SiTailwindcss className="mr-1 text-cyan-400" />;
            case 'redux': return <SiRedux className="mr-1 text-purple-500" />;
            case 'openweather api': return <TbApi className="mr-1 text-orange-400" />;
            case 'chart.js': return <SiChartdotjs className="mr-1 text-pink-500" />;
            default: return null;
        }
    };

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
            image: "/images/ecommerce.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Task Management App",
            description: "A productivity app for managing tasks, projects and team collaboration with real-time updates.",
            technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
            image: "/images/task-manager.jpg",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that provides real-time weather data and forecasts for any location.",
            technologies: ["React", "Redux", "OpenWeather API", "Chart.js"],
            image: "/images/weather-app.jpg",
            demoLink: "#",
            codeLink: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-dark dark:text-light sm:text-4xl">
                        My Projects
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="text-xl text-secondary dark:text-gray-300">
                            Check out some of my recent work
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="h-48 w-full bg-gray-300 flex items-center justify-center text-dark relative group">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex space-x-4">
                                                <a href={project.demoLink} className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
                                                    <FaEye size={20} />
                                                </a>
                                                <a href={project.codeLink} className="p-3 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
                                                    <FaCode size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center">
                                        <span className="text-lg font-medium mb-2">Project Image</span>
                                        <span className="text-sm text-gray-500">Placeholder</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark dark:text-light mb-2">{project.title}</h3>
                                <p className="text-base text-secondary dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-100"
                                        >
                                            {getIcon(tech)}
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4 mt-6">
                                    <a
                                        href={project.demoLink}
                                        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition-colors duration-300 flex-1"
                                    >
                                        <FaEye className="mr-2" /> Live Demo
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-dark dark:text-light hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex-1"
                                    >
                                        <FaGithub className="mr-2" /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 