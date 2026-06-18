const ENROLLMENTS_STORAGE_KEY = "bridgewayEnrollments";
const INQUIRIES_STORAGE_KEY = "bridgewayEnrollmentInquiries";
const HISTORY_STORAGE_KEY = "bridgewayEnrollmentHistory";

// ===== COURSE DATA ARRAY =====
const coursesData = [
  {
    id: 1,
    name: "Certificate in Web Development",
    duration: "3 Months",
    price: 30769,
    enrollments: 0,
    description:
      "Master the skills to build responsive, interactive websites using HTML, CSS, JavaScript, and modern web frameworks.",
  },
  {
    id: 2,
    name: "Diploma in Microsoft Office",
    duration: "2 Months",
    price: 14800,
    enrollments: 0,
    description:
      "Become proficient in Microsoft Word, Excel, PowerPoint, and Access for office environments.",
  },
  {
    id: 3,
    name: "Certificate in Graphic Design",
    duration: "4 Months",
    price: 26545,
    enrollments: 0,
    description:
      "Unleash your creativity with industry-standard design tools and visual design principles.",
  },
  {
    id: 4,
    name: "Certificate in Computer Networking",
    duration: "5 Months",
    price: 35978,
    enrollments: 0,
    description:
      "Understand network infrastructure, protocols, and security with practical knowledge.",
  },
  {
    id: 5,
    name: "Certificate in C++ Programming",
    duration: "4 Months",
    price: 28500,
    enrollments: 0,
    description:
      "Learn C++ fundamentals, object-oriented programming, data structures, and algorithms to build efficient applications.",
  },
  {
    id: 6,
    name: "Diploma in C# Programming",
    duration: "6 Months",
    price: 42000,
    enrollments: 0,
    description:
      "Master C# development with .NET framework, building Windows applications, web services, and enterprise solutions.",
  },
];

// Total enrollments counter variable
let totalEnrollmentsCount = 0;

let enrollmentHistory = [];

// ===== MOBILE NAVIGATION TOGGLE =====
function setupMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

function getTotalEnrollments() {
  return coursesData.reduce((sum, course) => sum + (Number(course.enrollments) || 0), 0);
}

function getStoredEnrollments() {
  try {
    const stored = JSON.parse(localStorage.getItem(ENROLLMENTS_STORAGE_KEY) || "[]");
    if (!Array.isArray(stored)) return {};

    return stored.reduce((result, item) => {
      if (!item || typeof item !== "object") return result;

      const matchedCourse = coursesData.find((course) => course.name === item.name);
      const courseId = item.id || (matchedCourse && matchedCourse.id);
      if (!courseId) return result;

      result[courseId] = Number(item.enrollments) || 0;
      return result;
    }, {});
  } catch (error) {
    console.warn("Unable to load enrollment data:", error);
    return {};
  }
}

function getStoredInquiries() {
  try {
    const stored = JSON.parse(localStorage.getItem(INQUIRIES_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Unable to load enrollment inquiries:", error);
    return [];
  }
}

function getStoredHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Unable to load enrollment history:", error);
    return [];
  }
}

function saveEnrollmentsToStorage() {
  const enrollments = coursesData.map((course) => ({
    id: course.id,
    name: course.name,
    enrollments: Number(course.enrollments) || 0,
  }));

  return safeSetStorage(ENROLLMENTS_STORAGE_KEY, enrollments);
}

function saveInquiryToStorage(inquiryData) {
  const inquiries = getStoredInquiries();
  inquiries.unshift(inquiryData);
  return safeSetStorage(INQUIRIES_STORAGE_KEY, inquiries);
}

function initializeEnrollmentState() {
  const storedEnrollments = getStoredEnrollments();

  coursesData.forEach((course) => {
    course.enrollments = storedEnrollments[course.id] || 0;
  });

  totalEnrollmentsCount = getTotalEnrollments();

  const storedHistory = getStoredHistory();
  enrollmentHistory = storedHistory.length > 0
    ? storedHistory
    : totalEnrollmentsCount > 0
      ? [
          { time: Date.now() - 24 * 60 * 60 * 1000, count: 0 },
          { time: Date.now(), count: totalEnrollmentsCount },
        ]
      : [{ time: Date.now(), count: 0 }];
}

