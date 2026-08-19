const products = [
    {
        id: 1,
        name: "Top",
        category: "men",
        price: 13000.00,
        originalPrice: null,
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
        price: 10000.00,
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
        price: 3000.00,
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
        price: 7500.00,
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
        price: 12000.00,
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
        price: 11000.00,
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
        price: 10000.00,
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
        price: 4000.00,
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
        price: 15000.00,
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
        price: 3000.00,
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
        price: 15000.00,
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
        price: 13000.00,
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
        price: 15000.00,
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
        price: 6000.00,
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
        price: 3500.00,
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
        price: 2000.00,
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
        price: 3500.00,
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
        price: 10000.00,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 7.41.44 AM.jpeg",
        rating: 5.0,
        reviews: 215,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A perfume that brings a cool attractive smell."
    },
    {
        id: 2,
        name: "Top Cloth",
        category: "UniSex",
        price: 15000.00,
        originalPrice: null,
        image: "WhatsApp Image 2026-06-13 at 10.57.43 AM.jpeg",
        rating: 4.6,
        reviews: 89,
        badge: "new",
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#d4a574", "#1a1a2e", "#868e96"],
        description: "Versatile Top. Features a modern tapered chest and comfortable fit for all-day wear."
    },
];

// ===== NIGERIA CONFIG =====
const CURRENCY = '₦';
const CURRENCY_CODE = 'NGN';
const YOUR_BANK_DETAILS = {
    accountName: 'KHADIJAT ABISOLA YUSUF',
    accountNumber: '9021724271',
    bankName: 'Opay',
    bankCode: '011'
};
const PAYSTACK_PUBLIC_KEY = 'pk_test_3ad444dd921603aa1cb01d9f3f76c26648f595c5';
const FLUTTERWAVE_PUBLIC_KEY = 'FLWPUBK_TEST-84031f42d0ab80e042386f47820ad16b-X';
const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'https://your-backend-url.com/api';
const AI_SERVICE_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://your-ai-service-url.com/api';
const YOUR_WHATSAPP = '2349021724271';
const YOUR_EMAIL = 'Khadijatyusuf554@gmail.com';

// ===== AUTH STATE =====
let currentUser = JSON.parse(localStorage.getItem('lady_t_user')) || null;
let authToken = localStorage.getItem('lady_t_token') || null;
let chatSessionId = localStorage.getItem('lady_t_chat_session') || null;

// ===== STATE =====
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

const authBtn = document.getElementById('authBtn');
const authMenu = document.getElementById('authMenu');
const authModal = document.getElementById('authModal');
const authModalClose = document.getElementById('authModalClose');
const authTabs = document.querySelectorAll('.auth-tab');
const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const loginMenuLink = document.getElementById('loginMenuLink');
const signupMenuLink = document.getElementById('signupMenuLink');
const profileLink = document.getElementById('profileLink');
const ordersLink = document.getElementById('ordersLink');
const logoutLink = document.getElementById('logoutLink');
const authMenuHeader = document.getElementById('authMenuHeader');
const authMenuLinks = document.getElementById('authMenuLinks');
const userMenuLinks = document.getElementById('userMenuLinks');

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderNewArrivals();
    updateCartUI();
    setupEventListeners();
    setupScrollEffects();
    initAuth();
    initChat();
});

// ===== AUTH FUNCTIONS =====
function initAuth() {
    updateAuthUI();
    if (authToken) fetchUserProfile();
}

function updateAuthUI() {
    if (currentUser) {
        authMenuHeader.innerHTML = `<i class="fas fa-user-circle"></i><span>${currentUser.firstName} ${currentUser.lastName}</span>`;
        authMenuLinks.classList.add('hidden');
        userMenuLinks.classList.remove('hidden');
    } else {
        authMenuHeader.innerHTML = `<i class="fas fa-user-circle"></i><span>Guest</span>`;
        authMenuLinks.classList.remove('hidden');
        userMenuLinks.classList.add('hidden');
    }
}

