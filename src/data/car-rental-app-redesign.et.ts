import { project } from "./car-rental-app-redesign";

const translations: Record<string, string> = {
  "Car Rental App Redesign": "Autorendi rakenduse ümberkujundus",
  "A faster, clearer mobile experience for finding and booking the right rental car.":
    "Kiirem ja selgem mobiilikogemus sobiva rendiauto leidmiseks ja broneerimiseks.",
  "Multistep Order Form": "Mitmeastmeline tellimisvorm",
  "Waste Disposal Website": "Jäätmekäitluse veebileht",
  "Car rental mobile app screens showing search, vehicle selection, extras, and payment":
    "Autorendirakenduse vaated: otsing, auto valimine, lisateenused ja maksmine",
  "End-to-end mobile booking flow from vehicle search to payment.":
    "Täielik mobiilne broneerimisteekond auto otsingust maksmiseni.",
  "My Role": "Minu roll",
  "UX/UI Designer": "UX/UI disainer",
  "Platform": "Platvorm",
  "Deliverables": "Tulemused",
  "UX/UI & Interaction Design": "UX/UI ja interaktsioonidisain",
  "Tools": "Töövahendid",
  "Overview": "Ülevaade",
  "Context": "Kontekst",
  "Redesigning a complex rental journey around clarity, trust, and confident decisions.":
    "Keeruka autorendi teekonna ümberkujundamine selguse, usalduse ja kindlate otsuste nimel.",
  "This solo project explored how a car rental app could make booking more approachable. The work focused on helping customers compare vehicles, understand costs, and reserve a car through fewer, more predictable steps.":
    "Selles iseseisvas projektis uurisin, kuidas muuta mobiilirakenduse kaudu rendi auto broneerimine lihtsamaks. Aitasin klientidel sõidukeid võrrelda ja kuludest paremini aru saada. Samuti soovisin auto broneerimist saavutada väiksema arvu ja selgemate sammudega.",
  "The redesign balances speed with the information people need to make a confident choice, from useful filters and clearer price breakdowns to a less disruptive guest checkout experience.":
    "Ümberkujunduse eesmärk oli aidata kasutajatel teha teadlikke ja kindlaid valikuid. Selleks pakub rakendus kasulikke filtreid, selgemat hinnajaotust ja sujuvamat broneerimist.",
  "Problem": "Probleem",
  "Define": "Määratlemine",
  "Rental customers need transparent information without a slow or overwhelming booking process.":
    "Autorendi kliendid vajavad läbipaistvat teavet, ilma et broneerimine oleks aeglane või üle jõu käiv.",
  "Car rental customers often complain that most mobile apps feature non-transparent or even incorrect pricing. Apps include distracting promo banners and login pop-ups, hindering a smooth booking process. Pricing explanations contain confusing acronyms, further eroding trust between end users and rental companies. This poor user experience negatively impacts rental businesses, resulting in fewer orders.":
    "Autorendi kliendid kurdavad sageli, et paljude mobiilirakenduste hinnad pole läbipaistvad või on lausa valed. Reklaambännerid ja sisselogimise hüpikaknad segavad sujuvat broneerimist. Hinnaselgitustes leidub segadust tekitavaid lühendeid, mis vähendavad veelgi lõppkasutajate usaldust rendiettevõtete vastu. Halb kasutajakogemus kahjustab rendiettevõtteid ja vähendab tellimuste arvu.",
  "distracting promo banners": "segavad reklaambännerid",
  "login pop-ups": "sisselogimise hüpikaknad",
  "confusing acronyms": "segadust tekitavad lühendid",
  "Scenario A": "Stsenaarium A",
  "Pricing": "Hinnastamine",
  "Total price is unclear": "Koguhind pole selge",
  "Fees and cover costs appear late or change between search results and checkout.":
    "Lisatasud ja kaitsepakettide hinnad selguvad sageli alles broneerimise lõppfaasis ning võivad otsingutulemuste ja maksmise vahel muutuda.",
  "Customer trust declines": "Kliendi usaldus väheneb",
  "Customers question whether the offer is accurate and pause to compare alternatives.":
    "Kliendid kahtlevad pakkumise täpsuses ja peatavad broneerimise, et alternatiive võrrelda.",
  "Bookings move elsewhere": "Broneering tehakse mujal",
  "More transparent competitors become the safer and easier choice.":
    "Läbipaistvamad konkurendid tunduvad turvalisema ja lihtsama valikuna.",
  "Scenario B": "Stsenaarium B",
  "Booking terminology": "Broneerimise terminid",
  "Cover options are difficult to decode": "Kaitsepakettide valikust on raske aru saada",
  "Terms such as CDW, LDW, and PAI appear without enough plain-language context.":
    "CDW, LDW ja PAI tüüpi lühenditele ei lisata lihtsaid ja arusaadavaid selgitusi.",
  "Decision confidence drops": "Kindlus otsuse tegemisel väheneb",
  "Customers cannot tell what they need, what is included, or what are the trade-offs.":
    "Kliendid ei tea, mida nad vajavad, mida pakett sisaldab ega milliseid kompromisse see kaasa toob.",
  "Checkout is abandoned": "Broneerimine jääb pooleli",
  "Uncertainty interrupts the booking flow before customers complete payment.":
    "Ebakindlus katkestab broneerimise enne makse sooritamist.",
  "Key insights": "Peamised tähelepanekud",
  "of research respondents preferred using a mobile app instead of a desktop site, indicating low mobile adoption for online rental services.":
    "uuringus osalenutest eelistas lauaarvutis kasutatavale veebilehele mobiilirakendust, mis viitab autorenditeenuste vähesele kasutuselevõtule mobiilis.",
  "of research participants rated the overall online car rental experience 5 out of 5, the highest possible score.":
    "uuringus osalenutest hindas üldist autorendi veebikogemust maksimaalse hindega 5/5.",
  "The average rating for four major car rental company apps in Google Play Store is 3.65 on a 5-point scale":
    "Nelja suure autorendifirma rakenduse keskmine hinnang Google Play poes on 5-pallisel skaalal 3,65.",
  "5-point scale": "5-pallisel skaalal",
  "Very poor. Searching/booking for cars sometimes works, but can also be 200% more expensive than simultaneous search on website/laptop. You have to check.":
    "Väga halb. Autode otsimine ja broneerimine vahel toimib, kuid võib samal ajal veebilehel või sülearvutis tehtud otsingust ka 200% kallim olla. Seda peab kontrollima.",
  "Account charged for 3 times for the full amount without successful booking. Every attempt to book would result in an error message. This should not be possible by design. At the moment I have no idea how to retrieve my money.":
    "Kontolt võeti kogu summa kolm korda, kuigi broneering ei õnnestunud. Iga katse lõppes veateatega. Selline olukord ei tohiks rakenduse ülesehituse tõttu võimalik olla. Praegu ei tea ma, kuidas raha tagasi saada.",
  "Made two booking at nearly same time. One on app and one online. App one did not include the basic insurance. 3£ per day insurance through website on other booking. Ended up costing 30£ per day for same insurance at airport. Will not risk booking though app again.":
    "Tegin peaaegu samal ajal kaks broneeringut: ühe rakenduses ja teise veebis. Rakenduse broneering ei sisaldanud põhikindlustust. Veebis maksis kindlustus 3 naela päevas, lennujaamas aga lõpuks 30 naela päevas. Ma ei riski enam rakenduse kaudu broneerida.",
  "Never trust this company. After renting the car and paying online, we went to get the car, first they offer different car than what we chose, and they asked to pay 1500£ for insurance. Went to another company and rented a car without any hidden fees or unclear details.":
    "Ärge seda firmat usaldage. Pärast auto rentimist ja veebis maksmist pakuti meile autot kätte saades teistsugust autot, kui olime valinud, ning küsiti kindlustuse eest 1500 naela. Läksime teise firmasse ja rentisime auto ilma varjatud tasude või ebaselgete tingimusteta.",
  "Research & Discovery": "Uuring ja avastamine",
  "Understand": "Mõistmine",
  "Use evidence to separate genuine customer needs from assumptions about the rental process.":
    "Kasuta tõendeid, et eristada klientide tegelikke vajadusi oletustest autorendi kohta.",
  "Competitive Benchmarking": "Konkurentide võrdlus",
  "Compared major car rental products to identify common patterns, trust signals, and recurring friction.":
    "Võrdlesin suuremate autorendifirmade tooteid, et leida levinud mustreid, usaldust loovaid elemente ja korduvaid takistusi.",
  "Competitive benchmarking let me study how similar rental companies address common booking problems without recruiting participants.":
    "Konkurentide võrdlusuuring aitas uurida, kuidas sarnased rendiettevõtted lahendavad levinud broneerimisprobleeme, ilma et oleksin pidanud osalejaid värbama.",
  "Discovery: One company advertised a 15% discount for online payment. Yet 15% off €573.76 is €487.70 not the advertised €500.15.":
    "Avastus: üks ettevõte reklaamis veebis maksmisel 15% allahindlust. 15% soodustust hinnast 573,76 € arvestades oleks lõpphind 487,70 €, mitte reklaamitud 500,15 €.",
  "Discovery:": "Avastus:",
  "Car rental payment screen advertising a 15% online-payment discount, with €500.15 online and €573.76 at-branch prices":
    "Autorendi maksevaade reklaamib veebis maksmisel 15% soodustust: veebihind 500,15 € ja kontorihind 573,76 €",
  "/images/projects/car-rental-app-redesign/research/benchmarking.webp":
    "/images/projects/car-rental-app-redesign/research/benchmarking.et.png",
  "Read Full Review": "Loe täielikku arvustust",
  "Online Survey": "Veebiküsitlus",
  "Gathered customer expectations and preferences around mobile booking, pricing, and rental terminology.":
    "Kogusin klientide ootusi ja eelistusi mobiilse broneerimise, hinnastamise ja autorenditerminite kohta.",
  "I used an online survey to identify where rental customers struggle and gather both quantitative and qualitative evidence.":
    "Kasutasin veebiküsitlust, et selgitada välja autorendi klientide raskused ning koguda nii kvantitatiivseid kui ka kvalitatiivseid andmeid.",
  "One question asked, “What would you change about the app you used?” The responses reveal recurring needs for clearer pricing, simpler booking, and fewer advertisements.":
    "Üks küsimus kõlas: „Mida muudaksid kasutatud rakenduses?” Vastustest ilmnes korduv vajadus selgemate hindade, lihtsama broneerimise ja väiksema reklaamihulga järele.",
  "Survey responses about improving rental apps, including clearer pricing and fewer advertisements":
    "Kasutajate vastused autorendirakenduse kohta: soov selgema hinnateabe ja vähema reklaami järele",
  "/images/projects/car-rental-app-redesign/research/survey.png":
    "/images/projects/car-rental-app-redesign/research/survey.et.png",
  "Read Full Survey": "Loe küsitluse vastuseid",
  "Usability Testing": "Kasutusmugavuse testimine",
  "Observed customers completing core booking tasks to uncover comprehension issues and points of hesitation.":
    "Jälgisin, kuidas kliendid täitsid peamisi broneerimisülesandeid, et märgata arusaamisraskusi ja kõhklusi.",
  "Helen about Sixt": "Helen Sixti kohta",
  "When using any type of booking sites, I usually do not sign-up places that I do not use occasionally.":
    "Broneerimissaite kasutades ei registreeru ma tavaliselt sellistes kohtades, mida kasutan vaid aeg-ajalt.",
  "I don’t understand what is premium location fee and in which step was it added to my order?":
    "Ma ei saa aru, mis on asukohatasu ja millises etapis see minu tellimusele lisati.",
  "Mary & Sarah about Green Motion": "Mary ja Sarah Green Motioni kohta",
  "I did not understand what CDW means and what are the risk reductions.":
    "Ma ei saanud aru, mida CDW tähendab ja milliseid riske see vähendab.",
  "User Journey": "Kasutaja teekond",
  "Information architecture": "Infoarhitektuur",
  "A clear sequence turns a large booking task into a set of manageable decisions. Tap any step to see the pain point it addresses and the UX solution behind it.":
    "Selge järjestus jaotab suure broneerimisülesande hallatavateks otsusteks. Puuduta sammu, et näha sellega seotud probleemi ja UX-lahendust.",
  "Start": "Algus",
  "Finish": "Lõpp",
  "Main": "Avaleht",
  "Land on the home screen and start a new search with location and dates.":
    "Ava avaleht ja alusta uut otsingut, määrates asukoha ja kuupäevad.",
  "Step 1": "1. samm",
  "Pain point": "Valukoht",
  "Distracting promo banners and login pop-ups interrupt customers before they even start searching.":
    "Segavad reklaambännerid ja sisselogimise hüpikaknad katkestavad kliendi enne otsingu alustamist.",
  "UX solution": "UX-lahendus",
  "Start searching with absolutely zero interruptions—no banners or forced sign-in up front.":
    "Alusta otsingut täiesti segamatult – ilma bännerite ja kohustusliku sisselogimiseta.",
  "Search": "Otsing",
  "Browse results on a map and list, then refine with meaningful filters.":
    "Sirvi tulemusi kaardil ja loendis ning täpsusta neid asjakohaste filtritega.",
  "Step 2": "2. samm",
  "A broken map view and confusing filtering or sorting options make results hard to trust.":
    "Mittetoimiv kaardivaade ning segased filtreerimis- ja sortimisvalikud muudavad tulemused ebausaldusväärseks.",
  "A reliable map and list view with clear filters that actually narrow down results.":
    "Töökindel kaardi- ja loendivaade koos selgete filtritega, mis aitavad tulemusi päriselt kitsendada.",
  "Car Details": "Auto andmed",
  "Compare a specific vehicle's specifications, availability, and full pricing.":
    "Võrdle konkreetse auto tehnilisi andmeid, saadavust ja koguhinda.",
  "Confusing pricing logic. Final price not transparent.":
    "Hinnastamine on segane ja lõpphind pole läbipaistev.",
  "A complete, transparent price breakdown that's visible before any extra steps.":
    "Täielik ja läbipaistev hinnajaotus, mis on nähtav juba enne lisasamme.",
  "Covers": "Kaitse",
  "Choose a protection plan with contextual explanations of what's included.":
    "Vali kaitsepakett koos selgitustega selle sisu kohta.",
  "Step 3": "3. samm",
  "Cover options use acronyms like CDW, LDW, and PAI without enough plain-language context.":
    "Kaitsepakettides kasutatakse lühendeid CDW, LDW ja PAI ilma lihtsate ja arusaadavate selgitusteta.",
  "Simple plan descriptions with no confusing acronyms or unexplained jargon.":
    "Lihtsad paketikirjeldused ilma segadust tekitavate lühendite ja selgitamata erialaterminiteta.",
  "Extras": "Lisad",
  "Add optional equipment and services with clear visuals and pricing.":
    "Lisa lisavarustust ja teenuseid, kasutades selgeid pilte ja hindu.",
  "Generic icons and unclear pricing make it hard to know what an extra actually includes.":
    "Üldised ikoonid ja ebaselged hinnad ei näita, mida lisateenus tegelikult sisaldab.",
  "Real photos of every extra with clear, itemized pricing shown up front.":
    "Iga lisateenuse pärisfotod ja selged üksikasjalikud hinnad juba enne valimist.",
  "Summary": "Tellimus",
  "Confirm the complete order, personal details, and final price before payment.":
    "Vaata enne maksmist üle kogu tellimus, isikuandmed ja lõpphind.",
  "Step 4": "4. samm",
  "Being forced to log in or register mid-flow interrupts customers just before they finish booking.":
    "Kohustuslik sisselogimine või registreerimine katkestab kliendi vahetult enne broneeringu lõpetamist.",
  "Fast, secure personal-details entry with a final price breakdown and summary before paying.":
    "Kiire ja turvaline isikuandmete sisestamine ning lõpphinna ja tellimuse ülevaade enne maksmist.",
  "Sketches": "Visandid",
  "Create": "Loomine",
  "Explore alternative structures quickly before committing time to visual detail.":
    "Katseta kiiresti erinevaid ülesehitusi, enne kui pühendud visuaalsetele detailidele.",
  "Hand-drawn wireframe sketches of the home, search, car details, extras, and payment screens":
    "Käsitsi joonistatud karkassivaated avalehest, otsingust, auto andmetest, lisadest ja maksmisest",
  "/images/projects/car-rental-app-redesign/sketches/sketches.png":
    "/images/projects/car-rental-app-redesign/sketches/sketches.et.png",
  "/images/projects/car-rental-app-redesign/sketches/sketches-full.png":
    "/images/projects/car-rental-app-redesign/sketches/sketches-full.et.png",
  "Redesign": "Ümberkujundus",
  "/images/projects/car-rental-app-redesign/design/main_visual_comparison.png":
    "/images/projects/car-rental-app-redesign/design/main_visual_comparison.et.png",
  "/images/projects/car-rental-app-redesign/design/search_visual_comparison.png":
    "/images/projects/car-rental-app-redesign/design/search_visual_comparison.et.png",
  "/images/projects/car-rental-app-redesign/design/details_visual_comparison.png":
    "/images/projects/car-rental-app-redesign/design/details_visual_comparison.et.png",
  "/images/projects/car-rental-app-redesign/design/extras_visual_comparison.png":
    "/images/projects/car-rental-app-redesign/design/extras_visual_comparison.et.png",
  "/images/projects/car-rental-app-redesign/design/payment_visual_comparison.png":
    "/images/projects/car-rental-app-redesign/design/payment_visual_comparison.et.png",
  "Current and redesigned car rental home screens compared across login interruptions, advertising, search focus, and guest access":
    "Praeguse ja ümberkujundatud autorendirakenduse avalehe võrdlus sisselogimise katkestuste, reklaamide, otsingule keskendumise ja külalisena jätkamise alusel",
  "Current airport list and redesigned map-based car rental search screens compared":
    "Praeguse lennujaamade loendi ja ümberkujundatud kaardipõhise autorendiotsingu võrdlus",
  "Current car results and redesigned vehicle details and pricing screens compared":
    "Praeguste autotulemuste ning ümberkujundatud autoandmete ja hinnavaadete võrdlus",
  "Current rental options and redesigned cover and extras selection screens compared":
    "Praeguste rendivalikute ning ümberkujundatud kaitsepakettide ja lisade valimise võrdlus",
  "Current driver details and payment screens compared with the redesigned booking summary and payment flow":
    "Praeguste juhiandmete ja maksevaadete võrdlus ümberkujundatud broneeringu kokkuvõtte ja makseteekonnaga",
  "Prototype": "Prototüüp",
  "Interactive Car Rental mobile prototype": "Interaktiivne autorendi mobiilirakenduse prototüüp",
  "Preview of the interactive car rental prototype showing the redesigned mobile booking flow":
    "Interaktiivse autorendiprototüübi eelvaade ümberkujundatud mobiilse broneerimisteekonnaga",
  "Reflections": "Kokkuvõte",
  "This project reminded me that a smooth booking experience depends on clarity at every step, especially around pricing and unfamiliar terminology.":
    "See projekt tuletas mulle meelde, et sujuv broneerimiskogemus eeldab selgust igal sammul, eriti hindade ja võõraste terminite puhul.",
  "Testing my ideas with users helped me question my assumptions and turn their hesitation into simpler, more confident interactions.":
    "Ideede testimine kasutajatega aitas mul oma eeldustes kahelda ning muuta nende kõhklused lihtsamaks ja kindlamaks kasutuskogemuseks.",
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

const localizedProject = translate(project);
const reflections = localizedProject.sections.find(
  (section) => section.id === "reflections",
);
if (reflections?.paragraphs) {
  reflections.paragraphs = [reflections.paragraphs.join(" ")];
}

export const projectEt = localizedProject;
