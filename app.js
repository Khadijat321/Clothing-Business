const products = [
    {
        id: 1,
        name: "Top",
        category: "men",
        price: 1,
        originalPrice: 120.00,
        image: "WhatsApp Image 2026-06-13 at 10.41.17 AM.jpeg",
        rating: 4.8,
        reviews: 124,
        badge: "new",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#1a1a2e", "#ffffff", "#d4a574", "#495057"],
        description: "Classic Top and tailored fit. Perfect for both casual and formal occasions."
    },
    {
        id: 2,
        name: "Top",
        category: "UniSex",
        price: 79.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 10.41.18 AM.jpeg",
        rating: 4.6,
        reviews: 89,
        badge: "new",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#d4a574", "#1a1a2e", "#868e96"],
        description: "Versatile Top. Features a modern tapered chest and comfortable fit for all-day wear."
    },
    {
        id: 3,
        name: "Armless Top",
        category: "women",
        price: 3000,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 11.08.50 AM.jpeg",
        rating: 4.9,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A beautiful floral print summer dress with a flowing silhouette. Made from lightweight, breathable fabric perfect for warm days."
    },
    {
        id: 4,
        name: "Hand Bag",
        category: "accessories",
        price: 149.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 10.47.22 AM.jpeg",
        rating: 4.7,
        reviews: 78,
        badge: "new",
        sizes: ["One Size"],
        colors: ["#1a1a2e", "#d4a574", "#868e96"],
        description: "Genuine portable Hand bag with adjustable strap and multiple compartments. Elegant design that complements any outfit."
    },
    {
        id: 5,
        name: "OFCL Top",
        category: "men",
        price: 299.99,
        originalPrice: 399.99,
        image: "WhatsApp Image 2026-06-13 at 10.41.41 AM.jpeg",
        rating: 4.8,
        reviews: 56,
        badge: "new",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1a1a2e", "#495057", "#d4a574"],
        description: "Premium top blend overcoat. Features notched lapels, and a full lining for warmth."
    },
    {
        id: 6,
        name: "Trouser",
        category: "women",
        price: 119.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 7.40.58 AM.jpeg",
        rating: 4.5,
        reviews: 92,
        badge: "new",
        sizes: ["XS", "S", "M", "L"],
        colors: ["#ffffff", "#e94560", "#1a1a2e"],
        description: "Luxurious Trouser with a relaxed fit and elegant drape. Perfect for the office."
    },
    {
        id: 7,
        name: "Crop Top",
        category: "women",
        price: 99.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 7.41.09 AM.jpeg",
        rating: 4.7,
        reviews: 143,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#495057", "#1a1a2e"],
        description: "Classic crop top with a modern fit. Features adjustable waist tabs."
    },
    {
        id: 8,
        name: "Hair Clip",
        category: "accessories",
        price: 89.99,
        originalPrice: 119.99,
        image: "WhatsApp Image 2026-06-13 at 7.58.31 AM.jpeg",
        rating: 4.9,
        reviews: 201,
        badge: "new",
        sizes: ["One Size"],
        colors: ["#d4a574", "#1a1a2e", "#e94560", "#495057"],
        description: "Matches your dressing for anykind of outing."
    },
    {
        id: 9,
        name: "Casa Blanca Cotton Top",
        category: "men",
        price: 59.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 10.41.38 AM.jpeg",
        rating: 4.4,
        reviews: 167,
        badge: "new",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#28a745", "#1a1a2e", "#ffffff", "#e94560"],
        description: "Classic casa blanca top in premium pique cotton. Features a ribbed collar and cuffs."
    },
    {
        id: 10,
        name: "Ribbed long-sleeve crewneck top",
        category: "women",
        price: 79.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 7.47.24 AM.jpeg",
        rating: 4.6,
        reviews: 88,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#1a1a2e", "#d4a574", "#e94560"],
        description: "Elegant maxi skirt with a flowing A-line silhouette. Features an elastic waistband for comfort and side pockets."
    },
    {
        id: 11,
        name: "Hand Bag",
        category: "accessories",
        price: 49.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 8.10.26 AM.jpeg",
        rating: 4.5,
        reviews: 134,
        badge: "new",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#d4a574", "#1a1a2e"],
        description: "Genuine leather bag with a classic zip. Durable construction that ages beautifully over time."
    },
    {
        id: 12,
        name: "Amiri Top",
        category: "men",
        price: 189.99,
        originalPrice: 249.99,
        image: "WhatsApp Image 2026-06-13 at 10.41.45 AM.jpeg",
        rating: 4.7,
        reviews: 45,
        badge: "new",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#d4a574", "#ffffff", "#495057"],
        description: "Well designed top."
    },
    {
        id: 13,
        name: "Gown",
        category: "women",
        price: 129.99,
        originalPrice: 169.99,
        image: "WhatsApp Image 2026-06-13 at 7.40.42 AM.jpeg",
        rating: 4.3,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A beautiful gown with a flowing silhouette. Made from lightweight, breathable fabric perfect for warm days."
    },
        {
        id: 14,
        name: "Rigges",
        category: "Perfumes",
        price: 129.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-12 at 2.18.03 PM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A perfume that brings a cool attractive smell."
    },
          {
        id: 15,
        name: "Wrist watch",
        category: "accessories",
        price: 129.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-12 at 2.18.42 PM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A perfume that brings a cool attractive smell."
    },
    {
        id: 16,
        name: "Hair Band",
        category: "accessories",
        price: 129.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-12 at 2.18.06 PM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "Good for packing of hair."
    },
      {
        id: 17,
        name: "Couples Wrist band",
        category: "accessories",
        price: 129.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-12 at 2.18.21 PM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "Best for couples."
    },
     {
        id: 14,
        name: "KALY",
        category: "Perfumes",
        price: 129.99,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 7.41.44 AM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A perfume that brings a cool attractive smell."
    }
];

