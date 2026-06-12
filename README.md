readme_md = '''# Luxe Threads - Clothing E-commerce Backend

A complete Node.js/Express backend API for the Luxe Threads clothing e-commerce website.

## Features

- **Products API** - Browse and search products with filtering
- **Orders API** - Place orders with email confirmations
- **Contact API** - Handle customer inquiries and messages
- **Newsletter API** - Email subscription management
- **Chat API** - Store and retrieve chat messages
- **Admin Dashboard API** - Statistics and analytics

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.example .env
# Edit .env with your credentials
```

### 3. Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products (optional: `?category=men&search=shirt`) |
| GET | `/api/products/:id` | Get single product |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Place a new order |
| GET | `/api/orders` | List all orders |
| GET | `/api/orders/:orderId` | Get single order |
| PATCH | `/api/orders/:orderId` | Update order status |

### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List all messages |
| PATCH | `/api/contact/:id` | Mark message as read |

### Newsletter
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/newsletter` | Subscribe to newsletter |
| GET | `/api/newsletter` | List subscribers |

### Chat
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Save chat message |
| GET | `/api/chat/:sessionId` | Get chat history |

### Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/stats` | Dashboard statistics |

## Order Request Example
```json
{
  "customer": {
    "email": "customer@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "shipping": {
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "US"
  },
  "items": [
    {
      "id": 1,
      "name": "Classic Oxford Shirt",
      "price": 89.99,
      "quantity": 2,
      "size": "L",
      "color": "#1a1a2e"
    }
  ],
  "total": 179.98,
  "paymentMethod": "card"
}
```

## Contact Request Example
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Order Inquiry",
  "message": "I have a question about my recent order."
}
```

## Data Storage

All data is stored in JSON files in the `data/` directory:
- `orders.json` - Order history
- `contacts.json` - Contact form submissions
- `newsletter.json` - Newsletter subscribers
- `chat.json` - Chat messages

## Email Setup

To enable email notifications:
1. Use Gmail with an App Password
2. Set `EMAIL_USER` and `EMAIL_PASS` in `.env`
3. For production, consider using SendGrid or AWS SES

## Production Deployment

### Using PM2
```bash
npm install -g pm2
pm2 start server.js --name "luxethreads"
pm2 save
pm2 startup
```

### Using Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## License

MIT'''

# Write files
with open('/mnt/agents/output/clothing-store/backend/products.json', 'w') as f:
    f.write(products_json)

with open('/mnt/agents/output/clothing-store/backend/package.json', 'w') as f:
    f.write(package_json)

with open('/mnt/agents/output/clothing-store/backend/.env.example', 'w') as f:
    f.write(env_example)

with open('/mnt/agents/output/clothing-store/backend/README.md', 'w') as f:
    f.write(readme_md)
