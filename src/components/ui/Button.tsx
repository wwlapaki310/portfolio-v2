import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  animate?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    href, 
    animate = true,
    ...props 
  }, ref) => {
    const baseClasses = 'btn focus:ring-teal'
    
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      ghost: 'btn-ghost',
      glass: 'glass text-white bg-gradient-teal border-0'
    }
    
    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    const animationClasses = animate ? 'ripple hover-lift' : ''
    
    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      animationClasses,
      className
    )
    
    if (href) {
      return (
        <a 
          href={href}
          className={classes}
          role="button"
        >
          {children}
        </a>
      )
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Static version for server components
export function StaticButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  href, 
  className 
}: {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  className?: string
}) {
  const baseClasses = 'btn focus:ring-teal'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    ghost: 'btn-ghost',
    glass: 'glass text-white bg-gradient-teal border-0'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    'hover-lift',
    className
  )
  
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        role="button"
      >
        {children}
      </a>
    )
  }
  
  return (
    <span className={classes}>
      {children}
    </span>
  )
}

export { Button }
