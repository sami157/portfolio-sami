import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="sticky mt-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
            <div className="rounded-2xl gap-10 flex items-center justify-between px-2 py-2.5 shadow-2xl bg-base-100">
                {/* Logo */}
                <div className="text-base-content font-bold text-lg cursor-pointer">
                    Tanzir Ahmed
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6 text-base-content font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="hover:text-primary-content transition-colors duration-300"
                            >
                                {link.name}
                            </a>
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
                    {open ? (
                        <span className="text-2xl">&#x2715;</span>
                    ) : (
                        <span className="text-2xl">&#9776;</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden mt-2 glass-card rounded-lg p-4 flex flex-col space-y-3 text-base-content">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-primary-content transition-colors duration-300"
                            >
                                {link.name}
                            </a>
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
