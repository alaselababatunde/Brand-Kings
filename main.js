/* 
  BrandKings — Main Script
  Scroll Reveal · Nav Scroll Effect · Form Handler
*/

document.addEventListener('DOMContentLoaded', () => {

    /* ── Smooth Scroll (already handled by CSS, this adds an offset fix) ── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 100; // header height + scarcity bar
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* ── Header hide / show on scroll ── */
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    /* ── Scroll Reveal ── */
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // fire once
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));

    /* ── Mobile Menu ── */
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // close on nav link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    /* ── Contact Form Handler ── */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const name = form.querySelector('#name').value.trim();
            const phone = form.querySelector('#phone').value.trim();
            const service = form.querySelector('#service').value;
            const message = form.querySelector('#message').value.trim();

            // Build WhatsApp message
            const text = encodeURIComponent(
                `Hi BrandKings! 👑\n\n` +
                `Name: ${name}\n` +
                (phone ? `Phone: ${phone}\n` : '') +
                (service ? `Service: ${service}\n` : '') +
                (message ? `\nMessage: ${message}` : '')
            );

            // Change button state briefly
            submitBtn.textContent = 'Opening WhatsApp…';
            submitBtn.disabled = true;

            setTimeout(() => {
                window.open(`https://wa.me/2349078239676?text=${text}`, '_blank');
                submitBtn.textContent = 'Message Sent ✓';
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message →';
                    submitBtn.disabled = false;
                    form.reset();
                }, 3000);
            }, 600);
        });
    }

});
