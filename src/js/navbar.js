/* ─────────────────────────────────────────────
   FreshMart — Shared Navbar Component
   Renders consistently across all pages
   ───────────────────────────────────────────── */
const FreshMartNavbar = (() => {
  'use strict';

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    if (path.includes('/auth/admin/') || path.includes('/auth/user/')) return '../../';
    return './';
  }

  function isActive(href) {
    const currentPath = window.location.pathname;
    const normalize = (p) => p.split('?')[0].replace(/\/+$/, '');
    const current = normalize(currentPath);
    const target = normalize(new URL(href, window.location.href).pathname);
    return current === target;
  }

  function render() {
    const base = getBasePath();
    const container = document.getElementById('navbar-placeholder');
    if (!container) return;

    const headerHTML = `
    <header id="site-header" class="w-full fixed top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 transition-transform duration-300">
      <div class="navbar-container max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        <!-- Brand Logo (Left) -->
        <div class="flex items-center shrink-0 lg:w-64">
          <a href="${base}index.html" class="flex items-center gap-2" aria-label="Froot Cart home">
            <span class="grid place-items-center w-9 h-9 rounded-full text-white">
              <img src="${base}assets/img/logo.png" alt="Froot Cart Logo" class="w-8 h-8" />
            </span>
            <span class="text-xl font-bold tracking-tight"><span class="text-brand-600">Froot Cart</span></span>
          </a>
        </div>

        <!-- Desktop Nav (Centered) -->
        <nav class="hidden lg:flex items-center justify-center gap-7 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300" aria-label="Primary" id="desktop-nav">
          <a href="${base}index.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}index.html">Home</a>
          <a href="${base}public/pages/about.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/about.html">About</a>
          <a href="${base}public/pages/products.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/products.html">Products</a>
          <a href="${base}public/pages/blog.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/blog.html">Blog</a>
          <a href="${base}public/pages/contact.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}public/pages/contact.html">Contact</a>
          <a href="${base}auth/user/user-dashboard.html" class="nav-link relative pb-0.5 hover:text-brand-600 transition" data-href="${base}auth/user/user-dashboard.html">Dashboard</a>
        </nav>

        <!-- Right-side controls (Right) -->
        <div class="flex items-center justify-end gap-1.5 ml-auto lg:ml-0 shrink-0 lg:w-64">
          <button id="theme-toggle" class="grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300" aria-label="Toggle theme"></button>
          <button id="rtl-toggle" class="grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-300 text-xs font-bold tracking-wider" aria-label="Toggle RTL">RTL</button>

          <!-- Cart -->
          <a href="${base}public/pages/cart.html" id="cart-btn" class="relative grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300" aria-hidden="true">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>
            </svg>
            <span id="cart-count" class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-brand-600 text-white text-[10px] font-bold">0</span>
          </a>

          <!-- Primary CTA — desktop + tablet -->
          <a href="${base}auth/user/user-dashboard.html"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-sm font-semibold shadow-soft transition-all duration-200 shrink-0 ml-1">
            Dashboard
          </a>

          <!-- Mobile hamburger -->
          <button id="menu-btn" class="lg:hidden grid place-items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Open menu" aria-expanded="false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="lg:hidden hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
        <nav class="px-4 py-3 flex flex-col gap-1 text-sm font-medium" aria-label="Mobile" id="mobile-nav">
          <a href="${base}index.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}index.html">Home</a>
          <a href="${base}public/pages/about.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/about.html">About</a>
          <a href="${base}public/pages/products.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/products.html">Products</a>
          <a href="${base}public/pages/blog.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/blog.html">Blog</a>
          <a href="${base}public/pages/pricing.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/pricing.html">Pricing</a>
          <a href="${base}public/pages/contact.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200" data-href="${base}public/pages/contact.html">Contact</a>
          <a href="${base}auth/user/user-dashboard.html" class="mobile-nav-link px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold" data-href="${base}auth/user/user-dashboard.html">Dashboard</a>
          <!-- Mobile CTA -->
          <a href="${base}public/pages/products.html"
            class="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-95 text-white text-sm font-semibold shadow-soft transition-all duration-200">
            Get Started
          </a>
        </nav>
      </div>
    </header>`;

    container.innerHTML = headerHTML;

    // ── Active nav link highlighting ──
    document.querySelectorAll('.nav-link').forEach(link => {
      if (isActive(link.getAttribute('data-href'))) {
        link.classList.add('text-brand-600', 'dark:text-brand-400', 'font-semibold');
        link.setAttribute('aria-current', 'page');
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

    // ── Mobile menu toggle ──
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

    // ── Cart count sync ──
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

    // ── Scroll-up sticky header ──
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
      let lastScrollY = window.scrollY;
      let ticking = false;
      const THRESHOLD = 80; // px from top before hide behaviour activates

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const currentY = window.scrollY;
            if (currentY < THRESHOLD) {
              // Near top — always show
              headerEl.style.transform = 'translateY(0)';
            } else if (currentY > lastScrollY) {
              // Scrolling down — hide
              headerEl.style.transform = 'translateY(-100%)';
              // Also close mobile menu when header hides
              if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
              }
            } else {
              // Scrolling up — reveal
              headerEl.style.transform = 'translateY(0)';
            }
            lastScrollY = currentY;
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }

  return { render, getBasePath };
})();
