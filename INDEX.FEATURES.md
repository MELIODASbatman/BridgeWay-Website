# BridgeWay Institute of Technology — Feature Index

**Project:** BridgeWay Website  
**Feature Index:** `INDEX.FEATURES.md`  
**Last Updated:** 2026-06-10  
**Root Directory:** `C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C`

---

## 1. Dynamic Team Section (About Us Page)

### Feature Overview
The "Our Team" section renders team member cards dynamically from a JavaScript array rather than static HTML. This enables runtime shuffling and easy content updates.

### Capabilities
- **Data-Driven Rendering:** Team members stored in `teamMembers` array (`script.js`) with properties: `name`, `role`, `fact`, `avatar`
- **Dynamic HTML Generation:** Loop iterates array on page load and builds card HTML via `innerHTML`
- **Card Display:** Each card shows:
  - Avatar emoji
  - Member name (`<h3>`)
  - Role/title (`.team-role`)
  - Fun fact description (`<p>`)
- **Shuffle Team Button:** Randomly reorders array using `Math.random() - 0.5` comparator and re-renders cards
- **Hover Effects:** Cards lift (`translateY(-5px)`) with enhanced shadow on hover
- **Scalable:** Easy to add/remove members by editing the array

### Files Involved
- `about.html` — contains `#teamGrid` container and `#shuffleBtn`
- `script.js` — `teamMembers` array, `renderTeamMembers()` function, shuffle logic
- `style.css` — `.team-card`, `.team-avatar`, `.team-role`, `.shuffle-btn`

---

## 2. Form Validation with Live Feedback (No Alerts)

### Feature Overview
All form pages implement inline validation with real-time error messaging. No browser `alert()` dialogs are used.

### Capabilities
- **Required Field Validation:** Checks that mandatory fields are not empty on submit
- **Specific Error Messages:** Each validation failure identifies the exact field (e.g., "First Name is required", "Valid Email Address is required", "You must accept the Terms and Conditions")
- **On-Page Message Display:** Errors and success messages appear in designated `<div>` containers:
  - Contact form: `#contactFormMessage`
  - Enrollment form: `#enrollmentFormMessage`
- **Visual Error Highlighting:** Invalid fields get a purple border and subtle purple background tint (`.error-highlight`)
- **Email Format Validation:** Regex check for valid email structure
- **Success Messages:** Personalized confirmation using actual input values:
  - Contact: "Thank you [Name]! We will be in touch with you shortly."
  - Enrollment: "Thank you [FirstName]! We will be in touch about [Course]."
- **Form Reset:** All fields cleared after successful submission
- **Data Persistence:** Submitted data saved to `localStorage` for record-keeping

### Pages Covered
- `contact.html` — Contact form with name, email, phone, subject, message
- `enrollment.html` — Multi-section enrollment form with personal info, address, payment, and document upload

### Files Involved
- `contact.html` — form markup, `#contactFormMessage` container
- `enrollment.html` — form markup, `#enrollmentFormMessage` container
- `script.js` — `setupContactForm()`, enrollment form submit handler
- `style.css` — `.form-message`, `.form-message.error`, `.form-message.success`, `.error-highlight`

---

## 3. Homepage Black / White / Purple Theme

### Feature Overview
The homepage uses a cohesive three-color aesthetic system: black, white, and purple.

### Capabilities
- **Hero Section:** Deep black-to-purple gradient background (`linear-gradient(135deg, #0a0a0a, #1a0533, #4c1d95)`)
- **Radial Glow Overlay:** Subtle purple radial gradients for depth
- **Buttons:**
  - Primary: White gradient with purple drop shadow
  - Secondary: Translucent white with purple border, backdrop blur
- **Content Cards:** White backgrounds with purple borders and soft shadows
- **Gradient Text:** Headings use `background-clip: text` with black-to-purple gradients
- **Hover Effects:** Purple shadow glows on cards and buttons
- **Body Background:** Soft lavender-to-white gradient (`linear-gradient(180deg, #fafafa, #f5f3ff)`)

### Files Involved
- `index.html` — homepage structure
- `style.css` — `.home-main`, `.hero-section`, `.hero-title`, `.btn-primary`, `.btn-secondary`, `.welcome-section`, `.feature-card`

---

## 4. Registration Page — Reduced Black Intensity

### Feature Overview
The enrollment/registration page was adjusted to avoid overwhelming dark backgrounds, creating a more breathable, modern form experience.

