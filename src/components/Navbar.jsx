import React, { useState } from "react";

const Navbar = ({ scrollToSection, refs }) => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", ref: refs.heroRef },
        { name: "About", ref: refs.aboutRef },
        { name: "Skills", ref: refs.skillsRef },
        { name: "Projects", ref: refs.projectsRef },
        { name: "Contact", ref: refs.contactRef },
    ];

    return (
        <nav className="mx-auto z-40 top-4 max-w-7xl sticky">
            <div className="rounded-xl gap-10 flex items-center justify-between px-3 py-3.5 shadow-2xl bg-base-100/50 backdrop-blur-2xl">
                {/* Logo */}
                <div className="text-base-content font-bold text-lg cursor-pointer">
                    Tanzir Ahmed
                </div>

                {/* Theme Controller */}
                <div>
                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" value="dark" />
                        {/* Sun Icon */}
                        <svg
                            className="swap-off h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* Moon Icon */}
                        <svg
                            className="swap-on h-7 w-7 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 text-base-content font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => scrollToSection(link.ref)}
                                className="hover:text-primary-content transition-colors duration-300"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-primary text-primary-content font-semibold shadow-2xl"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-base-content"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <span className="text-2xl">&#x2715;</span> : <span className="text-2xl">&#9776;</span>}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden mt-2 rounded-lg p-4 flex bg-base-100 flex-col space-y-3 text-base-content">
                    {links.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => {
                                    scrollToSection(link.ref);
                                    setOpen(false);
                                }}
                                className="hover:text-primary-content transition-colors duration-300 text-left w-full"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-primary text-primary-content font-semibold shadow-2xl text-center"
                            onClick={() => setOpen(false)}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
