"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";

const navContent = {
  en: {
    about: "About",
    projects: "Projects",
    resume: "Resume",
  },
  tr: {
    about: "Hakkında",
    projects: "Projeler",
    resume: "Özgeçmiş",
  },
};

export default function Navbar() {
  const { lang, setLang } = useLang();

  const toggleLanguage = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  const content = navContent[lang];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-secondary-dark/50 bg-primary-dark/80 backdrop-blur-sm px-10 py-4">
      <div className="flex items-center gap-4 text-white">
        <h2 className="text-xl font-bold">Hasan Semih Aktaş</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8 ">
        <Link
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="/"
        >
          {content.about}
        </Link>
        <Link
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="/projects"
        >
          {content.projects}
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center rounded-lg h-10 px-4 bg-secondary-dark/70 hover:bg-gray-800/80 text-sm font-bold transition-colors"
        >
          <span className="truncate">{lang === "en" ? "TR" : "EN"}</span>
        </button>
      </div>
    </header>
  );
}
