import React, { useState } from "react";
import projectsData from "../data/projects.json";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 px-6 md:px-12 bg-base-300">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Header */}
                <h2 className="text-3xl font-bold text-base-content text-center">Projects</h2>
                <div className="gradient-divider mx-auto w-32"></div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projectsData.projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-base-100 rounded-xl p-4 cursor-pointer flex flex-col justify-between overflow-hidden hover:scale-105 transition-transform duration-300"
                            onClick={() => setSelectedProject(project)}
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 flex flex-col gap-2">
                                <h3 className="text-xl font-semibold text-base-content">{project.name}</h3>
                                <p className="text-sm text-base-content/80">{project.shortDescription}</p>
                                <button className="gradient-cta bg-base-200 rounded-full px-3 py-2 self-end">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-6">
                        <div className="glass-card max-w-3xl w-full p-6 relative">
                            <button
                                className="absolute top-4 right-4 text-base-content font-bold text-lg"
                                onClick={() => setSelectedProject(null)}
                            >
                                ×
                            </button>

                            <h3 className="text-2xl font-bold text-base-content mb-4">{selectedProject.name}</h3>
                            <img
                                src={selectedProject.thumbnail}
                                alt={selectedProject.name}
                                className="w-full h-64 object-cover mb-4 rounded-lg"
                            />
                            <p className="text-base-content mb-2">{selectedProject.details.description}</p>

                            <div className="mb-2">
                                <p className="font-semibold text-base-content mb-1">Tech Stack:</p>
                                <ul className="list-disc list-inside text-base-content">
                                    {selectedProject.techStack.map((tech, idx) => (
                                        <li key={idx}>{tech}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-2">
                                <p className="font-semibold text-base-content mb-1">Challenges:</p>
                                <ul className="list-disc list-inside text-base-content">
                                    {selectedProject.details.challenges.map((ch, idx) => (
                                        <li key={idx}>{ch}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold text-base-content mb-1">Future Plans:</p>
                                <ul className="list-disc list-inside text-base-content">
                                    {selectedProject.details.futurePlans.map((plan, idx) => (
                                        <li key={idx}>{plan}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-4 mt-4">
                                {selectedProject.liveLink && (
                                    <a
                                        href={selectedProject.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gradient-cta"
                                    >
                                        Live Project
                                    </a>
                                )}
                                {selectedProject.githubClient && (
                                    <a
                                        href={selectedProject.githubClient}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="gradient-cta"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;