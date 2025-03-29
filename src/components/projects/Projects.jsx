import React from "react";
import Slider from "react-slick";
import "./project.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import book from "../../assets/book.png";
import attendance from "../../assets/attendance.png";
import prompt from "../../assets/prompt.png";
import cali from "../../assets/cali.png";
import food from "../../assets/food.png";
import showcase from "../../assets/showcase.png";

export default function Projects() {
    const listProjects = [
        {
            image: prompt,
            title: "AI Prompt Sharing Platform",
            demo_link: "https://promptomania-flax.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Promptomania",
        },
        {
            image: attendance,
            title: "Attendance Tracker Website",
            demo_link: "https://attendance-three-gray.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Attendance",
        },
        {
            image: book,
            title: "Book Store Website",
            demo_link: "https://book-store-frontend.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Book-Store-Frontend",
        },
        {
            image: food,
            title: "Food Delivery Website",
            demo_link: "https://delivery-frontend-seven.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Delivery-Frontend",
        },
        {
            image: showcase,
            title: "Car Showcase Website",
            demo_link: "https://showcase-neon-three.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Showcase",
        },
        {
            image: cali,
            title: "Calendar App",
            demo_link: "https://cali-rosy.vercel.app/",
            repo_link: "https://github.com/Vishesh-Nagar/Cali",
        },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section
            id="projects"
            className="relative overflow-hidden flex flex-col text-white body-font"
        >
            <div className="container px-8 pt-24 pb-12 mx-auto">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="mt-16 text-4xl font-bold text-center mb-12 text-blue-500"
                >
                    My Projects
                </h2>
                <Slider {...settings}>
                    {listProjects.map((project, index) => (
                        <div key={index} className="p-4">
                            <div className="h-[350px] w-full border-2 border-blue-500 shadow-lg border-opacity-60 rounded-lg overflow-hidden bg-gray-900 flex flex-col">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[180px] object-fill object-center"
                                />
                                <div className="p-4 flex flex-col flex-grow justify-between">
                                    <h2 className="text-xl font-medium text-blue-400 mb-2">
                                        {project.title}
                                    </h2>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.demo_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
                                        >
                                            Demo
                                        </a>
                                        <a
                                            href={project.repo_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
