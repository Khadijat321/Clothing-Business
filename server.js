const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));

// Data storage paths
const DATA_DIR = path.join(__dirname, 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');
const CHAT_FILE = path.join(DATA_DIR, 'chat.json');

// Ensure data directory exists
async function ensureDataDir() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
    } catch (err) {
        console.error('Error creating data directory:', err);
    }
}

// Read JSON file
async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') return [];
        throw err;
    }
}

// Write JSON file
async function writeJsonFile(filePath, data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Email configuration (configure with your credentials)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

// ============================================
// PRODUCTS API
// ============================================

// Get all products
app.get('/api/products', (req, res) => {
    const products = require('./products.json');
    const { category, search } = req.query;
    
    let filtered = products;
    
    if (category && category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    if (search) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    res.json({ success: true, data: filtered });
});

// Get single product
app.get('/api/products/:id', (req, res) => {
    const products = require('./products.json');
    const product = products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    
    res.json({ success: true, data: product });
});

// ============================================
// ORDERS API
// ============================================

// Create order
app.post('/api/orders', async (req, res) => {
    try {
        const { customer, shipping, items, total, paymentMethod } = req.body;
        
        // Validation
        if (!customer || !shipping || !items || !items.length) {
            return res.status(400).json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }
        
        const order = {
            orderId: 'ORD-' + Date.now().toString(36).toUpperCase(),
            customer,
            shipping,
            items,
            total,
            paymentMethod: paymentMethod || 'card',
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        // Save to file
        const orders = await readJsonFile(ORDERS_FILE);
        orders.push(order);
        await writeJsonFile(ORDERS_FILE, orders);
        
        // Send confirmation email
        await sendOrderConfirmation(order);
        
        res.status(201).json({ 
            success: true, 
            message: 'Order placed successfully',
            data: { orderId: order.orderId }
        });
        
    } catch (err) {
        console.error('Order error:', err);
        res.status(500).json({ success: false, message: 'Failed to place order' });
    }
});

// Get all orders (admin)
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await readJsonFile(ORDERS_FILE);
        res.json({ success: true, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
});

// Get single order
app.get('/api/orders/:orderId', async (req, res) => {
    try {
        const orders = await readJsonFile(ORDERS_FILE);
        const order = orders.find(o => o.orderId === req.params.orderId);
        
        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        
        res.json({ success: true, data: order });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch order' });
    }
});

// Update order status
app.patch('/api/orders/:orderId', async (req, res) => {
    try {
        const { status } = req.body;
        const orders = await readJsonFile(ORDERS_FILE);
        const index = orders.findIndex(o => o.orderId === req.params.orderId);
        
        if (index === -1) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }
        
        orders[index].status = status;
        orders[index].updatedAt = new Date().toISOString();
        await writeJsonFile(ORDERS_FILE, orders);
        
        res.json({ success: true, message: 'Order updated', data: orders[index] });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update order' });
    }
});

// ============================================
// CONTACT API
// ============================================

// Submit contact form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Name, email, and message are required' 
            });
        }
        
        const contact = {
            id: 'MSG-' + Date.now().toString(36).toUpperCase(),
            name,
            email,
            subject: subject || 'General Inquiry',
            message,
            status: 'unread',
            createdAt: new Date().toISOString()
        };
        
        const contacts = await readJsonFile(CONTACTS_FILE);
        contacts.push(contact);
        await writeJsonFile(CONTACTS_FILE, contacts);
        
        // Send notification email to admin
        await sendContactNotification(contact);
        
        res.status(201).json({ 
            success: true, 
            message: 'Message sent successfully',
            data: { messageId: contact.id }
        });
        
    } catch (err) {
        console.error('Contact error:', err);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
});

// Get all messages (admin)
app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await readJsonFile(CONTACTS_FILE);
        res.json({ success: true, data: contacts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch messages' });
    }
});

// Mark message as read
app.patch('/api/contact/:id', async (req, res) => {
    try {
        const contacts = await readJsonFile(CONTACTS_FILE);
        const index = contacts.findIndex(c => c.id === req.params.id);
        
        if (index === -1) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        
        contacts[index].status = 'read';
        await writeJsonFile(CONTACTS_FILE, contacts);
        
        res.json({ success: true, message: 'Message marked as read' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update message' });
    }
});

// ============================================
// NEWSLETTER API
// ============================================

// Subscribe to newsletter
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email || !email.includes('@')) {
            return res.status(400).json({ 
                success: false, 
                message: 'Valid email is required' 
            });
        }
        
        const subscribers = await readJsonFile(NEWSLETTER_FILE);
        
        if (subscribers.find(s => s.email === email)) {
            return res.status(409).json({ 
                success: false, 
                message: 'Email already subscribed' 
            });
        }
        
        const subscriber = {
            email,
            subscribedAt: new Date().toISOString(),
            active: true
        };
        
        subscribers.push(subscriber);
        await writeJsonFile(NEWSLETTER_FILE, subscribers);
        
        // Send welcome email
        await sendWelcomeEmail(email);
        
        res.status(201).json({ 
            success: true, 
            message: 'Subscribed successfully' 
        });
        
    } catch (err) {
        console.error('Newsletter error:', err);
        res.status(500).json({ success: false, message: 'Failed to subscribe' });
    }
});

// Get all subscribers (admin)
app.get('/api/newsletter', async (req, res) => {
    try {
        const subscribers = await readJsonFile(NEWSLETTER_FILE);
        res.json({ success: true, data: subscribers });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch subscribers' });
    }
});

// ============================================
// CHAT API
// ============================================

