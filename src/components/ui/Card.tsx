import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'dark' | 'gradient'
  effect?: 'none' | 'hover' | '3d' | 'float'
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', effect = 'hover', children, ...props }, ref) => {
    const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300'
    
    const variants = {
      default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md',
      glass: 'glass',
      dark: 'bg-gray-900 border border-gray-700 shadow-lg',
      gradient: 'bg-gradient-teal text-white shadow-lg'
    }
    
    const effects = {
      none: '',
      hover: 'hover-lift',
      '3d': 'card-3d',
      float: 'float'
    }
    
    const classes = cn(
      baseClasses,
      variants[variant],
      effects[effect],
      className
    )
    
    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pb-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-0', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-6 pt-4 mt-auto', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
