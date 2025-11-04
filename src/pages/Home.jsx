import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaEnvelope,
  FaCode,
  FaShareAlt,
  FaVideo,
  FaUsers,
  FaCheckCircle,
  FaCogs,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* 🌟 HERO SECTION */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(80%_60%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />

        {/* Motion background features */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.25, y: [20, -10, 20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-10 -left-10 w-60 h-60 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-3xl"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.25, y: [-20, 10, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-gradient-to-tr from-white/25 to-transparent blur-3xl"
        />

        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-5 text-white drop-shadow"
            >
              We Build Brands That Shine
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-xl"
            >
              Creative digital marketing & web solutions that elevate your brand online.
            </motion.p>
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white text-indigo-700 px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow hover:bg-white/90 transition"
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="rounded-full bg-white/20 border border-white/30 px-6 sm:px-8 py-2 sm:py-3 font-semibold text-white hover:bg-white/25 transition"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/30 bg-white/5">
              <img src="/images/hero.jpg" alt="hero visual" className="w-full h-[320px] sm:h-[420px] object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-4 right-4 rounded-xl bg-white/90 backdrop-blur px-4 py-2 shadow text-sm text-gray-800"
            >
              Fast, Modern & SEO‑ready
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Projects", value: "120+" },
              { label: "Clients", value: "80+" },
              { label: "Campaigns", value: "300+" },
              { label: "Years", value: "5+" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm hover:shadow-md"
              >
                <div className="rounded-2xl bg-white/90 backdrop-blur p-6">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-gray-600 mt-1 text-sm sm:text-base">{s.label}</div>
                  <div className="mt-3 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(60%_40%_at_20%_20%,#6366f1,transparent),radial-gradient(50%_35%_at_80%_30%,#a855f7,transparent)]" />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white shadow-sm ring-1 ring-gray-200">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
              <span className="text-xs font-medium text-gray-700">Your Growth. Our Mission.</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              We blend strategy, creativity and technology to build campaigns and websites that convert and scale.
              You focus on business—leave growth to us.
            </motion.p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "ROI-focused strategies",
                "Performance creatives & video",
                "SEO + Email + Social growth",
                "Modern, responsive websites",
              ].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white grid place-items-center text-[10px]">✓</span>
                  <span className="text-gray-700 text-sm sm:text-base">{t}</span>
                </motion.div>
              ))}
            </div>

            {/* 3-step process */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: <FaBullhorn />, t: "Strategy" },
                { icon: <FaCode />, t: "Build" },
                { icon: <FaEnvelope />, t: "Launch" },
              ].map((it, i) => (
                <motion.div
                  key={it.t}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                  className="rounded-xl p-3 text-center bg-white shadow-sm ring-1 ring-gray-100"
                >
                  <div className="mx-auto mb-2 w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center text-lg">
                    {it.icon}
                  </div>
                  <div className="text-xs font-medium text-gray-700">{it.t}</div>
                </motion.div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "120+", v: "Projects" },
                { k: "80+", v: "Clients" },
                { k: "5+", v: "Years" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold text-indigo-600">{s.k}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{s.v}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#services" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-indigo-700 transition">
                Explore Services
              </a>
              <a href="#projects" className="px-5 py-2 rounded-full text-sm sm:text-base font-medium bg-white border border-gray-200 hover:bg-gray-100 transition">
                View Work
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <img src="/images/6.png" alt="team at work" className="w-full h-64 sm:h-80 object-cover" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:w-[70%]">
              <div className="rounded-2xl bg-white/90 backdrop-blur p-4 shadow-md border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">🏆</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Trusted Growth Partner</div>
                    <div className="text-xs text-gray-500">Strategy. Creative. Technology.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚀 SERVICES SECTION */}
      <section id="services" className="relative py-16 sm:py-20 overflow-hidden">
        {/* Gradient background with soft blobs */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="absolute -top-16 -left-20 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-purple-400/25 to-pink-400/25 blur-3xl" />

        <div className="relative">
          <div className="text-center mb-10 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 mt-2 text-base sm:text-lg">Everything your business needs to win online</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 md:px-20">
            {[
              { icon: <FaBullhorn />, title: "Digital Marketing", desc: "ROI-focused campaigns across search, social & display." },
              { icon: <FaEnvelope />, title: "Email Marketing", desc: "Automations, newsletters & conversions that scale." },
              { icon: <FaCode />, title: "Web Development", desc: "Fast, responsive and SEO-ready websites & stores." },
              { icon: <FaShareAlt />, title: "Social Media", desc: "Creatives, reels & community growth across platforms." },
              { icon: <FaVideo />, title: "Video Editing", desc: "Performance-focused edits for ads & brand stories." },
              { icon: <FaCogs />, title: "Business IT Solutions", desc: "CRM, automation & cloud tools to streamline ops." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, rotate: -0.4 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm hover:shadow-md"
              >
                {/* inner card */}
                <div className="rounded-2xl h-full w-full bg-white/95 backdrop-blur p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-sm transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-amber-600">{item.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mt-1 transition-all duration-300 group-hover:text-gray-800 group-hover:-translate-y-[2px]">{item.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full transition-all duration-300 group-hover:w-16" />
                  <div className="mt-5 flex items-center justify-between">
                    <a href="#contact" className="text-sm font-medium bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Enquire now</a>
                    <span className="text-gray-300 group-hover:text-amber-500 transition">→</span>
                  </div>
                </div>

                {/* subtle glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-br from-amber-400/20 via-orange-400/20 to-rose-400/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧠 WEB DEVELOPMENT */}
      <section className="py-16 sm:py-20 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-purple-50"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            <div className="rounded-3xl bg-white p-6 sm:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Web Development
                  </h2>
                  <p className="mt-3 text-gray-600 text-base sm:text-lg">
                    Modern, fast and SEO-friendly websites that convert. Built with best UX and performance practices.
                  </p>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Responsive & Fast", "SEO + Analytics", "E‑commerce Ready", "CMS & Automation"].map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                        <span className="text-gray-700 text-sm sm:text-base">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                  <a href="#projects" className="mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 font-medium hover:from-indigo-700 hover:to-purple-700 transition">
                    See Projects
                  </a>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-0.5 shadow-lg">
                    <div className="rounded-2xl bg-white p-4">
                      <div className="h-56 sm:h-64 rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs sm:text-sm relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_30%,#a855f7,transparent_40%)]" />
                        <div className="flex gap-1 mb-3">
                          <span className="w-3 h-3 rounded-full bg-red-500"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                        <pre className="whitespace-pre-wrap leading-relaxed">{`<section class="hero">
  <h1>Grow your brand</h1>
  <button>Start Now</button>
</section>`}</pre>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute -bottom-4 -right-2 sm:-right-4 rounded-xl bg-white px-4 py-2 shadow border text-sm"
                  >
                    Lighthouse Score: <span className="font-semibold text-green-600">95+</span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🤝 OUR CLIENTS */}
      <section id="clients" className="py-16 sm:py-20 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-indigo-400/25 to-purple-400/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-pink-400/20 to-purple-400/20 blur-3xl" />

        <div className="relative text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            <span className="text-xs font-medium text-gray-700">Brands that trust us</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Trusted by Brands</h2>
          <p className="mt-2 text-gray-600">We’ve partnered with startups and enterprises to deliver measurable growth</p>

          <div className="max-w-6xl mx-auto mt-8 sm:mt-10 space-y-6">
            {/* Row 1 */}
            <div style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={2600}
                loop
                slidesPerView={2}
                breakpoints={{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
                allowTouchMove={false}
                className="select-none"
              >
                {["client1.png", "client2.png", "client3.png", "client4.png", "client5.png", "client6.png"].map((c, i) => (
                  <SwiperSlide key={`r1-${i}`}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="mx-3 rounded-xl p-[1px] bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"
                    >
                      <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100">
                        <img
                          src={`/images/${c}`}
                          alt="client logo"
                          className="h-12 sm:h-14 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Row 2 reversed */}
            <div style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                speed={2800}
                loop
                slidesPerView={2}
                breakpoints={{ 640: { slidesPerView: 3 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
                allowTouchMove={false}
                className="select-none"
              >
                {["client1.png", "client2.png", "client3.png", "client4.png", "client5.png", "client6.png"].map((c, i) => (
                  <SwiperSlide key={`r2-${i}`}>
                    <motion.div
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="mx-3 rounded-xl p-[1px] bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200"
                    >
                      <div className="rounded-xl bg-white p-4 ring-1 ring-gray-100">
                        <img
                          src={`/images/${c}`}
                          alt="client logo"
                          className="h-12 sm:h-14 mx-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 PROJECTS */}
      <section id="projects" className="py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Our Projects</h2>
            <p className="mt-2 text-gray-600">A glimpse of the work we’ve crafted for growth-focused brands</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.01, rotateX: 2, rotateY: -2 }}
                style={{ transformPerspective: 1000 }}
                className="group rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm hover:shadow-md"
              >
                <div className="rounded-2xl bg-white overflow-hidden">
                  <div className="relative">
                    <img
                      src={`/images/project${p}.jpg`}
                      alt={`project ${p}`}
                      className="h-48 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    {/* gradient top accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                    {/* tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.12 }}
                      className="absolute bottom-3 left-3 right-3 flex items-center gap-2"
                    >
                      <span className="px-2 py-1 rounded-full text-[11px] bg-white/95 text-gray-800 shadow-sm">UI/UX</span>
                      <span className="px-2 py-1 rounded-full text-[11px] bg-white/95 text-gray-800 shadow-sm">Web</span>
                      <span className="ml-auto px-2 py-1 rounded-full text-[11px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm">Case Study</span>
                    </motion.div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">Project {p}</h3>
                      <motion.a
                        whileHover={{ x: 3 }}
                        href="#contact"
                        className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                      >
                        View →
                      </motion.a>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      High-performing experience with modern visuals and measured growth impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contact" className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 font-medium hover:from-indigo-700 hover:to-purple-700 transition">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <section id="testimonials" className="py-16 sm:py-20 relative overflow-hidden text-center px-4 sm:px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-indigo-400/25 to-purple-400/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-gradient-to-tr from-pink-400/20 to-purple-400/20 blur-3xl" />

        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
          <span className="text-xs font-medium text-gray-700">Client love</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">What Clients Say</h2>

        <div className="max-w-4xl mx-auto mt-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            speed={650}
            loop
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {[
              { name: "Amit Verma", role: "Founder, AV Foods", text: "Team delivered a beautiful, fast website and our leads improved within weeks." },
              { name: "Riya Shah", role: "Marketing Head, RS Clinic", text: "Their social and email strategy gave us consistent growth month over month." },
              { name: "Karan Patel", role: "CEO, KP Traders", text: "Excellent communication and top-notch execution across channels." },
            ].map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm mx-2"
                >
                  <div className="rounded-2xl bg-white p-6 sm:p-10 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white grid place-items-center text-xl">“</div>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{t.text}</p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <div>
                        <div className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t.name}</div>
                        <div className="text-gray-500 text-sm">{t.role}</div>
                      </div>
                      <div className="hidden sm:flex gap-0.5 text-amber-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-gradient-to-br from-indigo-400/15 via-purple-400/15 to-pink-400/15" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 💳 PRICING */}
      <section id="pricing" className="py-16 sm:py-20 bg-gray-50 text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-10">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { title: "Starter", price: "₹9,999", features: ["Landing Page", "Basic SEO", "1 Campaign"], popular: false },
            { title: "Growth", price: "₹24,999", features: ["Multi-page Site", "Advanced SEO", "Email + Social"], popular: true },
            { title: "Pro", price: "₹49,999", features: ["E‑commerce", "Automation", "Full Analytics"], popular: false },
          ].map((plan) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl p-6 sm:p-8 shadow-md border ${plan.popular ? "bg-white border-indigo-200 ring-2 ring-indigo-500" : "bg-white border-gray-100"}`}
            >
              <div className="text-xl sm:text-2xl font-semibold">{plan.title}</div>
              <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mt-2">{plan.price}</div>
              <ul className="text-left mt-4 space-y-2 text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-block px-6 py-2 rounded-full font-medium transition ${plan.popular ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-100 hover:bg-gray-200"}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ❓ FAQ */}
      <section id="faq" className="py-16 sm:py-20 bg-white px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Kya aap Hindi me bhi content bana sakte ho?", a: "Haan, hum Hindi, Hinglish aur English teeno me content aur campaigns deliver karte hain." },
            { q: "Delivery time kitna hota hai?", a: "Basic website 1–2 weeks, marketing campaigns 1 week me live ho jate hain (scope par depend karta hai)." },
            { q: "Maintenance kaise hoti hai?", a: "Hum monthly support plans provide karte hain jisme updates, backups aur performance monitoring cover hota hai." },
          ].map((f, i) => (
            <motion.details
              key={i}
              initial={false}
              className="group rounded-xl border border-gray-200 p-4 bg-gray-50"
            >
              <summary className="cursor-pointer list-none font-medium text-gray-800 flex justify-between items-center">
                {f.q}
                <span className="text-indigo-600">+</span>
              </summary>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "auto", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-2 text-gray-600"
              >
                {f.a}
              </motion.div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* 🚀 CTA BANNER */}
      <section className="relative overflow-hidden py-14 text-center px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(80%_60%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />
        <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to grow faster?</h3>
        <p className="mt-2 text-white/90">Book a free strategy call and get an action plan for your brand.</p>
        <a href="#contact" className="inline-block mt-5 rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition ring-1 ring-white/30">
          Get Free Consultation
        </a>
      </section>

      {/* 💡 WHY CHOOSE US */}
      <section id="why" className="relative overflow-hidden py-16 sm:py-20 text-white text-center px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"></div>
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(70%_50%_at_20%_20%,white,transparent),radial-gradient(60%_40%_at_80%_30%,white,transparent)]" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaUsers />, title: "Expert Team", desc: "Experienced professionals with creative minds." },
            { icon: <FaCheckCircle />, title: "Quality Results", desc: "Delivering measurable performance every time." },
            { icon: <FaBullhorn />, title: "Strong Strategy", desc: "Data-driven approach for lasting growth." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/95 text-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition ring-1 ring-white/40"
            >
              <div className="text-4xl sm:text-5xl bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent mb-3 sm:mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📝 BLOG SECTION */}
      <section id="blog" className="py-16 sm:py-20 relative overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
              <span className="text-xs font-medium text-gray-700">Insights</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Latest Articles</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Strategies, design tips, and growth ideas to level up your brand.</p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { img: "/images/blog1.jpg", tag: "Strategy", date: "Sep 28, 2025", title: "Crafting a High‑Converting Landing Page", excerpt: "Learn the structure that consistently turns visitors into leads." },
              { img: "/images/blog2.jpg", tag: "Design", date: "Oct 04, 2025", title: "Modern UI Patterns That Build Trust", excerpt: "Small visual decisions that make a big impact on conversions." },
              { img: "/images/blog3.jpg", tag: "Growth", date: "Oct 10, 2025", title: "SEO Quick Wins for New Websites", excerpt: "Simple fixes to improve rankings and organic traffic fast." },
            ].map((b, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm hover:shadow-md"
              >
                <div className="rounded-2xl bg-white overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img src={b.img} alt={b.title} className="h-44 sm:h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-1 rounded-full text-[11px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm">{b.tag}</span>
                      <span className="hidden sm:inline px-2 py-1 rounded-full text-[11px] bg-white/95 text-gray-800 shadow-sm">{b.date}</span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{b.title}</h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base flex-1">{b.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <a href="#contact" className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Read More →</a>
                      <span className="text-xs text-gray-500 sm:hidden">{b.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 📞 CONTACT SECTION */}
      <section id="contact" className="py-16 sm:py-20 relative overflow-hidden px-4 sm:px-6">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-indigo-50 to-purple-50" />
        <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] rounded-full bg-gradient-to-tr from-pink-400/20 to-purple-400/20 blur-3xl" />

        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            <span className="text-xs font-medium text-gray-700">Let’s talk</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Have a project in mind? Call us, WhatsApp, or drop a message—we’ll get back within 24 hours.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm"
          >
            <div className="rounded-2xl bg-white p-6 sm:p-8 h-full">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white grid place-items-center"><FaPhone /></div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <a href="tel:+919999999999" className="text-lg font-semibold text-gray-900 hover:underline">+91 99999 99999</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white grid place-items-center"><FaWhatsapp /></div>
                  <div>
                    <div className="text-sm text-gray-500">WhatsApp</div>
                    <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="text-lg font-semibold text-gray-900 hover:underline">Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white grid place-items-center"><FaEnvelope /></div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <a href="mailto:hello@yourbrand.com" className="text-lg font-semibold text-gray-900 hover:underline">hello@yourbrand.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white grid place-items-center"><FaMapMarkerAlt /></div>
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="text-gray-900 font-semibold">123 Creative Street, Ahmedabad, IN</div>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline">Open in Maps →</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <div className="text-xs text-gray-500">Working Hours</div>
                  <div className="font-semibold text-gray-800">Mon–Sat • 10am–7pm</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-3 text-center">
                  <div className="text-xs text-gray-500">Response</div>
                  <div className="font-semibold text-gray-800">Within 24 hrs</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/70 via-purple-300/70 to-pink-300/70 shadow-sm"
          >
            <div className="rounded-2xl bg-white p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md text-sm sm:text-base" />
                <input type="tel" placeholder="Phone" className="w-full border p-3 rounded-md text-sm sm:text-base" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <input type="email" placeholder="Email" className="w-full border p-3 rounded-md text-sm sm:text-base" />
                <input type="text" placeholder="Company (optional)" className="w-full border p-3 rounded-md text-sm sm:text-base" />
              </div>
              <textarea placeholder="Tell us about your project..." className="w-full border p-3 rounded-md h-28 sm:h-32 text-sm sm:text-base mt-4"></textarea>
              <div className="mt-5 flex items-center justify-between">
                <button type="submit" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 sm:py-3 rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition text-sm sm:text-base">Send Message</button>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 ring-1 ring-green-200 hover:bg-green-100 text-sm">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
