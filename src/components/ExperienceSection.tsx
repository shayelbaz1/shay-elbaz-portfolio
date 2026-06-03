import { motion } from "motion/react";
import { ChevronRight, Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { ANIMATION_VARIANTS, THEME } from "../constants/theme";
import { SectionHeading } from "./Shared";

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: THEME.animation.durations.scrollReveal, delay: index * THEME.animation.stagger.md }}
      className="group glass-strong rounded-[2.5rem] border border-white/10 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.22)]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <span className="inline-flex rounded-full bg-teal-500/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-teal-300/90">
            {exp.period}
          </span>
          <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white transition group-hover:text-teal-300">
            {exp.company}
          </h3>
        </div>
        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
          {exp.role.split(" | ")[0]}
        </p>
      </div>
      <p className="mt-8 text-lg leading-8 text-white/80 tracking-tight">
        {exp.description}
      </p>
      {exp.achievements?.length > 0 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {exp.achievements.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: THEME.animation.durations.scrollReveal, delay: i * 0.05 }}
              className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-300" />
              <p className="text-sm leading-7 text-white/70">{item}</p>
            </motion.div>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeading icon={Code2} title="Professional Journey" />
      <div className="space-y-10">
        {DATA.experience.map((exp, idx) => (
          <ExperienceItem key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}
