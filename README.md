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
| `npm run test:seo` | Build and validate generated SEO metadata and crawler files |
| `npm run test:analytics` | Build and test consent flows in Chrome with Google endpoints mocked |
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
├── .vscode/            # VS Code laptop debugging and optional Android setup
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

### Laptop run and debug (no ADB)

In VS Code's **Run and Debug** panel, select **Laptop (existing Chrome)** and
press **F5**. This runs `npm run dev` in a VS Code debug terminal. When Astro is
ready, VS Code opens <http://127.0.0.1:4321/> in your default browser, using its
existing window and signed-in profile when Chrome is already running. No phone,
Android SDK, or ADB connection is required.

The VS Code debugger is attached to the Astro server, so breakpoints in Astro
frontmatter and server-side code work. Chrome does not allow VS Code to attach to
your normal profile, so debug browser scripts in that tab with Chrome DevTools
(**F12**). Closing the tab or window leaves the server running; stopping the
VS Code debug session stops it. If a development server is already registered
for this project, it is replaced.

For running without a debugger, use `npm run dev` and open
<http://127.0.0.1:4321> in your laptop browser.

Run `node --test scripts/debug-config.test.mjs` to check that the laptop launch
stays independent of ADB and that the Android launch retains its device tasks.

The separate **Android development server (ADB)** launch configuration prepares
Android debugging and ADB port forwarding. It requires ADB and a connected or
wirelessly pairable Android device; when no device is connected, the task
prompts you to pair over Wireless debugging.

### Android wireless debugging

Keep the PC and phone on the same Wi-Fi network with Wireless debugging enabled.
When pairing is needed, the task uses this sequence:

1. Open **Wireless debugging > Pair device with pairing code**.
2. Enter the **IP address & Port from that pairing dialog**.
3. Enter the **six-digit code from the same dialog**, keeping it open.
4. Wait for pairing to succeed. Only then return to the main Wireless debugging
   screen.
5. If automatic connection discovery fails, enter the **IP address & Port from
   the main Wireless debugging screen**. No second pairing code is requested.

The pairing and connection ports are different. Pairing uses manual address
entry so discovery cannot delay code entry or select another phone's pairing
dialog.

If ADB reports `protocol fault (couldn't read status message)`, reopen the
pairing dialog and retry with its new port and code. If this persists, toggle
Wireless debugging off/on, check VPN/firewall or Wi-Fi client-isolation settings,
and ensure Android Platform Tools are current. The task preserves ADB's error
output rather than stopping at Windows PowerShell's `NativeCommandError`.
USB debugging with an authorized USB connection also bypasses wireless pairing.

After the task succeeds, open <http://localhost:4321> in Chrome on the phone.
The launch configuration runs the development server and sets up port forwarding;
it does not itself attach a JavaScript debugger to Android Chrome. Use desktop
Chrome's `chrome://inspect/#devices` to inspect the phone's tab.

On Windows, run `node --test scripts/connect-adb.test.mjs` to check the connection
task against simulated ADB responses in Windows PowerShell 5.1; no phone is needed.

## Deployment

Pushing to `main`, or manually starting the GitHub Actions workflow, builds the
site and deploys the `dist/` artifact to GitHub Pages. The workflow supplies the
site URL and base path at build time. The custom domain is configured in
`public/CNAME`.

## SEO and Google measurement

SEO and analytics serve different purposes: Google Search Console reports search
visibility and indexing; Google Analytics 4 (GA4) measures visits and engagement.
Installing GA4 does not improve search rankings.

### Included SEO setup

- Unique page titles and descriptions, canonical URLs, and social sharing metadata.
- Default social preview image and WebSite/Person JSON-LD structured data.
- Automatically generated `sitemap-index.xml` and `sitemap-0.xml` via the official
  Astro sitemap integration, linked from page heads and `robots.txt`.
- The error page remains `noindex` and is excluded from the sitemap.

Local builds default to `https://www.mabux.me`. Deployment uses the `SITE` and
`BASE_PATH` values provided by GitHub Pages; ensure the custom domain in Pages
settings matches `public/CNAME`. Analytics requires explicit visitor consent and
the configuration below.

