# Quick Start Guide

## 🚀 Get Started in 3 Minutes

### 1. Install Dependencies
```bash
cd client
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📧 Setup Contact Form (Optional for local testing)

The contact form requires EmailJS. You can skip this for now and set it up later when deploying.

If you want to test it locally:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Get your credentials (Service ID, Template ID, Public Key)
3. Create `.env.local` in the client folder:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🎨 Customize Your Portfolio

All your personal information is already populated! But you can customize:

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#3b82f6',    // Change to your preferred color
  secondary: '#8b5cf6',
  accent: '#06b6d4',
}
```

### Content
- **Hero Section:** `components/Hero.tsx`
- **About Me:** `components/About.tsx`
- **Projects:** `components/Projects.tsx` (add GitHub links to your projects)
- **Skills:** `components/Skills.tsx`

## 🌐 Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import repository
4. Add EmailJS environment variables
5. Deploy!

See `DEPLOYMENT.md` for detailed instructions.

## 📱 Features

✅ All your information pre-populated from resume  
✅ Responsive design (mobile, tablet, desktop)  
✅ Smooth animations with Framer Motion  
✅ Dark theme with gradient accents  
✅ Working contact form (with EmailJS)  
✅ SEO optimized  
✅ Fast loading with Next.js  

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## 📚 Documentation

- **Full Setup:** `README.md`
- **Deployment:** `DEPLOYMENT.md`
- **This Guide:** `QUICKSTART.md`

## 💡 Tips

1. **Test locally first:** Run `npm run dev` and check everything works
2. **Update project links:** Add GitHub URLs to your projects
3. **Customize colors:** Make it your own by changing the color scheme
4. **Deploy early:** Get feedback on the live version

## ❓ Need Help?

- Check `README.md` for detailed documentation
- Email: vishnubp71@gmail.com
- GitHub Issues: Create an issue in your repository

---

**Your portfolio is ready to go! 🎉**

Just run `npm run dev` and start customizing!

