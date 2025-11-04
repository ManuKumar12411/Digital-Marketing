import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <img src="/images/logo.png" alt="DigitalWave logo" className="h-10 w-auto" />
            </a>
            <div className="mt-3 text-2xl font-bold">DigitalWave</div>
            <p className="mt-3 text-sm text-slate-300">
              Empowering businesses with modern marketing, technology, and creativity.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">FB</a>
              <a href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">IG</a>
              <a href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition">LI</a>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Services</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="#services" className="hover:text-white transition">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition">Email Marketing</a></li>
              <li><a href="#services" className="hover:text-white transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition">Social Media</a></li>
              <li><a href="#services" className="hover:text-white transition">Video Editing</a></li>
              <li><a href="#services" className="hover:text-white transition">Business IT Solutions</a></li>
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold">Resources</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><a href="tel:+919999999999" className="hover:text-white transition">+91 99999 99999</a></li>
              <li><a href="mailto:hello@yourbrand.com" className="hover:text-white transition">hello@yourbrand.com</a></li>
              <li><span>Ahmedabad, IN</span></li>
            </ul>
            <a href="#contact" className="inline-block mt-4 text-sm font-medium rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 transition">Get Free Consultation</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-xs text-slate-300">
          © {new Date().getFullYear()} DigitalWave. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
