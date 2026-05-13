/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Download
} from "lucide-react";
import React, { useState, useEffect } from "react";
import profileImg from "./assets/images/regenerated_image_1778670822728.jpg";

const DATA = {
  name: "Shay Elbaz",
  title: "Senior Full-Stack & Mobile Developer | Tech Lead",
  contact: {
    location: "Hod Hasharon, Israel",
    phone: "054-2040604",
    email: "shaysha6@gmail.com",
    linkedin: "https://www.linkedin.com/in/Shay-Elbaz",
    github: "https://github.com/ShayElbaz1"
  },
  summary: "Senior Full-Stack & Mobile Expert with 6+ years of experience building scalable web and mobile applications for major financial and governmental institutions. Specializing in React, React Native, Flutter, Node.js, and AWS. B.Sc. in Computer Science.",
  skills: {
    "Full-Stack & Mobile": ["React Native", "React", "Vue.js", "Flutter"],
    "Backend": ["Node.js", "Express", "Python"],
    "Cloud & Infrastructure": ["AWS (Lambda, S3, EC2)", "DigitalOcean", "MongoDB", "SQL"],
    "Leadership": ["Team Mentorship", "Project Management", "AI Tools (Cursor, Claude, Copilot)"]
  },
  experience: [
    {
      company: "Matrix",
      role: "Senior React Native Developer | Team Lead",
      period: "15/06/2025 – Present",
      description: "Team Lead of mobile development for major clients as Israel Electric Corporation (IEC), Leumi Card, Israel Post, and Ramat Gan Municipality. Focusing on building secure, high-scale React Native applications and digitizing complex public and financial services. Delivering scalable solutions from architecture to production.",
      achievements: []
    },
    {
      company: "LS Technologies",
      role: "Senior Full-Stack & Mobile Developer",
      period: "01/09/2021 – 15/06/2025",
      description: "Led the end-to-end development of complex web and mobile applications using React, React Native, and Node.js. Managed the full project lifecycle, providing technical leadership and mentorship to the development team. Architected scalable cloud infrastructures on AWS, ensuring high availability and system performance.",
      achievements: []
    },
    {
      company: "Bitin.co.il",
      role: "Full-Stack Developer",
      period: "2020 – 01/09/2021",
      description: "Developed a cryptocurrency trading platform and managed high-traffic WordPress websites. Optimized UI/UX components to enhance platform scalability and user retention.",
      achievements: []
    }
  ],
  education: [
    {
      institution: "Ashkelon Academic College",
      degree: "B.Sc. Computer Science",
      period: "2016 – 2019"
    },
    {
      institution: "Coding Academy",
      degree: "Full Stack Bootcamp",
      period: "2020"
    }
  ],
  projects: [
    {
      name: "Shavve App - שווה",
      description: "Developed and launched a high-traffic fitness & events mobile platform serving 100,000+ active users.",
      details: "Full-stack ownership: Built the mobile application (React Native) and a robust, scalable backend (Node.js) on AWS.",
      tags: ["React Native", "Node.js", "AWS", "Large Scale"]
    }
  ],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Fluent" },
    { name: "French", level: "Citizenship" }
  ],
  technicalFocus: [
    "React Native", "React", "Vue.js", "Flutter", "Node.js", "Express", 
    "AWS", "MongoDB", "SQL", "WordPress", "Python", 
    "GitHub Copilot", "Cursor", "Claude"
  ]
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode, icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-8 group">
    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-all">
      <Icon className="w-5 h-5 text-teal-400" />
    </div>
    <h2 className="text-2xl font-bold tracking-tight text-white">{children}</h2>
    <div className="flex-grow h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className = "" }: CardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all hover:bg-white/[0.07] ${className}`}
  >
    {children}
  </motion.div>
);

const BackgroundBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-float opacity-50" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-float opacity-50" style={{ animationDelay: '-2s' }} />
    <div className="absolute top-[20%] right-[10%] w-px h-[40vh] bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
    <div className="absolute top-[40%] left-[5%] w-px h-[30vh] bg-gradient-to-b from-transparent via-teal-400/10 to-transparent" />
    <div className="fixed top-0 left-0 w-full h-1 z-[100] origin-left bg-teal-500 shadow-[0_0_15px_rgba(45,212,191,0.5)]" id="scroll-progress" />
  </div>
);

