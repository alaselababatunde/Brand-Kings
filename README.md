# BrandKings — Site

This repository is a production-ready Next.js (App Router) TypeScript starter for the BrandKings agency website.

Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Responsive, dark, premium design

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Notes

- Place your company logo at `public/logo.png` (a logo is already present in the repo root — copy it to `public/` for Next.js to serve it).
- Tailwind is set up in `tailwind.config.js` and global styles live in `app/globals.css`.
- The project uses `app/` routes (App Router). Pages include `/, /about, /services, /how-it-works, /case-studies, /apply, /contact`.
- For premium Shadcn UI components, run `npx shadcn-ui@latest init` in the project and follow their install guide — components are currently implemented in Tailwind for portability.

Deployment

- This project is Vercel-ready. Push to GitHub and import into Vercel, or run `vercel --prod`.

Push to GitHub (example)

1. Initialize git and commit:

```bash
git init
git add .
git commit -m "chore: initial BrandKings site"
```

2a. If you already created a GitHub repo, add it and push:

```bash
git remote add origin https://github.com/your-username/brandkings-site.git
git branch -M main
git push -u origin main
```

2b. Or create a repo from the command line (uses GitHub CLI):

```bash
gh repo create brandkings-site --public --source=. --remote=origin --push
```

Vercel

- After the repo is on GitHub, import the repository into Vercel for automatic deployments. Ensure `NEXT_PUBLIC_` env vars are set in Vercel for production secrets.


Accessibility & Performance

- Images are lazy-loaded using `next/image`.
- Forms are accessible with labels and clear focus states.