// ===== NIGERIA CONFIG =====
const CURRENCY = '₦';
const CURRENCY_CODE = 'NGN';

// YOUR NIGERIAN BANK DETAILS - CHANGE THESE TO YOUR REAL DETAILS
const YOUR_BANK_DETAILS = {
    accountName: 'KHADIJAT ABISOLA YUSUF',           // <-- CHANGE THIS
    accountNumber: '9021724271',               // <-- CHANGE THIS
    bankName: 'Opay',         // <-- CHANGE THIS
    bankCode: '011'                            // <-- CHANGE THIS
};

// Paystack Public Key (Test mode - get yours from dashboard.paystack.com)
const PAYSTACK_PUBLIC_KEY = 'pk_test_3ad444dd921603aa1cb01d9f3f76c26648f595c5';  // <-- CHANGE THIS when ready

// Flutterwave Public Key (Alternative - get from dashboard.flutterwave.com)
const FLUTTERWAVE_PUBLIC_KEY = 'FLWPUBK_TEST-84031f42d0ab80e042386f47820ad16b-X';  // <-- CHANGE THIS when ready

// Backend URL
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : 'https://your-backend-url.com/api';  // <-- CHANGE THIS

// Your WhatsApp number for order notifications (format: 2348012345678)
const YOUR_WHATSAPP = '2349021724271';  // <-- CHANGE THIS to your real WhatsApp

// Your email where you want to receive messages
const YOUR_EMAIL = 'Khadijatyusuf554@gmail.com';  // <-- CHANGE THIS

// ===== State =====
let cart = JSON.parse(localStorage.getItem('luxethreads_cart')) || [];
let currentCategory = 'all';
let selectedProduct = null;
let selectedSize = null;
let selectedColor = null;
let selectedQuantity = 1;

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const productsGrid = document.getElementById('productsGrid');
const newArrivalsGrid = document.getElementById('newArrivalsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const continueShopping = document.getElementById('continueShopping');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const chatToggle = document.getElementById('chatToggle');
const chatBox = document.getElementById('chatBox');
const chatMinimize = document.getElementById('chatMinimize');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');
const chatBadge = document.getElementById('chatBadge');
const scrollTop = document.getElementById('scrollTop');
const toastContainer = document.getElementById('toastContainer');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderNewArrivals();
    updateCartUI();
    setupEventListeners();
    setupScrollEffects();
    initChat();
});

// ===== Format Naira =====
function formatNaira(amount) {
    return CURRENCY + amount.toLocaleString('en-NG');
}

// ===== Render Products =====
function renderProducts(filter = 'all', searchTerm = '') {
    let filtered = products;
    
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    productsGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    productsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn')) {
                const id = parseInt(card.dataset.id);
                openProductModal(id);
            }
        });
    });
    
    productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            quickAddToCart(id);
        });
    });
}

function renderNewArrivals() {
    const newProducts = products.filter(p => p.badge === 'new').slice(0, 4);
    newArrivalsGrid.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    
    newArrivalsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn')) {
                const id = parseInt(card.dataset.id);
                openProductModal(id);
            }
        });
    });
    
    newArrivalsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            quickAddToCart(id);
        });
    });
}

