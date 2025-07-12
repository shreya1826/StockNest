# StockNest

A modern stock trading platform built with React and Node.js, offering a comprehensive suite of trading tools and investment tracking features.

## 🚀 Features

### Core Trading Features
- **Real-time Stock Watchlist** - Track market movements with live price updates
- **Holdings Management** - View and manage your stock portfolio
- **Positions Tracking** - Monitor your current trading positions  
- **Order Management** - Place, track, and manage buy/sell orders
- **Funds Management** - Handle deposits, withdrawals, and margin tracking

### Dashboard Features
- **Interactive Charts** - Visualize stock performance with Chart.js
- **Real-time Market Data** - Live NIFTY 50 and SENSEX indices
- **Responsive Design** - Mobile-friendly interface
- **Secure Authentication** - JWT-based user authentication
- **Modern UI/UX** - Material-UI components for enhanced user experience

### Investment Tools
- **P&L Tracking** - Real-time profit and loss calculations
- **Portfolio Analytics** - Visual charts and performance metrics
- **Market Insights** - Educational content and trading resources

## 🏗️ Architecture

The project consists of three main components:

### 1. Frontend (Landing Page)
- **Technology**: React 19.1.0, React Router DOM
- **Features**: Marketing website with product information, pricing, about section
- **Location**: `/frontend`

### 2. Dashboard (Trading Interface)
- **Technology**: React 19.1.0, Material-UI, Chart.js
- **Features**: Main trading dashboard with real-time data
- **Location**: `/dashboard`

### 3. Backend (API Server)
- **Technology**: Node.js, Express.js, MongoDB, Socket.io
- **Features**: REST API, real-time WebSocket connections, authentication
- **Location**: `/backend`

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React** 19.1.0
- **React Router DOM** 7.5.3
- **Material-UI** 7.0.2
- **Chart.js** 4.4.9 with React Chart.js 2
- **Axios** for API calls
- **Socket.io Client** for real-time updates

### Backend
- **Node.js** with Express 5.1.0
- **MongoDB** with Mongoose 8.14.0
- **Socket.io** 4.8.1 for WebSocket connections
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** enabled for cross-origin requests

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/shreya1826/StockNest.git
cd StockNest
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3002
```

Start the backend server:
```bash
npm start
```

### 3. Dashboard Setup
```bash
cd dashboard
npm install
npm start
```

### 4. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🚀 Usage

1. **Access the Landing Page**: Navigate to `http://localhost:3000` (Frontend)
2. **Trading Dashboard**: Access the dashboard at `http://localhost:3001` (Dashboard)
3. **API Server**: Backend runs on `http://localhost:3002`

### Default Ports
- Frontend (Landing): `3000`
- Dashboard: `3001` 
- Backend API: `3002`

## 📊 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### Trading Data
- `GET /allHoldings` - Fetch user holdings
- `GET /allPositions` - Fetch user positions
- `GET /allOrders` - Fetch user orders
- `POST /newOrder` - Place new order

## 🎯 Key Components

### Dashboard Components
- **WatchList** - Real-time stock monitoring
- **Holdings** - Portfolio management
- **Positions** - Active positions tracking
- **Orders** - Order management interface
- **Funds** - Account balance and margin info
- **BuyActionWindow** - Order placement modal

### Frontend Components
- **Landing Page** - Marketing and product information
- **Authentication** - Login/signup forms
- **Product Pages** - Service descriptions
- **Pricing** - Fee structure information

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Secure cookie handling
- Input validation and sanitization

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop and mobile
- **Material Design** - Modern Material-UI components
- **Interactive Charts** - Real-time data visualization
- **Intuitive Navigation** - Easy-to-use interface
- **Real-time Updates** - Live market data via WebSockets

## 📈 Market Data

The platform provides real-time tracking of:
- Individual stock prices
- NIFTY 50 index
- SENSEX index
- Portfolio performance metrics
- P&L calculations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🆘 Support

For support and queries, please create a ticket through the support section on the platform.

## 🔮 Future Enhancements

- [ ] Mobile applications (iOS/Android)
- [ ] Advanced charting tools
- [ ] Options trading
- [ ] Mutual funds integration
- [ ] News and market insights
- [ ] Social trading features
- [ ] Portfolio analytics
- [ ] Risk management tools

---

*"We pioneered the discount broking model in India. Now, we are breaking ground with our technology."*

**StockNest** - Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
