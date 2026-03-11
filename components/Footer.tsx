import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 py-12">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-xl font-bold">BrandKings</div>
          <div className="text-sm text-[var(--muted)] mt-1">Activated. Automated. Running.</div>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <div>Phone: +2349078239676</div>
          <div className="mt-2 flex gap-3">
            <Link href="https://www.tiktok.com/@brandk1ngs" className="hover:text-white">TikTok</Link>
            <Link href="https://www.instagram.com/brandkings__/" className="hover:text-white">Instagram</Link>
            <Link href="https://www.facebook.com/people/Brand-King/pfbid02iidCjQzjahXjRRPPKMUnNZA7SJCmT9ho3wEQNmgn8Hd8zHriBkDUqXnoPQKNzUuul/" className="hover:text-white">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
