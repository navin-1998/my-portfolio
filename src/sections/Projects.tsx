// src/sections/Projects.tsx

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Eye } from "lucide-react";

const projects = [
  {
    name: "Vilcart ERP",
    folder: "vilcarterp",
    imageCount: 1,
    description:
      "ERP system for managing inventory, sales, billing, and vendor operations across rural supply chains.",
  },
  {
    name: "Vilcart CRM",
    folder: "vilcart-crm",
    imageCount: 1,
    description:
      "CRM for managing rural customer interactions, tracking leads, and improving client engagement.",
  },
  {
    name: "Viltech",
    folder: "viltech",
    imageCount: 1,
    description:
      "Internal tech dashboard featuring SKU detection using AWS services and barcode scanning for efficient item tracking and management.",
  },
  {
    name: "Vilcart B2B App",
    folder: "vilsmart",
    imageCount: 1,
    description:
      "customer platform for category, product listings, and smart commerce monitoring.",
  },
  {
    name: "Vilreport",
    folder: "vilreport",
    imageCount: 1,
    description:
      "Reporting dashboard with data-driven insights and module-wise downloadable reports.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <section id="projects" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative border-2 border-purple-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={`/images/${project.folder}/1.png`}
                  alt={project.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-700 bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
                  <Eye className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </div>

              {/* Project Name & Description */}
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Transition appear show={selectedProject !== null} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setSelectedProject(null)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold text-gray-900 mb-2"
                    >
                      {selectedProject?.name} – Gallery
                    </Dialog.Title>
                    <p className="text-gray-700 mb-4">{selectedProject?.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject &&
                        Array.from({ length: selectedProject.imageCount }, (_, i) => (
                          <img
                            key={i}
                            src={`/images/${selectedProject.folder}/${i + 1}.png`}
                            alt={`Screenshot ${i + 1}`}
                            className="rounded-lg border object-cover"
                          />
                        ))}
                    </div>

                    <div className="mt-6 text-right">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </section>
  );
};

export default Projects;
