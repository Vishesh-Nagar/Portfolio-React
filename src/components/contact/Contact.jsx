import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("access_key", "bd7726ce-fdfc-4631-8c38-df3c025cc768");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("✅ Form Submitted Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("❌ Error: " + data.message);
            }
        } catch (error) {
            toast.error("❌ Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" data-aos="fade-up" data-aos-delay="400">
            <div className="py-4 px-5 mx-auto max-w-screen-md">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="mt-12 text-4xl font-bold text-center mb-4 text-blue-500"
                >
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-semibold text-gray-300 mb-2"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 caret-white outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-lg font-semibold text-gray-300 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 caret-white outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-lg font-semibold text-gray-300 mb-2"
                        >
                            Your Message
                        </label>
                        <textarea
                            rows="5"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 placeholder-gray-500 caret-white outline-none"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 active:scale-90"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
