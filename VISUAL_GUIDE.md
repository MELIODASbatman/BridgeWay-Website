# BridgeWay Institute of Technology — Visual Guide

**Document:** `VISUAL_GUIDE.md`  
**Purpose:** Visual design reference, layout patterns, and component guide  
**Color System:** Purple / White / Black  
**Last Updated:** 2026-06-10

---

## 1. Design Philosophy

The BridgeWay website uses a **modern, premium aesthetic** built on three core principles:

1. **Depth through layering** — Soft shadows, blur effects, and gradient overlays create spatial hierarchy
2. **Movement with purpose** — Subtle hover lifts, glow pulses, and the animated logo add life without distraction
3. **Restraint in color** — Strict purple/white/black palette ensures cohesion and avoids visual noise

---

## 2. Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Purple | `#7c3aed` | Primary buttons, borders, accents, headings |
| Navy Purple | `#1e1b4b` | Dark backgrounds, footer, hero base |
| Mid Navy | `#312e81` | Gradient stops, secondary dark surfaces |
| Light Purple | `#a78bfa` | Body text on dark, hover states, muted labels |
| Lavender | `#c4b5fd` | Subtle accents, gradient midpoints, subtitles |

### Neutrals

| Color | Hex | Usage |
|-------|-----|-------|
| Pure White | `#ffffff` | Card backgrounds, input fields, primary text on dark |
| Soft White | `#f5f3ff` | Body text on light, form labels, secondary text |
| Mist | `#f3f0ff` | Gradient backgrounds, hover tints |
| Pure Black | `#0a0a0a` | Footer, deepest shadows, body text on light |
| Dark Text | `#2a1f4e` | Paragraph text, headings on light backgrounds |

### Gradient Presets

```css
/* Primary Button / Hero */
linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)

/* White Button on Dark */
linear-gradient(135deg, #ffffff 0%, #f3f0ff 100%)

/* Dark Background */
linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)

/* Soft Page Background */
linear-gradient(180deg, #fafafa 0%, #f5f3ff 100%)

/* Text Gradient (Headings) */
linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)
```

---

## 3. Typography

### Font Stack
```
'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```
System-native for zero load time and crisp rendering on Windows/macOS/Linux.

### Type Scale

| Element | Size | Weight | Color | Letter Spacing |
|---------|------|--------|-------|----------------|
| Hero Title | 52px | 800 | White (on dark) | -0.5px |
| Section Title | 32px | 700 | Purple gradient | default |
| Card Title | 20px | 700 | Purple gradient | default |
| Body Large | 18px | 600 | Dark text / White | default |
| Body | 16px | 400 | Dark text / White | 0.3px |
| Small | 14px | 500 | Light purple | default |
| Caption | 11px | 600 | Lavender | 3-4px |

### Heading Treatment
All `h1`, `h2`, `h3` use **gradient text** via:
```css
background: linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

---

## 4. Spacing System

### Section Padding
| Component | Padding |
|-----------|---------|
| Page sections | `50px` |
| Form wrappers | `40px` |
| Cards (general) | `30px 25px` |
| Card hover lift | `translateY(-5px)` to `translateY(-8px)` |

### Grid Gaps
| Grid | Gap |
|------|-----|
| Features / Reasons / Values | `30px` |
| Team cards | `30px` |
| Course display | `25px` |
| Enrollment form rows | `20px` |
| Document upload grid | `30px` |

---

## 5. Component Visual Guide

### 5.1 Navigation Bar
```
┌──────────────────────────────────────────────────┐
│  [LOGO]  Home  Courses  About  Enrollment  Contact │
└──────────────────────────────────────────────────┘
```
- **Background:** `rgba(76, 29, 149, 0.85)` with backdrop blur
- **Border-bottom:** `1px solid rgba(76, 29, 149, 0.15)`
- **Shadow:** `0 2px 14px rgba(76, 29, 149, 0.12)`
- **Active link:** White text with purple underline indicator
- **Sticky:** `position: sticky; top: 0; z-index: 100`

### 5.2 Animated Logo
```
┌─────────────────────────┐
│  ╭──────────────────╮   │
│  │  ⟋⟍   ◉   ⟍⟋   │   │
│  │  │ │ ▓▓▓ │ │   │   │
│  │  ⟍⟋   ◉   ⟍⟋   │   │
│  │    BRIDGEWAY      │   │
│  │ INSTITUTE OF TECH │   │
│  ╰──────────────────╯   │
└─────────────────────────┘
```
- **Canvas:** 260×240 SVG with rounded rectangle (`rx=44`)
- **Background:** Navy gradient (`#1e1b4b` → `#312e81`) with purple border
- **Bridge:** White-to-lavender gradient arches with 5 purple pillars
- **Nodes:** 4 pulsing circles + central spire with diamond topper
- **Text:** "BRIDGEWAY" in gradient white + subtitle in lavender
- **Animation:** Continuous sway, pulse, and glow with `requestAnimationFrame`
- **Hover:** Scale 1.1, rotate -3°, enhanced glow
- **Size:** `clamp(52px, 5.5vw, 64px)` with drop shadow filter

