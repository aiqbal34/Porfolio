'use client'
import { title } from "process";
import Navbar from "./_components/Navbar";
import Title from "./_components/Title";
import { HoverEffect } from "./_components/hoverCard";
import { useRef } from "react";
import { TracingBeam } from "./_components/tracing-beam";

const items = {
  title: "Hello",
  description: "loren Ipsum asl;dkfjasd;lfa;ldjfal;dkjfa;ldkfjal;dkfjadl;\na;dlfkja;djf",
  link: "https://google.com",
};
const itemArr = [items, items, items, items, items, items];



export default function Home() {

  const experienceRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <Navbar experienceRef={experienceRef}></Navbar>
      <TracingBeam>
        <div className="h-screen flex flex-col">
          {/* Navbar */}

          {/* title */}
          <div className="flex-grow flex items-center justify-center">
            <Title></Title>
          </div>
        </div>
        <div ref={experienceRef} className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-4xl">Experience</h1>
          <div className=" flex flex-col w-4/6">
            <HoverEffect items={itemArr} />
          </div>
        </div>
      </TracingBeam>
    </div>

  );
}
