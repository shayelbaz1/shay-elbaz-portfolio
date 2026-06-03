import { motion } from "motion/react";
import { ChevronRight, Code2 } from "lucide-react";
import { DATA } from "../constants/data";
import { SectionHeading } from "./Shared";

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 mb-6">
        <div>
          <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-2 block">
            {exp.period}
          </span>
          <h3 className="text-2xl lg:text-4xl font-black text-white group-hover:text-teal-400 transition-colors tracking-tighter uppercase">
            {exp.company}
          </h3>
        </div>
        <p className="text-sm font-black text-teal-400/80 uppercase tracking-widest bg-teal-500/5 px-3 py-1 rounded-lg border border-teal-500/10">
          {exp.role.split(" | ")[0]}
        </p>
      </div>
      <p className="text-lg lg:text-xl text-white font-medium leading-relaxed mb-8 opacity-90">
        {exp.description}
      </p>
      {exp.achievements?.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white/5 pt-8">
          {exp.achievements.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <ChevronRight className="w-4 h-4 text-teal-500 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
              <span className="text-sm text-white/50 leading-relaxed font-medium group-hover/item:text-white/70 transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeading icon={Code2} title="Professional Journey" />
      <div className="space-y-20">
        {DATA.experience.map((exp, idx) => (
          <ExperienceItem key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}
