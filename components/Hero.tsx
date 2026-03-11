"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-20 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">We Build Systems That Acquire Clients For You</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">Full-stack brand growth & performance marketing agency.</p>

            <div className="mt-8 flex gap-4">
              <Link href="/apply" className="px-6 py-3 bg-primary rounded-md font-medium">Apply to Work With Us</Link>
              <a href="#how" className="px-6 py-3 border border-white/10 rounded-md text-[var(--muted)]">See How It Works</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-[var(--muted)]">
              <div className="glass p-4 rounded">
                <div className="font-semibold">7</div>
                <div className="text-[10px]">specialists per client system</div>
              </div>
              <div className="glass p-4 rounded">
                <div className="font-semibold">5</div>
                <div className="text-[10px]">phases built before client pays</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="">
            <div className="glass p-8 rounded-xl">
              <h3 className="font-semibold text-lg">Activated. Automated. Running.</h3>
              <p className="mt-3 text-[var(--muted)]">We install a complete client acquisition engine for your niche — brand, funnel, ads, content, automation.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
