# 🎓 Full Stack E-Learning Platform (MERN)

A modern, feature-rich e-learning platform built with MongoDB, Express.js, React.js, and Node.js featuring JWT authentication, role-based access control, and real-time performance tracking.

![Tech Stack](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## ✨ Features

- 🔐 **JWT Authentication** - Secure login with 365-day token expiration
- 👥 **Role-Based Access** - Student, Instructor, and Admin roles
- 🎥 **Course Management** - Create, view, and enroll in video courses
- 📝 **Interactive Quizzes** - Multiple-choice quizzes with instant feedback
- 📊 **Performance Tracking** - Monitor learning progress and quiz scores
- 🚀 **High Performance** - Rate limiting, caching, and compression
- 🎨 **Modern UI** - Animated, responsive design with gradient themes
- 🛡️ **Security** - Helmet.js, MongoDB sanitization, CORS protection

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (free tier)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd studywithme
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Configure environment variables**

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=365d
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

4. **Start the application**
```bash
npm run dev
```

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

## 📁 Project Structure

```
studywithme/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── context/       # Auth context
│   │   └── App.js
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Database config
│   ├── controllers/      # Business logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Auth & rate limiting
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (instructor/admin)
- `GET /api/courses/:id` - Get single course
- `POST /api/courses/:id/enroll` - Enroll in course

### Quizzes
- `GET /api/quizzes` - Get all quizzes
- `POST /api/quizzes` - Create quiz (instructor/admin)
- `POST /api/quizzes/submit` - Submit quiz answers
- `GET /api/quizzes/results` - Get user results

## 🎯 User Roles

### Student
- Browse and enroll in courses
- Take quizzes
- View performance metrics

### Instructor
- All student permissions
- Create and manage courses
- Create and manage quizzes

### Admin
- All instructor permissions
- Full system access

## 🛡️ Security Features

- JWT token authentication
- Password hashing with bcrypt (12 rounds)
- Rate limiting (100 req/15min general, 5 req/15min auth)
- MongoDB injection prevention
- XSS protection with Helmet.js
- CORS configuration
- Request size limits (10MB)

## ⚡ Performance Optimizations

- Response compression (70% size reduction)
- In-memory caching (5-minute cache)
- MongoDB connection pooling (10 connections)
- Graceful shutdown handling
- Optimized database queries

## 📦 Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy

**Backend (Render)**:
1. Sign up at https://render.com
2. Create new Web Service
3. Connect GitHub repo
4. Set root directory to `server`
5. Add environment variables
6. Deploy!

**Frontend (Vercel)**:
1. Sign up at https://vercel.com
2. Import GitHub repo
3. Set root directory to `client`
4. Add `REACT_APP_API_URL` environment variable
5. Deploy!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Radha Mudgal

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Vercel for frontend hosting
- Render for backend hosting
