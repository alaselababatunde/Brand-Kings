"use client"
import React, { useState } from 'react'

export default function ApplyForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')

  return (
    <form
      className="glass p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('sent'), 1000);
      }}
      aria-label="Application form to work with BrandKings"
    >
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Full Name</span>
        <input aria-label="Full name" required name="name" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Company Name</span>
        <input required name="company" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col md:col-span-2">
        <span className="text-sm text-[var(--muted)]">Website</span>
        <input name="website" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Monthly Revenue</span>
        <input name="revenue" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Industry</span>
        <input name="industry" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col md:col-span-2">
        <span className="text-sm text-[var(--muted)]">Biggest marketing challenge</span>
        <textarea aria-label="Biggest marketing challenge" name="challenge" rows={4} className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Budget</span>
        <input name="budget" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Contact Email</span>
        <input required name="email" type="email" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>
      <label className="flex flex-col">
        <span className="text-sm text-[var(--muted)]">Phone Number</span>
        <input name="phone" className="mt-2 p-3 rounded bg-transparent border border-white/6" />
      </label>

      <div className="md:col-span-2">
        <button type="submit" className="w-full py-3 bg-primary rounded-md font-semibold">{status === 'sending' ? 'Sending...' : 'Apply to Work With BrandKings'}</button>
        {status === 'sent' && <div className="text-sm text-green-400 mt-3">Application submitted — we'll review and contact you.</div>}
      </div>
    </form>
  )
}
