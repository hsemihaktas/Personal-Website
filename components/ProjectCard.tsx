"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../context/LangContext";

interface ProjectCardProps {
  image: string;
  title: { EN: string; TR: string };
  description: { EN: string; TR: string };
  url: string;
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
}: ProjectCardProps) {
  const { lang } = useLang();
  const currentLang = lang.toUpperCase() as "EN" | "TR";

  return (
    <div className="group flex flex-col h-[400px] bg-secondary-dark/70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-dark/10 hover:scale-105 border border-transparent hover:border-accent-dark/30">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          alt={title[currentLang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{title[currentLang]}</h3>
          <p className="text-sm text-gray-400 mt-1 mb-4">
            {description[currentLang]}
          </p>
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
