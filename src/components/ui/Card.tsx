import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const Card = ({ children, className, padding = 'md', hover = false }: CardProps) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200'
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverEffect = hover ? 'hover:shadow-md transition-shadow duration-200' : ''

  return (
    <div className={cn(baseClasses, paddings[padding], hoverEffect, className)}>
      {children}
    </div>
  )
}

export default Card 