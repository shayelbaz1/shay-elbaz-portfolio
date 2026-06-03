// Theme configuration with animation timings, colors, and spacing
// Aligned with design system: design-system/shay-elbaz-portfolio/pages/portfolio-hero.md
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
    // Design system aligned durations
    durations: {
      microHover: 0.2, // Button/link hover
      scrollReveal: 0.5, // Cards on scroll
      heroEntrance: 0.8, // Hero load
      standard: 0.3,
      fast: 0.15
    },
    // Stagger delays (design system: 50-100ms)
    stagger: {
      xs: 0.04,
      sm: 0.06,
      md: 0.08,
      lg: 0.1
    },
    // Spring configurations optimized for tech portfolio
    spring: {
      heroEnter: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 },
      snappy: { type: "spring", stiffness: 200, damping: 15, duration: 0.6 },
      gentle: { type: "spring", stiffness: 50, damping: 25, duration: 1.0 }
    }
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem", // 32px - hero gaps
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "8rem" // 128px - section gaps
  },
  transitions: {
    smooth: "transition-all duration-200 ease-out",
    smoothNormal: "transition-all duration-300 ease-out",
    smoothSlow: "transition-all duration-500 ease-out"
  },
  // Easing functions from design system
  easing: {
    heroLoad: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Spring-like entrance
    scrollReveal: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth card reveal
    micro: "ease-out" // Button/link hover
  }
};

export const ANIMATION_VARIANTS = {
  // Hero animations (0.8s entrance, staggered items)
  hero: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: THEME.animation.stagger.md,
          delayChildren: 0.1,
          duration: 0.6
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 15 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: THEME.animation.durations.scrollReveal, ease: "easeOut" }
      }
    }
  },

  // Scroll reveal animations (0.5s smooth)
  scrollReveal: {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: THEME.animation.durations.scrollReveal,
        ease: "easeOut"
      }
    }
  },

  // Stagger animations for lists
  stagger: {
    container: (delay = THEME.animation.stagger.md) => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
          duration: 0.4
        }
      }
    }),
    item: {
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: THEME.animation.durations.scrollReveal }
      }
    }
  },

  // Fade animations
  fade: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: THEME.animation.durations.scrollReveal }
    }
  },

  // Scale animations for cards
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: THEME.animation.durations.scrollReveal,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  },

  // Slide up animations
  slideUp: {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: THEME.animation.durations.scrollReveal,
        ease: "easeOut"
      }
    }
  },

  // Slide left animations
  slideLeft: {
    hidden: { opacity: 0, x: -25 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: THEME.animation.durations.scrollReveal,
        ease: "easeOut"
      }
    }
  },

  // Hover effects for cards
  cardHover: {
    whileHover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(45, 212, 191, 0.2)",
      transition: { duration: THEME.animation.durations.microHover }
    }
  },

  // Button interactions (0.2s micro)
  buttonHover: {
    whileHover: {
      scale: 1.02,
      y: -2,
      transition: { duration: THEME.animation.durations.microHover }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  }
};
