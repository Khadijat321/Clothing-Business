const products = [
    {
        id: 1,
        name: "Classic Oxford Shirt",
        category: "men",
        price: 89.99,
        originalPrice: 120.00,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
        rating: 4.8,
        reviews: 124,
        badge: "sale",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#1a1a2e", "#ffffff", "#d4a574", "#495057"],
        description: "A timeless Oxford shirt crafted from premium cotton. Features a button-down collar, chest pocket, and tailored fit. Perfect for both casual and formal occasions."
    },
    {
        id: 2,
        name: "Slim Fit Chino Pants",
        category: "men",
        price: 79.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
        rating: 4.6,
        reviews: 89,
        badge: null,
        sizes: ["28", "30", "32", "34", "36"],
        colors: ["#d4a574", "#1a1a2e", "#868e96"],
        description: "Versatile slim-fit chinos made from stretch cotton twill. Features a modern tapered leg and comfortable fit for all-day wear."
    },
    {
        id: 3,
        name: "Floral Summer Dress",
        category: "women",
        price: 129.99,
        originalPrice: 169.99,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
        rating: 4.9,
        reviews: 215,
        badge: "sale",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#e94560", "#28a745", "#ffc107"],
        description: "A beautiful floral print summer dress with a flowing silhouette. Made from lightweight, breathable fabric perfect for warm days."
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        category: "accessories",
        price: 149.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
        rating: 4.7,
        reviews: 78,
        badge: "new",
        sizes: ["One Size"],
        colors: ["#1a1a2e", "#d4a574", "#868e96"],
        description: "Genuine leather crossbody bag with adjustable strap and multiple compartments. Elegant design that complements any outfit."
    },
    {
        id: 5,
        name: "Wool Blend Overcoat",
        category: "men",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400",
        rating: 4.8,
        reviews: 56,
        badge: "sale",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#1a1a2e", "#495057", "#d4a574"],
        description: "Premium wool blend overcoat with a tailored silhouette. Features notched lapels, welt pockets, and a full lining for warmth."
    },
    {
        id: 6,
        name: "Silk Blouse",
        category: "women",
        price: 119.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400",
        rating: 4.5,
        reviews: 92,
        badge: null,
        sizes: ["XS", "S", "M", "L"],
        colors: ["#ffffff", "#e94560", "#1a1a2e"],
        description: "Luxurious silk blouse with a relaxed fit and elegant drape. Perfect for the office or a night out."
    },
    {
        id: 7,
        name: "Denim Jacket",
        category: "women",
        price: 99.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=400",
        rating: 4.7,
        reviews: 143,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#495057", "#1a1a2e"],
        description: "Classic denim jacket with a modern fit. Features button front, chest pockets, and adjustable waist tabs."
    },
    {
        id: 8,
        name: "Cashmere Scarf",
        category: "accessories",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400",
        rating: 4.9,
        reviews: 201,
        badge: "sale",
        sizes: ["One Size"],
        colors: ["#d4a574", "#1a1a2e", "#e94560", "#495057"],
        description: "Ultra-soft cashmere scarf with a classic weave. Adds a touch of luxury to any outfit while keeping you warm."
    },
    {
        id: 9,
        name: "Polo Shirt",
        category: "men",
        price: 59.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
        rating: 4.4,
        reviews: 167,
        badge: null,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["#28a745", "#1a1a2e", "#ffffff", "#e94560"],
        description: "Classic polo shirt in premium pique cotton. Features a two-button placket and ribbed collar and cuffs."
    },
    {
        id: 10,
        name: "Maxi Skirt",
        category: "women",
        price: 79.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0ujf?w=400",
        rating: 4.6,
        reviews: 88,
        badge: "new",
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["#1a1a2e", "#d4a574", "#e94560"],
        description: "Elegant maxi skirt with a flowing A-line silhouette. Features an elastic waistband for comfort and side pockets."
    },
    {
        id: 11,
        name: "Leather Belt",
        category: "accessories",
        price: 49.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400",
        rating: 4.5,
        reviews: 134,
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["#d4a574", "#1a1a2e"],
        description: "Genuine leather belt with a classic buckle. Durable construction that ages beautifully over time."
    },
    {
        id: 12,
        name: "Linen Blazer",
        category: "men",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400",
        rating: 4.7,
        reviews: 45,
        badge: "sale",
        sizes: ["S", "M", "L", "XL"],
        colors: ["#d4a574", "#ffffff", "#495057"],
        description: "Lightweight linen blazer perfect for summer events. Features a relaxed fit and patch pockets."
    }
];

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
});

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
    
    // Add click handlers
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
        `<span class="price-current">$${product.price.toFixed(2)}</span>
         <span class="price-original">$${product.originalPrice.toFixed(2)}</span>` :
        `<span class="price-current">$${product.price.toFixed(2)}</span>`;
    
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
        `<span class="price-current">$${selectedProduct.price.toFixed(2)}</span>
         <span class="price-original">$${selectedProduct.originalPrice.toFixed(2)}</span>` :
        `<span class="price-current">$${selectedProduct.price.toFixed(2)}</span>`;
    
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
                <i class="fas fa-shopping-bag"></i> Add to Cart - $${selectedProduct.price.toFixed(2)}
            </button>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup modal event listeners
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
    
    // Animate cart icon
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
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
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
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
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

