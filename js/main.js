// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Scroll Animation Observer
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for stagger effect
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Apply animations to section headers
document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('fade-in-up');
    scrollObserver.observe(el);
});

// Apply animations to menu cards with stagger
document.querySelectorAll('.menu-card').forEach((el, index) => {
    el.classList.add('fade-in-up');
    el.dataset.delay = index * 100;
    scrollObserver.observe(el);
});

// Apply animations to feature cards
document.querySelectorAll('.feature-card').forEach((el, index) => {
    el.classList.add('scale-in');
    el.dataset.delay = index * 150;
    scrollObserver.observe(el);
});

// Apply animations to gallery items
document.querySelectorAll('.gallery-item').forEach((el, index) => {
    el.classList.add('scale-in');
    el.dataset.delay = index * 80;
    scrollObserver.observe(el);
});

// Apply animations to about section
const aboutImage = document.querySelector('.about-image');
if (aboutImage) {
    aboutImage.classList.add('fade-in-left');
    scrollObserver.observe(aboutImage);
}

const aboutText = document.querySelector('.about-text');
if (aboutText) {
    aboutText.classList.add('fade-in-right');
    scrollObserver.observe(aboutText);
}

// Apply animations to contact items
document.querySelectorAll('.contact-item').forEach((el, index) => {
    el.classList.add('fade-in-left');
    el.dataset.delay = index * 100;
    scrollObserver.observe(el);
});

// Apply animation to contact form
const contactFormEl = document.querySelector('.contact-form');
if (contactFormEl) {
    contactFormEl.classList.add('fade-in-right');
    scrollObserver.observe(contactFormEl);
}

// Apply animations to stats
document.querySelectorAll('.about-stat, .stat').forEach((el, index) => {
    el.classList.add('scale-in');
    el.dataset.delay = index * 100;
    scrollObserver.observe(el);
});

// Gallery header animation
const galleryHeader = document.querySelector('.gallery-header');
if (galleryHeader) {
    galleryHeader.classList.add('fade-in-up');
    scrollObserver.observe(galleryHeader);
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;
        btn.textContent = 'Mensagem Enviada!';
        btn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    });
}

// Parallax effect for mascot
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const mascot = document.querySelector('.mascot-image');
    
    if (mascot && scrolled < window.innerHeight) {
        mascot.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Counter animation for stats
function animateCounter(el, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current) + (el.dataset.suffix || '');
    }, 30);
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            const value = entry.target.dataset.value;
            if (value) {
                animateCounter(entry.target, parseInt(value));
            }
        }
    });
}, { threshold: 0.5 });

// Add hover effects to cards
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Smooth reveal for hero content
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            heroText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 200);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(30px)';
        setTimeout(() => {
            heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 400);
    }
});
