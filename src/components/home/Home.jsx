import React from "react";
import Navbar from "../navbar/Navbar";
import Resume from "./Vishesh Nagar Software Developer.pdf";
import heroimg from "../../assets/Profile.jpg";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub} from "react-icons/fa";

export default function Home() {
    return (
        <div
            id="home"
            className="relative overflow-hidden min-h-screen flex flex-col bg-[#0b1120]"
        >
            <div className="absolute top-0 right-0 w-[750px] h-[750px] bg-gradient-to-r from-[#008cff] via-[#005ea6] to-[#00274d] rounded-full transform rotate-12 -translate-y-20 blur-3xl opacity-60"></div>

            <Navbar />
            <section
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-white relative z-10"
            >
                <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center justify-center">
                    {" "}
                    <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="relative mb-6">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                                Hi! I'm{" "}
                                <span className="text-[#008cff]">
                                    Vishesh Nagar
                                </span>
                            </h1>
                            <h6 className="text-2xl font-bold text-white mt-4 border-b-4 border-[#008cff] drop-shadow-[2px_2px_2px_rgba(255,255,255,0.2)]">
                                <ReactTyped
                                    className="text-[#008cff]"
                                    strings={[
                                        "Web Developer",
                                        "MERN Stack Developer",
                                        "Full Stack Developer",
                                        "Frontend Developer",
                                        "Backend Developer",
                                        "UI/UX Designer",
                                        "Building Scalable Web Applications",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </h6>
                        </div>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                            Passionate about crafting powerful and dynamic web
                            applications. I love problem-solving and building
                            efficient, high-performance UI experiences.
                        </p>

                        <div className="flex space-x-4 md:space-x-6 md:mt-0">
                            <a href={Resume} download>
                                <button
                                    data-aos="zoom-in"
                                    data-aos-delay="250"
                                    className="w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 active:transform active:scale-90"
                                >
                                    Download CV
                                </button>
                            </a>
                        </div>

                        <ul className="flex space-x-3 mt-6  ">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/vishesh-nagar/"
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
                    <div className="flex justify-center mt-10 md:mt-0">
                        <img
                            src={heroimg}
                            alt="Profile"
                            data-aos="zoom-in"
                            data-aos-delay="250"
                            data-aos-easing="ease-in-out"
                            data-aos-duration="1000"
                            className="w-96 h-96 object-fit rounded-full shadow-2xl border-4 border-[#008cff] mx-auto"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
