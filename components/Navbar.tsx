"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  const content = navContent[lang];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-secondary-dark/50 bg-primary-dark/50 backdrop-blur-sm px-10 py-4">
      <div className="flex items-center gap-4 text-white">
        <h2 className="text-xl font-bold">Hasan Semih Aktaş</h2>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="/"
        >
          {content.about}
        </Link>
        <Link
          className="text-sm font-medium hover:text-accent-dark transition-colors"
          href="/#projects"
        >
          {content.projects}
        </Link>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center rounded-lg h-10 px-4 bg-secondary-dark/70 hover:bg-gray-800/80 text-sm font-bold transition-colors"
          aria-label="Change language"
        >
          <span className="truncate">{lang === "en" ? "TR" : "EN"}</span>
        </button>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center rounded-lg h-10 px-4 bg-secondary-dark/70 hover:bg-gray-800/80 text-sm font-bold transition-colors"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <FaTimes className="text-lg text-white" />
        ) : (
          <FaBars className="text-lg text-white" />
        )}
      </button>
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 transform -translate-y-2"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-2"
      >
        <div className="absolute top-full left-0 w-full bg-primary-dark/90 border-t border-secondary-dark/50 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link
              className="text-sm font-medium hover:text-accent-dark transition-colors"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              {content.about}
            </Link>
            <Link
              className="text-sm font-medium hover:text-accent-dark transition-colors"
              href="/#project"
              onClick={() => setIsMenuOpen(false)}
            >
              {content.projects}
            </Link>
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="flex items-center justify-center rounded-lg h-10 px-4 bg-secondary-dark/70 hover:bg-gray-800/80 text-sm font-bold transition-colors"
            >
              <span className="truncate">{lang === "en" ? "TR" : "EN"}</span>
            </button>
          </nav>
        </div>
      </Transition>
    </header>
  );
}
