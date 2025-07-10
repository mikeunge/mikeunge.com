"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [imageSrc, setImageSrc] = useState("/profile.webp");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const handleImageClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/profile.webp" ? "/profile-anime.webp" : "/profile.webp"
    );
  };

  const fadeInUp = mounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  const fadeInScale = mounted
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, scale: 1 };

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-left py-20 md:py-32 container mx-auto px-6 max-w-4xl"
    >
      {/* Main Content */}
      <motion.div
        initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl w-full"
      >
        <div className="flex items-start mb-8">
          <div
            className="w-24 h-24 rounded-full overflow-hidden cursor-pointer"
            onClick={handleImageClick}
          >
            <Image
              src={imageSrc}
              width={96}
              height={96}
              alt="Mike's Profile"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-foreground mb-1 text-left">
          Hey, I'm Mike.
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-foreground mb-4 text-left">
          Software & DevOps Engineer.
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl text-left">
          I'm passionate about building scalable software that boosts
          productivity and delivers real business value through robust
          applications and automation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            className="bg-black hover:bg-gray-800 text-white py-6 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            onClick={() => scrollToSection("contact")}
          >
            Call me
          </Button>

          <Button
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200 py-6 rounded-xl text-lg font-semibold shadow-lg hover:cursor-default hover:bg-green-50 hover:text-green-700"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Open to Opportunities
            </div>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
