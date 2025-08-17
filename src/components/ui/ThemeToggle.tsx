'use client'

import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    // Simple toggle: light ↔ dark (removed system option for simplicity)
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const getIcon = () => {
    return resolvedTheme === 'dark' ? '☀️' : '🌙'
  }

  const getLabel = () => {
    return resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  }

  return (
    <button
      className={cn(
        // Enhanced styling for Issue #2 - better contrast and visibility
        'relative p-3 rounded-xl glass hover-lift transition-all duration-300',
        'hover:bg-teal-500/10 dark:hover:bg-teal-400/10',
        'border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20',
        'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50',
        'shadow-md hover:shadow-lg active:scale-95',
        'min-w-[44px] min-h-[44px]', // Accessibility: minimum touch target
        className
      )}
      onClick={handleToggle}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {/* Icon with enhanced visibility */}
      <span 
        className="text-xl select-none transition-transform duration-300 hover:scale-110"
        role="img"
        aria-label={resolvedTheme === 'dark' ? 'Sun icon' : 'Moon icon'}
      >
        {getIcon()}
      </span>
      
      {/* Subtle indicator dot */}
      <div className={cn(
        'absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 transition-colors duration-300',
        resolvedTheme === 'dark' 
          ? 'bg-blue-500' 
          : 'bg-amber-500'
      )} />
    </button>
  )
}

// Enhanced Mobile version with better UX
export function ThemeToggleMobile({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const getIcon = () => {
    return resolvedTheme === 'dark' ? '☀️' : '🌙'
  }

  const getLabel = () => {
    return resolvedTheme === 'dark' ? 'Light mode' : 'Dark mode'
  }

  const getDescription = () => {
    return resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  }

  return (
    <button
      className={cn(
        // Enhanced mobile styling
        'flex items-center justify-between w-full p-4 rounded-xl glass hover-lift transition-all duration-300',
        'hover:bg-teal-500/10 dark:hover:bg-teal-400/10',
        'border border-transparent hover:border-teal-500/20 dark:hover:border-teal-400/20',
        'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50',
        'shadow-md hover:shadow-lg active:scale-95',
        'min-h-[56px]', // Larger touch target for mobile
        className
      )}
      onClick={handleToggle}
      aria-label={getDescription()}
    >
      <div className="flex items-center gap-3">
        <span 
          className="text-xl select-none transition-transform duration-300"
          role="img"
          aria-label={resolvedTheme === 'dark' ? 'Sun icon' : 'Moon icon'}
        >
          {getIcon()}
        </span>
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {getLabel()}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            {getDescription()}
          </div>
        </div>
      </div>
      
      {/* Toggle switch indicator */}
      <div className={cn(
        'relative w-12 h-6 rounded-full transition-colors duration-300',
        resolvedTheme === 'dark' 
          ? 'bg-blue-500' 
          : 'bg-amber-500'
      )}>
        <div className={cn(
          'absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300',
          resolvedTheme === 'dark' 
            ? 'translate-x-6' 
            : 'translate-x-0.5'
        )} />
      </div>
    </button>
  )
}

// Simplified system detection hook for improved reliability
export function useSystemTheme() {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Initial system theme detection
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light')

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return systemTheme
}
