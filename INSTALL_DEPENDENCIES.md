# Install New Dependencies

## Quick Fix - Run This Command:

```bash
cd server
npm install helmet compression express-mongo-sanitize express-rate-limit
```

## Or Install Everything:

```bash
# From root folder
npm run install-all
```

## What These Packages Do:

- **helmet**: Security headers protection
- **compression**: Reduces response size by 70%
- **express-mongo-sanitize**: Prevents MongoDB injection
- **express-rate-limit**: Traffic management & rate limiting

## After Installation:

```bash
npm run dev
```

Server should start successfully! ✅
