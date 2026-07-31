/* ─────────────────────────────────────────────
   FreshMart — Shared Footer Component
   ───────────────────────────────────────────── */
const FreshMartFooter = (() => {
  'use strict';

  function getBasePath() {
    const path = window.location.pathname;
    if (path.endsWith('index.html') || path.endsWith('freshmart/') || path.endsWith('freshmart')) return './';
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    if (path.includes('/auth/admin/') || path.includes('/auth/user/')) return '../../';
    return './';
  }

  function render() {
    const base = getBasePath();
    const container = document.getElementById('footer-placeholder');
    if (!container) return;

    container.innerHTML = `
    <footer class="bg-ink dark:bg-gray-950 text-gray-300">
      <div class="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="col-span-2 md:col-span-1">
          <a href="${base}index.html" class="flex items-center gap-2 text-white text-xl font-bold">
            <span class="grid place-items-center w-9 h-9 rounded-full bg-brand-600 text-white">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
              </svg>
            </span>
            <span class="text-xl font-bold tracking-tight">Fresh<span class="text-brand-500">Mart</span></span>
          </a>
          <p class="mt-4 text-sm">Fresh groceries from local farms, delivered to your door — every day.</p>
          <div class="mt-5 flex gap-3">
            <a href="#" class="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-600 transition" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" class="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-600 transition" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-600 transition" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="grid place-items-center w-9 h-9 rounded-full bg-white/10 hover:bg-brand-600 transition" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Shop</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="${base}public/pages/products.html" class="hover:text-white transition">All Products</a></li>
            <li><a href="${base}public/pages/category.html?cat=produce" class="hover:text-white transition">Produce</a></li>
            <li><a href="${base}public/pages/category.html?cat=dairy" class="hover:text-white transition">Dairy & Eggs</a></li>
            <li><a href="${base}public/pages/category.html?cat=bakery" class="hover:text-white transition">Bakery</a></li>
            <li><a href="${base}public/pages/category.html?cat=beverages" class="hover:text-white transition">Beverages</a></li>
            <li><a href="${base}public/pages/cart.html" class="hover:text-white transition">Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="${base}index.html" class="hover:text-white transition">Home</a></li>
            <li><a href="${base}public/pages/home-2.html" class="hover:text-white transition">Home 2</a></li>
            <li><a href="${base}public/pages/about.html" class="hover:text-white transition">About us</a></li>
            <li><a href="${base}public/pages/services.html" class="hover:text-white transition">Services</a></li>
            <li><a href="${base}public/pages/blog.html" class="hover:text-white transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Help</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="${base}public/pages/contact.html" class="hover:text-white transition">Contact us</a></li> 
            <li><a href="${base}public/pages/pricing.html" class="hover:text-white transition">Pricing</a></li>
            <li><a href="${base}public/pages/FAQ.html" class="hover:text-white transition">FAQs</a></li>
            <li><a href="${base}public/pages/terms-of-service.html" class="hover:text-white transition">Terms of Service</a></li>
            <li><a href="${base}public/pages/privacy-policy.html" class="hover:text-white transition">Privacy policy</a></li>
           </ul>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
          <span>&copy; 2026 FreshMart. All rights reserved.</span>
          <span>Made with <svg class="w-4 h-4 inline-block text-brand-400 align-text-bottom -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 01-9-9c0-4.97 3.582-9 8-9 4.97 0 9 4.03 9 9 0 2.12-.74 4.07-1.97 5.61L12 21z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 21V11"/></svg> for fresh food lovers.</span>
        </div>
      </div>
    </footer>`;
  }

  return { render };
})();
