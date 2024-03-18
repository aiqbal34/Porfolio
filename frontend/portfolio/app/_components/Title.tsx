'use client' // allows for useRef in the client side
import { ReactTyped } from "react-typed";

const Title = () => {

    return (
            <div className="items-start mt-[-6rem]">
              <h1 className="text-white font-bold text-4xl">Aariz Iqbal</h1>
              <div className="flex flex-none">
                {/* the is the typewriter effect section */}
                <h1 className="text-white">i am a&nbsp;</h1> 
                <ReactTyped strings={["full stack developer", 'mobile developer']} typeSpeed={100} loop backSpeed={30} className="text-white font-semibold"/>
              </div>
            </div>
      );   
};

//   Camera camera("gige://192.168.1.100")

export default Title;
