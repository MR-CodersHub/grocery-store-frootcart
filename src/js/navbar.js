/* ─────────────────────────────────────────────
   FreshMart — Shared Navbar Component
   Renders consistently across all pages
   ───────────────────────────────────────────── */
const FreshMartNavbar = (() => {
  'use strict';

  function getBasePath() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('freshmart/') || path.endsWith('freshmart')) return './';
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    if (path.includes('/auth/admin/') || path.includes('/auth/user/')) return '../../';
    return './';
  }

  function isActive(href) {
    const currentPath = window.location.pathname;
    // Normalize: strip query strings and trailing slashes for comparison
    const normalize = (p) => p.split('?')[0].replace(/\/+$/, '');
    const current = normalize(currentPath);
    const target = normalize(new URL(href, window.location.href).pathname);
    return current === target;
  }

  function render() {
    const base = getBasePath();
    const container = document.getElementById('navbar-placeholder');
    if (!container) return;

    const promoBar = `
    `;

    const header = `
    <header id="site-header" class="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div class="navbar-container max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <a href="${base}index.html" class="flex items-center gap-2 shrink-0" aria-label="FreshMart home">
          <span class="grid place-items-center w-9 h-9 rounded-full bg-brand-600 text-white">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
            </svg>
          </span>
          <span class="text-xl font-bold tracking-tight">Fresh<span class="text-brand-600">Mart</span></span>
        </a>

        <nav class="hidden lg:flex items-center gap-7 ml-6 text-sm font-medium text-gray-700 dark:text-gray-300" aria-label="Primary" id="desktop-nav">
          <a href="${base}index.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}index.html">Home</a>
          <a href="${base}public/pages/home-2.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/home-2.html">Home 2</a>
          <a href="${base}public/pages/about.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/about.html">About</a>
          <a href="${base}public/pages/products.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/products.html">Products</a>
          <a href="${base}public/pages/blog.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/blog.html">Blog</a>
          <a href="${base}public/pages/contact.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/contact.html">Contact</a>
        </nav>

        <div class="hidden md:flex flex-1 max-w-md ml-auto">
          <div class="relative w-full">
            <input id="search-input" type="search" placeholder="Search for groceries..."
              class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition text-gray-900 dark:text-gray-100" />
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>
        </div>

        <div class="flex items-center gap-1 ml-auto md:ml-0">
          <button id="theme-toggle" class="grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300" aria-label="Toggle theme"></button>
          <button id="rtl-toggle" class="grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300" aria-label="Toggle RTL"></button>

          <div class="relative">
            <button id="profile-btn" class="grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Account" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
            <div id="profile-dropdown" class="hidden absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700 py-2 z-50">
              <a href="${base}public/auth/login.html" class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Login
              </a>
              <a href="${base}public/auth/signup.html" class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                Sign Up
              </a>
              <div class="border-t border-gray-100 dark:border-gray-700 my-1"></div>
              <a href="${base}auth/admin/admin-dashboard.html" class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Admin Dashboard
              </a>
              <a href="${base}auth/user/user-dashboard.html" class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                User Dashboard
              </a>
            </div>
          </div>

          <a href="${base}public/pages/cart.html" id="cart-btn" class="relative grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300" aria-hidden="true">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
            </svg>
            <span id="cart-count" class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-brand-600 text-white text-[10px] font-bold">0</span>
          </a>

          <button id="menu-btn" class="lg:hidden grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Open menu" aria-expanded="false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <nav class="px-4 py-3 flex flex-col gap-1 text-sm font-medium" aria-label="Mobile" id="mobile-nav">
          <a href="${base}index.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}index.html">Home</a>
          <a href="${base}public/pages/home-2.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/home-2.html">Home 2</a>
          <a href="${base}public/pages/about.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/about.html">About</a>
          <a href="${base}public/pages/products.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/products.html">Products</a>
          <a href="${base}public/pages/blog.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/blog.html">Blog</a>
          <a href="${base}public/pages/pricing.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/pricing.html">Pricing</a>
          <a href="${base}public/pages/contact.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/contact.html">Contact</a>
        </nav>
      </div>
    </header>`;

    container.innerHTML = promoBar + header;

    // Active nav link highlighting
    document.querySelectorAll('.nav-link').forEach(link => {
      if (isActive(link.getAttribute('data-href'))) {
        link.classList.add('text-brand-600', 'dark:text-brand-400', 'font-semibold');
        link.setAttribute('aria-current', 'page');
        // Underline indicator
        const indicator = document.createElement('span');
        indicator.className = 'absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-brand-600 dark:bg-brand-400';
        link.appendChild(indicator);
      }
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      if (isActive(link.getAttribute('data-href'))) {
        link.classList.add('bg-brand-50', 'dark:bg-brand-900/30', 'text-brand-700', 'dark:text-brand-400', 'font-semibold');
        link.classList.remove('text-gray-700', 'dark:text-gray-200');
        link.setAttribute('aria-current', 'page');
      }
    });

    // Profile dropdown
    const profileBtn = document.getElementById('profile-btn');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileBtn && profileDropdown) {
      profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !profileDropdown.classList.contains('hidden');
        profileDropdown.classList.toggle('hidden');
        profileBtn.setAttribute('aria-expanded', String(!isOpen));
      });
      document.addEventListener('click', (e) => {
        if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
          profileDropdown.classList.add('hidden');
          profileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!isOpen));
      });
      mobileMenu.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
          mobileMenu.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Sync cart count from localStorage
    if (typeof FreshMartCart !== 'undefined') {
      const cartCountEl = document.getElementById('cart-count');
      if (cartCountEl) {
        cartCountEl.textContent = String(FreshMartCart.getCount());
        FreshMartCart.onUpdate(function (count) {
          cartCountEl.textContent = String(count);
          if (count > 0) {
            cartCountEl.animate(
              [{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }],
              { duration: 300, easing: 'ease-out' }
            );
          }
        });
      }
    }
  }

  return { render, getBasePath };
})();
