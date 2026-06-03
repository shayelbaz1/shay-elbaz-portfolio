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

      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 relative z-10">
        <div className="space-y-32">
          <section id="summary">
            <SectionHeading icon={Code2} title="Professional Summary" />
            <p className="text-2xl lg:text-4xl text-white font-medium leading-[1.3] lg:leading-[1.2] tracking-tight">
              {DATA.summary}
            </p>
          </section>

          <ExperienceSection />
          <ProjectsSection />
        </div>

        <Sidebar />
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          Built with Precision by Shay Elbaz • 2026
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
