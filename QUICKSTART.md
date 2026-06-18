# BridgeWay Institute of Technology — Quick Start Guide

**Project:** BridgeWay Website  
**Quick Start File:** `QUICKSTART.md`  
**Root Directory:** `C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C`

---

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local file manager to navigate folders
- **Optional:** VS Code or any text editor for editing files

> **Note:** No build tools, package managers, or servers are required. This is a static site — just open `index.html` in a browser.

---

## Project Structure

```
Bridgeway_project.Group C/
├── index.html                  # Homepage
├── about.html                  # About Us
├── courses.html                # Course Catalog
├── enrollment.html             # Enrollment & Dashboard
├── contact.html                # Contact Form
├── style.css                   # All styles (Purple / White / Black theme)
├── script.js                   # Main JavaScript logic
├── logo-animation.js           # Animated SVG logo
├── VERIFICATION_REPORT.md      # Feature verification checklist
├── INDEX_DOCUMENTATION.md      # Full documentation index
└── INDEX.FEATURES.md           # Feature index
```

---

## Run the Website (30 seconds)

### Option 1: Direct Open
1. Navigate to `C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C`
2. Double-click **`index.html`**
3. The site opens in your default browser

### Option 2: VS Code Live Server (Recommended)
1. Open the folder in VS Code
2. Right-click `index.html` → **"Open with Live Server"**
3. Browser opens at `http://127.0.0.1:5500`

### Option 3: PowerShell
```powershell
cd "C:\Users\dougl\OneDrive\Desktop\Bridgeway_project.Group C"
start index.html
```

---

## Key Features to Try

| Feature | How to Test |
|---------|-------------|
| **Animated Logo** | Open any page → hover over the logo in the navbar → observe pulse animation and hover glow |
| **Team Shuffle** | Go to **About Us** → click **"Shuffle Team"** button → cards reorder randomly |
| **Form Validation** | Go to **Contact** or **Enrollment** → submit empty forms → see inline error messages (no alerts) |
| **Course Search** | Go to **Courses** → type in search box → cards filter in real-time |
| **Enroll Flow** | Go to **Enrollment** → select course → fill form → submit → see confirmation with your name + course |
| **Responsive** | Resize browser window → grids collapse from 4 → 2 → 1 columns |

---

## Edit Content Quick Reference

| What to Edit | File | Section |
|--------------|------|--------|
| Team member names/roles | `script.js` | `const teamMembers = [...]` (line ~661) |
| Course list/prices | `script.js` | `const coursesData = [...]` (line ~2) |
| Page text/titles | `*.html` files | Edit HTML directly |
| Colors/theme | `style.css` | Search for hex codes like `#7c3aed`, `#ffffff`, `#0a0a0a` |
| Logo animation speed | `logo-animation.js` | Change `const duration = 2400` (line ~77) |

---

## Common Tasks

### Add a New Team Member
1. Open `script.js`
2. Find `const teamMembers = [`
3. Add a new object:
   ```javascript
   {
     name: "Your Name",
     role: "Your Role",
     fact: "Your fun fact",
     avatar: "😀"
   }
   ```
4. Save and refresh any page — the team section renders automatically

### Change a Course Price
1. Open `script.js`
2. Find the course in `coursesData`
3. Update the `price` field
4. Save and refresh

### Adjust Logo Size
1. Open `style.css`
2. Find `.bridgeway-brand svg`
3. Change `height: clamp(52px, 5.5vw, 64px)` to your preference

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Logo not showing | Ensure `logo-animation.js` is loaded before `script.js` in the HTML `<head>` |
| Styles look broken | Clear browser cache (Ctrl+Shift+R) |
| Form validation not working | Check browser console (F12) for JavaScript errors |
| Search not filtering | Ensure `script.js` is loaded and `setupCoursesPageSearch()` runs on `DOMContentLoaded` |

---

## Documentation

- **`INDEX_DOCUMENTATION.md`** — Full project reference (pages, styling, JS logic, color system)
- **`INDEX.FEATURES.md`** — Detailed feature breakdown with capabilities and file mappings
- **`VERIFICATION_REPORT.md`** — Feature-by-feature completion checklist

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties excluded; uses gradients, grid, flexbox, backdrop-filter, clamp()
- **Vanilla JavaScript (ES6+)** — No frameworks or libraries
- **SVG** — Inline animated logo with filters and gradients

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

*Requires support for CSS Grid, backdrop-filter, and ES6 template literals.*

---

*End of Quick Start Guide*
