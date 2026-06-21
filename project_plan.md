# Austin Di Nezza Portfolio Project Plan

## 1. Objective

Build an advanced, employer-facing personal portfolio that feels closer to a polished product platform than a simple resume site.

The portfolio should be inspired by the structure and professionalism of:

`https://www.haythemrehouma.com/`

but it must remain unique to Austin's background, career stage, projects, and brand.

This portfolio is meant to help Austin stand out to employers for roles related to:

- AI development
- automation
- backend/API work
- data and dashboards
- cloud foundations
- digital workplace solutions

## 2. What We Are Taking From the Reference Site

The reference site works because it feels like a complete technical identity, not just a bio page. The portfolio should borrow these structural strengths:

- strong hero with clear positioning
- high-trust "proof" or stats section
- detailed professional background
- expertise cards
- clearly grouped tech stack
- featured project showcase
- deeper project exploration
- contact section with strong CTAs
- "Ask Me Anything" style assistant

The new portfolio should interpret that format for an emerging AI and software developer, not a PhD researcher. It should feel ambitious and highly polished without exaggerating experience.

## 3. Non-Negotiable Requirements

- The site must look professional enough to send directly to employers.
- It must not feel like a generic portfolio template.
- It must include a backend.
- GitHub repositories must be fetched dynamically and displayed on the site.
- The project section must be one of the strongest parts of the portfolio.
- It must include the core public pages: Home, About, Projects, Skills, Blog, and Contact.
- It must include a downloadable PDF CV.
- It must include Privacy Policy, Cookie Policy, Terms of Use, and a Legal Notice page when the site is used in a professional or commercial context.
- The writing must stay honest and avoid fake claims.
- The overall structure can be inspired by the teacher's site, but the design, copy, and presentation must be unique to Austin.

## 4. Recommended Product Direction

Position Austin as:

`AI and Automation Developer building practical tools, dashboards, APIs, and workflow systems`

Suggested brand tone:

- sharp
- credible
- modern
- technically capable
- ambitious
- employer-focused

Suggested hero messaging:

`I build practical AI-powered systems that turn messy workflows, data, and user needs into useful digital tools.`

Possible supporting line:

`Focused on automation, backend systems, data workflows, cloud foundations, and user-centered technical solutions.`

## 5. Personal Inputs To Use

Use the provided CV and profile links as the current source of truth for personal content.

- Name: Austin Di Nezza
- Location: Montreal, QC
- Email: `austin.dinezza@icloud.com`
- LinkedIn: `https://www.linkedin.com/in/austin-di-nezza-8baab0388/`
- Languages: English and French
- Current education: CDI College, Artificial Intelligence ACS, in progress
- Previous education: Dawson College, Computer Sciences
- Previous education: Marianopolis College, Law, Society and Justice
- GitHub username: `austin56moto-crypto`

Professional summary direction from the CV:

- detail-oriented and technically driven
- focused on Artificial Intelligence and digital tools
- hands-on experience with automation workflows, chatbots, and data-driven solutions
- strong at translating user needs into practical technical solutions
- analytical, adaptable, and clear in both technical and non-technical communication
- bilingual in English and French

Skill areas confirmed by the CV:

- Python
- SQL
- PostgreSQL
- Power BI
- AWS foundations
- n8n
- prompt engineering
- Microsoft 365 / Copilot tools
- API integrations
- chatbot development
- workflow automation
- database management
- digital workplace tools

Additional credible supporting details from the CV:

- experience building AI-powered chatbots for websites
- experience building automation workflows that integrate APIs
- experience using Python and SQL for data analysis and practical use cases
- experience developing dashboards for reporting and insights
- strong interest in GenAI platforms and digital workplace transformation
- Duke of Edinburgh Silver Award

Important:

- Any dates, titles, or achievements taken from the CV should override earlier draft assumptions.
- Do not invent certifications, deployment experience, or measurable business outcomes unless they are real and supported.

Public-contact note:

- Use the email above in the contact section unless Austin later provides a different public-facing address.
- Treat the phone number from the CV as optional/private unless Austin explicitly wants it displayed on the site.

## 6. Inputs Still Needed From Austin

When available, plug these into the project:

- GitHub profile URL
- headshot or portrait photo, if desired
- top 4-8 projects to feature first
- any live demo links
- any screenshots worth showing
- confirmation on whether the phone number should appear publicly
- final PDF version of the CV for download, or permission to generate one from the current document

If some of these are missing, the portfolio should still be buildable with sensible placeholders and override files.

## 7. Technical Recommendation

Use a full-stack Next.js application so the frontend and backend live in one repo and deployment stays simple.

Recommended stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Zod
- GitHub REST API

Optional additions if useful:

- `clsx`
- `tailwind-merge`
- `shadcn/ui`

Do not start with a separate database unless it becomes necessary. The first version can be excellent without it.

## 8. Recommended Architecture

Use this structure:

```text
advanced-ai-portfolio/
  app/
    api/
      chatbot/
      contact/
      github/
    projects/
    case-studies/
    layout.tsx
    page.tsx
    globals.css
  components/
  data/
  lib/
  public/
  types/
  README.md
  project_plan.md
  .env.example
```

Key backend files:

```text
app/api/github/repos/route.ts
app/api/contact/route.ts
app/api/chatbot/route.ts
lib/github.ts
data/project-overrides.json
data/austin-knowledge-base.json
```

## 9. Core Backend Requirement: Dynamic GitHub Projects

This is one of the main advanced features.

The site must have an API route that fetches public repositories from GitHub for Austin's account, normalizes the data, and returns it to the frontend.

Required endpoint:

```text
GET /api/github/repos
```

Minimum repository data to return:

- name
- description
- primary language
- stars
- forks
- last updated date
- repo URL
- homepage/demo URL if available
- featured flag
- category
- custom summary
- employer value statement

The API should:

- fetch live repos from GitHub
- merge repo data with local override metadata
- allow a featured subset on the homepage
- support filtering and searching on the frontend
- use an optional token to reduce rate-limit issues
- fall back to local JSON if GitHub is unavailable

Recommended environment variables:

```env
GITHUB_USERNAME=austin56moto-crypto
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 10. Project Metadata Layer

Live GitHub data alone is not enough. The site needs a local overrides file so each important repo can be presented in an employer-friendly way.

Create:

```text
data/project-overrides.json
```

Each featured project should support fields like:

- displayName
- summary
- category
- tech stack
- featured
- priority
- employerValue
- status
- screenshot
- demoUrl

This lets the site stay dynamic while still showing curated storytelling.

## 11. Site Structure

The site should include these sections.

### 11.1 Hero

Must include:

- Austin Di Nezza
- a strong technical title
- short positioning statement
- CTA buttons
- GitHub button
- LinkedIn button
- contact button
- small skill chips

Suggested CTAs:

- View Projects
- Explore GitHub
- Contact Me

### 11.2 Proof Strip / Stats

Use a strong row of signal cards or metrics. The values can be backed by GitHub data or curated content.

Examples:

- public repositories
- featured projects
- bilingual
- AI program in progress
- backend/API projects
- cloud or automation focus

### 11.3 About

Frame Austin as someone who connects technical problem-solving with real user needs.

This section should explain:

- current AI studies
- practical project building
- interest in automation and useful software
- ability to translate messy workflows into structured systems
- the blend of technical learning and customer-facing experience

### 11.4 Core Expertise

Create 5-6 expertise cards. Suggested categories:

- AI and automation
- data and dashboards
- backend and APIs
- cloud foundations
- digital workplace tools
- frontend product delivery

### 11.5 Featured Projects

This is a curated homepage section, not the full repo list.

Each card should include:

- project title
- short summary
- tech stack
- repo link
- optional live demo
- project status
- category badge
- one short line: "What this proves"

### 11.6 Full GitHub Explorer

This section or page should display a richer repo browser powered by the backend.

Required features:

- fetch live repositories
- search by repo name
- filter by language or category
- sort by recently updated, stars, or name
- visually highlight featured projects

### 11.7 Experience Timeline

Use a clean timeline layout similar in weight to the reference site, but tuned to Austin's profile.

Focus on:

- customer support and technical problem-solving
- operations
- logistics and workflow coordination
- communication and user-facing problem resolution

### 11.8 Education Timeline

Show education clearly and professionally, including current AI studies.

### 11.9 Tech Stack

Group technologies by category rather than dumping logos randomly.

Suggested groups:

- AI and automation
- data
- backend
- frontend
- cloud and tooling

### 11.10 Ask Austin AI

The site should include an "Ask Austin" assistant inspired by the reference site's chatbot area.

Version 1 should be rule-based or knowledge-base driven.

It should answer questions like:

- What kind of projects has Austin built?
- Does Austin have backend experience?
- Which project best shows cloud knowledge?
- What is Austin currently studying?
- Is Austin bilingual?

Version 2 can later use an LLM API.

### 11.11 Contact

Include:

- email CTA
- LinkedIn CTA
- GitHub CTA
- short contact form

Use these as the default public contact details for the first build:

- email: `austin.dinezza@icloud.com`
- LinkedIn: `https://www.linkedin.com/in/austin-di-nezza-8baab0388/`

