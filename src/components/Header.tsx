'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GlassNav } from '@/components/ui/Glass'
import { StaticButton } from '@/components/ui/Button'
import { ThemeToggle, ThemeToggleMobile } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

// Simplified Navigation (Issue #2 Phase 2: Site Simplification)
const navigation = [
  { name: 'Works', href: '/works' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <GlassNav isScrolled={isScrolled}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gradient-teal hover-lift transition-all duration-300"
          >
            Satoru Akita
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-semibold transition-all duration-300 group',
                    'hover:text-teal-600 dark:hover:text-teal-400',
                    isActive
                      ? 'text-teal-600 dark:text-teal-400'
                      : 'text-gray-700 dark:text-gray-300'
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-teal rounded-full"></span>
                  )}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-teal rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Simple Contact Button */}
            <StaticButton 
              variant="ghost" 
              size="sm"
              className="text-sm font-semibold"
              href="mailto:wwlap24@gmail.com"
            >
              Contact
            </StaticButton>
            
            {/* Theme Toggle Button - Enhanced for Issue #2 */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass hover-lift focus:outline-none focus:ring-2 focus:ring-teal-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                'w-4 h-0.5 bg-current transition-all duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              )}></span>
              <span className={cn(
                'w-4 h-0.5 bg-current transition-all duration-300 mt-1',
                isMobileMenuOpen ? 'opacity-0' : ''
              )}></span>
              <span className={cn(
                'w-4 h-0.5 bg-current transition-all duration-300 mt-1',
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              )}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      <div className={cn(
        'md:hidden glass-dark transition-all duration-300 overflow-hidden',
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <div className="container-custom py-4 space-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300',
                  'hover:bg-white/10',
                  isActive
                    ? 'bg-gradient-teal text-white'
                    : 'text-gray-300'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          })}
          
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <StaticButton 
              variant="glass" 
              size="sm" 
              className="flex-1 mr-2"
              href="mailto:wwlap24@gmail.com"
            >
              Contact
            </StaticButton>
            <ThemeToggleMobile />
          </div>
        </div>
      </div>
    </GlassNav>
  )
}
