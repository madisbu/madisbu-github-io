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
  "Car Rental App Redesign": "Autorendi rakenduse ümberdisain",
  "Multistep Order Form": "Mitmeastmeline tellimisvorm",
  "PrahiVeod waste disposal website shown across desktop and mobile screens":
    "PrahiVeodi jäätmekäitluse veebileht arvuti- ja mobiilivaates",
  "Responsive service website and guided order form across desktop and mobile.":
    "Kohanduv teenuseveeb ja juhendatud tellimisvorm arvutis ning mobiilis.",
  "My Role": "Minu roll",
  "Web Designer & Developer": "Veebidisainer ja -arendaja",
  "Platforms": "Platvormid",
  "Deliverables": "Tulemid",
  "Web Design · Wix Migration": "Veebidisain · Platvormi vahetus (Wix)",
  "Tools": "Töövahendid",
  "Overview": "Ülevaade",
  "Business context": "Äriline taust",
  "Make a detailed operational service easy to understand and easy to order.":
    "Muuta üksikasjalik teenus arusaadavaks ja lihtsasti tellitavaks.",
  "When ordering waste collection, many variables need to be managed – from the type of waste to location and accessibility. My task was to translate this complexity into a simple web solution and a logical ordering process.":
    "Jäätmeveo tellimisel tuleb hallata paljusid muutujaid – alates jäätmete liigist kuni asukoha ja ligipääsetavuseni. Minu ülesanne oli tõlkida see keerukus lihtsasse veebilahendusse ja loogilisse tellimisteekonda.",
  "The result is a platform with a clear information structure and a strong visual hierarchy. It helps the customer make the right choices and offers a seamless and reliable alternative to time-consuming phone calls.":
    "Tulemuseks on selge inforuumi ja tugeva visuaalse hierarhiaga platvorm. See aitab kliendil teha õigeid valikuid ning pakub aeganõudvatele telefonikõnedele sujuvat ja usaldusväärset alternatiivi.",
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
  "The company lacked a website, which meant the entire ordering process relied on phone calls. If the lines were busy or unanswered, orders and customers were simply lost. The following problems needed to be solved:":
    "Ettevõttel puudus veebileht, mistõttu toetus kogu tellimisprotsess telefonikõnedele. Kui liinid olid kinni või vastamata, jäid tellimused ja kliendid lihtsalt saamata. Lahendamist vajasid järgmised probleemid:",
  "Online invisibility: Due to the lack of a website, potential customers could not find the company.":
    "Nähtamatus veebis: Puuduva veebilehe tõttu ei leidnud potentsiaalsed kliendid ettevõtet üles.",
  "Inaccessible information: There was no public overview of services and pricing, creating uncertainty for the customer.":
    "Info kättesaamatus: Teenuste ja hinnakirja kohta puudus avalik ülevaade, tekitades kliendis ebakindlust.",
  "Lack of branding: The absence of a unified identity hindered the growth of brand awareness and customer trust.":
    "Brändi puudumine: Ühtse identiteedi puudumine takistas tuntuse ja kliendiusalduse kasvatamist.",
  "Dependence on the phone: Without a digital order form, customers had no way to submit inquiries when a customer service representative was unavailable.":
    "Sõltuvus telefonist: Ilma digitaalse tellimisvormita polnud klientidel võimalust päringuid edastada siis, kui klienditeenindaja polnud hetkel kättesaadav.",
  "Waste disposal website shown on two mobile screens":
    "Jäätmekäitluse veebileht kahel mobiilivaates kuval",
  "Workflow": "Töövoog",
  "Challenge": "Väljakutse",
  "Translate the brief into a clear set of design, content, branding, and delivery priorities.":
    "Muuta lähteülesanne selgeteks disaini, sisu, brändi ja teostuse prioriteetideks.",
  "Scoping & Design": "Planeerimine",
  "Project scope": "Projekti ulatus",
  "Custom Build • Phase 1": "Erilahendus • 1. etapp",
  "Project scoping": "Projekti skoop",
  "Client alignments": "Nõuete kooskõlastamine",
  "Sitemap creation": "Sisupuu loomine",
  "Miro & Figma sketches": "Miro/Figma visandid",
  "Web Content": "Sisu ja disain",
  "Content assets": "Sisumaterjalid",
  "Creating texts and assets": "Sisumaterjali loomine",
  "Including images": "Piltide integreerimine",
  "Page testing": "Funktsionaalsuse testimine",
  "Branding & SEO": "Optimeerimine",
  "Search visibility": "Nähtavus otsingus",
  "SEO": "SEO",
  "Page optimization": "Veebilehe tehniline ja kiiruse optimeerimine",
  "Order Form": "Tellimusvorm",
  "Custom Vue.js form": "Kohandatud Vue.js vorm",
  "Custom Build • Phase 2": "Erilahendus • 2. etapp",
  "Custom order flow design": "Tellimusvormi (UI) disain",
  "Vue.js development": "Front-end arendus (Vue.js)",
  "Order validation": "Tellimuse valideerimine",
  "Wix Platform": "Migratsioon",
  "Rebuilt Wix experience": "Wixis uuesti üles ehitatud veebileht",
  "Migration • Phase 3": "Migratsioon • 3. etapp",
  "Migration to Wix platform": "Lahenduse migreerimine Wixi platvormile",
  "Webpage recreation": "Veebilehe struktuuri uuesti ülesehitamine",
  "Order flow reconfiguration": "Tellimusvormi rekonfigureerimine",
  "Client handover": "Projekti lõplik üleandmine kliendile",
  "Sitemap": "Sisupuu",
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
  'As a result of the redesign, the number of orders for "Prahiveod" increased, and the volume of support calls dropped by 15%. The smooth and intuitive self-service ordering process helped scale sales without increasing the team\'s administrative burden.':
    "Disainiuuenduse tulemusel kasvas „Prahiveod“ tellimuste arv ning tugikõnede hulk langes 15%. Sujuv ja intuitiivne iseteeninduslik tellimisteekond aitas skaleerida müüki ilma meeskonna halduskoormust kasvatamata.",
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