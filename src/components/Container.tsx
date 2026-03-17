import { type ReactNode } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: ReactNode
}

const sizeClasses: Record<ContainerSize, string> = {
  sm:  'max-w-3xl',   // 768px
  md:  'max-w-4xl',   // 896px
  lg:  'max-w-5xl',   // 1024px
  xl:  'max-w-6xl',   // 1152px
  '2xl': 'max-w-7xl', // 1280px
}

export function Container({ size = 'xl', className = '', children }: ContainerProps) {
  // px scales with screen width
  const classes = [
    'mx-auto px-4 sm:px-6 lg:px-8 xl:px-12',
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={classes}>{children}</div>
}
