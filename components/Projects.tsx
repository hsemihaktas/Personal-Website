"use client";

import { useState } from "react";
import { Transition } from "@headlessui/react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import { useLang } from "../context/LangContext";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { lang } = useLang();

  const projectsContent = {
    en: {
      title: "Featured Projects",
      buttonShowAll: "View All Projects",
      buttonShowLess: "Show Less",
    },
    tr: {
      title: "Öne Çıkan Projeler",
      buttonShowAll: "Tüm Projeleri Gör",
      buttonShowLess: "Daha Az Göster",
    },
  };

  const content = projectsContent[lang];

  return (
    <section
      id="projects"
      className="px-6 md:px-10 lg:px-40 py-16 lg:py-24 space-y-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          {content.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Transition
              key={index}
              show={index < 3 || showAll}
              as="div"
              enter="transition-all duration-500 ease-in-out"
              enterFrom="opacity-0 transform scale-95"
              enterTo="opacity-100 transform scale-100"
              leave="transition-all duration-500 ease-in-out"
              leaveFrom="opacity-100 transform scale-100"
              leaveTo="opacity-0 transform scale-95"
            >
              <div>
                <ProjectCard
                  image={project.coverImageFile}
                  title={{ EN: project.title.EN, TR: project.title.TR }}
                  description={{
                    EN: project.description.EN,
                    TR: project.description.TR,
                  }}
                  url={project.url}
                />
              </div>
            </Transition>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-accent-dark hover:bg-accent-dark/80 text-primary-dark font-bold rounded-lg h-10 px-5 text-sm transition-colors"
            aria-label={showAll ? "Show less projects" : "View all projects"}
          >
            <span className="truncate">
              {showAll ? content.buttonShowLess : content.buttonShowAll}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
