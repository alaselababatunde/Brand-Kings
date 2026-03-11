import Image from 'next/image'
import React from 'react'

export default function DogTrainer() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Dog Trainer — Case Study</h1>
        <p className="muted mt-2">68% Opt-In Rate and 3× leads in 30 days using a high-converting lead magnet and follow-up sequence.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded">
            <h3 className="font-semibold">Results</h3>
            <ul className="muted mt-3 space-y-2">
              <li>68% opt-in on lead magnet</li>
              <li>3x lead volume in first 30 days</li>
              <li>Booked calls automation — 24/7</li>
            </ul>
          </div>
          <div className="glass p-6 rounded">
            <Image src="/images/growth-chart.svg" alt="growth chart" width={600} height={300} className="rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
