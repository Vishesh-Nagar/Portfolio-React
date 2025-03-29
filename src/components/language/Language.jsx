import React from "react";

export default function Language() {
    const languages = [
        { code: "EN", name: "English", level: "Fluent" },
        { code: "HI", name: "Hindi", level: "Native" },
    ];

    return (
        <section
            id="language"
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col items-center justify-center gap-12 py-20 px-6 md:px-10 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white" // Darker blue background
        >
            <h2
                data-aos="fade-up"
                data-aos-delay="600"
                className="mt-16 text-4xl font-bold text-center text-blue-500"
            >
                Languages
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-[#1e293b] rounded-xl p-8 shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-72" // Slightly larger cards, subtle shadow
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <div className="relative w-24 h-24 flex items-center justify-center bg-[#3b82f6] rounded-full text-3xl font-semibold text-white shadow-lg">
                            {" "}
                            {language.code}
                            <div className="absolute w-full h-full rounded-full bg-gradient-to-b from-[#60a5fa] to-[#93c5fd] opacity-70 blur-xl"></div>{" "}
                        </div>
                        <span className="text-2xl font-medium mt-6 text-gray-200">
                            {language.name}
                        </span>{" "}
                        <span className="text-lg text-[#93c5fd] font-medium mt-2">
                            {" "}
                            {language.level}
                        </span>{" "}
                    </div>
                ))}
            </div>
        </section>
    );
}
