import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import projectsData from "../data/projects.json";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [selectedProject]);

    // Modal animation variants
    const modalVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95, borderRadius: "1rem" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            borderRadius: "1.5rem",
            transition: { type: "spring", stiffness: 250, damping: 28, mass: 0.7 }
        },
        exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.25 } }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
        exit: { opacity: 0, transition: { duration: 0.25 } }
    };

    const textContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } }
    };

    const textItem = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } }
    };

    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-base-300">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-base-content text-center">
                    Projects
                </h2>
                <div className="gradient-divider mx-auto w-32" />

                <LayoutGroup id="projects">
                    {/* Project Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {projectsData.projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="bg-base-100 rounded-xl p-4 gap-4 flex flex-col justify-between overflow-hidden shadow-lg"
                                whileHover={{ scale: 1.04 }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            >
                                <motion.img
                                    layoutId={`image-${project.id}`}
                                    src={project.thumbnail}
                                    alt={project.name}
                                    className="rounded-lg w-full h-48 object-cover"
                                />

                                <motion.div
                                    layoutId={`texts-${project.id}`}
                                    className="space-y-2"
                                >
                                    <motion.h3 className="text-xl font-semibold text-base-content" variants={textItem}>
                                        {project.name}
                                    </motion.h3>
                                    <motion.p className="text-sm text-base-content/80" variants={textItem}>
                                        {project.shortDescription}
                                    </motion.p>
                                </motion.div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-4">
                                        {project.githubClient && (
                                            <a
                                                href={project.githubClient}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-2xl transition hover:text-primary"
                                                aria-label="GitHub"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-2xl transition hover:text-primary"
                                                aria-label="Website"
                                            >
                                                <FaLink />
                                            </a>
                                        )}
                                    </div>
                                    <motion.button
                                        layoutId={`project-${project.id}`}
                                        onClick={() => setSelectedProject(project)}
                                        className="gradient-cta font-semibold bg-base-200 rounded-full px-4 py-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.96 }}
                                    >
                                        Details
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Modal */}
                    <AnimatePresence>
                        {selectedProject && (
                            <div className="flex flex-col items-center justify-center">
                                <motion.div
                                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                                    variants={overlayVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    onClick={() => setSelectedProject(null)}
                                />

                                <motion.div
                                    className="fixed max-w-[95vw] inset-0 z-50 flex items-center justify-center p-4"
                                    layoutId={`project-${selectedProject.id}`}
                                >
                                    <motion.div
                                        className="bg-base-100 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                                        variants={modalVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {/* Header Image */}
                                        <div className="relative h-300 overflow-hidden">
                                            <motion.img
                                                layoutId={`image-${selectedProject.id}`}
                                                src={selectedProject.thumbnail}
                                                alt={selectedProject.name}
                                                className="w-full h-full object-cover"
                                            />

                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-base-100/90 hover:bg-base-100/50 backdrop-blur flex items-center justify-center shadow-lg"
                                            >
                                                ✕
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <motion.div
                                            layoutId={`texts-${selectedProject.id}`}
                                            className="flex-1 overflow-y-auto p-8 space-y-6"
                                            variants={textContainer}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <motion.div variants={textItem}>
                                                <h2 className="text-3xl font-bold text-base-content mb-2">
                                                    {selectedProject.name}
                                                </h2>
                                                <p className="text-base-content/80">
                                                    {selectedProject.shortDescription}
                                                </p>
                                            </motion.div>

                                            <motion.div variants={textItem}>
                                                <h3 className="text-xl font-semibold mb-2">About</h3>
                                                <p className="text-base-content/70">
                                                    {selectedProject.details.description}
                                                </p>
                                            </motion.div>

                                            {selectedProject.techStack?.length > 0 && (
                                                <motion.div variants={textItem}>
                                                    <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {selectedProject.techStack.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 bg-primary/80 text-primary-content rounded-full text-sm font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}

                                            {selectedProject.details.challenges?.length > 0 && (
                                                <motion.div variants={textItem}>
                                                    <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                                                    <ul className="space-y-2">
                                                        {selectedProject.details.challenges.map((c, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="text-error">•</span>
                                                                <span className="text-base-content/70">{c}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}

                                            {selectedProject.details.futurePlans?.length > 0 && (
                                                <motion.div variants={textItem}>
                                                    <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
                                                    <ul className="space-y-2">
                                                        {selectedProject.details.futurePlans.map((f, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="text-primary">✔</span>
                                                                <span className="text-base-content/70">{f}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        {/* Footer */}
                                        <motion.div
                                            className="flex gap-3 p-6 border-t border-base-content/10"
                                            variants={textItem}
                                        >
                                            {selectedProject.githubClient && (
                                                <a
                                                    href={selectedProject.githubClient}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 px-6 py-3 bg-base-200 hover:bg-base-300 font-semibold rounded-xl text-center"
                                                >
                                                    View Code
                                                </a>
                                            )}
                                            {selectedProject.liveLink && (
                                                <a
                                                    href={selectedProject.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-content font-semibold rounded-xl text-center"
                                                >
                                                    View Live
                                                </a>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </LayoutGroup>
            </div>
        </section>
    );
};

export default Projects;