function getCourseById(courseId) {
  return coursesData.find((course) => course.id === Number(courseId));
}

function getCourseByName(courseName) {
  return coursesData.find((course) => course.name === courseName);
}

function updateCourseCardsEnrollmentCounts() {
  coursesData.forEach((course) => {
    const countElement = document.getElementById(`course-enroll-count-${course.id}`);
    if (countElement) {
      countElement.textContent = course.enrollments;
    }
  });
}

// ===== INITIALIZE ALL FUNCTIONALITY =====
document.addEventListener("DOMContentLoaded", function () {
  setupMobileNav();
  initializeEnrollmentState();
  updateCourseCardsEnrollmentCounts();
  displayAllCourses();
  updateEnrollmentStats();
  updateLineChart();
  setupEnrollmentPageSearch();
  setupCoursesPageSearch();
  setupCoursesPageEnrollButtons();
  setupCourseSelection();
  setupContactForm();
  setupDocumentPreviews();
  setupTermsModal();
  setTimeout(updateLineChart, 100);
  window.addEventListener("resize", debounce(updateLineChart, 250));
  createParticles();
});

function createParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  const colors = [
    'rgba(191, 0, 255, 0.9)',
    'rgba(236, 72, 153, 0.9)',
    'rgba(124, 58, 237, 0.9)',
    'rgba(245, 158, 11, 0.8)',
    'rgba(16, 185, 129, 0.8)',
    'rgba(59, 130, 246, 0.8)'
  ];

  const particleCount = Math.min(24, Math.max(12, Math.floor(window.innerWidth / 70)));

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (12 + Math.random() * 12) + 's';
    particle.style.width = (2 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
    container.appendChild(particle);
  }
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatCurrency(amount) {
  return `KShs. ${amount.toLocaleString()}`;
}

function clearFieldError(field) {
  if (!field) return;
  field.style.borderColor = '';
  field.classList.remove('error-highlight');
}

function setFieldError(field, errors, message) {
  if (field) {
    field.style.borderColor = '#ff6b6b';
    field.classList.add('error-highlight');
  }
  errors.push(message);
}

function clearFormErrors(form) {
  if (!form) return;

  form.querySelectorAll('.form-input, .form-textarea, input[type="checkbox"]').forEach((field) => {
    clearFieldError(field);
  });
}

function showFormMessage(messageDiv, type, html) {
  if (!messageDiv) return;
  messageDiv.className = `form-message ${type}`;
  messageDiv.innerHTML = html;
}

function clearFormMessage(messageDiv) {
  if (!messageDiv) return;
  messageDiv.className = 'form-message';
  messageDiv.innerHTML = '';
}

function isKenyanPhone(phone) {
  return /^(\+254|0)?[17]\d{8,9}$/.test(phone.replace(/\s+/g, ''));
}

function safeSetStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn('Unable to save data locally:', error);
    return false;
  }
}

function clearFilePreviews() {
  ['idCardPreview', 'birthCertPreview', 'ksceResultsPreview'].forEach((previewId) => {
    const preview = document.getElementById(previewId);
    if (preview) preview.innerHTML = '';
  });

  ['idCard', 'birthCert', 'ksceResults'].forEach((inputId) => {
    const input = document.getElementById(inputId);
    if (input) input.value = '';
  });
}

let lineChartFrame = null;
let termsLastFocusedElement = null;

