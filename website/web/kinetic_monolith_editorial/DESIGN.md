---
name: Kinetic Monolith Editorial
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#bb0018'
  on-secondary: '#ffffff'
  secondary-container: '#e3222a'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#858383'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410003'
  on-secondary-fixed-variant: '#930011'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 112px
    fontWeight: '700'
    lineHeight: 96px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-mono-tag:
    fontFamily: Space Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-mono-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.05em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes an experimental editorial identity intersecting computational rigor and architectural brutalism. Built specifically for an Artificial Intelligence & Data Science technologist, the aesthetic completely rejects current SaaS homogeny, generic glassmorphic panels, and soft consumer tech clichés.

### Core Tenets
- **Architectural Brutalism & Technical Truth:** UI components operate as printed editorial artifacts mixed with system consoles. Visible structures, exposed crosshairs, alignment coordinate grids, and registration marks treat the viewport as a drafting canvas.
- **Extreme Scale Contrast:** Massive typographic moments sit directly adjacent to ultra-compact technical metadata. The interface communicates authority through density, white space tension, and scale collisions rather than decorative layering.
- **Asymmetric Tension:** Balanced imbalance. Content avoids safe symmetrical center-alignments in favor of disciplined edge anchors, perimeter coordinates, hanging indices, and deliberate compositional pauses.

## Colors

The palette operates under a high-contrast tripartite color philosophy. Color is employed solely for structure, text contrast, and directional intent.

### Palette Architecture
- **Primary Dark (`#101010`):** Pitch black foundation used for primary text, solid blocks, graphic hairlines, and inverted interactive fills.
- **Primary Light / Canvas (`#F7F6F2`):** Warm off-white newsprint tone providing tactile paper warmth rather than sterile optical white.
- **Accent Red (`#F02D32`):** Pure editorial red reserved exclusively for technical alerts, bracketed actions, critical focal markers, live states, and inverted hover fills.
- **Graphite Neutral (`#2A2A2A`):** Deep technical tone for secondary data strings, terminal viewports, and structural grid rules in inverted contexts.
- **Hairline Borders (`#E5E3DC` / `#222222`):** Strict 1px dividers that physically separate sections and organize data streams without visual bloat.

### Theme Inversion
Dark mode is treated as a photographic negative rather than a soft darkened wash: background snaps to `#101010`, foreground surfaces shift to `#2A2A2A`, structural lines become `#222222`, and text shifts to `#F7F6F2`, retaining `#F02D32` as the unwavering focal vector.

## Typography

The typographic hierarchy enforces high-velocity collision between three distinct type engines:

1. **Space Grotesk (Display & Headlines):** Massive, heavy, assertive grotesque styling. Titles are tightly tracked and intentionally compressed to create monolithic visual impacts akin to physical broadsheet print headlines.
2. **Inter (Body Text):** Clear, objective, neutral workhorse. Provides maximum clarity for descriptive research abstracts, thesis documentation, and project case narratives without competing with display elements.
3. **Space Mono (Metadata, Indices & Code):** The technical spine. Used strictly for section numbering, dataset dimensions, coordinate markers, publication dates, and algorithmic syntax.

### Typesetting Rules
- Display titles must maintain tight negative letter spacing (`-0.03em` to `-0.04em`).
- Monospaced tags and bracket labels must always render in uppercase (`text-transform: uppercase`).
- Index counters (e.g., `01`, `02`, `// ARCHIVE`) must precede or hover over section headings using `Space Mono`.

## Layout & Spacing

Layout in this design system is strict, structural, and architectonic. It follows an exposed 12-column grid anchored by physical horizontal and vertical hairlines.

### Grid Anatomy
- **Desktop (>= 1024px):** 12-column modular grid with `3rem` margins and `1.5rem` gutters. Outer margins are framed by a perimeter 1px border with crosshairs (`+`) rendered at column junctions.
- **Tablet (768px - 1023px):** 8-column layout with `2rem` margins and `1.25rem` gutters.
- **Mobile (< 768px):** 4-column layout with `1.25rem` margins and `1rem` gutters. Dense, unpadded perimeter stacking where full-bleed panels collapse to solid dividers.

