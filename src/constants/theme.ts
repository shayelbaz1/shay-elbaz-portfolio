// Theme configuration with animation timings, colors, and spacing
export const THEME = {
  colors: {
    primary: "#2dd4bf", // teal-500
    primaryLight: "#14b8a6", // teal-600
    accent: "#0d9488", // teal-700
    background: "#050505",
    surface: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.1)",
    text: "#e5e5e5",
    textMuted: "rgba(255, 255, 255, 0.6)"
  },
  animation: {
    // Standard durations
    durations: {
      fast: 0.15,
      normal: 0.3,
      slow: 0.5,
      slower: 0.7,
      verySlow: 1.0
    },
    // Stagger delays
    stagger: {
      xs: 0.05,
      sm: 0.1,
      md: 0.15,
      lg: 0.2
    },
    // Spring configurations
    spring: {
      default: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
      snappy: { type: "spring", stiffness: 200, damping: 15, duration: 0.6 },
      gentle: { type: "spring", stiffness: 50, damping: 25, duration: 1.0 }
    }
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  transitions: {
    smooth: "transition-all duration-300 ease-out",
    smoothSlow: "transition-all duration-500 ease-out"
  }
};

export const ANIMATION_VARIANTS = {
  // Hero animations
  hero: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
      }
    },
    item: {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }
  },
  // Scroll reveal animations
  scrollReveal: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  // Stagger animations
  stagger: {
    container: (delay = 0.05) => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: delay }
      }
    }),
    item: {
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0 }
    }
  },
  // Fade animations
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } }
  },
  // Scale animations
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  },
  // Slide animations
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }
};
