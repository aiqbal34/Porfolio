"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: ["Kotlin (Android)", "C/C++", "Python", "JavaScript", "Swift (iOS)", "Dart", "HTML/CSS", "TypeScript", "SQL"],
    accent: "#34d399",
    skillClass: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-400/60",
  },
  {
    title: "Frameworks",
    skills: ["React", "Flutter", "Tailwind CSS", "NextJS", "Flask", "SwiftUI", "Firebase", "MVVM", "FastAPI"],
    accent: "#60a5fa",
    skillClass: "text-blue-300 border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/60",
  },
  {
    title: "Developer Tools",
    skills: ["Git", "VS Code", "Android Studio", "Xcode", "Docker", "Postman", "GitHub", "PyCharm", "Visual Studio"],
    accent: "#fbbf24",
    skillClass: "text-amber-300 border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 hover:border-amber-400/60",
  },
  {
    title: "Libraries & APIs",
    skills: ["NumPy", "Matplotlib", "pandas", "TensorFlow", "YOLO", "OpenAI API", "LangChain", "LangGraph", "WebSockets", "PyTorch", "AWS", "GCloud"],
    accent: "#f472b6",
    skillClass: "text-pink-300 border-pink-500/30 bg-pink-500/10 hover:bg-pink-500/20 hover:border-pink-400/60",
  },
];

const Skills = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">
            {"// technical stack"}
          </p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
          <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl border border-slate-700/60 overflow-hidden bg-slate-800/30 backdrop-blur-sm hover:border-slate-600/80 transition-all duration-300"
            >
              {/* Terminal-style window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-slate-800/50">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-sm font-mono text-slate-300">{cat.title}</span>
                <div
                  className="ml-auto h-2 w-2 rounded-full"
                  style={{ background: cat.accent }}
                />
              </div>

              {/* Skill pills */}
              <div className="p-5 flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: i * 0.08 + j * 0.04 }}
                    className={`px-3 py-1 text-xs font-mono rounded-md border transition-all duration-200 cursor-default ${cat.skillClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Subtle accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ boxShadow: `inset 0 0 50px ${cat.accent}0a` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
