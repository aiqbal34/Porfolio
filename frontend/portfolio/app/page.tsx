"use client";
import { title } from "process";
import Navbar from "./_components/Navbar";
import Title from "./_components/Title";
import { HoverEffect } from "./_components/hoverCard";
import { useRef, useEffect, useState } from "react";
import { TracingBeam } from "./_components/tracing-beam";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import { useScroll, motion, useTransform } from "framer-motion";

type Item = {
  title: string;
  description: string;
  link: string;
};

const DialedIn = {
  title: "DialedIn",
  description: "iOS application for UC Davis D1 Golf featuring Swift frontend and FastAPI backend with TensorFlow for swing analysis, YOLO for real-time ball tracking, and LangChain for personalized training drills",
  link: "https://github.com/aiqbal34/DialedIn",
};

const GitGud = {
  title: "GitGud",
  description: "iOS app that helps users find project collaborators for hackathons using SwiftUI, ChatGPT API for team building, and skill matching algorithms",
  link: "https://github.com/aiqbal34/GitGud",
};

const Scream_Detector = {
  title: "Scream Detector AI",
  description: "AI-powered audio detection system using TensorFlow to identify screams vs background noise with ReactJS frontend and Flask backend",
  link: "https://github.com/Programmer7129/Scream_Detection_AI-ML_Model",
};

const portfolio = {
  title: "Portfolio",
  description: "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and interactive components",
  link: "https://github.com/aiqbal34/Porfolio",
};

const itemArr = [DialedIn, GitGud, Scream_Detector, portfolio];

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-black">
      <Navbar projectRef={projectRef} skillsRef={skillsRef} experienceRef={experienceRef} contactRef={contactRef} />
      <TracingBeam>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            <Title />
          </div>
        </div>

        <div
          ref={projectRef}
          className="min-h-screen flex flex-col items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/50 pointer-events-none" />
          <h1 className="text-white font-bold text-5xl mb-16 relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</h1>
          <div className="relative z-10 flex flex-col max-w-[80vw]">
            <HoverEffect items={itemArr} />
          </div>
        </div>

        <div
          ref={skillsRef}
          className="relative min-h-screen"
        >
          <Skills />
        </div>

        <div 
          ref={experienceRef}
          className="relative"
        >
          <Experience />
        </div>

        <div 
          ref={contactRef}
          className="relative min-h-screen"
        >
          <Contact />
        </div>
      </TracingBeam>
      <Footer />
    </div>
  );
}
