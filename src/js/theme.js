/* ─────────────────────────────────────────────
   FreshMart — Dark/Light Mode + RTL Toggle
   ───────────────────────────────────────────── */
const FreshMartTheme = (() => {
  'use strict';

  const STORAGE_KEY = 'fm-theme';
  const RTL_KEY = 'fm-rtl';

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    if (path.includes('/auth/admin/') || path.includes('/auth/user/')) return '../../';
    return './';
  }

  function getThemeIcon(isDark) {
    return isDark
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  function getRtlIcon() {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 8 3 12 7 16"/><polyline points="17 8 21 12 17 16"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="4" x2="12" y2="20"/></svg>`;
  }

  function applyTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  function applyRtl(isRtl) {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'ar' : 'en';
  }

  function init() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    const isDark = storedTheme !== null ? storedTheme === 'dark' : prefersDark;
    applyTheme(isDark);

    const storedRtl = localStorage.getItem(RTL_KEY);
    const isRtl = storedRtl !== null ? storedRtl === 'true' : false;
    applyRtl(isRtl);

    const themeToggle = document.getElementById('theme-toggle');
    const rtlToggle = document.getElementById('rtl-toggle');

    if (themeToggle) {
      themeToggle.innerHTML = getThemeIcon(isDark);
      themeToggle.addEventListener('click', () => {
        const currentDark = document.documentElement.classList.contains('dark');
        const newDark = !currentDark;
        applyTheme(newDark);
        localStorage.setItem(STORAGE_KEY, newDark ? 'dark' : 'light');
        themeToggle.innerHTML = getThemeIcon(newDark);
      });
    }

    if (rtlToggle) {
      rtlToggle.innerHTML = getRtlIcon();
      rtlToggle.addEventListener('click', () => {
        const currentRtl = document.documentElement.dir === 'rtl';
        const newRtl = !currentRtl;
        applyRtl(newRtl);
        localStorage.setItem(RTL_KEY, newRtl ? 'true' : 'false');
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem(STORAGE_KEY) === null) {
        applyTheme(e.matches);
        if (themeToggle) themeToggle.innerHTML = getThemeIcon(e.matches);
      }
    });
  }

  return { init, getBasePath };
})();
