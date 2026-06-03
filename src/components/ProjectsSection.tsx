import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { ANIMATION_VARIANTS, THEME } from "../constants/theme";
import { Card, SectionHeading } from "./Shared";

export function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeading icon={Code2} title="Featured Products" />
      <div className="grid gap-10 lg:grid-cols-2">
        {DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: THEME.animation.durations.scrollReveal, delay: idx * THEME.animation.stagger.md }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-teal-500/10 via-transparent to-cyan-400/10 blur-2xl opacity-80" />
            <Card className="relative overflow-hidden p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:gap-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-400 text-black text-xl font-black shadow-lg shadow-teal-500/20">
                    {project.name[0]}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-teal-300/90">{project.category || "Core System"}</p>
                    <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xl text-white/70 leading-relaxed tracking-tight">
                  {project.description}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-xs uppercase tracking-[0.35em] text-white/50">Platform</span>
                    <p className="mt-3 text-base font-semibold text-white">{project.platform || "Mobile + Web"}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-xs uppercase tracking-[0.35em] text-white/50">Impact</span>
                    <p className="mt-3 text-base font-semibold text-white">100K+ active users</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
