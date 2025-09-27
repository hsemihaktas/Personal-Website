"use client";

import { use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projects from "../../../data/projects.json";
import Link from "next/link";
import ProjectDetailModal from "../../../components/ProjectDetailModal";
import React, { useState } from "react";
import Image from "next/image";
import { useLang } from "../../../context/LangContext";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang } = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const project = projects.find((p) => p.url.endsWith(slug));

  const projectContent = {
    en: {
      backToProjects: "Back to Projects",
      technologiesUsed: "Technologies Used",
      features: "Features",
      screenshots: "Screenshots",
      liveDemo: "Live Demo",
      viewRepository: "View Repository",
    },
    tr: {
      backToProjects: "Projeler Sayfasına Dön",
      technologiesUsed: "Kullanılan Teknolojiler",
      features: "Özellikler",
      screenshots: "Ekran Görüntüleri",
      liveDemo: "Canlı Demo",
      viewRepository: "Depoyu Görüntüle",
    },
  };

  const content = projectContent[lang];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="absolute inset-0 bg-primary-dark/70 z-0"></div>
      <div className="relative z-10 flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="py-16 lg:py-24 px-6 md:px-10 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-accent-dark transition-colors group"
                >
                  <svg
                    className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>{content.backToProjects}</span>
                </Link>
              </div>
              <div className="bg-secondary-dark/70 rounded-xl overflow-hidden shadow-2xl shadow-accent-dark/10 border border-secondary-dark">
                <div className="w-full h-64 md:h-96 relative">
                  <Image
                    src={`${project.coverImageFile}`}
                    alt={project.title.EN}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {project.title[lang.toUpperCase() as "EN" | "TR"]}
                  </h1>
                  <p className="text-base md:text-lg text-gray-300 mb-8">
                    {project.description[lang.toUpperCase() as "EN" | "TR"]}
                  </p>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {content.technologiesUsed}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-accent-dark/20 text-accent-dark font-medium rounded-full px-4 py-1 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {!project.imageFiles || project.imageFiles.length === 0 ? (
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {content.features}
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {project.features[
                          lang.toUpperCase() as "EN" | "TR"
                        ].map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {content.features}
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                          {project.features[
                            lang.toUpperCase() as "EN" | "TR"
                          ].map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {content.screenshots}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {project.imageFiles
                            .slice(0, 2)
                            .map((image, index) => (
                              <div
                                key={index}
                                className="rounded-lg border-2 border-secondary-dark hover:border-accent-dark/50 transition-all relative"
                                style={{ height: "200px" }}
                              >
                                <Image
                                  src={image}
                                  alt={`Screenshot ${index + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="rounded-lg object-cover"
                                />
                              </div>
                            ))}
                          {project.imageFiles.length > 2 && (
                            <button
                              className="col-span-2 bg-accent-dark hover:bg-accent-dark/80 text-primary-dark font-bold rounded-lg h-12 text-base transition-colors flex items-center justify-center w-full"
                              onClick={() => setIsModalOpen(true)}
                            >
                              View More
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {project.projectSite && (
                      <a
                        className="bg-accent-dark hover:bg-accent-dark/80 text-primary-dark font-bold rounded-lg h-12 px-6 text-base transition-colors flex items-center justify-center w-full sm:w-auto"
                        href={project.projectSite}
                      >
                        <span>{content.liveDemo}</span>
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        className="bg-secondary-dark/70 hover:bg-gray-800/80 text-white font-bold rounded-lg h-12 px-6 text-base transition-colors flex items-center justify-center w-full sm:w-auto"
                        href={project.codeLink}
                      >
                        <span>{content.viewRepository}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        {isModalOpen && (
          <ProjectDetailModal
            imageFiles={project.imageFiles}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
