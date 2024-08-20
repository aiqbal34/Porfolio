import React, { useEffect, useRef, useState } from 'react';
import { AI_ML_FirmwareEngineerIntern, SoftwareResearchIntern, FullStackDeveloper } from './experienceData';

const Experience = ({ experienceRef }) => {
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);
  const [barPosition, setBarPosition] = useState(0);
  const listRef = useRef(null);

  const experiences = [
    {
      name: (
        <span>
          AI/ML Firmware Engineer Intern&nbsp;<span className="text-white">@</span>Western Digital
        </span>
      ),
      description: AI_ML_FirmwareEngineerIntern,
    },
    {
      name: (
        <span>
          Software Research Intern&nbsp;<span className="text-white">@</span>Nansen Labs
        </span>
      ),
      description: SoftwareResearchIntern,
    },
    {
      name: (
        <span>
          Full Stack Software Engineer&nbsp;<span className="text-white">@</span>Crypto Reporting LLC
        </span>
      ),
      description: FullStackDeveloper,
    },
  ];

  const titles = ['Western Digital', 'Nansen Labs', 'Crypto Reporting LLC'];
  const itemHeight = 40; // Set a fixed height for list items

  useEffect(() => {
    setBarPosition(itemHeight * currentSelectedIndex);
  }, [currentSelectedIndex]);

  return (
    <div ref={experienceRef} className="flex flex-col items-center justify-center h-screen text-white">
      <div className="w-7/12 pb-3">
        <h1 className="text-4xl font-bold text-white">02. Where I’ve Worked</h1>
      </div>
      <div className="flex w-7/12 relative">
        <ul ref={listRef} className="mr-8 w-1/4 border-l-2 border-gray-600 pl-4 relative flex flex-col">
          <div
            className="absolute left-0 w-1 bg-gray-500 transition-all duration-300"
            style={{ top: barPosition, height: `${itemHeight}px` }}
          ></div>
          {titles.map((title, index) => (
            <li
              key={index}
              onClick={() => setCurrentSelectedIndex(index)}
              className={`whitespace-nowrap cursor-pointer py-2 pr-4 hover:text-white ${
                currentSelectedIndex === index ? 'text-white font-bold' : 'text-gray-400'
              }`}
              style={{ height: `${itemHeight}px` }} // Ensure consistent height for each list item
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="flex flex-col w-3/4">
          <span className="text-xl font-semibold text-gray-500 mb-2">{experiences[currentSelectedIndex].name}</span>
          <span className="text-lg">{experiences[currentSelectedIndex].description}</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;