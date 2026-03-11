import React from 'react'

export default function Fitflux() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Fitflux — Systems for Fitness & Wellness</h1>
        <p className="muted mt-3">Lead magnet funnels, discovery call booking automation, transformation content engines and retargeting systems for coaches and gyms.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded">
            <h3 className="font-semibold">Core Solutions</h3>
            <ul className="muted mt-3 space-y-2">
              <li>Lead magnet & challenge funnels</li>
              <li>Automated booking & onboarding sequences</li>
              <li>Retention systems and upsell funnels</li>
            </ul>
          </div>
          <div className="glass p-6 rounded">
            <p className="muted">Custom creative packages and analytics dashboards optimized for fitness businesses.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
