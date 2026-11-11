import { project } from "./car-rental-app-redesign";

const translations: Record<string, string> = {
  "Car Rental App Redesign": "Autorendi rakenduse ümberdisain",
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
  "Deliverables": "Tulemid",
  "UX/UI Design, Prototyping": "UX/UI disain · Prototüüpimine",
  "Tools": "Töövahendid",
  "Overview": "Ülevaade",
  "Context": "Kontekst",
  "Redesigning a complex rental journey around clarity, trust, and confident decisions.":
    "Keeruka autorendi teekonna ümberkujundamine selguse, usalduse ja kindlate otsuste nimel.",
  "In this independent project, I explored how to make booking a rental car in a mobile app easier and more intuitive. I focused on helping users compare vehicles more conveniently and making the pricing more transparent. I also optimized the booking process so that a reservation can be completed in fewer and more logical steps.":
    "Selles iseseisvas projektis uurisin, kuidas muuta rendiauto broneerimine mobiilirakenduses lihtsamaks ja intuitiivsemaks. Keskendusin sellele, et aidata kasutajatel sõidukeid mugavamalt võrrelda ning muuta hinnakujundus läbipaistvamaks. Samuti optimeerisin broneerimisprotsessi, et tellimus saaks vormistatud vähemate ja loogilisemate sammudega.",
  "The goal of the design is to help users make informed and confident choices. To achieve this, the app now offers relevant filters, a clearer price breakdown, and a smoother booking journey.":
    "Disainiuuenduse eesmärk on aidata kasutajatel teha teadlikke ja kindlaid valikuid. Selle saavutamiseks pakub rakendus nüüd asjakohaseid filtreid, selgemat hinnajaotust ning sujuvamat broneerimisteekonda.",
  "Problem": "Probleem",
  "Define": "Määratlemine",
  "Rental customers need transparent information without a slow or overwhelming booking process.":
    "Autorendi kliendid vajavad läbipaistvat teavet, ilma et broneerimine oleks aeglane või üle jõu käiv.",
  "Car rental users often point out that many mobile apps lack price transparency, or the displayed information is downright misleading. A smooth booking journey is disrupted by intrusive ads and mandatory login screens. Furthermore, confusing abbreviations in the pricing structure create uncertainty, lowering users' trust in the service provider. Ultimately, such a poor user experience damages the rental company's reputation and reduces the number of successful bookings.":
    "Autorenditeenuse kasutajad toovad sageli esile, et paljudes mobiilirakendustes puudub hindade läbipaistvus või on kuvatav info lausa eksitav. Sujuvat broneerimisteekonda lõhuvad pealetükkivad reklaamid ja kohustuslikud sisselogimisaknad. Lisaks tekitavad hinnastruktuuris segadust arusaamatud lühendid, mis langetavad kasutajate usaldust teenusepakkuja vastu. Lõpptulemusena kahjustab selline kehv kasutajakogemus rendiettevõtte mainet ja vähendab edukate broneeringute arvu.",
  "intrusive ads": "pealetükkivad reklaamid",
  "mandatory login screens": "kohustuslikud sisselogimisaknad",
  "confusing abbreviations": "arusaamatud lühendid",
  "Scenario A": "Stsenaarium A",
  "Lack of pricing transparency": "Hinnastamise läbipaistmatus",
  "Hidden total price": "Varjatud koguhind",
  "Extra fees and insurance package costs often only become apparent in the final step of the booking flow. The displayed price tends to change between the search results and the payment screen.":
    "Lisatasud ja kindlustuspakettide maksumused selguvad sageli alles broneerimisvoo viimases sammus. Kuvatav hind kipub otsingutulemuste ja maksekuva vahel muutuma.",
  "Erosion of trust": "Usalduse murenemine",
  "Unexpected additional costs create uncertainty among users regarding the validity of the offer, causing them to abandon the process and look for alternatives on other platforms.":
    "Ootamatud lisakulud tekitavad kasutajates ebakindlust pakkumise paikapidavuse osas, mistõttu katkestatakse protsess, et minna teistelt platvormidelt alternatiive otsima.",
  "Drop in conversion": "Konversiooni langus",
  "The booking is completed with competitors whose pricing is more transparent and feels like a safer and simpler choice.":
    "Broneering viiakse lõpule konkurentide juures, kelle hinnastamine on läbipaistvam ning mõjub turvalisema ja lihtsama valikuna.",
  "Scenario B": "Stsenaarium B",
  "Complex terminology": "Terminite keerukus",
  "Confusing insurance packages": "Kindlustuspakettide arusaamatus",
  "Protection packages are indicated by industry-specific abbreviations (e.g., CDW, LDW, PAI) that lack clear, user-friendly explanations.":
    "Kaitsepakette tähistatakse erialaste lühenditega (nt CDW, LDW, PAI), mille juures puuduvad kasutajale arusaadavad lahtiseletused.",
  "Lack of confidence in decision-making": "Otsustuskindluse puudumine",
  "Users do not understand what coverage they actually need, what a specific package includes, or what the deductible terms are.":
    "Kasutajad ei mõista, millist katet nad reaalselt vajavad, mida konkreetne pakett sisaldab või millised on omavastutuse tingimused.",
  "Abandoned journey (Drop-off)": "Poolelijäänud teekond (Drop-off)",
  "The uncertainty stemming from this confusion is significant enough that users abandon the booking before reaching the payment screen.":
    "Segadusest tulenev ebakindlus on piisavalt suur, et kasutaja katkestab broneerimise enne maksekuvale jõudmist.",
  "Key insights": "Peamised tähelepanekud",
  "of respondents preferred the mobile app over the desktop website, which indicates the poor usability of car rental apps.":
    "vastanutest eelistas mobiilirakendust lauaarvuti veebilehele, mis viitab autorendiäppide vähesele kasutatavusele.",
  "of the survey participants rated their previous car rental web experience with the highest rating (5/5).":
    "uuringus osalenutest hindas senist autorendi veebikogemust kõrgeima hindega (5/5).",
  "The average rating of four major car rental companies' apps in the Google Play Store is 3.65 on a 5-point scale":
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
  "Competitor Benchmarking": "Konkurentide analüüs",
  "Compared major car rental products to identify common patterns, trust signals, and recurring friction.":
    "Võrdlesin suuremate autorendifirmade tooteid, et leida levinud mustreid, usaldust loovaid elemente ja korduvaid takistusi.",
  "Mapping out competitors helped to understand how other rental companies in the market solve common booking problems, providing valuable input without the need to recruit separate test users.":
    "Konkurentide kaardistamine aitas mõista, kuidas teised turul tegutsevad rendiettevõtted lahendavad levinud broneerimisprobleeme, pakkudes väärtuslikku sisendit ilma vajaduseta eraldi testkasutajaid värvata.",
  "Observation on misleading pricing: One competitor advertised a 15% discount for paying in advance online. However, calculating a 15% discount from the initial amount of €573.76, the final price should have been €487.70, rather than the €500.15 displayed to the customer. This is a clear example of hidden fees that erode users' trust.":
    "Tähelepanek eksitava hinnastamise kohta: Üks konkurent reklaamis veebis ettemaksu tegemisel 15% allahindlust. Arvutades aga 15% soodustust algsummalt 573,76 €, pidanuks lõpphind olema 487,70 €, mitte aga kliendile kuvatud 500,15 €. See on ilmekas näide varjatud tasudest, mis murendavad kasutajate usaldust.",
  "Observation on misleading pricing:": "Tähelepanek eksitava hinnastamise kohta:",
  "Car rental payment screen advertising a 15% online-payment discount, with €500.15 online and €573.76 at-branch prices":
    "Autorendi maksevaade reklaamib veebis maksmisel 15% soodustust: veebihind 500,15 € ja kontorihind 573,76 €",
  "/images/projects/car-rental-app-redesign/research/benchmarking.webp":
    "/images/projects/car-rental-app-redesign/research/benchmarking.et.png",
  "Read Full Review": "Loe täielikku arvustust",
  "Online survey": "Veebiküsitlus",
  "Gathered customer expectations and preferences around mobile booking, pricing, and rental terminology.":
    "Kogusin klientide ootusi ja eelistusi mobiilse broneerimise, hinnastamise ja autorenditerminite kohta.",
  "I conducted an online survey to identify the main pain points of car rental service users and to gather both quantitative and qualitative data.":
    "Viisin läbi veebiküsitluse, et tuvastada autorenditeenuse kasutajate peamised valupunktid ning koguda nii kvantitatiivseid kui ka kvalitatiivseid andmeid.",
  "The responses to the open-ended question, “What would you change about the app you last used?”, revealed a clear need for more transparent pricing, a smoother booking process, and a reduction in intrusive ads.":
    "Vastustest avatud küsimusele „Mida muudaksid viimati kasutatud rakenduses?“ joonistus välja selge vajadus läbipaistvama hinnastamise, sujuvama broneerimisprotsessi ja pealetükkivate reklaamide vähendamise järele.",
  "Survey responses about improving rental apps, including clearer pricing and fewer advertisements":
    "Kasutajate vastused autorendirakenduse kohta: soov selgema hinnateabe ja vähema reklaami järele",
  "/images/projects/car-rental-app-redesign/research/survey.png":
    "/images/projects/car-rental-app-redesign/research/survey.et.png",
  "Read Full Survey": "Loe küsitluse vastuseid",
  "Usability Testing": "Kasutatavuse testimine",
  "I observed users completing real booking tasks to identify friction points, misunderstandings, and moments of hesitation in the user flow.":
    "Jälgisin kasutajaid reaalsete broneerimisülesannete läbimisel, et tuvastada kasutusvoos esinevaid hõõrdepunkte, arusaamatusi ja kõhklushetki.",
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
  "Homepage": "Avaleht",
  "The user opens the app and starts a new search by entering the desired location and rental dates.":
    "Kasutaja avab rakenduse ja alustab uut otsingut, sisestades soovitud asukoha ja rendikuupäevad.",
  "Step 1": "Samm 1:",
  "Pain point": "Valupunkt:",
  "Intrusive ad banners and unexpected login screens hinder starting the search.":
    "Pealetükkivad reklaambännerid ja ootamatud sisselogimisaknad takistavad otsinguga alustamist.",
  "UX solution": "UX lahendus:",
  "A clean and distraction-free homepage. All focus is on the search – without pop-ups and mandatory logins.":
    "Puhas ja segajatevaba avaleht. Kogu fookus on otsingul – ilma hüpikakende ja kohustusliku sisselogimiseta.",
  "Search results": "Otsingutulemused",
  "The user browses available vehicles on a map or in a list and refines the selection using filters.":
    "Kasutaja sirvib saadaolevaid sõidukeid kaardil või loendis ja täpsustab valikut filtrite abil.",
  "Step 2": "Samm 2:",
  "An inadequate map view and confusing filtering and sorting options make search results unreliable.":
    "Puudulik kaardivaade ning segased filtreerimis- ja sorteerimisvalikud muudavad otsingutulemused ebausaldusväärseks.",
  "A smoothly functioning map and list view with logical filters that help narrow down the selection effectively and accurately.":
    "Sujuvalt toimiv kaardi- ja loendivaade koos loogiliste filtritega, mis aitavad valikut efektiivselt ja täpselt kitsendada.",
  "Car Details": "Sõiduki detailvaade",
  "The user dives into the technical specifications of the selected vehicle, checks availability, and views the total price.":
    "Kasutaja süveneb valitud sõiduki tehnilistesse andmetesse, kontrollib saadavust ja vaatab koguhinda.",
  "The pricing structure is confusing, and the final cost is not immediately clear.":
    "Hinnastruktuur on segane ja lõplik maksumus pole koheselt arusaadav.",
  "A clear and transparent price calculation, where the final price along with all fees is visible immediately, without additional steps.":
    "Selge ja läbipaistev hinnakalkulatsioon, kus lõpphind koos kõigi tasudega on nähtav kohe, ilma lisasammudeta.",
  "Covers": "Kaitsepaketi valik",
  "The user reviews the offered protection and insurance options and chooses the most suitable one.":
    "Kasutaja tutvub pakutavate kaitse- ja kindlustusvõimalustega ning valib endale sobivaima.",
  "Step 3": "Samm 3:",
  "Users are confronted with industry abbreviations (CDW, LDW, PAI), whose actual content and extent of coverage remain unexplained to the average person.":
    "Kasutajale visatakse ette erialased lühendid (CDW, LDW, PAI), mille reaalne sisu ja katte ulatus jäävad tavainimesele selgitamata.",
  "Clear, visually distinct, and plain-language package descriptions that avoid confusing industry jargon.":
    "Selged, visuaalselt eristatud ja inimkeelsed paketikirjeldused, mis väldivad segadust tekitavat tööstusharu slängi.",
  "Extras": "Lisavarustus ja -teenused",
  "The user adds necessary extra equipment (e.g., a child seat or GPS) to the booking, relying on clear photos and exact prices.":
    "Kasutaja lisab tellimusele vajaliku lisavarustuse (nt turvatool või GPS), toetudes selgetele fotodele ja täpsetele hindadele.",
  "Standard (generic) icons and unclear pricing do not give the customer a realistic idea of what the offered extra includes or exactly how much it costs.":
    "Standardsed (üldised) ikoonid ja ebaselge hinnastamine ei anna kliendile reaalset ettekujutust, mida pakutav lisa sisaldab või kui palju see täpselt maksab.",
  "Each accessory features real product photos and a transparent unit price, helping users make a confident and informed choice before adding the item to their cart.":
    "Iga lisatarviku juures on päris tootefotod ja läbipaistev tükihind, mis aitavad teha kindla ja teadliku valiku juba enne eseme ostukorvi lisamist.",
  "Order Summary": "Tellimuse kokkuvõte",
  "The user reviews the booking details, enters personal information, and sees the final total price before paying.":
    "Kasutaja vaatab üle broneeringu detailid, sisestab isikuandmed ja näeb enne maksmist lõplikku koguhinda.",
  "Step 4": "Samm 4:",
  "Mandatory login or account creation creates a major friction point right before completing the booking and disrupts the user journey.":
    "Kohustuslik sisselogimine või konto loomine tekitab vahetult enne broneeringu lõpetamist suure hõõrdepunkti ja katkestab kasutajateekonna.",
  "A quick guest checkout option. Entering personal information is smooth, and the user is shown a clear and transparent order overview before paying.":
    "Kiire külalisena tellimise võimalus (guest checkout). Isikuandmete sisestamine on sujuv ning kasutajale kuvatakse enne maksmist selge ja läbipaistev tellimuse ülevaade.",
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
  "This project confirmed that a smooth booking experience relies on complete transparency at every touchpoint, especially when it comes to pricing and industry terminology.":
    "See projekt kinnitas, et sujuv broneerimiskogemus toetub täielikule läbipaistvusele igas puutepunktis, eriti kui asi puudutab hinnastamist ja erialatermineid.",
  "Testing the design solutions with real users helped me challenge my initial assumptions and transform users' initial hesitations into a smooth and confidence-inspiring user experience.":
    "Disainilahenduste testimine reaalsete kasutajatega aitas mul enda algseid eeldusi proovile panna ning kujundada kasutajate esmastest kõhklustest sujuv ja enesekindlust sisendav kasutajakogemus.",
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
