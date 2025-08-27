import React, { RefObject } from "react";

interface NavbarProps {
    projectRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    experienceRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}

const Navbar = ({ projectRef, skillsRef, experienceRef, contactRef }: NavbarProps) => {
    const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
            <ul className="flex list-none mt-8 justify-end pr-8">
                <li className="relative ml-20 group">
                    <button 
                        className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative"
                        onClick={() => scrollToSection(projectRef)}
                    >
                        Projects
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></div>
                    </button>
                </li>
                <li className="relative ml-20 group">
                    <button 
                        className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative"
                        onClick={() => scrollToSection(skillsRef)}
                    >
                        Skills
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></div>
                    </button>
                </li>
                <li className="relative ml-20 group">
                    <button 
                        className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative"
                        onClick={() => scrollToSection(experienceRef)}
                    >
                        Experience
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></div>
                    </button>
                </li>
                <li className="relative ml-20 group">
                    <button 
                        className="text-white opacity-50 hover:opacity-100 transition-opacity duration-300 relative"
                        onClick={() => scrollToSection(contactRef)}
                    >
                        Contact
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 group-hover:w-full transition-all duration-300 ease-out"></div>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;