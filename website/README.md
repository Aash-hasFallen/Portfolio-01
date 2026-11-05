# Aashray Biswal — Personal Portfolio

> High-performance, Japanese editorial brutalist personal portfolio engineered with React, TypeScript, Vite, Lenis smooth scrolling, GSAP animations, and Tailwind CSS.

---

## 01. Visual & Engineering Identity

This portfolio translates an approved Google Stitch editorial creative direction into a production-grade single-page application. It combines:

- **Japanese Editorial Brutalism:** Strict 0px sharp corners, asymmetrical layouts, registration marks (`+`), and architectural borders.
- **Anime-Inspired Aesthetics:** Restrained crimson illumination (`#E60012`), tactile dot-matrix halftones, and protagonist character artwork framing.
- **Cinematic Smooth Scrolling:** Fluid Lenis momentum interpolation synchronized with GSAP ScrollTrigger.
- **Accessible & Responsive:** Full keyboard navigation, ARIA dialog modal semantics, focus management, zero horizontal overflow across 8 standard viewports (320px to 1920px), and `prefers-reduced-motion` compliance.

---

## 02. Technology Stack

- **Framework:** React 19 (TypeScript)
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 + Custom Angular & Layered CSS System
- **Smooth Scrolling Engine:** Lenis v1.3
- **Animation Orchestration:** GSAP 3 + ScrollTrigger
- **Icons:** SVG Icon System & Lucide React
- **Target Deployment:** GitHub + Vercel

---

## 03. Project Structure

```text
website/
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon
│   ├── protagonist.png         # Retina-optimized character artwork (800x800)
│   └── protagonist-512.png     # Web-optimized character artwork (512x512)
├── src/
│   ├── assets/                 # Local image source files
│   ├── components/             # Reusable UI components
│   │   ├── AngularButton.tsx   # Chamfered angular buttons with crimson glow
│   │   ├── Header.tsx          # Editorial header & mobile navigation drawer
│   │   ├── ProjectModal.tsx    # Accessible modal dialog with focus management
│   │   ├── RegisterMarks.tsx   # Perimeter drafting registration marks
│   │   ├── SectionHeading.tsx  # Modular section index and Anton display titles
│   │   └── SocialIcons.tsx     # Custom SVG brand icons (GitHub, LinkedIn, Kaggle)
│   ├── data/
│   │   └── portfolioData.ts    # Decoupled portfolio content and structured schemas
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Reusable GSAP scroll-triggered reveal hook
│   ├── lib/
│   │   ├── animation.ts        # GSAP & ScrollTrigger initialization & helpers
│   │   └── LenisContext.tsx    # Coordinated Lenis RAF loop & scroll lock controls
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx     # 01. Opening statement & portrait artwork
│   │   ├── ExploreSection.tsx  # 02. Directory index overview
│   │   ├── AboutSection.tsx    # 03. Profile, approach & academic foundation
│   │   ├── ExperienceSection.tsx # 04. Education & co-curricular timeline
│   │   ├── ProjectsSection.tsx # 05. 3 Featured case studies
│   │   ├── SkillsSection.tsx   # 06. 5-Domain technical capability catalog
│   │   ├── ExperimentsSection.tsx # 07. Speculative creative sandboxes
│   │   ├── ContactSection.tsx  # 08. Direct email & verified profile links
│   │   └── Footer.tsx          # Colophon & return-to-top trigger
│   ├── styles/
│   │   └── globals.css         # Global tokens, button clip-paths, borders & glows
│   ├── App.tsx                 # Root application container & section observer
│   ├── main.tsx                # Entry point
│   └── vite-env.d.ts           # Vite client type declarations
├── web/                        # Original source design archive (preserved intact)
├── test-suite.mjs              # Automated CDP end-to-end testing suite
├── index.html                  # Shell with Anton, Space Grotesk & Space Mono
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 04. Development & Build Commands

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Runs the Vite development server at `http://127.0.0.1:3000/`.

