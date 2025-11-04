import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Website", desc: "Built a full-stack online store with React & Node.js.", category: "development" },
  { title: "Social Media Campaign", desc: "Increased engagement by 200% through creative strategies.", category: "marketing" },
  { title: "Video Editing Project", desc: "Produced engaging brand videos for YouTube & Reels.", category: "content" },
  { title: "Landing Page Redesign", desc: "Improved conversions with fresh UI and A/B tests.", category: "design" },
  { title: "SEO Growth Sprint", desc: "Keyword strategy and on-page optimization for traffic lift.", category: "marketing" },
  { title: "SaaS Dashboard", desc: "Responsive dashboard with charts and auth.", category: "development" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "development", "marketing", "design", "content"];
  const visible = projects.filter((p) => (filter === "all" ? true : p.category === filter));

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-24 px-6 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(80%_60%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 max-w-3xl mx-auto text-white/90 text-base sm:text-lg"
        >
          Selected work across development, marketing, design and content.
        </motion.p>
      </section>

      {/* Filters */}
      <section className="py-6 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition relative ${
                filter === c
                  ? "text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="proj-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">{c}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visible.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
            >
              <div className="rounded-2xl relative overflow-hidden h-full bg-white">
                <div className="h-40 w-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200" />
                <div className="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                  <div className="relative">
                    <div className="absolute -top-6 right-0 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white capitalize shadow-sm">
                      {p.category}
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2">{p.title}</h3>
                    <p className="text-gray-700">{p.desc}</p>
                    <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-24" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-14 text-center px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(80%_60%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-white"
        >
          Want to see more work?
        </motion.h3>
        <a href="#contact" className="inline-block mt-5 rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition">Book a Free Call</a>
      </section>
    </div>
  );
}
