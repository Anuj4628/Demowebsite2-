/**
 * OM BOTTLES MFG COMPANY — Hero Slider Component
 * Features:
 * - 3-Slide Autoplay with customizable interval (5500ms)
 * - Hardware-accelerated CSS crossfade transitions
 * - Interactive Next / Prev controls with keyboard support
 * - Touch swipe gestures for tablets & smartphones
 * - Accessible ARIA state management
 */

(function () {
  'use strict';

  function initHeroSlider() {
    const sliderContainer = document.querySelector('.om-hero');
    if (!sliderContainer) return;

    const slides = Array.from(sliderContainer.querySelectorAll('.om-hero-slide'));
    const bullets = Array.from(sliderContainer.querySelectorAll('.om-pagination-bullet'));
    const prevBtn = sliderContainer.querySelector('.om-arrow-prev');
    const nextBtn = sliderContainer.querySelector('.om-arrow-next');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 5500; // 5.5 seconds per slide

    // Update active slide visual & accessibility states
    function showSlide(index) {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index >= slides.length) {
        index = 0;
      }

      currentIndex = index;

      slides.forEach((slide, i) => {
        const isActive = i === currentIndex;
        if (isActive) {
          slide.classList.add('is-active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('is-active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });

      bullets.forEach((bullet, i) => {
        const isActive = i === currentIndex;
        if (isActive) {
          bullet.classList.add('is-active');
          bullet.setAttribute('aria-selected', 'true');
        } else {
          bullet.classList.remove('is-active');
          bullet.setAttribute('aria-selected', 'false');
        }
      });
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
      resetAutoplay();
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
      resetAutoplay();
    }

    function goToSlide(index) {
      showSlide(index);
      resetAutoplay();
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        showSlide(currentIndex + 1);
      }, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    // Prev / Next button listeners
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
      });
    }

    // Pagination bullet listeners
    bullets.forEach((bullet, i) => {
      bullet.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(i);
      });
    });

    // Keyboard navigation (Left / Right arrow keys)
    document.addEventListener('keydown', (e) => {
      // Only process when hero is on screen
      const rect = sliderContainer.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    });

    // Touch Swipe Support for mobile & tablet
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 45; // Minimum travel distance to trigger slide

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });

    function handleGesture() {
      const diffX = touchEndX - touchStartX;
      if (Math.abs(diffX) > SWIPE_THRESHOLD) {
        if (diffX < 0) {
          // Swiped left -> next
          nextSlide();
        } else {
          // Swiped right -> prev
          prevSlide();
        }
      }
    }

    // Initialize first slide and start autoplay
    showSlide(0);
    startAutoplay();

    // Expose control API for external invocation
    window.OMHero = {
      next: nextSlide,
      prev: prevSlide,
      goTo: goToSlide,
      start: startAutoplay,
      stop: stopAutoplay
    };
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSlider);
  } else {
    initHeroSlider();
  }
})();
