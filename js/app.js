/* ══════════════════════════════════════════════
   JAYA'S ORGANIC — script.js
   All data, cart, wishlist, UI interactions
══════════════════════════════════════════════ */

// ─── DATA ────────────────────────────────────

const products = [
  {
    id: 1, name: "Pirandai Thokku", tamil: "பிரண்டை தொக்கு",
    category: "Thokku", price: 180, mrp: 220, weight: "200g",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=400&fit=crop",
    rating: 4.9, reviews: 128, badge: "Bestseller", badgeType: "saffron",
    description: "Traditional cissus thokku made from fresh pirandai stems, sesame oil & country spices. Known for its bone-strengthening properties.",
    benefits: ["Bone health", "Joint relief", "Digestive aid", "Rich in calcium"],
    stock: 45, organic: true
  },
  {
    id: 2, name: "Vallarai Podi", tamil: "வல்லாரை பொடி",
    category: "Podi", price: 150, mrp: 180, weight: "100g",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&h=400&fit=crop",
    rating: 4.8, reviews: 96, badge: "Memory Booster", badgeType: "green",
    description: "Brain-boosting herb podi from fresh vallarai (Brahmi) leaves. A memory enhancer used in Siddha medicine for centuries.",
    benefits: ["Memory enhancement", "Brain function", "Stress relief", "Antioxidant"],
    stock: 30, organic: true
  },
  {
    id: 3, name: "Idli Podi (Gunpowder)", tamil: "இட்லி பொடி",
    category: "Podi", price: 120, mrp: 150, weight: "250g",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop",
    rating: 4.9, reviews: 214, badge: "Family Favorite", badgeType: "saffron",
    description: "The authentic milagai podi recipe from our grandmother's kitchen. Perfect with hot idlis, dosas and sesame oil.",
    benefits: ["Protein-rich", "Digestive spices", "Traditional recipe", "No preservatives"],
    stock: 80, organic: true
  },
  {
    id: 4, name: "Moringa Leaf Podi", tamil: "முருங்கை கீரை பொடி",
    category: "Podi", price: 160, mrp: 200, weight: "100g",
    image: "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?w=500&h=400&fit=crop",
    rating: 4.7, reviews: 87, badge: "Superfood", badgeType: "green",
    description: "Nutrient-dense drumstick leaf podi packed with iron, vitamins and minerals. The ultimate superfood podi.",
    benefits: ["Iron-rich", "Immunity boost", "Bone strength", "Anti-inflammatory"],
    stock: 25, organic: true
  },
  {
    id: 5, name: "Mango Avakkai Pickle", tamil: "மாவினகாய் ஆவக்காய்",
    category: "Pickle", price: 200, mrp: 250, weight: "300g",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&h=400&fit=crop",
    rating: 4.8, reviews: 156, badge: "Seasonal Special", badgeType: "chili",
    description: "Authentic Andhra-Tamil style raw mango pickle. Made during summer with fresh Banganapalli mangoes and cold-pressed sesame oil.",
    benefits: ["Probiotic", "Vitamin C", "Digestive", "Appetite enhancer"],
    stock: 60, organic: true
  },
  {
    id: 6, name: "Neem Flower Thokku", tamil: "வேப்பம் பூ தொக்கு",
    category: "Thokku", price: 220, mrp: 280, weight: "150g",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop",
    rating: 4.6, reviews: 43, badge: "Rare Find", badgeType: "green",
    description: "Rare neem flower thokku made during Tamil New Year season. Bitter, tangy and deeply medicinal — an ancient detox food.",
    benefits: ["Detox", "Blood purifier", "Anti-diabetic", "Seasonal immunity"],
    stock: 12, organic: true
  }
];

