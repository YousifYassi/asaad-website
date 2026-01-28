// JavaScript for interactive behaviours

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const toggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    // Current year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Reveal animation using IntersectionObserver
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(el => {
        revealObserver.observe(el);
    });

    // No modal handling needed when using a server-side form handler
});