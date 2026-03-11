import Image from 'next/image'
import React from 'react'

export default function FitnessCoach() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Fitness Coach — Lagos</h1>
        <p className="muted mt-2">4.2× Organic Reach — 12,000 monthly profile visits in 90 days. Niche content engine and automated booking.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-lg">
            <h3 className="font-semibold">Deliverables</h3>
            <ul className="muted mt-3 space-y-2">
              <li>Full funnel build: Traffic → Lead Capture → Conversion → Follow-up</li>
              <li>Analytics dashboard and weekly reports</li>
              <li>Automated booking system & CRM integration</li>
            </ul>
          </div>
          <div className="glass p-6 rounded-lg">
            <Image src="/images/analytics-dashboard.svg" alt="analytics" width={700} height={300} className="rounded" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded">
            <div className="text-3xl font-extrabold">4.2×</div>
            <div className="muted">Organic Reach</div>
          </div>
          <div className="glass p-6 rounded">
            <div className="text-3xl font-extrabold">12k</div>
            <div className="muted">Monthly Profile Visits</div>
          </div>
          <div className="glass p-6 rounded">
            <div className="text-3xl font-extrabold">90 days</div>
            <div className="muted">Timeframe</div>
          </div>
        </div>
      </div>
    </section>
  )
}
