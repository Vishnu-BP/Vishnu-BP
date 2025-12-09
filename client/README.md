# Vishnu B P - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-first approach
- 📧 Working contact form with EmailJS
- 🎯 Smooth scroll navigation
- 🌐 SEO optimized
- ⚡ Fast performance with Next.js 15

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Service:** EmailJS
- **Icons:** React Icons
- **Language:** TypeScript

## 📋 Prerequisites

- Node.js 18+ and npm/yarn

## 🔧 Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd client
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📧 EmailJS Setup

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## 🚀 Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
5. Deploy!

## 📁 Project Structure

```
client/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Technical skills
│   ├── Education.tsx    # Education timeline
│   ├── Certifications.tsx
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── public/              # Static assets
└── ...config files
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: '#3b82f6',    // Blue
  secondary: '#8b5cf6',  // Purple
  accent: '#06b6d4',     // Cyan
  dark: '#0f172a',
  darker: '#020617',
}
```

### Content
Update your personal information in the respective component files:
- Hero section: `components/Hero.tsx`
- About: `components/About.tsx`
- Projects: `components/Projects.tsx`
- etc.

## 📝 License

MIT

## 👤 Author

**Vishnu B P**

- Email: vishnubp71@gmail.com
- LinkedIn: [linkedin.com/in/vishnu-bp](https://www.linkedin.com/in/vishnu-bp/)
- GitHub: [github.com/Vishnu-BP](https://github.com/Vishnu-BP)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with Next.js, Tailwind CSS, and Framer Motion
- Contact form powered by EmailJS

