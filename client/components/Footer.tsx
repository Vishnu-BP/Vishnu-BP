'use client'

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Vishnu B P</h3>
            <p className="text-gray-400">
              Data Engineer & Full Stack Developer passionate about building scalable solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="grid grid-cols-3 gap-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-accent transition-colors text-left w-full"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Vishnu-BP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-bp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:vishnubp71@gmail.com"
                className="text-2xl text-gray-400 hover:text-accent transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              vishnubp71@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Vishnu B P. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

