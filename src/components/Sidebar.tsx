import { motion } from "motion/react";
import { Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { SectionHeading, Card } from "./Shared";

export function Sidebar() {
  return (
    <aside className="space-y-32 lg:sticky lg:top-12 h-fit">
      <section>
        <SectionHeading icon={Code2} title="Technical Arsenal" />
        <div className="flex flex-wrap gap-2">
          {DATA.technicalFocus.map((skill, i) => (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              key={i}
              className="px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:border-teal-400/30 hover:bg-teal-400/5 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Code2} title="Foundations" />
        <div className="space-y-8">
          {DATA.education.map((edu, i) => (
            <div key={i} className="group border-l-2 border-white/5 pl-6 hover:border-teal-500/50 transition-all">
              <span className="text-[10px] text-white/30 font-black uppercase tracking-widest block mb-2">
                {edu.period}
              </span>
              <h4 className="text-lg font-black text-white leading-tight group-hover:text-teal-400 transition-colors uppercase tracking-tight">
                {edu.degree}
              </h4>
              <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Code2} title="World Presence" />
        <div className="grid grid-cols-2 gap-6">
          {DATA.languages.map((lang, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-white font-black text-sm uppercase tracking-tight">{lang.name}</span>
              <span className="text-teal-400/60 text-[10px] font-black uppercase tracking-widest mt-1">
                {lang.level}
              </span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