### Google Search Console (recommended next step)

1. Add the `mabux.me` **Domain property** in
   [Google Search Console](https://search.google.com/search-console).
2. Add Google's verification TXT record at your DNS provider and verify ownership.
   DNS verification requires no site code or tracking.
3. After deploying, submit `https://www.mabux.me/sitemap-index.xml` under Sitemaps.
4. Inspect the home page and key project URLs, check Google's selected canonical,
   and monitor indexing and search performance. Submission does not guarantee
   indexing or rankings.

### GA4 and consent

The GitHub Pages workflow builds with the public GA4 measurement ID
`G-WN68N9308Y`. Set the repository Actions variable `PUBLIC_GA_MEASUREMENT_ID`
to override it. The ID is not a secret. For local builds that need the ID, copy
`.env.example` to `.env`; normal development and preview on localhost never send
analytics, even with an accepted preference.

Tracking requires all three: a production build, the exact
`https://www.mabux.me` origin, and an explicit, unexpired acceptance. Before
acceptance, or after rejection, no Analytics loader or collection request is
made. There are no pre-consent cookieless pings. The accessible consent dialog
offers equally styled accept/reject actions; Escape rejects an undecided choice.
The Privacy and Cookies controls are centered in the copyright/social
footer row on desktop and remain fixed above the quick links on small screens.
Both use muted labels with a decorative separator and hover/focus feedback.
The consent dialog uses a restrained lime accent and equally styled accept/reject
actions; desktop footer height and mobile touch-target sizes are preserved.
Without JavaScript, analytics stays off.

The local-storage preference `mabux.analytics-consent.v1` expires after 180 days.
Analytics cookies have a configured 60-day lifetime with automatic renewal
disabled. Withdrawal sets Google's disable flag, removes accessible `_ga` and
`_ga_*` cookies, and reloads to unload Google listeners. Preference changes
propagate to other tabs. If storage is blocked, a console/UI warning is issued
and choices apply only to the current page; subsequent pages default to off.

The tag disables advertising consent, Google signals, and ad personalization.
It sends one explicit `page_view` per full-page navigation, strips query strings
and fragments from page and referrer URLs, and records `contact_click` with only
`contact_method: email` and `resume_download` with only `file_name: resume.pdf`.
Email addresses and message contents are not event parameters. It does not add
custom outbound-click tracking.

**Before deployment, configure the Web stream in GA4:**

1. Under **Admin > Data streams > Mabux Website**, turn **Enhanced measurement
   off**. This implementation owns page views, contact clicks, and resume
   downloads. Automatic measurement can otherwise duplicate events or capture
   unsanitized link/page URLs. This intentionally replaces the earlier suggestion
   to use enhanced download/click tracking.
2. Leave Google signals and advertising personalization off. Set **Data
   retention** to **2 months**, with reset on new activity off. Review the
   [privacy notice](src/pages/privacy.astro) for accuracy before publishing;
   the website cannot enforce account-level retention settings.
3. Do not install an additional Google tag or Tag Manager container.
4. After deployment, verify a single page view per navigation in Realtime.
   Use Google Tag Assistant's debug connection for DebugView, accepting consent
   first. Rejection must produce no Analytics requests/cookies; acceptance must
   load the tag once; withdrawal must stop tracking and remove its cookies.
   Browser blockers can prevent data delivery; standard reports can take
   24–48 hours to populate.
5. Link the Search Console property to GA4 under **Admin > Product links >
   Search Console links** to combine search and engagement reporting.

Run consent/URL/origin unit tests with
`node --test src/utils/analytics-consent.test.ts`, and generated-page checks with
`npm run test:seo`. Run `npm run test:analytics` for browser regressions (requires
installed Google Chrome). That command builds a configured production fixture,
starts and stops its own local preview, and mocks the production origin and Google
endpoints: no test visitor information is sent to Google. It covers opt-in,
rejection, withdrawal, cross-tab changes, expiry, storage failure, mobile controls,
and localhost exclusion. Google account configuration and live delivery
verification must be completed separately.
