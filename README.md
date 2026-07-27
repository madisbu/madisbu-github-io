# madisbu-github-io

Personal portfolio site built with Astro and Tailwind CSS.

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── about.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

## Commands

All commands are run from the project root:

| Command           | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Install dependencies                          |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally          |