function createProductCard(product) {
    const badgeHTML = product.badge ? 
        `<span class="product-badge ${product.badge}">${product.badge}</span>` : '';
    
    const priceHTML = product.originalPrice ? 
        `<span class="price-current">${formatNaira(product.price)}</span>
         <span class="price-original">${formatNaira(product.originalPrice)}</span>` :
        `<span class="price-current">${formatNaira(product.price)}</span>`;
    
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="fas fa-star${i < Math.floor(product.rating) ? '' : '-half-alt'}"></i>`
    ).join('');
    
    return `
        <div class="product-card fade-in" data-id="${product.id}">
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn add-to-cart-btn" data-id="${product.id}" title="Add to Cart">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                    <button class="action-btn" title="Quick View" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${priceHTML}</div>
                <div class="product-rating">
                    ${stars}
                    <span>(${product.reviews})</span>
                </div>
            </div>
        </div>
    `;
}

// ===== Product Modal =====
function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;
    
    selectedSize = selectedProduct.sizes[0];
    selectedColor = selectedProduct.colors[0];
    selectedQuantity = 1;
    
    const badgeHTML = selectedProduct.badge ? 
        `<span class="product-badge ${selectedProduct.badge}">${selectedProduct.badge}</span>` : '';
    
    const priceHTML = selectedProduct.originalPrice ? 
        `<span class="price-current">${formatNaira(selectedProduct.price)}</span>
         <span class="price-original">${formatNaira(selectedProduct.originalPrice)}</span>` :
        `<span class="price-current">${formatNaira(selectedProduct.price)}</span>`;
    
    const sizeOptions = selectedProduct.sizes.map(size => 
        `<div class="size-option ${size === selectedSize ? 'selected' : ''}" data-size="${size}">${size}</div>`
    ).join('');
    
    const colorOptions = selectedProduct.colors.map(color => 
        `<div class="color-option ${color === selectedColor ? 'selected' : ''}" 
             style="background: ${color}" data-color="${color}"></div>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-image">
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
        </div>
        <div class="modal-details">
            ${badgeHTML}
            <span class="product-category">${selectedProduct.category}</span>
            <h2>${selectedProduct.name}</h2>
            <div class="product-price">${priceHTML}</div>
            <div class="product-rating">
                ${Array(5).fill(0).map((_, i) => 
                    `<i class="fas fa-star${i < Math.floor(selectedProduct.rating) ? '' : '-half-alt'}"></i>`
                ).join('')}
                <span>(${selectedProduct.reviews} reviews)</span>
            </div>
            <p class="modal-description">${selectedProduct.description}</p>
            
            <div class="size-selector">
                <label>Size</label>
                <div class="size-options">${sizeOptions}</div>
            </div>
            
            <div class="color-selector">
                <label>Color</label>
                <div class="color-options">${colorOptions}</div>
            </div>
            
            <div class="quantity-selector">
                <label>Quantity</label>
                <div class="qty-control">
                    <button class="qty-decrease">-</button>
                    <input type="number" value="1" min="1" max="10" id="modalQty">
                    <button class="qty-increase">+</button>
                </div>
            </div>
            
            <button class="btn btn-primary btn-full" id="modalAddToCart">
                <i class="fas fa-shopping-bag"></i> Add to Cart - ${formatNaira(selectedProduct.price)}
            </button>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setupModalEventListeners();
}

function setupModalEventListeners() {
    const sizeOptions = modalBody.querySelectorAll('.size-option');
    sizeOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            sizeOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedSize = opt.dataset.size;
        });
    });
    
    const colorOptions = modalBody.querySelectorAll('.color-option');
    colorOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedColor = opt.dataset.color;
        });
    });
    
    const qtyInput = document.getElementById('modalQty');
    const decreaseBtn = modalBody.querySelector('.qty-decrease');
    const increaseBtn = modalBody.querySelector('.qty-increase');
    
    decreaseBtn.addEventListener('click', () => {
        if (selectedQuantity > 1) {
            selectedQuantity--;
            qtyInput.value = selectedQuantity;
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        if (selectedQuantity < 10) {
            selectedQuantity++;
            qtyInput.value = selectedQuantity;
        }
    });
    
    qtyInput.addEventListener('change', () => {
        selectedQuantity = Math.max(1, Math.min(10, parseInt(qtyInput.value) || 1));
        qtyInput.value = selectedQuantity;
    });
    
    document.getElementById('modalAddToCart').addEventListener('click', () => {
        addToCart(selectedProduct, selectedSize, selectedColor, selectedQuantity);
        closeProductModal();
    });
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart(product, product.sizes[0], product.colors[0], 1);
    }
}

// ===== Cart Functions =====
function addToCart(product, size, color, quantity) {
    const existingItem = cart.find(item => 
        item.id === product.id && item.size === size && item.color === color
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            color: color,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
    
    cartBtn.classList.add('bounce');
    setTimeout(() => cartBtn.classList.remove('bounce'), 500);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart', 'warning');
}

function updateQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('luxethreads_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = formatNaira(totalPrice);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some items to get started!</p>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-variant">Size: ${item.size} | Color: <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${item.color};vertical-align:middle;"></span></p>
                    <div class="cart-item-price">${formatNaira(item.price * item.quantity)}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${index})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        cartFooter.style.display = 'block';
    }
}

