"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function useCounter(target: number, duration = 1200, start = 0, inView = true) {
  const [value, setValue] = useState(start)
  useEffect(() => {
    if (!inView) return
    let startTime: number | null = null
    const step = (t: number) => {
      if (!startTime) startTime = t
      const progress = Math.min((t - startTime) / duration, 1)
      setValue(Math.floor(start + (target - start) * progress))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, inView, start])
  return value
}

export default function StatsCounter({ number, label }: { number: number; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const value = useCounter(number, 1400, 0, inView)

  return (
    <div ref={ref as any} className="glass p-6 rounded-lg text-center glass-glow">
      <div className="text-4xl font-extrabold">{value}{number >= 1000 ? '+' : ''}</div>
      <div className="text-sm muted mt-2">{label}</div>
    </div>
  )
}
