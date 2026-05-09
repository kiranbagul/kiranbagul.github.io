(function () {
    'use strict';

    // Scroll reveal via IntersectionObserver
    function initScrollReveal() {
        const els = document.querySelectorAll('.reveal:not(.is-visible)');
        if (!('IntersectionObserver' in window) || els.length === 0) {
            els.forEach(el => el.classList.add('is-visible'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        els.forEach(el => io.observe(el));
    }

    // Header scroll state + mobile nav toggle
    function initHeader() {
        const header = document.getElementById('siteHeader');
        if (!header) return;

        const onScroll = () => {
            if (window.scrollY > 8) header.classList.add('is-scrolled');
            else header.classList.remove('is-scrolled');
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        const toggle = document.getElementById('navToggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const open = header.classList.toggle('menu-open');
                toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            });

            // Close menu when a nav link is clicked (mobile)
            header.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
                link.addEventListener('click', () => {
                    header.classList.remove('menu-open');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    // Smooth scroll for same-page anchors
    function initSmoothAnchors() {
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', (e) => {
                const id = a.getAttribute('href');
                if (id.length <= 1) return;
                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Public re-init (called after partials load)
    window.initSite = function initSite() {
        initHeader();
        initScrollReveal();
        initSmoothAnchors();
    };

    // Run on DOMContentLoaded for the main-page bits (reveal on body)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', window.initSite);
    } else {
        window.initSite();
    }
})();
