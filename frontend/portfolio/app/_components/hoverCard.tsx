'use client'
import { cn } from "../util/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  link: string;
  accent?: string;
  type?: string;
  tags?: string[];
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: ProjectItem[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const accent = item.accent ?? "#60a5fa";
        const isHovered = hoveredIndex === idx;

        return (
          // Entrance animation wrapper — does not interfere with hover logic
          <motion.div
            key={item.link}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
          >
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* ── Aceternity layoutId sliding background ── */}
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    className="absolute inset-0 h-full w-full block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                    style={{
                      background: `linear-gradient(135deg, ${accent}22 0%, ${accent}0a 55%, transparent 80%)`,
                    }}
                  />
                )}
              </AnimatePresence>

              {/* ── Card ── */}
              <div
                className={cn(
                  "rounded-2xl h-full w-full p-4 overflow-hidden",
                  "bg-slate-800/40 backdrop-blur-sm",
                  "border border-gray-700/50",
                  "relative z-20 transition-all duration-300",
                  "group-hover:scale-105",
                  "flex flex-col"
                )}
                style={{
                  boxShadow: isHovered
                    ? `0 0 0 1px ${accent}35, 0 8px 32px ${accent}12`
                    : "none",
                }}
              >
                <div className="relative z-50 p-4 flex flex-col h-full">

                  {/* Type badge + external arrow */}
                  <div className="flex items-center justify-between mb-2">
                    {item.type && (
                      <span
                        className="px-2 py-0.5 text-xs font-mono rounded-md border"
                        style={{
                          color: accent,
                          borderColor: `${accent}40`,
                          background: `${accent}10`,
                        }}
                      >
                        {item.type}
                      </span>
                    )}
                    <span className="ml-auto text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-sm">
                      ↗
                    </span>
                  </div>

                  {/* CardTitle — original Aceternity style */}
                  <h4 className="text-white font-bold tracking-wide mt-3 text-xl">
                    {item.title}
                  </h4>

                  {/* CardDescription — original Aceternity style, tightened spacing */}
                  <p className="mt-3 text-gray-300 tracking-wide leading-relaxed text-sm flex-1">
                    {item.description}
                  </p>

                  {/* Tech tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-5 pt-3 border-t border-slate-700/40 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-700/50 text-slate-400 border border-slate-600/40 group-hover:text-slate-300 transition-colors duration-150"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-800/40 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/70 relative z-20 transition-all duration-300 group-hover:scale-105",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide mt-4 text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("mt-3 text-gray-300 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
