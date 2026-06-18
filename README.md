# 🎓 BridgeWay Institute of Technology - Complete Web Application

## Project Overview

A fully responsive, modern educational technology website for BridgeWay Institute of Technology. The site showcases 4 professional courses with an advanced enrollment system, real-time statistics dashboard, and complete contact management.

---

## 📁 Project Structure

```
Bridgeway_project.Group C/
├── index.html              # Home page with hero section
├── courses.html            # Courses page with card layout
├── enrollment.html         # Enrollment form + dashboard + course browser
├── contact.html            # Contact form with map integration
├── style.css               # Complete responsive styling
├── script.js               # All JavaScript functionality
└── README.md              # This file
```

---

## 🌐 Pages & Features

### 1. **Home Page (index.html)**

- **Hero Section** - Eye-catching banner with call-to-action buttons
- **Welcome Section** - About BridgeWay Institute
- **Why Choose Us** - 4 feature cards (Expert Instructors, Modern Curriculum, Career Support, Proven Results)
- **Navigation** - Links to all pages
- **Footer** - Contact info and quick links

### 2. **Courses Page (courses.html)**

- **Course Cards** - 4 professional course cards with:
  - Course name and description
  - Duration and pricing (in KES - Kenya Shillings)
  - "Enroll Now" button
- **Search Functionality** - Real-time course search
- **Responsive Grid** - Automatically adjusts to screen size

**Courses Offered:**

1. Certificate in Web Development - 3 Months - KShs. 30,769
2. Diploma in Microsoft Office - 2 Months - KShs. 14,800
3. Certificate in Graphic Design - 4 Months - KShs. 26,545
4. Certificate in Computer Networking - 5 Months - KShs. 35,978

### 3. **Enrollment Page (enrollment.html)**

#### A. **Enrollment Dashboard**

- **Total Enrollments Counter** - Displays total number of students enrolled
- **Enrollment Breakdown** - Shows which courses have enrollments
- **Enrollment Percentage Chart** - Bar chart showing distribution (%)
  - Updates in real-time when enrollment button is clicked
  - Shows percentage, course name, and enrollment count
  - Uses gradient color bars for visual appeal

#### B. **Course Browser**

- **Search Input** - "🔎 Search courses by name, duration, or price..."
- **Dynamic Course Display** - All 4 courses displayed on page load using JavaScript loop
- **Real-time Filtering** - As user types, filters courses by:
  - Course name
  - Duration
  - Price
  - Description
- **Course Cards** - Display courses with enroll counters and buttons

#### C. **Enrollment Form**

- **Course Selection** - Dropdown with all courses and pricing
- **Personal Information** - First name, last name, email, phone, education level
- **Address Information** - City, county, postal code
- **Payment Methods** - M-Pesa, Bank Transfer, Credit Card options
- **Terms & Conditions** - Required checkbox
- **Newsletter Subscription** - Optional checkbox
- **Form Validation** - Required fields, email format, phone validation
- **Course Summary Sidebar** -
  - Selected course details
  - Price breakdown (Tuition + Platform fee)
  - Course benefits list
  - Support contact information

### 4. **Contact Page (contact.html)**

- **Contact Form** - Name, email, phone, subject, message
- **Contact Information** - Office location, phone numbers (main, support, admissions)
- **Email Links** - Clickable email addresses for different departments
- **Business Hours** - Weekly schedule
- **Social Media Links** - Facebook, Twitter, LinkedIn, Instagram
- **Google Maps Embed** - Embedded map showing location
- **Form Validation** - Required field checking

---

## 🎨 Design & Styling

### Color Scheme

- **Primary Color**: `#0066cc` (Professional Blue)
- **Secondary Color**: `#0052a3` (Dark Blue)
- **Success Color**: `#27ae60` (Green)
- **Background**: `#f4f4f4` (Light Gray)
- **Text**: `#333` (Dark Gray)

### Typography

- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Font Sizes**: Responsive scaling for different devices
- **Font Weights**: 500 (regular), 600 (semi-bold), 700 (bold)

### Responsive Breakpoints

- **Desktop (1200px+)** - Full multi-column layouts
- **Tablet (768px)** - Adjusted grid, 2-column for cards
- **Mobile (480px)** - Single column, optimized touch targets

### Visual Effects

- **Gradients** - Blue gradient backgrounds and buttons
- **Shadows** - Box shadows for depth
- **Animations** - Fade-in, slide-in effects
- **Hover States** - Transform, color, shadow changes
- **Transitions** - Smooth 0.3s ease animations
- **Border Radius** - 8px-16px for modern rounded corners

