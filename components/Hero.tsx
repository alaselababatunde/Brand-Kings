"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-agency.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">We Build Systems That Acquire Clients For You</h1>
            <p className="mt-4 text-lg text-gray-300">BrandKings builds fully engineered <span className="font-semibold">client acquisition systems</span> that automatically bring clients to your business.</p>

            <div className="mt-8 flex gap-4">
              <Link href="/apply" className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark">Apply to Work With Us</Link>
              <a href="#how" className="px-6 py-3 border border-white/10 rounded-md text-gray-300 hover:text-white">See How It Works</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="glass p-4 rounded">
                <div className="text-3xl font-bold text-white">7</div>
                <div className="text-xs">Specialists Per Client System</div>
              </div>
              <div className="glass p-4 rounded">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-xs">Phases Built Before Payment</div>
              </div>
              <div className="glass p-4 rounded">
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-xs">Day 1 Deployment</div>
              </div>
              <div className="glass p-4 rounded">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-xs">Month Niche Exclusivity</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-3xl opacity-50"></div>
              <div className="glass p-8 rounded-xl relative z-10">
                <h3 className="font-semibold text-lg text-white">Activated. Automated. Running.</h3>
                <p className="mt-3 text-gray-300">We install a complete client acquisition engine for your niche — brand, funnel, ads, content, automation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