### Run TypeScript Check & Production Build
```bash
npm run build
```
Type-checks all TypeScript files via `tsc` and compiles optimized bundles to `dist/`.

### Preview Production Build
```bash
npm run preview
```
Spawns a local preview server on `http://127.0.0.1:4173/`.

### Run Automated QA Test Suite
```bash
node test-suite.mjs
```
Executes Chrome DevTools Protocol (CDP) automated browser testing verifying SEO metadata, section anchors, modal open/close lifecycles, mobile drawer interactions, and horizontal overflow across 8 device viewports.

---

## 05. Verified Sections & Features

1. **Header & Navigation (`#intro`):**
   - Fixed header with backdrop blur and crimson accent logotype.
   - Smooth desktop navigation with active section tracking.
   - Mobile navigation drawer with slide transition, scroll lock, and ESC/link dismissal.
2. **01. Hero / Intro (`#intro`):**
   - Bold Japanese editorial typography with crimson glow text-shadows.
   - Asymmetric protagonist portrait frame with layered crimson depth plate, halftones, and drafting crosses.
   - Smooth CTAs directing to `#projects` and `#contact`.
3. **02. Explore Directory (`#explore`):**
   - 6 Interactive directory index cards with crimson hover lift linking to `#about`, `#experience`, `#projects`, `#skills`, `#experiments`, and `#contact`.
4. **03. About (`#about`):**
   - Dual-column manifesto, academic status at Parul University, and dual discipline/approach cards.
5. **04. Experience & Education (`#experience`):**
   - B.Tech in CSE (AI & Data Science, 2025–2029) at Parul University.
   - Hackathons & Competitive Prototyping.
   - Research & Open-Source Contributions.
6. **05. Selected Projects (`#projects`):**
   - AI Merchant Growth Agent (LLM Integration, FastAPI, Python).
   - GestureFlow (OpenCV, MediaPipe, Python).
   - Spotify Artist Analytics Dashboard (R, Shiny, Plotly).
   - Interactive Project Detail Modal with ESC dismissal, backdrop dismissal, close buttons, and focus restoration.
7. **06. Technical Skills (`#skills`):**
   - 5 Categorized domains: Programming, Web & Backend, AI & Data, Systems & Tools, Cloud & Infrastructure.
   - No fake progress bars or arbitrary percentage meters.
8. **07. Experiments (`#experiments`):**
   - 3 Prototypes: Latent Vector Morphing, Gesture Synthesis Engine, Rule-Engine Prompt Topology.
9. **08. Contact (`#contact`):**
   - Direct `mailto:biswalaashray@gmail.com` link.
   - Verified Caution Notice: `"ALTERNATE INBOX — USED TO DIVERT TRAFFIC FROM PRIMARY EMAIL."`
   - Verified external profile links:
     - GitHub: `https://github.com/Aash-hasFallen`
     - LinkedIn: `https://www.linkedin.com/in/aashray-biswal/`
     - Kaggle: `https://www.kaggle.com/aashraybiswal`
   - Back to top trigger `#intro`.

---

## 06. Deployment Instructions (Vercel)

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel
```
Select default settings:
- **Framework Preset:** Vite
- **Root Directory:** `./`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

### Option B: Via GitHub Repository
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Aashray Biswal editorial portfolio"
   git branch -M main
   git remote add origin https://github.com/Aash-hasFallen/<repo-name>.git
   git push -u origin main
   ```
2. Import project in Vercel Dashboard.
3. Vercel automatically detects `Vite` and configures the build settings (`npm run build` -> `dist`).

---

## 07. Future Admin Architecture Readiness

Content is decoupled into `src/data/portfolioData.ts`. This structure is architected to seamlessly plug into a backend such as Supabase with Row Level Security (RLS) in the future:
- Project interfaces (`Project`), Skill categories (`SkillCategory`), Timeline logs (`ExperienceItem`).
- No hardcoded inline strings in UI components.
- Zero client-side fake credentials or insecure bypasses.

---

## 08. License

© 2025 Aashray Biswal. All Rights Reserved.

