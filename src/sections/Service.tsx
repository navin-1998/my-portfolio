import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaCogs, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-2xl text-black" />,
    title: "Frontend Development",
    description:
      "Expert in building responsive and interactive web applications using HTML, CSS, JavaScript, and React.js. I focus on performance optimization and clean, maintainable code.",
    delay: 0.1,
  },
  {
    icon: <FaPaintBrush className="text-2xl text-black" />,
    title: "UI/UX Design",
    description:
      "Design intuitive user interfaces and user experiences with a focus on usability and aesthetics. I provide wireframes, prototypes, and design mockups to bring your ideas to life.",
    delay: 0.3,
  },
  {
    icon: <FaCogs className="text-2xl text-black" />,
    title: "Web Performance Optimization",
    description:
      "Improve website speed and performance by optimizing assets, minimizing load times, and ensuring a smooth user experience across different devices and browsers.",
    delay: 0.1,
  },
  {
    icon: <FaMobileAlt className="text-2xl text-black" />,
    title: "Responsive Web Design",
    description:
      "Design and develop fully responsive websites that adapt to various screen sizes, ensuring a seamless experience on desktops, tablets, and mobile devices.",
    delay: 0.3,
  },
];

const Service = () => {
  return (
    <section id="service" className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900">My Services</h2>
          <a
            href="#contact"
            className="mt-6 lg:mt-0 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col sm:flex-row items-start h-full shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
            >
            <div
      className="w-[100px] h-[100px] flex items-center justify-center mb-3 flex-shrink-0"
      style={{
        background: "url('/img/bg-icon.png') center center no-repeat",
        backgroundSize: "cover",
      }}
    >
      {service.icon}
    </div>



              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
