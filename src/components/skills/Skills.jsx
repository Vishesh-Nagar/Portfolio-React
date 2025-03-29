import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import {
    SiMongodb,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiFirebase,
} from "react-icons/si";

const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Firebase", icon: SiFirebase },
    { name: "Database Management", icon: FaDatabase },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden flex flex-col text-white body-font bg-[#0f172a]"
        >
            <h2
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-16 text-4xl font-bold text-center text-blue-500"
            >
                About Me
            </h2>

            <div className="container flex flex-wrap px-12 py-24 mx-auto items-center">
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="md:w-1/2 md:pr-12 md:py-8 md:border-r border-b border-[#60a5fa] px-4 mb-10 md:mb-0"
                >
                    <h1
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="sm:text-4xl text-2xl font-bold title-font mb-4 text-blue-500"
                    >
                        Skills & Expertise
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="leading-relaxed text-base text-gray-300"
                    >
                        As a{" "}
                        <span className="text-blue-400">
                            MERN Stack Developer
                        </span>
                        , I specialize in building scalable and efficient web
                        applications using modern technologies. My expertise
                        lies in creating full-stack applications with seamless
                        user experiences.
                    </p>
                    <br />
                    <p
                        data-aos="fade-right"
                        data-aos-delay="500"
                        className="leading-relaxed text-base text-[#60a5fa]"
                    >
                        Currently honing my skills in{" "}
                        <span className="text-white">Next.js and Redux</span>, I
                        thrive on tackling challenges, optimizing performance,
                        and delivering high-quality, maintainable code.
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-delay="400"
                    className="flex flex-col md:w-1/2 md:pl-12"
                >
                    <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-4 justify-center">
                        {skills.map(({ name, icon: Icon }, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                            >
                                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-[#1e293b] hover:bg-[#3b82f6] transition duration-300">
                                    <Icon className="text-4xl text-[#60a5fa]" />
                                </div>
                                <span className="mt-2 text-sm text-gray-400">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
