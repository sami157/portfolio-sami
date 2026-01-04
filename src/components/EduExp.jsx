import React from "react";
import experienceData from "../data/experience.json";

const EduExp = () => {
    const education = experienceData.education;
    const experience = experienceData.experience;

    return (
        <section
            id="education-experience"
            className="py-20 px-6 md:px-12 bg-base-100"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-base-content text-center">
                    Education & Experience
                </h2>
                <div className="gradient-divider mx-auto w-32"></div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-semibold text-base-content mb-4">
                            Education
                        </h3>
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                                <p className="text-base-content/80">
                                    <strong>{edu.institution}</strong> — {edu.year}
                                </p>
                                <p className="text-base-content/70">{edu.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-semibold text-base-content mb-4">
                            Experience
                        </h3>
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 flex flex-col gap-2 hover:scale-[1.02] transition-transform duration-300"
                            >
                                <h4 className="text-xl font-semibold">{exp.role}</h4>
                                <p className="text-base-content/80">
                                    <strong>{exp.organization}</strong> — {exp.duration}
                                </p>
                                {exp.responsibilities?.length > 0 && (
                                    <ul className="list-disc list-inside text-base-content/70 mt-2">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EduExp;