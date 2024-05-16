'use client'
import { title } from "process";
import Navbar from "./_components/Navbar";
import Title from "./_components/Title";
import { HoverEffect } from "./_components/hoverCard";
import { useRef } from "react";
import { TracingBeam } from "./_components/tracing-beam";
import Experience from "./_components/Experience";

const items = {
  title: "Hello",
  description: "loren Ipsum asl;dkfjasd;lfa;ldjfal;dkjfa;ldkfjal;dkfjadl;\na;dlfkja;djf",
  link: "https://google.com",
};
const items1 = {
  title: "Hello1",
  description: "loren Ipsum asl;dkfjasd;lfa;ldjfal;dkjfa;ldkfjal;dkfjadl;\na;dlfkja;djf1",
  link: "https://google.com",
};

const itemArr = [items, items1]



export default function Home() {

  const projectRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)

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
        <div ref={projectRef} className="h-screen flex flex-col items-center justify-center"> { /** Move this div to another file*/}
          <h1 className="text-white font-bold text-4xl">Projects</h1>
          <div className=" flex flex-col max-w-[70vw]">
            <HoverEffect items={itemArr} />
          </div>
        </div>
        <Experience experienceRef={experienceRef}/>
      </TracingBeam>
    </div>

  );
}
