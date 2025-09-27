"use client";

import { useLang } from "../context/LangContext";

export default function Hero() {
  const { lang } = useLang();

  const heroContent = {
    en: {
      title: "Software Engineer",
      description:
        "I'm a passionate software engineer with a focus on building innovative solutions. Explore my projects and experience.",
      button: "View Projects",
    },
    tr: {
      title: "Yazılım Mühendisi",
      description:
        "Yenilikçi çözümler geliştirmeye odaklanan tutkulu bir yazılım mühendisiyim. Projelerimi ve deneyimlerimi keşfedin.",
      button: "Projeleri Görüntüle",
    },
  };

  const content = heroContent[lang];

  return (
    <section className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] p-4">
      <div className="text-center text-white space-y-6 max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          {content.title}
        </h1>
        <p className="text-base md:text-lg text-gray-300">
          {content.description}
        </p>
        <button className="bg-accent-dark hover:bg-accent-dark/80 text-primary-dark font-bold rounded-lg h-12 px-6 text-base transition-colors">
          <span className="truncate">{content.button}</span>
        </button>
      </div>
    </section>
  );
}
