"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="mb-16 container mx-auto px-6 mt-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => handleSelectProject(project)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeIn}
            className="block bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <Image
              src={
                project.image ||
                "https://placehold.co/600x400/e0e7ff/3b82f6?text=Project"
              }
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.shortDescription}
              </p>
              <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
                View Details →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={800}
                height={600}
                className="w-full rounded-md object-cover aspect-video"
              />
              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink && (
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(selectedProject.githubLink, "_blank");
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Github
                  </Button>
                )}
                {selectedProject.websiteLink && (
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(selectedProject.websiteLink, "_blank");
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Website
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