function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== NIGERIA CHECKOUT =====
function openCheckout() {
    closeCartSidebar();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.075; // 7.5% VAT in Nigeria
    const total = subtotal + tax;
    
    document.getElementById('orderSummaryItems').innerHTML = cart.map(item => `
        <div class="summary-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-info">
                <h4>${item.name}</h4>
                <p>Size: ${item.size} | Qty: ${item.quantity}</p>
            </div>
            <span class="summary-item-price">${formatNaira(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    document.getElementById('summarySubtotal').textContent = formatNaira(subtotal);
    document.getElementById('summaryTax').textContent = formatNaira(tax);
    document.getElementById('summaryTotal').textContent = formatNaira(total);
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== NIGERIAN PAYMENT METHODS =====
async function placeOrder(e) {
    e.preventDefault();
    
    const email = document.getElementById('checkoutEmail').value;
    const phone = document.getElementById('checkoutPhone').value;
    const firstName = document.getElementById('shipFirstName').value;
    const lastName = document.getElementById('shipLastName').value;
    const address = document.getElementById('shipAddress').value;
    const city = document.getElementById('shipCity').value;
    const state = document.getElementById('shipState').value;
    const zip = document.getElementById('shipZip').value;
    const country = document.getElementById('shipCountry').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (!email || !firstName || !lastName || !address || !city || !state || !zip || !phone) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.075;
    const total = subtotal + tax;
    
    const orderData = {
        orderId: 'ORD-' + Date.now().toString(36).toUpperCase(),
        customer: { email, firstName, lastName, phone },
        shipping: { address, city, state, zip, country },
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        total: total,
        paymentMethod: paymentMethod,
        status: 'pending',
        date: new Date().toISOString()
    };
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const originalText = placeOrderBtn.innerHTML;
    placeOrderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    placeOrderBtn.disabled = true;
    
    if (paymentMethod === 'paystack') {
        await handlePaystackPayment(orderData, total, email, phone);
    } else if (paymentMethod === 'transfer') {
        await handleBankTransfer(orderData, total);
    } else if (paymentMethod === 'cod') {
        await handleCashOnDelivery(orderData);
    }
    
    placeOrderBtn.innerHTML = originalText;
    placeOrderBtn.disabled = false;
}

// ===== PAYSTACK PAYMENT =====
async function handlePaystackPayment(orderData, amount, email, phone) {
    // Check if Paystack is configured
    if (PAYSTACK_PUBLIC_KEY.includes('YOUR_PAYSTACK_KEY')) {
        showToast('Paystack not configured yet. Showing Bank Transfer option instead.', 'warning');
        // Automatically show bank transfer instead
        showBankTransferModal(orderData, amount);
        return;
    }
    
    // Show loading
    showToast('Loading payment... Please wait.', 'success');
    
    try {
        // Load Paystack script if not already loaded
        if (!window.PaystackPop) {
            await loadScript('https://js.paystack.co/v1/inline.js');
        }
        
        const handler = PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: email,
            amount: amount * 100, // Paystack uses kobo (1 Naira = 100 kobo)
            currency: 'NGN',
            ref: orderData.orderId,
            metadata: {
                custom_fields: [
                    {
                        display_name: "Order ID",
                        variable_name: "order_id",
                        value: orderData.orderId
                    },
                    {
                        display_name: "Phone Number",
                        variable_name: "phone",
                        value: phone
                    }
                ]
            },
            callback: function(response) {
                // Payment successful
                orderData.status = 'paid';
                orderData.paymentReference = response.reference;
                finalizeOrder(orderData);
                showToast('Payment successful! Thank you for your order.', 'success');
            },
            onClose: function() {
                showToast('Payment window closed. Your order was not completed.', 'warning');
            }
        });
        
        handler.openIframe();
        
    } catch (err) {
        console.error('Paystack error:', err);
        showToast('Could not load Paystack. Please use Bank Transfer instead.', 'error');
        showBankTransferModal(orderData, amount);
    }
}


async function handleFlutterwavePayment(orderData, amount, email, phone, name) {
    if (FLUTTERWAVE_PUBLIC_KEY.includes('YOUR_FLUTTERWAVE_KEY')) {
        showToast('Flutterwave not configured. Using Bank Transfer instead.', 'warning');
        showBankTransferModal(orderData, amount);
        return;
    }
    
    if (!window.FlutterwaveCheckout) {
        await loadScript('https://checkout.flutterwave.com/v3.js');
    }
    
    FlutterwaveCheckout({
        public_key: FLUTTERWAVE_PUBLIC_KEY,
        tx_ref: orderData.orderId,
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,ussd,banktransfer',
        customer: {
            email: email,
            phone_number: phone,
            name: name
        },
        customizations: {
            title: 'Luxe Threads',
            description: 'Payment for order ' + orderData.orderId,
            logo: 'https://your-logo-url.com/logo.png'
        },
        callback: function(data) {
            orderData.status = 'paid';
            orderData.paymentReference = data.transaction_id;
            finalizeOrder(orderData);
            showToast('Payment successful! Order confirmed.', 'success');
        },
        onclose: function() {
            showToast('Payment cancelled.', 'warning');
        }
    });
}


// ===== BANK TRANSFER =====
async function handleBankTransfer(orderData, amount) {
    showBankTransferModal(orderData, amount);
}

function showBankTransferModal(orderData, amount) {
    const transferModal = document.createElement('div');
    transferModal.className = 'modal-overlay active';
    transferModal.id = 'transferModal';
    transferModal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <button class="modal-close" onclick="closeTransferModal()"><i class="fas fa-times"></i></button>
            <div style="padding: 40px; text-align: center;">
                <div style="margin-bottom: 24px;">
                    <i class="fas fa-university" style="color: var(--primary); font-size: 4rem;"></i>
                </div>
                <h2 style="font-family: var(--font-heading); margin-bottom: 16px;">Bank Transfer Payment</h2>
                <p style="color: var(--gray-500); margin-bottom: 24px;">Please transfer <strong>${formatNaira(amount)}</strong> to the account below:</p>
                
                <div style="background: var(--gray-50); padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: left; border: 2px solid var(--gray-200);">
                    <div style="margin-bottom: 16px;">
                        <span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Bank Name</span>
                        <p style="font-weight: 600; font-size: 1.1rem; margin: 0;">${YOUR_BANK_DETAILS.bankName}</p>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Account Number</span>
                        <p style="font-weight: 600; font-size: 1.3rem; margin: 0; color: var(--accent);">${YOUR_BANK_DETAILS.accountNumber}</p>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Account Name</span>
                        <p style="font-weight: 600; font-size: 1.1rem; margin: 0;">${YOUR_BANK_DETAILS.accountName}</p>
                    </div>
                    <div>
                        <span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Amount to Pay</span>
                        <p style="font-weight: 700; font-size: 1.3rem; margin: 0; color: var(--accent);">${formatNaira(amount)}</p>
                    </div>
                </div>
                
                <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: left;">
                    <p style="margin: 0; font-size: 0.9rem; color: #856404; line-height: 1.6;">
                        <i class="fas fa-info-circle"></i> <strong>Important:</strong> Use your Order ID <strong>${orderData.orderId}</strong> as the payment description/reference. After payment, send proof via WhatsApp to <strong>0${YOUR_WHATSAPP.slice(3)}</strong> or email us.
                    </p>
                </div>
                
                <button class="btn btn-primary btn-full" onclick="confirmBankTransfer('${orderData.orderId}')" style="margin-bottom: 12px;">
                    <i class="fas fa-check"></i> I Have Made the Transfer
                </button>
                <button class="btn btn-outline btn-full" onclick="closeTransferModal()">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(transferModal);
    document.body.style.overflow = 'hidden';
}

function closeTransferModal() {
    const modal = document.getElementById('transferModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function confirmBankTransfer(orderId) {
    closeTransferModal();
    closeCheckoutModal();
    
    const orders = JSON.parse(localStorage.getItem('luxethreads_orders') || '[]');
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
        order.status = 'pending_payment';
        order.paymentMethod = 'bank_transfer';
        localStorage.setItem('luxethreads_orders', JSON.stringify(orders));
    }
    
    document.getElementById('orderNumber').textContent = orderId;
    document.getElementById('confirmEmail').textContent = order?.customer?.email || '';
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    showToast('Order placed! Please complete bank transfer and send proof.', 'success');
    sendWhatsAppNotification(order);
    
    cart = [];
    saveCart();
    updateCartUI();
}

// ===== CASH ON DELIVERY =====
async function handleCashOnDelivery(orderData) {
    orderData.status = 'pending';
    orderData.paymentMethod = 'cod';
    finalizeOrder(orderData);
    showToast('Order placed! You will pay on delivery.', 'success');
    sendWhatsAppNotification(orderData);
}

// ===== FINALIZE ORDER =====
function finalizeOrder(orderData) {
    saveOrderLocally(orderData);
    sendOrderToBackend(orderData);
    
    document.getElementById('orderNumber').textContent = orderData.orderId;
    document.getElementById('confirmEmail').textContent = orderData.customer.email;
    
    closeCheckoutModal();
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    sendWhatsAppNotification(orderData);
    
    cart = [];
    saveCart();
    updateCartUI();
}

function saveOrderLocally(orderData) {
    const orders = JSON.parse(localStorage.getItem('luxethreads_orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('luxethreads_orders', JSON.stringify(orders));
}

async function sendOrderToBackend(orderData) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log('Order saved to backend:', result);
        }
    } catch (err) {
        console.log('Backend not available, order saved locally');
    }
}

// ===== WHATSAPP NOTIFICATION =====
function sendWhatsAppNotification(orderData) {
    const itemsList = orderData.items.map(i => 
        `• ${i.name} (${i.size}) x${i.quantity} = ${formatNaira(i.price * i.quantity)}`
    ).join('%0A');
    
    const message = `🔔 *NEW ORDER!*%0A%0A` +
        `*Order ID:* ${orderData.orderId}%0A` +
        `*Customer:* ${orderData.customer.firstName} ${orderData.customer.lastName}%0A` +
        `*Phone:* ${orderData.customer.phone}%0A` +
        `*Email:* ${orderData.customer.email}%0A%0A` +
        `*Items:*%0A${itemsList}%0A%0A` +
        `*Total:* ${formatNaira(orderData.total)}%0A` +
        `*Payment:* ${orderData.paymentMethod.toUpperCase()}%0A` +
        `*Address:* ${orderData.shipping.address}, ${orderData.shipping.city}, ${orderData.shipping.state}`;
    
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CONTACT FORM =====
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    const formData = { name, email, subject, message, date: new Date().toISOString() };
    
    saveContactLocally(formData);
    
    const whatsappMsg = `📩 *NEW MESSAGE!*%0A%0A` +
        `*From:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Subject:* ${subject}%0A` +
        `*Message:* ${message}`;
    
    window.open(`https://wa.me/${YOUR_WHATSAPP}?text=${whatsappMsg}`, '_blank');
    
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showToast('Message sent! We will contact you shortly.', 'success');
        }
    } catch (err) {
        showToast('Message saved! We will contact you via WhatsApp or email.', 'success');
    }
    
    contactForm.reset();
}

