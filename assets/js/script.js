'use strict';

/* ===== Navbar: scrolled state ===== */
const navbar = document.querySelector('[data-navbar]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const navBackdrop = document.querySelector('[data-nav-backdrop]');
const navIcon = document.querySelector('[data-nav-icon]');
const navLinks = document.querySelectorAll('[data-nav-link]');
const bottomNavLinks = document.querySelectorAll('[data-bottom-nav] [data-nav-link]');
const backToTop = document.querySelector('[data-back-to-top]');
const sections = document.querySelectorAll('section[id]');

const setMenuOpen = (open) => {
  navMenu.classList.toggle('open', open);
  navBackdrop.hidden = !open;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  document.body.classList.toggle('menu-open', open);
};

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  if (backToTop) backToTop.hidden = window.scrollY < 500;
}, { passive: true });

navToggle.addEventListener('click', () => {
  setMenuOpen(!navMenu.classList.contains('open'));
});

navBackdrop.addEventListener('click', () => setMenuOpen(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const getBottomNavTarget = (sectionId) => {
  if (sectionId === 'experience' || sectionId === 'skills') return 'about';
  return sectionId;
};

const setActiveNav = (id) => {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });

  const bottomTarget = getBottomNavTarget(id);
  bottomNavLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${bottomTarget}`);
  });
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActiveNav(entry.target.id);
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

/* ===== Portfolio filtering ===== */
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterProjects = (selected) => {
  filterItems.forEach(item => {
    const category = (item.dataset.category || '').toLowerCase();
    item.classList.toggle('active', selected === 'all' || category === selected);
  });
};

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects((btn.dataset.filterBtn || 'all').toLowerCase());
  });
});

/* ===== Scroll reveal ===== */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealElements.forEach(el => revealObserver.observe(el));
