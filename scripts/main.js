// Custom Cursor Logic
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');

    if (cursor && ring) {
        let mx = 0, my = 0, rx = 0, ry = 0;

        document.addEventListener('mousemove', e => {
            mx = e.clientX;
            my = e.clientY;
            cursor.style.left = mx + 'px';
            cursor.style.top = my + 'px';
        });

        function animRing() {
            rx += (mx - rx) * 0.12;
            ry += (my - ry) * 0.12;
            ring.style.left = rx + 'px';
            ring.style.top = ry + 'px';
            requestAnimationFrame(animRing);
        }
        animRing();

        // Hover effects for interactive elements
        document.querySelectorAll('a, button, input, select, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                ring.style.transform = 'translate(-50%, -50%) scale(1.5)';
                ring.style.borderColor = 'rgba(201,150,12,0.8)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                ring.style.transform = 'translate(-50%, -50%) scale(1)';
                ring.style.borderColor = 'rgba(201,150,12,0.5)';
            });
        });
    }

    // Scroll Reveal Observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });

    reveals.forEach(r => observer.observe(r));

    // Anchor Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const targetId = a.getAttribute('href');
            // only prevent default if it's an on-page hash, not a page.html#id situation sometimes
            if (targetId.startsWith('#') && targetId.length > 1) {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Simple Header background transition based on scroll
    const header = document.querySelector('header');
    const banner = document.querySelector('.top-banner');
    if (header && banner) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.transform = `translateY(-${banner.offsetHeight}px)`; // Hide banner
            } else {
                header.style.transform = 'translateY(0)';
            }
        });
    }
});

// Global Application Form Submit Mock
function handleApplicationSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('applyForm');
    const success = document.getElementById('formSuccess');

    if (form && success) {
        form.style.display = 'none';
        success.classList.add('show');
    }
}
