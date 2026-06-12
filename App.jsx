// App.jsx - Main Application
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Mail, MessageCircle, Star, Plus, Minus, Trash2, Send } from 'lucide-react';

// --- DATA ---
const PRODUCTS = [
  { id: 1, name: "Classic White Tee", price: 29.99, category: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", sizes: ["S", "M", "L", "XL"], rating: 4.5 },
  { id: 2, name: "Denim Jacket", price: 89.99, category: "Jackets", image: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=500", sizes: ["M", "L", "XL"], rating: 4.8 },
  { id: 3, name: "Summer Dress", price: 59.99, category: "Dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500", sizes: ["S", "M", "L"], rating: 4.7 },
  { id: 4, name: "Casual Hoodie", price: 49.99, category: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", sizes: ["S", "M", "L", "XL", "XXL"], rating: 4.6 },
  { id: 5, name: "Slim Fit Chinos", price: 44.99, category: "Pants", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500", sizes: ["30", "32", "34", "36"], rating: 4.3 },
  { id: 6, name: "Leather Belt", price: 34.99, category: "Accessories", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500", sizes: ["S", "M", "L"], rating: 4.4 },
];

// --- COMPONENTS ---

const Navbar = ({ cartCount, setView, currentView }) => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setView('home')}>
          <ShoppingBag className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">StyleStore</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'shop', 'contact'].map((view) => (
            <button
              key={view}
              onClick={() => setView(view)}
              className={`capitalize ${currentView === view ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}
            >
              {view}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={() => setView('cart')} className="relative p-2">
            <ShoppingBag className="h-6 w-6 text-gray-600" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setView('menu')}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const ProductCard = ({ product, addToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <div className="flex items-center mt-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <div className="flex items-center space-x-2">
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="text-sm border rounded px-2 py-1"
            >
              {product.sizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
            <button
              onClick={() => addToCart({ ...product, selectedSize })}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ cart, updateQuantity, removeFromCart, setView }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
          <button onClick={() => setView('shop')} className="mt-4 text-indigo-600 hover:underline">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex items-center bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.name} className="h-20 w-20 object-cover rounded" />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                  <p className="text-indigo-600 font-bold">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item, -1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item, 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Plus className="h-4 w-4" />
                  </button>
                  <button onClick={() => removeFromCart(item)} className="ml-4 text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between text-xl font-bold mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => setView('checkout')}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({
    email: '', firstName: '', lastName: '', address: '', city: '', zip: '', cardNumber: '', expiry: '', cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, send to your backend API
    alert('Order placed successfully! (Demo - integrate with backend for real processing)');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input required type="email" placeholder="Email" className="col-span-2 w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <input required placeholder="First Name" className="w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          <input required placeholder="Last Name" className="w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          <input required placeholder="Address" className="col-span-2 w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, address: e.target.value})} />
          <input required placeholder="City" className="w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, city: e.target.value})} />
          <input required placeholder="ZIP Code" className="w-full p-3 border rounded-lg" 
            onChange={(e) => setFormData({...formData, zip: e.target.value})} />
        </div>
        
        <div className="border-t pt-4 mt-4">
          <h3 className="font-semibold mb-2">Payment Details (Demo)</h3>
          <input required placeholder="Card Number" className="w-full p-3 border rounded-lg mb-2" 
            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})} />
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="MM/YY" className="w-full p-3 border rounded-lg" 
              onChange={(e) => setFormData({...formData, expiry: e.target.value})} />
            <input required placeholder="CVV" className="w-full p-3 border rounded-lg" 
              onChange={(e) => setFormData({...formData, cvv: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mt-6">
          Place Order
        </button>
      </form>
    </div>
  );
};

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Welcome to StyleStore. How can I help you today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    setMessages([...messages, { sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate response (in production, connect to backend chat API)
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Thanks for your message! Our team will get back to you shortly. You can also reach us at support@stylestore.com' }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@stylestore.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-gray-600">Available 9AM - 6PM EST</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
              <li>Saturday: 10:00 AM - 6:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Live Chat */}
        <div className="bg-white rounded-lg shadow-md flex flex-col h-[500px]">
          <div className="p-4 border-b bg-indigo-600 text-white rounded-t-lg">
            <h3 className="font-semibold flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" /> Live Chat
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t flex space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">StyleStore</h3>
        <p className="text-gray-400">Quality clothing for every occasion. Shop the latest trends with confidence.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li>About Us</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Customer Service</h4>
        <ul className="space-y-2 text-gray-400">
          <li>Shipping Info</li>
          <li>Returns</li>
          <li>Size Guide</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Newsletter</h4>
        <div className="flex">
          <input type="email" placeholder="Your email" className="px-3 py-2 rounded-l-md text-gray-900 w-full" />
          <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">Subscribe</button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 text-center py-6 text-gray-400">
      © 2026 StyleStore. All rights reserved.
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === product.selectedSize);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (item, delta) => {
    setCart(prev => prev.map(cartItem => {
      if (cartItem.id === item.id && cartItem.selectedSize === item.selectedSize) {
        const newQty = cartItem.quantity + delta;
        return newQty > 0 ? { ...cartItem, quantity: newQty } : cartItem;
      }
      return cartItem;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (item) => {
    setCart(prev => prev.filter(cartItem => 
      !(cartItem.id === item.id && cartItem.selectedSize === item.selectedSize)
    ));
  };

  const renderView = () => {
    switch(view) {
      case 'home':
        return (
          <div>
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-24 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Collection 2026</h1>
                <p className="text-xl text-gray-300 mb-8">Discover the latest trends in fashion</p>
                <button onClick={() => setView('shop')} className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Featured Products */}
            <div className="max-w-7xl mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.slice(0, 3).map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>
        );
      case 'shop':
        return (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        );
      case 'cart':
        return <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} setView={setView} />;
      case 'checkout':
        return <Checkout cart={cart} />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Home</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} setView={setView} currentView={view} />
      <main>{renderView()}</main>
      <Footer />
    </div>
  );
}