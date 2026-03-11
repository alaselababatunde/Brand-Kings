import React from 'react'
import ApplyForm from '../../components/ApplyForm'

export default function ApplyPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl font-extrabold">Apply to Work With BrandKings</h1>
            <p className="muted mt-4">We accept a limited number of clients. Applications reviewed within 48 hours. Successful applicants receive a custom value sample before committing (audit, growth gap report, ad creative sample).</p>
            <div className="mt-6 glass p-6 rounded-lg glass-glow">
              <div className="font-semibold">12-Month Niche Exclusivity</div>
              <div className="muted text-sm mt-2">We only accept one client per niche within a geography to ensure exclusivity and results.</div>
            </div>
          </div>
          <div>
            <ApplyForm />
          </div>
        </div>
      </div>
    </section>
  )
}
