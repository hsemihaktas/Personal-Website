"use client";

import { useEffect } from "react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { lang } = useLang();

  const heroContent = {
    en: {
      title: "Computer Engineer",
      description: "Code. Create. Simplify.",
    },
    tr: {
      title: "Bilgisayar Mühendisi",
      description: "Kodla. Yarat. Basitleştir.",
    },
  };

  const content = heroContent[lang];

  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    if (!particlesContainer) return;
    particlesContainer.innerHTML = "";
    const numParticles = 50;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.setProperty("--x", `${(Math.random() - 0.5) * 400}px`);
      particle.style.setProperty("--y", `${(Math.random() - 0.5) * 400}px`);
      particle.style.setProperty(
        "--color",
        Math.random() > 0.5 ? "#4ECCA3" : "#3a9a7a"
      );
      particle.style.animationDelay = `${Math.random() * -20}s`;
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-[60vh] md:min-h-[75vh] p-4">
      <div
        style={{ position: "relative", width: "100%" }}
        className="text-center text-white space-y-6 max-w-3xl z-10"
      >
        <div
          id="particles-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          className="typewriter inline-block w-full max-w-xs sm:max-w-md md:max-w-3xl"
          style={{
            position: "relative",
            zIndex: 1,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-accent-dark">
            {content.title}
          </h1>
        </div>
        <p className="text-base md:text-lg text-gray-300">
          {content.description}
        </p>
      </div>
    </section>
  );
}
