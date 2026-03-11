import React from 'react'
import CaseStudyCard from '../../components/CaseStudyCard'

const studies = [
  { slug: 'fitness-coach', title: 'Fitness Coach (Lagos)', subtitle: '4.2× Organic Reach — 12,000 monthly visits', image: '/images/analytics-dashboard.svg' },
  { slug: 'dog-trainer', title: 'Dog Trainer', subtitle: '68% Opt-In Rate — 3× Leads in 30 Days', image: '/images/growth-chart.svg' },
  { slug: 'pest-control', title: 'Pest Control Business', subtitle: '52% Close Rate — 2.8× Revenue Growth', image: '/images/phone-leads.svg' }
]

export default function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Case Studies — Proof of Work</h1>
        <p className="muted mt-3">Real systems we deployed with measurable outcomes — dashboards, charts and automated workflows.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map(s => (
            <CaseStudyCard key={s.slug} slug={s.slug} title={s.title} subtitle={s.subtitle} image={s.image} />
          ))}
        </div>
      </div>
    </section>
  )
}
