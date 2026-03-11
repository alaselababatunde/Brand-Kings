import React from 'react'

const services = [
  'Client acquisition system design',
  'Paid ads infrastructure',
  'Sales funnels',
  'Conversion optimization',
  'Brand positioning',
  'Automation systems',
  'Content distribution'
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold">Services</h1>
        <p className="mt-3 text-[var(--muted)]">We don't sell services — we build systems that run.</p>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(s => (
            <li key={s} className="glass p-4 rounded">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
