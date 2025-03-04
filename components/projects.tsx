"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Dashboard UI",
    description:
      "An admin dashboard with data visualization, user management, and real-time analytics.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["React", "Redux", "Chart.js", "Material UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Social Media App",
    description:
      "A social networking application with real-time messaging, post sharing, and user profiles.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "SWR"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["React", "Framer Motion", "Styled Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Weather Application",
    description:
      "A weather forecast application with location detection and detailed weather information.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["JavaScript", "OpenWeather API", "CSS3"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    image:
      "/2004.i518.011_responsive landing page website mobile UI app templates.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export default function Projects() {
  // Filter featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered
            throughout my career.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className=" mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button asChild size="sm" variant="default">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <p className=" text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto">
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="text-xs"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" /> Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="text-xs"
                        >
                          <Github className="h-3 w-3 mr-1" /> Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
