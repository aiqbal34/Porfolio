'use client' // allows for useRef in the client side
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Title = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="items-start mt-[-6rem] text-center max-w-4xl mx-auto px-6"
        >
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white font-bold text-6xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
                Aariz Iqbal
            </motion.h1>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-none justify-center items-center mb-6"
            >
                <h2 className="text-white text-xl">I am a&nbsp;</h2> 
                <ReactTyped 
                    strings={[
                        "Full Stack Developer", 
                        "Mobile Developer", 
                        "AI/ML Engineer",
                        "Firmware Engineer"
                    ]} 
                    typeSpeed={100} 
                    loop 
                    backSpeed={30} 
                    className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/80 text-lg mb-8"
            >
                <p>Computer Science Student at UC Davis</p>
                <p className="text-sm text-white/60">GPA: 3.9 | Expected Graduation: June 2026</p>
            </motion.div>
        </motion.div>
    );   
};

export default Title;
