"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../context/LangContext";

interface ProjectCardProps {
  image: string;
  title: { EN: string; TR: string };
  description: { EN: string; TR: string };
  url: string;
  technologies?: string[];
}

const buttonText = {
  EN: "Details",
  TR: "Detaylar",
};

export default function ProjectCard({
  image,
  title,
  description,
  url,
  technologies = [],
}: ProjectCardProps) {
  const { lang } = useLang();
  const currentLang = lang.toUpperCase() as "EN" | "TR";

  return (
    <div className="group flex flex-col h-[400px] bg-secondary-dark rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/10 hover:scale-105 border border-transparent hover:border-accent-dark/30">
      <div className="w-full h-34 relative">
        <Image
          src={image}
          alt={title[currentLang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover object-top"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{title[currentLang]}</h3>
          <p className="text-sm text-gray-400 mt-1 mb-2">
            {description[currentLang]}
          </p>
          {technologies.length > 0 && (
            <ul className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-accent-dark/20 bg-transparent text-accent-dark px-2 py-1 rounded-lg text-xs font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href={url}>
          <button
            className="bg-accent-dark/20 text-accent-dark hover:bg-accent-dark/40 font-bold rounded-lg h-10 px-5 text-sm transition-colors w-full"
            aria-label={buttonText[currentLang]}
          >
            {buttonText[currentLang]}
          </button>
        </Link>
      </div>
    </div>
  );
}
