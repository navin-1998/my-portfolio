import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  // Scroll detection to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      } bg-white/80 backdrop-blur-md shadow-md`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Mobile Logo */}
        <a href="#home" className="text-3xl font-extrabold text-purple-600 block md:hidden">
          Navin
        </a>

        {/* Hamburger menu icon */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between w-full items-center">
          <div className="text-4xl font-extrabold text-purple-600">Navin</div>
          <div className="flex space-x-6 ml-auto text-lg">
            <a href="#home" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600">About</a>
            <a href="#skill" className="text-gray-700 hover:text-purple-600">Skills</a>
            <a href="#service" className="text-gray-700 hover:text-purple-600">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white shadow">
          <a href="#home" className="block text-gray-700 hover:text-purple-600">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-purple-600">About</a>
          <a href="#skill" className="block text-gray-700 hover:text-purple-600">Skills</a>
          <a href="#service" className="block text-gray-700 hover:text-purple-600">Services</a>
          <a href="#projects" className="block text-gray-700 hover:text-purple-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-purple-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
