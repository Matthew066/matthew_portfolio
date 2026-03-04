/**
 * Matthew's Portfolio - JavaScript
 * Cyberpunk Minimalist Design
 */

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    mobileToggle.classList.toggle('open');
});

// Close mobile menu when a link is clicked (only on mobile view)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        // Only close menu if mobile toggle is visible (mobile view)
        if (window.getComputedStyle(mobileToggle).display !== 'none') {
            navMenu.classList.remove('show');
            mobileToggle.classList.remove('open');
        }
    });
});

// ===== SMOOTH SCROLL FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== HERO SECTION MOUSE TRACKING =====
const heroSection = document.getElementById('hero');
const heroLeft = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');

document.addEventListener('mousemove', (e) => {
    if (!heroSection) return;
    
    const rect = heroSection.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    if (heroLeft) {
        const rotateY = (x - 0.5) * 5;
        const rotateX = (y - 0.5) * -5;
        heroLeft.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
    
    if (heroRight) {
        const rotateY = (x - 0.5) * -5;
        const rotateX = (y - 0.5) * 5;
        heroRight.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill bars for animation
document.querySelectorAll('.skill-fill').forEach(bar => {
    bar.style.opacity = '0';
    bar.style.transform = 'translateY(20px)';
    bar.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(bar);
});

// ===== BUTTON INTERACTIONS =====
document.querySelectorAll('.cta-button, .email-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== CARD HOVER EFFECTS =====
document.querySelectorAll('.role-card, .project-card, .timeline-content').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== SOCIAL LINK ANIMATIONS =====
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== NAVBAR STICKY EFFECT =====
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--text-gray)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        }
    });
});

// ===== PARALLAX EFFECT FOR BACKGROUND =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('section');
    
    elements.forEach(el => {
        if (el.style.backgroundImage) {
            el.style.backgroundPosition = `0 ${scrollY * 0.5}px`;
        }
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===== CONSOLE MESSAGE =====
console.log('%c🚀 Welcome to Matthew\'s Portfolio!', 'color: #00ff00; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);');
console.log('%cCyberpunk Minimalist Design', 'color: #00d9ff; font-size: 14px;');
