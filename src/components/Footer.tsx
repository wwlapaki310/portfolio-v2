import Link from 'next/link'
import { Glass } from '@/components/ui/Glass'
import { StaticButton } from '@/components/ui/Button'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Works', href: '/works' },
  { name: 'Blog', href: '/blog' },
  { name: 'Slides', href: '/slides' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'GitHub', href: '#', icon: '🐙' },
  { name: 'Email', href: 'mailto:contact@satoruakita.dev', icon: '📧' },
  { name: 'Twitter', href: '#', icon: '🐦' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <Glass variant="dark" className="backdrop-blur-xl">
          <div className="container-custom py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gradient-teal mb-3">
                    Satoru Akita
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    AI Engineer at Sony Semiconductor Solutions
                  </p>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    Bridging the gap between cutting-edge AI research and real-world applications. 
                    From molecular robotics to edge AI sensing platforms.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-orange">5+</div>
                    <div className="text-sm text-gray-400">Awards Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-teal">10+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient-orange">2+</div>
                    <div className="text-sm text-gray-400">Publications</div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Explore</h4>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-teal-400 transition-colors duration-300 flex items-center group"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact & Social */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
                
                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex items-center gap-3 p-3 glass rounded-lg hover-lift transition-all duration-300 hover:bg-white/10 group"
                      aria-label={social.name}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                      <span className="text-sm text-gray-300">{social.name}</span>
                    </a>
                  ))}
                </div>
                
                {/* CTA */}
                <StaticButton variant="primary" size="sm" className="w-full">
                  Get In Touch
                </StaticButton>
              </div>
            </div>
          </div>
        </Glass>
        
        {/* Copyright Bar */}
        <div className="bg-black/50 backdrop-blur-sm border-t border-white/10">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Satoru Akita. All rights reserved.
              </div>
              
              {/* Tech Stack Badge */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Built with</span>
                <span className="px-2 py-1 bg-gradient-teal text-white rounded">Next.js</span>
                <span className="px-2 py-1 bg-gradient-orange text-white rounded">TypeScript</span>
                <span className="px-2 py-1 bg-purple-500 text-white rounded">Tailwind</span>
              </div>
              
              {/* Theme Toggle */}
              <span className="p-2 glass rounded-lg">
                <span className="text-lg">🌙</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
