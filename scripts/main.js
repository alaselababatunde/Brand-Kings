/* ============================================================
   BRANDKINGS — main.js v3
   Scroll reveal, nav, accordion, counters, mobile nav
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- SCROLL REVEAL ---- */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => observer.observe(el));
    }

    /* ---- NAV SCROLL BEHAVIOUR ---- */
    const navEl = document.querySelector('nav');
    if (navEl) {
        window.addEventListener('scroll', () => {
            navEl.style.borderBottomColor = window.scrollY > 60
                ? 'rgba(201,150,12,0.2)'
                : 'rgba(201,150,12,0.15)';
        }, { passive: true });
    }

    /* ---- NAVIGATION MENU ---- */
    const hamburger = document.querySelector('.nav-hamburger');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-close');

    if (hamburger && overlay) {
        hamburger.addEventListener('click', () => {
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        const closeNav = () => {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (closeBtn) closeBtn.addEventListener('click', closeNav);
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeNav);
        });
    }

    /* ---- DROPDOWN INTERACTION ---- */
    const dropdownToggles = document.querySelectorAll('.dropdown-chevron-btn');
    dropdownToggles.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const parent = btn.closest('.has-dropdown');
            const wasActive = parent.classList.contains('active');

            // Close all others
            document.querySelectorAll('.has-dropdown.active').forEach(item => {
                item.classList.remove('active');
            });

            if (!wasActive) parent.classList.add('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.has-dropdown.active').forEach(item => {
            item.classList.remove('active');
        });
    });

    /* ---- ANIMATED COUNTERS ---- */
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const countObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const prefix = el.dataset.prefix || '';
                const dec = (target % 1 !== 0) ? 1 : 0;
                let start = 0;
                const duration = 1400;
                const step = (ts) => {
                    if (!start) start = ts;
                    const progress = Math.min((ts - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = prefix + (eased * target).toFixed(dec) + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = prefix + target.toFixed(dec) + suffix;
                };
                requestAnimationFrame(step);
                countObs.unobserve(el);
            });
        }, { threshold: 0.5 });
        counters.forEach(el => countObs.observe(el));
    }

    /* ---- ACCORDION ---- */
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.accordion-item');
            const body = item.querySelector('.accordion-body');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.accordion-item.open').forEach(open => {
                open.classList.remove('open');
                open.querySelector('.accordion-body').style.maxHeight = '0';
            });
            if (!isOpen) {
                item.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
            }
        });
    });

    /* ---- ACTIVE NAV ---- */
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href === path || (path === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    /* ---- APPLY FORM ---- */
    const applyForm = document.getElementById('applyForm');
    if (applyForm) {
        applyForm.addEventListener('submit', e => {
            e.preventDefault();
            document.getElementById('applyForm').style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
        });
    }

    /* ---- PHASE CARD HOVER ARROWS ---- */
    const phaseCards = document.querySelectorAll('.phase-card');
    phaseCards.forEach((card, i) => {
        if (i < phaseCards.length - 1) {
            const arrow = card.querySelector('.phase-arrow');
            if (arrow) arrow.style.color = 'var(--accent-dim)';
        }
    });

});
