import React from "react";
import { useLang } from "../context/LangContext";

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLang();

  const toggleLanguage = () => {
    setLang(lang === "en" ? "tr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-accent-dark text-primary-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-dark/80 transition-colors"
    >
      {lang === "en" ? "Türkçe" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
