# BridgeWay Institute of Technology — Project Documentation Index

**Repository Root:** `C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C`  
**Last Updated:** 2026-06-10

---

## Quick Navigation

| Topic | Description | File(s) |
|-------|-------------|---------|
| [Project Overview](#project-overview) | High-level summary of the website | — |
| [File Structure](#file-structure) | Complete list of project files and their roles | — |
| [HTML Pages](#html-pages) | Overview of each page and its sections | `index.html`, `about.html`, `courses.html`, `enrollment.html`, `contact.html` |
| [Styling System](#styling-system) | Color theme, layout, and responsive design | `style.css` |
| [JavaScript Logic](#javascript-logic) | Form handling, team rendering, course search, enrollment, contact, team shuffle, logo animation | `script.js`, `logo-animation.js` |
| [Form Validation](#form-validation) | Live validation, error/success messaging, reset behavior | `contact.html`, `enrollment.html`, `script.js`, `style.css` |
| [Team Section](#team-section) | Dynamic team member cards with shuffle functionality | `about.html`, `script.js`, `style.css` |
| [Animated Logo](#animated-logo) | Custom SVG logo with JS animation and hover/click effects | `logo-animation.js`, `style.css` |
| [Color Theme](#color-theme) | Three-core color system (purple / white / black) | `style.css` |
| [Responsive Breakpoints](#responsive-breakpoints) | Mobile, tablet, and desktop layout adjustments | `style.css` |
| [Verification Report](#verification-report) | Feature-by-feature completion checklist | `VERIFICATION_REPORT.md` |

---

## Project Overview

BridgeWay Institute of Technology is a multi-page static website built with semantic HTML5, CSS3, and vanilla JavaScript. It showcases courses, enrollment workflows, team information, and contact capabilities with a cohesive purple/white/black design system and custom animated branding.

**Key Capabilities:**
- 5 interconnected pages (Home, About, Courses, Enrollment, Contact)
- Dynamic team member rendering with array-driven shuffle
- Live form validation with on-page messaging (no `alert()`)
- Course search and enrollment tracking with localStorage
- Animated SVG logo injected into every page
- Responsive grid layouts with breakpoints at 768px, 992px, and 480px
- Consistent three-core color system: purple, white, black

---

## File Structure

```
Bridgeway_project.Group C/
├── index.html                  # Homepage
├── about.html                  # About Us page
├── courses.html                # Course catalog page
├── enrollment.html             # Course enrollment & dashboard
├── contact.html                # Contact form page
├── style.css                   # Global stylesheet
├── script.js                   # Main JavaScript logic
├── logo-animation.js           # Animated SVG logo script
├── VERIFICATION_REPORT.md      # Feature verification checklist
└── INDEX_DOCUMENTATION.md      # This file
```

---

## HTML Pages

### `index.html` — Homepage
- **Navigation:** Logo, Home, Courses, About Us, Enrollment, Contact
- **Hero Section:** Title, subtitle, CTA buttons
- **Welcome Section:** Introduction to BridgeWay
- **Why Choose Us:** 4 feature cards in horizontal grid
- **Footer:** About, Quick Links, Contact Info

### `about.html` — About Us
- **Hero Section:** Mission statement
- **Who We Are:** Institution background
- **Why Choose BridgeWay:** 3 reason cards (horizontal grid)
- **Our Mission:** Mission statement card
- **Our Values:** 4 value cards (horizontal grid)
- **Our Team:** Dynamic team cards (4 members) with Shuffle button
- **Footer:** Standard site footer

### `courses.html` — Course Catalog
- **Course Cards:** Display course name, description, duration, price
- **Enroll Buttons:** Redirects to enrollment page with selected course
- **Search Functionality:** Filter courses by name, duration, or price

### `enrollment.html` — Enrollment & Dashboard
- **Stats Dashboard:** Total enrollments, breakdown by course, bar chart
- **Course Browser:** Search and browse available courses
- **Enrollment Form:** Multi-section form with course selection, personal info, address, payment method, document upload
- **Course Summary Sidebar:** Live-updating price breakdown and benefits

### `contact.html` — Contact Page
- **Contact Form:** Name, email, phone, subject dropdown, message textarea, newsletter checkbox
- **Contact Info Sidebar:** Location, phone, email, business hours, social media
- **Google Maps Embed:** Location map

---

## Styling System

**Core Colors:**
| Role | Color | Hex |
|------|-------|-----|
| Deep Purple | Background/Accent | `#7c3aed` |
| Navy Purple | Dark backgrounds | `#1e1b4b`, `#312e81` |
| Light Purple | Hover/Borders | `#a78bfa`, `#c4b5fd` |
| White | Cards/Text on dark | `#ffffff`, `#f5f3ff`, `#f3f0ff` |
| Black | Body text | `#2a1f4e`, `#0a0a0a` |

**Key Patterns:**
- Gradient text for headings using `background-clip: text`
- Card-based layouts with purple borders and shadows
- Hover effects: `translateY(-8px)` lift + purple shadow glow
- Smooth transitions (`0.3s ease` to `0.4s cubic-bezier`)
- Backdrop blur on glass-morphism panels
- Responsive grids with `auto-fit` or fixed column counts

**Typography:**
- Font family: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- Heading weights: 700–800
- Body size: 15–16px
- Line height: 1.6–1.85

---

## JavaScript Logic

### `script.js` — Main Application Logic

| Function | Purpose | File Location |
|----------|---------|---------------|
| `setupDocumentPreviews()` | Handles file upload previews (image/PDF) | Lines 500–559 |
| `setupContactForm()` | Validates contact form, shows messages, resets on success | Lines 561–658 |
| `setupEnrollmentForm()` | Validates enrollment form, saves to localStorage, resets | Lines 390–497 |
| `setupCoursesPageSearch()` | Filters course cards on courses page | Lines 213–311 |
| `setupCoursesPageEnrollButtons()` | Handles course card enroll button clicks | Lines 313–333 |
| `setupCourseSelection()` | Updates enrollment sidebar when course selected | Lines 335–498 |
| `displayAllCourses()` | Renders all course cards in enrollment dashboard | Lines 57–96 |
| `filterEnrollmentCourses()` | Searches course browser with live filter | Lines 109–170 |
| `updateEnrollmentStats()` | Updates total enrollment count and details | Lines 193–224 |
| `updateEnrollmentChart()` | Renders bar chart for enrollment distribution | Lines 227–259 |
| `showEnrollmentFeedback()` | Shows enrollment success notification | Lines 262–271 |
| `renderTeamMembers()` | Loops through `teamMembers` array, generates HTML cards | Lines 689–707 |

**Key Data Arrays:**
- `coursesData` — 4 courses with id, name, duration, price, enrollments, description
- `teamMembers` — 4 members with name, role, fact, avatar

### `logo-animation.js` — Animated Logo

| Function | Purpose |
|----------|---------|
| `injectLogo()` | Creates `.bridgeway-brand` div, inserts before logo link, hides original text logo |
| `initLogoAnimation()` | Starts `requestAnimationFrame` loop for continuous animation |

**Animation Details:**
- Bridge sway: `Math.sin(phase * 2π) * 4px` vertical translation
- Node pulse: scale 1.0–1.4 + opacity 0.7–1.0 with staggered delays
- Rung pulse: scale 1.0–1.25
- Glow pulse: scale 1.0–1.2
- Text shift: `Math.sin(phase * 2π) * 2px`
- Hover: scale 1.1, rotate -3°, enhanced drop shadow
- Click: scale 0.9, rotate 5°, spring back after 200ms

---

## Form Validation

### Contact Form (`contact.html`)
- **Fields:** Name (`#name`), Email (`#email`), Phone (`#phone`), Subject (`#subject`), Message (`#message`)
- **Validation:** Required field checks + email regex format check
- **Error Display:** `#contactFormMessage` with `.form-message.error` class, lists specific missing/invalid fields
- **Success Display:** `#contactFormMessage` with `.form-message.success` class showing "Thank you [name]! We will be in touch with you shortly."
- **Reset:** `form.reset()` + input border color cleanup

### Enrollment Form (`enrollment.html`)
- **Fields:** First Name, Last Name, Email, Phone, Course, City, County, Terms checkbox
- **Validation:** Required field checks + email regex + terms acceptance
- **Error Display:** `#enrollmentFormMessage` with `.form-message.error` class
- **Success Display:** `#enrollmentFormMessage` with `.form-message.success` class showing "Thank you [firstName]! We will be in touch about [course]."
- **Reset:** `form.reset()` + sidebar reset + localStorage save

### Shared CSS
```css
.form-message { display: none; } /* Hidden by default */
.form-message.error { display: block; background: #1a0533; border: 1px solid #7e3af2; color: #f5f3ff; }
.form-message.success { display: block; background: #0a0a0a; border: 1px solid #7e3af2; color: #f5f3ff; text-align: center; }
.error-highlight { border-color: #7e3af2 !important; background-color: rgba(126, 58, 242, 0.06) !important; }
```

---

## Team Section

### Data Structure (`script.js`)
```javascript
const teamMembers = [
  { name: "James Mwangi", role: "Director & Founder", fact: "...", avatar: "👨‍💼" },
  { name: "Grace Omondi", role: "Head of Academics", fact: "...", avatar: "👩‍💻" },
  { name: "David Kipchoge", role: "Lead Instructor", fact: "...", avatar: "👨‍🏫" },
  { name: "Sarah Njeri", role: "Student Career Advisor", fact: "...", avatar: "👩‍💼" }
];
```

### Rendering Logic
- `renderTeamMembers()` loops through `teamMembers`
- Builds HTML string with card structure
- Injects into `#teamGrid` using `innerHTML`
- Shuffle button sorts array with `Math.random() - 0.5` comparator, then re-renders

### Card Structure
```
.team-card
├── .team-avatar (emoji)
├── h3 (name)
├── .team-role (role)
└── p (fun fact)
```

---

## Animated Logo

### Design Specs
- **Canvas:** 260×240 SVG viewBox
- **Background:** Navy gradient (`#1e1b4b` → `#312e81`) with purple border
- **Bridge:** White-to-lavender gradient arches, 11px stroke, 4 pillars/rungs
- **Nodes:** 4 pulsing circles (white/lavender) with soft glow filter
- **Spire:** Central vertical line with diamond at top
- **Text:** "BRIDGEWAY" in gradient white + "INSTITUTE OF TECHNOLOGY" in lavender

### Animation Timeline (2.4s loop)
1. Bridge translational sway (±4px vertical)
2. Nodes scale (1.0–1.4) + opacity (0.7–1.0) with 0.15s stagger
3. Rungs scale (1.0–1.25) with 0.1s stagger
4. Glow circle scale (1.0–1.2)
5. Text vertical shift (±2px)

### Interactions
- **Hover:** scale 1.1, rotate -3°, strong purple glow (`drop-shadow(0 0 24px rgba(124,58,237,0.8))`)
- **Leave:** spring back to normal
- **Click:** scale 0.9, rotate 5°, settle back after 200ms

### CSS Sizing
```css
.bridgeway-brand svg {
  height: clamp(52px, 5.5vw, 64px);
  filter: drop-shadow(0 4px 12px rgba(124, 58, 237, 0.35));
}
```

---

## Color Theme

### Three-Core System
Only **purple**, **white**, and **black** are used across the entire website.

**Purple Family:**
| Token | Usage |
|-------|-------|
| `#7c3aed` | Primary accent, buttons, borders |
| `#4f46e5` | Secondary accent, gradients |
| `#a78bfa` | Light text, hover states |
| `#c4b5fd` | Subtle accents, gradients |
| `#1e1b4b` | Deep purple-black for backgrounds |
| `#312e81` | Mid navy purple |

**White Family:**
| Token | Usage |
|-------|-------|
| `#ffffff` | Primary card/input backgrounds |
| `#f5f3ff` | Body text on dark, soft backgrounds |
| `#f3f0ff` | Subtle gradients |

**Black Family:**
| Token | Usage |
|-------|-------|
| `#0a0a0a` | Deep black for body/footer |
| `#2a1f4e` | Dark text on light backgrounds |

**Gradients:**
- `linear-gradient(135deg, #7c3aed, #4f46e5)` — primary buttons, headings
- `linear-gradient(135deg, #ffffff, #f3f0ff)` — secondary surfaces
- `linear-gradient(135deg, #1e1b4b, #7c3aed)` — hero section

---

## Responsive Breakpoints

| Breakpoint | Target | Key Changes |
|------------|--------|-------------|
| **992px** | Tablet landscape | `.features-grid`: 4→2 columns; `.reasons-grid`: 3→2 columns; `.values-grid`: 4→2 columns |
| **768px** | Tablet portrait | `.enrollment-content`: 2→1 column; form sections stack |
| **600px** | Mobile large | `.features-grid`: 2→1 column; `.reasons-grid`: 2→1 column; `.values-grid`: 2→1 column |
| **480px** | Mobile small | Reduced padding on stats/chart sections; smaller titles |

**Responsive Utilities Used:**
- `clamp(52px, 5.5vw, 64px)` — logo sizing
- `repeat(auto-fit, minmax(250px, 1fr))` — flexible grids
- Fixed column counts with media queries for major content grids
- Flexbox wrapping for navigation and buttons

---

## Verification

See `VERIFICATION_REPORT.md` for the complete feature-by-feature verification checklist including:
- Team array + dynamic rendering + shuffle
- Form validation with live feedback (no alerts)
- Homepage black/white/purple theme
- Registration page black reduction
- About Us horizontal sections + square padding
- Animated custom logo on all pages
- Site-wide purple/white/black consistency

---

## Development Notes

### localStorage Keys
- `enrollmentData` — stores last submitted enrollment form data
- `contactData` — stores last submitted contact form data
- `selectedCourse` — session-only, used for course pre-selection from courses page

### External Dependencies
- **None** — pure HTML, CSS, and vanilla JavaScript
- **Fonts:** System font stack only (Segoe UI, Tahoma, Geneva, Verdana, sans-serif)
- **Icons:** Emoji characters for team avatars and feature icons
- **Maps:** Google Maps iframe embed (contact page)

### Browser Compatibility
- Modern CSS (gradients, backdrop-filter, clamp, grid) requires recent browsers
- JavaScript uses ES6+ (template literals, arrow functions, const/let, forEach, etc.)
- SVG animation uses `requestAnimationFrame` and CSS `transform`

---

*End of Documentation Index*
