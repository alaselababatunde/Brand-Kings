"use client"
import React from 'react'

export default function Button({ children, className = '', ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} className={`px-5 py-2 rounded-md bg-gradient-to-br from-primary to-accent shadow-md text-sm font-semibold ${className}`}>
      {children}
    </button>
  )
}
