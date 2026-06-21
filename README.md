# Austin Di Nezza Advanced Portfolio

Employer-facing portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and backend API routes.

## What it includes

- Home, About, Projects, Skills, Blog, Contact
- Downloadable PDF CV
- Privacy Policy, Cookie Policy, Terms of Use, Legal Notice
- Live GitHub project explorer powered by `/api/github/repos`
- Curated featured projects merged with GitHub repo metadata
- Rule-based "Ask Austin AI" assistant
- Validated contact form API route

## Core idea

This portfolio is designed to look polished enough for employers while still proving real technical capability. The project section is backed by a live GitHub fetch so new public repositories can appear automatically after they are pushed.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Zod
- GitHub REST API

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Create `.env.local` from `.env.example` if needed:

```env
GITHUB_USERNAME=austin56moto-crypto
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`GITHUB_TOKEN` is optional, but recommended in production to reduce GitHub API rate-limit issues.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run generate:cv
```

## Notes

- The GitHub explorer merges live repo data with `data/project-overrides.json`.
- The chatbot uses `data/austin-knowledge-base.json`.
- The downloadable CV is generated to `public/documents/Austin-Di-Nezza-CV.pdf`.