### 5.3 Hero Section (Homepage)
```
┌───────────────────────────────────────────────┐
│                                               │
│        Building Skills.                       │
│        Building Futures.                      │
│                                               │
│   Empower yourself with industry-leading      │
│   technology education at BridgeWay            │
│                                               │
│   ┌──────────────┐  ┌──────────────┐         │
│   │  Explore     │  │  Enroll Now  │         │
│   │  Our Courses │  │              │         │
│   └──────────────┘  └──────────────┘         │
│                                               │
└───────────────────────────────────────────────┘
```
- **Background:** `linear-gradient(135deg, #0a0a0a 0%, #1a0533 40%, #4c1d95 100%)`
- **Overlay:** Radial glow at 20% / 80% positions
- **Text:** White, centered, `text-align: center`
- **Buttons:**
  - Primary: White gradient fill, purple text, purple shadow
  - Secondary: Translucent white border, white text, backdrop blur

### 5.4 Feature Cards (Why Choose Us)
```
┌─────────────────────┐
│      🎓              │
│  Expert Instructors  │
│                      │
│  Learn from industry │
│  professionals...    │
│                      │
│  [Hover: lift -8px] │
└─────────────────────┘
```
- **Grid:** 4 columns (desktop) → 2 (tablet) → 1 (mobile)
- **Background:** White `#ffffff`
- **Border:** `1px solid rgba(76, 29, 149, 0.08)`
- **Shadow:** `0 14px 40px rgba(10, 10, 10, 0.06)`
- **Top accent:** `4px` purple gradient line on hover
- **Hover:** `translateY(-8px)` + purple shadow `rgba(76, 29, 149, 0.18)`

### 5.5 Section Cards (About Us)
```
┌─────────────────────────────────────┐
│  Who We Are                         │
│─────────────────────────────────────│
│  At BridgeWay, we are committed     │
│  to providing quality education...  │
│                                     │
│  [White card, purple border]        │
└─────────────────────────────────────┘
```
- **Background:** White `#ffffff`
- **Border-radius:** `16px`
- **Padding:** `50px` (square)
- **Shadow:** Soft purple shadow
- **Heading:** Gradient purple text

### 5.6 Form Inputs
```
┌──────────────────────────────────┐
│  Full Name *                     │
│  ┌────────────────────────────┐  │
│  │ Enter your full name       │  │
│  └────────────────────────────┘  │
│                                  │
│  Label color: Purple (#4c1d95)   │
│  Border: 2px solid rgba(76...)   │
│  Focus: Purple ring + shadow     │
└──────────────────────────────────┘
```
- **Background:** White `#ffffff`
- **Border:** `2px solid rgba(76, 29, 149, 0.25)`
- **Focus:** `border-color: #7e3af2` + `box-shadow: 0 0 0 3px rgba(126, 58, 242, 0.18)`
- **Text:** `#1a0533`
- **Placeholder:** `#666`
- **Error highlight:** `#7e3af2` border + purple tint background

### 5.7 Buttons
```
Primary Button:          Secondary Button:
┌──────────────────┐    ┌──────────────────┐
│  Explore Courses │    │  Enroll Now      │
└──────────────────┘    └──────────────────┘
```
- **Primary:**
  - Background: `linear-gradient(135deg, #7e3af2 0%, #4c1d95 100%)`
  - Text: White
  - shadow: `0 8px 30px rgba(126, 58, 242, 0.35)`
  - Hover: `translateY(-3px)` + stronger shadow

- **Secondary:**
  - Background: `rgba(255, 255, 255, 0.08)`
  - Border: `2px solid rgba(255, 255, 255, 0.5)`
  - Text: White
  - Backdrop blur

