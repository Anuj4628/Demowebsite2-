/**
 * OM BOTTLES MFG COMPANY — Interactive Navbar Component
 * Handles sticky scroll state, mobile drawer toggle, products dropdown,
 * keyboard accessibility, and active route detection.
 */

(function () {
  'use strict';

  function initNavbar() {
    const header = document.querySelector('.om-header');
    if (!header) return;

    const hamburger = document.querySelector('.om-hamburger');
    const drawer = document.querySelector('.om-mobile-drawer');
    const backdrop = document.querySelector('.om-mobile-backdrop');
    const closeBtn = document.querySelector('.om-mobile-close-btn');
    const accordionBtn = document.querySelector('.om-mobile-accordion-btn');
    const accordionItem = document.querySelector('.om-mobile-nav-item.has-accordion');
    const mobileLinks = document.querySelectorAll('.om-mobile-nav-link, .om-mobile-sublink, .om-mobile-btn-quote');

    // 1. Sticky Header Scroll Effect
    let ticking = false;
    function updateScrollState() {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }, { passive: true });

    updateScrollState();

    // 2. Open / Close Mobile Drawer
    function openMobileMenu() {
      if (!drawer || !backdrop || !hamburger) return;
      hamburger.classList.add('is-active');
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.classList.add('is-active');
      backdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      if (!drawer || !backdrop || !hamburger) return;
      hamburger.classList.remove('is-active');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('is-active');
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }

    if (hamburger) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = drawer && drawer.classList.contains('is-active');
        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeMobileMenu();
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        closeMobileMenu();
      });
    }

    // 3. Close mobile drawer when a link is clicked
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    // 4. Mobile Products Accordion Toggle
    if (accordionBtn && accordionItem) {
      accordionBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const isExpanded = accordionItem.classList.toggle('is-expanded');
        accordionBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      });
    }

    // 5. Escape key to close mobile drawer or dropdown
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (drawer && drawer.classList.contains('is-active')) {
          closeMobileMenu();
        }
        const desktopDropdown = document.querySelector('.om-nav-item-dropdown.is-open');
        if (desktopDropdown) {
          desktopDropdown.classList.remove('is-open');
        }
      }
    });

    // 6. Highlight active navigation item based on current location
    const currentPath = window.location.pathname.toLowerCase();
    const navItems = document.querySelectorAll('.om-nav-item');
    const mobileItems = document.querySelectorAll('.om-mobile-nav-item');

    function setActiveItem(pageId) {
      navItems.forEach(item => {
        if (item.dataset.page === pageId) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });

      mobileItems.forEach(item => {
        if (item.dataset.page === pageId) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    }

    // Determine current route
    if (currentPath.includes('/about')) {
      setActiveItem('about');
    } else if (currentPath.includes('/products')) {
      setActiveItem('products');
    } else if (currentPath.includes('/certificates')) {
      setActiveItem('certificates');
    } else if (currentPath.includes('/contact')) {
      setActiveItem('contact');
    } else if (currentPath.includes('/get-quote')) {
      setActiveItem('get-quote');
    } else {
      // Default to Home
      setActiveItem('home');
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }

  // Expose to window for modular re-init
  window.OMNavbar = {
    init: initNavbar
  };
})();

