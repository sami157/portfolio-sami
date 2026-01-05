import React from "react";
import { FaLaptopCode, FaFootballBall, FaPaintBrush } from "react-icons/fa";
import EduExp from "./EduExp";
import Framer from "./Framer";

const About = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:w-4/5 lg:w-3/5 justify-center mx-auto items-center">
                <EduExp />
            <section id="about" className="py-5 md:py-15 duration-1000 transition-all ease-in-out text-center md:text-justify rounded-2xl px-2 md:px-1 flex justify-center items-center">
                <div className="max-w-5xl p-8 flex flex-col gap-2">
                    {/* Section Header */}
                    <h2 className="text-3xl font-bold text-base-content text-center">
                        About Me
                    </h2>

                    {/* About Content */}
                    <p className="text-base-content text-lg leading-relaxed">
                        Hi, I’m Tanzir Ahmed Sami, a <span className="font-semibold">Web Developer</span> and <span className="text-base-content/70">Electrical & Automation Engineer</span>.
                        My programming journey started with experimenting in web technologies, and now I enjoy building full-stack applications that solve real problems.
                        I love tackling challenges and learning new tools or frameworks. I am constantly trying to solve new problems and look for new opportunities to continue my web development journey.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
