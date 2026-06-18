# BridgeWay Website — Verification Report

**Date:** 2026-06-10  
**Project:** BridgeWay Institute of Technology  
**Working Directory:** `C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C`

---

## 1. Team Section (About Us Page)

### Requirement
- Array of at least 3 objects with `name`, `role`, and `fact`
- Loop through array on page load and generate HTML for each team member using `innerHTML`
- Each card displays name, role, and fun fact
- "Shuffle Team" button reorders the array randomly and re-renders cards
- Hover effect on cards

### Implementation
| Check | Status |
|-------|--------|
| `teamMembers` array in `script.js` with 4 objects | ✅ |
| Each object has `name`, `role`, `fact`, `avatar` | ✅ |
| `renderTeamMembers()` generates HTML via loop + `innerHTML` | ✅ |
| Displays name, role, and fun fact on each card | ✅ |
| Shuffle button randomizes array and re-renders | ✅ |
| `.team-card:hover` lift + shadow in CSS | ✅ |

### Files Modified
- `about.html` — replaced hardcoded cards with `<div id="teamGrid">` and added `#shuffleBtn`
- `script.js` — added `teamMembers` array, `renderTeamMembers()`, shuffle logic
- `style.css` — updated `.team-section` card styles

---

## 2. Form Validation & Live Feedback (All Pages with Forms)

### Requirement
- Add validations and live feedback to all form pages
- Add submit button and make functional with JS
- On submit, check required fields are not empty
- Display specific error messages identifying which field is empty — **no `alert()`**
- All messages must appear on page in a designated div/paragraph
- If all required info filled, display: `Thank you [Name]! We will be in touch about [course].`
- Use actual entered values
- Reset all form fields after successful submission

### Implementation
| Check | Status |
|-------|--------|
| Contact form (`contact.html`) — live validation | ✅ |
| Enrollment form (`enrollment.html`) — live validation | ✅ |
| Error messages appear in `#contactFormMessage` / `#enrollmentFormMessage` | ✅ |
| No `alert()` used — replaced with on-page `.form-message.error` panel | ✅ |
| Specific field-level errors (e.g. "First Name is required") | ✅ |
| Success message uses actual values: `Thank you ${firstName}! We will be in touch about ${course}.` | ✅ |
| Form resets after successful submission | ✅ |

### Files Modified
- `contact.html` — added `#contactFormMessage`, removed `required` attributes, updated field IDs for JS
- `enrollment.html` — added `#enrollmentFormMessage`
- `script.js` — replaced `alert()` with `.form-message` panels in both `setupContactForm()` and enrollment submit handler
- `style.css` — added `.form-message`, `.form-message.error`, `.form-message.success`, `.error-highlight`

---

## 3. Homepage Color Theme

### Requirement
- Change homepage color to three main colors: black, white, and purple
- Make it aesthetic and appealing

### Implementation
| Check | Status |
|-------|--------|
| Body/global theme uses black, white, purple palette | ✅ |
| Non-compliant colors (`#0066cc`, `#ffc107`, `#e8f0f7`, etc.) replaced | ✅ |
| Hero section: black-to-purple gradient | ✅ |
| Buttons: white primary with purple glow, translucent secondary | ✅ |
| Feature cards: white with purple borders/shadows | ✅ |
| Headings: black-to-purple gradient text | ✅ |
| Hover effects use purple shadows | ✅ |

### Files Modified
- `style.css` — updated `.home-main`, `.hero-section`, `.hero-title`, `.hero-subtitle`, `.btn-primary`, `.btn-secondary`, `.welcome-section`, `.why-choose-section`, `.feature-card`, `.feature-icon`, `.feature-card h3`, `.feature-card p`

---

## 4. Registration Page — Reduce Black Overpowering

### Requirement
- Make the black less overpowering on the registration/enrollment page

