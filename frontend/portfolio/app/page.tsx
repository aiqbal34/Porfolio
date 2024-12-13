"use client";
import { title } from "process";
import Navbar from "./_components/Navbar";
import Title from "./_components/Title";
import { HoverEffect } from "./_components/hoverCard";
import { useRef } from "react";
import { TracingBeam } from "./_components/tracing-beam";
import Experience from "./_components/Experience";

type Item = {
  title: string;
  description: string;
  link: string;
};

const GitGud = {
  title: "GitGud",
  //write a description of a portfolio
  description:
    "An iOS app that allows a person to find a group of people to work on a project with specifically for hackathons",
  link: "https://github.com/aiqbal34/GitGud",
};
const Scream_Detector = {
  title: "Scream Detection",
  // write a description of scream detection
  description: "An app that detects screams using machine learning",
  link: "https://github.com/Programmer7129/Scream_Detection_AI-ML_Model",
};
const portfolio = {
  title: "Portfolio",
  description: "This website itself",
  link: "https://github.com/aiqbal34/Porfolio",
};

const itemArr = [GitGud, Scream_Detector, portfolio];

export default function Home() {
  const projectRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Navbar projectRef={projectRef} experienceRef={experienceRef}></Navbar>
      <TracingBeam>
        <div className="h-screen flex flex-col">
          {/* Navbar */}

          {/* title */}
          <div className="flex-grow flex items-center justify-center">
            <Title></Title>
          </div>
        </div>
        <div
          ref={projectRef}
          className="h-screen flex flex-col items-center justify-center"
        >
          {" "}
          {/** Move this div to another file*/}
          <h1 className="text-white font-bold text-4xl">Projects</h1>
          <div className=" flex flex-col max-w-[70vw]">
            <HoverEffect items={itemArr} />
          </div>
        </div>
        <Experience experienceRef={experienceRef} />
      </TracingBeam>
    </div>
  );
}