function setupTermsModal() {
  const openButton = document.getElementById('termsLink');
  const modal = document.getElementById('termsModal');
  const closeButton = document.getElementById('termsModalClose');
  const acceptButton = document.getElementById('termsModalAccept');

  if (!openButton || !modal || !closeButton || !acceptButton) return;

  function openModal() {
    termsLastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    closeButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (termsLastFocusedElement && typeof termsLastFocusedElement.focus === 'function') {
      termsLastFocusedElement.focus();
    }
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  acceptButton.addEventListener('click', closeModal);

  modal.addEventListener('click', function (event) {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
}

// ===== ENROLLMENT PAGE - DISPLAY ALL COURSES =====
function renderEnrollmentCourses(courses) {
  const resultsArea = document.getElementById("courseResultsArea");
  if (!resultsArea) return;

  if (!courses.length) {
    resultsArea.innerHTML =
      '<p class="no-results">No courses found matching your search.</p>';
    return;
  }

  let coursesHTML = '<div class="courses-display-grid">';

  courses.forEach((course) => {
    coursesHTML += `
            <div class="course-display-card" data-course-id="${course.id}" data-course-name="${escapeHTML(course.name)}">
                <div class="display-card-header">
                    <h3 class="display-card-title">${escapeHTML(course.name)}</h3>
                </div>
                <div class="display-card-body">
                    <p class="display-card-description">${escapeHTML(course.description)}</p>
                    <div class="display-card-info">
                        <div class="info-row">
                            <span class="info-label">Duration:</span>
                            <span class="info-value">${escapeHTML(course.duration)}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Price:</span>
                            <span class="info-price">${formatCurrency(course.price)}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Enrollments:</span>
                            <span class="enrollments-count" id="enroll-count-${course.id}">${course.enrollments}</span>
                        </div>
                    </div>
                </div>
                <button class="display-enroll-btn" type="button" data-course-id="${course.id}">
                    ➕ Enroll Now
                </button>
            </div>
        `;
  });

  coursesHTML += "</div>";
  resultsArea.innerHTML = coursesHTML;

  resultsArea.querySelectorAll(".display-enroll-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const courseId = Number(button.dataset.courseId);
      const course = coursesData.find((c) => c.id === courseId);
      if (course) {
        sessionStorage.setItem("selectedCourse", course.name);
        window.location.href = "enrollment.html#personal-info-section";
      }
    });
  });
}

function displayAllCourses() {
  renderEnrollmentCourses(coursesData);
}

// ===== ENROLLMENT PAGE - SEARCH FUNCTIONALITY =====
function setupEnrollmentPageSearch() {
  const searchInput = document.getElementById("courseBrowserSearch");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      filterEnrollmentCourses(this.value);
    });
  }
}

function filterEnrollmentCourses(searchTerm) {
  const resultsArea = document.getElementById("courseResultsArea");
  if (!resultsArea) return;

  const searchTermLower = searchTerm.toLowerCase().trim();

  if (searchTermLower === "") {
    displayAllCourses();
    return;
  }

  const filteredCourses = coursesData.filter((course) => {
    return (
      course.name.toLowerCase().includes(searchTermLower) ||
      course.duration.toLowerCase().includes(searchTermLower) ||
      course.price.toString().includes(searchTermLower) ||
      course.description.toLowerCase().includes(searchTermLower)
    );
  });

  renderEnrollmentCourses(filteredCourses);
}

// ===== ENROLLMENT TRACKING - ENROLL BUTTON =====
function enrollStudent(courseId) {
  const course = getCourseById(courseId);

  if (course) {
    course.enrollments += 1;
    totalEnrollmentsCount = getTotalEnrollments();

    const enrollCountElement = document.getElementById(
      `enroll-count-${courseId}`,
    );
    if (enrollCountElement) {
      enrollCountElement.textContent = course.enrollments;
    }

    saveEnrollmentsToStorage();
    updateCourseCardsEnrollmentCounts();
    updateEnrollmentStats();
    updateEnrollmentHistory();
    updateLineChart();
    showEnrollmentFeedback(course.name);
  }
}

