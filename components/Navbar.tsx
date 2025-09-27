"use client";

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
        <svg
          className="h-6 w-6 text-accent-dark"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
            fill="currentColor"
          ></path>
        </svg>
        <h2 className="text-xl font-bold">Tech Engineer</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8 ">
        <a
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="/"
        >
          {content.about}
        </a>
        <a
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="#"
        >
          {content.projects}
        </a>
        <a
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="#"
        >
          {content.resume}
        </a>
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
