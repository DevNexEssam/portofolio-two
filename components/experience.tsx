"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const workExperience = [
  {
    title: "Front-End Developer",
    company: "Freelance (Upwork & Nafathli)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Developing modern web applications using Next.js and Tailwind CSS",
      "Building interactive UI components with a strong focus on performance and user experience",
      "Collaborating with clients to deliver customized front-end solutions",
      "Optimizing web apps for SEO and accessibility",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Postly (Personal Project)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Developed a social platform where users can create profiles and post prompts",
      "Implemented authentication and authorization with NextAuth.js",
      "Designed reusable UI components using Tailwind CSS",
      "Integrated Mongoose for database management",
    ],
  },
  {
    title: "Front-End Developer",
    company: "dashMinds (Dashboard Project)",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Designed and developed a dashboard interface for employee and department management",
      "Used App Router in Next.js for optimized routing and better performance",
      "Implemented role-based access control for administrators and users",
    ],
  },
  {
    title: "WordPress Developer",
    company: "Tech Solutions Company",
    location: "Alexandria, Egypt",
    period: "2024",
    description: [
      "Worked on building and customizing WordPress websites",
      "Optimized website performance and enhanced UI/UX",
      "Integrated plugins and third-party APIs for additional functionalities",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science (In Progress)",
    institution: "Borg El Arab Technological University",
    location: "Alexandria, Egypt",
    period: "2022 - Present",
    description:
    "Currently studying computer science with a focus on front-end development, web technologies, and modern frameworks. Working on various academic projects related to web applications and AI."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <div className="text-primary font-medium">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="text-primary font-medium">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
