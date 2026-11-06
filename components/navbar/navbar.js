/**
 * OM BOTTLES MFG COMPANY — Interactive Navbar Component
 * Features:
 *  - Centralized, authoritative product categories data source
 *  - Dynamic synchronization of desktop dropdown & mobile submenu
 *  - Smooth hover with 180ms anti-flicker grace period
 *  - Responsive sticky header with scroll state
 *  - Mobile drawer with accordion & touch accessibility
 *  - Route & active category detection
 */

export const NAVBAR_PRODUCT_CATEGORIES = [
  { name: 'Pharma Bottles', slug: 'pharma-bottles', path: 'pharma-bottles/index.html' },
  { name: 'Chemical Bottles', slug: 'chemical-bottles', path: 'chemical-bottles/index.html' },
  { name: 'Attar Bottles', slug: 'attar-bottles', path: 'attar-bottles/index.html' },
  { name: 'Perfume Bottles', slug: 'perfume-bottles', path: 'perfume-bottles/index.html' },
  { name: 'Water Bottles', slug: 'water-bottles', path: 'water-bottles/index.html' },
  { name: 'Aluminium Dome Lights', slug: 'dome-lights', path: 'dome-lights/index.html' }
];

export function initNavbar() {
  const header = document.querySelector('.om-header');
  if (!header) return;

  const hamburger = document.querySelector('.om-hamburger');
  const drawer = document.querySelector('.om-mobile-drawer');
  const backdrop = document.querySelector('.om-mobile-backdrop');
  const closeBtn = document.querySelector('.om-mobile-close-btn');
  const accordionBtn = document.querySelector('.om-mobile-accordion-btn');
  const accordionItem = document.querySelector('.om-mobile-nav-item.has-accordion');
  const dropdownItem = document.querySelector('.om-nav-item-dropdown');
  const dropdownTrigger = document.querySelector('.om-dropdown-trigger');

  // =========================================================================
  // 1. Centralized Products Dropdown & Submenu Synchronization
  // =========================================================================
  function syncProductsDropdowns() {
    const dropdownMenu = document.querySelector('.om-dropdown-menu');
    const mobileSubmenu = document.querySelector('.om-mobile-submenu');

    // Calculate relative path prefix to pages/products/ based on existing trigger href
    let baseProductsDir = 'pages/products/';
    if (dropdownTrigger) {
      const href = dropdownTrigger.getAttribute('href') || '';
      baseProductsDir = href.replace(/index\.html$/, '');
    }

    const currentPath = window.location.pathname.toLowerCase();

    // Populate or sync Desktop Dropdown Menu
    if (dropdownMenu) {
      dropdownMenu.innerHTML = NAVBAR_PRODUCT_CATEGORIES.map(cat => {
        const catUrl = `${baseProductsDir}${cat.path}`;
        const isActive = currentPath.includes(`/${cat.slug}`);
        return `
          <div class="om-dropdown-item" role="none">
            <a href="${catUrl}" class="om-dropdown-link ${isActive ? 'is-active' : ''}" role="menuitem">
              <span>${cat.name}</span>
              <svg class="om-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
        `;
      }).join('');
    }

    // Populate or sync Mobile Drawer Submenu
    if (mobileSubmenu) {
      mobileSubmenu.innerHTML = NAVBAR_PRODUCT_CATEGORIES.map(cat => {
        const catUrl = `${baseProductsDir}${cat.path}`;
        const isActive = currentPath.includes(`/${cat.slug}`);
        return `
          <a href="${catUrl}" class="om-mobile-sublink ${isActive ? 'is-active' : ''}">
            ${cat.name}
          </a>
        `;
      }).join('');
    }
  }

  syncProductsDropdowns();

  // =========================================================================
  // 2. Smooth Hover with Anti-Flicker Grace Period
  // =========================================================================
  if (dropdownItem) {
    let closeTimer = null;

    function openDropdown() {
      if (closeTimer) {
        clearTimeout(closeTimer);
        closeTimer = null;
      }
      dropdownItem.classList.add('is-open');
      if (dropdownTrigger) {
        dropdownTrigger.setAttribute('aria-expanded', 'true');
      }
    }

    function scheduleClose() {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
      // 180ms grace period keeps dropdown open as cursor transitions diagonally
      closeTimer = setTimeout(() => {
        dropdownItem.classList.remove('is-open');
        if (dropdownTrigger) {
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        }
        closeTimer = null;
      }, 180);
    }

    dropdownItem.addEventListener('mouseenter', openDropdown);
    dropdownItem.addEventListener('mouseleave', scheduleClose);

    dropdownItem.addEventListener('focusin', openDropdown);
    dropdownItem.addEventListener('focusout', (e) => {
      if (!dropdownItem.contains(e.relatedTarget)) {
        scheduleClose();
      }
    });
  }

  // =========================================================================
  // 3. Sticky Header Scroll Effect
  // =========================================================================
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

  // =========================================================================
  // 4. Mobile Drawer Open / Close
  // =========================================================================
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

  // Delegate click for mobile links (including dynamically rendered sublinks)
  document.addEventListener('click', function (e) {
    const link = e.target.closest('.om-mobile-nav-link, .om-mobile-sublink, .om-mobile-btn-quote');
    if (link) {
      closeMobileMenu();
    }
  });

  // =========================================================================
  // 5. Mobile Products Accordion Toggle
  // =========================================================================
  if (accordionBtn && accordionItem) {
    accordionBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = accordionItem.classList.toggle('is-expanded');
      accordionBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Auto-expand mobile accordion if currently on any products page
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.includes('/products')) {
      accordionItem.classList.add('is-expanded');
      accordionBtn.setAttribute('aria-expanded', 'true');
    }
  }

  // =========================================================================
  // 6. Escape Key Handler
  // =========================================================================
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (drawer && drawer.classList.contains('is-active')) {
        closeMobileMenu();
      }
      if (dropdownItem) {
        dropdownItem.classList.remove('is-open');
        if (dropdownTrigger) {
          dropdownTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    }
  });

  // =========================================================================
  // 7. Active Navigation State Detection
  // =========================================================================
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
    setActiveItem('home');
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  initNavbar();
}

// Expose globally for manual re-init if needed
if (typeof window !== 'undefined') {
  window.OMNavbar = {
    init: initNavbar,
    categories: NAVBAR_PRODUCT_CATEGORIES
  };
}
