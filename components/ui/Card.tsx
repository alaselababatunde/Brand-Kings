import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass p-4 rounded-lg ${className}`}>
      {children}
    </div>
  )
}