function saveContactLocally(data) {
    const contacts = JSON.parse(localStorage.getItem('luxethreads_contacts') || '[]');
    contacts.push(data);
    localStorage.setItem('luxethreads_contacts', JSON.stringify(contacts));
}

// ===== NEWSLETTER =====
async function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    try {
        const response = await fetch(`${API_BASE_URL}/newsletter`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        if (response.ok) {
            showToast('Thank you for subscribing!', 'success');
        } else {
            const data = await response.json();
            showToast(data.message || 'Already subscribed!', 'warning');
        }
    } catch (err) {
        const subs = JSON.parse(localStorage.getItem('luxethreads_subscribers') || '[]');
        if (!subs.find(s => s.email === email)) {
            subs.push({ email, date: new Date().toISOString() });
            localStorage.setItem('luxethreads_subscribers', JSON.stringify(subs));
            showToast('Thank you for subscribing!', 'success');
        } else {
            showToast('You are already subscribed!', 'warning');
        }
    }
    
    newsletterForm.reset();
}

// ===== SMART CHAT BOT =====
function initChat() {
    window.chatSessionId = 'chat-' + Date.now();
    window.chatHistory = [];
}

function toggleChat() {
    chatBox.classList.toggle('active');
    chatBadge.style.display = 'none';
    if (chatBox.classList.contains('active')) {
        chatInput.focus();
    }
}