async function fetchUserProfile() {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                currentUser = result.data;
                localStorage.setItem('lady_t_user', JSON.stringify(currentUser));
                updateAuthUI();
            }
        } else {
            logout();
        }
    } catch (err) {
        console.log('Profile fetch failed:', err);
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const submitBtn = document.getElementById('loginSubmitBtn');
    submitBtn.innerHTML = '<span class="btn-spinner"></span> Signing in...';
    submitBtn.disabled = true;
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const result = await response.json();
        if (result.success) {
            authToken = result.data.token;
            currentUser = result.data.user;
            localStorage.setItem('lady_t_token', authToken);
            localStorage.setItem('lady_t_user', JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            showToast('Welcome back, ' + currentUser.firstName + '!', 'success');
            loginForm.reset();
        } else {
            showToast(result.message || 'Login failed', 'error');
        }
    } catch (err) {
        showToast('Network error. Please try again.', 'error');
    } finally {
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
        submitBtn.disabled = false;
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const submitBtn = document.getElementById('signupSubmitBtn');
    submitBtn.innerHTML = '<span class="btn-spinner"></span> Creating account...';
    submitBtn.disabled = true;
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName, lastName, email, phone, password })
        });
        const result = await response.json();
        if (result.success) {
            authToken = result.data.token;
            currentUser = result.data.user;
            localStorage.setItem('lady_t_token', authToken);
            localStorage.setItem('lady_t_user', JSON.stringify(currentUser));
            updateAuthUI();
            closeAuthModal();
            showToast('Account created! Welcome, ' + currentUser.firstName + '!', 'success');
            signupForm.reset();
        } else {
            showToast(result.message || 'Registration failed', 'error');
        }
    } catch (err) {
        showToast('Network error. Please try again.', 'error');
    } finally {
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
        submitBtn.disabled = false;
    }
}

function logout() {
    authToken = null;
    currentUser = null;
    localStorage.removeItem('lady_t_token');
    localStorage.removeItem('lady_t_user');
    updateAuthUI();
    showToast('You have been logged out.', 'success');
}

function openAuthModal(tab = 'login') {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab);
}

function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    authTabs.forEach(t => t.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
    if (tab === 'login') {
        loginPanel.classList.add('active');
        signupPanel.classList.remove('active');
    } else {
        loginPanel.classList.remove('active');
        signupPanel.classList.add('active');
    }
}

function toggleAuthMenu() {
    authMenu.classList.toggle('active');
}

function getAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (authToken) headers['Authorization'] = `Bearer ${authToken}`;
    return headers;
}

// ===== Format Naira =====
function formatNaira(amount) {
    return CURRENCY + amount.toLocaleString('en-NG');
}

// ===== Render Products =====
function renderProducts(filter = 'all', searchTerm = '') {
    let filtered = products;
    if (filter !== 'all') filtered = filtered.filter(p => p.category === filter);
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
                openProductModal(parseInt(card.dataset.id));
            }
        });
    });
    productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            quickAddToCart(parseInt(btn.dataset.id));
        });
    });
}

function renderNewArrivals() {
    const newProducts = products.filter(p => p.badge === 'new').slice(0, 4);
    newArrivalsGrid.innerHTML = newProducts.map(product => createProductCard(product)).join('');
    newArrivalsGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn')) {
                openProductModal(parseInt(card.dataset.id));
            }
        });
    });
    newArrivalsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            quickAddToCart(parseInt(btn.dataset.id));
        });
    });
}

