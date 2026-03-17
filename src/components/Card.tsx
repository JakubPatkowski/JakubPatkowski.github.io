import { type ReactNode } from 'react'

type CardVariant = 'default' | 'elevated' | 'bordered'

interface CardProps {
  variant?: CardVariant
  hoverable?: boolean
  className?: string
  children: ReactNode
}

interface CardSubComponentProps {
  className?: string
  children: ReactNode
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-[var(--color-bg)] dark:bg-gray-800',
  elevated: 'bg-[var(--color-bg)] dark:bg-gray-800 shadow-lg',
  bordered: 'bg-[var(--color-bg)] dark:bg-gray-800 border border-[var(--color-border)] dark:border-gray-700',
}

export function Card({ variant = 'default', hoverable = false, className = '', children }: CardProps) {
  const classes = [
    'rounded-xl overflow-hidden',
    variantClasses[variant],
    hoverable ? 'transition-transform hover:-translate-y-1 hover:shadow-xl' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}

function CardHeader({ className = '', children }: CardSubComponentProps) {
  return (
    <div className={`p-4 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  )
}

function CardBody({ className = '', children }: CardSubComponentProps) {
  return <div className={`p-4 ${className}`}>{children}</div>
}

function CardFooter({ className = '', children }: CardSubComponentProps) {
  return (
    <div className={`p-4 border-t border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  )
}

function CardImage({ src, alt, className = '' }: CardImageProps) {
  return <img src={src} alt={alt} className={`w-full h-48 object-cover ${className}`} />
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter
Card.Image = CardImage