// Save chat message
app.post('/api/chat', async (req, res) => {
    try {
        const { name, email, message, sessionId } = req.body;
        
        const chatMessage = {
            id: 'CHAT-' + Date.now().toString(36).toUpperCase(),
            name: name || 'Anonymous',
            email: email || null,
            message,
            sessionId: sessionId || 'guest-' + Date.now(),
            createdAt: new Date().toISOString()
        };
        
        const chats = await readJsonFile(CHAT_FILE);
        chats.push(chatMessage);
        await writeJsonFile(CHAT_FILE, chats);
        
        res.status(201).json({ 
            success: true, 
            message: 'Message saved',
            data: chatMessage 
        });
        
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to save message' });
    }
});

// Get chat history by session
app.get('/api/chat/:sessionId', async (req, res) => {
    try {
        const chats = await readJsonFile(CHAT_FILE);
        const sessionChats = chats.filter(c => c.sessionId === req.params.sessionId);
        res.json({ success: true, data: sessionChats });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch chat history' });
    }
});

// ============================================
// EMAIL FUNCTIONS
// ============================================

async function sendOrderConfirmation(order) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: order.customer.email,
        subject: `Order Confirmation - ${order.orderId}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1a1a2e;">Thank you for your order!</h2>
                <p>Hi ${order.customer.firstName},</p>
                <p>Your order has been received and is being processed.</p>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0;">Order Details</h3>
                    <p><strong>Order ID:</strong> ${order.orderId}</p>
                    <p><strong>Date:</strong> ${new Date(order.createdAt).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
                    <p><strong>Status:</strong> ${order.status}</p>
                </div>
                
                <h3>Items Ordered</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #dee2e6;">
                        <th style="text-align: left; padding: 10px;">Item</th>
                        <th style="text-align: center; padding: 10px;">Qty</th>
                        <th style="text-align: right; padding: 10px;">Price</th>
                    </tr>
                    ${order.items.map(item => `
                        <tr style="border-bottom: 1px solid #f1f3f5;">
                            <td style="padding: 10px;">${item.name} (${item.size})</td>
                            <td style="text-align: center; padding: 10px;">${item.quantity}</td>
                            <td style="text-align: right; padding: 10px;">$${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </table>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #dee2e6;">
                    <h3>Shipping Address</h3>
                    <p>${order.shipping.address}<br>
                    ${order.shipping.city}, ${order.shipping.state} ${order.shipping.zip}<br>
                    ${order.shipping.country}</p>
                </div>
                
                <p style="margin-top: 30px; color: #868e96; font-size: 14px;">
                    If you have any questions, please contact us at support@luxethreads.com
                </p>
            </div>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('Order confirmation sent to', order.customer.email);
    } catch (err) {
        console.error('Email error:', err);
    }
}

async function sendContactNotification(contact) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: process.env.ADMIN_EMAIL || 'admin@luxethreads.com',
        subject: `New Contact Form Submission - ${contact.subject}`,
        html: `
            <h2>New Message from Contact Form</h2>
            <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
            <p><strong>Subject:</strong> ${contact.subject}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f8f9fa; padding: 15px; border-left: 4px solid #e94560;">
                ${contact.message}
            </blockquote>
            <p><strong>Received:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error('Notification email error:', err);
    }
}

async function sendWelcomeEmail(email) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: email,
        subject: 'Welcome to Luxe Threads Newsletter!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; text-align: center;">
                <h1 style="color: #1a1a2e;">Welcome to Luxe Threads!</h1>
                <p>Thank you for subscribing to our newsletter.</p>
                <p>You'll be the first to know about:</p>
                <ul style="list-style: none; padding: 0;">
                    <li>✨ New arrivals</li>
                    <li>🎉 Exclusive offers</li>
                    <li>📦 Early access to sales</li>
                    <li>💡 Style tips and trends</li>
                </ul>
                <p style="margin-top: 30px;">
                    <a href="#" style="background: #e94560; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px;">
                        Start Shopping
                    </a>
                </p>
            </div>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.error('Welcome email error:', err);
    }
}

// ============================================
// DASHBOARD API (Admin)
// ============================================

// Get dashboard stats
app.get('/api/admin/stats', async (req, res) => {
    try {
        const orders = await readJsonFile(ORDERS_FILE);
        const contacts = await readJsonFile(CONTACTS_FILE);
        const subscribers = await readJsonFile(NEWSLETTER_FILE);
        
        const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
        const pendingOrders = orders.filter(o => o.status === 'pending').length;
        const unreadMessages = contacts.filter(c => c.status === 'unread').length;
        
        res.json({
            success: true,
            data: {
                totalOrders: orders.length,
                totalRevenue,
                pendingOrders,
                totalMessages: contacts.length,
                unreadMessages,
                totalSubscribers: subscribers.length,
                recentOrders: orders.slice(-5).reverse()
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch stats' });
    }
});

// ============================================
// START SERVER
// ============================================

ensureDataDir().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Luxe Threads server running on http://localhost:${PORT}`);
        console.log('📦 API Endpoints:');
        console.log('   GET  /api/products          - List all products');
        console.log('   GET  /api/products/:id      - Get single product');
        console.log('   POST /api/orders            - Place an order');
        console.log('   GET  /api/orders            - List all orders');
        console.log('   POST /api/contact           - Submit contact form');
        console.log('   GET  /api/contact           - List all messages');
        console.log('   POST /api/newsletter        - Subscribe to newsletter');
        console.log('   GET  /api/newsletter        - List subscribers');
        console.log('   POST /api/chat              - Save chat message');
        console.log('   GET  /api/admin/stats       - Dashboard statistics');
    });
});

module.exports = app;
with ('/mnt/agents/output/clothing-store/backend/server.js', 'w') f:
    f.write(server_js)

print("✅ server.js created")