// ===== UPDATE ENROLLMENT STATISTICS =====
function updateEnrollmentStats() {
  const totalEnrollmentsSpan = document.getElementById("totalEnrollments");
  const enrollmentDetailsSpan = document.getElementById("enrollmentDetails");
  const chartContainer = document.getElementById("enrollmentChart");

  totalEnrollmentsCount = getTotalEnrollments();

  if (totalEnrollmentsSpan) {
    totalEnrollmentsSpan.textContent = totalEnrollmentsCount;
  }

  let detailsHTML = "Breakdown: ";
  let detailsArray = [];

  for (let course of coursesData) {
    if (course.enrollments > 0) {
      const percentage = ((course.enrollments / totalEnrollmentsCount) * 100).toFixed(1);
      detailsArray.push(`${escapeHTML(course.name)} (${course.enrollments}, ${percentage}%)`);
    }
  }

  if (detailsArray.length > 0) {
    detailsHTML += detailsArray.join(" • ");
  } else {
    detailsHTML += "No enrollments yet";
  }

  if (enrollmentDetailsSpan) {
    enrollmentDetailsSpan.innerHTML = detailsHTML;
  }

  if (chartContainer) {
    updateEnrollmentChart();
  }
}

// ===== UPDATE ENROLLMENT CHART =====
function updateEnrollmentChart() {
  const chartContainer = document.getElementById("enrollmentChart");
  if (!chartContainer) return;

  totalEnrollmentsCount = getTotalEnrollments();

  let chartHTML = '<div class="chart-bars">';

  if (totalEnrollmentsCount === 0) {
    chartHTML += '<p class="no-data">No enrollments yet</p>';
  } else {
    for (let course of coursesData) {
      const percentage = (
        (course.enrollments / totalEnrollmentsCount) *
        100
      ).toFixed(1);
      const barWidth = percentage > 0 ? Math.max(Number(percentage), 4) : 0;

      chartHTML += `
                <div class="chart-bar-item">
                    <div class="bar-label">${escapeHTML(course.name)}</div>
                    <div class="bar-container">
                        <div class="bar-fill" style="width: ${barWidth}%">
                            <span class="bar-text">${percentage}%</span>
                        </div>
                    </div>
                    <div class="bar-value">${course.enrollments} enrollments (${percentage}%)</div>
                </div>
            `;
    }
  }

  chartHTML += "</div>";
  chartContainer.innerHTML = chartHTML;
}

// ===== ANIMATED LINE CHART =====
function updateEnrollmentHistory() {
  totalEnrollmentsCount = getTotalEnrollments();
  enrollmentHistory.push({ time: Date.now(), count: totalEnrollmentsCount });
  if (enrollmentHistory.length > 20) {
    enrollmentHistory.shift();
  }

  safeSetStorage(HISTORY_STORAGE_KEY, enrollmentHistory);
}

function drawLineChart() {
  const canvas = document.getElementById("enrollmentLineChart");
  if (!canvas) return;

  if (lineChartFrame) {
    cancelAnimationFrame(lineChartFrame);
    lineChartFrame = null;
  }

  const ctx = canvas.getContext("2d");
  const wrapper = canvas.parentElement;
  const width = Math.max(280, wrapper.clientWidth - 40);
  const height = 260;

  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, width, height);

  const padding = { top: 20, right: 30, bottom: 30, left: 50 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const data = enrollmentHistory;
  if (data.length < 2) return;

  const maxCount = Math.max(...data.map((d) => d.count), 1);
  const minCount = 0;

  function getX(index) {
    if (data.length === 1) return padding.left + chartWidth / 2;
    return padding.left + (index / (data.length - 1)) * chartWidth;
  }

  function getY(count) {
    return (
      padding.top +
      chartHeight -
      ((count - minCount) / (maxCount - minCount || 1)) * chartHeight
    );
  }

  let progress = 0;
  const speed = 0.03;

  function animate() {
    progress += speed;
    if (progress > 1) progress = 1;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(191, 0, 255, 0.15)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    }

    ctx.fillStyle = "#22d3ee";
    ctx.font = "12px Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 4; i++) {
      const value = Math.round(
        minCount + ((maxCount - minCount) / 4) * (4 - i),
      );
      const y = padding.top + (chartHeight / 4) * i;
      ctx.fillText(value, padding.left - 10, y + 4);
    }

    const animatedLength = Math.floor(data.length * progress);
    if (animatedLength < 2) {
      if (progress < 1) lineChartFrame = requestAnimationFrame(animate);
      return;
    }

    const gradient = ctx.createLinearGradient(
      0,
      padding.top,
      0,
      height - padding.bottom,
    );
    gradient.addColorStop(0, "rgba(191, 0, 255, 0.25)");
    gradient.addColorStop(1, "rgba(191, 0, 255, 0.0)");

    ctx.beginPath();
    ctx.moveTo(getX(0), getY(data[0].count));
    for (let i = 1; i < animatedLength; i++) {
      const x = getX(i);
      const y = getY(data[i].count);
      const prevX = getX(i - 1);
      const prevY = getY(data[i - 1].count);
      const cpx = (prevX + x) / 2;
      ctx.bezierCurveTo(cpx, prevY, cpx, y, x, y);
    }
    ctx.strokeStyle = "#06b6d4";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.lineTo(getX(animatedLength - 1), height - padding.bottom);
    ctx.lineTo(getX(0), height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    for (let i = 0; i < animatedLength; i++) {
      const x = getX(i);
      const y = getY(data[i].count);

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "#06b6d4";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (progress < 1) {
      lineChartFrame = requestAnimationFrame(animate);
    }
  }

  animate();
}