### Capabilities
- **Lightened Page Background:** Changed from dark purple-black gradient to soft lavender gradient (`#f5f3ff` → `#ede9fe`)
- **White Form Container:** Enrollment form wrapper uses white with subtle purple border and soft shadow
- **Light Inputs:** Form inputs have white backgrounds with purple focus rings instead of dark backgrounds
- **Light Sidebar:** Course summary sidebar uses white with purple accents
- **Light Search:** Course search input uses white background
- **Light Cards:** Course display cards and document upload cards use white backgrounds
- **Light Chart:** Enrollment chart container uses white background with purple accents

### Files Involved
- `enrollment.html` — structure unchanged, styling updated
- `style.css` — `.enrollment-main`, `.enrollment-form-wrapper`, `.course-summary`, `.course-browser-section`, `.chart-container`, `.form-input`, `.document-card`, `.course-search-input`, `.course-display-card`

---

## 5. About Us Horizontal Sections with Square Padding

### Feature Overview
About Us content sections are organized into clean horizontal grid layouts with consistent square padding.

### Capabilities
- **Reasons Section:** 3-column grid (`.reasons-grid`) showcasing "Why Choose BridgeWay" cards
  - Responsive: 3 columns → 2 columns (tablet) → 1 column (mobile)
- **Values Section:** 4-column grid (`.values-grid`) for core values
  - Responsive: 4 columns → 2 columns (tablet) → 1 column (mobile)
- **Square Padding:** Section containers use uniform padding (e.g., `padding: 50px`) for balanced whitespace
- **Consistent Cards:** White cards with purple top border, hover lift effect, and soft shadow
- **Horizontal Layout:** Cards align in rows rather than stacking vertically on desktop

### Files Involved
- `about.html` — section markup with `.reasons-grid`, `.values-grid`
- `style.css` — `.reasons-grid`, `.values-grid`, `.reason-card`, `.value-item`, `.about-intro-section`, `.mission-section`

---

## 6. Animated Custom Logo

### Feature Overview
A custom SVG logo representing BridgeWay Institute of Technology is injected into every page via JavaScript, featuring a bridge motif and continuous animation.

### Capabilities
- **SVG Design:**
  - Navy gradient background with purple border
  - Dual bridge arches with gradient stroke
  - 5 vertical pillars/rungs
  - 4 pulsing node circles with glow filters
  - Central spire with diamond topper
  - "BRIDGEWAY" text with gradient fill
  - "INSTITUTE OF TECHNOLOGY" subtitle
- **Injection:** `logo-animation.js` automatically inserts logo into `<nav>` on every page, replacing the old text logo
- **Continuous Animation (`requestAnimationFrame`):**
  - Bridge sway: ±4px vertical oscillation
  - Node pulse: scale 1.0–1.4 + opacity stagger
  - Rung pulse: scale 1.0–1.25 with stagger
  - Glow pulse: radial gradient scales 1.0–1.2
  - Text float: ±2px vertical drift
  - Spire/diamond sync with bridge movement
- **Interactive Effects:**
  - Hover: scale 1.1, rotate -3°, enhanced purple glow
  - Leave: smooth spring-back
  - Click: playful bounce (scale 0.9 → 1.0, rotate 5°)
- **Responsive Sizing:** `clamp(52px, 5.5vw, 64px)` with drop shadow
- **Cross-Page Consistency:** Script loaded on `index.html`, `about.html`, `courses.html`, `enrollment.html`, `contact.html`

### Files Involved
- `logo-animation.js` — SVG definition, injection logic, animation loop, event handlers
- `style.css` — `.bridgeway-brand` sizing and positioning
- All HTML pages — `<script src="logo-animation.js">` tag

---

## 7. Site-Wide Three-Color Theme (Purple / White / Black)

### Feature Overview
The entire website uses only three core color families for visual consistency.

### Color System
| Family | Tokens | Usage |
|--------|--------|-------|
| **Purple** | `#7c3aed`, `#4f46e5`, `#a78bfa`, `#c4b5fd`, `#1e1b4b`, `#312e81` | Accents, gradients, headings, borders, hover states, dark backgrounds |
| **White** | `#ffffff`, `#f5f3ff`, `#f3f0ff`, `#fafafa` | Cards, form inputs, text on dark, body backgrounds |
| **Black** | `#0a0a0a`, `#2a1f4e` | Body text, deep footer, high-contrast elements |

### Implementation Details
- All stray colors (blue, red, green, orange, etc.) removed from stylesheet
- Gradients exclusively use purple-to-purple or white-to-purple combinations
- Text colors adjusted for contrast ratios
- Shadows and borders use purple rgba values
- Dark backgrounds use deep purple-navy instead of pure black for a softer feel

### Files Involved
- `style.css` — global color replacements across all sections

---

## 8. Responsive Design System

### Feature Overview
The website adapts to all screen sizes through a structured breakpoint system.

