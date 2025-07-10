"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="text-gray-600 py-8 mt-24">
      <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Mike. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://linkedin.com/in/mikeunge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mikeunge"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-400 transition-colors duration-300 bg-transparent border-none cursor-pointer text-inherit"
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}
