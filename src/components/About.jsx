import React from "react";
import { FaLaptopCode, FaFootballBall, FaPaintBrush } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-12 flex justify-center bg-base-100">
            <div className="glass-card max-w-4xl p-8 flex flex-col gap-6">
                {/* Section Header */}
                <h2 className="text-3xl font-bold text-base-content text-center">
                    About Me
                </h2>

                <div className="gradient-divider mx-auto w-32"></div>

                {/* About Content */}
                <p className="text-base-content text-lg leading-relaxed">
                    Hi, I’m Tanzir Ahmed Sami, a <span className="font-semibold">Web Developer</span> and <span className="text-base-content/70">Electrical & Automation Engineer</span>.
                    My programming journey started with experimenting in web technologies, and now I enjoy building full-stack applications that solve real problems.
                    I love tackling challenges and learning new tools or frameworks.
                </p>

                <p className="text-base-content text-lg leading-relaxed">
                    Outside of coding, I enjoy:
                </p>

                {/* Hobbies / Interests */}
                <div className="flex flex-wrap gap-6 justify-center">
                    <div className="flex items-center gap-2 text-base-content">
                        <FaLaptopCode size={20} className="text-primary" />
                        <span>Coding & Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <FaFootballBall size={20} className="text-secondary" />
                        <span>Football</span>
                    </div>
                    <div className="flex items-center gap-2 text-base-content">
                        <FaPaintBrush size={20} className="text-accent" />
                        <span>Painting & Creativity</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
