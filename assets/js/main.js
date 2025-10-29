/**
 * WholeCare Marketing Website
 * Main JavaScript file for interactions and animations
 */

// ===========================
// Mobile Navigation
// ===========================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show mobile menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide mobile menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===========================
// Sticky Header on Scroll
// ===========================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scroll-down');
        header.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scrolling down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scrolling up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements that should animate on scroll
window.addEventListener('DOMContentLoaded', () => {
    // Add reveal class to cards and sections
    const elementsToReveal = [
        ...document.querySelectorAll('.issue__card'),
        ...document.querySelectorAll('.feature__card'),
        ...document.querySelectorAll('.story__item')
    ];

    elementsToReveal.forEach((el, index) => {
        el.classList.add('reveal');
        // Add slight delay for staggered animation
        el.style.transitionDelay = `${index * 0.1}s`;
    });

    // Initial check
    revealOnScroll();
});

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 200;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===========================
// Form Handling (if contact form is added)
// ===========================
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Here you would typically send the data to a backend service
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', Object.fromEntries(formData));

        // Show success message
        alert('Thank you for your interest! We will be in touch soon.');

        // Reset form
        contactForm.reset();
    });
}

// ===========================
// Performance Optimization
// ===========================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Prevent Flash of Unstyled Content
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Analytics Helper (placeholder)
// ===========================
function trackEvent(category, action, label) {
    // If Google Analytics is installed, track event
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }

    // Console log for debugging
    console.log('Event tracked:', { category, action, label });
}

// Track CTA clicks
document.querySelectorAll('.btn--primary, .btn--secondary').forEach(btn => {
    btn.addEventListener('click', () => {
        const btnText = btn.textContent.trim();
        trackEvent('CTA', 'click', btnText);
    });
});

// ===========================
// Console Message
// ===========================
console.log(
    '%cWholeCare',
    'color: #4A9D9C; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cIndividualized support for a unified circle of care',
    'color: #666; font-size: 14px;'
);
