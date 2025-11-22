# Meriton Selimi Digital Studio 🚀

> **Premium Web Design, Accelerated by AI**

A modern, high-performance agency website built with SvelteKit, showcasing the "AI-Enhanced Boutique Agency" positioning.

---

## 🎯 Project Overview

This website bridges the gap between **cheap AI builders** and **expensive traditional agencies**:
- **Speed of AI**: Launch-ready in days, not months
- **Quality of Craft**: Hand-designed, not template-based

## 💼 Services & Pricing

### Launchpad ($500)
- 5-page custom website
- Mobile-responsive design
- SEO foundation
- Contact forms
- 2 revision rounds
- **Timeline**: 7 Days

### Growth ($1,200) - *Most Popular*
- Everything in Launchpad
- CMS integration
- Advanced SEO + schema
- AI chatbot setup
- Performance optimization
- Unlimited revisions
- 30-day support
- **Timeline**: 10-14 Days

### Maintain ($700 one-time + $300/mo)
- Ongoing Support
- Maintenance
- Optimization
- Updates
- Long-term partnership
- **Timeline**: Ongoing

---

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) (Static Site Generation)
- **Styling**: Vanilla CSS with Design System (Variables, Fluid Typography)
- **Animations**: CSS Transitions & Keyframes + `svelte-motion`
- **Fonts**: Inter (body) + Outfit (headings)
- **SEO**: `svelte-meta-tags` + JSON-LD Structured Data
- **Deployment**: Netlify (Adapter configured)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## 🎨 Design System

### Color Palette
- **Background**: Dark Mode (`#050505`)
- **Text**: White (`#ffffff`) & Muted (`rgba(255,255,255,0.6)`)
- **Accents**: Subtle Gradients & Glassmorphism

### Typography
- **Headings**: Outfit (700/800 weight)
- **Body**: Inter (400/600 weight)
- **Fluid Scaling**: Uses `clamp()` for responsive typography across all devices.

### Mobile Optimization
- **Navbar**: Adaptive layout with truncated logo and optimized padding for small screens.
- **Hero**: Adjusted font scaling to prevent overflow.
- **Touch Targets**: Sized for easy interaction.

---

## 📁 Project Structure

```
agency-redesign/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navbar.svelte       # Responsive navigation
│   │   │   ├── Hero.svelte         # Animated hero section
│   │   │   ├── ProblemSolution.svelte # Comparison grid
│   │   │   └── Services.svelte     # Pricing packages
│   │   └── index.js
│   ├── routes/
│   │   ├── +layout.svelte          # Global layout & styles
│   │   └── +page.svelte            # Homepage composition
│   └── app.css                     # Global variables & utilities
├── static/                         # Static assets (robots.txt, etc.)
└── netlify.toml                    # Deployment configuration
```

---

## ✅ Current Status

- **Production Ready**: Deployed to Netlify.
- **Mobile Fixed**: Navbar and Hero section optimized for iPhone SE and other small devices.
- **SEO Configured**: Meta tags and structured data in place.
- **Performance**: 100/100 Lighthouse score target (Static Generation + Minimal JS).

---

## 🤝 Support

For questions or customization requests:
- **Email**: meritonmk1@gmail.com
- **Site**: [meriton.selimi.tech](https://meriton.selimi.tech)

---

**Built with ❤️ using SvelteKit**
