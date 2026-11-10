import type { Dictionary } from "./en.ts";

// Estonian copy. Keys mirror `en.ts`; a missing key fails `npm run check`.
export const et: Dictionary = {
  htmlLang: "et",
  ogLocale: "et_EE",
  site: {
    defaultTitle: "Madis Burmeister - UX- ja veebidisain",
    defaultDescription:
      "Eestis tegutseva UX-insener ja tehnilise projektijuhi Madis Burmeisteri portfoolio.",
    skipLink: "Liigu sisu juurde",
    jobTitle: "Tehnilise valdkonna vanemprojektijuht",
  },
  nav: {
    home: "Avaleht",
    projects: "Projektid",
    about: "Minust",
    resume: "CV",
    contact: "Kontakt",
    mainLabel: "Peamenüü",
    homeAria: "Mabux avaleht",
    menu: "Menüü",
    openMenu: "Ava menüü",
    closeMenu: "Sulge menüü",
  },
  language: {
    label: "Keel",
  },
  footer: {
    copyright: (year: number) => `Autoriõigus © Madis Burmeister ${year}`,
    socialLabel: "Sotsiaalmeedia lingid",
    quickLinksLabel: "Mobiili kiirlingid",
    whatsapp: "WhatsApp",
    email: "E-post",
  },
  consent: {
    controlsLabel: "Privaatsuse seaded",
    privacy: "Privaatsus",
    cookies: "Küpsised",
    eyebrow: "VALIKULINE ANALÜÜTIKA",
    title: "Sinu privaatsus, sinu valik.",
    description:
      "Kas tohin kasutada Google Analyticsit, et analüüsida lehe külastatavust, kasutajate kaasatust, CV allalaadimisi ja e-posti linkidele klikkimist? Ilma sinu nõusolekuta ei edastata Google Analyticsile andmeid ega salvestata sinu seadmesse küpsiseid. Veebileht töötab täpselt samamoodi ka siis, kui sa keeldud.",
    details:
      "Sinu valik salvestatakse 180 päevaks. Saad oma eelistust igal ajal muuta või nõusoleku tagasi võtta, kasutades nuppu „Küpsised“.",
    readNotice: "Loe privaatsusteadet",
    reject: "Keeldu analüütikast",
    accept: "Nõustu analüütikaga",
    noscript: "Analüütika on välja lülitatud, sest JavaScript on keelatud.",
    messages: {
      storageUnreadable:
        "Sinu brauser ei saa küpsiste valikuid salvestada. Analüütika jääb välja lülitatuks, kuni sellel lehel nõustud.",
      loadFailed: "Analüütikat ei õnnestunud laadida. Saad veebilehte endiselt täielikult kasutada.",
      storageUnwritable: "Sinu valik kehtib ainult sellel lehel, kuna brauseri salvestusruum pole saadaval.",
      statusOn: "Analüütika on sisse lülitatud. Saad allpool oma valikut muuta.",
      statusOff: "Analüütika on välja lülitatud. Saad allpool oma valikut muuta.",
      disabled: "Analüütika on sellel aadressil või versioonis keelatud. Analüütikaandmeid ei saadeta.",
    },
  },
  backToTop: {
    label: "Tagasi üles",
    caption: "TAGASI ÜLES",
  },
  home: {
    description:
      "Tutvu Madis Burmeisteri UX- ja veebidisaini portfooliooga: kiired ja läbimõeldud veebitooted ning puhtad kasutajaliidesed, mille taustal on tehnilise projektijuhtimise kogemus Eestis.",
    heroAlt: "Madise portree",
    viewProjects: "VAATA PROJEKTE",
    letsTalk: "KIRJUTA MULLE",
    greetings: ["Tere...", "Hello...", "你好...", "नमस्ते...", "Hola...", "مرحبا...", "Bonjour...", "নমস্কার...", "Olá..."],
    name: "olen Madis !",
    role: "UX insener",
    roleRest: "Eestist",
  },
  about: {
    title: "Minust",
    description:
      "Tutvu Madis Burmeisteriga, tehnilise valdkonna vanemprojektijuhi ning UX- ja veebidisaini entusiastiga, ning uuri tema eesmärke ja igapäevast motivatsiooni.",
    portraitAlt: "Madis Burmeister",
    heading: "Kes ma olen?",
    bio: "Olen Madis. Abikaasa ja kahe lapse isa. Ametialaselt tehniline projektijuht. Suurema osa oma profesionaalsest karjäärist olen ellu viinud erinevaid IT-alaseid projekte. Selle kõrvalt huvitab mind ka UX ja veebidisain. Ühendan loovuse, tehnilised oskused ja kasutajakeskse mõtteviisi, et luua digitooteid, mis teevad inimeste elu lihtsamaks.",
    tabsLabel: "Madisest",
    tabs: ["Üldine", "Eesmärgid", "Frustratsioonid"],
    general: {
      age: "Vanus:",
      location: "Asukoht:",
      locationValue: "Eesti",
      occupation: "Praegune amet:",
      occupationValue: "IT vanemprojektijuht",
      certification: "Sertifikaat:",
      certificationValue: "EQF 5. taseme UX-disain",
    },
    goals: [
      "Arendada oma tehnilisi, juhtimis- ja disainioskusi.",
      "Luua digitooteid, mis lahendavad inimeste jaoks päris probleeme.",
      "Uurida, kuidas tehisintellekt (AI) aitab muuta tooteid ja projektide elluviimist nutikamaks.",
      "Olla eeskujuks oma lastele ja innustada neid olema uudishimulikud.",
    ],
    frustrations: [
      "Piiratud võimalused õppida, areneda või võtta vastu sisukaid väljakutseid.",
      "Panus jääb märkamata või tagasiside ei saa tähelepanu.",
      "Kehv suhtlus ning usalduse ja ühise vastutuse puudumine.",
      "Pidev tulekahjude kustutamine, mis jätab vähe ruumi keskendunud ja läbimõeldud tööle.",
    ],
    outro:
      "Kui ma parajasti ei tööta, armastan reisida. Eriti meeldivad mu perele autoreisid, mis loovad püsivaid mälestusi. Vaata allpool minu täielikku motivatsioonipaketti…",
    motivation: { lead: "Madise", highlight: "motivatsiooni", tail: "pakett" },
    // Parts marked `mark` are highlighted.
    instruction: [
      { text: "Puuduta", mark: true },
      { text: " või ", mark: false },
      { text: "liigu", mark: true },
      { text: " kursoriga pildi kohale, et avastada, mis annab mulle mu igapäevase energia.", mark: false },
    ],
    interests: [
      {
        id: "travelling",
        label: "Reisimine",
        description: "Jaapan, Island, Maroko, Nepal... minu reisisoovide nimekiri aina kasvab.",
        alt: "Pilt: Jonah Brown",
      },
      {
        id: "football",
        label: "Jalgpall",
        description: "Mängin jalgpalli juba üle 20 aasta. See on mul veres.",
        alt: "Jalgpall",
      },
      {
        id: "family",
        label: "Pere",
        description: "Minu pere tähendab mulle kõike. Nii lihtne see ongi.",
        alt: "Pilt: Adam Sherez",
      },
      {
        id: "bbq",
        label: "Grill",
        description: "Picanha grillil ja külm Corona käes. Just selline on minu lemmik suvine õhtu.",
        alt: "Grill – pilt: Fábio Alves",
      },
      {
        id: "gaming",
        label: "Mängimine",
        description: "Videomängud on minu lõõgastumisviis. Kaotan ajataju, kui mängin mänge nagu „The Last of Us“ või „GTA VI“.",
        alt: "PlayStation – pilt: Igor Karimov",
      },
    ],
    connect: {
      before: "Kas sul on mõttes ühine projekt või tekkis ",
      highlight: "küsimus",
      after: "?",
      cta: "Kirjuta mulle",
    },
  },
  contact: {
    title: "Kontakt",
    description:
      "Kas sul on projekt mõttes? Teeme midagi ära. Kirjuta Eestis tegutsevale Madis Burmeisterile, et arutada oma järgmist veebiprojekti või koostööd.",
    eyebrow: "UUS PROJEKT? POOLIK IDEE?",
    headingBefore: "Head asjad algavad ",
    headingHighlight: "vestlusest.",
    emailLabel: "Ei mingeid vorme. Ei mingeid takistusi. Ütle lihtsalt tere.",
    noMailApp: "Pole meilirakendust?",
    copyAddress: "Kopeeri aadress",
    openIn: "Ava {name}",
    newTab: " (avaneb uuel vahekaardil)",
    letterNote: "suur töö algab väikesest ideest",
    cardHeading: ["Teeme ära."],
    cardText: ["Sina tood idee või probleemi.", "Järgmise sammu mõtleme koos välja."],
    cardBottom: "VÄHEM ÜLEMÕTLEMIST, ROHKEM TERVITUSI.",
    goodToKnow: "Hea teada",
    reachOut: {
      label: "MILLAL KIRJUTADA",
      value: "Kirjuta mulle igal ajal.",
      note: "Vastan tavaliselt 1–2 päeva jooksul.",
    },
    basedIn: {
      label: "ASUKOHT",
      value: "Eesti (EET/EEST)",
      note: "Väike riik. Lai maailm.",
    },
    talkIn: {
      label: "SUHTLUSKEEL",
      value: "Inglise või eesti keeles",
      note: "Selge keel, mitte tehniline žargoon.",
    },
    copied: "Aadress {email} kopeeriti lõikelauale.",
    copyFailed: "Automaatne kopeerimine ei õnnestunud. Aadress on {email}.",
  },
  projects: {
    title: "Projektid",
    description: "Madis Burmeisteri UX/UI-, veebidisaini- ja tootearendusprojektid.",
    heading: "Projektid",
    sectionLabel: "Portfoolioprojektid",
    categoriesLabel: "Projektide kategooriad",
    filters: { all: "KÕIK TÖÖD", "ux-ui": "UX/UI", web: "VEEB", product: "TOODE" },
    viewProject: "Vaata projekti",
    shownOne: "{count} projekt kuvatud",
    shownOther: "{count} projekti kuvatud",
    items: {
      "car-rental-app-redesign": {
        title: "Autorendi rakenduse ümberdisain",
        description:
          "Kasutajasõbralikum autorendi broneerimiskogemus, mis on üles ehitatud selgusele ja kindlustundele.",
        category: "UX/UI disain",
      },
      "waste-disposal-website": {
        title: "Jäätmekäitluse veebileht",
        description:
          "Veebileht koos kohandatud tellimusvormiga, mis teeb keerulised päringud lihtsamaks.",
        category: "Veebidisain",
      },
      "multistep-order-form": {
        title: "Mitmeastmeline tellimisvorm",
        description:
          "Tellimusvoog, mis juhib kasutaja struktureeritud ostuni ilma liigsete takistusteta.",
        category: "Tootearendus",
      },
    },
  },
  resume: {
    title: "Madis Burmeisteri CV",
    description: (name: string) =>
      `${name} CV: üle kümne aasta kogemusega IT-projektijuht. Töökogemus, haridus, oskused ja tööriistad.`,
    viewResume: "Vaata CV-d",
    newTab: "(avaneb uuel vahekaardil)",
    experience: "Töökogemus",
    current: "Praegune",
    careerBreak: "Karjääripaus",
    present: "Praegu",
    now: "Praegu",
    tagsLabel: "Oskused ja tööriistad",
    education: "Haridus",
    certifications: "Kursused ja sertifikaadid",
    diploma: "Diplom",
    certificate: "Sertifikaat",
    linkFor: (name: string) => ` – ${name} (avaneb uuel vahekaardil)`,
    skills: "Oskused",
    languages: "Keeled",
    tools: "Tööriistad",
    dates: {
      monthNames: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
      present: "Praegu",
      year: "aasta",
      years: "aastat",
      month: "kuu",
      months: "kuud",
    },
    countryFlags: { Eesti: "/flags/estonia.svg", Hispaania: "/flags/spain.svg", Austraalia: "/flags/australia.svg" },
  },
  notFound: {
    title: "Lehte ei leitud",
    description: "Seda lehte ei leitud. Tutvu Madis Burmeisteri projektidega või naase avalehele.",
    code: "404",
    heading: "Näib, et oled eksinud.",
    message: "See leht võib olla teisaldatud või aadress on vale. Aitame sind õigele teele tagasi.",
    navLabel: "Lehe puudumise navigatsioon",
    home: "Tagasi avalehele",
    projects: "Uuri projekte",
  },
  privacy: {
    title: "Privaatsustingimused ja küpsised",
    description:
      "Loe, kuidas see veebileht kasutab sinu nõusolekul analüütikat, salvestab sinu küpsisevalikut ja käsitleb privaatsustaotlusi.",
    heading: "Privaatsustingimused ja küpsised",
    updated: "Viimati uuendatud: 10. november 2026",
    sections: [
      {
        heading: "Vastutav töötleja",
        blocks: [
          {
            p: `Mina, Madis Burmeister (asukoht Eesti), olen selle veebilehe andmetöötluse eest vastutav töötleja. Privaatsusküsimuste või andmesubjekti taotluste korral kirjuta mulle aadressil <a href="mailto:madis.burmeister@mabux.me">madis.burmeister@mabux.me</a>.`,
          },
        ],
      },
      {
        heading: "Vabatahtlik veebianalüütika",
        blocks: [
          {
            p: "Sinu nõusolekul kasutab see veebileht Google Ireland Limitedi pakutavat teenust Google Analytics 4 (GA4). See aitab mul analüüsida, kuidas külastajad lehte kasutavad – milliseid alamlehti nad vaatavad, kuidas lehega suhtlevad ning millal nad laadivad alla minu CV või klikivad e-posti lingil. E-posti lingile klikkimine registreeritakse kui kontaktivõtu soov, kuid see ei tähenda otseselt kirja ärasaatmist. Ma ei kasuta analüütikat reklaamieesmärkidel.",
          },
          {
            p: "Google kogub tehnilisi andmeid, näiteks infot sinu seadme ja veebilehitseja (brauseri) kohta, ligikaudset asukohta IP-aadressi põhjal, külastusaegu ja küpsiste identifikaatoreid. Google'i kinnitusel GA4 üksikuid IP-aadresse ei logi ega salvesta. Selle veebilehe lehevaatamiste (pageview) sündmused ei edasta URL-i parameetreid (query strings) ega fragmente. E-posti lingile klikkimisel ei edastata sinu e-posti aadressi ega sõnumi sisu.",
          },
          {
            p: "Google Analytics ei käivitu, ei salvesta küpsiseid ega saada päringuid enne, kui oled valinud „Nõustu analüütikaga“. Selle valikulise andmetöötluse õiguslikuks aluseks on sinu nõusolek. Sul on õigus analüütikast keelduda ja veebileht töötab sellegipoolest tõrgeteta.",
          },
        ],
      },
      {
        heading: "Küpsised ja salvestatud eelistused",
        blocks: [
          {
            ul: [
              "<strong>mabux.analytics-consent.v1:</strong> salvestab sinu analüütikaeelistuse seadme kohalikku andmehoidlasse (local storage) 180 päevaks. See jätab meelde vaid selle, kas nõustusid analüütikaga või keeldusid sellest; see ei jälgi sinu külastusi.",
              "<strong>_ga ja _ga_*:</strong> esimese osapoole valikulised Google Analyticsi küpsised, mis tuvastavad sinu brauseri ja hoiavad seansiinfot. Need aeguvad 60 päeva pärast ning nende kehtivusaeg ei pikene iga uue külastusega. Soovi korral saad need oma brauserist ka varem kustutada.",
              "<strong>mabux.language.v1:</strong> salvestab seadme kohalikku andmehoidlasse sinu keele-eelistuse (inglise või eesti keel), kui kasutad keelevaliku nuppu. Avalehel kontrollib veebileht ka sinu brauseri keeleseadistust, et kuvada eestikeelne versioon, kui sinu eelistatud keel on eesti keel. See kontroll toimub lokaalselt sinu brauseris; andmeid ei edastata kuhugi ning neid ei kasutata analüütikaks.",
            ],
          },
          {
            p: `Oma eelistuste muutmiseks kasuta nuppu „<button type="button" data-cookie-settings>Küpsised</button>“. Kui otsustad varasema nõusoleku tagasi võtta, lõpetab veebileht edasise jälgimise, kustutab talle ligipääsetavad esimese osapoole Analyticsi küpsised ning värskendab Analyticsi peatamiseks lehte. See ei tühista varasemat andmetöötlust. Brauseri andmehoidla (cache/storage) tühjendamine eemaldab ka sinu salvestatud eelistused.`,
          },
        ],
      },
      {
        heading: "Google'i andmetöötlus ja -säilitamine",
        blocks: [
          {
            p: `Google töötleb analüütikaandmeid minu nimel. Neid andmeid võidakse töödelda ka väljaspool Euroopa Majanduspiirkonda (näiteks Ameerika Ühendriikides), järgides kohaldatavaid lepingulisi ja rahvusvahelisi andmeedastuse kaitsemeetmeid. Loe lisaks <a href="https://policies.google.com/privacy?hl=et" target="_blank" rel="noopener noreferrer">Google'i privaatsuspoliitikat<span class="sr-only"> (avaneb uuel vahekaardil)</span></a> ja uuri, <a href="https://policies.google.com/technologies/partner-sites?hl=et" target="_blank" rel="noopener noreferrer">kuidas Google kasutab andmeid saitidelt, mis kasutavad nende teenuseid<span class="sr-only"> (avaneb uuel vahekaardil)</span></a>.`,
          },
          {
            p: "GA4 säilitab kasutaja- ja sündmustaseme andmeid kaks kuud. Koondaruandeid võidakse säilitada kauem. See andmete säilitamise periood on eraldiseisev ülalmainitud küpsiste elueast. Sellele veebilehele paigaldatud Google'i märgend (tag) ei kasuta Google'i signaale (Google Signals) ega luba reklaamide isikupärastamist.",
          },
        ],
      },
      {
        heading: "Veebimajutus, fondid, manustatud sisu ja minuga ühenduse võtmine",
        blocks: [
          {
            p: "Seda veebilehte majutab GitHub Pages, mis võib lehe kuvamiseks ja turvalisuse tagamiseks töödelda tehnilisi andmeid, näiteks IP-aadresse. Google Fonts saab fontide laadimisel kätte sinu IP-aadressi ja brauseri päringu info, olenemata sellest, kas sa nõustud analüütikaga või mitte. Mõned projektide lehed sisaldavad kolmandate osapoolte manustatud sisu (embeds), mis saavad laadimisel samuti tehnilisi andmeid. Analüütikast keeldumine ei blokeeri fonte ega manustatud sisu.",
          },
          {
            p: "Välistel veebilehtedel kehtivad nende endi privaatsustingimused. Kui kirjutad mulle e-kirja, saan teabe, mille otsustad mulle edastada, ning kasutan seda vastamiseks ja kirjavahetuse haldamiseks. Säilitan kirjavahetust vaid nii kaua, kui see on vajalik sinu päringu lahendamiseks, meie koostöö hoidmiseks või juriidiliste kohustuste täitmiseks.",
          },
        ],
      },
      {
        heading: "Sinu õigused",
        blocks: [
          {
            p: `Sõltuvalt sinu olukorrast saad paluda juurdepääsu oma isikuandmetele, nende parandamist või kustutamist, nende kasutamise piiramist või andmete saamist kaasaskantavas vormingus. Samuti saad esitada vastuväite õigustatud huvidel põhinevale töötlemisele ja võtta oma analüütikanõusoleku igal ajal tagasi. Kirjuta mulle ülaltoodud aadressil. Võin paluda täpsustusi, et sinu andmeid tuvastada. Samuti saad esitada kaebuse Eesti <a href="https://www.aki.ee/">Andmekaitse Inspektsioonile</a>.`,
          },
        ],
      },
    ],
  },
};