Required endpoint:

```text
POST /api/contact
```

Version 1 can validate and log submissions locally.

### 11.12 Blog Preview

The homepage should include a short blog or insights preview section that links into the dedicated blog area.

Suggested content types:

- project breakdowns
- what Austin learned from building a system
- AI and automation notes
- cloud or backend experiments

The goal is to show communication skill and technical reflection, even if the first version launches with only 2-3 strong posts or placeholders.

### 11.13 Footer And Utility Links

The footer should surface all required utility and legal links in a clean employer-friendly way.

Include:

- downloadable CV
- Privacy Policy
- Cookie Policy
- Terms of Use
- Legal Notice
- GitHub
- LinkedIn
- contact email

## 12. Pages

Required routes:

- `/`
- `/about`
- `/projects`
- `/skills`
- `/blog`
- `/contact`
- `/cv` or a direct downloadable PDF asset route
- `/privacy-policy`
- `/cookie-policy`
- `/terms-of-use`
- `/legal-notice`
- `/api/github/repos`
- `/api/contact`
- `/api/chatbot`

Recommended future routes:

- `/case-studies/[slug]`
- `/blog/[slug]`

Notes:

- `Home` should remain the main landing page at `/`.
- `About`, `Projects`, `Skills`, `Blog`, and `Contact` can each be standalone pages even if some content also appears on the homepage.
- The CV should be downloadable as a PDF from a visible CTA in the hero, navbar, and/or footer.
- The legal pages should be built as real pages, not modal popups.

## 13. Design Direction

The site should feel advanced and high-end, but still believable for an early-career technical profile.

Target visual language:

- dark graphite or deep navy base
- electric blue / cyan accents
- metallic neutrals
- subtle gradients
- glass or layered card treatment
- precise spacing
- confident typography
- restrained motion

Recommended font direction:

- strong display font for headings
- clean technical sans-serif for body copy

Suggested feel:

- technical studio
- enterprise AI
- modern product site
- clean research-lab seriousness without copying the teacher's medical branding

Avoid:

- generic template feel
- cartoonish icons
- fake startup buzzwords
- huge paragraphs
- too much purple
- visual cloning of the teacher's site

The legal and policy pages should still use the same design system, but with a simpler reading-focused layout.

## 14. Unique Twist For Austin

To avoid feeling like a copy, add one section that is more product-oriented and unique to Austin.

Recommended option:

`What Employers Can Hire Me For`

This section can present 3-4 practical value lanes such as:

- automation and workflow improvement
- backend and API development
- data cleanup and reporting
- AI-assisted internal tools

This gives the portfolio stronger hiring clarity than a standard "services" section.

## 15. Featured Project Candidates

Use live GitHub data, then curate from it.

Likely candidates based on the current planning draft:

- `inventory-project`
- `Localstack-Dashboard`
- `htmltailwind`
- `Final-Project-May-`
- `InternTask-AI-Cloud`
- `smart-reminder-expert-system`
- `systeme-expert-incidents-ti`
- `eda-et-nettoyage-de-donnees-avec-codex`

These should be confirmed against the actual GitHub profile once linked or fetched.

## 16. Data Shapes

Suggested project type:

