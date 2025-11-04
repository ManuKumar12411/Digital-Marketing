import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="overflow-hidden">
      <section className="relative overflow-hidden py-20 md:py-24 px-6 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 -z-10 opacity-25 bg-[radial-gradient(80%_60%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 max-w-3xl mx-auto text-white/90 text-base sm:text-lg"
        >
          We are a team of marketers, designers and developers crafting growth-focused digital experiences.
        </motion.p>
      </section>

      <section className="py-14 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl font-bold text-gray-900"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-3 text-gray-600 text-base sm:text-lg"
            >
              We help brands grow with strategy, design, and technology. From websites to campaigns, we deliver measurable results.
            </motion.p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-indigo-600" /> Why choose us
              </span>
              <a href="#contact" className="rounded-full font-semibold px-5 py-2 text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 transition">Get a Proposal</a>
              <a href="#projects" className="rounded-full font-semibold px-5 py-2 text-indigo-700 bg-white ring-1 ring-indigo-200 hover:bg-white/90 transition">See Work</a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <FaLightbulb />, t: "Strategy", d: "Data-driven plans that align with your goals." },
              { icon: <FaUsers />, t: "Design", d: "Modern, accessible and conversion-focused UI." },
              { icon: <FaCogs />, t: "Development", d: "Fast, scalable and SEO-ready builds." },
              { icon: <FaRocket />, t: "Growth", d: "Always-on optimization across channels." },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70"
              >
                <div className="rounded-2xl relative overflow-hidden p-5 h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-pink-100/40" />
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="shrink-0 w-10 h-10 grid place-items-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg">{c.icon}</div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900">{c.t}</div>
                      <div className="mt-1 text-gray-600 text-sm">{c.d}</div>
                      <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full transition-all duration-300 group-hover:w-14" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
          >
            Our Journey
          </motion.h3>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { y: "2019", t: "Started", d: "Launched with a focus on design-first websites." },
              { y: "2022", t: "Scaled", d: "Expanded to full-funnel marketing and automation." },
              { y: "2025", t: "Today", d: "Delivering growth with strategy, content and product." },
            ].map((s, i) => (
              <motion.div
                key={s.y}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group rounded-2xl p-[1.5px] bg-gradient-to-r from-indigo-300/60 via-purple-300/60 to-pink-300/60"
              >
                <div className="rounded-2xl relative overflow-hidden p-6 h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                  <div className="relative z-10 group-hover:drop-shadow-md">
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-full" />
                    <div className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{s.y}</div>
                    <div className="mt-1 text-xl font-semibold text-gray-900">{s.t}</div>
                    <div className="mt-1 text-gray-600 text-sm">{s.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { l: "Projects", v: "120+" },
            { l: "Clients", v: "60+" },
            { l: "Campaigns", v: "200+" },
            { l: "Avg. ROI", v: "3.2x" },
          ].map((m) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 shadow-sm ring-1 ring-transparent bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
            >
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">{m.v}</div>
              <div className="text-sm text-gray-600 mt-1">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
          >
            Our Expertise
          </motion.h3>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FaLightbulb />, t: "Strategy", d: "Research, positioning and GTM planning." },
              { icon: <FaCogs />, t: "Development", d: "Web apps, sites and performance." },
              { icon: <FaUsers />, t: "Brand", d: "Identity, messaging and content." },
              { icon: <FaRocket />, t: "Growth", d: "SEO, ads and automation." },
            ].map((e, i) => (
              <motion.div
                key={e.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70"
              >
                <div className="rounded-2xl relative overflow-hidden p-6 h-full text-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                  <div className="relative z-10 group-hover:drop-shadow-md">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-24" />
                    <div className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{e.icon}</div>
                    <div className="text-lg font-semibold text-gray-900">{e.t}</div>
                    <div className="mt-1 text-gray-600 text-sm">{e.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
          >
            How We Work
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discover", d: "Understand business, users and goals." },
              { n: "02", t: "Plan", d: "Define roadmap, KPIs and experiments." },
              { n: "03", t: "Build", d: "Design, develop and integrate." },
              { n: "04", t: "Grow", d: "Optimize and scale with data." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-r from-indigo-300/60 via-purple-300/60 to-pink-300/60"
              >
                <div className="rounded-2xl relative overflow-hidden p-6 h-full text-left bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 transition-shadow duration-300 group-hover:shadow-xl">
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                  <div className="relative z-10 group-hover:drop-shadow-md">
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-20" />
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white grid place-items-center font-semibold">{s.n}</div>
                    <div className="mt-3 text-lg font-semibold text-gray-900">{s.t}</div>
                    <div className="mt-1 text-gray-600 text-sm">{s.d}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600" />
        <div className="max-w-6xl mx-auto text-white">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-3xl sm:text-4xl font-bold text-center"
          >
            Meet The Team
          </motion.h3>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1.5px] bg-white/20"
              >
                <div className="rounded-2xl relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 overflow-hidden">
                  <img src={`/images/team${i}.jpg`} alt={`team ${i}`} className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-600/10 via-transparent to-transparent" />
                  <div className="p-5">
                    <div className="text-lg font-semibold">Member {i}</div>
                    <div className="text-sm text-gray-600">Designer & Strategist</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto overflow-hidden">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center"
          >
            Tools & Platforms
          </motion.h3>
          <div className="relative mt-6">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -600] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 opacity-80"
            >
              {["figma","react","nextjs","node","github","vercel","netlify"].map((n) => (
                <div key={n} className="flex items-center gap-2">
                  <img src={`https://via.placeholder.com/64?text=${n}`} alt={n} className="h-8 w-8 object-contain" />
                  <span className="text-gray-600 text-sm capitalize">{n}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
          Ready to grow with us?
        </motion.h3>
        <a href="#contact" className="inline-block mt-5 rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition">
          Book a Free Call
        </a>
      </section>
    </div>
  );
}
