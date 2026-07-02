'use strict';

/* ===== Navbar: scrolled state ===== */
const navbar = document.querySelector('[data-navbar]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ===== Mobile menu ===== */
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

/* ===== Nav links: close menu + active state on scroll ===== */
const navLinks = document.querySelectorAll('[data-nav-link]');

navLinks.forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

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
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));
