import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import photo from '../assets/dp.jpg'
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <section
                id="hero"
                className="flex rounded-2xl flex-col md:flex-row items-center justify-center py-10 px-6 md:px-12 overflow-hidden"
            >
                {/* Text Content */}
                <div className="z-10 text-center flex flex-col gap-3 md:text-left max-w-xl">
                    <p className="text-5xl">Hi, I'm</p>
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-base-content drop-shadow-lg">
                            Tanzir Ahmed Sami
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
                            MERN Stack Web Developer{" "}
                        </h2>
                        <span className="text-sm md:text-base-content text-base-content font-normal">
                            Electrical and Automation Engineer
                        </span>

                    </div>

                    {/* CTA & Social */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-content font-semibold drop-shadow-xl">
                            <div>
                                <MdOutlineFileDownload className="text-2xl" />
                            </div>
                            <div>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 sm:mt-0">
                            <a
                                href="https://github.com/sami157"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-content hover:scale-105 transition-colors duration-300"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/tanzir-ahmed-sami"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-content hover:scale-105 transition-colors duration-300"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://facebook.com/tanzirahmeds1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-content hover:scale-105 transition-colors duration-300"
                            >
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Profile Image */}
            <div className="md:mr-12">
                <img
                    src={photo}
                    alt="Tanzir Ahmed Sami"
                    className="rounded-3xl h-80 w-60 object-cover mask-b-from-65% mask-b-to-100%"
                />
            </div>
        </div>
    );
};

export default Hero;
