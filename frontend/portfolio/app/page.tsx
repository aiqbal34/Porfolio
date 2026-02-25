"use client";
import Navbar from "./_components/Navbar";
import Title from "./_components/Title";
import { HoverEffect } from "./_components/hoverCard";
import { useRef } from "react";
import { TracingBeam } from "./_components/tracing-beam";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import { motion } from "framer-motion";

const itemArr = [
  {
    title: "DialedIn",
    description: "iOS app for UC Davis D1 Golf — Swift frontend with a FastAPI backend, TensorFlow swing analysis, YOLO real-time ball tracking, and LangChain-powered personalized training drills.",
    link: "https://github.com/aiqbal34/DialedIn",
    accent: "#fb923c",
    type: "iOS App",
    tags: ["Swift", "SwiftUI", "FastAPI", "TensorFlow", "YOLO", "LangChain"],
  },
  {
    title: "GitGud",
    description: "iOS app that matches developers for hackathon teams — SwiftUI frontend, ChatGPT API for intelligent team-building recommendations, and skill-based matching algorithms.",
    link: "https://github.com/aiqbal34/GitGud",
    accent: "#818cf8",
    type: "iOS App",
    tags: ["Swift", "SwiftUI", "ChatGPT API", "Firebase"],
  },
  {
    title: "Scream Detector AI",
    description: "AI-powered audio detection system using TensorFlow to classify screams vs. background noise in real time, with a ReactJS frontend and Flask backend.",
    link: "https://github.com/Programmer7129/Scream_Detection_AI-ML_Model",
    accent: "#f472b6",
    type: "AI / ML",
    tags: ["TensorFlow", "Python", "Flask", "React"],
  },
  {
    title: "Portfolio",
    description: "This site — built with Next.js, TypeScript, and Tailwind CSS, featuring a TracingBeam layout, framer-motion animations, and a fully responsive design.",
    link: "https://github.com/aiqbal34/Porfolio",
    accent: "#60a5fa",
    type: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Parkly",
    description: "Full-stack parking management platform with real-time spot availability, reservations, and live map integration — shipping at useparkly.com.",
    link: "https://www.useparkly.com/",
    accent: "#34d399",
    type: "Web App",
    tags: ["React", "Node.js", "Maps API"],
  },
];

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-slate-900">
      <Navbar projectRef={projectRef} skillsRef={skillsRef} experienceRef={experienceRef} contactRef={contactRef} />
      <TracingBeam>
        {/* ── Hero ── */}
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <Title />
          </div>
        </div>

        {/* ── Projects ── */}
        <div
          ref={projectRef}
          className="min-h-screen flex flex-col items-center justify-start pt-24 pb-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900/50 pointer-events-none" />

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 relative z-10 px-4"
          >
            <p className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">
              {"// selected work"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Projects
            </h2>
            <p className="text-slate-400 text-base mt-4 max-w-md mx-auto leading-relaxed">
              A collection of apps, tools, and experiments built across mobile, web, and AI.
            </p>
            <div className="mt-6 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          </motion.div>

          {/* Grid */}
          <div className="relative z-10 w-full max-w-6xl px-4">
            <HoverEffect items={itemArr} />
          </div>
        </div>

        {/* ── Skills ── */}
        <div ref={skillsRef} className="relative min-h-screen">
          <Skills />
        </div>

        {/* ── Experience ── */}
        <div ref={experienceRef} className="relative">
          <Experience />
        </div>

        {/* ── Contact ── */}
        <div ref={contactRef} className="relative min-h-screen">
          <Contact />
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
}
