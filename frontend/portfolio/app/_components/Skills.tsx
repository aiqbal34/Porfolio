"use client";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin (Android)", "C/C++", "Python", "JavaScript", "Swift (iOS)", "Dart", "HTML/CSS", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Flutter", "Tailwind CSS", "NextJS", "Flask", "SwiftUI", "Firebase", "MVVM", "FastAPI"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Visual Studio Code", "Android Studio", "Xcode", "Docker", "Postman", "GitHub", "PyCharm", "Visual Studio"]
    },
    {
      title: "Libraries & APIs",
      skills: ["NumPy", "Matplotlib", "pandas", "TensorFlow", "YOLO", "OpenAI API", "LangChain", "LangGraph", "WebSockets", "Pytorch", "AWS", "GCloud"]
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black pointer-events-none" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-white/90">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-gray-600/20 to-gray-500/20 text-gray-300 text-sm rounded-full border border-gray-500/30 hover:border-gray-400/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
