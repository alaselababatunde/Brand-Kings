import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'BrandKings — Client Acquisition Systems',
  description: 'BrandKings builds activated, automated client acquisition systems that run for your niche.',
  openGraph: {
    title: 'BrandKings — Client Acquisition Systems',
    description: 'We build activated, automated client acquisition systems that acquire clients for your niche.',
    url: 'https://your-domain.com',
    siteName: 'BrandKings',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'BrandKings logo'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrandKings — Client Acquisition Systems',
    description: 'Activated. Automated. Running.'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
