"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Layers, Terminal, Wrench } from "lucide-react";

const skills = [
  {
    icon: <Layout className="h-8 w-8 mb-4 text-primary" />,
    title: "Front-End Development",
    description:
      "Building responsive and optimized web applications with modern frameworks.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
    ],
  },
  {
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    title: "Styling & UI Frameworks",
    description:
      "Crafting modern and maintainable UI components with efficient styling techniques.",
    technologies: [
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
      "ShadCN",
    ],
  },
  {
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    title: "State Management",
    description:
      "Handling application state efficiently for scalable applications.",
    technologies: ["Context API", "Zustand", "Redux Toolkit"],
  },
  {
    icon: <Terminal className="h-8 w-8 mb-4 text-primary" />,
    title: "Back-End Integration",
    description:
      "Connecting front-end applications to databases and back-end services.",
    technologies: ["Mongoose", "REST APIs", "GraphQL", "Node.js"],
  },
  {
    icon: <Wrench className="h-8 w-8 mb-4 text-primary" />,
    title: "Development Tools",
    description:
      "Optimizing workflows with modern development and build tools.",
    technologies: ["Vite", "Webpack", "Babel", "ESLint", "Prettier"],
  },
  {
    icon: <Layers className="h-8 w-8 mb-4 text-primary" />,
    title: "Version Control & Deployment",
    description:
      "Managing code collaboration and deploying applications efficiently.",
    technologies: ["Git", "GitHub", "Vercel", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            I've worked with a variety of technologies in front-end development.
            Here are some of my key areas of expertise:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className=" text-sm mb-4">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
