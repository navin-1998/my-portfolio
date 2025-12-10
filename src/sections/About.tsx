import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white text-black px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-teal-400 inline-block">
            About Me
          </h2>

          <div className="mt-8">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 text-center mr-6">
                <h1 className="text-6xl font-bold text-teal-400">1.8+</h1>
                <h5 className="text-sm text-gray-600">Years</h5>
              </div>
              <h3 className="text-xl font-semibold">
                of working experience as a web developer
              </h3>
            </div>

            <p className="text-gray-700 mb-6">
            I’m a full-stack developer with 1.8+ years of experience crafting responsive,
            user-focused web applications. I thrive on writing clean, efficient
             code and using modern frameworks to build fast,
            reliable, and visually appealing digital solutions.
            </p>

            <div className="space-y-3 mb-6">
              <p className="flex items-center">
                <FaCheckCircle className="text-purple-500 mr-3" />
                Full-stack development experience
              </p>
              <p className="flex items-center">
                <FaCheckCircle className="text-purple-500 mr-3" />
                Clean, maintainable coding
              </p>
              <p className="flex items-center">
                <FaCheckCircle className="text-purple-500 mr-3" />
                Deadline-Driven Execution
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="/img/imageee3.jpeg"
              alt="imageee3"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/img/imageee4.jpeg"
              alt="imageee4"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="mb-6">
            <h5 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-1">
              Happy Clients
            </h5>
            <p className="mt-2 text-gray-700">
              With over 1.8 years in frontend development & Backend development, I've helped numerous clients build responsive and user-friendly web applications.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-1">
              Projects Completed
            </h5>
            <p className="mt-2 text-gray-700">
              I have successfully completed 5 projects, delivering responsive, user-centric web applications using technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
