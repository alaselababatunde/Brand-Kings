import React from 'react'

const studies = [
  { name: 'Ecom Boost', result: '4x ROAS within 60 days' },
  { name: 'SaaS Scale', result: '200% MRR growth in 6 months' },
  { name: 'Local Leads', result: 'Booked 120 qualified calls/month' }
]

export default function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold">Case Studies</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map(s => (
            <div key={s.name} className="glass p-6 rounded">
              <div className="font-semibold">{s.name}</div>
              <div className="mt-2 text-[var(--muted)]">{s.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
