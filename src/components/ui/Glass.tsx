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
      light: 'bg-white/75 border-white/50 text-gray-900 dark:bg-black/75 dark:border-white/30 dark:text-white',
      dark: 'bg-black/60 border-white/30 text-white',
      teal: 'bg-teal-500/80 border-teal-300/60 text-white',
      orange: 'bg-orange-500/80 border-orange-300/60 text-white'
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
        className={cn('glass-light rounded-xl p-6', className)}
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
