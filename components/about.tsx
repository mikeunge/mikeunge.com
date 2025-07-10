"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="rounded-2xl shadow-lg p-8 md:p-12 mb-16 container mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white text-gray-800">
        Who I Am
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-12 space-y-10 md:space-y-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">
            A Passionate Developer
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I am a dedicated Software & DevOps Engineer with a strong passion
            for crafting efficient, scalable, and maintainable software
            solutions. My journey in technology has been driven by a continuous
            desire to learn and apply cutting-edge practices to real-world
            problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With a solid foundation in both development and operations, I thrive
            in environments where I can bridge the gap between code and
            infrastructure, ensuring seamless deployment and robust system
            performance.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-semibold dark:text-white text-gray-800 mb-4">
            What I Do Best
          </h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-xl">🚀</span>
              <span>
                Building scalable microservices with modern frameworks.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-xl">⚙️</span>
              <span>Automating CI/CD pipelines for faster deployments.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-xl">☁️</span>
              <span>
                Designing and implementing cloud-native architectures (AWS,
                GCP).
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-xl">🛠️</span>
              <span>Optimizing system performance and reliability.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-xl">💡</span>
              <span>
                Solving complex technical challenges with innovative solutions.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
