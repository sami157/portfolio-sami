import React from "react";
import {
    FiMail,
    FiPhone,
} from "react-icons/fi";
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";
import contactData from "../data/contact.json";

const ContactFooter = () => {
    const { email, phone, whatsapp } = contactData.contact;

    return (
        <footer id="contact" className="bg-base-200 rounded-2xl text-base-content">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-12">

                {/* Contact Section */}
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>

                    <div className="flex flex-col text-center mx-auto md:w-2/6 gap-2">
                        {/* Email */}
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center justify-center w-full gap-3 px-6 py-4 rounded-xl bg-base-100 hover:bg-base-300 transition"
                        >
                            <FiMail className="text-xl text-base-content" />
                            <span>{email}</span>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${phone}`}
                            className="flex items-center justify-center w-full gap-3 px-6 py-4 rounded-xl bg-base-100 hover:bg-base-300 transition"
                        >
                            <FiPhone className="text-xl text-base-content" />
                            <span>{phone}</span>
                        </a>

                        {/* WhatsApp */}
                        {whatsapp && (
                            <a
                                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center w-full justify-center gap-3 px-6 py-4 rounded-xl bg-base-100 hover:bg-base-300 transition"
                            >
                                <FaWhatsapp className="text-xl font-bold text-green-700" />
                                <span>{phone}</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-base-content/10" />

                {/* Footer Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-center text-base-content/70">
                        © {new Date().getFullYear()} Tanzir Ahmed Sami. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-xl">
                        <a
                            href="https://github.com/sami157"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/tanzir-ahmed-sami"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://facebook.com/tanzirahmeds1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition"
                            aria-label="Twitter"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
