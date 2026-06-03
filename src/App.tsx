import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { DATA } from "./constants/data";
import { Hero } from "./components/Hero";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Sidebar } from "./components/Sidebar";
import { BackgroundBlobs, SectionHeading, Spotlight, WhatsAppIcon } from "./components/Shared";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      <BackgroundBlobs />
      <Spotlight />

      <div className="relative z-20">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050505]/95 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8">
          <motion.nav
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <span className="text-sm font-black tracking-[0.45em] uppercase text-white/75">Shay Elbaz</span>
            <div className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
              <a href="#experience" className="transition hover:text-white">Experience</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
            <a
              href="https://docs.google.com/document/d/1dgApG8ZGOjg9J3u485PrWST9NO8w6S9QlqImvhsLL2c"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-black shadow-xl shadow-teal-400/20 transition hover:opacity-90"
            >
              View CV
            </a>
          </motion.nav>
        </div>
      </div>

      <Hero />

      <main className="max-w-7xl mx-auto px-6 pb-32 pt-16 lg:pb-40 lg:pt-24 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr] gap-16 xl:gap-24">
          <div className="space-y-28">
            <section id="summary">
              <SectionHeading icon={Code2} title="Professional Summary" />
              <div className="glass rounded-[2.5rem] border border-white/10 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.25)]">
                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed tracking-tight">
                  {DATA.summary}
                </p>
              </div>
            </section>

            <ExperienceSection />
            <ProjectsSection />
          </div>

          <Sidebar />
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 pb-16 text-center">
        <div className="inline-flex items-center gap-4 px-7 py-3 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.45em] text-white/30">
          Built with precision by Shay Elbaz • 2026
        </div>
      </footer>

      <motion.a
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05, translateY: -5 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/972542040604?text=${encodeURIComponent("Hi Shay elbaz, i came from your website, i would be happy to get more details.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] h-16 min-w-[64px] bg-[#25D366] text-white rounded-[2rem] shadow-2xl shadow-green-500/20 group flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out cursor-pointer hover:px-6"
      >
        <div className="flex items-center gap-0 group-hover:gap-3 transition-all duration-500">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <WhatsAppIcon className="w-full h-full relative z-10" />
          </div>
          <span className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out font-black text-xs lg:text-sm uppercase tracking-widest whitespace-nowrap overflow-hidden">
            Chat on WhatsApp
          </span>
        </div>
      </motion.a>
    </div>
  );
}
