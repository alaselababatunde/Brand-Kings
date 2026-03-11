import React from 'react'
import ApplyForm from '../../components/ApplyForm'

export default function ApplyPage() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold">Apply to Work With BrandKings</h1>
        <p className="mt-3 text-[var(--muted)]">Fill out the application — we accept a limited number of clients and offer 12-month niche exclusivity.</p>
        <div className="mt-6">
          <ApplyForm />
        </div>
      </div>
    </section>
  )
}
