# Shay Elbaz Portfolio - Hero Page Overrides

> Overrides master design system for the portfolio landing page.
> These rules take precedence over MASTER.md for this page.

---

## Page-Specific Rules

### Color Palette (Override)

| Role | Hex | Usage |
|------|-----|-------|
| Primary Accent | `#2dd4bf` | Teal-500 (keep existing) |
| Accent Light | `#14b8a6` | Teal-600 hover states |
| Background | `#050505` | Deep black (keep existing) |
| Surface | `rgba(255,255,255,0.05)` | Glass effect |
| Text Primary | `#e5e5e5` | White text |
| Text Muted | `rgba(255,255,255,0.6)` | Secondary text |

**Rationale:** Glassmorphic + minimalist is superior to vibrant for tech portfolios. Teal conveys trust, innovation, and technical competence.

### Typography (Override)

- **Heading Font:** Inter (keep existing)
- **Code Font:** JetBrains Mono (keep existing)
- **Mood:** professional, minimalist, elegant, technical
- **Letter Spacing:** Increase by 0.5% for tech credibility

### Animation Timing

| Element | Duration | Easing | Use Case |
|---------|----------|--------|----------|
| Hero load | 0.8s | cubic-bezier(0.34, 1.56, 0.64, 1) | Entrance |
| Scroll reveal | 0.5s | cubic-bezier(0.25, 0.46, 0.45, 0.94) | Cards on scroll |
| Hover micro | 0.2s | ease-out | Button/link hover |
| Stagger delay | 0.05-0.1s | - | Between items |

**Key Rule:** Never exceed 300ms for micro-interactions. Respect prefers-reduced-motion.

### Spacing (Override)

| Token | Value | Usage |
|-------|-------|-------|
| `--gap-hero` | `2rem` (32px) | Hero section gaps |
| `--gap-section` | `8rem` (128px) | Between sections |
| `--gap-card` | `1.5rem` (24px) | Inside cards |
| `--gap-stack` | `0.5rem` (8px) | Item stagger gaps |

### Shadow & Depth

```css
/* Glassmorphic effect */
.glass {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Teal glow on hover */
.glow-teal:hover {
  box-shadow: 0 0 30px rgba(45, 212, 191, 0.3);
  transition: box-shadow 0.3s ease-out;
}
```

### Component Overrides

#### Hero Title
- Font: Inter Bold, 80px (responsive: 48px on mobile)
- Letter spacing: -0.02em (tight)
- Gradient text: White → Teal (#2dd4bf)
- Animation: Fade-in + slide-left over 0.8s

#### Cards
- Background: `rgba(255,255,255,0.05)` (glass)
- Border: 1px solid `rgba(255,255,255,0.1)`
- Border-radius: 24px (not 12px)
- Hover: Border becomes `rgba(45,212,191,0.3)`, glow appears
- Transition: 200-250ms all

#### Contact Badges
- Padding: 8px 16px
- Border-radius: 20px (pill shape)
- Icon size: 14px
- Hover: Slight background lift

#### Buttons (CTA)
- Background: `#2dd4bf` (teal)
- Text: Black (high contrast)
- Padding: 12px 28px
- Border-radius: 16px
- Hover: Scale 1.02, shadow glow
- Active: Scale 0.98

---

## Pre-Delivery Checklist

- [x] No emojis as icons (using Lucide SVG)
- [x] cursor-pointer on all interactive elements
- [x] Hover states 200-300ms smooth transitions
- [x] Text contrast: 4.5:1+ (verified with teal on black)
- [x] Focus states visible for keyboard nav
- [x] Respect prefers-reduced-motion in JS animations
- [x] Responsive: 375px, 768px, 1024px, 1440px

---

## References

- **Product Type:** Senior Developer Portfolio
- **Industry:** Tech / SaaS
- **Stack:** React + Tailwind + Framer Motion
- **Style Category:** Glassmorphism + Minimalism
