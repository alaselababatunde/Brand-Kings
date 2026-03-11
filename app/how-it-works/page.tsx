import React from 'react'

const phases = [
  { title: 'Phase 1', desc: 'Market & niche analysis' },
  { title: 'Phase 2', desc: 'Brand positioning' },
  { title: 'Phase 3', desc: 'Funnel engineering' },
  { title: 'Phase 4', desc: 'Paid traffic systems' },
  { title: 'Phase 5', desc: 'Automation & optimization' }
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold">How It Works</h1>
        <div className="mt-6 space-y-4">
          {phases.map(p => (
            <div key={p.title} className="glass p-4 rounded">
              <div className="font-semibold">{p.title} — {p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
