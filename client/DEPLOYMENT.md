# Deployment Guide

## Free Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier)
- EmailJS account (free tier - 200 emails/month)

### Step 1: EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for free
2. **Add Email Service:**
   - Click "Email Services" → "Add New Service"
   - Choose Gmail (or your preferred provider)
   - Connect your email account
   - Copy the **Service ID**

3. **Create Email Template:**
   - Click "Email Templates" → "Create New Template"
   - Use this template:
   ```
   Subject: New Contact from {{from_name}}

   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```
   - Copy the **Template ID**

4. **Get Public Key:**
   - Go to "Account" → "API Keys"
   - Copy your **Public Key**

### Step 2: GitHub Setup

1. Create a new GitHub repository
2. Push your code:
```bash
cd client
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Step 3: Vercel Deployment

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `client` (if your Next.js app is in the client folder)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` → Your EmailJS Service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` → Your EmailJS Template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` → Your EmailJS Public Key

6. Click "Deploy"

### Step 4: Post-Deployment

1. Wait for deployment to complete (usually 2-3 minutes)
2. Vercel will provide a URL like `your-project.vercel.app`
3. Test the contact form to ensure emails are working
4. (Optional) Add a custom domain in Vercel settings

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Continuous Deployment

Once set up, Vercel will automatically deploy when you push to your GitHub repository:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Environment Variables for Local Development

Create a `.env.local` file in the client directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

⚠️ **Never commit `.env.local` to Git!** It's already in `.gitignore`.

## Troubleshooting

### Contact form not working
- Check environment variables are set correctly in Vercel
- Verify EmailJS credentials are valid
- Check browser console for errors

### Build fails on Vercel
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors
- Verify Next.js configuration

### Styling issues
- Clear browser cache
- Check Tailwind CSS configuration
- Verify all CSS files are imported

## Free Tier Limits

**Vercel:**
- 100 GB bandwidth/month
- Unlimited personal projects
- Custom domains supported

**EmailJS:**
- 200 emails/month
- 2 email templates
- 1 email service

## Support

For issues or questions:
- Email: vishnubp71@gmail.com
- GitHub: [@Vishnu-BP](https://github.com/Vishnu-BP)

