/* ─────────────────────────────────────────────
   FreshMart — Form Validation
   Client-side validation for all forms
   ───────────────────────────────────────────── */
const FreshMartForms = (() => {
  'use strict';

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone);
  }

  function showError(input, message) {
    clearError(input);
    input.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-200');
    const error = document.createElement('p');
    error.className = 'text-red-500 text-xs mt-1 form-error-msg';
    error.textContent = message;
    input.parentElement.appendChild(error);
  }

  function clearError(input) {
    input.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-200');
    const parent = input.parentElement;
    const existing = parent.querySelector('.form-error-msg');
    if (existing) existing.remove();
  }

  function showSuccess(containerId, message) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-2xl p-6 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-800 grid place-items-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 class="text-xl font-bold text-green-800 dark:text-green-200">${message || 'Success!'}</h3>
        <p class="text-green-600 dark:text-green-400 mt-2 text-sm">Thank you. We will get back to you shortly.</p>
      </div>`;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function validateContactForm(form) {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const subject = form.querySelector('[name="subject"]');
    const message = form.querySelector('[name="message"]');
    let valid = true;

    if (name) {
      clearError(name);
      if (!name.value.trim()) { showError(name, 'Name is required'); valid = false; }
    }
    if (email) {
      clearError(email);
      if (!email.value.trim()) { showError(email, 'Email is required'); valid = false; }
      else if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email'); valid = false; }
    }
    if (subject) {
      clearError(subject);
      if (!subject.value.trim()) { showError(subject, 'Subject is required'); valid = false; }
    }
    if (message) {
      clearError(message);
      if (!message.value.trim()) { showError(message, 'Message is required'); valid = false; }
      else if (message.value.trim().length < 10) { showError(message, 'Message must be at least 10 characters'); valid = false; }
    }
    return valid;
  }

  function validateLoginForm(form) {
    const email = form.querySelector('[name="email"]');
    const password = form.querySelector('[name="password"]');
    let valid = true;

    if (email) {
      clearError(email);
      if (!email.value.trim()) { showError(email, 'Email is required'); valid = false; }
      else if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email'); valid = false; }
    }
    if (password) {
      clearError(password);
      if (!password.value) { showError(password, 'Password is required'); valid = false; }
      else if (password.value.length < 6) { showError(password, 'Password must be at least 6 characters'); valid = false; }
    }
    return valid;
  }

  function validateSignupForm(form) {
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const password = form.querySelector('[name="password"]');
    const confirmPassword = form.querySelector('[name="confirm-password"]');
    const terms = form.querySelector('[name="terms"]');
    let valid = true;

    if (name) {
      clearError(name);
      if (!name.value.trim()) { showError(name, 'Full name is required'); valid = false; }
    }
    if (email) {
      clearError(email);
      if (!email.value.trim()) { showError(email, 'Email is required'); valid = false; }
      else if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email'); valid = false; }
    }
    if (phone) {
      clearError(phone);
      if (!phone.value.trim()) { showError(phone, 'Phone number is required'); valid = false; }
      else if (!validatePhone(phone.value)) { showError(phone, 'Please enter a valid phone number'); valid = false; }
    }
    if (password) {
      clearError(password);
      if (!password.value) { showError(password, 'Password is required'); valid = false; }
      else if (password.value.length < 8) { showError(password, 'Password must be at least 8 characters'); valid = false; }
    }
    if (confirmPassword) {
      clearError(confirmPassword);
      if (!confirmPassword.value) { showError(confirmPassword, 'Please confirm your password'); valid = false; }
      else if (confirmPassword.value !== password.value) { showError(confirmPassword, 'Passwords do not match'); valid = false; }
    }
    if (terms && !terms.checked) {
      const error = document.createElement('p');
      error.className = 'text-red-500 text-xs mt-1 form-error-msg';
      error.textContent = 'You must agree to the terms';
      terms.parentElement.appendChild(error);
      valid = false;
    }
    return valid;
  }

  function validateNewsletter(form) {
    const email = form.querySelector('input[type="email"]');
    let valid = true;
    if (email) {
      clearError(email);
      if (!email.value.trim()) { showError(email, 'Email is required'); valid = false; }
      else if (!validateEmail(email.value)) { showError(email, 'Please enter a valid email'); valid = false; }
    }
    return valid;
  }

  function clearAllErrors(form) {
    form.querySelectorAll('input, textarea, select').forEach(clearError);
  }

  function initPasswordToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach((btn) => {
      if (btn.dataset.initialized) return;
      btn.dataset.initialized = 'true';

      btn.addEventListener('click', () => {
        const container = btn.closest('.relative');
        if (!container) return;
        const input = container.querySelector('input');
        if (!input) return;

        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';

        const eyeOpen = btn.querySelector('.eye-open');
        const eyeClosed = btn.querySelector('.eye-closed');
        if (eyeOpen && eyeClosed) {
          eyeOpen.classList.toggle('hidden', !isPassword);
          eyeClosed.classList.toggle('hidden', isPassword);
        }
      });
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initPasswordToggles);
    } else {
      initPasswordToggles();
    }
  }

  return {
    validateContactForm,
    validateLoginForm,
    validateSignupForm,
    validateNewsletter,
    showSuccess,
    clearAllErrors,
    validateEmail,
    validatePhone,
    initPasswordToggles
  };
})();

