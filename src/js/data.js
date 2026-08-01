/* ─────────────────────────────────────────────
   FreshMart — Global Data Store
   Products, Services, Blog Posts, Pricing, FAQs
   ───────────────────────────────────────────── */
const FreshMartData = (() => {
  'use strict';

  const getBasePath = () => {
    if (typeof window === 'undefined') return './';
    const path = window.location.pathname;
    if (path.includes('/public/pages/') || path.includes('/public/auth/')) return '../../';
    if (path.includes('/auth/admin/') || path.includes('/auth/user/')) return '../../';
    return './';
  };

  const fixImgPath = (path) => {
    if (!path || path.startsWith('http://') || path.startsWith('https://')) return path;
    const cleanPath = path.replace(/^(\.\.\/|\.\/|\/)+/, '');
    return getBasePath() + cleanPath;
  };

  const PRODUCTS = [
    { id: 1, name: 'Organic Avocados', category: 'produce', price: 4.99, oldPrice: 6.49, rating: 4.8, reviews: 124, img: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=500&q=80', tag: 'Organic' },
    { id: 2, name: 'Fresh Strawberries', category: 'produce', price: 3.49, oldPrice: 4.99, rating: 4.9, reviews: 211, img: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=500&q=80', tag: '-30%' },
    { id: 3, name: 'Sourdough Bread', category: 'bakery', price: 5.99, oldPrice: null, rating: 4.7, reviews: 88, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80', tag: 'New' },
    { id: 4, name: 'Free-Range Eggs (12)', category: 'dairy', price: 6.49, oldPrice: 7.99, rating: 4.8, reviews: 156, img: fixImgPath('assets/img/eggs.jpg'), tag: 'Best' },
    { id: 5, name: 'Crisp Honeycrisp Apples', category: 'produce', price: 2.99, oldPrice: null, rating: 4.6, reviews: 72, img: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&q=80', tag: null },
    { id: 6, name: 'Greek Yogurt (500g)', category: 'dairy', price: 4.49, oldPrice: 5.99, rating: 4.7, reviews: 94, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80', tag: '-25%' },
    { id: 7, name: 'Wild Blueberries', category: 'produce', price: 5.99, oldPrice: null, rating: 4.9, reviews: 130, img: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&q=80', tag: 'Local' },
    { id: 8, name: 'Heirloom Tomatoes', category: 'produce', price: 3.99, oldPrice: 4.99, rating: 4.5, reviews: 61, img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80', tag: '-20%' },
    { id: 9, name: 'Organic Spinach Bundle', category: 'produce', price: 3.29, oldPrice: null, rating: 4.6, reviews: 88, img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80', tag: 'Organic' },
    { id: 10, name: 'Almond Milk (1L)', category: 'dairy', price: 3.99, oldPrice: 4.99, rating: 4.5, reviews: 102, img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80', tag: '-20%' },
    { id: 11, name: 'Whole Wheat Bread', category: 'bakery', price: 4.49, oldPrice: null, rating: 4.7, reviews: 76, img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&q=80', tag: null },
    { id: 12, name: 'Fresh Orange Juice (1L)', category: 'beverages', price: 5.49, oldPrice: 6.99, rating: 4.8, reviews: 143, img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80', tag: '-21%' },
    { id: 13, name: 'Granola Mix (500g)', category: 'pantry', price: 6.99, oldPrice: null, rating: 4.6, reviews: 55, img: fixImgPath('assets/img/granola.jpg'), tag: 'New' },
    { id: 14, name: 'Dark Chocolate Bar', category: 'snacks', price: 3.49, oldPrice: null, rating: 4.9, reviews: 189, img: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80', tag: 'Best' },
    { id: 15, name: 'Sparkling Water (6-pack)', category: 'beverages', price: 4.99, oldPrice: 5.99, rating: 4.4, reviews: 67, img: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=80', tag: '-17%' },
    { id: 16, name: 'Mixed Nuts (300g)', category: 'snacks', price: 7.99, oldPrice: null, rating: 4.7, reviews: 112, img: fixImgPath('assets/img/mixed-nuts.jpg'), tag: null }
  ];

  const SERVICES = [
    {
      id: 'fresh-produce',
      title: 'Fresh Produce Delivery',
      shortDesc: 'Farm-fresh fruits and vegetables delivered within hours of harvest.',
      longDesc: 'Our Fresh Produce Delivery service brings the best of local farms straight to your kitchen. We partner with over 80 farms within 100 miles to ensure every fruit and vegetable is picked at peak ripeness and delivered the same day. From leafy greens to seasonal berries, every item is hand-inspected for quality.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M17 17m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M17 7V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2"/><path d="M14 9h6.5a1 1 0 0 1 .8.4l2.7 3.6a1 1 0 0 1 .1.6V17a1 1 0 0 1-1 1h-1"/><line x1="3" y1="10" x2="14" y2="9"/></svg>`,
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
      features: ['Same-day delivery', 'Hand-picked quality', '80+ local farm partners', '100% organic options', 'Seasonal selections', 'Sustainable packaging'],
      category: 'Essentials'
    },
    {
      id: 'dairy-eggs',
      title: 'Dairy & Eggs',
      shortDesc: 'Premium dairy products and free-range eggs from happy hens.',
      longDesc: 'Our Dairy & Eggs collection features products from free-range, grass-fed animals. From creamy yogurt to rich farm-fresh eggs, we ensure ethical sourcing and superior taste. Our dairy is sourced within 50 miles, guaranteeing freshness you can taste.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l2 18H6L8 2z"/><path d="M12 2v4"/><path d="M6 14h12"/></svg>`,
      img: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&q=80',
      features: ['Free-range eggs', 'Grass-fed dairy', 'No antibiotics', 'Cold-chain guaranteed', 'Same-day delivery', 'Organic options'],
      category: 'Essentials'
    },
    {
      id: 'bakery-fresh',
      title: 'Bakery Fresh',
      shortDesc: 'Artisan breads and pastries baked fresh every morning.',
      longDesc: 'Wake up to the aroma of freshly baked goods. Our partner bakeries start before dawn to bring you crusty sourdough, soft brioche, and delicate pastries. Every item is baked on the day of delivery — never frozen, never stale.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
      features: ['Baked same day', 'Sourdough specialists', 'Gluten-free options', 'Custom orders', 'Local bakeries', 'Preservative-free'],
      category: 'Specialty'
    },
    {
      id: 'beverages',
      title: 'Beverages & Drinks',
      shortDesc: 'Refreshing juices, smoothies, and premium beverages.',
      longDesc: 'From cold-pressed juices to artisan coffee beans, our beverage selection caters to every palate. We partner with local roasters and juice bars to bring you drinks that are both delicious and nutritious.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
      img: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=600&q=80',
      features: ['Cold-pressed juices', 'Artisan coffee', 'Kombucha on tap', 'Protein shakes', 'Zero-sugar options', 'Local brands'],
      category: 'Lifestyle'
    },
    {
      id: 'snacks-pantry',
      title: 'Snacks & Pantry',
      shortDesc: 'Healthy snacks and pantry staples for everyday cooking.',
      longDesc: 'Stock your pantry with the best organic and wholesome products. From crunchy granola to premium olive oil, our snacks and pantry section has everything you need for nutritious meals and satisfying snacking.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
      img: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&q=80',
      features: ['Organic certified', 'Bulk discounts', 'Gluten-free range', 'Imported specialties', 'Baby food', 'Vegan options'],
      category: 'Essentials'
    },
    {
      id: 'meal-kits',
      title: 'Meal Kit Delivery',
      shortDesc: 'Pre-portioned ingredients with chef-designed recipes.',
      longDesc: 'Short on time but love cooking? Our Meal Kits deliver pre-measured, fresh ingredients along with step-by-step recipe cards designed by professional chefs. Feed a family of four in under 30 minutes.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
      img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      features: ['30-min recipes', 'Pre-portioned', 'Chef-designed', 'Family-friendly', 'Dietary filters', 'Weekly rotations'],
      category: 'Premium'
    }
  ];

  const BLOG_POSTS = [
    {
      id: 'fresh-produce-guide',
      title: 'The Ultimate Guide to Fresh Produce Seasonality',
      excerpt: 'Learn which fruits and vegetables are in season each month for the best flavor and prices.',
      category: 'Lifestyle',
      author: 'Sarah Mitchell',
      date: '2026-07-15',
      readTime: '5 min',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
      content: `<p>Understanding seasonality is the key to getting the freshest, most flavorful produce at the best prices. When fruits and vegetables are in season, they're harvested at peak ripeness, which means better taste and more nutrients.</p>
      <h2>Spring (March – May)</h2>
      <p>Spring brings tender greens, asparagus, peas, strawberries, and artichokes. This is the time to enjoy light, fresh salads and the first berries of the year.</p>
      <h2>Summer (June – August)</h2>
      <p>Summer is peak season for tomatoes, corn, peaches, watermelon, zucchini, and berries. The warm weather means an abundance of colorful, juicy produce perfect for grilling and fresh eating.</p>
      <h2>Fall (September – November)</h2>
      <p>Autumn harvest includes apples, pears, squash, sweet potatoes, Brussels sprouts, and cranberries. These heartier ingredients are perfect for roasting and comfort dishes.</p>
      <h2>Winter (December – February)</h2>
      <p>Winter produce features citrus fruits, root vegetables, cabbage, and kale. Citrus is at its absolute peak, with blood oranges, grapefruits, and mandarins offering bright flavors in the cold months.</p>
      <h2>Shop Seasonal with FreshMart</h2>
      <p>At FreshMart, we source directly from local farms so you always get what's freshest. Our seasonal highlights rotate weekly — check our app for this week's picks!</p>`
    },
    {
      id: 'healthy-breakfast',
      title: '10 Healthy Breakfast Ideas Using FreshMart Products',
      excerpt: 'Start your morning right with these quick, nutritious breakfast recipes.',
      category: 'Recipes',
      author: 'Chef Marcus',
      date: '2026-07-12',
      readTime: '7 min',
      img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80',
      content: `<p>Mornings can be hectic, but that's no reason to skip a nutritious breakfast. Here are ten quick recipes using ingredients you can order from FreshMart.</p>
      <h2>1. Avocado Toast with Poached Eggs</h2>
      <p>Toast sourdough bread, top with mashed organic avocado, a perfectly poached egg, and a sprinkle of everything bagel seasoning.</p>
      <h2>2. Berry Overnight Oats</h2>
      <p>Combine rolled oats, Greek yogurt, chia seeds, and wild blueberries. Refrigerate overnight and top with honey in the morning.</p>
      <h2>3. Green Smoothie Bowl</h2>
      <p>Blend organic spinach, banana, almond milk, and a scoop of protein powder. Top with granola, sliced strawberries, and coconut flakes.</p>
      <h2>4. Fresh Fruit Parfait</h2>
      <p>Layer Greek yogurt with fresh berries, honey, and crunchy granola for a protein-packed start to your day.</p>
      <h2>5. Veggie Egg Muffins</h2>
      <p>Whisk eggs with diced tomatoes, spinach, and cheese. Pour into muffin tins and bake for a grab-and-go breakfast that lasts all week.</p>`
    },
    {
      id: 'organic-benefits',
      title: 'Why Going Organic Is Worth It: Benefits Explained',
      excerpt: 'A deep dive into the health, environmental, and taste benefits of organic food.',
      category: 'Health',
      author: 'Dr. Lisa Chen',
      date: '2026-07-08',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?w=600&q=80',
      content: `<p>The organic food movement has grown significantly over the past decade, and for good reason. Here's why choosing organic makes a difference for your health and the environment.</p>
      <h2>Health Benefits</h2>
      <p>Organic foods are grown without synthetic pesticides, herbicides, or fertilizers. Studies show they can have higher levels of antioxidants and omega-3 fatty acids. By choosing organic, you reduce your exposure to potentially harmful chemicals.</p>
      <h2>Environmental Impact</h2>
      <p>Organic farming practices support soil health, biodiversity, and water quality. No synthetic chemicals means less pollution in our waterways and healthier ecosystems.</p>
      <h2>Taste Difference</h2>
      <p>Many people report that organic produce simply tastes better. Without artificial growth accelerators, fruits and vegetables grow at their natural pace, developing fuller, more complex flavors.</p>
      <h2>Supporting Local Farms</h2>
      <p>When you buy organic from FreshMart, you're supporting local farmers who are committed to sustainable practices. Our network includes over 80 certified organic farms within 100 miles.</p>`
    },
    {
      id: 'meal-prep-tips',
      title: 'Meal Prep Sunday: Save Time and Eat Well All Week',
      excerpt: 'Master the art of meal prepping with our step-by-step guide and shopping list.',
      category: 'Recipes',
      author: 'Chef Marcus',
      date: '2026-07-05',
      readTime: '8 min',
      img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
      content: `<p>Meal prepping is one of the best strategies for eating healthy on a busy schedule. With just 2-3 hours on Sunday, you can prepare all your meals for the week.</p>
      <h2>Step 1: Plan Your Meals</h2>
      <p>Choose 3-4 recipes that use overlapping ingredients to minimize waste. A good rule: one grain, one protein, two vegetables per meal.</p>
      <h2>Step 2: Shop Smart</h2>
      <p>Order everything from FreshMart in one go. Our bulk discounts make meal prep even more affordable.</p>
      <h2>Step 3: Batch Cook</h2>
      <p>Cook grains first (rice, quinoa), then proteins (chicken, tofu, beans), then roast vegetables. This sequence keeps your kitchen efficient.</p>
      <h2>Step 4: Store Properly</h2>
      <p>Use glass containers for better freshness. Most prepped meals last 4-5 days in the fridge. Freeze anything you won't eat by Thursday.</p>`
    },
    {
      id: 'sustainable-living',
      title: 'Sustainable Grocery Shopping: A Complete Guide',
      excerpt: 'How to reduce your carbon footprint one grocery trip at a time.',
      category: 'Lifestyle',
      author: 'Sarah Mitchell',
      date: '2026-07-01',
      readTime: '6 min',
      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
      content: `<p>Every grocery choice you make has an environmental impact. Here's how to shop smarter and reduce your footprint.</p>
      <h2>Choose Local</h2>
      <p>Local food travels fewer miles to reach your plate. At FreshMart, all our partner farms are within 100 miles, dramatically reducing transportation emissions.</p>
      <h2>Reduce Food Waste</h2>
      <p>Plan meals, buy only what you need, and use our portion guides to avoid over-purchasing. Our meal kits are pre-portioned to eliminate waste entirely.</p>
      <h2>Sustainable Packaging</h2>
      <p>FreshMart uses 100% recyclable and compostable packaging. We've eliminated single-use plastics from our supply chain entirely.</p>
      <h2>Support Regenerative Agriculture</h2>
      <p>Many of our partner farms practice regenerative agriculture, which actively restores soil health and sequesters carbon. Your purchase supports this vital work.</p>`
    },
    {
      id: 'kids-lunchbox',
      title: 'Fun and Nutritious Lunchbox Ideas for Kids',
      excerpt: 'Make school lunches exciting with these creative, healthy ideas.',
      category: 'Recipes',
      author: 'Chef Marcus',
      date: '2026-06-28',
      readTime: '5 min',
      img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
      content: `<p>Packing school lunches doesn't have to be a chore. Here are creative ideas that kids actually love.</p>
      <h2>Bento Box Style</h2>
      <p>Use divided containers and fill each section with a different food group: whole grain crackers, sliced cheese, cherry tomatoes, cucumber sticks, and fruit.</p>
      <h2>DIY Wraps</h2>
      <p>Send a tortilla, deli turkey, lettuce, and cheese in a container. Kids love assembling their own wraps at lunch.</p>
      <h2>Smoothie Packs</h2>
      <p>Freeze pre-portioned smoothie ingredients in bags. Kids just add milk or yogurt and blend for a fresh, healthy drink.</p>
      <h2>Fruit Kabobs</h2>
      <p>Slice strawberries, grapes, and melon onto wooden skewers. They're fun to eat and visually appealing.</p>`
    }
  ];

  const PRICING_PLANS = [
    {
      id: 'basic',
      name: 'Basic',
      price: 0,
      period: 'forever',
      description: 'Perfect for occasional shoppers who want fresh groceries without commitment.',
      features: [
        { text: 'Standard delivery (2-3 hours)', included: true },
        { text: 'Access to all products', included: true },
        { text: 'Weekly newsletter with deals', included: true },
        { text: 'Free delivery over $40', included: true },
        { text: 'Priority delivery', included: false },
        { text: 'Exclusive member discounts', included: false },
        { text: 'Free meal kits monthly', included: false },
        { text: 'Dedicated account manager', included: false }
      ],
      popular: false,
      cta: 'Get Started Free'
    },
    {
      id: 'pro',
      name: 'FreshMart Pro',
      price: 9.99,
      period: 'month',
      description: 'For regular shoppers who want faster delivery and exclusive savings.',
      features: [
        { text: 'Priority delivery (under 1 hour)', included: true },
        { text: 'Access to all products', included: true },
        { text: 'Weekly newsletter with deals', included: true },
        { text: 'Free delivery on all orders', included: true },
        { text: '10% off every order', included: true },
        { text: 'Exclusive member discounts', included: true },
        { text: 'Free meal kits monthly', included: false },
        { text: 'Dedicated account manager', included: false }
      ],
      popular: true,
      cta: 'Start Pro Trial'
    },
    {
      id: 'family',
      name: 'Family',
      price: 19.99,
      period: 'month',
      description: 'Complete coverage for families who want the best value and premium perks.',
      features: [
        { text: 'Priority delivery (under 1 hour)', included: true },
        { text: 'Access to all products', included: true },
        { text: 'Weekly newsletter with deals', included: true },
        { text: 'Free delivery on all orders', included: true },
        { text: '15% off every order', included: true },
        { text: 'Exclusive member discounts', included: true },
        { text: '2 free meal kits monthly', included: true },
        { text: 'Dedicated account manager', included: true }
      ],
      popular: false,
      cta: 'Start Family Plan'
    }
  ];

  const FAQS = [
    {
      q: 'How does FreshMart delivery work?',
      a: 'Simply browse our store, add items to your cart, and check out. Our delivery partners pick up your order from local farms and deliver it fresh to your door. Standard delivery takes 2-3 hours; Pro and Family members get priority delivery in under 1 hour.'
    },
    {
      q: 'What areas does FreshMart serve?',
      a: 'We currently serve the greater metropolitan area and surrounding communities within 50 miles of our distribution center. Enter your zip code at checkout to see if we deliver to your address.'
    },
    {
      q: 'How fresh is the produce?',
      a: 'Our produce is typically harvested the same day it\'s delivered to you. We partner with farms within 100 miles, so the journey from farm to your table is as short as possible.'
    },
    {
      q: 'Can I return items I\'m not satisfied with?',
      a: 'Absolutely. We offer a 30-day return window for all products. If you\'re not happy with the quality of any item, contact us for a full refund or replacement — no questions asked.'
    },
    {
      q: 'Do you offer organic options?',
      a: 'Yes! We have a dedicated organic section with fruits, vegetables, dairy, and pantry staples. Many of our partner farms are certified organic, and we clearly label all organic products.'
    },
    {
      q: 'How does the FreshMart Pro membership work?',
      a: 'FreshMart Pro ($9.99/month) gives you priority delivery in under 1 hour, free delivery on all orders, and 10% off every purchase. You can cancel anytime from your account settings.'
    },
    {
      q: 'Are your delivery bags eco-friendly?',
      a: 'Yes, we use 100% recyclable and compostable packaging. We\'ve eliminated single-use plastics from our entire supply chain.'
    },
    {
      q: 'Can I schedule deliveries in advance?',
      a: 'Yes! You can schedule deliveries up to 7 days in advance. Choose your preferred time slot during checkout and we\'ll make sure your order arrives right on time.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit and debit cards, Apple Pay, Google Pay, and PayPal. Pro and Family members can also set up recurring billing for convenience.'
    },
    {
      q: 'Do you have a mobile app?',
      a: 'Our mobile app is available for iOS and Android. It features one-tap reordering, real-time delivery tracking, exclusive app-only deals, and push notifications for flash sales.'
    }
  ];

  const TEAM_MEMBERS = [
    { name: 'Elena Rodriguez', role: 'Founder & CEO', img: fixImgPath('assets/img/buyer1.jpg'), bio: 'Former food scientist with a passion for sustainable agriculture. Elena founded FreshMart to make farm-fresh food accessible to everyone.' },
    { name: 'David Park', role: 'Head of Operations', img: fixImgPath('assets/img/buyer5.jpg'), bio: 'Logistics expert who ensures every delivery reaches you on time and in perfect condition.' },
    { name: 'Aisha Johnson', role: 'Head of Marketing', img: fixImgPath('assets/img/buyer3.jpg'), bio: 'Creative strategist who connects FreshMart with communities that value fresh, local food.' },
    { name: 'Elena Rossi', role: 'Head Chef Partner', img: fixImgPath('assets/img/buyer4.jpg'), bio: 'Award-winning chef who designs our meal kits and curates recipe collections for our customers.' }
  ];

  const TESTIMONIALS = [
    { name: 'Sarah Mitchell', role: 'Member since 2023', img: fixImgPath('assets/img/buyer1.jpg'), rating: 5, text: 'The produce is always incredibly fresh — better than any supermarket I\'ve been to. Delivery is fast and the drivers are friendly.' },
    { name: 'James Carter', role: 'Pro Member', img: fixImgPath('assets/img/buyer2.jpg'), rating: 5, text: 'Switched from a big chain and never looked back. The weekly deals are actually good, and the app makes reordering effortless.' },
    { name: 'Priya Raman', role: 'Member since 2024', img: fixImgPath('assets/img/buyer3.jpg'), rating: 5, text: 'I love knowing exactly where my food comes from. FreshMart\'s transparency about their local farms is what made me a loyal customer.' },
    { name: 'Tara Krish', role: 'Family Plan Member', img: fixImgPath('assets/img/buyer4.jpg'), rating: 5, text: 'The Family plan is incredible value. Free meal kits, priority delivery, and my kids love the variety. Worth every penny.' },
    { name: 'Nina Kowalski', role: 'Member since 2025', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80', rating: 4, text: 'Great selection of organic products. The quality is consistently high and the customer support team is very responsive.' },
    { name: 'Ahmed Hassan', role: 'Pro Member', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', rating: 5, text: 'The meal kits have transformed our weeknight dinners. Pre-portioned ingredients, easy recipes, and restaurant-quality results every time.' }
  ];

  return { PRODUCTS, SERVICES, BLOG_POSTS, PRICING_PLANS, FAQS, TEAM_MEMBERS, TESTIMONIALS, fixImgPath };
})();
