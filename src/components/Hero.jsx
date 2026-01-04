import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row items-center justify-center py-10 px-6 md:px-12 bg-base-100 overflow-hidden"
        >
            {/* Radial Accent */}
            <div
                className="inset-0 rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle at top right, var(--color-primary) / 0.15, transparent 60%)",
                }}
            ></div>

            {/* Profile Image */}
            <div className="z-10 shrink mb-6 md:mb-0 md:mr-12">
                <img
                    src="/profile.jpg"
                    alt="Tanzir Ahmed Sami"
                    className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-primary"
                />
            </div>

            {/* Text Content */}
            <div className="z-10 text-center md:text-left max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold text-base-content drop-shadow-lg mb-2">
                    Tanzir Ahmed Sami
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-primary-content">
                    Web Developer{" "}
                    <span className="text-sm md:text-base text-base-content font-normal">
                        , Electrical and Automation Engineer
                    </span>
                </h2>

                {/* CTA & Social */}
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-lg bg-primary text-primary-content font-semibold shadow-2xl"
                    >
                        Download Resume
                    </a>

                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-content hover:text-primary transition-colors duration-300"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-content hover:text-primary transition-colors duration-300"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-content hover:text-primary transition-colors duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
