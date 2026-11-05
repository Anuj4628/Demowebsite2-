/**
 * OM BOTTLES MFG COMPANY — PRODUCT CATALOGUE LOGIC
 * Features:
 *  - Interactive Category / Keyword Search & Filter
 *  - Size Card Selector with URL / WhatsApp Enquiry synchronization
 *  - Interactive Product Detail Lightbox & Modal
 *  - Smooth category anchor scroll
 */

import { PRODUCTS, CATEGORIES } from '../../data/products-data.js';

export function initProductsCatalogue() {
  // 1. Smooth Scroll for Explore Categories button
  const exploreBtn = document.getElementById('btnExploreCategories');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('categories');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // 2. Interactive Search & Category Filter (on Main Products Page)
  const searchInput = document.getElementById('productSearchInput');
  const filterBtns = document.querySelectorAll('.om-filter-btn');
  const categoryCards = document.querySelectorAll('.om-category-card');

  function applyFilter() {
    if (!searchInput && filterBtns.length === 0) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let activeFilter = 'all';

    filterBtns.forEach((btn) => {
      if (btn.classList.contains('is-active')) {
        activeFilter = btn.getAttribute('data-filter') || 'all';
      }
    });

    categoryCards.forEach((card) => {
      const catId = card.getAttribute('data-category') || '';
      const text = card.textContent.toLowerCase();

      const matchesFilter = activeFilter === 'all' || catId === activeFilter;
      const matchesSearch = query === '' || text.includes(query);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyFilter();
    });
  });

  // 3. Size Selector on Category Pages
  const sizeCards = document.querySelectorAll('.om-size-card');
  const selectedSizeDisplay = document.getElementById('selectedSizeText');
  const sizeEnquiryBtn = document.getElementById('btnSizeEnquiry');

  if (sizeCards.length > 0) {
    sizeCards.forEach((card) => {
      card.addEventListener('click', () => {
        sizeCards.forEach((c) => c.classList.remove('is-selected'));
        card.classList.add('is-selected');

        const chosenSize = card.getAttribute('data-size') || '';
        const currentCategory = document.body.getAttribute('data-category-name') || 'Aluminium Bottles';

        if (selectedSizeDisplay) {
          selectedSizeDisplay.textContent = chosenSize;
        }

        if (sizeEnquiryBtn) {
          // Pre-fill quote link and WhatsApp message
          const quoteUrl = `../../pages/get-quote/index.html?category=${encodeURIComponent(currentCategory)}&size=${encodeURIComponent(chosenSize)}`;
          sizeEnquiryBtn.setAttribute('href', quoteUrl);
        }
      });
    });
  }

  // 4. Interactive Product Detail Modal
  initProductDetailModal();
}

function initProductDetailModal() {
  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.om-modal-close');
  const modalImg = modal.querySelector('.om-modal-main-img');
  const modalTitle = modal.querySelector('.om-modal-title');
  const modalDesc = modal.querySelector('.om-modal-desc');
  const modalMaterial = modal.querySelector('.om-modal-material');
  const modalFinish = modal.querySelector('.om-modal-finish');
  const modalClosure = modal.querySelector('.om-modal-closure');
  const modalChipsContainer = modal.querySelector('.om-modal-size-chips');
  const modalQuoteBtn = modal.querySelector('.om-modal-btn-quote');
  const modalWaBtn = modal.querySelector('.om-modal-btn-wa');

  let activeProduct = null;
  let activeSelectedSize = '';

  const isCategorySubpage = window.location.pathname.includes('/pharma-bottles/') ||
                            window.location.pathname.includes('/chemical-bottles/') ||
                            window.location.pathname.includes('/attar-bottles/') ||
                            window.location.pathname.includes('/perfume-bottles/') ||
                            window.location.pathname.includes('/water-bottles/') ||
                            window.location.pathname.includes('/dome-lights/');
  const assetRoot = isCategorySubpage ? '../../../' : '../../';
  const quotePageUrl = isCategorySubpage ? '../../get-quote/index.html' : '../get-quote/index.html';

  function openModal(prodId) {
    activeProduct = PRODUCTS.find((p) => p.id === prodId);
    if (!activeProduct) return;

    modalImg.src = activeProduct.image.startsWith('assets') ? `${assetRoot}${activeProduct.image}` : activeProduct.image;
    modalImg.alt = activeProduct.name;
    modalTitle.textContent = activeProduct.name;
    modalDesc.textContent = activeProduct.shortDesc;

    if (modalMaterial) modalMaterial.textContent = activeProduct.material || 'Pure Grade Aluminium';
    if (modalFinish) modalFinish.textContent = activeProduct.finish || 'Polished / Anodised Finish';
    if (modalClosure) modalClosure.textContent = activeProduct.closure || activeProduct.mount || 'Precision Threaded Closure';

    // Render Size Chips
    if (modalChipsContainer) {
      modalChipsContainer.innerHTML = '';
      const sizes = activeProduct.sizes || [];
      activeSelectedSize = sizes[0] || '';

      sizes.forEach((sz, idx) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `om-modal-size-chip ${idx === 0 ? 'is-active' : ''}`;
        chip.textContent = sz;
        chip.addEventListener('click', () => {
          modalChipsContainer.querySelectorAll('.om-modal-size-chip').forEach((c) => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          activeSelectedSize = sz;
          updateModalCTAs();
        });
        modalChipsContainer.appendChild(chip);
      });
    }

    updateModalCTAs();
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function updateModalCTAs() {
    if (!activeProduct) return;
    const quoteLink = `${quotePageUrl}?product=${encodeURIComponent(activeProduct.name)}&size=${encodeURIComponent(activeSelectedSize)}`;
    const waText = encodeURIComponent(`Hello OM Bottles MFG COMPANY, I would like to enquire about ${activeProduct.name} (Size: ${activeSelectedSize}).`);
    const waLink = `https://wa.me/918898419781?text=${waText}`;

    if (modalQuoteBtn) modalQuoteBtn.setAttribute('href', quoteLink);
    if (modalWaBtn) modalWaBtn.setAttribute('href', waLink);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Attach to all "View Details" buttons
  document.querySelectorAll('[data-open-product]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pId = btn.getAttribute('data-open-product');
      if (pId) openModal(pId);
    });
  });
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductsCatalogue);
} else {
  initProductsCatalogue();
}