function updateLineChart() {
  drawLineChart();
}

// ===== ENROLLMENT FEEDBACK NOTIFICATION =====
function showEnrollmentFeedback(courseName) {
  const notification = document.createElement("div");
  notification.className = "enrollment-notification";
  notification.innerHTML = `✓ Successfully enrolled in ${courseName}!`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// ===== COURSES PAGE - SEARCH FUNCTIONALITY =====
function setupCoursesPageSearch() {
  const searchInput = document.getElementById("courseSearch");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      filterCoursesPage(this.value);
    });
  }
}

function filterCoursesPage(searchTerm) {
  const courseCards = document.querySelectorAll(".course-card");
  const noResultsMsg = document.getElementById("noResults");

  if (!courseCards.length) return;

  const searchTermLower = searchTerm.toLowerCase().trim();
  let visibleCount = 0;

  courseCards.forEach((card) => {
    const courseName = card.getAttribute("data-course").toLowerCase();
    const cardText = card.textContent.toLowerCase();

    if (
      courseName.includes(searchTermLower) ||
      cardText.includes(searchTermLower)
    ) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (noResultsMsg) {
    noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
  }
}

// ===== COURSES PAGE - ENROLL BUTTONS =====
function setupCoursesPageEnrollButtons() {
  const enrollButtons = document.querySelectorAll(".card-btn");

  enrollButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const courseCard = this.closest(".course-card");
      if (!courseCard) return;

      const courseName = courseCard.getAttribute("data-course");
      const course = coursesData.find((c) => c.name === courseName);

      if (course) {
        sessionStorage.setItem("selectedCourse", course.name);
        window.location.href = "enrollment.html#personal-info-section";
      }
    });
  });
}

