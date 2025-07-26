import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'teal' | 'orange'
  blur?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const Glass = forwardRef<HTMLDivElement, GlassProps>(
  ({ className, variant = 'light', blur = 'md', children, ...props }, ref) => {
    const baseClasses = 'backdrop-filter backdrop-blur-lg border'
    
    const variants = {
      light: 'bg-white/20 border-white/30 text-gray-900 dark:text-white',
      dark: 'bg-black/20 border-white/20 text-white',
      teal: 'bg-teal-500/20 border-teal-300/40 text-teal-900 dark:text-teal-100',
      orange: 'bg-orange-500/20 border-orange-300/40 text-orange-900 dark:text-orange-100'
    }
    
    const blurLevels = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl'
    }
    
    const classes = cn(
      baseClasses,
      variants[variant],
      blurLevels[blur],
      'rounded-lg shadow-lg',
      className
    )
    
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

Glass.displayName = 'Glass'

interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const GlassContainer = forwardRef<HTMLDivElement, GlassContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('glass rounded-xl p-6', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassContainer.displayName = 'GlassContainer'

interface GlassNavProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  isScrolled?: boolean
}

const GlassNav = forwardRef<HTMLElement, GlassNavProps>(
  ({ className, children, isScrolled = false, ...props }, ref) => {
    const classes = cn(
      'nav-glass',
      isScrolled && 'scrolled',
      className
    )
    
    return (
      <nav className={classes} ref={ref} {...props}>
        {children}
      </nav>
    )
  }
)

GlassNav.displayName = 'GlassNav'

export { Glass, GlassContainer, GlassNav }
