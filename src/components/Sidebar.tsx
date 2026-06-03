import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { THEME } from "../constants/theme";
import { SectionHeading } from "./Shared";

export function Sidebar() {
  return (
    <aside className="space-y-10 lg:sticky lg:top-28 h-fit">
      <section className="glass rounded-[2.5rem] border border-white/10 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.22)]">
        <SectionHeading icon={Code2} title="Technical Arsenal" />
        <div className="flex flex-wrap gap-3">
          {DATA.technicalFocus.map((skill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * THEME.animation.stagger.xs, duration: THEME.animation.durations.scrollReveal }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-teal-400/40 hover:bg-white/10"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="glass rounded-[2.5rem] border border-white/10 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.22)]">
        <SectionHeading icon={Code2} title="Foundations" />
        <div className="space-y-6">
          {DATA.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * THEME.animation.stagger.xs, duration: THEME.animation.durations.scrollReveal }}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-teal-300/80">{edu.period}</span>
              <h4 className="mt-3 text-lg font-extrabold uppercase tracking-tight text-white">{edu.degree}</h4>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/50">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="glass rounded-[2.5rem] border border-white/10 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.22)]">
        <SectionHeading icon={Code2} title="World Presence" />
        <div className="grid grid-cols-2 gap-4">
          {DATA.languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * THEME.animation.stagger.xs, duration: THEME.animation.durations.scrollReveal }}
              className="rounded-3xl bg-white/5 p-4 border border-white/10"
            >
              <span className="text-sm font-black uppercase tracking-tight text-white">{lang.name}</span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.35em] text-teal-300/80">{lang.level}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </aside>
  );
}