function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    addChatMessage(message, 'sent');
    window.chatHistory.push({ role: 'user', text: message });
    chatInput.value = '';
    
    const response = generateChatResponse(message);
    
    setTimeout(() => {
        addChatMessage(response.text, 'received');
        window.chatHistory.push({ role: 'bot', text: response.text });
        
        if (response.action) {
            handleChatAction(response.action, response.data);
        }
    }, 800 + Math.random() * 500);
}

function generateChatResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    
    if (/\b(hi|hello|hey|good morning|good afternoon|good evening|hola|yo|sup)\b/.test(msg)) {
        return {
            text: "Hello! Welcome to Luxe Threads Nigeria! I'm Sarah, your personal shopping assistant. How can I help you today? You can ask me about our products, prices in Naira, delivery within Nigeria, or how to pay!"
        };
    }
    
    if (/\b(product|item|cloth|clothes|shirt|dress|pants|jacket|bag|scarf|belt|blazer|polo|skirt|chino|oxford|wool|silk|denim|leather|cashmere|linen)\b/.test(msg)) {
        if (/\bprice|cost|how much|expensive|cheap|naira|₦\b/.test(msg)) {
            return {
                text: "Our prices are in Nigerian Naira (₦) and range from ₦25,000 to ₦150,000. We currently have items on sale! For example: Oxford Shirt ₦45,000 (was ₦60,000), Summer Dress ₦65,000 (was ₦85,000), Overcoat ₦150,000 (was ₦200,000). Would you like to see our sale items?"
            };
        }
        if (/\bnew|latest|arrival|newest\b/.test(msg)) {
            return {
                text: "Our newest arrivals include the Leather Crossbody Bag (₦75,000), Denim Jacket (₦50,000), and Maxi Skirt (₦40,000). Would you like me to show you these?",
                action: 'scrollTo',
                data: 'new-arrivals'
            };
        }
        if (/\bsale|discount|deal|offer|promo|reduce|price drop\b/.test(msg)) {
            return {
                text: "Great news! We have several items on sale right now:\n• Classic Oxford Shirt: ₦45,000 (was ₦60,000)\n• Floral Summer Dress: ₦65,000 (was ₦85,000)\n• Wool Blend Overcoat: ₦150,000 (was ₦200,000)\n• Cashmere Scarf: ₦45,000 (was ₦60,000)\n• Linen Blazer: ₦95,000 (was ₦125,000)\nWant me to show you these?",
                action: 'scrollTo',
                data: 'shop'
            };
        }
        if (/\bmen|male|guys|him|his|boyfriend|husband|dad|father\b/.test(msg)) {
            return {
                text: "For men, we have:\n• Classic Oxford Shirt - ₦45,000\n• Slim Fit Chinos - ₦40,000\n• Wool Blend Overcoat - ₦150,000\n• Polo Shirt - ₦30,000\n• Linen Blazer - ₦95,000\nWhat type are you looking for?",
                action: 'filterCategory',
                data: 'men'
            };
        }
        if (/\bwomen|female|her|she|wife|girlfriend|mom|mother|lady\b/.test(msg)) {
            return {
                text: "For women, we have:\n• Floral Summer Dress - ₦65,000\n• Silk Blouse - ₦60,000\n• Denim Jacket - ₦50,000\n• Maxi Skirt - ₦40,000\nWhat style are you interested in?",
                action: 'filterCategory',
                data: 'women'
            };
        }
        if (/\baccessories|bag|scarf|belt|hat|jewelry|watch\b/.test(msg)) {
            return {
                text: "Our accessories include:\n• Leather Crossbody Bag - ₦75,000\n• Cashmere Scarf - ₦45,000\n• Leather Belt - ₦25,000\nThese make great gifts too!",
                action: 'filterCategory',
                data: 'accessories'
            };
        }
        return {
            text: "We have a wide range of clothing for both men and women, plus accessories. All prices are in Nigerian Naira (₦). You can browse by clicking 'Shop' or tell me what you're looking for!",
            action: 'scrollTo',
            data: 'shop'
        };
    }
    
    if (/\b(size|sizing|fit|measurement|small|medium|large|xl|xxs|xs)\b/.test(msg)) {
        return {
            text: "Our sizes range from XS to XXL for most items. Each product has a size guide. Generally, our items run true to size. If you're between sizes, size up for relaxed fit or down for slim fit. Nigerian sizes are standard international sizes. Need help with a specific item?"
        };
    }
    
    if (/\b(shipping|delivery|ship|send|arrive|when|how long|track|package|courier|logistics|waybill|transport|nationwide|lagos|abuja|portharcourt|kano|ibadan)\b/.test(msg)) {
        if (/\bfree|cost|charge|fee|price|how much\b/.test(msg)) {
            return {
                text: "Delivery within Lagos is ₦2,000. Delivery to other states in Nigeria is ₦3,500 - ₦5,000 depending on location. FREE delivery on orders over ₦100,000! We use trusted couriers like GIG Logistics, DHL, and FedEx for nationwide delivery."
            };
        }
        if (/\btrack|where|status|location\b/.test(msg)) {
            return {
                text: "Once your order ships, you'll receive a tracking number via WhatsApp or email. You can track with our courier partners. You can also message us here with your order number and we'll check for you!"
            };
        }
        if (/\blagos|abuja|portharcourt|kano|ibadan|state|city|location|area\b/.test(msg)) {
            return {
                text: "We deliver to ALL states in Nigeria! Lagos deliveries take 1-2 days. Abuja, Port Harcourt, Kano, Ibadan take 2-4 days. Other states take 3-7 days. We use GIG Logistics, DHL, and other reliable couriers. Where are you located?"
            };
        }
        return {
            text: "We deliver nationwide across all 36 states in Nigeria! Lagos: 1-2 days, Major cities: 2-4 days, Other states: 3-7 days. Delivery cost: Lagos ₦2,000, Other states ₦3,500-₦5,000. FREE delivery on orders over ₦100,000!"
        };
    }
    
    if (/\b(return|refund|exchange|send back|money back|wrong|damage|broken|defect)\b/.test(msg)) {
        return {
            text: "We have a 14-day return policy for Nigerian customers! If you're not satisfied, return the item within 14 days for a full refund or exchange. Items must be unworn with tags. Return shipping is on us for defective items. For other returns, customer covers return shipping. Want to start a return?"
        };
    }
    
    if (/\b(pay|payment|naira|₦|card|credit|debit|transfer|bank|gtbank|zenith|uba|first bank|access|cash|pay on delivery|pod|cod|flutterwave|paystack)\b/.test(msg)) {
        if (/\bpaystack|flutterwave|online|card|debit|credit|atm\b/.test(msg)) {
            return {
                text: "Yes! We accept online payments via Paystack and Flutterwave. You can pay with your Nigerian debit card (Verve, Mastercard, Visa), bank transfer, or USSD. It's 100% secure and you get instant confirmation. Would you like to place an order?"
            };
        }
        if (/\btransfer|bank transfer|gtbank|zenith|uba|firstbank|access|wema|fcmb\b/.test(msg)) {
            return {
                text: "Yes! You can pay via bank transfer to our Nigerian account. During checkout, select 'Bank Transfer' and you'll see our account details. After transfer, send proof via WhatsApp and we'll confirm your order immediately!"
            };
        }
        if (/\bcash on delivery|cod|pay on delivery|pay when|pod|pay when it comes|delivery payment\b/.test(msg)) {
            return {
                text: "Yes! We offer Cash on Delivery (COD) for Lagos and major cities! You pay the delivery agent when your order arrives. A small COD fee of ₦500 applies. Select 'Cash on Delivery' at checkout. Note: COD is not available for all locations."
            };
        }
        return {
            text: "We accept multiple payment methods for Nigerian customers:\n💳 Card Payment (via Paystack/Flutterwave)\n🏦 Bank Transfer (to our Nigerian account)\n💵 Cash on Delivery (Lagos & major cities)\n📱 USSD Payment\nAll in Nigerian Naira (₦). Which would you prefer?"
        };
    }
    
    if (/\b(order|placed|bought|purchased|confirmation|receipt|invoice)\b/.test(msg)) {
        if (/\bstatus|where|track|check|find\b/.test(msg)) {
            return {
                text: "To check your order status, provide your Order ID (starts with ORD-). We'll also send you updates via WhatsApp. If you can't find your order number, give me the email or phone number you used and I'll look it up!"
            };
        }
        if (/\bcancel|change|modify|edit|update\b/.test(msg)) {
            return {
                text: "Need to cancel or change an order? Contact us ASAP via WhatsApp or the contact form. We can usually make changes if the order hasn't been shipped yet. Lagos orders ship within 24 hours, so act fast!"
            };
        }
        return {
            text: "Place an order by adding items to your cart and clicking 'Proceed to Checkout.' After payment, you'll get an order confirmation via WhatsApp and email. Need help finding something?"
        };
    }
    
    if (/\b(contact|reach|call|phone|email|message|talk|speak|human|manager|supervisor|whatsapp)\b/.test(msg)) {
        return {
            text: `You can reach us in several ways:\n📱 WhatsApp: 0${YOUR_WHATSAPP.slice(3)} (Fastest response!)\n📧 Email: hello@luxethreads.ng\n📞 Phone: +234 ${YOUR_WHATSAPP.slice(3)}\n📍 Lagos, Nigeria\n💬 Or fill out the contact form on our website!`,
            action: 'scrollTo',
            data: 'contact'
        };
    }
    
    if (/\b(gift|present|birthday|anniversary|christmas|holiday|surprise|wrap|gift box)\b/.test(msg)) {
        return {
            text: "We offer gift wrapping for ₦2,000 per item and can include a personalized message card! Our Leather Crossbody Bags (₦75,000) and Cashmere Scarves (₦45,000) are very popular gifts. We can also deliver directly to the recipient's address anywhere in Nigeria!"
        };
    }
    
    if (/\b(material|fabric|quality|cotton|wool|silk|leather|linen|organic|sustainable|eco|original|authentic|genuine)\b/.test(msg)) {
        return {
            text: "We use only premium, authentic materials: 100% cotton for shirts, genuine leather for bags and belts, pure silk for blouses, high-quality wool blends for coats. All items are sourced from reputable manufacturers. We stand by our quality - if it's not genuine, you get a full refund!"
        };
    }
    
    if (/\b(color|colour|black|white|blue|red|green|brown|grey|gray|navy|beige|pink|yellow|purple|orange)\b/.test(msg)) {
        return {
            text: "Our products come in various colors! Most items have 2-4 color options. You can see available colors on each product page. Popular colors include black, navy, beige, white, and burgundy. Is there a specific color you want?"
        };
    }
    
    if (/\b(help|assist|support|problem|issue|question|confused|lost|stuck|dont know|not sure)\b/.test(msg)) {
        return {
            text: "I'm here to help! I can assist you with:\n🛍️ Finding products & prices in Naira\n📏 Sizing questions\n🚚 Delivery across Nigeria\n💳 Payment options (Card, Transfer, COD)\n📦 Order tracking\n🔄 Returns & exchanges\n\nWhat do you need help with?"
        };
    }
    
    if (/\b(thank|thanks|appreciate|grateful|cheers|god bless|na gode)\b/.test(msg)) {
        return {
            text: "You're very welcome! 😊 I'm happy I could help. If you need anything else, don't hesitate to ask. Thank you for shopping with Luxe Threads Nigeria!"
        };
    }
    
    if (/\b(bye|goodbye|see you|later|night|take care|farewell|safe)\b/.test(msg)) {
        return {
            text: "Goodbye! Thank you for chatting with us. Feel free to come back anytime. Have a wonderful day and stay stylish! 👋"
        };
    }
    
    if (/\b(about|who|company|brand|story|history|founded|owner|team|nigeria|nigerian|local)\b/.test(msg)) {
        return {
            text: "Luxe Threads is a Nigerian fashion brand based in Lagos. We curate premium clothing that combines timeless elegance with modern African style. We believe in quality, affordability, and supporting local fashion. We deliver to all 36 states in Nigeria!",
            action: 'scrollTo',
            data: 'about'
        };
    }
    
    if (/\b(hour|time|open|close|when|available|working|business day|working hours)\b/.test(msg)) {
        return {
            text: "Our online store is open 24/7! You can place orders anytime. Our customer service team is available Monday to Saturday, 9am to 6pm WAT. Orders placed before 2pm on weekdays are processed same day. Weekend orders ship Monday."
        };
    }
    
    if (/\b(location|where|based|store|shop|visit|showroom|office|address|lagos|nigeria|state)\b/.test(msg)) {
        return {
            text: "We're based in Lagos, Nigeria. While we primarily operate online for now, we plan to open a physical store soon. We deliver to ALL states in Nigeria - Lagos, Abuja, Port Harcourt, Kano, Ibadan, and everywhere else! Where are you located?"
        };
    }
    
    return {
        text: "I'm not sure I understood that completely. I can help you with:\n• Browsing our products (prices in ₦)\n• Delivery across Nigeria\n• Payment options (Card, Transfer, COD)\n• Sizing help\n• Order tracking\n• Returns & exchanges\n\nWhat would you like to know?"
    };
}

