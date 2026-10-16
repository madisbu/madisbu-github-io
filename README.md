# madisbu-github-io

Personal portfolio for Madis Burmeister, built with Astro and Tailwind CSS. It
is a static site deployed to GitHub Pages.

## Requirements

- Node.js 22.12 or newer
- npm

## Getting started

```sh
npm ci
npm run dev
```

The development server listens at <http://127.0.0.1:4321>.

## Commands

Run from the repository root:

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the exact versions in `package-lock.json` |
| `npm run dev` | Start the local development server |
| `npm run check` | Check Astro files and TypeScript types |
| `node --test src/utils/profile-age.test.ts src/utils/resume-dates.test.ts` | Run unit tests |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run images:hero` | Regenerate responsive hero images |
| `npm audit` | Check dependencies for known vulnerabilities |

The hero-image generator uses `public/main_hero.webp` as its source and writes
responsive AVIF and WebP variants to `public/images/`. These generated assets
are checked in and used by the home page.

## Project structure

```text
.
├── .github/workflows/  # GitHub Pages build and deployment
├── .vscode/            # Optional VS Code tasks and Android device setup
├── public/             # Static images, resume PDF, favicon, and CNAME
├── scripts/            # Hero-image generation
└── src/
    ├── components/     # Shared UI and case-study/resume components
    ├── data/           # Resume content
    ├── layouts/        # Shared page layout and metadata
    ├── pages/          # Home, about, contact, projects, and resume routes
    ├── styles/         # Global styles and design tokens
    ├── types/           # Shared TypeScript types
    └── utils/           # Date/age helpers and unit tests
```

Pages are Astro file-based routes. Project case-study copy and media are defined
in `src/pages/projects/`; resume entries are maintained in `src/data/resume.ts`.
The branded `404.html` is generated from `src/pages/404.astro`.

The optional **Development server** launch configuration in VS Code also
prepares Android debugging and ADB port forwarding. It requires ADB and a
connected or wirelessly pairable Android device; when no device is connected,
the task prompts you to pair over Wireless debugging. For ordinary local
development, use `npm run dev` without ADB.

## Deployment

Pushing to `main`, or manually starting the GitHub Actions workflow, builds the
site and deploys the `dist/` artifact to GitHub Pages. The workflow supplies the
site URL and base path at build time. The custom domain is configured in
`public/CNAME`.
