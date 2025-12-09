import React, { useState } from "react";

const skills = [
  { name: "HTML", level: 95, color: "bg-blue-600" },
  { name: "CSS", level: 85, color: "bg-yellow-500" },
  { name: "Angular JS", level: 90, color: "bg-red-500" },
  { name: "JavaScript", level: 90, color: "bg-green-600" },
  { name: "Node JS", level: 95, color: "bg-black" },
  { name: "java", level: 75, color: "bg-cyan-400" },
    { name: "Mongo DB", level: 80, color: "bg-green-400" },
      { name: "Agile", level: 85, color: "bg-teal-400" },

];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="skill" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Skills */}
        <div className="fade-in-up">
          <h1 className="text-4xl font-bold mb-6">Skills & Experience</h1>
          <p className="text-gray-700 mb-6">
            With over 1.8+ years of experience in full-stack development,
            I’ve engineered scalable and responsive applications using Angular,
             Node.js. I've contributed to enterprise platforms
            like VilcartERP, Vilcart-CRM, and Viltech, focusing on seamless UI development,
            backend integration, RESTful APIs, and performance optimization across web interfaces.
          </p>
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm font-semibold text-gray-700">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded h-2.5">
                  <div
                    className={`h-2.5 rounded ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tabs */}
        <div className="fade-in-up">
          <div className="flex mb-6 border-2 border-blue-600 rounded overflow-hidden">
            <button
              onClick={() => setActiveTab("experience")}
              className={`w-1/2 py-3 text-lg font-medium ${
                activeTab === "experience"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`w-1/2 py-3 text-lg font-medium ${
                activeTab === "education"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600"
              }`}
            >
              Education
            </button>
          </div>

          {activeTab === "experience" && (
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">Full Stack Developer</h5>
                <hr className="border-blue-600 w-16 my-2" />
                <p className="text-blue-600 mb-1">MAY 2024 – Present</p>
                <h6 className="font-medium">Vilcart Solutions Pvt Ltd</h6>
                <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
                  <li>Developed and maintained web apps using Angular & JavaScript.</li>
                  <li>Optimized website performance & accessibility.</li>
                  <li>Integrated APIs and third-party libraries.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">BITM College (VTU University)</h5>
                <hr className="border-blue-600 w-16 my-2" />
                <p className="text-blue-600 mb-1">2016 - 2020</p>
                <h6 className="font-medium">Bachelor Of Engineering</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