---

## ⚙️ JavaScript Functionality

### Core Data Structure

```javascript
const coursesData = [
  {
    id: 1,
    name: "Certificate in Web Development",
    duration: "3 Months",
    price: 30769,
    enrollments: 0, // Variable counter (not hard-coded)
    description: "...",
  },
  // ... 3 more course objects
];

let totalEnrollmentsCount = 0; // Total enrollments variable
```

### Key Functions

#### **displayAllCourses()**

- Displays all 4 courses on page load
- Uses `for` loop to iterate through `coursesData` array
- Generates HTML using template literals
- Updates DOM via `innerHTML`

#### **enrollStudent(courseId)**

- Increments course enrollments by 1
- Increments total enrollments counter
- Updates enrollment statistics
- Shows success notification
- **Variables Used:** `course.enrollments`, `totalEnrollmentsCount`

#### **filterCourses(searchTerm)**

- Filters courses array based on search input
- Searches by: name, duration, price, description
- Updates results area with matching courses
- Shows "No courses found" if no matches

#### **updateEnrollmentStats()**

- Updates total enrollments display
- Updates enrollment breakdown text
- Calculates percentages for chart
- Regenerates chart visualization

#### **updateEnrollmentChart()**

- Creates percentage bar chart
- Shows: Course name, percentage, enrollment count
- Uses gradient colors for visual appeal
- Updates in real-time

#### **setupCourseSearch()**

- Adds event listener to search input
- Triggers filtering on keyup event
- Real-time updates

### Form Handling

#### **Enrollment Form**

- Validates all required fields
- Checks email format
- Validates phone number (Kenya format: +254 or 0 followed by 9 digits)
- Stores data to localStorage
- Shows success confirmation

#### **Contact Form**

- Validates required fields
- Email format validation
- Stores submission data
- Shows confirmation message

---

## 🔗 Navigation Structure

All pages contain a sticky navbar with consistent navigation:

- **Home** (index.html)
- **Courses** (courses.html)
- **Enrollment** (enrollment.html)
- **Contact** (contact.html)
- **Active Page Indicator** - Current page highlighted in blue

---

## 💾 Data Storage

### localStorage Integration

The application uses browser's `localStorage` to persist:

1. **Enrollment Data** - Form submissions stored as JSON
2. **Contact Data** - Contact form submissions stored as JSON

```javascript
localStorage.setItem("enrollmentData", JSON.stringify(formData));
localStorage.setItem("contactData", JSON.stringify(contactData));
```

---

## 📊 Enrollment Dashboard Features

### Statistics Display

- **Real-time Counter** - Updates each time student enrolls
- **Enrollment Text** - "Total Enrollments: X students"
- **Breakdown Text** - Shows which courses have students
  - Example: "Breakdown: Web Development (5) • Graphic Design (3) • Networking (2)"

### Percentage Chart

- **Dynamic Bar Visualization** - Gradient blue bars
- **Percentage Calculation** - `(enrollments / totalEnrollments * 100).toFixed(1)`
- **Labels** - Course name, percentage (%), enrollment count
- **Color-coded** - Gradient from #0066cc to #0052a3

### Enrollment Notifications

- **Green Success Message** - Slides in from top-right
- **Auto-dismiss** - Disappears after 3 seconds
- **Message Format** - "✓ Successfully enrolled in [Course Name]!"

---

## 🔍 Course Search & Filter

### Search Features

- **Real-time Filtering** - Updates as user types
- **Multi-field Search** - Searches across:
  - Course name
  - Duration
  - Price
  - Description
- **No Results Message** - Displays if no courses match
- **Clear Search** - Empty search shows all courses

### Search Example

User types "web" → Shows only "Certificate in Web Development"
User types "3" → Shows "Certificate in Web Development" (3 months)
User types "30" → Shows "Certificate in Web Development" (price: 30,769)

---

## 📋 Course Information

### Course Details Included

| Course              | Duration | Price        | Enrollments |
| ------------------- | -------- | ------------ | ----------- |
| Web Development     | 3 Months | KShs. 30,769 | 0 (dynamic) |
| Microsoft Office    | 2 Months | KShs. 14,800 | 0 (dynamic) |
| Graphic Design      | 4 Months | KShs. 26,545 | 0 (dynamic) |
| Computer Networking | 5 Months | KShs. 35,978 | 0 (dynamic) |

