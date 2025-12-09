import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vishnu B P | Data Engineer & Full Stack Developer',
  description: 'Portfolio of Vishnu B P - Computer Science Engineering student specializing in data pipelines, AI/ML, and full-stack development',
  keywords: ['Data Engineer', 'Full Stack Developer', 'React', 'Python', 'AI/ML', 'Next.js'],
  authors: [{ name: 'Vishnu B P' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Vishnu B P | Portfolio',
    description: 'Data Engineer & Full Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-darker text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}

