import Image from 'next/image'
import React from 'react'

export default function PestControl() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Pest Control Business — Case Study</h1>
        <p className="muted mt-2">52% close rate and 2.8× revenue growth after conversion page and follow-up automation rebuild.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded">
            <h3 className="font-semibold">What We Delivered</h3>
            <ul className="muted mt-3 space-y-2">
              <li>Conversion page optimization</li>
              <li>Follow-up automation with CRM integration</li>
              <li>Retargeting and expansion funnels</li>
            </ul>
          </div>
          <div className="glass p-6 rounded">
            <Image src="/images/phone-leads.svg" alt="phone leads" width={300} height={600} className="rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
