import React from 'react'

export default function Petlang() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Petlang — Systems for Pet Businesses</h1>
        <p className="muted mt-3">Acquisition systems for pet trainers, groomers and vets — appointment automation, referral systems, content engines.</p>

        <div className="mt-8 glass p-6 rounded">
          <h3 className="font-semibold">Features</h3>
          <ul className="muted mt-3 space-y-2">
            <li>Automated appointment bookings and reminders</li>
            <li>Nurture sequences for new leads and referrals</li>
            <li>Video-first content strategies for local reach</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
