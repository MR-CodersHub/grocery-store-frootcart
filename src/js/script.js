/* ─────────────────────────────────────────────
   FreshMart — Main Script
   Initializes shared components, product grid,
   search, cart, scroll-reveal
   ───────────────────────────────────────────── */
(() => {
  'use strict';

  const { PRODUCTS } = FreshMartData;
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const stars = (rating) => {
    const full = Math.round(rating);
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  };

  // ─── INIT SHARED COMPONENTS ───
  FreshMartNavbar.render();
  FreshMartFooter.render();
  FreshMartTheme.init();

  // ─── RENDER PRODUCTS (only on home pages) ───
  const grid = $('#products-grid');
  const noResults = $('#no-results');

  if (grid) {
    const productCard = (p) => {
      const oldPriceHTML = p.oldPrice
        ? `<span class="text-sm text-gray-400 line-through">$${p.oldPrice.toFixed(2)}</span>`
        : '';
      const tagHTML = p.tag
        ? `<span class="absolute top-3 left-3 z-10 px-2 py-1 rounded-full text-[11px] font-bold ${
            p.tag.startsWith('-')
              ? 'bg-amber-400 text-ink'
              : p.tag === 'Best'
              ? 'bg-brand-600 text-white'
              : p.tag === 'New'
              ? 'bg-sky-500 text-white'
              : 'bg-white/90 text-ink dark:bg-gray-800/90'
          }">${p.tag}</span>`
        : '';
      return `
        <article class="product-card relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden" data-id="${p.id}" data-name="${p.name.toLowerCase()}" data-category="${p.category}">
          ${tagHTML}
          <div class="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-700">
            <img src="${p.img}" alt="${p.name}" loading="lazy" class="product-image w-full h-full object-cover" />
          </div>
          <div class="p-4">
            <div class="text-amber-400 text-sm" title="${p.rating} / 5">${stars(p.rating)} <span class="text-gray-400">(${p.reviews})</span></div>
            <h3 class="mt-1 font-semibold text-ink leading-snug">${p.name}</h3>
            <div class="mt-2 flex items-center gap-2">
              <span class="text-lg font-bold text-brand-700">$${p.price.toFixed(2)}</span>
              ${oldPriceHTML}
            </div>
            <button class="add-to-cart btn-pop mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
              Add to cart
            </button>
          </div>
        </article>
      `;
    };

    const renderProducts = () => {
      grid.innerHTML = PRODUCTS.map(productCard).join('');
    };
    renderProducts();

    // ─── SEARCH FILTER ───
    const filterProducts = (query) => {
      const q = query.trim().toLowerCase();
      let visible = 0;
      $$('#products-grid .product-card').forEach((card) => {
        const match = !q || card.dataset.name.includes(q) || card.dataset.category.includes(q);
        card.classList.toggle('hidden', !match);
        if (match) visible++;
      });
      if (noResults) noResults.classList.toggle('hidden', visible !== 0);
    };

    ['#search-input', '#search-input-mobile'].forEach((sel) => {
      const el = $(sel);
      if (el) el.addEventListener('input', (e) => {
        const value = e.target.value;
        $$('#search-input, #search-input-mobile').forEach((other) => {
          if (other !== e.target) other.value = value;
        });
        filterProducts(value);
      });
    });

    // ─── ADD TO CART ───
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.add-to-cart');
      if (!btn) return;
      const card = btn.closest('.product-card');
      if (!card) return;
      const productId = parseInt(card.dataset.id, 10);
      if (!productId) return;

      if (typeof FreshMartCart !== 'undefined') {
        FreshMartCart.addItem(productId);
      }

      const original = btn.innerHTML;
      btn.innerHTML = '✓ Added';
      btn.classList.add('bg-brand-700');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('bg-brand-700');
      }, 900);
    });
  }

  // ─── NEWSLETTER FORM ───
  const newsletterForm = $('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (FreshMartForms.validateNewsletter(newsletterForm)) {
        const msg = $('#newsletter-msg');
        const input = newsletterForm.querySelector('input[type="email"]');
        if (msg) { msg.classList.remove('hidden'); }
        if (input) input.value = '';
        FreshMartForms.showToast('Subscribed! Check your inbox to confirm.');
        setTimeout(() => { if (msg) msg.classList.add('hidden'); }, 4000);
      }
    });
  }

  // ─── SCROLL REVEAL ───
  const initReveal = () => {
    const revealEls = $$('.reveal:not(.is-visible)');
    if (!revealEls.length) return;

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '50px 0px 50px 0px' }
      );
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh && rect.bottom > 0) {
          el.classList.add('is-visible');
        } else {
          io.observe(el);
        }
      });
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  };
  window.initReveal = initReveal;
  initReveal();

  // ─── TOAST NOTIFICATION ───
  FreshMartForms.showToast = function(message, type) {
    type = type || 'success';
    const existing = document.querySelector('.fm-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'fm-toast toast fixed top-20 right-4 z-50 px-6 py-3 rounded-2xl shadow-lg text-sm font-semibold max-w-sm';
    toast.style.cssText = type === 'success'
      ? 'background:#dcfce7;color:#166534;border:1px solid #bbf7d0;'
      : 'background:#fee2e2;color:#991b1b;border:1px solid #fecaca;';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; }, 3000);
    setTimeout(() => toast.remove(), 3500);
  };
})();
