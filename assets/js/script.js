'use strict';

// Utility function for element toggle
const elementToggleFunc = (elem) => {
  if (elem) elem.classList.toggle("active");
};

// Sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Portfolio filtering functionality
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

// Filter function
const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    const category = item.dataset.category?.toLowerCase() || '';
    if (selectedValue === "all" || category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Filter button events
if (filterButtons.length && filterItems.length) {
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedValue = btn.dataset.filterBtn?.toLowerCase() || '';
      selectValue.textContent = btn.textContent || 'All';
      filterFunc(selectedValue);

      // Update button active states
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// Select dropdown functionality
if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));

  selectItems.forEach(item => {
    item.addEventListener("click", () => {
      const selectedValue = item.dataset.selectItem?.toLowerCase() || '';
      selectValue.textContent = item.textContent || 'All';
      elementToggleFunc(select);
      filterFunc(selectedValue);

      // Update button active states
      filterButtons.forEach(btn => {
        if (btn.dataset.filterBtn?.toLowerCase() === selectedValue) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });
    });
  });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks.length && pages.length) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetPage = link.textContent?.toLowerCase() || '';

      // Update page visibility
      pages.forEach(page => {
        page.classList.toggle("active", page.dataset.page === targetPage);
      });

      // Update navigation link states
      navigationLinks.forEach(navLink => {
        navLink.classList.toggle("active", navLink === link);
      });

      if (window.scrollY !== 0) {
        window.scrollTo(0, 0);
      }
    });
  });
}

// Initialize default filter
if (filterItems.length) {
  filterFunc("all");
}
