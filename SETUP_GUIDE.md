# Complete Setup Guide - E-Learning Platform

## Prerequisites Checklist

### 1. Install Node.js
- Download: https://nodejs.org/ (LTS version recommended)
- Verify: `node --version` and `npm --version`

### 2. Install MongoDB

**Option A: Local Installation (Windows)**
1. Download MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Run installer (choose "Complete" installation)
3. Install as Windows Service (check the box)
4. MongoDB Compass will be installed (GUI tool)
5. Verify: Open Command Prompt and run `mongosh`

**Option B: MongoDB Atlas (Cloud - Easier)**
1. Sign up: https://www.mongodb.com/cloud/atlas/register
2. Create free cluster (M0 Sandbox)
3. Create database user
4. Whitelist IP (0.0.0.0/0 for development)
5. Get connection string

### 3. Install Git (Optional but recommended)
- Download: https://git-scm.com/downloads

---

## Step-by-Step Setup

### Backend Setup

1. **Navigate to server folder:**
```bash
cd server
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create .env file:**
Create a file named `.env` in the `server/` folder with:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/elearning
JWT_SECRET=my_super_secret_jwt_key_12345_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

**If using MongoDB Atlas, replace MONGODB_URI with:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/elearning?retryWrites=true&w=majority
```

4. **Start the backend server:**
```bash
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected Successfully
```

---

### Frontend Setup

1. **Open NEW terminal, navigate to client folder:**
```bash
cd client
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start React development server:**
```bash
npm start
```

Browser will automatically open at: http://localhost:3000

---

## Testing the Application

### 1. Register Users

**Register as Instructor:**
- Go to http://localhost:3000/register
- Name: John Instructor
- Email: instructor@test.com
- Password: 123456
- Role: Instructor

**Register as Student:**
- Logout and register again
- Name: Jane Student
- Email: student@test.com
- Password: 123456
- Role: Student

### 2. Create Course (as Instructor)
- Login as instructor
- Click "Create Course"
- Fill in details:
  - Title: "JavaScript Basics"
  - Description: "Learn JavaScript fundamentals"
  - Video URL: https://www.youtube.com/watch?v=W6NZfCO5SIk
  - Category: Programming
  - Duration: 60

### 3. Create Quiz (as Instructor)
- Click "Create Quiz"
- Add questions with multiple choice options
- Select correct answer for each

### 4. Test as Student
- Login as student
- Browse courses and enroll
- Take quizzes
- View performance

---

## Common Issues & Solutions

### Issue: "Cannot connect to MongoDB"
**Solution:**
- Ensure MongoDB service is running
- Windows: Check Services (Win+R → services.msc)
- Or use MongoDB Atlas cloud database

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Issue: "Module not found"
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "CORS errors"
**Solution:**
- Ensure backend is running on port 5000
- Check `proxy` in client/package.json is set to "http://localhost:5000"

---

## Project Structure

```
e-learning-platform/
├── server/                 # Backend
│   ├── config/            # Database config
│   ├── controllers/       # Business logic
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── middleware/        # Auth middleware
│   ├── .env              # Environment variables
│   └── server.js         # Entry point
│
├── client/                # Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API calls
│   │   ├── context/      # Auth context
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Courses
- GET `/api/courses` - Get all courses
- POST `/api/courses` - Create course (instructor only)
- GET `/api/courses/:id` - Get single course
- POST `/api/courses/:id/enroll` - Enroll in course

### Quizzes
- GET `/api/quizzes` - Get all quizzes
- POST `/api/quizzes` - Create quiz (instructor only)
- POST `/api/quizzes/submit` - Submit quiz
- GET `/api/quizzes/results` - Get user results

---

## Next Steps

1. ✅ Install prerequisites
2. ✅ Setup backend and start server
3. ✅ Setup frontend and start app
4. ✅ Register test users
5. ✅ Create sample courses and quizzes
6. ✅ Test all features

## Production Deployment

For production, you'll need:
- MongoDB Atlas (cloud database)
- Backend hosting (Heroku, Railway, Render)
- Frontend hosting (Vercel, Netlify)
- Environment variables configured
- Strong JWT secret

---

Need help? Check the console logs for detailed error messages!
