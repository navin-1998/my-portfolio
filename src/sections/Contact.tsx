import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Top Row: Header + Button */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6 md:mb-0">Let's Work Together</h1>
          <a
            href="mailto:navintech77@gmail.com"
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-md text-lg font-medium"
          >
            Say Hello
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Side */}
          <div>
            <p className="mb-2 text-lg text-gray-700">Mail me:</p>
            <h3 className="text-2xl font-semibold text-gray-900">navintech77@gmail.com</h3>
            <hr className="my-4 border-gray-300" />
            <p className="mb-2 text-lg text-gray-700">Follow me:</p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/in/navin-64a5b9343"
                className="text-white bg-purple-600 hover:bg-purple-700 p-3 rounded-md transition"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* You can optionally enable this if you want the contact form */}
          {/* <div>
            <p className="mb-4 text-gray-700">The contact form is currently inactive.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-3" />
              <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-md p-3" />
              <input type="text" placeholder="Subject" className="w-full border border-gray-300 rounded-md p-3" />
              <textarea placeholder="Message" className="w-full border border-gray-300 rounded-md p-3 h-24" />
              <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700">
                Send Message
              </button>
            </form>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
