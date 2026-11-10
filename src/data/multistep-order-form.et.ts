import { project } from "./multistep-order-form";

const translations: Record<string, string> = {
  "/images/projects/multistep-order-form/cover.webp":
    "/images/projects/multistep-order-form/cover.et.webp",
  "/images/projects/multistep-order-form/order-confusion.svg":
    "/images/projects/multistep-order-form/order-confusion.et.svg",
  "/images/projects/multistep-order-form/flow-overview.webp":
    "/images/projects/multistep-order-form/flow-overview.et.webp",
  "/images/projects/multistep-order-form/order-success.webp":
    "/images/projects/multistep-order-form/order-success.et.webp",
  "/images/projects/multistep-order-form/order-email.webp":
    "/images/projects/multistep-order-form/order-email.et.webp",
  "Multistep Order Form": "Mitmeastmeline tellimisvorm",
  "An MVP web application that turns a detailed order into a manageable sequence of decisions.":
    "MVP-veebirakendus, mis muudab mahuka tellimuse hallatavaks otsuste jadaks.",
  "Waste Disposal Website": "Jäätmekäitluse veebileht",
  "Car Rental App Redesign": "Autorendi rakenduse ümberdisain",
  "Order form location and date step with an address, date fields, a pinned map, and a continue action":
    "Tellimisvormi asukoha ja kuupäevade samm koos aadressi, kuupäevaväljade, kaardile märgitud punkti ja jätkamisnupuga",
  "Step 2 captures the delivery address and dates, with a map pin to confirm the exact drop-off location.":
    "Teine samm küsib tarneaadressi ja kuupäevad ning kaardile märgitud punkt kinnitab täpse mahalaadimiskoha.",
  "My Role": "Minu roll",
  "Product Owner & Developer": "Tootearendaja",
  "Platform": "Platvorm",
  "Web Application": "Veebirakendus",
  "Deliverables": "Tulemid",
  "Full-Stack Web Development": "Täislahenduse arendus (front-end ja back-end)",
  "Tools": "Töövahendid",
  "Overview": "Ülevaade",
  "Product context": "Tootetaust",
  "Turn a long, error-prone order into a guided product experience.":
    "Muuta pikk ja veaaldis tellimus juhendatud tootekogemuseks.",
  "The multistep order form is a responsive web application that helps customers submit detailed service orders online. It guides them through three steps: choosing a service and size, confirming the location and dates, and adding contact details before submitting the order.":
    "Mitmeastmeline tellimisvorm on kohanduv veebirakendus, mis aitab klientidel esitada üksikasjalikke teenusetellimusi veebis. See juhib kolme sammu kaudu: teenuse ja suuruse valik, asukoha ja kuupäevade kinnitamine ning kontaktandmete lisamine enne tellimuse esitamist.",
  "I designed and developed the application as a minimum viable product (MVP) to make complex orders easier to complete and give the business the structured information needed for fulfilment. This first release focuses on the core ordering journey and provides a foundation for future validation and product development.":
    "Arendasin rakenduse esimese versiooni (MVP), et keerukaid tellimusi oleks lihtsam täita ning ettevõte saaks tellimuse täitmiseks vajaliku struktureeritud teabe. See keskendub põhilisele tellimisteekonnale ning loob aluse edasiseks valideerimiseks ja tootearenduseks.",
  "MVP": "MVP",
  "Focused first release": "Fokusseeritud esimene versioon",
  "3 steps": "3 sammu",
  "Progressive order journey": "Samm-sammuline tellimisteekond",
  "Web app": "Veebirakendus",
  "Responsive product interface": "Kohanduv tooteliides",
  "1 goal": "1 eesmärk",
  "Complete a valid order": "Esitada korrektne tellimus",
  "Problem": "Probleem",
  "Discover": "Avastamine",
  "An ordinary contact form left the most important delivery detail unclear: the exact location where the container or big-bag should be placed.":
    "Tavaline kontaktivorm jättis olulisima tarneandmete osa ebaselgeks: täpse koha, kuhu konteiner või big-bag tuleb paigutada.",
  "The business owner identified a bottleneck in the existing contact form: addresses did not specify exactly where a container or big bag should be placed. Follow-up emails delayed fulfilment, while calls added staff workload and friction for customers.":
    "Ettevõtte omanik tuvastas olemasolevas kontaktivormis kitsaskoha: aadressidest ei selgunud täpselt, kuhu konteiner või big-bag tuleb paigutada. Järelpäringud e-posti teel viivitasid tellimuse täitmist, kõned aga suurendasid töötajate töökoormust ja tekitasid klientidele ebamugavust.",
  "Customers had to repeat information, and dispatchers had to clarify the location before passing it to drivers. Capturing the drop-off point upfront could reduce this coordination and the risk of misplaced deliveries.":
    "Kliendid pidid teavet kordama ning dispetšerid pidid asukoha üle täpsustama enne selle juhile edastamist. Mahalaadimiskoha täpse asukoha kogumine juba tellimise täitmisel vähendaks lisa koordinatsiooni ja valesse kohta konteineri tarnimise riski.",
  "Customer, dispatcher, and driver passing unclear delivery details between them":
    "Klient, dispetšer ja juht edastavad omavahel ebaselgeid tarneandmeid",
  "Improvement opportunity": "Parendusvõimalus",
  "Replace the standard contact form with a guided, multistep order flow that lets customers confirm the exact drop-off point on a map. Include those coordinates with the submitted order so the dispatcher and driver have a clear location, reducing the need for follow-up calls.":
    "Asendada tavaline kontaktivorm juhendatud mitmeastmelise tellimisvooga, kus klient kinnitab täpse mahalaadimiskoha kaardil. Lisada koordinaadid esitatud tellimusele, et dispetšer ja juht saaksid selge asukoha ning järelkõnede vajadus väheneks.",
  "Capturing the drop-off point during ordering offered a practical way to reduce manual coordination for the waste-disposal company.":
    "Mahalaadimiskoha kogumine tellimise ajal pakkus jäätmekäitlusettevõttele võimaluse vähendada tellimusjärgset koordineerimist.",
  "Product Approach": "Tootepõhine lähenemine",
  "Define and prioritize": "Määratlemine ja prioritiseerimine",
  "Keep the existing process, but capture the missing location detail at the source.":
    "Säilitada olemasolev protsess, kuid koguda puuduv asukohateave otse allikast.",
  "The approach retained the existing three-step process and email communication, replacing repeated location clarification with a precise map selection during ordering.":
    "Uus lahendus säilitas senise kolmeastmelise tellimisprotsessi ja e-posti teel toimuva suhtluse, asendades pideva asukoha täpsustamise täpse kaardivalikuga juba tellimuse vormistamisel.",
  "Make location the core feature": "Muuta asukoht põhifunktsiooniks",
  "Give the map fields prominence in Step 2. A draggable Google Maps pin captures the exact drop-off coordinates for customer and administrator emails, ready to share through the existing dispatch workflow.":
    "Tõsta kaardivaade tellimuse teises sammus esile. Lohistatava markeriga Google Maps salvestab täpsed mahalaadimiskoordinaadid otse kliendi ja administraatori e-kirjadesse, sobitudes sujuvalt senisesse dispetšeri töövoogu.",
  "Fit the existing workflow": "Kohanduda olemasoleva töövooga",
  "Support Estonian and English, with a mobile-friendly form and clickable coordinates in emails so drivers can open the location on their phones.":
    "Pakkuda mobiilisõbralikku vormi (nii eesti kui ka inglise keeles) ning lisada e-kirjadesse klikitavad koordinaadid, et juhid saaksid sihtkoha otse oma nutitelefonis avada.",
  "Keep the MVP focused": "Hoida MVP fookust",
  "Deliver the three-step order form and coordinate emails first. Leave cost calculation out of the initial scope.":
    "Luua esmalt kolmeastmeline tellimisvorm ja koordinaatidega e-kirjade süsteem. Hinna automaatne arvutamine jätta esialgsest arendusmahust välja.",
  "Multistep Order Form Flow": "Mitmeastmeline tellimisprotsess",
  "Experience": "Kogemus",
  "Keep the mental model stable while the form progressively reveals detail.":
    "Hoida kasutaja mõttemudel stabiilsena, kui vorm toob üksikasjad samm-sammult nähtavale.",
  "Complete the order form": "Tellimuse vormistamine",
  "Choose a service, drag the Google Maps pin to the exact drop-off point, set the dates, and add contact details.":
    "Kasutaja valib teenuse, määrab Google Mapsi markeriga täpse mahalaadimiskoha, valib kuupäevad ja sisestab kontaktandmed.",
  "Receive confirmation": "Kinnituskuva",
  "A success screen confirms that the order was received and displays a reference number.":
    "Süsteem kinnitab tellimuse vastuvõtmist ja kuvab ekraanil tellimuse viitenumbri.",
  "Share the delivery details": "Tarneinfo jagamine",
  "Customer and administrator emails bring together the order and exact drop-off coordinates, ready to share with the driver.":
    "Klient ja administraator saavad e-kirja tellimuse kokkuvõtte ja täpsete koordinaatidega, et dispetšer saaks info kiiresti juhile edastada.",
  "Three order form screens showing service and quantity selection, location and dates, and customer contact details":
    "Kolm tellimisvormi vaadet: teenuse ja koguse valik, asukoht ja kuupäevad ning kliendi kontaktandmed",
  "A guided three-step journey, from choosing a service to submitting contact details.":
    "Juhendatud kolmeastmeline teekond teenuse valikust kontaktandmete esitamiseni.",
  "One precise location, shared by everyone": "Üks täpne asukoht kõigile osapooltele",
  "An address gets the driver to the property; a draggable map pin identifies the actual drop-off point. Customer and administrator emails include the coordinates as a clickable Google Maps link, giving dispatchers a precise location to share with the driver.":
    "Aadress viib juhi küll õigele objektile, kuid lohistatava markeriga määratakse täpne mahalaadimiskoht. Süsteem lisab nii kliendi kui ka administraatori tellimuskirjadesse klikitava Google Mapsi lingi, andes dispetšerile täpsed koordinaadid koheseks juhiga jagamiseks.",
  "Successful order screen with a green checkmark, order number T-000001, and a countdown before the form resets":
    "Edukas tellimus: roheline linnuke, tellimuse number T-000001 ja tagasiloendus enne vormi lähtestamist",
  "Order received. A clear success state and reference number confirm that submission is complete.":
    "Tellimus on kätte saadud. Selge edukuse olek ja viitenumber kinnitavad, et esitamine on lõpetatud.",
  "Example confirmation email in an inbox, with order details, delivery dates, coordinates, and a schematic map marking the drop-off point":
    "Näidiskinnituskiri postkastis koos tellimuse üksikasjade, tarnekuupäevade, koordinaatide ja mahalaadimiskohta tähistava skemaatilise kaardiga",
  "The location travels with the order. The email brings together service details, dates, and the confirmed drop-off coordinates. Recreated with fictional customer data and a schematic map.":
    "Asukoht liigub tellimusega kaasa. E-kiri koondab teenuse andmed, kuupäevad ja kinnitatud mahalaadimiskoordinaadid. Taasloodud väljamõeldud kliendiandmete ja skemaatilise kaardiga.",
  "Technical Delivery": "Tehniline teostus",
  "Build": "Ehitamine",
  "From a draggable map pin to a saved order and a shared location link.":
    "Lohistatavast kaarditähisest salvestatud tellimuse ja jagatava asukohalinkini.",
  "The core data flow is simple: select the drop-off point, save its coordinates with the order, and email a location link that can be opened on a phone.":
    "Põhiline andmevoog on lihtne: klient valib mahalaadimiskoha, süsteem salvestab koordinaadid tellimuse juurde ja saadab e-postiga asukohalingi, mida on mugav otse nutitelefonis avada.",
  "Frontend and location capture": "Kasutajaliides ja asukoha määramine",
  "Vue 3, Vite, Vue Router, and Pinia manage the three-step form and retain order details between steps. Vue-i18n supports Estonian and English. Google Maps address search positions the map; dragging the marker updates the stored coordinates, with reverse geocoding to resolve the address.":
    "Kolmeastmelist vormi ja andmete säilitamist sammude vahel juhivad Vue 3, Vite, Vue Router ja Pinia. Mitmekeelsust (eesti ja inglise) toetab Vue-i18n. Google Mapsi aadressiotsing tsentreerib kaardi algsesse asukohta; markeri lohistamine uuendab salvestatavaid koordinaate ning pöördgeokodeerimine (reverse geocoding) tuvastab automaatselt uue aadressi.",
  "Validated order storage": "Tellimuste valideerimine ja salvestamine",
  "A Node.js and Express API uses Firebase anonymous authentication to associate orders with a user session. Server-side checks cover contact details, coordinates, service options, quantities, delivery dates, and terms acceptance. Firestore stores the order with a server-assigned sequential reference.":
    "Node.js ja Express API kasutavad Firebase'i anonüümset autentimist, et siduda tellimused kasutaja sessiooniga. Serveripoolne valideerimine kontrollib kontaktandmeid, koordinaate, teenusevalikut, koguseid, tarnekuupäevi ja kasutustingimustega nõustumist. Kogu info salvestatakse Firestore'i andmebaasi koos serveripoolselt genereeritud unikaalse jooksunumbri ehk viitenumbriga.",
  "Email and driver handoff": "Teavitused ja tarneinfo edastamine",
  "Nodemailer builds an Estonian summary from the saved order and sends it to the customer and configured administrator. It includes a Google Maps Static API preview and clickable coordinates that open Google Maps. Dispatchers can share this location with drivers; a separate driver email recipient is not configured.":
    "Nodemailer koostab tellimusest eestikeelse kokkuvõtte ning saadab selle nii kliendile kui ka süsteemiadministraatorile. Kiri sisaldab Google Maps Static API genereeritud kaardieelvaadet ja klikitavaid koordinaate, mis avavad seadmes kaardirakenduse. Eraldi automaatset e-kirja juhile ei saadeta – dispetšer edastab täpse asukohalingi juhile ise.",
  "Recoverable submission": "Tõrkekindel tellimuse esitamine",
  "If saving succeeds but email delivery fails, the interface offers an email retry using the original order reference rather than creating another order. Delivery status prevents concurrent sends and repeat sends after recorded success. An interrupted send with an uncertain outcome requires an operator to check delivery before retrying.":
    "Kui tellimuse salvestamine andmebaasi õnnestub, aga e-kirja saatmine ebaõnnestub, pakub kasutajaliides võimalust kirja uuesti saata (säilitades algse viitenumbri, vältides uue tellimuse loomist). Süsteem takistab topelt- ja korduvsaatmisi, kui õnnestumine on juba registreeritud. Kui ühendus katkeb ja saatmise lõppolek jääb ebaselgeks, peab operaator enne korduskatset tellimuse seisu käsitsi üle kontrollima.",
  "Deployment and observability": "Juurutus (CI/CD) ja monitooring",
  "GitHub Actions deploys the frontend to Firebase Hosting and the containerized backend to Google Cloud Run. Hosting routes API requests to Cloud Run. Firebase token verification and rate limits protect requests, email content is HTML-escaped, and Winston sends redacted production logs to Google Cloud Logging.":
    "GitHub Actions paigaldab (deploy) kasutajaliidese Firebase Hostingusse ja konteinerdatud taustasüsteemi Google Cloud Runi. Firebase Hosting suunab API-päringud edasi Cloud Runi. Turvalisuse tagavad Firebase'i žetoonide (token) kontroll, päringute piiramine (rate limiting) ning HTML-sisu varjestamine (escaping). Winston edastab isikuandmetest puhastatud (maskeeritud) logid Google Cloud Loggingusse.",
  "Testing": "Testimine",
  "Repository tests cover order validation, date handling, map coordinates and previews, autocomplete request races, email safety, terms acceptance, and runtime protections. Firestore rules tests use the Firebase emulator. These checks do not replace real-device usability testing or production delivery monitoring.":
    "Koodibaasi automaattestid katavad andmete valideerimist, kuupäevade loogikat, kaardikoordinaatide ja eelvaadete toimimist, automaattäite (autocomplete) päringute sünkroonimisvigu (race conditions), e-kirjade turvalisust, tingimustega nõustumist ning käivitusaegseid (runtime) turvameetmeid. Firestore'i turvareegleid testitakse Firebase'i emulaatoriga. Need kontrollid täiendavad, kuid ei asenda reaalsetes seadmetes läbiviidavat kasutusmugavuse testimist ega tootmiskeskkonna monitooringut.",
  "Outcome & Reflections": "Tulemused ja kokkuvõte",
  "Measure and learn": "Mõõtmine ja õppimine",
  "Separate what has been built from what still needs to be validated.":
    "Eristada seda, mis on valmis ehitatud, sellest, mida tuleb veel valideerida.",
  "The MVP retained the existing three-step ordering process while adding precise drop-off selection and emailed location links. Support for Estonian and English, a mobile-friendly form, and clickable coordinates addressed the core workflow requirements.":
    "Loodud MVP säilitas senise kolmeastmelise tellimisprotsessi, kuid lahendas varasema probleemi, tuues sisse täpse mahalaadimiskoha määramise ja e-kirjades jagatavad asukohalingid. Kahekeelsus, mobiilisõbralik vorm ja klikitavad koordinaadid katsid edukalt kõik olemasoleva töövoo põhinõuded.",
  "The key lesson was to improve the information captured at the start rather than add more coordination afterward. Next, I would validate the flow with customers and drivers, track how often orders still need clarification, and use those findings to guide further development.":
    "Suurim õppetund oli tõdemus, et probleeme tuleb ennetada andmete kogumise hetkel – täpne alginfo hoiab ära hilisema aeganõudva lisasuhtluse ja koordineerimise. Järgmiste sammudena testiksin loodud kasutusvoogu reaalsete klientide ja autojuhtidega ning monitooriksin, kui sageli on asukohta endiselt vaja tagantjärele täpsustada. Neid andmeid kasutaksin toote edasiste arendusotsuste tegemisel.",
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
