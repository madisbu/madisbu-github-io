# madisbu-github-io

Personal portfolio site built with [Astro](https://astro.build/) and
[Tailwind CSS](https://tailwindcss.com/). The site is deployed to GitHub Pages
from the `main` branch.

## Requirements

- Node.js 22.12 or newer
- npm

## Getting started

```powershell
npm ci
npm run dev
```

Open <http://localhost:4321> after the development server starts.

## VS Code Run and Debug

The repository includes a **Development server** configuration:

1. Open **Run and Debug** (`Ctrl+Shift+D`).
2. Select **Development server**.
3. Press `F5`.

The configuration starts Astro in the background on
<http://127.0.0.1:4321>, streams its logs in the debug terminal, and stops the
managed server when the debug session ends. It also connects an available
Android device through ADB for local mobile testing.

## Commands

Run commands from the project root:

| Command               | Action                                             |
| :-------------------- | :------------------------------------------------- |
| `npm ci`              | Install the exact locked dependencies              |
| `npm run dev`         | Start the local development server                 |
| `npm run check`       | Check Astro files and TypeScript types             |
| `npm run build`       | Build the production site in `dist/`               |
| `npm run preview`     | Preview the production build locally               |
| `npm run images:hero` | Regenerate responsive hero images from their source |

## Project structure

```text
.
├── .github/workflows/  # GitHub Pages deployment
├── .vscode/            # Run, task, and Android development settings
├── public/             # Static assets and custom-domain configuration
├── scripts/            # Asset-generation scripts
└── src/
    ├── components/     # Reusable Astro components
    ├── layouts/        # Shared page layout
    ├── pages/          # File-based routes
    └── styles/         # Global styles
```

## About page

The About page recreates the profile and motivation content from the original
Wix portfolio, while retaining this site's navigation and footer. Edit the copy,
profile tabs and interest descriptions in `src/pages/about.astro`.
Its styles are scoped to that page and use the shared Heebo body and Signika
heading fonts. The profile is capped at 1140px (with a 708px desktop text column),
while the interest
bubbles sit in a separate column beside the motivation heading on wide screens.
Social links are provided by the shared footer, not duplicated in the page.
The closing call to action links directly to the same email address as the footer.
Its heading fits on one line on desktop and wraps on smaller screens.
The profile portrait is hidden below 640px in portrait orientation only.

The original portrait and cropped interest photos are stored
locally in `public/images/about/`. Photo attribution is preserved in the image
alt text. Interest descriptions appear on hover or keyboard focus and can also
be toggled by tap/click; Escape dismisses a reveal. Age is calculated from
1 May 1989 in `src/utils/profile-age.ts`, rendered at build time, and refreshed
in the browser on page load and when returning to the tab, without a rebuild.
It follows the current calendar date in the visitor's local time zone.
Run the birthday-boundary tests with `node --test src/utils/profile-age.test.ts`.

## Deployment

Pushing to `main` runs the GitHub Actions workflow that builds the site and
publishes the `dist/` artifact to GitHub Pages. The custom domain is configured
in `public/CNAME`.
