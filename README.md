# COdexIM - Inventory Management System

A comprehensive Inventory Management System built with the MERN Stack (MongoDB, Express, React, Node.js) and MongoDB Server.

## Features

- 📦 Product Management
- 📊 Inventory Tracking
- 📈 Dashboard & Analytics
- 👥 User Management
- 🔐 Authentication & Authorization
- 📱 Responsive Design
- 🌙 Dark Mode Support

## Tech Stack

### Frontend
- **React** - UI library
- **Redux/Context API** - State management
- **Axios** - HTTP client
- **Tailwind CSS** or **Material-UI** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM (Object Data Modeling)
- **JWT** - Authentication
- **bcrypt** - Password hashing

## Project Structure

```
COdexIM/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.local
├── server/                 # Express Backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shreya-jere-69/COdexIM.git
cd COdexIM
```

2. Setup Backend:
```bash
cd server
npm install
cp .env.example .env
# Update .env with your MongoDB URI and other configs
npm start
```

3. Setup Frontend:
```bash
cd client
npm install
cp .env.example .env.local
# Update .env.local with your API endpoint
npm start
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codexim
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend (.env.local)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Inventory
- `GET /api/inventory` - Get inventory stats
- `GET /api/inventory/:productId` - Get product inventory
- `PUT /api/inventory/:productId` - Update inventory

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please open an issue or contact the project maintainer.