function createProductCard(product) {
    const badgeHTML = product.badge ? `<span class="product-badge ${product.badge}">${product.badge}</span>` : '';
    const priceHTML = product.originalPrice ? 
        `<span class="price-current">${formatNaira(product.price)}</span><span class="price-original">${formatNaira(product.originalPrice)}</span>` :
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
                <div class="product-rating">${stars}<span>(${product.reviews})</span></div>
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
    const badgeHTML = selectedProduct.badge ? `<span class="product-badge ${selectedProduct.badge}">${selectedProduct.badge}</span>` : '';
    const priceHTML = selectedProduct.originalPrice ? 
        `<span class="price-current">${formatNaira(selectedProduct.price)}</span><span class="price-original">${formatNaira(selectedProduct.originalPrice)}</span>` :
        `<span class="price-current">${formatNaira(selectedProduct.price)}</span>`;
    const sizeOptions = selectedProduct.sizes.map(size => 
        `<div class="size-option ${size === selectedSize ? 'selected' : ''}" data-size="${size}">${size}</div>`
    ).join('');
    const colorOptions = selectedProduct.colors.map(color => 
        `<div class="color-option ${color === selectedColor ? 'selected' : ''}" style="background: ${color}" data-color="${color}"></div>`
    ).join('');
    modalBody.innerHTML = `
        <div class="modal-image"><img src="${selectedProduct.image}" alt="${selectedProduct.name}"></div>
        <div class="modal-details">
            ${badgeHTML}
            <span class="product-category">${selectedProduct.category}</span>
            <h2>${selectedProduct.name}</h2>
            <div class="product-price">${priceHTML}</div>
            <div class="product-rating">
                ${Array(5).fill(0).map((_, i) => `<i class="fas fa-star${i < Math.floor(selectedProduct.rating) ? '' : '-half-alt'}"></i>`).join('')}
                <span>(${selectedProduct.reviews} reviews)</span>
            </div>
            <p class="modal-description">${selectedProduct.description}</p>
            <div class="size-selector"><label>Size</label><div class="size-options">${sizeOptions}</div></div>
            <div class="color-selector"><label>Color</label><div class="color-options">${colorOptions}</div></div>
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
        if (selectedQuantity > 1) { selectedQuantity--; qtyInput.value = selectedQuantity; }
    });
    increaseBtn.addEventListener('click', () => {
        if (selectedQuantity < 10) { selectedQuantity++; qtyInput.value = selectedQuantity; }
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
    if (product) addToCart(product, product.sizes[0], product.colors[0], 1);
}

// ===== Cart Functions =====
function addToCart(product, size, color, quantity) {
    const existingItem = cart.find(item => item.id === product.id && item.size === size && item.color === color);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, size, color, quantity });
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
    if (cart[index].quantity < 1) cart[index].quantity = 1;
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
        cartItems.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><h3>Your cart is empty</h3><p>Add some items to get started!</p></div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-variant">Size: ${item.size} | Color: <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${item.color};vertical-align:middle;"></span></p>
                    <div class="cart-item-price">${formatNaira(item.price * item.quantity)}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${index})"><i class="fas fa-trash-alt"></i></button>
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

// ===== Checkout =====
function openCheckout() {
    closeCartSidebar();
    if (currentUser) {
        document.getElementById('checkoutEmail').value = currentUser.email || '';
        document.getElementById('shipFirstName').value = currentUser.firstName || '';
        document.getElementById('shipLastName').value = currentUser.lastName || '';
        document.getElementById('checkoutPhone').value = currentUser.phone || '';
    }
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.075;
    const total = subtotal + tax;
    document.getElementById('orderSummaryItems').innerHTML = cart.map(item => `
        <div class="summary-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-info"><h4>${item.name}</h4><p>Size: ${item.size} | Qty: ${item.quantity}</p></div>
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
        subtotal, tax, total,
        paymentMethod,
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

async function handlePaystackPayment(orderData, amount, email, phone) {
    if (PAYSTACK_PUBLIC_KEY.includes('YOUR_PAYSTACK_KEY')) {
        showToast('Paystack not configured yet. Showing Bank Transfer option instead.', 'warning');
        showBankTransferModal(orderData, amount);
        return;
    }
    showToast('Loading payment... Please wait.', 'success');
    try {
        if (!window.PaystackPop) await loadScript('https://js.paystack.co/v1/inline.js');
        const handler = PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email,
            amount: amount * 100,
            currency: 'NGN',
            ref: orderData.orderId,
            metadata: {
                custom_fields: [
                    { display_name: "Order ID", variable_name: "order_id", value: orderData.orderId },
                    { display_name: "Phone Number", variable_name: "phone", value: phone }
                ]
            },
            callback: function(response) {
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
                <div style="margin-bottom: 24px;"><i class="fas fa-university" style="color: var(--primary); font-size: 4rem;"></i></div>
                <h2 style="font-family: var(--font-heading); margin-bottom: 16px;">Bank Transfer Payment</h2>
                <p style="color: var(--gray-500); margin-bottom: 24px;">Please transfer <strong>${formatNaira(amount)}</strong> to the account below:</p>
                <div style="background: var(--gray-50); padding: 24px; border-radius: 12px; margin-bottom: 24px; text-align: left; border: 2px solid var(--gray-200);">
                    <div style="margin-bottom: 16px;"><span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Bank Name</span><p style="font-weight: 600; font-size: 1.1rem; margin: 0;">${YOUR_BANK_DETAILS.bankName}</p></div>
                    <div style="margin-bottom: 16px;"><span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Account Number</span><p style="font-weight: 600; font-size: 1.3rem; margin: 0; color: var(--accent);">${YOUR_BANK_DETAILS.accountNumber}</p></div>
                    <div style="margin-bottom: 16px;"><span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Account Name</span><p style="font-weight: 600; font-size: 1.1rem; margin: 0;">${YOUR_BANK_DETAILS.accountName}</p></div>
                    <div><span style="color: var(--gray-400); font-size: 0.85rem; text-transform: uppercase; display: block; margin-bottom: 4px;">Amount to Pay</span><p style="font-weight: 700; font-size: 1.3rem; margin: 0; color: var(--accent);">${formatNaira(amount)}</p></div>
                </div>
                <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 16px; border-radius: 8px; margin-bottom: 24px; text-align: left;">
                    <p style="margin: 0; font-size: 0.9rem; color: #856404; line-height: 1.6;">
                        <i class="fas fa-info-circle"></i> <strong>Important:</strong> Use your Order ID <strong>${orderData.orderId}</strong> as the payment description/reference. After payment, send proof via WhatsApp to <strong>0${YOUR_WHATSAPP.slice(3)}</strong> or email us.
                    </p>
                </div>
                <button class="btn btn-primary btn-full" onclick="confirmBankTransfer('${orderData.orderId}')" style="margin-bottom: 12px;"><i class="fas fa-check"></i> I Have Made the Transfer</button>
                <button class="btn btn-outline btn-full" onclick="closeTransferModal()">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(transferModal);
    document.body.style.overflow = 'hidden';
}

function closeTransferModal() {
    const modal = document.getElementById('transferModal');
    if (modal) { modal.remove(); document.body.style.overflow = ''; }
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

async function handleCashOnDelivery(orderData) {
    orderData.status = 'pending';
    orderData.paymentMethod = 'cod';
    finalizeOrder(orderData);
    showToast('Order placed! You will pay on delivery.', 'success');
    sendWhatsAppNotification(orderData);
}

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
            headers: getAuthHeaders(),
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

function sendWhatsAppNotification(orderData) {
    const itemsList = orderData.items.map(i => `• ${i.name} (${i.size}) x${i.quantity} = ${formatNaira(i.price * i.quantity)}`).join('%0A');
    const message = `🔔 *NEW ORDER!*%0A%0A*Order ID:* ${orderData.orderId}%0A*Customer:* ${orderData.customer.firstName} ${orderData.customer.lastName}%0A*Phone:* ${orderData.customer.phone}%0A*Email:* ${orderData.customer.email}%0A%0A*Items:*%0A${itemsList}%0A%0A*Total:* ${formatNaira(orderData.total)}%0A*Payment:* ${orderData.paymentMethod.toUpperCase()}%0A*Address:* ${orderData.shipping.address}, ${orderData.shipping.city}, ${orderData.shipping.state}`;
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Contact Form =====
async function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    const formData = { name, email, subject, message, date: new Date().toISOString() };
    saveContactLocally(formData);
    const mailtoLink = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(mailtoLink, '_blank');
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) showToast('Message sent! We will contact you shortly.', 'success');
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

// ===== Newsletter =====
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

// ===== PYTHON AI CHATBOT =====
function initChat() {
    if (!chatSessionId) {
        chatSessionId = 'chat-' + Date.now();
        localStorage.setItem('lady_t_chat_session', chatSessionId);
    }
}

function toggleChat() {
    chatBox.classList.toggle('active');
    chatBadge.style.display = 'none';
    if (chatBox.classList.contains('active')) chatInput.focus();
}

async function sendChatMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    addChatMessage(message, 'sent');
    chatInput.value = '';
    const typingId = 'typing-' + Date.now();
    showTypingIndicator(typingId);
    try {
        const response = await fetch(`${AI_SERVICE_URL}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                session_id: chatSessionId,
                name: currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'Guest'
            })
        });
        removeTypingIndicator(typingId);
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                const data = result.data;
                addChatMessage(data.response, 'received');
                if (data.action) handleChatAction(data.action);
            } else {
                addChatMessage("I'm sorry, I didn't understand that. Can you rephrase?", 'received');
            }
        } else {
            addChatMessage("I'm having trouble connecting right now. Please try again or contact us via WhatsApp.", 'received');
        }
    } catch (err) {
        removeTypingIndicator(typingId);
        console.error('AI Chat error:', err);
        addChatMessage("I'm currently offline, but you can reach us on WhatsApp at 09021724271 for immediate assistance!", 'received');
    }
}

function showTypingIndicator(id) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message received typing-indicator';
    typingDiv.id = id;
    typingDiv.innerHTML = `<p style="display: flex; gap: 4px; align-items: center;"><span style="width: 6px; height: 6px; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite;"></span><span style="width: 6px; height: 6px; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite 0.2s;"></span><span style="width: 6px; height: 6px; background: var(--gray-400); border-radius: 50%; animation: bounce 1s infinite 0.4s;"></span></p>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) indicator.remove();
}

function handleChatAction(action) {
    if (action.type === 'scrollTo') {
        const element = document.getElementById(action.data);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    if (action.type === 'filterCategory') {
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.category === action.data) btn.classList.add('active');
        });
        currentCategory = action.data;
        renderProducts(action.data);
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

// ===== Toast =====
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-times-circle', warning: 'fa-exclamation-circle' };
    toast.innerHTML = `<i class="fas ${icons[type]}"></i><span>${message}</span>`;
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
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        if (window.scrollY > 500) scrollTop.classList.add('visible');
        else scrollTop.classList.remove('visible');
        document.querySelectorAll('section[id]').forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (window.scrollY >= top && window.scrollY < top + height) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                });
            }
        });
    });
}