function handleChatAction(action, data) {
    if (action === 'scrollTo') {
        const element = document.getElementById(data);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    if (action === 'filterCategory') {
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === data) {
                btn.classList.add('active');
            }
        });
        currentCategory = data;
        renderProducts(data);
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    }
}

function addChatMessage(text, type) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p><span class="message-time">${time}</span>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Toast Notifications =====
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Scroll Effects =====
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (window.scrollY > 500) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
        
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (window.scrollY >= top && window.scrollY < top + height) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===== Utility: Load External Script =====
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ===== Event Listeners =====
function setupEventListeners() {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        renderProducts(currentCategory);
    });
    
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            renderProducts(currentCategory);
        }
    });
    
    searchInput.addEventListener('input', (e) => {
        renderProducts(currentCategory, e.target.value);
    });
    
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', openCheckout);
    
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });
    
    checkoutClose.addEventListener('click', closeCheckoutModal);
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeCheckoutModal();
    });
    
    continueShopping.addEventListener('click', closeSuccessModal);
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) closeSuccessModal();
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
    
    contactForm.addEventListener('submit', handleContactSubmit);
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    checkoutForm.addEventListener('submit', placeOrder);
    
    chatToggle.addEventListener('click', toggleChat);
    chatMinimize.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const cardFields = document.getElementById('cardFields');
            if (radio.value === 'card') {
                cardFields.style.display = 'block';
            } else {
                cardFields.style.display = 'none';
            }
        });
    });
    
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }
    
    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
        cardExpiry.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
}

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.classList.remove('active');
        closeCartSidebar();
        closeProductModal();
        closeCheckoutModal();
        closeSuccessModal();
        const transferModal = document.getElementById('transferModal');
        if (transferModal) transferModal.remove();
    }
});
