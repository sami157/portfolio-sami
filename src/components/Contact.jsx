import React from "react";
import contactData from "../data/contact.json";

const Contact = () => {
    const { email, phone, whatsapp } = contactData.contact;

    return (
        <section id="contact" className="py-20 px-6 md:px-12 bg-base-100">
            <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
                <h2 className="text-3xl font-bold text-base-content text-center">Contact Me</h2>
                <div className="gradient-divider mx-auto w-32"></div>

                <div className="grid md:grid-cols-3 gap-6 w-full">
                    {/* Email */}
                    <div className="glass-card flex flex-col items-center p-6 text-base-content">
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <a
                            href={`mailto:${email}`}
                            className="gradient-cta text-center w-full"
                        >
                            {email}
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="glass-card flex flex-col items-center p-6 text-base-content">
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <a
                            href={`tel:${phone}`}
                            className="gradient-cta text-center w-full"
                        >
                            {phone}
                        </a>
                    </div>

                    {/* WhatsApp */}
                    {whatsapp && (
                        <div className="glass-card flex flex-col items-center p-6 text-base-content">
                            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                            <a
                                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-cta text-center w-full"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
