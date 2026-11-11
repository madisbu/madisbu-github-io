import type { ProjectCaseStudy } from "../types/case-study";

export const project = {
  title: "Car Rental App Redesign",
  description:
    "A faster, clearer mobile experience for finding and booking the right rental car.",
  discipline: "ux-ui",
  previousProject: {
    label: "Multistep Order Form",
    href: "/projects/multistep-order-form",
  },
  nextProject: {
    label: "Waste Disposal Website",
    href: "/projects/waste-disposal-website",
  },
  cover: {
    src: "/images/projects/car-rental-app-redesign/cover.webp",
    alt: "Car rental mobile app screens showing search, vehicle selection, extras, and payment",
    width: 1200,
    height: 468,
    caption: "End-to-end mobile booking flow from vehicle search to payment.",
  },
  metadata: [
    { label: "My Role", value: "UX/UI Designer" },
    { label: "Platform", value: "iOS & Android" },
    { label: "Deliverables", value: "UX/UI Design, Prototyping" },
    { label: "Tools", value: "Figma · Google Forms · Lookback" },
  ],
  sections: [
    {
      id: "overview",
      title: "Overview",
      eyebrow: "Context",
      summary: "Redesigning a complex rental journey around clarity, trust, and confident decisions.",
      paragraphs: [
        "In this independent project, I explored how to make booking a rental car in a mobile app easier and more intuitive. I focused on helping users compare vehicles more conveniently and making the pricing more transparent. I also optimized the booking process so that a reservation can be completed in fewer and more logical steps.",
        "The goal of the design is to help users make informed and confident choices. To achieve this, the app now offers relevant filters, a clearer price breakdown, and a smoother booking journey.",
      ],
    },
    {
      id: "problem",
      title: "Problem",
      eyebrow: "Define",
      summary: "Rental customers need transparent information without a slow or overwhelming booking process.",
      paragraphs: [
        "Car rental users often point out that many mobile apps lack price transparency, or the displayed information is downright misleading. A smooth booking journey is disrupted by intrusive ads and mandatory login screens. Furthermore, confusing abbreviations in the pricing structure create uncertainty, lowering users' trust in the service provider. Ultimately, such a poor user experience damages the rental company's reputation and reduces the number of successful bookings.",
      ],
      paragraphEmphasis: ["intrusive ads", "mandatory login screens", "confusing abbreviations"],
      scenarios: [
        {
          label: "Scenario A",
          title: "Lack of pricing transparency",
          steps: [
            {
              title: "Hidden total price",
              description: "Extra fees and insurance package costs often only become apparent in the final step of the booking flow. The displayed price tends to change between the search results and the payment screen.",
            },
            {
              title: "Erosion of trust",
              description: "Unexpected additional costs create uncertainty among users regarding the validity of the offer, causing them to abandon the process and look for alternatives on other platforms.",
            },
            {
              title: "Drop in conversion",
              description: "The booking is completed with competitors whose pricing is more transparent and feels like a safer and simpler choice.",
            },
          ],
        },
        {
          label: "Scenario B",
          title: "Complex terminology",
          steps: [
            {
              title: "Confusing insurance packages",
              description: "Protection packages are indicated by industry-specific abbreviations (e.g., CDW, LDW, PAI) that lack clear, user-friendly explanations.",
            },
            {
              title: "Lack of confidence in decision-making",
              description: "Users do not understand what coverage they actually need, what a specific package includes, or what the deductible terms are.",
            },
            {
              title: "Abandoned journey (Drop-off)",
              description: "The uncertainty stemming from this confusion is significant enough that users abandon the booking before reaching the payment screen.",
            },
          ],
        },
      ],
      findings: {
        title: "Key insights",
        items: [
          {
            value: "27%",
            text: "of respondents preferred the mobile app over the desktop website, which indicates the poor usability of car rental apps.",
          },
          {
            value: "18%",
            text: "of the survey participants rated their previous car rental web experience with the highest rating (5/5).",
          },
        ],
      },
      feedback: {
        lead: "The average rating of four major car rental companies' apps in the Google Play Store is 3.65 on a 5-point scale",
        leadEmphasis: ["3.65", "5-point scale"],
        reviews: [
          {
            company: "Europcar",
            logo: {
              src: "/images/projects/car-rental-app-redesign/logos/europcar.svg",
              alt: "Europcar",
              width: 930,
              height: 340,
            },
            logoDisplayWidth: 82,
            quote: "Very poor. Searching/booking for cars sometimes works, but can also be 200% more expensive than simultaneous search on website/laptop. You have to check.",
            rating: 1,
            accent: "#129b2a",
          },
          {
            company: "Avis",
            logo: {
              src: "/images/projects/car-rental-app-redesign/logos/avis.svg",
              alt: "Avis",
              width: 1613,
              height: 744,
            },
            logoDisplayWidth: 64,
            quote: "Account charged for 3 times for the full amount without successful booking. Every attempt to book would result in an error message. This should not be possible by design. At the moment I have no idea how to retrieve my money.",
            rating: 1,
            accent: "#c9002b",
          },
          {
            company: "Sixt",
            logo: {
              src: "/images/projects/car-rental-app-redesign/logos/sixt.svg",
              alt: "Sixt",
              width: 1725,
              height: 696,
            },
            logoDisplayWidth: 68,
            quote: "Made two booking at nearly same time. One on app and one online. App one did not include the basic insurance. 3£ per day insurance through website on other booking. Ended up costing 30£ per day for same insurance at airport. Will not risk booking though app again.",
            rating: 1,
            accent: "#f36822",
          },
          {
            company: "Green Motion",
            logo: {
              src: "/images/projects/car-rental-app-redesign/logos/green-motion.svg",
              alt: "Green Motion",
              width: 565,
              height: 112,
            },
            logoDisplayWidth: 96,
            quote: "Never trust this company. After renting the car and paying online, we went to get the car, first they offer different car than what we chose, and they asked to pay 1500£ for insurance. Went to another company and rented a car without any hidden fees or unclear details.",
            rating: 1,
            accent: "#98b719",
          },
        ],
      },
    },
    {
      id: "research",
      title: "Research & Discovery",
      eyebrow: "Understand",
      summary: "Use evidence to separate genuine customer needs from assumptions about the rental process.",
      steps: [
        {
          title: "Competitor Benchmarking",
          description: "Compared major car rental products to identify common patterns, trust signals, and recurring friction.",
          feature: {
            paragraphs: [
              "Mapping out competitors helped to understand how other rental companies in the market solve common booking problems, providing valuable input without the need to recruit separate test users.",
              "Observation on misleading pricing: One competitor advertised a 15% discount for paying in advance online. However, calculating a 15% discount from the initial amount of €573.76, the final price should have been €487.70, rather than the €500.15 displayed to the customer. This is a clear example of hidden fees that erode users' trust.",
            ],
            paragraphEmphasis: ["Observation on misleading pricing:"],
            media: {
              src: "/images/projects/car-rental-app-redesign/research/benchmarking.webp",
              alt: "Car rental payment screen advertising a 15% online-payment discount, with €500.15 online and €573.76 at-branch prices",
              width: 768,
              height: 1706,
            },
            link: {
              label: "Read Full Review",
              href: "https://drive.google.com/file/d/1HO_HiTJfFhFvQYaOoMnkHx6WSBnuEddV",
            },
          },
        },
        {
          title: "Online survey",
          description: "Gathered customer expectations and preferences around mobile booking, pricing, and rental terminology.",
          feature: {
            paragraphs: [
              "I conducted an online survey to identify the main pain points of car rental service users and to gather both quantitative and qualitative data.",
              "The responses to the open-ended question, “What would you change about the app you last used?”, revealed a clear need for more transparent pricing, a smoother booking process, and a reduction in intrusive ads.",
            ],
            media: {
              src: "/images/projects/car-rental-app-redesign/research/survey.png",
              alt: "Survey responses about improving rental apps, including clearer pricing and fewer advertisements",
              width: 477,
              height: 405,
              transparentBackground: true,
            },
            mediaLayout: "wide",
            link: {
              label: "Read Full Survey",
              href: "https://drive.google.com/file/d/17g0nKsN5tuiIUnrG2iP3YdzbrioGJv-b/",
            },
          },
        },
        {
          title: "Usability Testing",
          description: "I observed users completing real booking tasks to identify friction points, misunderstandings, and moments of hesitation in the user flow.",
          quotes: [
            {
              attribution: "Helen about Sixt",
              text: "When using any type of booking sites, I usually do not sign-up places that I do not use occasionally.",
            },
            {
              attribution: "Helen about Sixt",
              text: "I don’t understand what is premium location fee and in which step was it added to my order?",
            },
            {
              attribution: "Mary & Sarah about Green Motion",
              text: "I did not understand what CDW means and what are the risk reductions.",
            },
          ],
        },
      ],
    },
    {
      id: "flow",
      title: "User Journey",
      eyebrow: "Information architecture",
      summary: "A clear sequence turns a large booking task into a set of manageable decisions. Tap any step to see the pain point it addresses and the UX solution behind it.",
      journey: {
        startLabel: "Start",
        finishLabel: "Finish",
        nodes: [
          {
            title: "Homepage",
            description: "The user opens the app and starts a new search by entering the desired location and rental dates.",
            stepLabel: "Step 1",
            painPoint: {
              label: "Pain point",
              text: "Intrusive ad banners and unexpected login screens hinder starting the search.",
            },
            solution: {
              label: "UX solution",
              text: "A clean and distraction-free homepage. All focus is on the search – without pop-ups and mandatory logins.",
            },
          },
          {
            title: "Search results",
            description: "The user browses available vehicles on a map or in a list and refines the selection using filters.",
            stepLabel: "Step 2",
            painPoint: {
              label: "Pain point",
              text: "An inadequate map view and confusing filtering and sorting options make search results unreliable.",
            },
            solution: {
              label: "UX solution",
              text: "A smoothly functioning map and list view with logical filters that help narrow down the selection effectively and accurately.",
            },
          },
          {
            title: "Car Details",
            description: "The user dives into the technical specifications of the selected vehicle, checks availability, and views the total price.",
            stepLabel: "Step 2",
            painPoint: {
              label: "Pain point",
              text: "The pricing structure is confusing, and the final cost is not immediately clear.",
            },
            solution: {
              label: "UX solution",
              text: "A clear and transparent price calculation, where the final price along with all fees is visible immediately, without additional steps.",
            },
          },
          {
            title: "Covers",
            description: "The user reviews the offered protection and insurance options and chooses the most suitable one.",
            stepLabel: "Step 3",
            painPoint: {
              label: "Pain point",
              text: "Users are confronted with industry abbreviations (CDW, LDW, PAI), whose actual content and extent of coverage remain unexplained to the average person.",
            },
            solution: {
              label: "UX solution",
              text: "Clear, visually distinct, and plain-language package descriptions that avoid confusing industry jargon.",
            },
          },
          {
            title: "Extras",
            description: "The user adds necessary extra equipment (e.g., a child seat or GPS) to the booking, relying on clear photos and exact prices.",
            stepLabel: "Step 3",
            painPoint: {
              label: "Pain point",
              text: "Standard (generic) icons and unclear pricing do not give the customer a realistic idea of what the offered extra includes or exactly how much it costs.",
            },
            solution: {
              label: "UX solution",
              text: "Each accessory features real product photos and a transparent unit price, helping users make a confident and informed choice before adding the item to their cart.",
            },
          },
          {
            title: "Order Summary",
            description: "The user reviews the booking details, enters personal information, and sees the final total price before paying.",
            stepLabel: "Step 4",
            painPoint: {
              label: "Pain point",
              text: "Mandatory login or account creation creates a major friction point right before completing the booking and disrupts the user journey.",
            },
            solution: {
              label: "UX solution",
              text: "A quick guest checkout option. Entering personal information is smooth, and the user is shown a clear and transparent order overview before paying.",
            },
          },
        ],
      },
    },
    {
      id: "sketches",
      title: "Sketches",
      eyebrow: "Create",
      summary: "Explore alternative structures quickly before committing time to visual detail.",
      media: {
        src: "/images/projects/car-rental-app-redesign/sketches/sketches.png",
        zoomSrc: "/images/projects/car-rental-app-redesign/sketches/sketches-full.png",
        alt: "Hand-drawn wireframe sketches of the home, search, car details, extras, and payment screens",
        width: 1418,
        height: 578,
        transparentBackground: true,
      },
    },
    {
      id: "design",
      title: "Redesign",
      mediaGallery: [
        {
          src: "/images/projects/car-rental-app-redesign/design/main_visual_comparison.png",
          alt: "Current and redesigned car rental home screens compared across login interruptions, advertising, search focus, and guest access",
          width: 892,
          height: 641,
          transparentBackground: true,
          displayWidthPercent: 77.2,
        },
        {
          src: "/images/projects/car-rental-app-redesign/design/search_visual_comparison.png",
          alt: "Current airport list and redesigned map-based car rental search screens compared",
          width: 892,
          height: 641,
          transparentBackground: true,
          displayWidthPercent: 77.2,
        },
        {
          src: "/images/projects/car-rental-app-redesign/design/details_visual_comparison.png",
          alt: "Current car results and redesigned vehicle details and pricing screens compared",
          width: 1156,
          height: 651,
          transparentBackground: true,
        },
        {
          src: "/images/projects/car-rental-app-redesign/design/extras_visual_comparison.png",
          alt: "Current rental options and redesigned cover and extras selection screens compared",
          width: 1156,
          height: 651,
          transparentBackground: true,
        },
        {
          src: "/images/projects/car-rental-app-redesign/design/payment_visual_comparison.png",
          alt: "Current driver details and payment screens compared with the redesigned booking summary and payment flow",
          width: 1156,
          height: 651,
          transparentBackground: true,
        },
      ],
    },
    {
      id: "prototype",
      title: "Prototype",
      embed: {
        src: "https://embed.figma.com/proto/IGH3RNVGPJXpwZkTGpfLhI/UXDI-Project-12---Car-Rental-Mobile-Prototype?node-id=580-2743&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=580:2691&starting-point-node-id=580:2743&embed-host=share",
        title: "Interactive Car Rental mobile prototype",
        width: 970,
        height: 570,
        mobilePreview: {
          src: "/images/projects/car-rental-app-redesign/cover.webp",
          alt: "Preview of the interactive car rental prototype showing the redesigned mobile booking flow",
          width: 1200,
          height: 468,
        },
      },
    },
    {
      id: "reflections",
      title: "Reflections",
      paragraphs: [
        "This project confirmed that a smooth booking experience relies on complete transparency at every touchpoint, especially when it comes to pricing and industry terminology.",
        "Testing the design solutions with real users helped me challenge my initial assumptions and transform users' initial hesitations into a smooth and confidence-inspiring user experience.",
      ],
    },
  ],
} satisfies ProjectCaseStudy;
