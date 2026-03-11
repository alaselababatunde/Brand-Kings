import React from 'react'

export default function Foodlas() {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-extrabold">Foodlas — Client Acquisition Systems for Restaurants</h1>
        <p className="muted mt-3">Tailored systems for restaurants, cloud kitchens and food brands — table booking, repeat order automation, local SEO and ads.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded">
            <h3 className="font-semibold">What We Build</h3>
            <ul className="muted mt-3 space-y-2">
              <li>Table booking funnels & reservation automation</li>
              <li>Repeat order & loyalty automation</li>
              <li>Local SEO and targeted ad campaigns</li>
            </ul>
          </div>
          <div className="glass p-6 rounded">
            <p className="muted">Ready-made landing templates and analytics dashboards specific to food businesses.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