### 5.8 Enrollment Form Wrapper
```
┌──────────────────────────────────────────────┐
│  Course Enrollment                           │
│                                              │
│  ┌─ Section: Select Your Course ──────────┐  │
│  │  Choose Course *                        │  │
│  │  ┌──────────────────────────────────┐   │  │
│  │  │  -- Select a Course --            │   │  │
│  │  └──────────────────────────────────┘   │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ┌─ Section: Personal Information ────────┐  │
│  │  ┌────────────┐  ┌────────────┐        │  │
│  │  │ First Name │  │ Last Name │        │  │
│  │  └────────────┘  └────────────┘        │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```
- **Background:** White `#ffffff` with subtle purple border
- **Border-radius:** `16px`
- **Shadow:** Soft elevated shadow
- **Section dividers:** `1px solid rgba(76, 29, 149, 0.12)`
- **Section titles:** Gradient purple text

### 5.9 Team Cards
```
┌─────────────────────┐
│      👨‍💼              │
│  James Mwangi        │
│  Director & Founder  │
│                      │
│  With over 15 years  │
│  of experience...    │
│                      │
│  [Shuffle ↑ on hover]│
└─────────────────────┘
```
- **Background:** `rgba(255, 255, 255, 0.92)`
- **Border:** `1px solid rgba(76, 29, 149, 0.12)`
- **Radius:** `12px`
- **Shadow:** `0 8px 25px rgba(76, 29, 149, 0.08)`
- **Hover:** Lift + purple glow shadow
- **Name:** Gradient purple text
- **Role:** Gradient purple, uppercase, letter-spaced

### 5.10 Course Display Cards (Enrollment Dashboard)
```
┌───────────────────────────────────────┐
│  Certificate in Web Development       │
│───────────────────────────────────────│
│  Master the skills to build...        │
│                                       │
│  ┌─────────────────────────────────┐  │
│  │ Duration:  3 Months             │  │
│  │ Price:     KShs. 30,769         │  │
│  │ Enrollments: 0                  │  │
│  └─────────────────────────────────┘  │
│                                       │
│  ┌───────────────────────────────┐    │
│  │  ➕ Enroll Now                │    │
│  └───────────────────────────────┘    │
└───────────────────────────────────────┘
```
- **Background:** White
- **Border:** `1px solid rgba(76, 29, 149, 0.1)`
- **Shadow:** Soft purple shadow
- **Hover:** Lift + enhanced border
- **Title:** Gradient purple text
- **Price:** Highlighted in purple gradient
- **Button:** Full-width purple gradient

### 5.11 Document Upload Cards
```
┌────────────────────────────┐
│          🆔                 │
│   ID Card / Passport       │
│   Upload a clear copy...   │
│                            │
│  ┌──────────────────────┐  │
│  │  📁 Choose File      │  │
│  │  PDF, JPG, PNG       │  │
│  └──────────────────────┘  │
│                            │
│  [Preview area]            │
└────────────────────────────┘
```
- **Background:** White with subtle purple border
- **Icon circle:** 90px diameter, purple tint background, purple border
- **Upload button:** Purple gradient with white text
- **Preview area:** Centered, shows thumbnail or PDF icon

### 5.12 Form Message Feedback
```
ERROR STATE:
┌─────────────────────────────────────┐
│  ✕ Please fix the following:        │
│  • First Name is required           │
│  • Valid Email is required          │
│  • You must accept Terms            │
└─────────────────────────────────────┘

SUCCESS STATE:
┌─────────────────────────────────────┐
│  ✓ Thank you John! We will be      │
│    in touch about Web Development.  │
└─────────────────────────────────────┘
```
- **Error:** Dark purple background `#1a0533`, purple border `#7e3af2`, white text
- **Success:** Near-black background `#0a0a0a`, purple border, white text, centered
- **Border-radius:** `10px`
- **Padding:** `16px 18px`

### 5.13 Bar Chart (Enrollment Stats)
```
┈ TITLE: Enrollment Distribution (%) ┈

Course A
┌────────────────────────────┐ ████ 45%
│████████████████████████████│

Course B
┌────────────────────────────┐ ████ 30%
│████████████████████        │

Course C
┌──────────────┐             ████ 25%
│██████████████│
```
- **Container:** White background, purple border, rounded
- **Bar fill:** `linear-gradient(90deg, #7e3af2 0%, #4c1d95 100%)`
- **Bar background:** `rgba(76, 29, 149, 0.08)`
- **Label:** Dark purple text `#1a0533`
- **Value:** Purple text `#4c4080`

---

## 6. Shadow & Elevation System

| Level | Shadow | Usage |
|-------|--------|-------|
| L1 | `0 4px 15px rgba(126, 58, 242, 0.18)` | Buttons, small cards |
| L2 | `0 8px 25px rgba(76, 29, 149, 0.08)` | Team cards, inputs |
| L3 | `0 14px 40px rgba(10, 10, 10, 0.06)` | Feature cards |
| L4 | `0 20px 60px rgba(10, 10, 10, 0.06)` | Form wrappers, modals |
| L5 | `0 22px 55px rgba(76, 29, 149, 0.18)` | Feature card hover |

