import Hero from '../components/Hero'
import ApplyForm from '../components/ApplyForm'
import Section from '../components/Section'
import StatsCounter from '../components/StatsCounter'
import TeamSection from '../components/TeamSection'
import FlowDiagram from '../components/FlowDiagram'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero />

      <Section id="what" className="py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Your Business Needs A Client Acquisition System — Not Another Agency</h2>
            <p className="muted mt-4">BrandKings builds and installs fully engineered client acquisition systems — brand strategy, funnels, paid ads, content, automation and follow-up systems all built to work together and acquire clients automatically.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <StatsCounter number={7} label={"Specialists per client system"} />
              <StatsCounter number={5} label={"Phases built before you pay"} />
              <StatsCounter number={0} label={"Hours required to run system"} />
              <StatsCounter number={1} label={"Day 1 deployment"} />
            </div>
          </div>

          <div>
            <img src="/images/hero-agency.svg" alt="Agency cinematic" className="w-full rounded-lg shadow-lg" />
          </div>
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
          <FlowDiagram />
        </div>
      </Section>

      <Section id="how" className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <ol className="mt-4 text-[var(--muted)] list-decimal list-inside space-y-3">
            <li>Phase 1 — Market & niche analysis</li>
            <li>Phase 2 — Brand positioning</li>
            <li>Phase 3 — Funnel engineering</li>
            <li>Phase 4 — Paid traffic systems</li>
            <li>Phase 5 — Automation & optimization</li>
          </ol>
        </div>
      </Section>

      <TeamSection />

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
