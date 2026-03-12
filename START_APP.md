# How to Run the Complete App

## Method 1: Run Both Together (Recommended) ⚡

### First Time Setup:
```bash
# Install all dependencies (root, server, and client)
npm run install-all
```

### Start Both Frontend & Backend:
```bash
# Run this command from the root folder
npm run dev
```

This will start:
- ✅ Backend on http://localhost:5000
- ✅ Frontend on http://localhost:3000

---

## Method 2: Run Separately (Two Terminals)

### Terminal 1 - Backend:
```bash
cd server
npm install
npm run dev
```

### Terminal 2 - Frontend:
```bash
cd client
npm install
npm start
```

---

## Quick Start Commands

```bash
# Install everything
npm run install-all

# Run both servers
npm run dev

# Run only backend
npm run server

# Run only frontend
npm run client
```

---

## Before Running:

1. ✅ Make sure MongoDB is installed and running
2. ✅ Check `server/.env` file exists with correct settings
3. ✅ Node.js is installed

---

## Troubleshooting:

### "concurrently not found"
```bash
npm install
```

### "Port already in use"
```bash
# Kill port 3000
npx kill-port 3000

# Kill port 5000
npx kill-port 5000
```

### "Cannot connect to MongoDB"
- Start MongoDB service
- Or use MongoDB Atlas cloud database

---

## What Happens When You Run `npm run dev`:

1. Backend starts on port 5000
2. Frontend starts on port 3000
3. Browser opens automatically
4. Both run in the same terminal with colored output
5. Press Ctrl+C to stop both

---

## First Time User Flow:

1. Run `npm run install-all`
2. Start MongoDB
3. Run `npm run dev`
4. Go to http://localhost:3000
5. Register as Instructor
6. Create courses and quizzes
7. Register as Student (different email)
8. Enroll and take quizzes

Enjoy! 🚀
