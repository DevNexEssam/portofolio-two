"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      </div>

      {/* Gradient blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl opacity-70 dark:opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-primary/30 to-cyan-500/20 rounded-full blur-3xl opacity-70 dark:opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-t from-primary/10 to-yellow-500/10 rounded-full blur-3xl opacity-50 dark:opacity-20"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Available for Freelance Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-cyan-500">
                Essam Mohamed
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2">
              Front-End Developer
            </h2>
          </div>

          <p className="text-lg  max-w-xl">
            I craft responsive websites where technologies meet creativity.
            Building exceptional digital experiences with modern frontend
            frameworks.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Link
                href="https://github.com/DevNexEssam"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Link
                href="https://www.linkedin.com/in/essam-mohamed-829b27342/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Link
                href="mailto:essam.mohamed.dev@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-purple-500/20 to-cyan-500/30 blur-2xl"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/profile.png"
                alt="Essam Mohamed"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Tech stack floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-background to-background/90 rounded-full p-3 shadow-lg border border-primary/20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                delay: 0.5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-6 bg-gradient-to-r from-background to-background/90 rounded-full p-3 shadow-lg border border-primary/20"
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                delay: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                <line x1="12" y1="22" x2="12" y2="15.5"></line>
                <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                <line x1="12" y1="2" x2="12" y2="8.5"></line>
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 right-1/4 bg-gradient-to-r from-background to-background/90 rounded-full p-3 shadow-lg border border-primary/20"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                delay: 1.5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm  mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}
