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

## Deployment

Pushing to `main` runs the GitHub Actions workflow that builds the site and
publishes the `dist/` artifact to GitHub Pages. The custom domain is configured
in `public/CNAME`.