### Layout Principles
- **Editorial Asymmetry:** Large headers span asymmetrical column configurations (e.g., spanning columns 1 through 8, while abstract notes and technical tags occupy columns 9 through 12).
- **Hairline Cell Dividers:** Every content module is segmented by `1px solid #E5E3DC` (or `#222222` in dark mode). Border intersections feature technical registration markers or mini index tags (`[SEC_03]`).

## Elevation & Depth

This system operates entirely without z-axis soft shadows, blurred illumination, or synthetic lighting tricks. Depth is strictly two-dimensional and planar.

### Mechanics of Depth
- **Zero Soft Shadows:** No box-shadow blurs or gradient elevation tints. Depth does not simulate physical height above paper; it simulates physical printing, stamping, and cutting.
- **Tonal Stacking & Color Blocks:** High-priority containers utilize solid `#101010` ink fields layered directly over `#F7F6F2` canvas fields to isolate content.
- **1px Hairline Structural Grids:** Content units derive their visual separation from crisp 1px borders. Interactive elements mimic mechanical drafting boards.
- **Hard Offset Edge (Optional Accent Shadow):** When an element requires an active mechanical tactile state, use a flat 2px or 4px hard-edge offset: `box-shadow: 2px 2px 0px 0px #101010` with zero blur.

## Shapes

The geometric framework is absolute zero (`0px` border-radius). 

### Form Language
- **Sharp Brutalism:** All surfaces, interactive targets, media frames, and contextual labels have pure 90-degree corners.
- **No Rounded Terminations:** Soft pills, curved buttons, circular avatars, and floating oval tags are strictly prohibited.
- **Technical Insets & Registration Cutouts:** Visual markers use clipped corners, bracketed encasements (`[ ]`), raw rectangular framing, and corner tick marks (2px SVG crossbars) to establish visual identity.

## Components

### Buttons & Interactive Controls
- **Primary CTA:** Sharp rectangle, background `#101010`, foreground text `#F7F6F2`, enclosed in a 1px border. On hover, the element immediately inverts: background shifts to `#F02D32` with foreground remaining white, accompanied by a `2px 2px 0px #101010` hard-offset translation.
- **Bracket Monospaced Link:** Minimalist link typed in `Space Mono`: `[ EXPLORE WORK -> ]`. On hover, the inner text transitions to color `#F02D32` and tracking expands by `0.05em`.
- **Secondary Ghost Button:** 1px border in `#101010`, background transparent. Hover state fills the background with `#101010` and inverts text to `#F7F6F2`.

### Chips & Metadata Badges
- **Technical Index Chips:** Raw monospaced tags enclosed in square brackets: `[ AI / NLP ]`, `[ PyTorch ]`, `[ 01/04 ]`.
- **Status Pills / System Indicators:** Square `6px × 6px` solid `#F02D32` square bullet followed by `Space Mono` uppercase text (e.g., `▪ LIVE SYSTEM`).

### Cards & Work Items
- **Editorial Project Module:** Replaces generic rounded cards. Built as a border-delineated table cell.
  - Top row: Rotated index label `[INDEX_01]` and project timeline.
  - Center: Full-bleed project thumbnail framed by a 1px solid border, desaturated by default, snapping to full fidelity on hover.
  - Bottom row: Monolithic headline in `Space Grotesk`, followed by a 2-line abstract in `Inter`, terminating with a bracketed CTA anchor.

### Form Inputs & Terminal Fields
- **Input Fields:** Flat rectangular baseline or full 1px `#101010` boundary. Background `#F7F6F2`. Input text renders in `Space Mono`. 
- **Focus State:** Border color snaps instantly to `#F02D32` with a `+` registration mark appearing at the bottom-right corner.
- **Checkboxes & Radios:** Sharp square containers (`16px × 16px`) with 1px borders. Checked state is marked by an internal solid square (`8px × 8px`) or a crisp diagonal cross (`X`) rather than a rounded checkmark.

### Editorial Dividers & Registration Marks
- **Crosshair Anchor (`+`):** Positioned at the intersection of main horizontal hairlines and column gutters using `Space Mono` 12px characters in `#101010`.
- **Corner Ticks:** Framing bounding boxes for complex data models and code visualizations feature miniature 4px L-shaped corner brackets.