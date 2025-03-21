import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import Contactlinks from "../components/contactlinks";

const ContactMe = () => {
    const items = [
        { icon: <FiGithub size={24} />, color: "blue", label: "GitHub", link: "https://github.com/krishSharma1810" },
        { icon: <FiLinkedin size={24} />, color: "purple", label: "LinkedIn", link: "https://www.linkedin.com/in/krish-sharma-669048241" },
        { icon: <FiMail size={24} />, color: "red", label: "Email", link: "mailto:sharmakrish1810work@gmail.com" },
        { icon: <FiPhone size={24} />, color: "green", label: "Phone", link: "tel:+919893951810" },
    ];

    return (
        <>
            <div className="h-[600px] relative flex items-center justify-center bg-gray-900">
                <Contactlinks items={items} className="custom-class" />
            </div>
        </>
    );
};

export default ContactMe;
