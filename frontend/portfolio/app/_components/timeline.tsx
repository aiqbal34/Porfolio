"use client";
import React from 'react'
import { motion } from 'framer-motion'

interface TimelineItem {
  date: string
  title: string
  company: string
  description: React.ReactNode
  accent: string
  tags: string[]
}

interface TimelineProps {
  data: TimelineItem[]
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="w-full bg-slate-900 font-sans md:px-10">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto pt-24 pb-14 px-4 md:px-8 lg:px-10"
      >
        <p className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">
          {"// professional journey"}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
          Experience
        </h2>
        <p className="text-slate-400 text-base max-w-lg leading-relaxed">
          Hands-on engineering across firmware, AI/ML, full-stack, and mobile —
          each role shipping production-grade software.
        </p>
        <div className="mt-6 h-px w-16 bg-gradient-to-r from-blue-500/60 to-transparent" />
      </motion.div>

      {/* ── Timeline Items ── */}
      <div className="relative max-w-7xl mx-auto pb-24">

        {/* Static connector line */}
        <div className="absolute left-8 top-10 bottom-20 w-px bg-gradient-to-b from-transparent via-slate-600/40 to-transparent pointer-events-none" />

        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >

            {/* ── Left column: dot + year ── */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">

              {/* Dot */}
              <div className="absolute left-3 md:left-3 h-10 w-10 flex items-center justify-center">
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: `${item.accent}30` }}
                  animate={{ scale: [1, 1.75, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                  }}
                />
                {/* Outer ring */}
                <div
                  className="relative h-10 w-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `${item.accent}14`,
                    border: `1px solid ${item.accent}50`,
                  }}
                >
                  {/* Inner dot */}
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: item.accent }}
                  />
                </div>
              </div>

              {/* Year */}
              <h3 className="hidden md:block md:pl-20 md:text-5xl font-bold text-slate-700 tabular-nums">
                {item.date}
              </h3>
            </div>

            {/* ── Right column: card ── */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile year */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-700 tabular-nums">
                {item.date}
              </h3>

              <motion.div
                className="group relative bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 group-hover:w-1"
                  style={{ background: item.accent }}
                />

                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${item.accent}0a, transparent 55%)`,
                  }}
                />

                <div className="p-6 pl-8">

                  {/* Title row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <h4 className="text-lg md:text-xl font-semibold text-white leading-snug">
                      {item.title}
                    </h4>
                    <span
                      className="flex-shrink-0 px-2 py-0.5 text-xs font-mono rounded-md border"
                      style={{
                        color: item.accent,
                        borderColor: `${item.accent}40`,
                        background: `${item.accent}10`,
                      }}
                    >
                      Intern
                    </span>
                  </div>

                  {/* Company badge */}
                  <div className="mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-md"
                      style={{
                        background: `${item.accent}14`,
                        color: item.accent,
                      }}
                    >
                      <span className="opacity-50">@</span>
                      {item.company}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="text-slate-300 text-sm leading-relaxed mb-5">
                    {item.description}
                  </div>

                  {/* Tech tags */}
                  {item.tags.length > 0 && (
                    <div className="pt-4 border-t border-slate-700/50 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-700/50 text-slate-400 border border-slate-600/40 hover:text-slate-300 hover:border-slate-500/60 transition-colors duration-150"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