const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollProgress.style.transform = `scaleX(${progress / 100})`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.05), transparent 80%)`
      }}
    />
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      <BackgroundBlobs />
      <Spotlight />
      
      {/* Header / Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-16 lg:pt-32 pb-16 border-b border-white/5 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start text-center lg:text-left">
          {/* Profile Image Wrap */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8 
            }}
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

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl lg:text-9xl font-black tracking-tighter text-white uppercase leading-[0.8] mb-6"
              >
                Shay <span className="text-teal-400">Elbaz</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="text-xl lg:text-3xl font-bold text-white/60 tracking-tight uppercase mb-8 max-w-2xl">
                  {DATA.title}
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                  <ContactInfo icon={MapPin} text={DATA.contact.location} />
                  <ContactInfo icon={Phone} text={DATA.contact.phone} />
                  <ContactInfo icon={Mail} text={DATA.contact.email} />
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <motion.a 
                    whileHover={{ scale: 1.02, translateY: -2 }}
                    whileTap={{ scale: 0.98 }}
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
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 relative z-10">
        
        {/* Left Column: Core Content */}
        <div className="space-y-32">
          
          {/* Summary Section */}
          <section id="summary">
            <h2 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-400/30" />
              Professional Summary
            </h2>
            <p className="text-2xl lg:text-4xl text-white font-medium leading-[1.3] lg:leading-[1.2] tracking-tight">
              {DATA.summary}
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <h2 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-16 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-400/30" />
              Professional Journey
            </h2>
            <div className="space-y-20">
              {DATA.experience.map((exp, idx) => (
                <ExperienceItem key={idx} exp={exp} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-16 flex items-center gap-3">
              <span className="w-8 h-px bg-teal-400/30" />
              Key Project Highlight
            </h2>
            {DATA.projects.map((project, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-teal-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Card className="relative overflow-hidden p-8 lg:p-12 border-white/10 hover:border-teal-500/30 transition-all">
                  <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-black font-black text-xl">S</div>
                        <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase">{project.name.split(' - ')[0]}</h3>
                      </div>
                      <p className="text-lg lg:text-xl text-teal-400 font-bold mb-6 italic">{project.description}</p>
                      <p className="text-white/70 text-lg leading-relaxed mb-8 font-medium">{project.details}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-black uppercase tracking-widest text-white/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:block text-right">
                      <span className="block text-6xl font-black text-white tracking-tighter leading-none">100K+</span>
                      <span className="block text-xs text-white/30 font-black uppercase tracking-widest mt-2">Active Users</span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column: Sidebar Stats/Skills */}
        <aside className="space-y-32 lg:sticky lg:top-12 h-fit">
          
          {/* Tech Stack */}
          <section>
            <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-8">Technical arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {DATA.technicalFocus.map((skill, i) => (
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  key={i} 
                  className="px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-xs font-bold uppercase tracking-wider text-white hover:border-teal-400/30 hover:bg-teal-400/5 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-8">Foundations</h3>
            <div className="space-y-8">
              {DATA.education.map((edu, i) => (
                <div key={i} className="group border-l-2 border-white/5 pl-6 hover:border-teal-500/50 transition-all">
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-widest block mb-2">{edu.period}</span>
                  <h4 className="text-lg font-black text-white leading-tight group-hover:text-teal-400 transition-colors uppercase tracking-tight">{edu.degree}</h4>
                  <p className="text-xs text-white/50 font-bold uppercase tracking-widest mt-1">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
             <h3 className="text-sm font-black text-teal-400 uppercase tracking-widest mb-8">World Presence</h3>
             <div className="grid grid-cols-2 gap-6">
               {DATA.languages.map((lang, idx) => (
                 <div key={idx} className="flex flex-col">
                   <span className="text-white font-black text-sm uppercase tracking-tight">{lang.name}</span>
                   <span className="text-teal-400/60 text-[10px] font-black uppercase tracking-widest mt-1">{lang.level}</span>
                 </div>
               ))}
             </div>
          </section>

        </aside>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 text-center">
        <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          Built with Precision by Shay Elbaz • 2026
        </div>
      </footer>
    </div>
  );
}

function ContactInfo({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full text-white/60 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">
      <Icon className="w-3.5 h-3.5 text-teal-500" />
      {text}
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="p-4 bg-white/5 border border-white/5 rounded-2xl text-white hover:border-teal-500/50 hover:bg-teal-500/10 transition-all"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

function ExperienceItem({ exp }: { exp: any; key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 mb-6">
        <div>
          <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-2 block">{exp.period}</span>
          <h3 className="text-2xl lg:text-4xl font-black text-white group-hover:text-teal-400 transition-colors tracking-tighter uppercase">{exp.company}</h3>
        </div>
        <p className="text-sm font-black text-teal-400/80 uppercase tracking-widest bg-teal-500/5 px-3 py-1 rounded-lg border border-teal-500/10">
          {exp.role.split(' | ')[0]}
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



