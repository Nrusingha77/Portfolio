import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BubbleText from '@/components/ui/text-effect-flipper';

const DetailItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-3 text-gray-300">
        <span className="text-amber-400 text-xl">{icon}</span>
        <p><span className="font-semibold text-white">{label}:</span> {value}</p>
    </div>
);

const Experience = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, position: 'absolute', width: '100%', top: 0 }}
            className="min-h-screen"
        >
            <div className="container mx-auto px-4 py-24">
                <motion.button
                    onClick={() => navigate(-1)}
                    className="mb-8 text-white hover:text-amber-100 flex items-center gap-2"
                    whileHover={{ x: -5 }}
                >
                    <span className="text-xl">←</span> Back
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-8 shadow-2xl"
                >
                    <BubbleText className='text-2xl md:text-4xl font-bold mb-2 text-white' color={'rgb(247, 136, 244)'}>
                        Java Full-Stack Intern
                    </BubbleText>
                    <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                        @ Millennium Software Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <DetailItem icon="💼" label="Type" value="Internship" />
                        <DetailItem icon="📍" label="Location" value="Visakhapatnam, Andhra Pradesh, India" />
                        <DetailItem icon="⏳" label="Duration" value="June 2024 - July 2024" />
                        <DetailItem icon="💻" label="Mode" value="On-site" />
                    </div>

                    <div className="space-y-6 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3 border-b-2 border-purple-500/30 pb-2">Work Experience</h3>
                            <p className="text-gray-200 leading-relaxed">
                                During my internship, I gained hands-on experience in developing robust and scalable web applications using the Java full-stack ecosystem. I was involved in both front-end and back-end development, contributing to the entire software development lifecycle from concept to deployment. This role allowed me to sharpen my problem-solving skills and collaborate effectively within an Agile team environment.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-3 border-b-2 border-purple-500/30 pb-2">
                                <h3 className="text-xl font-semibold text-white">Projects & Contributions</h3>
                                <motion.a
                                    href="https://github.com/Nrusingha77/Bank_Management_fullstack" // Replace with your actual repo URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, rotate: 5, color: '#c084fc', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: '#c084fc' }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-full border border-transparent text-gray-400 transition-colors duration-200"
                                    title="View Project on GitHub"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </motion.a>
                            </div>
                            <ul className="list-disc list-inside text-gray-200 space-y-2">
                                <li>Developed and integrated RESTful APIs using Spring Boot for seamless data communication between the client and server.</li>
                                <li>Designed and implemented responsive user interfaces with React, ensuring a high-quality user experience across devices.</li>
                                <li>Managed database schemas and queries using Hibernate and MySQL, focusing on data integrity and performance.</li>
                                <li>Participated in code reviews and sprint planning sessions, contributing to a culture of quality and continuous improvement.</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-purple-500/30 pb-2">Certificate of Completion</h3>
                        <motion.div 
                            className="bg-black/20 p-4 rounded-lg border border-gray-500/50"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(206, 132, 207, 0.4)" }}
                        >
                            <img
                                src="/certificate.jpg"
                                alt="Internship Certificate"
                                className="w-full h-auto object-contain rounded-md shadow-lg"
                            />
                        </motion.div>
                        <p className="text-center text-sm text-gray-400 mt-2">Internship Completion Certificate from Millennium Software Solutions.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Experience;