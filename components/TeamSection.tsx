"use client"
import React from 'react'
import Image from 'next/image'

const team = [
  { name: 'Funnel Strategist', title: 'Designs the acquisition system' },
  { name: 'Graphic Designer', title: 'Ad creatives & landing pages' },
  { name: 'Video Editor', title: 'Reels, ads & VSLs' },
  { name: 'Social Manager', title: 'Content archetypes & growth' },
  { name: 'SEO Specialist', title: 'Inbound & search visibility' },
  { name: 'Web Developer', title: 'Funnel infrastructure' },
  { name: 'AI Engineer', title: 'Automation & chatbots' }
]

export default function TeamSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">The Team — 7 Specialists Per System</h2>
        <p className="muted mt-2">Each system is run by a focused team of specialists collaborating to deliver results.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((t) => (
            <div key={t.name} className="glass p-6 rounded-lg glass-glow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-xl font-bold">{t.name.split(' ')[0][0]}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm muted">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
