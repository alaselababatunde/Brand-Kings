"use client"
import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type SectionProps = HTMLMotionProps<'section'> & {
  className?: string
  children: React.ReactNode
}

export default function Section({ children, className = '', ...rest }: SectionProps) {
  return (
    <motion.section {...rest} className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {children}
    </motion.section>
  )
}