// ===== ENROLLMENT FORM - COURSE SELECTION =====
function setupCourseSelection() {
  const courseSelect = document.getElementById("course");
  const selectedCourseInfo = document.getElementById("selectedCourseInfo");
  const tuitionFee = document.getElementById("tuitionFee");
  const totalAmount = document.getElementById("totalAmount");

  function updateCourseSummary(selectedCourse) {
    if (selectedCourse) {
      const course = coursesData.find((c) => c.name === selectedCourse);
      const platformFee = 500;
      const total = course ? course.price + platformFee : 0;

      if (selectedCourseInfo && course) {
        selectedCourseInfo.innerHTML = `
                        <p class="info-text"><strong>${escapeHTML(course.name)}</strong></p>
                        <p class="info-text">Duration: ${escapeHTML(course.duration)}</p>
                        <p class="info-text">${escapeHTML(course.description)}</p>
                    `;
      }

      if (tuitionFee && course) {
        tuitionFee.textContent = formatCurrency(course.price);
      }

      if (totalAmount && course) {
        totalAmount.textContent = formatCurrency(total);
      }
    } else {
      if (selectedCourseInfo) {
        selectedCourseInfo.innerHTML =
          '<p class="info-text">Select a course to see details</p>';
      }
      if (tuitionFee) {
        tuitionFee.textContent = "KShs. --";
      }
      if (totalAmount) {
        totalAmount.textContent = "KShs. --";
      }
    }
  }

  if (courseSelect) {
    courseSelect.addEventListener("change", function () {
      updateCourseSummary(this.value);
    });
  }

  const selectedCourseName = sessionStorage.getItem("selectedCourse");
  if (selectedCourseName && courseSelect) {
    courseSelect.value = selectedCourseName;
    updateCourseSummary(courseSelect.value);
    sessionStorage.removeItem("selectedCourse");
    const personalInfoSection = document.getElementById("personal-info-section");
    if (personalInfoSection) {
      setTimeout(() => {
        personalInfoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const firstNameField = document.getElementById("firstName");
        if (firstNameField) {
          firstNameField.focus();
        }
      }, 100);
    }
  } else if (window.location.hash === "#personal-info-section") {
    const personalInfoSection = document.getElementById("personal-info-section");
    if (personalInfoSection) {
      setTimeout(() => {
        personalInfoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const firstNameField = document.getElementById("firstName");
        if (firstNameField) {
          firstNameField.focus();
        }
      }, 100);
    }
  }

  const enrollmentForm = document.getElementById("enrollmentForm");
  if (enrollmentForm) {
    enrollmentForm.querySelectorAll('input, select, textarea').forEach((field) => {
      const eventName = field.tagName === 'SELECT' || field.type === 'checkbox' ? 'change' : 'input';
      field.addEventListener(eventName, function () {
        clearFieldError(field);
        clearFormMessage(document.getElementById("enrollmentFormMessage"));
      });
    });

    enrollmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const firstNameField = document.getElementById("firstName");
      const lastNameField = document.getElementById("lastName");
      const emailField = document.getElementById("email");
      const phoneField = document.getElementById("phone");
      const courseField = document.getElementById("course");
      const cityField = document.getElementById("city");
      const countyField = document.getElementById("county");
      const termsField = document.getElementById("terms");
      const mpesaNumberField = document.getElementById("mpesaNumber");
      const paymentMethod = document.querySelector('input[name="payment"]:checked');

      const firstName = firstNameField.value.trim();
      const lastName = lastNameField.value.trim();
      const email = emailField.value.trim();
      const phone = phoneField.value.trim();
      const selectedCourseName = courseField.value;
      const selectedCourse = getCourseByName(selectedCourseName);
      const city = cityField.value.trim();
      const county = countyField.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errors = [];

      clearFormErrors(enrollmentForm);

      if (!firstName) {
        setFieldError(firstNameField, errors, "First Name is required");
      }
      if (!lastName) {
        setFieldError(lastNameField, errors, "Last Name is required");
      }
      if (!email || !emailRegex.test(email)) {
        setFieldError(emailField, errors, "Valid Email Address is required");
      }
      if (!phone) {
        setFieldError(phoneField, errors, "Phone Number is required");
      } else if (!isKenyanPhone(phone)) {
        setFieldError(phoneField, errors, "Enter a valid Kenyan phone number, e.g. +254 700 000 000");
      }
      if (!selectedCourseName) {
        setFieldError(courseField, errors, "Course selection is required");
      }
      if (!city) {
        setFieldError(cityField, errors, "City is required");
      }
      if (!county) {
        setFieldError(countyField, errors, "County is required");
      }
      if (!paymentMethod) {
        errors.push("Payment method is required");
      }
      if (paymentMethod && paymentMethod.value === "mpesa" && !mpesaNumberField.value.trim()) {
        setFieldError(mpesaNumberField, errors, "M-Pesa Account Number is required");
      }
      if (!termsField.checked) {
        setFieldError(termsField, errors, "You must accept the Terms and Conditions");
      }

      const messageDiv = document.getElementById("enrollmentFormMessage");

      if (errors.length > 0) {
        showFormMessage(messageDiv, "error", "<ul><li>" + errors.join("</li><li>") + "</li></ul>");
        return;
      }

      const enrollmentData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        course: selectedCourseName,
        city: city,
        county: county,
        education: document.getElementById("education").value,
        postalCode: document.getElementById("postalCode").value.trim(),
        paymentMethod: paymentMethod.value,
        mpesaNumber: paymentMethod.value === "mpesa" ? mpesaNumberField.value.trim() : "",
        newsletter: document.getElementById("newsletter").checked,
        enrollmentDate: new Date().toLocaleDateString(),
      };

      if (selectedCourse) {
        selectedCourse.enrollments += 1;
        totalEnrollmentsCount = getTotalEnrollments();
        saveEnrollmentsToStorage();
      }

      const inquiryData = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        ...enrollmentData,
        fullName: `${firstName} ${lastName}`.trim(),
        coursePrice: selectedCourse ? selectedCourse.price : 0,
        platformFee: selectedCourse ? 500 : 0,
        totalAmount: selectedCourse ? selectedCourse.price + 500 : 0,
        submittedAt: new Date().toISOString(),
      };

      const saved = safeSetStorage("enrollmentData", inquiryData);
      const inquirySaved = saveInquiryToStorage(inquiryData);

      if (selectedCourse) {
        updateCourseCardsEnrollmentCounts();
        renderEnrollmentCourses(coursesData);
      }

      updateEnrollmentStats();
      updateEnrollmentHistory();
      updateLineChart();

      if (selectedCourse) {
        showEnrollmentFeedback(selectedCourse.name);
      }

      showFormMessage(
        messageDiv,
        "success",
        `<p>Thank you ${escapeHTML(firstName)}! Your enrollment for ${escapeHTML(selectedCourseName)} has been completed.</p>` +
          (!(saved && inquirySaved) ? "<p>Your browser blocked local saving, but your message has been prepared.</p>" : ""),
      );

      this.reset();
      clearFormErrors(enrollmentForm);
      clearFilePreviews();
      updateCourseSummary("");
      console.log("Enrollment Data:", enrollmentData);
    });
  }
}