---

## 7. Hover State Patterns

### Universal Hover Recipe
```css
transition: all 0.3s ease; /* or 0.35s ease */
transform: translateY(-5px); /* or -8px */
box-shadow: [purple shadow glow];
```

### Interactive Elements
| Element | Hover Effect |
|---------|-------------|
| Cards | Lift + stronger shadow |
| Buttons | Lift + shadow intensify |
| Nav links | Color shift to purple + underline slide |
| Logo | Scale 1.1 + rotate -3° + glow |
| Inputs | Border purple + glow ring |

---

## 8. Animation Reference

### Page Load Animations
- **Hero content:** `fadeInDown 0.8s ease` — slides down from above
- **Sidebar content:** `fadeInUp 0.6s ease` — slides up from below

### Continuous Animations
- **Logo nodes:** Pulse scale 1.0–1.4, opacity 0.7–1.0, staggered
- **Logo bridge:** Sway ±4px vertical
- **Logo glow:** Scale 1.0–1.2
- **Logo text:** Float ±2px vertical

### Transition Timings
| Interaction | Duration | Easing |
|-------------|----------|--------|
| Hover lift | 0.3s | ease |
| Button hover | 0.3s | ease |
| Logo hover | 0.4s | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Logo leave | 0.5s | ease |
| Focus ring | 0.3s | ease |

---

## 9. Border Radius System

| Component | Radius |
|-----------|--------|
| Buttons | `5px` |
| Inputs / Textareas | `8px` |
| Cards (general) | `12px` |
| Cards (enrollment) | `16px` |
| Logo background | `44px` |
| File input label | `12px` |
| Notification toast | `10px` |
| Chart bars | `8px` |

---

## 10. Responsive Layout Visual

### Desktop (≥992px)
```
┌────────────────────────────────────────────────────────────┐
│  [LOGO]   Home   Courses   About   Enrollment   Contact   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              ┌─────────────────────────┐                   │
│              │   HERO SECTION          │                   │
│              │   (full width, dark)    │                   │
│              └─────────────────────────┘                   │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ Feature 1    │  │ Feature 2    │  │ Feature 3    │   │
│  └──────────────┘  └──────────────┘  └──────────────┘   │
│  ┌──────────────┐                                        │
│  │ Feature 4    │                                        │
│  └──────────────┘                                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tablet (≤992px)
```
┌──────────────────────────────────────────┐
│  [LOGO]   Home   Courses   About  ...    │
├──────────────────────────────────────────┤
│                                          │
│         ┌─────────────────────┐          │
│         │   HERO SECTION      │          │
│         └─────────────────────┘          │
│                                          │
│  ┌──────────────┐  ┌──────────────┐     │
│  │ Feature 1    │  │ Feature 2    │     │
│  └──────────────┘  └──────────────┘     │
│  ┌──────────────┐  ┌──────────────┐     │
│  │ Feature 3    │  │ Feature 4    │     │
│  └──────────────┘  └──────────────┘     │
└──────────────────────────────────────────┘
```

### Mobile (≤600px)
```
┌─────────────────────────┐
│  [LOGO]       Menu ☰    │
├─────────────────────────┤
│                         │
│   ┌─────────────────┐   │
│   │  HERO SECTION   │   │
│   └─────────────────┘   │
│                         │
│  ┌─────────────────┐    │
│  │ Feature 1       │    │
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ Feature 2       │    │
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ Feature 3       │    │
│  └─────────────────┘    │
│  ┌─────────────────┐    │
│  │ Feature 4       │    │
│  └─────────────────┘    │
└─────────────────────────┘
```

---

## 11. Z-Index Layers

| Layer | Z-Index | Element |
|-------|---------|---------|
| Base content | `0` | All normal elements |
| Sticky nav | `100` | `.navbar` |
| Logo glow overlap | auto | SVG filters with `feMerge` |
| Notification toast | `1000` | `.enrollment-notification` |

---

## 12. Accessibility Notes

- **Contrast:** Purple-on-white meets WCAG AA for body text
- **Focus states:** Purple glow ring on all interactive inputs
- **Keyboard:** Buttons and links are natively focusable
- **SVG:** Logo includes `title` equivalent via text content
- **Forms:** Labels properly associated with inputs via `for`/`id`
- **Color independence:** Errors use text + color, not color alone

---

*End of Visual Guide*
