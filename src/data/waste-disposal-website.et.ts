import { project } from "./waste-disposal-website";

const translations: Record<string, string> = {
  ...Object.fromEntries(
    [
      "cover",
      "focus-areas-waste",
      "sketch-home",
      "sketch-services",
      "sketch-contact",
      "waste-visuals-transparent",
      "waste-visuals",
    ].map((name) => [
      `/images/projects/waste-disposal-website/${name}.webp`,
      `/images/projects/waste-disposal-website/${name}.et.webp`,
    ]),
  ),
  "Waste Disposal Website": "Jäätmekäitluse veebileht",
  "A clear service website and custom order form designed to simplify waste collection requests.":
    "Selge teenuseveeb ja kohandatud tellimisvorm, mis lihtsustavad jäätmeveo tellimist.",
  "Car Rental App Redesign": "Autorendi rakenduse ümberkujundus",
  "Multistep Order Form": "Mitmeastmeline tellimisvorm",
  "PrahiVeod waste disposal website shown across desktop and mobile screens":
    "PrahiVeodi jäätmekäitluse veebileht arvuti- ja mobiilivaates",
  "Responsive service website and guided order form across desktop and mobile.":
    "Kohanduv teenuseveeb ja juhendatud tellimisvorm arvutis ning mobiilis.",
  "My Role": "Minu roll",
  "Web Designer & Developer": "Veebidisainer ja -arendaja",
  "Platforms": "Platvormid",
  "Deliverables": "Tulemused",
  "Web Design · Wix Migration": "Veebidisain · Wix migratsioon",
  "Tools": "Töövahendid",
  "Overview": "Ülevaade",
  "Business context": "Äriline taust",
  "Make a detailed operational service easy to understand and easy to order.":
    "Muuta üksikasjalik teenus arusaadavaks ja lihtsasti tellitavaks.",
  "Waste collection involves details that can quickly overwhelm a customer: material type, volume, location, timing, and access requirements. This project organizes those decisions into a straightforward website and guided order request flow, giving customers a clearer path from exploring the service to submitting the details the business needs.":
    "Jäätmeveo tellimisel tuleb arvestada paljude üksikasjadega nagu näiteks jäätmete liik, kogus, asukoht, aeg ning nende ligipääs. Selles projektis koondasin need otsused lihtsale veebilehele ja juhendatud tellimisvormi, et klient leiaks sobiva teenuse ning saaks esitada ettevõttele vajalikud andmed.",
  "Clear language and strong visual hierarchy make the service easier to understand while creating a more reliable alternative to phone-only ordering.":
    "Selge sõnastus ja läbimõeldud visuaalne hierarhia aitavad teenust paremini mõista ning pakuvad telefoni teel tellimisele usaldusväärset alternatiivi.",
  "2 formats": "2 vaadet",
  "Desktop and mobile experiences": "Arvuti- ja mobiilivaade",
  "1 flow": "1 tellimisvoog",
  "Guided waste collection request": "Juhendatud jäätmeveo tellimus",
  "6 services": "6 teenust",
  "Scannable service categories": "Lihtsasti haaratavad teenusekategooriad",
  "Responsive": "Kohanduv",
  "Designed across key breakpoints": "Kujundatud eri ekraanisuurustele",
  "Problem": "Probleem",
  "Strategy": "Strateegia",
  "Connect customer tasks with the information the business needs to fulfill an order.":
    "Siduda kliendi vajadused teabega, mida ettevõte tellimuse täitmiseks vajab.",
  "The primary goal was to establish an online presence where none existed before, while making the ordering process more efficient. Previously, customers placed orders by phone, and many were unable to reach a company representative. Without an alternative way to submit a request, potential orders were missed. Four key problem areas emerged from this context:":
    "Projekti peamine eesmärk oli luua seni puudunud veebileht ja muuta jäätmeveo tellimine tõhusamaks. Varem tellisid kliendid telefoni teel ning paljud ei saanud ettevõtte esindajaga ühendust. Kui päringu esitamiseks muud võimalust polnud, jäid tellimused saamata. Sellest olukorrast kerkis esile neli peamist probleemi:",
  "The company had no online presence, so few people in its service area knew it existed.":
    "Ettevõttel puudus veebikohalolek ning vähestel klientidel puudusid teadmised teenusepakkujast.",
  "The available services and pricing were difficult to discover, leaving customers without clear information before ordering.":
    "Teenuste ja hindade kohta oli raske teavet leida, mistõttu puudus klientidel enne tellimist selge ülevaade.",
  "The business lacked a consistent brand identity and social media presence, making it harder to build recognition and trust.":
    "Ettevõttel puudus ühtne bränd ja kohalolek sotsiaalmeedias, mis raskendas tuntuse ning usalduse kasvatamist.",
  "Orders depended entirely on phone calls, so customers had no alternative way to submit a request when representatives were unavailable.":
    "Tellimusi sai esitada ainult telefoni teel, mistõttu puudus klientidel võimalus päring saata, kui ettevõtte esindaja polnud kättesaadav.",
  "Waste disposal website shown on two mobile screens":
    "Jäätmekäitluse veebileht kahel mobiilivaates kuval",
  "Workflow": "Töövoog",
  "Challenge": "Väljakutse",
  "Translate the brief into a clear set of design, content, branding, and delivery priorities.":
    "Muuta lähteülesanne selgeteks disaini, sisu, brändi ja teostuse prioriteetideks.",
  "Scoping & Design": "Lähteülesanne",
  "Project scope": "Projekti ulatus",
  "Custom Build • Phase 1": "Erilahendus • 1. etapp",
  "Project scoping": "Projekti skoop",
  "Client alignments": "Kooskõlastused kliendiga",
  "Sitemap creation": "Saidiplaani koostamine",
  "Miro & Figma sketches": "Miro ja Figma visandid",
  "Web Content": "Veebisisu",
  "Content assets": "Sisumaterjalid",
  "Creating texts and assets": "Materjalide loomine",
  "Including images": "Piltide lisamine",
  "Page testing": "Lehe testimine",
  "Branding & SEO": "Bränding ja SEO",
  "Search visibility": "Nähtavus otsingus",
  "Page optimization": "Lehe optimeerimine",
  "Order Form": "Tellimisvorm",
  "Custom Vue.js form": "Kohandatud Vue.js vorm",
  "Custom Build • Phase 2": "Erilahendus • 2. etapp",
  "Custom order flow design": "Tellimusvormi disain",
  "Vue.js development": "Vue.js arendus",
  "Order validation": "Tellimuse valideerimine",
  "Wix Platform": "Wixi platvorm",
  "Rebuilt Wix experience": "Wixis uuesti üles ehitatud veebileht",
  "Migration • Phase 3": "Migratsioon • 3. etapp",
  "Migration to Wix platform": "Wix migreerimine",
  "Webpage recreation": "Veebilehe taasloomine",
  "Order flow reconfiguration": "Tellimusvormi ümberseadistamine",
  "Client handover": "Üleandmine kliendile",
  "Sitemap": "Saidiplaan",
  "Interface design": "Kasutajaliidese disain",
  "Use the company’s industrial character without sacrificing clarity or accessibility.":
    "Tuua esile ettevõtte tööstuslikku iseloomu, loobumata selgusest ja ligipääsetavusest.",
  "Main": "Avaleht",
  "Services": "Teenused",
  "Scrapping": "Lammutus",
  "Containers": "Konteinerid",
  "Terms": "Tingimused",
  "Waste Types": "Jäätmeliigid",
  "Order": "Tellimine",
  "Contact": "Kontakt",
  "Sketches": "Visandid",
  "Delivery": "Teostus",
  "A web design case study should show that the interface works beyond a polished desktop screenshot.":
    "Veebidisaini juhtumiuuring peaks näitama, et kasutajaliides toimib ka väljaspool viimistletud arvutivaadet.",
  "Early waste disposal website homepage sketch":
    "Jäätmekäitluse veebilehe avalehe esialgne visand",
  "Homepage structure and primary service paths.":
    "Avalehe struktuur ja peamised teenuseteekonnad.",
  "Early waste disposal website services page sketch":
    "Jäätmekäitluse veebilehe teenuste lehe esialgne visand",
  "Services layout with scannable category cards.":
    "Teenuste paigutus kiiresti haaratavate kategooriakaartidega.",
  "Early waste disposal website contact page sketch":
    "Jäätmekäitluse veebilehe kontaktilehe esialgne visand",
  "Contact page sketch with form and location content.":
    "Kontaktilehe visand vormi ja asukohateabega.",
  "Visuals": "Visuaalid",
  "Impact": "Mõju",
  "Connect the finished website to business value and ongoing ownership.":
    "Siduda valmis veebileht ärilise väärtuse ja edasise haldamisega.",
  "PrahiVeod waste disposal website displayed across desktop and mobile screens":
    "PrahiVeodi jäätmekäitluse veebileht arvuti- ja mobiilivaates",
  "Reflections": "Kokkuvõte",
  "Learn": "Õppetunnid",
  'The redesigned digital ordering platform for "Prahiveod" increased overall service bookings while cutting incoming support calls by ~15%. By optimizing the self-service order flow, the solution successfully scaled sales volume without increasing the team\'s support workload.':
    "„Prahiveod“ ümberkujundatud tellimisplatvorm suurendas teenuste tellimusi ja vähendas samal ajal sissetulevaid tugikõnesid ligikaudu 15%. Iseteenindusliku tellimisvoo täiustamine aitas müügimahtu kasvatada ilma tugimeeskonna töökoormust suurendamata.",
};

function translate<T>(value: T): T {
  if (typeof value === "string") {
    return (translations[value] ?? value) as T;
  }
  if (Array.isArray(value)) {
    return value.map(translate) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, translate(child)]),
    ) as T;
  }
  return value;
}

export const projectEt = translate(project);