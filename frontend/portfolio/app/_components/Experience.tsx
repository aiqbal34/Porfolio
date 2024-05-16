import React, { useEffect, useState } from 'react';


const Experience = ({ experienceRef }: { experienceRef: React.RefObject<HTMLDivElement> }) => {

    const [currentSelectedIndex, setcurrentSelectedIndex] = useState(0)

    const experiences = [{
        name: "Loren",
        description: "Locrenr"
    }, {
        name: "Loren1",
        description: "Locrenr1"
    },{
        name: "Loren2",
        description: "Locrenr2"
    }]
    const titles = ["Nansen Labs", "Crypto Reporting LLC", "Verizon Media"]


  return (
    <div ref={experienceRef} className="flex flex-col items-center justify-center h-screen relative text-white">
        <div className=' w-7/12 pb-3'>
        <h1 className='text-4xl font-bold'>Experience</h1> 
        </div>
      <div id="work" className="flex  w-7/12">
      <ul id="Experiences" className=" p-5">
          {titles.map((title, index) => (
            <li key={index} onClick={() => {setcurrentSelectedIndex(index)}} className='p-5'>{title}</li>
          ))}
        </ul>
        <div id="experiences" className=" flex flex-col">
            <p>
            &#9654; {experiences[currentSelectedIndex].name}
          </p>
          <p>
          &#9654; {experiences[currentSelectedIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
