---
name: Phantom Panel
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#af8782'
  outline-variant: '#5f3f3b'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690003'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#c0000d'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c6c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#717272'
  on-tertiary-container: '#f9f8f8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 96px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: 0.02em
  display-xl-mobile:
    fontFamily: Anton
    fontSize: 52px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 58px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system channels an aggressive fusion of Japanese manga graphic arts, neo-brutalist interaction, and kinetic JRPG user interfaces (strongly influenced by high-voltage anime title cards and stylish tactical menu systems). Designed for a high-impact developer portfolio, the UI abandons timid corporate minimalism in favor of visceral energy, comic panel architectures, diagonal framing, and unapologetic contrast.

### Core Tenets
- **Cinematic Urgency:** Every screen feels like a manga splash spread or combat command trigger. Movement is sharp, deliberate, and angular.
- **Graphic Rawness:** Halftone screen dots, hard ink outlines, speed lines, and cut-and-paste collage aesthetics deliver a tactile, print-inspired digital space.
- **Dynamic Asymmetry:** Rejecting standard symmetric grids in favor of tilted tape strips, diagonal slash dividers, and overlapping panel cards.
- **Audience & Emotion:** Geared towards tech recruiters, creative directors, and engineering peers looking for uncompromising individuality, technical dexterity, and supreme visual flair.

## Colors

The palette operates on high-voltage graphic contrast: blood crimson against deep obsidian inks, punctuated by blinding paper highlights and halftone greys. 

- **Primary (`#E60012` - Scarlett Surge):** The primary command color. Reserved for active states, dynamic speed badges, warning slashes, primary action triggers, and focal graphic splashes.
- **Neutral Base (`#050505` - Obsidian Void):** The deepest void surface. Provides infinite contrast for ink paneling.
- **Secondary (`#FFFFFF` - Flash Paper):** Blinding pure white. Used for inverted panel backgrounds, brutalist headline text, and stark vector line art.
- **Tertiary (`#BDBDBD` - Halftone Screen):** Used for manga halftone patterns, dot screens, secondary metadata, and structural frame borders.
- **Surface Elevation (`#171717` - Manga Charcoal):** Secondary backdrop for nested panels, cards, and structural grouping to prevent visual collapse into raw black.
- **Canvas Tint (`#F1F0EB` - Aged Newsprint):** High-contrast alternate background for "inverted" panels and narrative speech dialogue callouts.

## Typography

The typographic hierarchy is built on extreme tension between ultra-compressed, towering headlines, razor-sharp geometric body copy, and mechanical monospaced metadata.

- **Display & Section Titles (Anton):** Always rendered in all-caps. Used for oversized numbers, punchy section anchors, and dramatic visual titles. Often tilted at `-3deg` or `-5deg` angles or layered with a sharp crimson offset shadow.
- **Body & Editorial (Space Grotesk):** Provides high legibility against dense comic backdrops while retaining sharp ink-trap flavor and modern technical authority.
- **Metadata, Tech Stack, & Status Flags (Space Mono):** Fixed-width monospaced precision used for commit hashes, telemetry, skill power levels, index counters (e.g., `// 01_ARSENAL`), and UI command markers.

## Layout & Spacing

The layout treats the browser window as an ongoing serialized manga spread with interlocking comic panels and deliberate architectural breaks.

### Layout Mechanics
- **The Comic Panel Grid:** Desktop layouts utilize a 12-column variable grid wrapped inside a heavy framing border. Adjacent panels alternate between flush borders (`3px solid #FFFFFF` or `#E60012`) and angled diagonal breaks (`clip-path: polygon(...)`).
- **Asymmetric Offsets:** Hero sections and featured cards deliberately break the strict column bounds by translating elements across grid lines, mimicking character cutouts breaking panel gutters.
- **Device Adaptation:**
  - **Desktop (1024px+):** Deep multi-panel spreads, complex command ribbons angled at `-4deg`, dual-column dialogue layouts, and expansive negative space filled with subtle halftone screens.
  - **Tablet (768px - 1023px):** Collapses into a 6-column modular stack; panels retain thick ink borders and corner badges while diagonal tilts are softened to `-2deg` to preserve tap fidelity.
  - **Mobile (<768px):** Single-column vertical panel scroll. Panel borders remain thick (`2px solid #FFFFFF`), headers downscale to mobile display scales, and navigation transforms into a bottom-anchored JRPG menu trigger.

## Elevation & Depth

This design system strictly forbids soft, diffused, realistic shadows. Depth is achieved exclusively through **Hard Graphic Elevation** inspired by printmaking and game HUDs:

- **Brutal Hard Offset Drop-Shadows:** Surfaces achieve elevation via zero-blur hard offsets:
  - `Surface Tier 1:` `4px 4px 0px #E60012`
  - `Surface Tier 2 (Hover/Active):` `8px 8px 0px #FFFFFF`
  - `Danger / Alert Tier:` `6px 6px 0px #050505, 8px 8px 0px #E60012`
- **Manga Halftone Underlays:** Hovered or elevated panels reveal a 45-degree dot-matrix halftone screen beneath their active footprint, giving the illusion of lifted physical comic cel animation.
- **Layer Stacking Hierarchy:**
  - `Base (Z-0):` Obsidian Void with faint halftone rastering.
  - `Panels (Z-10):` Dark Charcoal (`#171717`) or White Paper (`#FFFFFF`) framed cards.
  - `Slanted Command Ribbons (Z-20):` Angled strips slicing across panel boundaries.
  - `HUD Overlays & Dialogue Popups (Z-30):` High-contrast dialogue bubbles, target crosshairs, and starburst badges.

## Shapes

The shape vocabulary is strictly **0 (Sharp)**. Curvature does not exist in this universe; softness compromises the raw energy of ink and steel.

- **Razor Edges:** All buttons, cards, tags, and inputs feature pure right-angle corners (`0px` border-radius).
- **Chamfered & Clipped Angles:** Interactive focal items utilize `clip-path` polygon cuts (e.g., 45-degree trimmed corners or acute trapezoidal wedges) to evoke combat HUDs and torn paper edges.
- **Jagged Diagonal Slashes:** Section breaks, ribbon banners, and menu hover selections are sheared at fixed acute angles (`transform: skewX(-12deg)` or `rotate(-3deg)`).
- **Speech Bubble Geometry:** Dialogue and narrative quotes use rectangular panels with protruding 45-degree triangular pointer notches.

## Components

### Buttons & Command Triggers
- **Primary Action (Persona Command Style):** Rectangular or skewed (`skewX(-10deg)`) container in `#E60012` with text in `#FFFFFF` (Anton or Space Grotesk Bold). Hard border `2px solid #FFFFFF`. Hover triggers an immediate reverse flash: background becomes `#FFFFFF`, text becomes `#050505`, and a `6px 6px 0px #E60012` hard drop-shadow engages along with a slight translation (`translate(-2px, -2px)`).
- **Ghost Tactical Button:** Background `#050505`, text `#FFFFFF`, border `2px solid #BDBDBD`. Prefixed with an ASCII or monospaced glyph (`[EXECUTE]`, `> READY`). Hover fills with `#E60012` and border changes to `#E60012`.

### Menu & Command Strips
- Persona-style navigation lists featuring full-bleed slanted horizontal strips.
- Hovering an item shifts the entire strip horizontally by `+16px`, illuminates the background in `#E60012`, flips the text to white Anton, and displays a jagged triangle cursor indicator to the immediate left.

### Project & Case Study Cards (Comic Panels)
- **Container:** Wrapped in `#171717` with a prominent `3px solid #FFFFFF` or `3px solid #E60012` border.
- **Panel Header:** Top edge features a high-contrast label strip (`// PROJECT_01`) in Space Mono on pure white, accompanied by a bold Roman numeral (e.g., `IV`) in Anton.
- **Visual Window:** Images utilize a grayscale filter that bursts into full-saturation anime crimson overlays on hover, backed by a subtle dot-matrix halftone pattern.
- **Corner Badges:** Jagged starburst or caution-tape diagonal stripes anchored to the top-right corner to indicate status (e.g., `WIP`, `LIVE SYSTEM`).

### Tags & Arsenal Chips
- Compact, high-density rectangular labels. Monospaced Space Mono (`label-sm`), all-caps.
- Background `#050505`, border `1px solid #BDBDBD`, text `#BDBDBD`.
- Active / Featured Tech: Background `#E60012`, border `1px solid #E60012`, text `#FFFFFF`.

### Form Inputs & Text Fields
- Flat `#171717` fill with bottom and left thick borders (`3px solid #BDBDBD`).
- Placeholder text in dimmed Space Mono. Focused state shifts border to `#E60012`, flashes a brief inverted prompt blink, and displays an active bracket pair: `[ INPUT FIELD ]`.

### Speech Bubble & Dialogue Callouts
- Utilized for personal notes, testimonials, or developer commentary.
- Pure `#F1F0EB` paper background with dark `#050505` text in Space Grotesk. Solid `3px solid #050505` border with an angled triangular pointer jutting out toward an avatar silhouette.