// ===== Checkout =====
function openCheckout() {
    closeCartSidebar();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    document.getElementById('orderSummaryItems').innerHTML = cart.map(item => `
        <div class="summary-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-info">
                <h4>${item.name}</h4>
                <p>Size: ${item.size} | Qty: ${item.quantity}</p>
            </div>
            <span class="summary-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('summarySubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summaryTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summaryTotal').textContent = `$${total.toFixed(2)}`;
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function placeOrder(e) {
    e.preventDefault();
    
    const email = document.getElementById('checkoutEmail').value;
    const firstName = document.getElementById('shipFirstName').value;
    const lastName = document.getElementById('shipLastName').value;
    const address = document.getElementById('shipAddress').value;
    const city = document.getElementById('shipCity').value;
    const state = document.getElementById('shipState').value;
    const zip = document.getElementById('shipZip').value;
    const country = document.getElementById('shipCountry').value;
    
    // Basic validation
    if (!email || !firstName || !lastName || !address || !city || !state || !zip) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const orderData = {
        orderId: 'ORD-' + Date.now().toString().slice(-6),
        customer: { email, firstName, lastName },
        shipping: { address, city, state, zip, country },
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString()
    };
    
    // Send order to backend
    sendOrderToBackend(orderData);
    
    // Show success
    document.getElementById('orderNumber').textContent = orderData.orderId;
    document.getElementById('confirmEmail').textContent = email;
    
    closeCheckoutModal();
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
}

function sendOrderToBackend(orderData) {
    // In production, replace with your actual backend URL
    // fetch('http://your-backend.com/api/orders', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(orderData)
    // })
    // .then(res => res.json())
    // .then(data => console.log('Order saved:', data))
    // .catch(err => console.error('Error:', err));
    
    // For demo, log to console
    console.log('Order placed:', orderData);
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Contact Form =====
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
        date: new Date().toISOString()
    };
    
    // Send to backend
    sendContactToBackend(formData);
    
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    contactForm.reset();
}

function sendContactToBackend(data) {
    // fetch('http://your-backend.com/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
    console.log('Contact form submitted:', data);
}

// ===== Newsletter =====
function handleNewsletterSubmit(e) {
    e.preventDefault();
    showToast('Thank you for subscribing!', 'success');
    newsletterForm.reset();
}

// ===== Chat Widget =====
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
    
    // Add user message
    addChatMessage(message, 'sent');
    chatInput.value = '';
    
    // Simulate response
    setTimeout(() => {
        const responses = [
            "Thanks for reaching out! How can I help you today?",
            "I'd be happy to assist you with that!",
            "Let me check that for you right away.",
            "Great question! Here's what I can tell you...",
            "Is there anything else you'd like to know?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'received');
    }, 1000 + Math.random() * 1000);
}

function addChatMessage(text, type) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<p>${escapeHtml(text)}</p><span class="message-time">${time}</span>`;
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
        // Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top
        if (window.scrollY > 500) {
            scrollTop.classList.add('visible');
        } else {
            scrollTop.classList.remove('visible');
        }
        
        // Active nav link
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

// ===== Event Listeners =====
function setupEventListeners() {
    // Navigation
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Search
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
    
    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    checkoutBtn.addEventListener('click', openCheckout);
    
    // Modals
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
    
    // Filter tabs
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
    
    // Forms
    contactForm.addEventListener('submit', handleContactSubmit);
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    checkoutForm.addEventListener('submit', placeOrder);
    
    // Chat
    chatToggle.addEventListener('click', toggleChat);
    chatMinimize.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
    
    // Scroll to top
    scrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Payment method toggle
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
    
    // Card number formatting
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\\D/g, '');
            value = value.replace(/(\\d{4})(?=\\d)/g, '$1 ');
            e.target.value = value;
        });
    }
    
    // Expiry date formatting
    const cardExpiry = document.getElementById('cardExpiry');
    if (cardExpiry) {
        cardExpiry.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }
    
    // Close mobile nav on link click
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
    }
});

with('/mnt/agents/output/clothing-store/js/app.js', 'w')  f:
    f.write(js_content)

print("✅ app.js created")
