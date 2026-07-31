/* ─────────────────────────────────────────────
   FreshMart — Blog Search & Filter
   Client-side filtering for blog posts
   ───────────────────────────────────────────── */
const FreshMartBlog = (() => {
  'use strict';

  const { BLOG_POSTS } = FreshMartData;

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function renderBlogCards(posts, container) {
    if (!container) return;
    if (posts.length === 0) {
      container.innerHTML = '<p class="col-span-full text-center text-gray-500 py-12">No blog posts found matching your criteria.</p>';
      return;
    }
    const isSubpage = window.location.pathname.includes('/public/pages/') || window.location.pathname.includes('/public/auth/');
    const detailUrl = isSubpage ? 'blog-details.html' : 'public/pages/blog-details.html';
    container.innerHTML = posts.map(post => `
      <article class="blog-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 reveal">
        <a href="${detailUrl}?id=${post.id}" class="block">
          <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
            <img src="${post.img}" alt="${post.title}" loading="lazy" class="blog-image w-full h-full object-cover" />
          </div>
        </a>
        <div class="p-5">
          <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span class="px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-400 font-semibold">${post.category}</span>
            <span>${formatDate(post.date)}</span>
            <span>${post.readTime} read</span>
          </div>
          <a href="${detailUrl}?id=${post.id}" class="block">
            <h3 class="font-bold text-lg text-gray-900 dark:text-white leading-snug hover:text-brand-600 transition line-clamp-2">${post.title}</h3>
          </a>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">${post.excerpt}</p>
          <div class="mt-4 flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-brand-200 dark:bg-brand-800 flex items-center justify-center text-brand-700 font-bold text-xs">${post.author.split(' ').map(n => n[0]).join('')}</div>
            <div>
              <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">${post.author}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">${formatDate(post.date)}</div>
            </div>
          </div>
        </div>
      </article>
    `).join('');
    if (typeof window.initReveal === 'function') { window.initReveal(); }
  }

  function filterPosts(query, category) {
    let filtered = [...BLOG_POSTS];
    if (category && category !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return filtered;
  }

  function getPostById(id) {
    return BLOG_POSTS.find(p => p.id === id);
  }

  function getCategories() {
    return [...new Set(BLOG_POSTS.map(p => p.category))];
  }

  return { renderBlogCards, filterPosts, getPostById, getCategories, formatDate };
})();