### Each Course Includes

- **Professional description** - Benefits and skills learned
- **Duration** - Time commitment
- **Price** - In Kenya Shilling (KShs.)
- **Enrollment count** - Real-time counter
- **Dynamic ID** - For database integration

---

## ✅ Form Validations

### Enrollment Form Validation

- ✓ Required field checking
- ✓ Email format validation (basic regex)
- ✓ Phone number validation (Kenya format)
- ✓ Course selection required
- ✓ Personal details required
- ✓ Payment method selection required
- ✓ Terms acceptance required

### Contact Form Validation

- ✓ Full name required
- ✓ Email required and validated
- ✓ Subject required
- ✓ Message required

### Payment Method Options

1. **M-Pesa** - Mobile money (📱 icon)
2. **Bank Transfer** - Direct bank (🏦 icon)
3. **Credit Card** - Card payment (💳 icon)

---

## 📱 Responsive Design Features

### Mobile Optimization

- **Touch-friendly buttons** - Larger click targets on mobile
- **Single column layout** - Stacked content on small screens
- **Optimized navigation** - Compact navbar on mobile
- **Responsive images** - Embedded maps adjust to screen
- **Form inputs** - Full-width inputs on mobile

### Tablet Optimization

- **Two-column grid** - For course cards
- **Adjusted spacing** - Better use of medium screen space
- **Readable typography** - Balanced text sizes

### Desktop Experience

- **Full-featured layout** - All features visible
- **Multi-column grids** - Efficient content distribution
- **Sidebar integration** - Enrollment course summary sidebar
- **Smooth animations** - Enhanced with hover effects

---

## 🚀 How to Use

### Viewing the Website

1. Open any `.html` file in a web browser
2. Navigate between pages using the navbar links
3. Test search functionality on courses pages
4. Try enrolling to see dashboard updates
5. Submit forms to test validation

### Testing Enrollment Dashboard

1. Go to Enrollment page
2. Scroll to "📊 Student Enrollment Dashboard"
3. Scroll to "🔍 Browse Available Courses"
4. Click "➕ Enroll Now" button on any course
5. Watch the counter and chart update
6. Try searching for courses using the search box

### Testing Forms

1. **Enrollment Form** - Fill out course selection, personal info, payment
   - Try submitting with empty fields (validation shows)
   - Enter invalid email (validation shows)
   - Submit successfully to see confirmation
2. **Contact Form** - Fill out name, email, subject, message
   - Submit to see success message

---

## 📞 Contact Information

**BridgeWay Institute of Technology**

- **Email**: info@bridgeway.com
- **Support**: support@bridgeway.com
- **Admissions**: admissions@bridgeway.com
- **Phone**: +254 700 000 000
- **Address**: 14 Innovation Drive, Westgate Business Park, Nairobi, Kenya
- **Hours**: Monday-Friday 8:00 AM - 6:00 PM | Saturday 9:00 AM - 2:00 PM

---

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with Grid and Flexbox
- **JavaScript (ES6)** - No external libraries
- **localStorage** - Client-side data persistence
- **Google Maps Embed** - Location integration

---

## 📈 Future Enhancements

Potential features for future versions:

1. Backend database integration (Node.js/Express/MongoDB)
2. User authentication and login system
3. Payment gateway integration (M-Pesa API)
4. Email notifications
5. Student dashboard with course progress
6. Admin panel for course management
7. Certificate generation
8. Student testimonials/reviews
9. Blog section
10. Live chat support

---

## 📄 License & Credits

Project created for BridgeWay Institute of Technology
Group C - 2026

---

## ✨ Features Summary

### ✅ Completed Features

- [x] 4 professional course offerings
- [x] Responsive design (desktop, tablet, mobile)
- [x] Course search and filtering
- [x] Enrollment form with validation
- [x] Enrollment tracking dashboard
- [x] Real-time statistics and charts
- [x] Contact form with validation
- [x] Google Maps integration
- [x] localStorage data persistence
- [x] Professional UI/UX
- [x] Navigation across all pages
- [x] Payment method selection
- [x] Course browser with dynamic display
- [x] Enrollment counter variables (not hard-coded)
- [x] Array-based course data
- [x] Loop-based course display
- [x] Real-time search filtering
- [x] Percentage-based enrollment chart

---

## 🎉 Project Status: COMPLETE ✅

All requirements have been implemented and tested. The website is fully functional and ready for deployment.

**Last Updated**: June 9, 2026
**Version**: 1.0 - Production Ready