// ===== Load Script =====
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
    searchBtn.addEventListener('click', () => { searchOverlay.classList.add('active'); searchInput.focus(); });
    closeSearch.addEventListener('click', () => { searchOverlay.classList.remove('active'); searchInput.value = ''; renderProducts(currentCategory); });
    searchOverlay.addEventListener('click', (e) => { if (e.target === searchOverlay) { searchOverlay.classList.remove('active'); searchInput.value = ''; renderProducts(currentCategory); } });
    searchInput.addEventListener('input', (e) => renderProducts(currentCategory, e.target.value));
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', openCheckout);
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => { if (e.target === productModal) closeProductModal(); });
    checkoutClose.addEventListener('click', closeCheckoutModal);
    checkoutModal.addEventListener('click', (e) => { if (e.target === checkoutModal) closeCheckoutModal(); });
    continueShopping.addEventListener('click', closeSuccessModal);
    successModal.addEventListener('click', (e) => { if (e.target === successModal) closeSuccessModal(); });
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
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendChatMessage(); });
    scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const cardFields = document.getElementById('cardFields');
            cardFields.style.display = radio.value === 'card' ? 'block' : 'none';
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
            if (value.length >= 2) value = value.slice(0, 2) + '/' + value.slice(2, 4);
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
    
    // Auth listeners
    authBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleAuthMenu(); });
    document.addEventListener('click', (e) => {
        if (!authMenu.contains(e.target) && !authBtn.contains(e.target)) authMenu.classList.remove('active');
    });
    loginMenuLink.addEventListener('click', (e) => { e.preventDefault(); authMenu.classList.remove('active'); openAuthModal('login'); });
    signupMenuLink.addEventListener('click', (e) => { e.preventDefault(); authMenu.classList.remove('active'); openAuthModal('signup'); });
    profileLink.addEventListener('click', (e) => { e.preventDefault(); authMenu.classList.remove('active'); showToast('Profile page coming soon!', 'success'); });
    ordersLink.addEventListener('click', (e) => { e.preventDefault(); authMenu.classList.remove('active'); showToast('Order history coming soon!', 'success'); });
    logoutLink.addEventListener('click', (e) => { e.preventDefault(); authMenu.classList.remove('active'); logout(); });
    authModalClose.addEventListener('click', closeAuthModal);
    authModal.addEventListener('click', (e) => { if (e.target === authModal) closeAuthModal(); });
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
    });
    switchToSignup.addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('signup'); });
    switchToLogin.addEventListener('click', (e) => { e.preventDefault(); switchAuthTab('login'); });
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
}

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.classList.remove('active');
        closeCartSidebar();
        closeProductModal();
        closeCheckoutModal();
        closeSuccessModal();
        closeAuthModal();
        const transferModal = document.getElementById('transferModal');
        if (transferModal) transferModal.remove();
    }
});