```ts
type Project = {
  name: string;
  displayName: string;
  description: string;
  summary: string;
  language: string | null;
  tech: string[];
  category: string;
  featured: boolean;
  priority?: number;
  status?: string;
  stars: number;
  forks: number;
  updatedAt: string;
  repoUrl: string;
  demoUrl?: string;
  screenshot?: string;
  employerValue: string;
};
```

Suggested experience type:

```ts
type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  bullets: string[];
};
```

## 17. Suggested Component List

```text
components/
  Navbar.tsx
  Hero.tsx
  ProofStrip.tsx
  About.tsx
  ExpertiseGrid.tsx
  FeaturedProjects.tsx
  ProjectCard.tsx
  GitHubExplorer.tsx
  EmployerValueSection.tsx
  ExperienceTimeline.tsx
  EducationTimeline.tsx
  TechStack.tsx
  ChatbotWidget.tsx
  ContactForm.tsx
  Footer.tsx
  SectionHeader.tsx
  AnimatedBackground.tsx
```

## 18. Build Order For Codex

Codex should work in this order:

1. initialize the Next.js TypeScript app
2. install Tailwind and supporting UI packages
3. define the global design system
4. build the main page layout and sections
5. add curated static project data first
6. implement project cards and section composition
7. build the GitHub API route
8. add the repo normalization and override merge layer
9. connect the frontend explorer to the backend
10. build the contact route and form
11. build the rule-based chatbot route and widget
12. polish animations and responsive behavior
13. add README and environment setup
14. test locally and prepare deployment

## 19. Acceptance Criteria

The project should be considered successful when:

- the homepage feels polished and employer-ready
- the structure clearly reflects the reference site's level of professionalism
- the design is unique to Austin
- the site includes Home, About, Projects, Skills, Blog, Contact, CV download, and the required legal/policy pages
- GitHub repos load dynamically from a backend endpoint
- curated featured projects look stronger than raw repo cards
- the site works well on desktop and mobile
- the copy stays honest and specific
- there are no exposed secrets
- `npm run build` passes

## 20. Legal And Content Notes

The legal pages should be implemented as production-ready content placeholders that can later be reviewed and customized with Austin's actual details.

Required legal content areas:

- Privacy Policy
- Cookie Policy
- Terms of Use
- Legal Notice

Important:

- If the site is used professionally, commercially, or collects contact-form data, these pages should be reviewed before production launch.
- The portfolio build can include structured templates and placeholder fields for name, email, jurisdiction, hosting provider, analytics usage, and data collection behavior.
- This plan includes the pages as a product requirement, not as a substitute for formal legal advice.

## 21. Future Upgrades

After the first strong version is complete, possible upgrades include:

- real AI assistant using an LLM API
- resume PDF page or download
- bilingual toggle
- case study pages
- analytics
- custom domain
- GitHub contribution visualization
- richer project screenshots
- email delivery for the contact form
- SEO and structured data

## 22. Prompt To Reuse In Codex

Use this prompt with the actual build:

```text
Build an advanced employer-facing portfolio for Austin Di Nezza using this project_plan.md as the source of truth.

Use Next.js, TypeScript, Tailwind CSS, Framer Motion, and App Router API routes. The site should be inspired by the structure and professionalism of https://www.haythemrehouma.com/ but must remain visually and verbally unique to Austin.

The portfolio must include:
- a strong hero section
- proof/stats cards
- about section
- expertise grid
- featured projects
- a backend-powered GitHub project explorer
- dedicated Home, About, Projects, Skills, Blog, and Contact pages
- a downloadable PDF CV
- Privacy Policy, Cookie Policy, Terms of Use, and Legal Notice pages
- experience timeline
- education timeline
- grouped tech stack
- an "Ask Austin" assistant
- a contact section and footer utility links

Implement a backend route that fetches public GitHub repositories for the configured username, normalizes the response, merges it with local override metadata, and returns curated project data to the frontend. Add filtering, searching, and featured project handling.

Do not invent achievements or fake experience. Keep the writing employer-friendly, specific, and honest. Favor a polished, high-end design with strong typography, subtle motion, and responsive layout.

Start with the full project structure, then build the UI sections, then the API routes, then the data files, then the final styling and polish.
```