// ===== DOCUMENT UPLOAD PREVIEWS =====
function setupDocumentPreviews() {
  const documentInputs = [
    { inputId: "idCard", previewId: "idCardPreview" },
    { inputId: "birthCert", previewId: "birthCertPreview" },
    { inputId: "ksceResults", previewId: "ksceResultsPreview" },
  ];

  documentInputs.forEach(({ inputId, previewId }) => {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    if (!input || !preview) return;

    input.addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) {
        preview.innerHTML = "";
        return;
      }

      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      if (fileSizeMB > 5) {
        preview.innerHTML =
          '<p class="preview-error">⚠️ File size exceeds 5MB limit</p>';
        input.value = "";
        return;
      }

      preview.innerHTML = "";

      const fileName = document.createElement("div");
      fileName.className = "preview-name";
      fileName.textContent = `📎 ${file.name} (${fileSizeMB} MB)`;
      preview.appendChild(fileName);

      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.alt = file.name;
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else if (file.type === "application/pdf") {
        const pdfIcon = document.createElement("div");
        pdfIcon.className = "preview-pdf";
        pdfIcon.innerHTML = "📄 PDF Document";
        pdfIcon.style.cssText = `
                  font-size: 40px;
                  padding: 20px;
                  color: #06b6d4;
                  text-align: center;
              `;
        preview.appendChild(pdfIcon);
      }
    });
  });
}

