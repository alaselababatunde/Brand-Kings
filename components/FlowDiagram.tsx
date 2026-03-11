import React from 'react'
import Image from 'next/image'

export default function FlowDiagram() {
  return (
    <div className="glass p-6 rounded-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="font-semibold">The BrandKings System</h3>
          <p className="muted mt-2">Traffic → Lead Capture → Conversion → Expansion → Automation</p>
          <ul className="mt-4 text-sm muted space-y-2">
            <li><strong>Traffic:</strong> Content archetypes, ads, lead magnets.</li>
            <li><strong>Lead Capture:</strong> Landing pages, funnels, CRM pipelines.</li>
            <li><strong>Conversion:</strong> Sales pages, booking, follow-up sequences.</li>
            <li><strong>Expansion:</strong> Upsells, retargeting, loyalty.</li>
            <li><strong>Automation:</strong> AI, chatbots, sequences.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/funnel-diagram.svg" alt="Funnel diagram" width={800} height={300} className="rounded" />
        </div>
      </div>
    </div>
  )
}
