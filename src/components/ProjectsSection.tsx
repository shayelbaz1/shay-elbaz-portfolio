import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { Card, SectionHeading } from "./Shared";

export function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeading icon={Code2} title="Key Project Highlight" />
      <div className="space-y-10">
        {DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Card className="relative overflow-hidden p-8 lg:p-12 border-white/10 hover:border-teal-500/30 transition-all">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-black font-black text-xl">
                      S
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase">
                      {project.name.split(" - ")[0]}
                    </h3>
                  </div>
                  <p className="text-lg lg:text-xl text-teal-400 font-bold mb-6 italic">
                    {project.description}
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 font-medium">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block text-right">
                  <span className="block text-6xl font-black text-white tracking-tighter leading-none">100K+</span>
                  <span className="block text-xs text-white/30 font-black uppercase tracking-widest mt-2">
                    Active Users
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