// ===== CONTACT FORM HANDLING =====
function setupContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.querySelectorAll('input, select, textarea').forEach((field) => {
      const eventName = field.tagName === 'SELECT' || field.type === 'checkbox' ? 'change' : 'input';
      field.addEventListener(eventName, function () {
        clearFieldError(field);
        clearFormMessage(document.getElementById("contactFormMessage"));
      });
    });

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullNameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const phoneField = document.getElementById("phone");
      const subjectField = document.getElementById("subject");
      const messageField = document.getElementById("message");

      const fullName = fullNameField ? fullNameField.value.trim() : "";
      const email = emailField ? emailField.value.trim() : "";
      const phone = phoneField ? phoneField.value.trim() : "";
      const subject = subjectField ? subjectField.value : "";
      const message = messageField ? messageField.value.trim() : "";
      const subscribe = document.getElementById("subscribe")
        ? document.getElementById("subscribe").checked
        : false;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const errors = [];

      clearFormErrors(contactForm);

      if (!fullName) {
        setFieldError(fullNameField, errors, "Full Name is required");
      }

      if (!email || !emailRegex.test(email)) {
        setFieldError(emailField, errors, "Valid Email Address is required");
      }

      if (phone && !isKenyanPhone(phone)) {
        setFieldError(phoneField, errors, "Enter a valid Kenyan phone number");
      }

      if (!subject) {
        setFieldError(subjectField, errors, "Subject is required");
      }

      if (!message) {
        setFieldError(messageField, errors, "Message is required");
      }

      const messageDiv = document.getElementById("contactFormMessage");

      if (errors.length > 0) {
        showFormMessage(messageDiv, "error", "<ul><li>" + errors.join("</li><li>") + "</li></ul>");
        return;
      }

      const contactData = {
        fullName: fullName,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        subscribe: subscribe,
        submittedDate: new Date().toLocaleDateString(),
      };

      const saved = safeSetStorage("contactData", contactData);

      showFormMessage(
        messageDiv,
        "success",
        `<p>Thank you ${escapeHTML(fullName)}! We will be in touch with you shortly.</p>` +
          (!saved ? "<p>Your browser blocked local saving, but your message has been prepared.</p>" : ""),
      );

      this.reset();
      clearFormErrors(contactForm);
      console.log("Contact Data:", contactData);
    });
  }
}

// ===== TEAM MEMBER DATA ARRAY =====
const teamMembers = [
  {
    name: "James Mwangi",
    role: "Director & Founder",
    fact: "With over 15 years of experience in technology education, James leads BridgeWay's vision to empower the next generation of tech professionals across Africa.",
    avatar: "\u{1F468}\u{200D}\u{1F4BC}"
  },
  {
    name: "Grace Omondi",
    role: "Head of Academics",
    fact: "A passionate educator with a background in computer science, Grace designs and oversees our curriculum to ensure it meets global industry standards.",
    avatar: "\u{1F469}\u{200D}\u{1F4BB}"
  },
  {
    name: "David Kipchoge",
    role: "Lead Instructor",
    fact: "A certified software engineer and former tech lead, David brings real-world experience into the classroom, making complex concepts easy and engaging.",
    avatar: "\u{1F468}\u{200D}\u{1F3EB}"
  },
  {
    name: "Sarah Njeri",
    role: "Student Career Advisor",
    fact: "Dedicated to student success, Sarah provides personalized career guidance, resume coaching, and connects graduates with industry opportunities.",
    avatar: "\u{1F469}\u{200D}\u{1F4BC}"
  }
];

// ===== RENDER TEAM CARDS =====
function renderTeamMembers() {
  const teamGrid = document.getElementById("teamGrid");
  if (!teamGrid) return;

  let teamHTML = "";
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    teamHTML += '<div class="team-card"><div class="team-avatar">' + escapeHTML(member.avatar) + '</div><h3>' + escapeHTML(member.name) + '</h3><p class="team-role">' + escapeHTML(member.role) + '</p><p>' + escapeHTML(member.fact) + '</p></div>';
  }
  teamGrid.innerHTML = teamHTML;
}

function shuffleTeam() {
  teamMembers.sort(() => Math.random() - 0.5);
  renderTeamMembers();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    renderTeamMembers();
    const shuffleBtn = document.getElementById("shuffleBtn");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", shuffleTeam);
    }
  });
} else {
  renderTeamMembers();
  const shuffleBtn = document.getElementById("shuffleBtn");
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", shuffleTeam);
  }
}