### Breakpoints
| Breakpoint | Device | Key Layout Changes |
|------------|--------|-------------------|
| **992px** | Tablet landscape | Feature cards: 4→2 columns; Reasons: 3→2; Values: 4→2 |
| **768px** | Tablet portrait | Enrollment grid: 2→1 column; forms stack vertically |
| **600px** | Mobile large | Feature/Reason/Value grids collapse to 1 column |
| **480px** | Mobile small | Reduced padding, smaller titles, compact charts |

### Techniques Used
- CSS Grid with `repeat(auto-fit, minmax(...))` and fixed column counts
- Flexbox with `flex-wrap: wrap` for navigation and buttons
- `clamp()` for fluid typography and logo sizing
- Media queries for targeted overrides

### Files Involved
- `style.css` — `@media` sections throughout

---

## 9. Course Browsing & Enrollment Tracking

### Feature Overview
Users can browse, search, and enroll in courses with live statistics.

### Capabilities
- **Course Display:** Cards show course name, description, duration, price, enrollment count
- **Search/Filter:** Real-time search by name, duration, price, or description
- **Enrollment Action:** "Enroll Now" buttons increment enrollment count
- **Dashboard Stats:** Total enrollments displayed with per-course breakdown
- **Bar Chart:** Visual enrollment distribution chart rendered dynamically
- **localStorage Persistence:** Enrollment data persists across sessions
- **Course Pre-selection:** Selecting a course from the catalog pre-fills the enrollment form

### Files Involved
- `courses.html` — course card layout
- `enrollment.html` — dashboard, course browser, enrollment form
- `script.js` — `coursesData` array, `displayAllCourses()`, `filterEnrollmentCourses()`, `enrollStudent()`, `updateEnrollmentStats()`, `updateEnrollmentChart()`

---

## 10. File Upload Previews

### Feature Overview
The enrollment form supports document uploads with live image/PDF previews.

### Capabilities
- **Accepted Formats:** Images (`image/*`) and PDFs (`application/pdf`)
- **File Size Validation:** 5MB limit enforced client-side
- **Image Preview:** Read via `FileReader` and displayed as thumbnail
- **PDF Preview:** Shows "📄 PDF Document" icon with filename
- **Error Handling:** Displays warning if file exceeds size limit
- **Preview Container:** Styled preview area beneath each upload input

### Files Involved
- `enrollment.html` — file inputs with `#idCardPreview`, `#birthCertPreview`, `#ksceResultsPreview`
- `script.js` — `setupDocumentPreviews()` function
- `style.css` — `.file-preview`, `.preview-name`, `.preview-pdf`, `.preview-error`

---

## 11. Contact Page with Map Integration

### Feature Overview
Full contact form with sidebar information and embedded map.

### Capabilities
- **Contact Form:** Name, email, phone, subject dropdown, message textarea, newsletter opt-in
- **Validation:** Live validation with on-page error/success messages
- **Contact Sidebar:** Office location, phone numbers, email addresses, business hours, social links
- **Google Maps Embed:** Embedded iframe showing office location
- **Form Persistence:** Contact submissions saved to `localStorage`

### Files Involved
- `contact.html` — form markup, sidebar, map iframe
- `script.js` — `setupContactForm()`
- `style.css` — `.contact-form-wrapper`, `.contact-sidebar`, `.contact-info-box`

---

## Feature Cross-Reference Table

| Feature | Pages Affected | Primary Files | Status |
|---------|---------------|---------------|--------|
| Team Array + Shuffle | About Us | `about.html`, `script.js`, `style.css` | ✅ Complete |
| Form Validation (No Alerts) | Contact, Enrollment | `contact.html`, `enrollment.html`, `script.js`, `style.css` | ✅ Complete |
| Homepage B/W/P Theme | Home | `index.html`, `style.css` | ✅ Complete |
| Reduced Black (Registration) | Enrollment | `enrollment.html`, `style.css` | ✅ Complete |
| Horizontal Sections + Square Padding | About Us | `about.html`, `style.css` | ✅ Complete |
| Animated Logo | All Pages | `logo-animation.js`, `style.css`, all HTML | ✅ Complete |
| Site-Wide 3-Color Theme | All Pages | `style.css` | ✅ Complete |
| Responsive Breakpoints | All Pages | `style.css` | ✅ Complete |
| Course Browsing & Enrollment | Courses, Enrollment | `courses.html`, `enrollment.html`, `script.js` | ✅ Complete |
| File Upload Previews | Enrollment | `enrollment.html`, `script.js`, `style.css` | ✅ Complete |
| Contact Page + Map | Contact | `contact.html`, `script.js`, `style.css` | ✅ Complete |

---

*End of Feature Index*
