import Hero from '../components/Hero'
import ApplyForm from '../components/ApplyForm'
import Section from '../components/Section'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />

      <Section id="what" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">What We Are</h2>
          <p className="mt-3 text-[var(--muted)]">BrandKings builds and installs fully engineered client acquisition systems — brand strategy, conversion funnels, paid ads, content, automation, and follow-up systems all built to work together.</p>
        </div>
      </Section>

      <Section id="problem" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">The Problem</h2>
          <p className="mt-3 text-[var(--muted)]">Most businesses fail because they buy disconnected services. You get a website but no funnel, ads but no follow-up, content but no engineered sales path. We build one integrated system that handles everything.</p>
        </div>
      </Section>

      <Section id="system" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">The BrandKings System</h2>
          <p className="mt-3 text-[var(--muted)]">Activated. Automated. Running. We implement 5 phases to deliver a functioning client acquisition engine tailored to your niche.</p>
        </div>
      </Section>

      <Section id="how" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <ol className="mt-4 text-[var(--muted)] list-decimal list-inside">
            <li>Phase 1 — Market & niche analysis</li>
            <li>Phase 2 — Brand positioning</li>
            <li>Phase 3 — Funnel engineering</li>
            <li>Phase 4 — Paid traffic systems</li>
            <li>Phase 5 — Automation & optimization</li>
          </ol>
        </div>
      </Section>

      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">Apply to Work With Us</h2>
          <p className="mt-2 text-[var(--muted)]">We review applicants and deploy Day 1 after signing for the right fit.</p>
          <div className="mt-6">
            <ApplyForm />
          </div>
        </div>
      </section>
    </div>
  )
}
