import { HTMLAttributes } from 'react'

interface WashiTapeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'peach' | 'rose' | 'white';
}

export function WashiTape({ color = 'peach', className = '', ...props }: WashiTapeProps) {
  return (
    <span 
      className={`washi-tape washi-tape-${color} ${className}`}
      {...props}
    />
  )
}