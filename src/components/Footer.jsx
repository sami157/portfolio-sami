import React from "react";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content py-6 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
                {/* Left: Copyright */}
                <p className="text-sm">&copy; {new Date().getFullYear()} Tanzir Ahmed Sami. All rights reserved.</p>

                {/* Right: Social Links */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;