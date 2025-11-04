import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-3 max-w-3xl mx-auto text-white/90 text-base sm:text-lg"
        >
          We'd love to hear about your project. Send a message and we’ll get back within 24 hours.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6">
          {[{t:"Email",d:"hello@yourbrand.com"},{t:"Phone",d:"+91 98765 43210"},{t:"Address",d:"Mumbai, India"}].map((c,i)=> (
            <motion.div
              key={c.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
            >
              <div className="rounded-2xl relative overflow-hidden p-6 h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                <div className="relative z-10">
                  <div className="text-lg font-semibold text-gray-900">{c.t}</div>
                  <div className="mt-1 text-gray-700">{c.d}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-12 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
          >
            <div className="rounded-2xl relative overflow-hidden p-8 bg-white">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea placeholder="Tell us about your project" className="w-full border rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
              </div>
              <div className="mt-6 flex justify-start">
                <button type="submit" className="rounded-full font-semibold px-6 py-3 text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transition">Send Message</button>
              </div>
            </div>
          </motion.form>

          {/* Right: Info Panel */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
            >
              <div className="rounded-2xl relative overflow-hidden p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-pink-100/50" />
                <div className="relative z-10">
                  <div className="text-lg font-semibold text-gray-900">Quick Contact</div>
                  <div className="mt-2 text-gray-700">Email: hello@yourbrand.com</div>
                  <div className="text-gray-700">Phone: +91 98765 43210</div>
                  <div className="mt-4 flex gap-3">
                    <a href="mailto:hello@yourbrand.com" className="rounded-full font-semibold px-4 py-2 text-white bg-gradient-to-r from-indigo-600 to-pink-600 hover:opacity-90 transition">Email</a>
                    <a href="#whatsapp" className="rounded-full font-semibold px-4 py-2 text-indigo-700 bg-white ring-1 ring-indigo-200 hover:bg-white/90 transition">WhatsApp</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06 }}
              className="hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-indigo-300/60 via-purple-300/60 to-pink-300/60"
            >
              <div className="rounded-2xl relative overflow-hidden p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
                <div className="text-lg font-semibold text-gray-900">Office Hours</div>
                <div className="mt-2 text-gray-700">Mon - Fri: 9:30 AM - 6:30 PM</div>
                <div className="text-gray-700">Sat: 10:00 AM - 2:00 PM</div>
                <div className="text-gray-700">Sun: Closed</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <section className="py-12 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl overflow-hidden h-72 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200"
          >
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Mumbai%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
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
          Prefer email or WhatsApp?
        </motion.h3>
        <div className="mt-5 flex gap-3 justify-center">
          <a href="mailto:hello@yourbrand.com" className="inline-block rounded-full font-semibold px-6 py-2 text-indigo-700 bg-white hover:bg-white/90 transition">Email Us</a>
          <a href="#contact" className="inline-block rounded-full font-semibold px-6 py-2 text-white ring-1 ring-white/70 hover:bg-white/10 transition">Book a Call</a>
        </div>
      </section>
    </div>
  );
}
