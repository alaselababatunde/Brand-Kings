import React from 'react'
import CaseStudyCard from '../../components/CaseStudyCard'
import { motion } from 'framer-motion'

const studies = [
  { slug: 'fitness-coach', title: 'Fitness Coach (Lagos)', subtitle: '4.2× Organic Reach — 12,000 monthly visits', image: '/images/analytics-dashboard.svg' },
  { slug: 'dog-trainer', title: 'Dog Trainer', subtitle: '68% Opt-In Rate — 3× Leads in 30 Days', image: '/images/growth-chart.svg' },
  { slug: 'pest-control', title: 'Pest Control Business', subtitle: '52% Close Rate — 2.8× Revenue Growth', image: '/images/phone-leads.svg' }
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl font-extrabold">Case Studies — Proof of Work</h1>
          <p className="muted mt-3 text-gray-400">Real systems we deployed with measurable outcomes — dashboards, charts, and automated workflows.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map(s => (
            <CaseStudyCard key={s.slug} slug={s.slug} title={s.title} subtitle={s.subtitle} image={s.image} />
          ))}
        </motion.div>

        <div className="mt-16">
          <motion.img 
            src="/images/growth-chart.svg" 
            alt="Growth Chart" 
            className="w-full rounded-lg shadow-lg" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  )
}
