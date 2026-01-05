import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import skillsData from "../data/skills.json";

// Example icon mapping (replace / extend as needed)
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaNodeJs,
    FaGit,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiDaisyui,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const iconMap = {
    react: FaReact,
    html5: FaHtml5,
    css3: FaCss3Alt,
    javascript: FaJs,
    tailwind: SiTailwindcss,
    daisyui: SiDaisyui,
    nodejs: FaNodeJs,
    express: SiExpress,
    mongodb: SiMongodb,
    git: FaGit,
    postman: SiPostman,
    vscode: VscVscode,
    figma: SiFigma,
};

const Skills = () => {
    return (
        <section id="skills" className="px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-5">
                <h2 className="text-3xl font-bold text-center text-base-content">
                    Skills
                </h2>

                {/* Grid of Categories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.skills.map((category) => (
                        <div
                            key={category.category}
                            className="rounded-2xl p-4"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-center">
                                {category.category}
                            </h3>

                            {/* Swiper Card Stack */}
                            <Swiper
                                effect="cards"
                                grabCursor
                                loop
                                modules={[EffectCards]}
                                className="w-75 md:w-75 h-90 mx-auto"
                            >
                                {category.list.map((skill) => {
                                    const Icon = iconMap[skill.icon];

                                    return (
                                        <SwiperSlide className="rounded-2xl drop-shadow-2xl shadow-accent" key={skill.name}>
                                            <div className="w-full h-full rounded-xl bg-base-200 flex flex-col items-center justify-center gap-4">
                                                {Icon && (
                                                    <Icon className="text-8xl hover:rotate-30 transition-transform duration-100 ease-in-out text-base-content" />
                                                )}
                                                <p className="text-lg font-semibold text-base-content">
                                                    {skill.name}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;