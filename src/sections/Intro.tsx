import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import splash from "../assets/s.jpeg"; // Background image

const Intro = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${splash})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:items-start justify-center gap-10 h-full">

          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 bg-white/70 p-5 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-purple-600 text-xl sm:text-2xl font-semibold mb-2">
              I'm
            </h3>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3">
              Navin
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mb-6">
              <Typewriter
                words={["Web Developer", "Software Developer Engineer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </h2>

            <a
              href="/Navin_Resume.pdf"
              download="Navin_Resume.pdf"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition text-lg"
            >
              Download CV
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
