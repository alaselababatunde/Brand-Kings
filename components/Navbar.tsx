"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="glass py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="BrandKings" width={44} height={44} className="rounded" />
          <div>
            <div className="text-lg font-bold">BrandKings</div>
            <div className="text-xs text-[var(--muted)]">Activated. Automated. Running.</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-sm text-[var(--muted)] hover:text-white">About</Link>
          <Link href="/services" className="text-sm text-[var(--muted)] hover:text-white">Services</Link>
          <Link href="/case-studies" className="text-sm text-[var(--muted)] hover:text-white">Case Studies</Link>
          <Link href="/how-it-works" className="text-sm text-[var(--muted)] hover:text-white">How It Works</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/apply" className="px-4 py-2 bg-primary rounded-md text-sm font-medium">Apply</Link>
        </div>
      </div>
    </nav>
  )
}
