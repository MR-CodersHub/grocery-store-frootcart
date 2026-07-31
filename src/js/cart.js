/* ─────────────────────────────────────────────
   FreshMart — Cart Module
   localStorage-based cart with full CRUD
   ───────────────────────────────────────────── */
const FreshMartCart = (() => {
  'use strict';

  const CART_KEY = 'fm-cart';
  const ORDERS_KEY = 'fm-orders';
  const listeners = [];

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    notifyListeners();
  }

  function addItem(productId, qty) {
    qty = qty || 1;
    const cart = getCart();
    const existing = cart.find(function (item) { return String(item.id) === String(productId); });
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty: qty });
    }
    saveCart(cart);
  }

  function removeItem(productId) {
    var cart = getCart().filter(function (item) { return String(item.id) !== String(productId); });
    saveCart(cart);
  }

  function updateQty(productId, qty) {
    if (qty < 1) {
      removeItem(productId);
      return;
    }
    var cart = getCart();
    var item = cart.find(function (item) { return String(item.id) === String(productId); });
    if (item) {
      item.qty = qty;
      saveCart(cart);
    }
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    notifyListeners();
  }

  function getCount() {
    return getCart().reduce(function (sum, item) { return sum + item.qty; }, 0);
  }

  function getSubtotal() {
    var products = typeof FreshMartData !== 'undefined' ? FreshMartData.PRODUCTS : [];
    return getCart().reduce(function (sum, item) {
      var product = products.find(function (p) { return String(p.id) === String(item.id); });
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  }

  function getDeliveryFee(subtotal) {
    return subtotal >= 40 ? 0 : 4.99;
  }

  function getTax(subtotal) {
    return Math.round(subtotal * 0.08 * 100) / 100;
  }

  // Same-day delivery limit, etc
  function getTotal() {
    var subtotal = getSubtotal();
    return Math.round((subtotal + getDeliveryFee(subtotal) + getTax(subtotal)) * 100) / 100;
  }

  function getCartItems() {
    var products = typeof FreshMartData !== 'undefined' ? FreshMartData.PRODUCTS : [];
    var cart = getCart();
    return cart.map(function (item) {
      var product = products.find(function (p) { return String(p.id) === String(item.id); });
      if (!product) return null;
      return Object.assign({}, product, { qty: item.qty, lineTotal: Math.round(product.price * item.qty * 100) / 100 });
    }).filter(Boolean);
  }

  function generateOrderId() {
    return 'FM-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
  }

  function placeOrder(address) {
    var items = getCartItems();
    if (items.length === 0) return null;

    var order = {
      id: generateOrderId(),
      items: items,
      subtotal: getSubtotal(),
      deliveryFee: getDeliveryFee(getSubtotal()),
      tax: getTax(getSubtotal()),
      total: getTotal(),
      address: address || '123 Main St, Freshville, CA 90210',
      status: 'confirmed',
      timeline: [
        { step: 'Order Placed', time: new Date().toISOString(), done: true },
        { step: 'Being Prepared', time: null, done: false },
        { step: 'Out for Delivery', time: null, done: false },
        { step: 'Delivered', time: null, done: false }
      ],
      createdAt: new Date().toISOString()
    };

    var orders = getOrders();
    orders.unshift(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    clearCart();
    return order;
  }

  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function getOrderById(orderId) {
    return getOrders().find(function (o) { return o.id === orderId; });
  }

  function simulateProgress(orderId) {
    var orders = getOrders();
    var order = orders.find(function (o) { return o.id === orderId; });
    if (!order) return;

    var nextIndex = order.timeline.findIndex(function (t) { return !t.done; });
    if (nextIndex >= 0) {
      order.timeline[nextIndex].done = true;
      order.timeline[nextIndex].time = new Date().toISOString();
      if (nextIndex < order.timeline.length - 1) {
        order.status = order.timeline[nextIndex].step.toLowerCase().replace(/\s+/g, '-');
      } else {
        order.status = 'delivered';
      }
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    }
  }

  function onUpdate(fn) {
    listeners.push(fn);
  }

  function notifyListeners() {
    var count = getCount();
    listeners.forEach(function (fn) { fn(count); });
  }

  return {
    getCart: getCart,
    addItem: addItem,
    removeItem: removeItem,
    updateQty: updateQty,
    clearCart: clearCart,
    getCount: getCount,
    getSubtotal: getSubtotal,
    getDeliveryFee: getDeliveryFee,
    getTax: getTax,
    getTotal: getTotal,
    getCartItems: getCartItems,
    placeOrder: placeOrder,
    getOrders: getOrders,
    getOrderById: getOrderById,
    simulateProgress: simulateProgress,
    onUpdate: onUpdate,
    generateOrderId: generateOrderId
  };
})();
