import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/j.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-28 min-h-screen bg-[#1e293b] text-white px-6 py-20"
    >
      {/* Left: Name & Role */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Darshit Shyani
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Frontend Developer
        </motion.h2>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img
          src={profileImg}
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
