// English is the primary language. `et.ts` must provide every key defined here.
export const en = {
  htmlLang: "en",
  ogLocale: "en_US",
  site: {
    defaultTitle: "Madis Burmeister - UX & Web Design",
    defaultDescription: "The portfolio of Madis Burmeister, a UX engineer and technical project manager based in Estonia.",
    skipLink: "Skip to content",
    jobTitle: "Senior Technical Project Manager",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    about: "About",
    resume: "CV",
    contact: "Contact",
    mainLabel: "Main navigation",
    homeAria: "Mabux Home",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  language: {
    label: "Language",
  },
  footer: {
    copyright: (year: number) => `Copyright © Madis Burmeister ${year}`,
    socialLabel: "Social links",
    quickLinksLabel: "Mobile quick links",
    whatsapp: "WhatsApp",
    email: "Email",
  },
  consent: {
    controlsLabel: "Privacy controls",
    privacy: "Privacy",
    cookies: "Cookies",
    eyebrow: "OPTIONAL ANALYTICS",
    title: "Your privacy, your choice.",
    description:
      "May I use Google Analytics to understand visits, engagement, CV downloads, and email-link clicks? No Analytics requests or cookies are sent until you accept. The site works the same if you reject.",
    details:
      "Your choice is saved for 180 days. Change your mind or withdraw consent anytime using Cookies.",
    readNotice: "Read the privacy notice",
    reject: "Reject analytics",
    accept: "Accept analytics",
    noscript: "Analytics is off because JavaScript is disabled.",
    messages: {
      storageUnreadable:
        "Your browser cannot save cookie choices. Analytics stays off until you accept on this page.",
      loadFailed: "Analytics could not load. You can still use the entire website.",
      storageUnwritable: "Your choice applies to this page only because browser storage is unavailable.",
      statusOn: "Analytics is on. You can change your choice below.",
      statusOff: "Analytics is off. You can change your choice below.",
      disabled: "Analytics is disabled on this address or build. No analytics data is sent.",
    },
  },
  backToTop: {
    label: "Back to top",
    caption: "BACK TO TOP",
  },
  home: {
    description:
      "Explore Madis Burmeister's UX and web design portfolio: fast, focused web products and clean interfaces, backed by technical project management experience in Estonia.",
    heroAlt: "Portrait of Madis",
    viewProjects: "VIEW PROJECTS",
    letsTalk: "LET'S TALK",
    greetings: ["Hello...", "你好...", "नमस्ते...", "Hola...", "مرحبا...", "Bonjour...", "নমস্কার...", "Olá...", "Tere..."],
    name: "I'm Madis !",
    role: "UX Engineer",
    roleRest: "from Estonia",
  },
  about: {
    title: "About",
    description:
      "Meet Madis Burmeister, a Senior Technical Project Manager with a passion for UX and web design, and discover his goals and daily motivation.",
    portraitAlt: "Madis Burmeister",
    heading: "Who am I?",
    bio: "I'm Madis, a husband and father of two. Professionally, I'm a Technical Project Manager. I've spent most of my career delivering IT projects, and I'm also interested in UX and web design. I combine creativity, technical skills, and a user-centered mindset to create digital products that make people's lives easier.",
    tabsLabel: "About Madis",
    tabs: ["General", "Goals", "Frustrations"],
    general: {
      age: "Age:",
      location: "Location:",
      locationValue: "Estonia",
      occupation: "Current occupation:",
      occupationValue: "Senior Technical Project Manager",
      certification: "Certification:",
      certificationValue: "EQF Level 5 in UX Design",
    },
    goals: [
      "Keep growing my technical, leadership, and design skills.",
      "Create digital products that solve real problems for people.",
      "Explore how AI can make products and project delivery smarter.",
      "Lead by example and inspire my children to stay curious.",
    ],
    frustrations: [
      "Limited opportunities to learn, grow, or take on meaningful challenges.",
      "Contributions going unrecognized or feedback being overlooked.",
      "Poor communication and a lack of trust or shared ownership.",
      "Constant firefighting that leaves little room for focused, thoughtful work.",
    ],
    outro:
      "When I'm not working, I love traveling. My family especially enjoys road trips that create lasting memories. Check out my full motivation package below…",
    motivation: { lead: "Madis's", highlight: "motivation", tail: "package" },
    // Parts marked `mark` are highlighted.
    instruction: [
      { text: "Tap", mark: true },
      { text: " or ", mark: false },
      { text: "hover", mark: true },
      { text: " over each image to discover what gives me energy every day.", mark: false },
    ],
    interests: [
      {
        id: "travelling",
        label: "Travelling",
        description: "Japan, Iceland, Morocco, Nepal... my travel wish list keeps growing.",
        alt: "Image by Jonah Brown",
      },
      {
        id: "football",
        label: "Football",
        description: "I've played football for over 20 years. It's in my DNA.",
        alt: "Football",
      },
      {
        id: "family",
        label: "Family",
        description: "My family means everything to me. It's as simple as that.",
        alt: "Image by Adam Sherez",
      },
      {
        id: "bbq",
        label: "BBQ",
        description: "Picanha on the BBQ and cold Corona in my hand. That's my type of summer evening.",
        alt: "BBQ - Image by Fábio Alves",
      },
      {
        id: "gaming",
        label: "Gaming",
        description: "Video games are my way to unwind. I lose track of time when I play games like The Last of Us or GTA VI.",
        alt: "PlayStation - Image by Igor Karimov",
      },
    ],
    connect: {
      before: "Have a project in mind, a shared interest or a ",
      highlight: "question",
      after: "?",
      cta: "Let's talk",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Have a project in mind? Let's make something happen. Email Madis Burmeister in Estonia to talk about your next web project or collaboration.",
    eyebrow: "A NEW PROJECT? A ROUGH IDEA?",
    headingBefore: "Good things start with a ",
    headingHighlight: "conversation.",
    emailLabel: "No forms. No hoops. Just say hello.",
    noMailApp: "No mail app?",
    copyAddress: "Copy address",
    openIn: "Open in {name}",
    newTab: " (opens in a new tab)",
    letterNote: "big work starts with a small idea",
    cardHeading: ["Let's make", "something happen."],
    cardText: ["You bring the idea or the problem.", "We'll figure out the next step together."],
    cardBottom: "LESS OVERTHINKING, MORE HELLO.",
    goodToKnow: "A little good to know",
    reachOut: {
      label: "WHEN TO REACH OUT",
      value: "Drop me a message anytime.",
      note: "I usually reply within 1–2 days.",
    },
    basedIn: {
      label: "BASED IN",
      value: "Estonia (EET/EEST)",
      note: "A small country. A wide world of ideas.",
    },
    talkIn: {
      label: "LET'S TALK IN",
      value: "English or Estonian",
      note: "Plain language, not technical jargon.",
    },
    copied: "Copied {email} to your clipboard.",
    copyFailed: "Couldn't copy automatically. The address is {email}.",
  },
  projects: {
    title: "Projects",
    description: "UX/UI, web design, and product development projects by Madis Burmeister.",
    heading: "Projects",
    sectionLabel: "Portfolio projects",
    categoriesLabel: "Project categories",
    filters: { all: "ALL WORK", "ux-ui": "UX/UI", web: "WEB", product: "PRODUCT" },
    viewProject: "View project",
    shownOne: "{count} project shown",
    shownOther: "{count} projects shown",
    items: {
      "car-rental-app-redesign": {
        title: "Car Rental App Redesign",
        description: "A friendlier mobile booking experience shaped around clarity, confidence, and fewer steps.",
        category: "UX/UI Design",
      },
      "waste-disposal-website": {
        title: "Waste Disposal Website",
        description: "A focused service website with a custom order form that makes a complex request feel simple.",
        category: "Web Design",
      },
      "multistep-order-form": {
        title: "Multistep Order Form",
        description: "An MVP order flow that guides customers through a structured purchase without unnecessary friction.",
        category: "Product Development",
      },
    },
  },
  resume: {
    // The page title must differ from the Estonian one, so it is not just "CV".
    title: "Madis Burmeister's CV",
    description: (name: string) =>
      `CV of ${name}, IT Project Manager with over a decade of experience: work history, education, skills, and tools.`,
    viewResume: "View CV",
    newTab: "(opens in a new tab)",
    experience: "Experience",
    current: "Current",
    careerBreak: "Career break",
    present: "Present",
    now: "Now",
    tagsLabel: "Skills and tools",
    education: "Education",
    certifications: "Courses & Certifications",
    diploma: "Diploma",
    certificate: "Certificate",
    linkFor: (name: string) => ` for ${name} (opens in a new tab)`,
    skills: "Skills",
    languages: "Languages",
    tools: "Tools",
    dates: {
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      present: "Present",
      year: "yr",
      years: "yrs",
      month: "mo",
      months: "mos",
    },
    countryFlags: { Estonia: "/flags/estonia.svg", Spain: "/flags/spain.svg", Australia: "/flags/australia.svg" } as Record<string, string>,
  },
  notFound: {
    title: "Page not found",
    description: "This page could not be found. Explore Madis Burmeister's projects or return to the home page.",
    code: "404",
    heading: "Looks like a wrong turn.",
    message: "This page may have moved, or the address may be incorrect. Let's get you back on track.",
    navLabel: "Page not found navigation",
    home: "Back to home",
    projects: "Explore projects",
  },
  privacy: {
    title: "Privacy & cookies",
    description:
      "Learn how this website uses analytics with your consent, saves your cookie choice, and handles privacy requests.",
    heading: "Privacy & cookies",
    updated: "Last updated: 7 November 2026",
    // Trusted static HTML (links and emphasis); rendered with set:html.
    sections: [
      {
        heading: "Who is responsible",
        blocks: [
          {
            p: `I’m Madis Burmeister, based in Estonia, and I’m responsible for this website’s analytics. For privacy questions or requests, email <a href="mailto:madis.burmeister@mabux.me">madis.burmeister@mabux.me</a>.`,
          },
        ],
      },
      {
        heading: "Optional website analytics",
        blocks: [
          {
            p: "With your permission, this website uses Google Analytics 4 (GA4), a service from Google Ireland Limited. It helps me understand how people use the site, including which pages they visit, how they engage, and when they download my CV or click an email link. An email-link click shows an attempt to contact me; it doesn’t mean an enquiry was completed. I don’t use analytics for advertising.",
          },
          {
            p: "Google receives technical details such as your device and browser, your approximate location based on your IP address, visit times, and cookie identifiers. Google says GA4 does not log or store individual IP addresses. This website’s page-view events don’t include URL query strings or fragments. Email addresses and message contents aren’t included when you click an email link.",
          },
          {
            p: "Google Analytics doesn’t load, set cookies, or send requests until you choose “Accept analytics.” I use your consent as the legal basis for this optional data processing. You can reject analytics and still use the whole website.",
          },
        ],
      },
      {
        heading: "Cookies and saved choices",
        blocks: [
          {
            ul: [
              "<strong>mabux.analytics-consent.v1:</strong> saves your choice in this device’s local storage for 180 days. It only remembers whether you accepted or rejected analytics; it doesn’t track your visits.",
              "<strong>_ga and _ga_*:</strong> optional first-party Google Analytics cookies that identify your browser and keep session information. They’re set to expire after 60 days and aren’t extended on each visit. Your browser may remove them sooner.",
              "<strong>mabux.language.v1:</strong> saves your language choice (English or Estonian) in this device’s local storage when you use the language switcher. On the home page, the website also checks your browser’s language setting to open the Estonian version if your browser prefers Estonian. This check happens in your browser; nothing is sent anywhere, and it isn’t used for analytics.",
            ],
          },
          {
            p: `Use <button type="button" data-cookie-settings>Cookies</button> to change your choice. If you reject after accepting, the website stops future tracking, removes the first-party Analytics cookies it can access, and reloads to stop Analytics. This doesn’t undo earlier data processing. Clearing your browser storage removes your saved choice.`,
          },
        ],
      },
      {
        heading: "Google processing and retention",
        blocks: [
          {
            p: `Google processes analytics data for me. It may process it outside the European Economic Area, including in the United States, under applicable contractual and international data-transfer safeguards. Read <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy<span class="sr-only"> (opens in a new tab)</span></a> and learn <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data from sites that use its services<span class="sr-only"> (opens in a new tab)</span></a>.`,
          },
          {
            p: "GA4 keeps user- and event-level data for two months. It may keep combined reports for longer. This data-retention period is separate from the cookie lifetime above. This website’s Google tag doesn’t enable Google signals or advertising personalization.",
          },
        ],
      },
      {
        heading: "Hosting, fonts, embedded content and contacting me",
        blocks: [
          {
            p: "GitHub Pages hosts this website and may process technical details, such as IP addresses, to deliver and protect it. Google Fonts receives your IP address and browser request details when fonts load, whether or not you accept analytics. Some project pages include third-party embeds that also receive technical details when loaded. Rejecting analytics doesn’t block fonts or embeds.",
          },
          {
            p: "External websites have their own privacy practices. If you email me, I receive the information you choose to send and use it to reply and manage our correspondence. I keep correspondence only as long as needed to handle your enquiry, maintain our working relationship, or meet legal obligations.",
          },
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          {
            p: `Depending on your situation, you can ask to access, correct, or delete your personal data, limit how it’s used, or receive it in a portable format. You can also object to processing based on legitimate interests and withdraw your analytics consent at any time. Email me using the address above. I may ask for details to identify your data. You can also complain to Estonia’s <a href="https://www.aki.ee/en">Data Protection Inspectorate</a>.`,
          },
        ],
      },
    ] as { heading: string; blocks: ({ p: string; ul?: undefined } | { ul: string[]; p?: undefined })[] }[],
  },
};

export type Dictionary = typeof en;
