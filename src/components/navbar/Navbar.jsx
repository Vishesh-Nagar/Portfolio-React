import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlineMenu } from 'react-icons/ai';

const navItems = [
  { name: 'Home', link: '#' },
  { name: 'About', link: '#skills' },
  { name: 'Experience', link: '#experience' },
  { name: 'Language', link: '#language' },
  { name: 'Projects', link: '#projects' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#02233d] shadow-lg md:shadow-none">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-extrabold text-[#00bfff] cursor-pointer tracking-wide">
          Portfolio
        </h1>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-gray-300 text-base lg:text-lg cursor-pointer hover:text-[#00bfff] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:inline-flex items-center py-2 px-4 md:px-6 rounded-lg text-base md:text-lg text-[#00bfff]
          border border-[#00bfff] hover:bg-[#00bfff] hover:text-[#0b1120] transition-all">
          <a href="#contact">Contact Me</a>
        </button>

        {/* Menu Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button className="text-[#00bfff] border border-[#00bfff] px-3 py-1 rounded-lg hover:bg-[#00bfff] hover:text-[#0b1120] transition-all">
            <a href="#contact">Contact Me</a>
          </button>
          <div className="ml-4" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoCloseSharp size={28} color="#00bfff" /> : <AiOutlineMenu size={28} color="#00bfff" />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0b1120] border-t border-[#00bfff] transition-all duration-300">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-300 text-base cursor-pointer hover:text-[#00bfff] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}