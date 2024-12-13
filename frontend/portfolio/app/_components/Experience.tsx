import React, { useEffect, useRef, useState } from "react";
import {
  AI_ML_FirmwareEngineerIntern,
  SoftwareResearchIntern,
  FullStackDeveloper,
} from "./experienceData";

interface ExperienceProps {
  experienceRef: React.RefObject<HTMLDivElement>;
}

const Experience: React.FC<ExperienceProps> = ({ experienceRef }) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [barPosition, setBarPosition] = useState(0);
  const listRef = useRef<HTMLUListElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const experiences = [
    {
      name: (
        <span>
          AI/ML Firmware Engineer Intern&nbsp;
          <span className="text-white">@</span>Western Digital
        </span>
      ),
      description: AI_ML_FirmwareEngineerIntern,
    },
    {
      name: (
        <span>
          Software Research Intern&nbsp;<span className="text-white">@</span>
          Nansen Labs
        </span>
      ),
      description: SoftwareResearchIntern,
    },
    {
      name: (
        <span>
          Full Stack Software Engineer&nbsp;
          <span className="text-white">@</span>Crypto Reporting LLC
        </span>
      ),
      description: FullStackDeveloper,
    },
  ];

  const titles = ["Western Digital", "Nansen Labs", "Crypto Reporting LLC"];
  const itemHeight = 40;

  useEffect(() => {
    setBarPosition(itemHeight * currentSelectedIndex);

    // Check if the content is scrollable
    if (contentRef.current) {
      setIsScrollable(
        contentRef.current.scrollHeight > contentRef.current.clientHeight,
      );
    }
  }, [currentSelectedIndex]);

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1); // Allow slight margin for precision
    }
  };

  return (
    <div
      ref={experienceRef}
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <div className="w-7/12 pb-3">
        <h1 className="text-4xl font-bold text-gradient mb-6">
          02. Where I've Worked
        </h1>
      </div>
      <div className="flex w-7/12 relative bg-neutral-700 rounded-lg shadow-lg p-4">
        {/* Sidebar */}
        <div className="w-48 flex-shrink-0">
          <ul
            ref={listRef}
            className="relative border-l-2 border-gray-600 pl-4"
          >
            {/* Active tab indicator */}
            <div
              className="absolute left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 rounded"
              style={{ top: barPosition, height: `${itemHeight}px` }}
            ></div>
            {titles.map((title, index) => (
              <li
                key={index}
                onClick={() => setCurrentSelectedIndex(index)}
                className={`whitespace-nowrap cursor-pointer py-2 pr-4 transition-all duration-300 ${
                  currentSelectedIndex === index
                    ? "text-white font-bold scale-105"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                style={{ height: `${itemHeight}px` }}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        {/* Content area */}
        <div className="flex-1 pl-6 relative">
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="transition-opacity duration-300 ease-in-out max-h-60 overflow-y-auto pr-2 relative"
          >
            <span className="text-xl font-semibold text-gray-300 mb-2 block">
              {experiences[currentSelectedIndex].name}
            </span>
            <span className="text-lg block text-gray-400 leading-relaxed">
              {experiences[currentSelectedIndex].description}
            </span>
          </div>
          {/* More to read indicator */}
          {isScrollable && !isAtBottom && (
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-600 to-transparent flex justify-center items-center pointer-events-none">
              <span className="text-sm text-black-500 animate-bounce">
                Scroll down ↓
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
