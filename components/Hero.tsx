"use client";

import { useLang } from "../context/LangContext";

export default function Hero() {
  const { lang } = useLang();

  const heroContent = {
    en: {
      title: "Computer Engineer",
      description:
        "I love creating software that helps make everyday life easier.",
    },
    tr: {
      title: "Bilgisayar Mühendisi",
      description:
        "Kullanıcıların hayatını kolaylaştıracak yazılımlar geliştirmekten keyif alıyorum",
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
      </div>
    </section>
  );
}