### Implementation
| Check | Status |
|-------|--------|
| `.enrollment-main` background changed from dark gradient to light lavender | ✅ |
| `.enrollment-form-wrapper` background changed to white/light | ✅ |
| `.course-summary` (sidebar) background lightened | ✅ |
| `.course-browser-section` background lightened | ✅ |
| `.chart-container` background lightened | ✅ |
| Form inputs changed from dark backgrounds to white/light | ✅ |
| Document cards lightened | ✅ |
| Search input lightened | ✅ |
| Course display cards lightened | ✅ |
| Bar chart labels/values adjusted for light background | ✅ |

### Files Modified
- `style.css` — updated `.enrollment-main`, `.enrollment-form-wrapper`, `.course-summary`, `.course-browser-section`, `.chart-container`, `.form-input`, `.document-card`, `.course-search-input`, `.course-display-card`, `.bar-label`, `.bar-container`, `.bar-value`, `.no-data`

---

## 5. About Us Horizontal Sections & Square Padding

### Requirement
- Make horizontal sections in About Us have square padding

### Implementation
| Check | Status |
|-------|--------|
| `.reasons-grid` set to 3-column horizontal grid | ✅ |
| `.values-grid` set to 4-column horizontal grid | ✅ |
| Responsive breakpoints: 3→2→1, 4→2→1 | ✅ |
| `.about-intro-section` square padding (`50px`) | ✅ |
| `.mission-section` square padding (`50px`) | ✅ |

### Files Modified
- `style.css` — updated `.reasons-grid`, `.values-grid`, `.about-intro-section`, `.mission-section`

---

## 6. Animated Logo

### Requirement
- Add a descriptive, perfect logo for the institution
- Make it appealing and well designed
- Appear on all pages
- Animated using JavaScript

### Implementation
| Check | Status |
|-------|--------|
| Custom SVG logo created in `logo-animation.js` | ✅ |
| Logo features: bridge architecture, nodes, rungs, glow effects, "BRIDGEWAY" text, "INSTITUTE OF TECHNOLOGY" subtitle | ✅ |
| Logo injected into navbar on all pages | ✅ |
| `<script src="logo-animation.js">` added to `index.html`, `about.html`, `contact.html`, `courses.html`, `enrollment.html` | ✅ |
| Continuous animation: bridge sway, node pulse, rung scale, glow pulse | ✅ |
| Hover interaction: scale + rotate + enhanced glow | ✅ |
| Click interaction: playful bounce | ✅ |
| Logo is larger (`clamp(52px, 5.5vw, 64px)`) with drop shadow | ✅ |

### Files Modified / Created
- `logo-animation.js` — created (143 lines)
- `style.css` — added `.bridgeway-brand` styles
- `index.html` — added logo script
- `about.html` — added logo script
- `contact.html` — added logo script
- `courses.html` — added logo script
- `enrollment.html` — added logo script

---

## 7. Global Theme Consistency (Purple / White / Black)

### Requirement
- Entire website in three core colors: purple, white, black

### Implementation
| Check | Status |
|-------|--------|
| All non-compliant colors removed/replaced | ✅ |
| Remaining palette: `#1e1b4b`, `#312e81`, `#7c3aed`, `#4f46e5`, `#a78bfa`, `#c4b5fd`, `#ffffff`, `#f5f3ff`, `#f3f0ff`, `#0a0a0a` | ✅ |
| Gradients use purple/white/black only | ✅ |
| Hover states, shadows, borders use purple tones | ✅ |
| Text colors adjusted for readability | ✅ |

### Files Modified
- `style.css` — global color palette cleanup across all sections

---

## Summary

| Feature | Status |
|---------|--------|
| Team array + dynamic rendering + shuffle | ✅ Complete |
| Form validation with live feedback (no alerts) | ✅ Complete |
| Homepage black/white/purple theme | ✅ Complete |
| Registration page black reduction | ✅ Complete |
| About Us horizontal sections + square padding | ✅ Complete |
| Animated custom logo on all pages | ✅ Complete |
| Site-wide purple/white/black consistency | ✅ Complete |
