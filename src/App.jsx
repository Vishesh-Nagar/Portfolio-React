import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Language from "./components/language/Language";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 300,
        });
    }, []);

    return (
        <>
            <main className="bg-[#0d182e]">
                <Home />
                <Skills />
                <Experience />
                <Language />
                <Projects />
                <Contact />
                <Footer />
            </main>
            <Toaster />
        </>
    );
}
