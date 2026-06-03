import { motion } from "motion/react";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import profileImg from "../assets/images/regenerated_image_1778670822728.jpg";
import { DATA } from "../constants/data";
import { THEME } from "../constants/theme";
import { SocialLink } from "./Shared";

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-24 lg:pt-32 pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(24,132,253,0.12),_transparent_28%)] opacity-90" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505]/95 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.45em] text-white/70 shadow-sm shadow-teal-500/10">
              Senior Full-Stack & Mobile Developer
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.92] text-white">
              Shay Elbaz
            </h1>
            <p className="max-w-2xl text-lg lg:text-xl text-white/70 leading-relaxed tracking-[0.01em]">
              {DATA.summary} I partner with visionary companies to design polished experiences, ship scalable platforms, and create motion-rich interfaces that feel premium.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: THEME.animation.durations.microHover }}
                href="https://docs.google.com/document/d/1dgApG8ZGOjg9J3u485PrWST9NO8w6S9QlqImvhsLL2c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-7 py-4 text-sm font-semibold text-black shadow-xl shadow-teal-500/20 transition"
              >
                View CV
                <ExternalLink className="ml-3 h-4 w-4" />
              </motion.a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-teal-400/40 hover:bg-white/10">
                Explore work
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
                <span className="block text-sm text-white/60 uppercase tracking-[0.3em] mb-3">Clients</span>
                <span className="text-3xl font-black text-white">30+</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
                <span className="block text-sm text-white/60 uppercase tracking-[0.3em] mb-3">Projects</span>
                <span className="text-3xl font-black text-white">90+</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
                <span className="block text-sm text-white/60 uppercase tracking-[0.3em] mb-3">Live products</span>
                <span className="text-3xl font-black text-white">12</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#121212]/70 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
              <img
                src={profileImg}
                alt="Shay Elbaz"
                className="h-[520px] w-full object-cover brightness-[0.92] contrast-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 px-8 pb-8">
                <div className="rounded-[2rem] border border-white/10 bg-black/50 backdrop-blur-xl p-6 shadow-2xl shadow-black/30">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/50 mb-3">Lead Tech Partner</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">Product Strategy</span>
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">Mobile Apps</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 right-0 flex gap-4">
              <SocialLink href={DATA.contact.linkedin} icon={Linkedin} />
              <SocialLink href={DATA.contact.github} icon={Github} />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
