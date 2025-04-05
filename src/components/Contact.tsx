"use client";

import { useState, useEffect, useRef } from 'react';
import { api } from '@/utils/api';
import { FaPaperPlane, FaUser, FaEnvelope, FaSpinner } from 'react-icons/fa';
import { MdSubject, MdMessage } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top, height } = sectionRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - top) / (viewportHeight + height)));
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Simple dark blue background that matches the Skills section
    const backgroundStyle = {
        backgroundColor: '#0f172a', // blue-950 - very dark blue shade
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitSuccess(false);
        setSubmitError('');

        try {
            // Send message to API
            await api.sendMessage(formData);

            // Reset form on success
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setSubmitSuccess(true);
        } catch (error) {
            setSubmitError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="py-20 relative" style={backgroundStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl drop-shadow-md">
                        Let's Connect
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto">
                        <p className="text-xl text-white/90 drop-shadow-sm">
                            Have a project in mind or want to collaborate? Drop me a message!
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {/* Creative Info Cards */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                                        <FaEnvelope className="text-blue-300" />
                                    </span>
                                    Email Me
                                </h3>
                                <p className="text-white/80">
                                    vishalsidha319@gmail.com
                                </p>
                                <a
                                    href="mailto:vishalsidha319@gmail.com"
                                    className="inline-block mt-4 text-blue-300 hover:text-blue-200 transition-colors"
                                >
                                    Send an email →
                                </a>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </span>
                                    LinkedIn
                                </h3>
                                <p className="text-white/80">
                                    Connect with me professionally
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/vishal-siddha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-300 hover:text-blue-200 transition-colors"
                                >
                                    Visit profile →
                                </a>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mr-3">
                                        <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    GitHub
                                </h3>
                                <p className="text-white/80">
                                    Check out my code repositories
                                </p>
                                <a
                                    href="https://github.com/CodeSiddha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-300 hover:text-blue-200 transition-colors"
                                >
                                    View projects →
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="md:col-span-3">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-white/10">
                                {submitSuccess ? (
                                    <div className="text-center py-10">
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-6">
                                            <div className="text-green-400 text-4xl">✓</div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-white/80 mb-6 max-w-md mx-auto">
                                            Thank you for reaching out. I'll get back to you as soon as possible.
                                        </p>
                                        <button
                                            onClick={() => setSubmitSuccess(false)}
                                            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-full text-white bg-blue-600/50 hover:bg-blue-500/60 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            <FaPaperPlane className="mr-2" />
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 flex items-center">
                                                    <FaUser className="mr-2 text-blue-300" />
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="block w-full rounded-lg border-white/20 shadow-md focus:border-blue-400 focus:ring-blue-400 bg-white/20 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2 flex items-center">
                                                    <FaEnvelope className="mr-2 text-blue-300" />
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="block w-full rounded-lg border-white/20 shadow-md focus:border-blue-400 focus:ring-blue-400 bg-white/20 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3"
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 flex items-center">
                                                <MdSubject className="mr-2 text-blue-300" />
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-lg border-white/20 shadow-md focus:border-blue-400 focus:ring-blue-400 bg-white/20 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3"
                                                placeholder="Project Collaboration"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-white mb-2 flex items-center">
                                                <MdMessage className="mr-2 text-blue-300" />
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="block w-full rounded-lg border-white/20 shadow-md focus:border-blue-400 focus:ring-blue-400 bg-white/20 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3"
                                                placeholder="I'd like to discuss a potential project..."
                                            />
                                        </div>
                                        {submitError && (
                                            <div className="bg-red-500/20 text-red-300 p-3 rounded-lg text-sm">
                                                {submitError}
                                            </div>
                                        )}
                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full inline-flex items-center justify-center px-6 py-4 border border-white/20 text-base font-medium rounded-full text-white bg-blue-600/50 hover:bg-blue-500/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg hover:shadow-xl"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <FaSpinner className="animate-spin mr-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaPaperPlane className="mr-2" />
                                                        Send Message
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 