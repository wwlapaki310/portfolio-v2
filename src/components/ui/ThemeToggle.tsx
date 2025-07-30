'use client'

import { useTheme } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    // Cycle through: light → dark → system
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return '🖥️' // System icon
    }
    return resolvedTheme === 'dark' ? '🌙' : '☀️'
  }

  const getLabel = () => {
    if (theme === 'system') {
      return `System (${resolvedTheme})`
    }
    return theme === 'dark' ? 'Dark mode' : 'Light mode'
  }

  return (
    <button
      className={cn(
        'p-2 rounded-lg glass hover-lift transition-all duration-300',
        'hover:bg-white/10 dark:hover:bg-white/5',
        'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50',
        className
      )}
      onClick={handleToggle}
      aria-label={`Toggle theme. Current: ${getLabel()}`}
      title={getLabel()}
    >
      <span className="text-lg select-none">{getIcon()}</span>
    </button>
  )
}

// Mobile version with text
export function ThemeToggleMobile({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return '🖥️'
    }
    return resolvedTheme === 'dark' ? '🌙' : '☀️'
  }

  const getLabel = () => {
    if (theme === 'system') {
      return 'System'
    }
    return theme === 'dark' ? 'Dark' : 'Light'
  }

  return (
    <button
      className={cn(
        'flex items-center gap-2 p-3 rounded-lg glass hover-lift transition-all duration-300',
        'hover:bg-white/10',
        'focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50',
        className
      )}
      onClick={handleToggle}
      aria-label={`Toggle theme. Current: ${getLabel()}`}
    >
      <span className="text-lg select-none">{getIcon()}</span>
      <span className="text-sm font-medium">{getLabel()}</span>
    </button>
  )
}
