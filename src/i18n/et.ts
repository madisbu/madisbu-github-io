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
    switchTo: "Vaheta keeleks",
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
      "Kas tohin kasutada Google Analyticsit, et mõista külastusi, kaasatust, CV allalaadimisi ja e-posti linkide klikke? Enne sinu nõusolekut ei saadeta ühtegi Analyticsi päringut ega määrata küpsiseid. Veebileht töötab täpselt samamoodi ka siis, kui keeldud.",
    details:
      "Sinu valik salvestatakse 180 päevaks. Saad meelt muuta või nõusoleku igal ajal tagasi võtta, kasutades nuppu Küpsised.",
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
    letsTalk: "KIRJUTA",
    greetings: ["Tere...", "Hello...", "你好...", "नमस्ते...", "Hola...", "مرحبا...", "Bonjour...", "নমস্কার...", "Olá..."],
    name: "mina olen Madis!",
    role: "UX insener",
    roleRest: "Eestist",
  },
  about: {
    title: "Minust",
    description:
      "Tutvu Madis Burmeisteriga, tehnilise valdkonna vanemprojektijuhi ning UX- ja veebidisaini entusiastiga, ning uuri tema eesmärke ja igapäevast motivatsiooni.",
    portraitAlt: "Madis Burmeister",
    heading: "Kes ma olen?",
    bio: "Olen Madis. Kahe lapse isa. Ametialaselt IT projektijuht. Suurema osa oma profesionaalsest karjäärist olen ellu viinud erinevaid IT-alaseid projekte. Selle kõrvalt huvitab mind ka UX ja veebidisain. Ühendan loovuse, tehnilise oskusteabe ja kasutajakeskse mõtteviisi, et luua digitooteid, mis teevad inimeste elu lihtsamaks.",
    tabsLabel: "Madisest",
    tabs: ["Üldine", "Eesmärgid", "Frustratsioonid"],
    general: {
      age: "Vanus:",
      location: "Asukoht:",
      locationValue: "Eesti",
      occupation: "Praegune amet:",
      occupationValue: "IT Projektijuht",
      certification: "Sertifikaat:",
      certificationValue: "EQF 5. taseme UX-disain",
    },
    goals: [
      "Arendada oma tehnilisi, juhtimis- ja disainioskusi.",
      "Luua digitooteid, mis lahendavad inimeste jaoks päris probleeme.",
      "Uurida, kuidas tehisintellekt (AI) saab muuta tooted ja projektide elluviimise nutikamaks.",
      "Olla eeskujuks oma lastele ja innustada neid olema uudishimulikud.",
    ],
    frustrations: [
      "Piiratud võimalused õppida, areneda või võtta vastu sisukaid väljakutseid.",
      "Panus jääb märkamata või tagasiside ei saa tähelepanu.",
      "Kehv suhtlus ning usalduse ja ühise vastutuse puudumine.",
      "Pidev tulekahjude kustutamine, mis jätab vähe ruumi keskendunud ja läbimõeldud tööle.",
    ],
    outro:
      "Kui ma parajasti ei tööta, armastan reisida. Eriti meeldib mulle ja mu perele autoreisid, mis loovad püsivaid mälestusi. Vaata allpool minu täielikku motivatsioonipaketti…",
    motivation: { lead: "Madise", highlight: "motivatsiooni", tail: "pakett" },
    // Parts marked `mark` are highlighted.
    instruction: [
      { text: "Puuduta", mark: true },
      { text: " või ", mark: false },
      { text: "liigu kursoriga", mark: true },
      { text: " iga pildi kohale, et avastada, mis annab mulle igapäevase energia.", mark: false },
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
        description: "Midagi grillil ja külm õlu käes. See on minu õhtu.",
        alt: "Grill – pilt: Fábio Alves",
      },
      {
        id: "gaming",
        label: "Mängimine",
        description: "Mängimine on minu viis lõõgastuda. Kaotan ajataju, kui mängin „The Last of Us“ või „Red Dead Redemption 2“.",
        alt: "PlayStation – pilt: Igor Karimov",
      },
    ],
    connect: {
      before: "Kas sul on mõttes ühine projekt või tekkis ",
      highlight: "küsimus",
      after: "?",
      cta: "Kirjuta",
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
    note: "Sinu idee ei pea olema lihvitud. Just selleks ongi koostöö.",
    cardTop: "ESIMESEST TERVITUSEST ALATES",
    letterNote: "suur algab väikesest",
    cardHeading: ["Teeme ära."],
    cardText: ["Sina tood idee.", "Järgmise sammu mõtleme koos välja."],
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
          "Kasutajasõbralikum broneerimiskogemus, mis on üles ehitatud selgusele, kindlustundele ja vähematele sammudele.",
        category: "UX/UI disain",
      },
      "waste-disposal-website": {
        title: "Jäätmekäitluse veebileht",
        description:
          "Teenuseleht koos kohandatud tellimusvormiga, mis teeb keerulised päringud lihtsamaks.",
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
    eyebrow: "CV",
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
  privacy: {
    title: "Privaatsus ja küpsised",
    description:
      "Loe, kuidas see veebileht kasutab sinu nõusolekul analüütikat, salvestab sinu küpsisevalikut ja käsitleb privaatsustaotlusi.",
    heading: "Privaatsus ja küpsised",
    updated: "Viimati uuendatud: 7. november 2026",
    sections: [
      {
        heading: "Kes vastutab",
        blocks: [
          {
            p: `Mina olen Madis Burmeister, elan Eestis ja vastutan selle veebilehe analüütika eest. Privaatsusküsimuste või -taotluste korral kirjuta aadressile <a href="mailto:madis.burmeister@mabux.me">madis.burmeister@mabux.me</a>.`,
          },
        ],
      },
      {
        heading: "Valikuline veebilehe analüütika",
        blocks: [
          {
            p: "Sinu loal kasutab see veebileht Google Analytics 4 (GA4) teenust, mida pakub Google Ireland Limited. See aitab mul mõista, kuidas inimesed saiti kasutavad, sealhulgas milliseid lehti nad külastavad, kuidas nad lehega suhtlevad ning millal nad mu CV alla laadivad või e-posti lingil klõpsavad. E-posti lingi klõps näitab katset minuga ühendust võtta; see ei tähenda, et päring oleks lõpule viidud. Ma ei kasuta analüütikat reklaamiks.",
          },
          {
            p: "Google saab tehnilisi andmeid, näiteks sinu seade ja brauser, sinu ligikaudne asukoht IP-aadressi põhjal, külastusajad ja küpsiste identifikaatorid. Google'i sõnul GA4 ei logi ega salvesta üksikuid IP-aadresse. Selle veebilehe lehevaatamise sündmused ei sisalda URL-i päringustringe ega fragmente. E-posti aadresse ja sõnumite sisu ei kaasata, kui klõpsad e-posti lingil.",
          },
          {
            p: "Google Analytics ei laadi, ei määra küpsiseid ega saada päringuid enne, kui valid „Nõustu analüütikaga“. Selle valikulise andmetöötluse õiguslik alus on sinu nõusolek. Saad analüütikast keelduda ja kasutada kogu veebilehte ikkagi.",
          },
        ],
      },
      {
        heading: "Küpsised ja salvestatud valikud",
        blocks: [
          {
            ul: [
              "<strong>mabux.analytics-consent.v1:</strong> salvestab sinu valiku selle seadme kohalikku salvestusruumi (local storage) 180 päevaks. See jätab meelde ainult seda, kas nõustusid analüütikaga või keeldusid; see ei jälgi sinu külastusi.",
              "<strong>_ga ja _ga_*:</strong> valikulised esimese osapoole Google Analyticsi küpsised, mis tuvastavad sinu brauseri ja hoiavad seansi teavet. Need aeguvad 60 päeva pärast ega pikene iga külastusega. Sinu brauser võib need ka varem eemaldada.",
              "<strong>mabux.language.v1:</strong> salvestab sinu keelevaliku (inglise või eesti keel) selle seadme kohalikku salvestusruumi, kui kasutad keelevahetajat. Avalehel kontrollib veebileht ka sinu brauseri keeleseadet, et avada eestikeelne versioon, kui su brauser eelistab eesti keelt. See kontroll toimub sinu brauseris; midagi ei saadeta kuhugi ning seda ei kasutata analüütikaks.",
            ],
          },
          {
            p: `Kasuta nuppu <button type="button" data-cookie-settings>Küpsised</button>, et oma valikut muuta. Kui keeldud pärast nõustumist, lõpetab veebileht edasise jälgimise, eemaldab esimese osapoole Analyticsi küpsised, millele tal on ligipääs, ning laeb lehe uuesti, et Analytics peatada. See ei tühista varasemat andmetöötlust. Brauseri salvestusruumi tühjendamine eemaldab sinu salvestatud valiku.`,
          },
        ],
      },
      {
        heading: "Google'i andmetöötlus ja säilitamine",
        blocks: [
          {
            p: `Google töötleb analüütikaandmeid minu nimel. Ta võib neid töödelda väljaspool Euroopa Majanduspiirkonda, sealhulgas Ameerika Ühendriikides, kohaldatavate lepinguliste ja rahvusvaheliste andmeedastuse kaitsemeetmete alusel. Loe <a href="https://policies.google.com/privacy?hl=et" target="_blank" rel="noopener noreferrer">Google'i privaatsuspoliitikat<span class="sr-only"> (avaneb uuel vahekaardil)</span></a> ja uuri, <a href="https://policies.google.com/technologies/partner-sites?hl=et" target="_blank" rel="noopener noreferrer">kuidas Google kasutab andmeid saitidelt, mis kasutavad tema teenuseid<span class="sr-only"> (avaneb uuel vahekaardil)</span></a>.`,
          },
          {
            p: "GA4 säilitab kasutaja- ja sündmustaseme andmeid kaks kuud. Koondaruandeid võib ta säilitada kauem. See andmete säilitamise periood on eraldi ülalmainitud küpsiste elueast. Selle veebilehe Google'i silt ei luba Google'i signaale ega reklaami isikustamist.",
          },
        ],
      },
      {
        heading: "Majutus, fondid, manustatud sisu ja minuga ühenduse võtmine",
        blocks: [
          {
            p: "GitHub Pages majutab seda veebilehte ning võib selle edastamiseks ja kaitsmiseks töödelda tehnilisi andmeid, näiteks IP-aadresse. Google Fonts saab sinu IP-aadressi ja brauseri päringu andmed fontide laadimisel, olenemata sellest, kas nõustud analüütikaga. Mõned projektilehed sisaldavad kolmandate osapoolte manuseid, mis saavad samuti laadimisel tehnilisi andmeid. Analüütikast keeldumine ei blokeeri fonte ega manuseid.",
          },
          {
            p: "Välistel veebilehtedel on oma privaatsustavad. Kui kirjutad mulle e-kirja, saan teabe, mille valid saata, ja kasutan seda vastamiseks ning kirjavahetuse haldamiseks. Hoian kirjavahetust ainult nii kaua, kui on vaja sinu päringu lahendamiseks, meie koostöösuhte hoidmiseks või õiguslike kohustuste täitmiseks.",
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
