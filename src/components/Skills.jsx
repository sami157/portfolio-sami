import React from "react";
import skillsData from "../data/skills.json";

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-12 bg-base-100">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Header */}
                <h2 className="text-3xl font-bold text-base-content text-center">Skills</h2>
                <div className="gradient-divider mx-auto w-32"></div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.skills.map((category, idx) => (
                        <div
                            key={idx}
                            className="glass-card p-6 flex flex-col gap-4 bg-white/5 border-white/10 text-base-content"
                        >
                            <h3 className="text-xl font-semibold">{category.category}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {category.list.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 rounded-lg font-medium text-sm text-base-content bg-base-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
