import React from "react";
import experienceData from "../data/experience.json";
import { FaGraduationCap } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";

const EduExp = () => {
    const education = experienceData.education;
    const experience = experienceData.experience;

    return (
        <div className="mx-auto w-[90vw] md:w-200 flex flex-col items-center justify-center gap-12">
            {/* Card */}
            <div className="p-5 flex flex-col gap-3 hover:shadow-2xl bg-base-200 rounded-2xl transition-all duration-300">
                {/* Education */}
                <div className="flex items-center gap-3">
                    <div className="rounded-lg flex items-center justify-center">
                        <span className="text-3xl"><FaGraduationCap /></span>
                    </div>
                    <h3 className="text-2xl font-bold text-base-content">
                        Education
                    </h3>
                </div>
                <div className="flex flex-col gap-5">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 pb-5"
                        >
                            <h4 className="text-lg font-semibold text-base-content">{edu.degree}</h4>
                            <p className="text-base-content/80 text-sm">
                                <strong>{edu.institution}</strong> • {edu.year}
                            </p>
                            {/* <p className="text-base-content/70 text-sm">{edu.description}</p> */}
                        </div>
                    ))}
                </div>
                {/* Experience */}
                <div className="flex items-center gap-3">
                    <div className="rounded-lg flex items-center justify-center">
                        <span className="text-3xl"><MdWorkHistory /></span>
                    </div>
                    <h3 className="text-2xl font-bold text-base-content">
                        Experience
                    </h3>
                </div>
                <div className="flex flex-col gap-5">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-2 pb-5"
                        >
                            <h4 className="text-lg font-semibold text-base-content">{exp.role}</h4>
                            <p className="text-base-content/80 text-sm">
                                <strong>{exp.organization}</strong> • {exp.duration}
                            </p>
                            {/* {exp.responsibilities?.length > 0 && (
                                    <ul className="list-disc list-inside text-base-content/70 text-sm mt-1 space-y-1">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                )} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EduExp;