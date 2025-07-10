"use client";

import { motion } from "framer-motion";
import {
  Code,
  Settings,
  MonitorSpeaker,
  Database,
  Wrench,
  GraduationCap,
} from "lucide-react";

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="mb-16 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Technical Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Backend Development (Large) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <Code className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Backend Development
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>Node.js (Express, NestJS)</li>
              <li>Python (Django, Flask)</li>
              <li>Java (Spring Boot)</li>
              <li>Go</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Crafting robust and scalable server-side applications.
          </p>
        </motion.div>

        {/* DevOps & Cloud (Large) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          variants={fadeIn}
          className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <Settings className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                DevOps & Cloud
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>Docker, Kubernetes</li>
              <li>AWS, GCP</li>
              <li>Terraform, Ansible</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Automating infrastructure and deployment workflows.
          </p>
        </motion.div>

        {/* Frontend (Small) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <MonitorSpeaker className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>React, Vue.js</li>
              <li>HTML, CSS, JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Building intuitive and responsive user interfaces.
          </p>
        </motion.div>

        {/* Databases (Small) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <Database className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Databases
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>PostgreSQL, MySQL</li>
              <li>MongoDB, DynamoDB</li>
              <li>Redis</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Managing and optimizing data storage solutions.
          </p>
        </motion.div>

        {/* Other Tools & Concepts (Small) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <Wrench className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Other Tools
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>Git, GitHub</li>
              <li>Jira, Confluence</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Proficient with various development and collaboration tools.
          </p>
        </motion.div>

        {/* Soft Skills (Small) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeIn}
          className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-10 h-10 mr-4 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                Soft Skills
              </h3>
            </div>
            <ul className="space-y-2 text-gray-600 text-lg">
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Strong interpersonal and professional attributes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
