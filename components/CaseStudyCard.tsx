"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudyCard({ slug, title, subtitle, image }: { slug: string; title: string; subtitle: string; image: string }) {
  return (
    <Link href={`/case-studies/${slug}`} className="block glass p-4 rounded-lg hover:scale-[1.01] transition-transform glass-glow">
      <div className="relative w-full h-44 rounded overflow-hidden mb-3">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm muted mt-1">{subtitle}</div>
    </Link>
  )
}
