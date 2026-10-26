# Abi — Portfolio

A responsive single-page portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion. The site includes a dark-first theme with a light-mode toggle, animated sections, accessible navigation, project cards, and a contact form that opens the visitor's email app.

## Run locally

From the project directory:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run a production build:

```bash
npm run typecheck
npm run build
npm start
```

## Edit your content

All portfolio content is under `data/`:

- `profile.ts` — name, title, intro, bio, location, email, and social profile URLs.
- `experience.ts` — work history and descriptions.
- `projects.ts` — project titles, descriptions, tech tags, GitHub URLs, and demo URLs.
- `skills.ts` — skills grouped by category.

The project cards are populated from `data/projects.ts`; replace all three sample projects with your own. Keep each project's `githubUrl` and `demoUrl` as valid URLs, or remove the corresponding link in `components/Projects.tsx` if a project does not have one.

## Before deploying

1. Replace `hello@example.com` in `data/profile.ts` with the email address where you want to receive messages.
2. Replace the GitHub and LinkedIn placeholder URLs in `data/profile.ts`.
3. Update each project title, summary, tech stack, repository URL, and live-demo URL in `data/projects.ts`.
4. Review the descriptions and dates in `data/experience.ts`, plus the skill lists in `data/skills.ts`.
5. The hero currently uses a lightweight CSS monogram instead of a portrait, so there is no photo required. If you add a photo, put it in `public/` and render it with `next/image` using meaningful alt text.
6. Update the page title and description in `app/layout.tsx` if you want different search/social metadata.

The contact form has no server-side endpoint: it validates the required fields and opens a prefilled `mailto:` draft. The visitor still needs to send it from their mail app.

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In [Vercel](https://vercel.com), choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework settings and deploy. Vercel will run the build automatically.
4. Add a custom domain in the project's **Settings → Domains** if desired.

You can also deploy from the CLI after linking the project:

```bash
npm install --global vercel
vercel
vercel --prod
```

## Terminal commands to set up from scratch

These commands scaffold an equivalent Next.js TypeScript App Router project and add the styling and animation dependencies used here:

```bash
npx create-next-app@latest abi-portfolio --typescript --tailwind --eslint --app --import-alias "@/*"
cd abi-portfolio
npm install framer-motion
```

Then replace the scaffold files with this portfolio's files and run `npm run dev`.
