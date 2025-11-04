import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Digital Marketing", desc: "Boost brand visibility and reach your target audience effectively." },
  { title: "Email Marketing", desc: "Engage your customers with personalized, automated email campaigns." },
  { title: "Web Development", desc: "Modern, responsive websites that convert visitors into customers." },
  { title: "Social Media Marketing", desc: "Create engaging content and grow your social media following." },
  { title: "Video Editing", desc: "High-quality video editing that tells your brand story beautifully." },
];

export default function Services() {
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
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 max-w-3xl mx-auto text-white/90 text-base sm:text-lg"
        >
          Strategy, design and development to grow your business across channels.
        </motion.p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#contact" className="rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition">Get Started</a>
          <a href="#services" className="rounded-full font-semibold px-6 py-2 text-white ring-1 ring-white/70 hover:bg-white/10 transition">Explore Services</a>
        </div>
      </section>

      <section id="services" className="py-16 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center"
        >
          What We Do
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
            >
              <div className="rounded-2xl relative overflow-hidden p-8 h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 transition-shadow duration-300 group-hover:shadow-xl">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                <div className="relative z-10 group-hover:drop-shadow-md">
                  <div className="mx-auto mb-4 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-pink-600 transition-all duration-300 group-hover:w-24" />
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              </div>
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
            Our Process
          </motion.h3>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[{n:"01",t:"Discover",d:"Understand business, users and goals."},{n:"02",t:"Plan",d:"Define roadmap, KPIs and experiments."},{n:"03",t:"Build",d:"Design, develop and integrate."},{n:"04",t:"Grow",d:"Optimize and scale with data."}].map((s,i)=> (
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
          Ready to start a project?
        </motion.h3>
        <a href="#contact" className="inline-block mt-5 rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition">Book a Free Call</a>
      </section>
    </div>
  );
}
