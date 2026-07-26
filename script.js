/* ====== Navbar Scroll ====== */
const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  lastScroll = window.scrollY;
});

/* ====== Theme Toggle ====== */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");
const html = document.documentElement;

function setTheme(dark) {
  if (dark) {
    html.classList.add("dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  setTheme(true);
}

themeToggle.addEventListener("click", () => {
  setTheme(!html.classList.contains("dark"));
});

/* ====== Mobile Menu Toggle ====== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
});

function closeMenu() {
  navLinks.classList.remove("open");
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-times");
}

/* ====== Smooth Scroll for nav links ====== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

/* ====== Scroll Animations (Intersection Observer) ====== */
const animateElements = document.querySelectorAll(
  ".hero-title, .hero-tagline, .hero-desc, .hero-buttons, .hero-social, .hero-badge, " +
  ".about-grid, .skills-categories, .skills-badges, .contact-grid, " +
  ".section-header, .highlight-card, .skill-category-card, .skill-badge"
);

animateElements.forEach((el) => {
  el.classList.add("animate-on-scroll");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

animateElements.forEach((el) => observer.observe(el));

/* ====== Contact Form ====== */
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const btn = contactForm.querySelector("button[type='submit']");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
    btn.disabled = true;
  });
}
