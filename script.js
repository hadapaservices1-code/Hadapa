'use strict';

// ── Scroll-triggered animations ─────────────────────────────────────────────
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('[data-animate]').forEach(el => animObserver.observe(el));

// Auto-stagger direct children of card grids
document.querySelectorAll('.cards, .values-grid').forEach(grid => {
  const children = Array.from(grid.children);
  children.forEach((child, i) => {
    if (!child.hasAttribute('data-animate')) child.setAttribute('data-animate', '');
    if (!child.hasAttribute('data-delay') && i < 6) child.setAttribute('data-delay', String(i + 1));
    animObserver.observe(child);
  });
});

// Stagger pills
document.querySelectorAll('.pill-grid').forEach(grid => {
  Array.from(grid.children).forEach((pill, i) => {
    if (!pill.hasAttribute('data-animate')) pill.setAttribute('data-animate', 'scale');
    if (!pill.hasAttribute('data-delay') && i < 9) pill.setAttribute('data-delay', String(i + 1));
    animObserver.observe(pill);
  });
});

// ── Nav shadow on scroll ─────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Animated counters ────────────────────────────────────────────────────────
function runCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const suffix  = el.dataset.suffix || '';
  const isInt   = Number.isInteger(target);
  const dur     = 1800;
  const started = performance.now();

  function tick(now) {
    const t    = Math.min((now - started) / dur, 1);
    const ease = 1 - Math.pow(1 - t, 3); // cubic ease-out
    const val  = target * ease;
    el.textContent = (isInt ? Math.floor(val) : val.toFixed(1)) + suffix;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        runCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));
