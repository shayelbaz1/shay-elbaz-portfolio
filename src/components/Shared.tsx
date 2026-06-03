import { motion } from "motion/react";
import { ElementType, ReactNode, useEffect, useState } from "react";
import { THEME, ANIMATION_VARIANTS } from "../constants/theme";

export function SectionHeading({ icon: Icon, title }: { icon: ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 group">
      <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 group-hover:bg-teal-500/20 transition-all">
        <Icon className="w-5 h-5 text-teal-400" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="flex-grow h-px bg-gradient-to-r from-teal-500/20 to-transparent ml-4" />
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: THEME.animation.durations.scrollReveal, ease: "easeOut" }}
      className={`p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/30 transition-all hover:bg-white/[0.07] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ContactInfo({ icon: Icon, text }: { icon: ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full text-white/60 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">
      <Icon className="w-3.5 h-3.5 text-teal-500" />
      {text}
    </div>
  );
}

export function SocialLink({ href, icon: Icon }: { href: string; icon: ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-white/5 border border-white/5 rounded-2xl text-white hover:border-teal-500/50 hover:bg-teal-500/10 transition-all"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-float opacity-50" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-float opacity-50"
        style={{ animationDelay: "-2s" }}
      />
      <div className="absolute top-[20%] right-[10%] w-px h-[40vh] bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
      <div className="absolute top-[40%] left-[5%] w-px h-[30vh] bg-gradient-to-b from-transparent via-teal-400/10 to-transparent" />
      <div className="fixed top-0 left-0 w-full h-1 z-[100] origin-left bg-teal-500 shadow-[0_0_15px_rgba(45,212,191,0.5)]" id="scroll-progress" />
    </div>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
      <defs>
        <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)" />
      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" />
      <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" />
      <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" />
      <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" />
    </svg>
  );
}

export function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => {
      const scrollProgress = document.getElementById("scroll-progress");
      if (!scrollProgress) return;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      scrollProgress.style.transform = `scaleX(${progress / 100})`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

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
}
