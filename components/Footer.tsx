"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const { lang } = useLang();

  const footerContent = {
    en: {
      copyright: "© 2024 Tech Engineer. All rights reserved.",
    },
    tr: {
      copyright: "© 2024 Tech Engineer. Tüm hakları saklıdır.",
    },
  };

  const content = footerContent[lang];

  return (
    <footer className="border-t border-secondary-dark/50">
      <div className="max-w-4xl mx-auto px-5 py-10 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <a
            className="text-gray-400 hover:text-accent-dark transition-colors"
            href="https://mail.google.com/mail/?view=cm&to=hsemihaktas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hsemihaktas@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <Link
            className="text-gray-400 hover:text-accent-dark transition-colors"
            href="https://www.linkedin.com/in/hsemihaktas/"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </Link>
          <Link
            className="text-gray-400 hover:text-accent-dark transition-colors"
            href="https://github.com/hsemihaktas"
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <svg
              fill="currentColor"
              height="24"
              viewBox="0 0 256 256"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-400">{content.copyright}</p>
      </div>
    </footer>
  );
}
