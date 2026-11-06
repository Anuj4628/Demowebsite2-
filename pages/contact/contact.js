/**
 * OM BOTTLES MFG COMPANY — CONTACT US PAGE INTERACTIVE SCRIPT
 * - Clipboard Copy with dynamic Toast Notifications
 * - Enquiry Form Field Validation
 * - Dual-Channel Submission Flow (WhatsApp & Email/Gmail prefill)
 */

document.addEventListener('DOMContentLoaded', () => {
  initClipboardActions();
  initEnquiryForm();
});

/* ==========================================================================
   1. Clipboard Copy with Toast Notifications
   ========================================================================== */
function initClipboardActions() {
  const toast = document.getElementById('omToast');
  const toastMessage = document.getElementById('omToastMessage');
  let toastTimer = null;

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('is-visible');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  document.querySelectorAll('[data-copy-target]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      const textToCopy = targetEl ? targetEl.textContent.trim() : btn.getAttribute('data-copy-value') || '';
      const label = btn.getAttribute('data-copy-label') || 'Copied to clipboard!';

      if (!textToCopy) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older browsers
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        showToast(label);
      } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('Unable to copy automatically');
      }
    });
  });
}

/* ==========================================================================
   2. Business Enquiry Form & Dual Channel Modal Flow
   ========================================================================== */
function initEnquiryForm() {
  const form = document.getElementById('enquiryForm');
  const modal = document.getElementById('enquiryChannelModal');
  if (!form || !modal) return;

  const closeBtn = modal.querySelector('.om-modal-close-btn');
  const btnWhatsApp = document.getElementById('btnChannelWhatsApp');
  const btnEmail = document.getElementById('btnChannelEmail');

  const fullNameInput = document.getElementById('fullName');
  const companyNameInput = document.getElementById('companyName');
  const emailInput = document.getElementById('emailAddress');
  const phoneInput = document.getElementById('phoneNumber');
  const productSelect = document.getElementById('productInterest');
  const messageInput = document.getElementById('messageText');

  // Clear validation error on user input
  [fullNameInput, companyNameInput, emailInput, phoneInput, productSelect, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    });
    input.addEventListener('change', () => {
      input.classList.remove('is-invalid');
    });
  });

  // Modal open / close handlers
  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
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

  // Form submission validation & modal trigger
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalid = null;

    function checkField(el, condition) {
      if (!condition) {
        el.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalid) firstInvalid = el;
      } else {
        el.classList.remove('is-invalid');
      }
    }

    // Validation rules
    const nameVal = fullNameInput.value.trim();
    checkField(fullNameInput, nameVal.length >= 2);

    const compVal = companyNameInput.value.trim();
    checkField(companyNameInput, compVal.length >= 2);

    const emailVal = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    checkField(emailInput, emailRegex.test(emailVal));

    const phoneVal = phoneInput.value.trim();
    const phoneDigits = phoneVal.replace(/\D/g, '');
    checkField(phoneInput, phoneDigits.length >= 7);

    const prodVal = productSelect.value.trim();
    checkField(productSelect, prodVal !== '');

    const msgVal = messageInput.value.trim();
    checkField(messageInput, msgVal.length >= 5);

    if (!isValid) {
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Information is valid — Prepare WhatsApp URL
    const waPhone = '918898419781';
    const waText = 
`*New Business Enquiry — OM Bottles MFG Company*
• *Full Name:* ${nameVal}
• *Company Name:* ${compVal}
• *Email:* ${emailVal}
• *Phone:* ${phoneVal}
• *Product Interest:* ${prodVal}
• *Message:* ${msgVal}`;

    const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;
    if (btnWhatsApp) {
      btnWhatsApp.setAttribute('href', waUrl);
    }

    // Prepare Email mailto URL
    const emailRecipient = 'ombottlesdeepak@gmail.com';
    const emailSubject = `New Business Enquiry – OM Bottles MFG Company (${compVal})`;
    const emailBody = 
`Hello OM Bottles MFG Company Team,

I am submitting a business requirement enquiry from your website contact page:

Full Name: ${nameVal}
Company Name: ${compVal}
Email Address: ${emailVal}
Phone Number: ${phoneVal}
Product Interest: ${prodVal}

Requirement Details:
${msgVal}

Looking forward to your quotation and response.

Best regards,
${nameVal}
${compVal}`;

    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    if (btnEmail) {
      btnEmail.setAttribute('href', mailtoUrl);
    }

    // Open confirmation modal
    openModal();
  });

  // When clicking WhatsApp or Email option, close modal and show notice
  [btnWhatsApp, btnEmail].forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      setTimeout(() => {
        closeModal();
      }, 400);
    });
  });
}

