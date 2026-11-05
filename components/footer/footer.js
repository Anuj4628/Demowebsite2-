/**
 * OM BOTTLES MFG COMPANY — FOOTER COMPONENT LOGIC
 * Features: Dynamic copyright year & copy-to-clipboard functionality
 */

export function initFooter() {
  // 1. Dynamic Copyright Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Interactive Copy-to-Clipboard
  const copyButtons = document.querySelectorAll('.om-btn-copy');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older browsers or non-secure contexts
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          textArea.style.top = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Add feedback class
        btn.classList.add('copied');
        setTimeout(() => {
          btn.classList.remove('copied');
        }, 2200);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooter);
} else {
  initFooter();
}
