"use client";

import Image from "next/image";
import { useLang } from "../context/LangContext";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const { lang } = useLang();

  const aboutContent = {
    en: {
      title: "About Me",
      description:
        "Hello! I'm Hasan Semih Aktaş. I've built websites using React, Next.js, TypeScript, and modern web technologies. Recently, I've been learning to develop mobile applications with React Native. I enjoy keeping up with new technologies, experimenting with them, and constantly improving myself. My goal is to develop applications and websites that everyone can use and enjoy.",
    },
    tr: {
      title: "Hakkımda",
      description:
        "Merhaba! Ben Hasan Semih Aktaş. React, Next.js, TypeScript ve modern web teknolojilerini kullanarak web siteleri geliştirdim. Son zamanlarda React Native ile mobil uygulama geliştirmeyi öğreniyorum. Yeni teknolojileri takip etmeyi, denemeyi ve kendimi sürekli geliştirmeyi seviyorum. Amacım, herkesin kullanabileceği ve keyif alabileceği uygulamalar ve web siteleri geliştirmek.",
    },
  };

  const content = aboutContent[lang];

  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-40 py-16 lg:py-24 space-y-16"
    >
      <div className="max-w-4xl mx-auto bg-secondary-dark/70 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-square rounded-lg bg-secondary-dark border-2 border-accent-dark/30 flex items-center justify-center overflow-hidden">
              <Image
                alt="Profile Photo"
                className="object-cover"
                src="/images/profilePicture.webp"
                height={300}
                width={300}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {content.title}
            </h2>
            <p className="text-base leading-relaxed text-gray-300">
              {content.description}
            </p>
            <div className="mt-4 inline-block">
              <Link
                href="/HasanSemihAktaş-CV.pdf" // Replace with the actual path to your resume file
                className="flex items-center gap-2 bg-accent-dark text-primary-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-dark/80 transition-colors"
              >
                <FaDownload />
                <span>
                  {lang === "en" ? "Download Resume" : "Özgeçmişi İndir"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
