/**
 * OM BOTTLES MFG COMPANY — INDUSTRIES WE SERVE COMPONENT LOGIC
 * Features: Seamless infinite marquee controls, touch interaction, focus pause
 */

export function initIndustriesSlider() {
  const sliderWrap = document.querySelector('.om-industries-slider-wrap');
  const track = document.getElementById('industriesTrack');

  if (!sliderWrap || !track) return;

  // Accessibility: Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    track.style.animationPlayState = 'paused';
    return;
  }

  // Focus pause for keyboard accessibility
  const focusableElements = track.querySelectorAll('a, button');
  focusableElements.forEach((el) => {
    el.addEventListener('focus', () => {
      track.style.animationPlayState = 'paused';
    });
    el.addEventListener('blur', () => {
      track.style.animationPlayState = 'running';
    });
  });

  // Touch device interaction: pause on touchstart, resume on touchend/touchcancel
  let touchActive = false;

  sliderWrap.addEventListener(
    'touchstart',
    () => {
      touchActive = true;
      track.style.animationPlayState = 'paused';
    },
    { passive: true }
  );

  sliderWrap.addEventListener(
    'touchend',
    () => {
      touchActive = false;
      // Slight delay before resuming for comfortable reading
      setTimeout(() => {
        if (!touchActive) {
          track.style.animationPlayState = 'running';
        }
      }, 300);
    },
    { passive: true }
  );

  sliderWrap.addEventListener(
    'touchcancel',
    () => {
      touchActive = false;
      track.style.animationPlayState = 'running';
    },
    { passive: true }
  );
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initIndustriesSlider);
} else {
  initIndustriesSlider();
}

