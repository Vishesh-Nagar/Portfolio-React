import React from "react";
import { FaLinkedin, FaGithub} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0b132b] text-white py-2 px-4 rounded-t-lg shadow-lg">
            <div className="w-full mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between">
                <span className="text-lg font-semibold flex items-center space-x-10">
                    <span className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Vishesh Nagar
                    </span>
                </span>

                <ul className="flex space-x-6 mt-4 md:mt-0">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/vishesh-nagar"
                            target="_blank"
                            className="text-gray-400 hover:text-blue-500 transition duration-300"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Vishesh-Nagar"
                            target="_blank"
                            className="text-gray-400 hover:text-blue-500 transition duration-300"
                        >
                            <FaGithub size={28} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
