import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProjectData } from '../context/ProjectContext';
import BubbleText from '@/components/ui/text-effect-flipper';

const ProjectDes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectData = useProjectData();

    const project = projectData[parseInt(id, 10)];

    // Add better error handling
    if (!project) {
        return (
            <motion.div 
                className="min-h-screen flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="text-white text-center">
                    <h2 className="text-2xl mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="text-amber-100 hover:text-amber-200"
                    >
                        ← Go Back
                    </button>
                </div>
            </motion.div>
        );
    }

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
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
                        <BubbleText className='text-2xl md:text-4xl font-bold text-white' color={'rgb(247, 136, 244)'}>
                            {project.title}
                        </BubbleText>
                        {project.git && (
                            <motion.a
                                href={project.git}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 15, color: "#fbbf24" }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-300 hover:text-amber-400 transition-colors duration-200 p-2 bg-white/5 rounded-full hover:bg-white/10 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                                title="View on GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </motion.a>
                        )}
                    </div>

                    <motion.img 
                        src={project.url} 
                        alt={project.title}
                        className="w-full h-auto max-h-[300px] md:max-h-[500px] object-cover rounded-lg mb-8 shadow-lg border-2 border-purple-500/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3 border-b-2 border-purple-500/30 pb-2">Description</h3>
                            <p className="text-gray-200 leading-relaxed whitespace-pre-line">{project.description}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3 border-b-2 border-purple-500/30 pb-2">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <motion.span 
                                        key={index}
                                        className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-medium"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProjectDes;