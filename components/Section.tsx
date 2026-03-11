"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      {children}
    </motion.section>
  )
}