const recipes = [
  { id: 1, name: "Sambar", tamil: "சாம்பார்", category: "Gravy", time: "40 min", difficulty: "Easy", serves: 4, image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop", description: "The soul of Tamil cuisine — a lentil-based vegetable stew with tamarind and freshly ground spices.", tags: ["Vegan", "Protein-rich", "Traditional"], rating: 4.9 },
  { id: 2, name: "Chettinad Chicken Curry", tamil: "செட்டிநாடு கோழி குழம்பு", category: "Non-Veg", time: "60 min", difficulty: "Medium", serves: 4, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop", description: "Bold, aromatic Chettinad spice paste slow-cooked with country chicken. Iconic Tamil Nadu flavors.", tags: ["Spicy", "Traditional", "Non-Veg"], rating: 4.8 },
  { id: 3, name: "Pongal", tamil: "பொங்கல்", category: "Breakfast", time: "30 min", difficulty: "Easy", serves: 3, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop", description: "Creamy khara pongal with ghee, black pepper and cumin — the quintessential Tamil breakfast.", tags: ["Vegan", "Comfort food", "Festival"], rating: 4.9 },
  { id: 4, name: "Rasam", tamil: "ரசம்", category: "Soup", time: "20 min", difficulty: "Easy", serves: 4, image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&h=400&fit=crop", description: "Tangy, spiced tamarind pepper water that doubles as immune-boosting medicine and comfort soup.", tags: ["Vegan", "Immunity", "Quick"], rating: 4.7 },
  { id: 5, name: "Kootu", tamil: "கூட்டு", category: "Gravy", time: "35 min", difficulty: "Easy", serves: 4, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop", description: "Mixed vegetable and lentil dry curry with freshly ground coconut and aromatic spices.", tags: ["Vegan", "Protein", "Side dish"], rating: 4.6 },
  { id: 6, name: "Adai Dosa", tamil: "அடை", category: "Breakfast", time: "25 min", difficulty: "Medium", serves: 4, image: "https://images.unsplash.com/photo-1630942683997-e21f9c218d30?w=600&h=400&fit=crop", description: "Thick lentil-rice crepe loaded with onion, red chili and coconut — high protein traditional breakfast.", tags: ["Vegan", "High-protein", "Traditional"], rating: 4.8 }
];

const reviewsData = [
  { id: 1, name: "Priya Sundaram", location: "T. Nagar, Chennai", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face", rating: 5, product: "Pirandai Thokku", text: "Absolutely authentic! My 80-year-old grandmother tasted it and said it tastes exactly like what she used to make. That's the highest compliment possible.", date: "March 2026", verified: true },
  { id: 2, name: "Karthik Ramaswamy", location: "Adyar, Chennai", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", rating: 5, product: "Idli Podi", text: "The gunpowder podi is life-changing. We've been ordering monthly for a year now. Every batch is consistent — that's rare for homemade products.", date: "February 2026", verified: true },
  { id: 3, name: "Lakshmi Venkatesh", location: "Velachery, Chennai", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", rating: 5, product: "Vallarai Podi", text: "My son's concentration has visibly improved after I started adding Vallarai Podi to his meals. Worth every rupee, and the packaging is beautiful.", date: "March 2026", verified: true },
  { id: 4, name: "Dinesh Kumar", location: "Porur, Chennai", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face", rating: 5, product: "Mango Avakkai", text: "Real avakkai — not the watered-down hotel versions. The oil is properly marinated. Ordered 3 jars and already need to reorder.", date: "January 2026", verified: true },
  { id: 5, name: "Meena Annamalai", location: "Anna Nagar, Chennai", avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face", rating: 5, product: "Moringa Podi", text: "As a nutritionist, I approve! The shade-drying preserves nutrients perfectly. I recommend this to all my clients seeking iron-rich supplements.", date: "February 2026", verified: true },
  { id: 6, name: "Suresh Babu", location: "Mylapore, Chennai", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", rating: 4, product: "Neem Flower Thokku", text: "Niche but brilliant. The bitter-sweet balance is perfect for Tamil New Year. Stock up early — they sell out fast!", date: "April 2026", verified: true }
];

const comboOffers = [
  { id: "combo1", name: "Podi Trio", description: "Any 3 Podis of your choice", originalPrice: 450, price: 360, savings: 90, items: 3, badge: "20% OFF", emoji: "🌶️" },
  { id: "combo2", name: "Pongal Gift Hamper", description: "5 premium products, gift-wrapped", originalPrice: 900, price: 750, savings: 150, items: 5, badge: "Festival Special", emoji: "🎁" },
  { id: "combo3", name: "Starter Kit", description: "Best intro to Jaya's Organic", originalPrice: 550, price: 420, savings: 130, items: 3, badge: "New Customer", emoji: "⭐" }
];

const deliveryPincodes = ["600001","600002","600004","600006","600010","600011","600017","600018","600019","600020","600024","600025","600028","600029","600033","600034","600040","600041","600042","600043","600044","600045","600091","600098","600126"];

// ─── STATE ──────────────────────────────────

let cart = [];        // { ...product, qty }
let wishlist = [];    // [id, ...]
let activeCategory = "All";

// ─── HELPERS ────────────────────────────────

function stars(n, size = 14) {
  return `<span style="color:var(--turmeric);font-size:${size}px;letter-spacing:2px">${'★'.repeat(Math.floor(n))}${'☆'.repeat(5 - Math.floor(n))}</span>`;
}

function pad(n) { return String(n).padStart(2, '0'); }

function showToast(msg) {
  const el = document.createElement('div');
  el.className = 'toast success';
  el.textContent = msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(() => { el.classList.add('fade-out'); setTimeout(() => el.remove(), 300); }, 2500);
}

function updateCartBadges() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
  });
}

function updateWishBadge() {
  const el = document.getElementById('wish-badge');
  if (el) {
    el.textContent = wishlist.length;
    el.classList.toggle('hidden', wishlist.length === 0);
  }
}

// ─── CART ────────────────────────────────────

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartBadges();
  renderCartItems();
  showToast(`🛒 ${product.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadges();
  renderCartItems();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) { removeFromCart(id); return; }
  updateCartBadges();
  renderCartItems();
}

function clearCart() {
  cart = [];
  updateCartBadges();
  renderCartItems();
}

function getCartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}
function getCartSavings() {
  return cart.reduce((s, i) => s + (i.mrp - i.price) * i.qty, 0);
}

function renderCartItems() {
  const body = document.getElementById('cart-body');
  const footer = document.getElementById('cart-footer');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-text">Your cart is empty</div>
        <div class="cart-empty-sub">Add some delicious products!</div>
      </div>`;
    footer.classList.add('hidden');
    return;
  }

  footer.classList.remove('hidden');
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-weight">${item.weight}</div>
        <div class="cart-item-bottom">
          <div class="cart-item-price">₹${item.price * item.qty}</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
          </div>
        </div>
      </div>
    </div>`).join('');

  document.getElementById('cart-total').textContent = `₹${getCartTotal()}`;
  const savings = getCartSavings();
  const saveEl = document.getElementById('cart-savings');
  if (savings > 0) {
    saveEl.textContent = `You save ₹${savings} on this order 🎉`;
    saveEl.style.display = 'block';
  } else {
    saveEl.style.display = 'none';
  }
}

// ─── WISHLIST ────────────────────────────────

function toggleWishlist(product) {
  const idx = wishlist.indexOf(product.id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(product.id);
    showToast(`❤️ ${product.name} added to wishlist!`);
  }
  updateWishBadge();
  // update heart buttons
  document.querySelectorAll(`[data-wish="${product.id}"]`).forEach(btn => {
    btn.textContent = wishlist.includes(product.id) ? '❤️' : '🤍';
  });
}

// ─── CART PANEL OPEN/CLOSE ───────────────────

function openCart() {
  renderCartItems();
  document.getElementById('cart-panel').classList.remove('hidden');
  document.getElementById('cart-overlay').classList.remove('hidden');
}
function closeCart() {
  document.getElementById('cart-panel').classList.add('hidden');
  document.getElementById('cart-overlay').classList.add('hidden');
}

// ─── PROFILE MODAL ───────────────────────────

function openProfile() {
  document.getElementById('profile-overlay').classList.remove('hidden');
}
function closeProfile() {
  document.getElementById('profile-overlay').classList.add('hidden');
}

// ─── NAVBAR SCROLL ───────────────────────────

window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── MOBILE MENU ────────────────────────────

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ─── RENDER RECIPES ─────────────────────────

function renderRecipes() {
  const grid = document.getElementById('recipes-grid');
  grid.innerHTML = recipes.map((r, i) => `
    <div class="card recipe-card animate-fade-up" style="animation-delay:${i * 0.1}s">
      <div class="recipe-img">
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <div class="recipe-img-overlay"></div>
        <div class="recipe-badge-pos">
          <span class="badge badge-saffron" style="font-size:11px">${r.category}</span>
        </div>
        <div class="recipe-time-pos">
          <div class="recipe-time-chip">⏱️ ${r.time} • Serves ${r.serves}</div>
        </div>
      </div>
      <div class="recipe-body">
        <div class="recipe-cat">${r.difficulty}</div>
        <div class="recipe-name">${r.name}</div>
        <div class="recipe-tamil">${r.tamil}</div>
        <div class="recipe-desc">${r.description}</div>
        <div class="recipe-tags">
          ${r.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');
}

// ─── RENDER PRODUCTS ────────────────────────

function renderProducts(category = "All") {
  const grid = document.getElementById('products-grid');
  const filtered = category === 'All' ? products : products.filter(p => p.category === category);
  grid.innerHTML = filtered.map((p, i) => {
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    const wished = wishlist.includes(p.id);
    return `
    <div class="flip-card animate-fade-up" style="animation-delay:${i * 0.1}s">
      <div class="flip-card-inner">
        <!-- FRONT -->
        <div class="flip-front">
          <div class="prod-img-wrap">
            <img src="${p.image}" alt="${p.name}" loading="lazy" />
            <div class="prod-img-overlay"></div>
            <div class="prod-badge-pos">
              <span class="badge badge-${p.badgeType}">${p.badge}</span>
            </div>
            ${discount > 0 ? `<div class="prod-discount">-${discount}%</div>` : ''}
            <button class="prod-wish-btn" data-wish="${p.id}" onclick="toggleWishlist(products.find(x=>x.id===${p.id}))">${wished ? '❤️' : '🤍'}</button>
            ${p.stock < 20 ? `<div class="prod-stock-low">Only ${p.stock} left!</div>` : ''}
          </div>
          <div class="prod-body">
            <div class="prod-cat">${p.category}</div>
            <div class="prod-name">${p.name}</div>
            <div class="prod-tamil">${p.tamil}</div>
            <div class="prod-rating-row">
              ${stars(p.rating)}
              <span class="prod-rating-count">(${p.reviews})</span>
            </div>
            <div class="prod-price-row">
              <span class="prod-price">₹${p.price}</span>
              <span class="prod-mrp">₹${p.mrp}</span>
              <span class="prod-save">Save ₹${p.mrp - p.price}</span>
            </div>
            <button class="btn-primary prod-add-btn" onclick="addToCart(products.find(x=>x.id===${p.id}))">
              🛒 Add to Cart
            </button>
          </div>
        </div>
        <!-- BACK -->
        <div class="flip-back">
          <div style="font-size:36px;margin-bottom:12px">🌿</div>
          <div class="back-title">${p.name}</div>
          <div class="back-desc">${p.description}</div>
          <div class="back-benefits-label">Key Benefits</div>
          <div class="back-benefits">
            ${p.benefits.map(b => `<span class="back-benefit-tag">✓ ${b}</span>`).join('')}
          </div>
          <div class="back-actions">
            <button class="back-add-btn" onclick="addToCart(products.find(x=>x.id===${p.id}))">Add to Cart</button>
            <a href="https://wa.me/919600572691?text=I want to order ${encodeURIComponent(p.name)}" target="_blank" class="back-wa-btn">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function setupCategoryFilters() {
  const filters = document.getElementById('cat-filters');
  const categories = ['All', 'Podi', 'Thokku', 'Pickle'];
  filters.innerHTML = categories.map(c => `
    <button class="cat-btn${c === activeCategory ? ' active' : ''}" onclick="setCategory('${c}')">${c}</button>
  `).join('');
}

function setCategory(cat) {
  activeCategory = cat;
  setupCategoryFilters();
  renderProducts(cat);
}

// ─── RENDER DEALS ────────────────────────────

function renderDeals() {
  const grid = document.getElementById('deals-grid');
  grid.innerHTML = comboOffers.map((c, i) => `
    <div class="deal-card animate-fade-up" style="animation-delay:${i * 0.15}s">
      <div class="deal-emoji">${c.emoji}</div>
      <div class="deal-badge">${c.badge}</div>
      <div class="deal-name">${c.name}</div>
      <div class="deal-desc">${c.description} • ${c.items} items</div>
      <div class="deal-price-row">
        <span class="deal-price">₹${c.price}</span>
        <span class="deal-mrp">₹${c.originalPrice}</span>
        <span class="deal-save">Save ₹${c.savings}</span>
      </div>
      <div class="deal-actions">
        <button class="deal-add-btn" onclick="showToast('${c.name} added! Save ₹${c.savings} 🎉')">🛒 Add Combo</button>
        <a href="https://wa.me/919600572691" target="_blank" class="deal-wa-btn">💬</a>
      </div>
    </div>`).join('');
}

// ─── COUNTDOWN TIMER ────────────────────────

let countH = 8, countM = 23, countS = 45;

function updateCountdown() {
  countS--;
  if (countS < 0) { countS = 59; countM--; }
  if (countM < 0) { countM = 59; countH--; }
  if (countH < 0) { countH = 8; countM = 59; countS = 59; }
    const h = document.getElementById('cd-h');
  const m = document.getElementById('cd-m');
  const s = document.getElementById('cd-s');
  if (h) h.textContent = pad(countH);
  if (m) m.textContent = pad(countM);
  if (s) s.textContent = pad(countS);
}

setInterval(updateCountdown, 1000);

// ─── RENDER REVIEWS ──────────────────────────

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  grid.innerHTML = reviewsData.map((r, i) => `
    <div class="card review-card animate-fade-up" style="animation-delay:${i * 0.1}s">
      <div class="review-header">
        <img class="review-avatar" src="${r.avatar}" alt="${r.name}" loading="lazy" />
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-location">📍 ${r.location}</div>
          <div class="review-product">Product: ${r.product}</div>
        </div>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <div class="review-text">"${r.text}"</div>
      <div class="review-footer">
        <span class="review-date">${r.date}</span>
        ${r.verified ? '<span class="verified-badge">✅ Verified</span>' : ''}
      </div>
    </div>`).join('');
}

// ─── PINCODE CHECKER ────────────────────────

function checkPincode() {
  const input = document.getElementById('pincode-input').value.trim();
  const result = document.getElementById('delivery-result');
  if (!input || input.length < 6) {
    result.className = 'delivery-result error';
    result.textContent = '⚠️ Enter a valid 6-digit PIN code.';
    result.style.display = 'block';
    return;
  }
  if (deliveryPincodes.includes(input)) {
    result.className = 'delivery-result success';
    result.textContent = '✅ We deliver to your area! Order now for same/next-day delivery.';
  } else {
    result.className = 'delivery-result warn';
    result.textContent = '📞 We may deliver to your area. Call us at +91 96005 72691 to confirm.';
  }
  result.style.display = 'block';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeCart(); closeProfile(); }
});

// ─── CONTACT FORM ────────────────────────────

function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const phone = document.getElementById('cf-phone').value;
  const msg = document.getElementById('cf-msg').value;
  const text = `Hi Jaya's Organic! I'm ${name} (${phone}). ${msg}`;
  window.open(`https://wa.me/919600572691?text=${encodeURIComponent(text)}`, '_blank');
  showToast('Opening WhatsApp... 💬');
  e.target.reset();
}

function handleNewsletter(e) {
  e.preventDefault();
  showToast("Subscribed! Welcome to Jaya's family 🌱");
  e.target.reset();
}

// ─── CHECKOUT ────────────────────────────────

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const lines = cart.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const text = `Hi! I'd like to order from Jaya's Organic:\n\n${lines}\n\nTotal: ₹${getCartTotal()}`;
  window.open(`https://wa.me/919600572691?text=${encodeURIComponent(text)}`, '_blank');
}

// ─── INIT ────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderRecipes();
  setupCategoryFilters();
  renderProducts();
  renderDeals();
  renderReviews();
  updateCartBadges();

  // Pincode enter key
  const pi = document.getElementById('pincode-input');
  if (pi) pi.addEventListener('keydown', e => { if (e.key === 'Enter') checkPincode(); });
  // Only allow digits in pincode
  if (pi) pi.addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6); });
});
