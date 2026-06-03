import { motion } from "motion/react";
import { Code2, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profileImg from "../assets/images/regenerated_image_1778670822728.jpg";
import { DATA } from "../constants/data";
import { ANIMATION_VARIANTS, THEME } from "../constants/theme";
import { ContactInfo, SocialLink } from "./Shared";

export function Hero() {
  const titleWords = DATA.name.split(" ");

  return (
    <header className="max-w-6xl mx-auto px-6 pt-16 lg:pt-32 pb-16 border-b border-white/5 relative z-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start text-center lg:text-left">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={THEME.animation.spring.heroEnter}
          className="w-44 h-44 lg:w-64 lg:h-64 shrink-0 relative"
        >
          <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full" />
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-teal-500/30 shadow-2xl relative z-10 p-1.5 bg-[#121212] group">
            <img
              src={profileImg}
              alt="Shay Elbaz"
              className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/0 via-teal-500/0 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 p-4 bg-teal-500 rounded-2xl text-black shadow-2xl z-20 border-4 border-[#050505]"
          >
            <Code2 className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            {/* Name - Staggered words */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: THEME.animation.durations.heroEntrance }}
              className="text-5xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8] mb-6"
            >
              <motion.div
                variants={ANIMATION_VARIANTS.stagger.container(THEME.animation.stagger.lg)}
                initial="hidden"
                animate="show"
                className="inline"
              >
                {titleWords.map((word, i) => (
                  <motion.span key={`${word}-${i}`} variants={ANIMATION_VARIANTS.stagger.item} className="inline-block mr-3">
                    {word === "Elbaz" ? (
                      <span className="text-teal-400">{word}</span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.div>
            </motion.h1>

            {/* Title, Contact Info, and Buttons */}
            <motion.div
              variants={ANIMATION_VARIANTS.hero.container}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.p
                variants={ANIMATION_VARIANTS.hero.item}
                className="text-xl lg:text-3xl font-bold text-white/60 tracking-tight uppercase mb-8 max-w-2xl"
              >
                {DATA.title}
              </motion.p>

              <motion.div variants={ANIMATION_VARIANTS.hero.item} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <ContactInfo icon={MapPin} text={DATA.contact.location} />
                <ContactInfo icon={Phone} text={DATA.contact.phone} />
                <ContactInfo icon={Mail} text={DATA.contact.email} />
              </motion.div>

              <motion.div variants={ANIMATION_VARIANTS.hero.item} className="flex flex-wrap justify-center lg:justify-start gap-5">
                <motion.a
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: THEME.animation.durations.microHover }}
                  href="https://docs.google.com/document/d/1dgApG8ZGOjg9J3u485PrWST9NO8w6S9QlqImvhsLL2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-10 py-5 bg-teal-500 text-black font-black text-sm lg:text-base rounded-2xl hover:bg-teal-400 transition-all group shadow-xl shadow-teal-500/30"
                >
                  <ExternalLink className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                  VIEW FULL CV
                </motion.a>
                <div className="flex gap-3">
                  <SocialLink href={DATA.contact.linkedin} icon={Linkedin} />
                  <SocialLink href={DATA.contact.github} icon={Github} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
