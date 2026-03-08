document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNav();
  initReveal();
  highlightActiveLink();
});

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cursor = document.createElement('div');
  const ring = document.createElement('div');
  cursor.className = 'cursor';
  ring.className = 'cursor-ring';
  document.body.appendChild(cursor);
  document.body.appendChild(ring);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hovers = document.querySelectorAll('a, button, input, select, textarea, .hover-target');
  hovers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      ring.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      ring.classList.remove('hover');
    });
  });
}

/* ── NAVIGATION ── */
function initNav() {
  const nav = document.querySelector('nav');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('navOverlay');

  // Scroll listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && overlay) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
    });
  }
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* ── ACTIVE LINK HIGHLIGHT ── */
function highlightActiveLink() {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll('.nav-overlay-link, .nav-main-link');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes(href) && href !== 'index.html') {
      link.classList.add('active');
    } else if (currentPath.endsWith('/') || currentPath.includes('index.html')) {
        if (href === 'index.html') link.classList.add('active');
    }
  });
}
