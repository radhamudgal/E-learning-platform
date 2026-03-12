# Complete Deployment Guide

## 🚀 Recommended Deployment Stack (Free Tier)

- **Frontend**: Vercel (Free, automatic deployments)
- **Backend**: Render (Free tier available)
- **Database**: MongoDB Atlas (Already set up)

---

## 📦 Step 1: Prepare for Deployment

### Backend Preparation

1. Create `.env.production` file in `server/`:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_production_secret_key_change_this
JWT_EXPIRE=365d
NODE_ENV=production
CLIENT_URL=https://your-frontend-url.vercel.app
```

2. Update `server/package.json` - add engines:
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0"
}
```

### Frontend Preparation

1. Create `.env.production` in `client/`:
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

2. Update API base URL in `client/src/services/api.js`

---

## 🌐 Step 2: Deploy Backend to Render

### Option A: Using Render Dashboard

1. **Sign up**: https://render.com (free with GitHub)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository

3. **Configure Service**:
   - **Name**: `elearning-backend`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

4. **Add Environment Variables**:
   - Go to "Environment" tab
   - Add all variables from `.env`:
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `JWT_EXPIRE`
     - `NODE_ENV=production`
     - `CLIENT_URL` (your Vercel URL)

5. **Deploy**: Click "Create Web Service"

6. **Copy Backend URL**: `https://elearning-backend.onrender.com`

---

## 🎨 Step 3: Deploy Frontend to Vercel

### Option A: Using Vercel Dashboard

1. **Sign up**: https://vercel.com (free with GitHub)

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project**:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

5. **Deploy**: Click "Deploy"

6. **Your App is Live**: `https://your-app.vercel.app`

---

## 🔧 Step 4: Update CORS in Backend

After deployment, update `server/server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-app.vercel.app'
  ],
  credentials: true
}));
```

Redeploy backend after this change.

---

## 📱 Alternative: Deploy Using CLI

### Backend (Render CLI)

```bash
# Install Render CLI
npm install -g render-cli

# Login
render login

# Deploy
cd server
render deploy
```

### Frontend (Vercel CLI)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd client
vercel --prod
```

---

## 🔄 Automatic Deployments

Both Vercel and Render support automatic deployments:

1. **Push to GitHub** → Automatic deployment
2. **Pull Request** → Preview deployment
3. **Merge to main** → Production deployment

---

## 🌟 Alternative Platforms

### Backend Alternatives:
- **Railway**: https://railway.app (Easy, $5/month)
- **Heroku**: https://heroku.com (Free tier removed)
- **AWS Elastic Beanstalk**: (More complex)
- **DigitalOcean App Platform**: ($5/month)

### Frontend Alternatives:
- **Netlify**: https://netlify.com (Similar to Vercel)
- **GitHub Pages**: (Static only)
- **Cloudflare Pages**: (Fast CDN)

---

## ✅ Post-Deployment Checklist

- [ ] Backend is accessible at your Render URL
- [ ] Frontend is accessible at your Vercel URL
- [ ] MongoDB Atlas is connected
- [ ] CORS is configured correctly
- [ ] Environment variables are set
- [ ] Test registration and login
- [ ] Test creating courses/quizzes
- [ ] Check browser console for errors

---

## 🐛 Common Deployment Issues

### Issue: "Cannot connect to backend"
**Solution**: 
- Check CORS settings
- Verify `REACT_APP_API_URL` in Vercel
- Check backend logs in Render

### Issue: "MongoDB connection failed"
**Solution**:
- Verify `MONGODB_URI` in Render environment variables
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0)

### Issue: "Build failed"
**Solution**:
- Check Node version compatibility
- Run `npm install` locally first
- Check build logs for specific errors

---

## 📊 Monitoring

- **Render**: Built-in logs and metrics
- **Vercel**: Analytics dashboard
- **MongoDB Atlas**: Performance monitoring

---

## 💰 Cost Estimate

- **MongoDB Atlas**: Free (M0 Sandbox)
- **Render**: Free (with limitations: sleeps after 15 min inactivity)
- **Vercel**: Free (unlimited bandwidth)

**Total**: $0/month for hobby projects! 🎉

---

## 🚀 Quick Deploy Commands

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 2. Deploy Frontend
cd client
vercel --prod

# 3. Deploy Backend
cd ../server
render deploy
```

---

Your app will be live and accessible worldwide! 🌍
