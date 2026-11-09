// Builds public/cv-et.pdf, the Estonian translation of public/cv.pdf.
// Usage: npm run resume:et   (needs Chrome and network access for Google Fonts)
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const photo = `data:image/jpeg;base64,${(await readFile(new URL("./resume-et/photo.jpg", import.meta.url))).toString("base64")}`;
const output = fileURLToPath(new URL("../public/cv-et.pdf", import.meta.url));

const links = {
  itil: "https://drive.google.com/file/d/1BAis0Eho3n3aYb5G-94VBHanZFBV5hBk/view?usp=sharing",
  diploma: "https://drive.google.com/file/d/1pIJ81_rxheOpxaUZS9-iFL2rriaSrTiO/view?usp=drive_link",
  course: "https://drive.google.com/file/d/19Qj6edehnX1nBRgfJhieyXsuctdWP38Y/view?usp=drive_link",
};

const jobs = {
  playtech2025: {
    title: "Tehnilise valdkonna vanemprojektijuht",
    company: "Playtech, Eesti, Tartu (Online-hasartmängud ja iGaming)",
    dates: "jaanuar 2025 – praegu",
    bullets: [
      "Juhtisin Playtechi kasiinode majutuskeskkondade suuremahulist taristu moderniseerimist, viies need 1,5 aasta jooksul üle Nomad VM arhitektuurilt Kubernetesele.",
      "Korraldasin Kubernetese kasutuselevõtu algusest lõpuni 19 online-mängukeskkonnas, optimeerides süsteemi skaleeritavust, tööaega ja juurutuste tõhusust.",
    ],
  },
  foxway: {
    title: "IT-projektijuht",
    company: "Foxway Group, Eesti, Tartu (Ringlustehnoloogia ja jätkusuutlikkus)",
    dates: "aprill 2023 – jaanuar 2025",
    bullets: [
      "Juhtisin Foxwayi e-kaubanduse portaali arendust ja rakendasin UI/UX parimaid praktikaid. Juhtisin ServiceNow XIMA integratsiooniprojekte väliste partneritega.",
      "Tegin koostööd tootejuhtide ja arendusmeeskonnaga, et seada ülesannete prioriteedid ning tagada uute funktsioonide õigeaegne valmimine.",
    ],
  },
  gap: {
    title: "Vaheaasta",
    company: "Minu pere, Hispaania, Marbella",
    dates: "juuli 2022 – aprill 2023",
    bullets: ["Aasta töölt eemal enesearenduse ja õppimise eesmärgil."],
  },
  playtech2021: {
    title: "Mitut toodet hõlmav tehniline projektijuht",
    company: "Playtech, Eesti, Tartu (Online-hasartmängud ja iGaming)",
    dates: "august 2021 – juuli 2022",
    bullets: [
      "Juhtisin keskmise ja suure mahuga iGaming-projekte koostöös mõnede suurimate online-hasartmängu operaatoritega.",
      "Juhtisin sise- ja välisprojekte alates tootearendustest ja kolmandate osapoolte platvormide või tarkvara integratsioonidest kuni andmete migratsioonideni.",
    ],
  },
  gig: {
    title: "IT-projektijuht",
    company: "Gaming Innovation Group, Hispaania, Marbella (Online-hasartmängud ja iGaming)",
    dates: "juuni 2020 – juuli 2021",
    bullets: [
      "Juhtisin aasta aega kestnud Payments as a Service (PaaS) arendus- ja integratsiooniprojekti ideest hoolduse faasini. Projektil olid väga keerulised ärinõuded.",
      "Osalesin disaini- ja agiilsetes arendussprintides, et edukalt tarnida tarkvara järkusid. Tegin kvaliteeditagamise inseneridega koostööd tarkvaravigade lahendamisel.",
    ],
  },
  mooncascade: {
    title: "Tootejuht",
    company: "Mooncascade, Eesti (Tarkvaraarendus)",
    dates: "oktoober 2019 – veebruar 2020",
    bullets: [
      "Analüüsisin toote (Mooncascade'i veebilehe) nõudeid ning viisin läbi toote tööde järjekorra täpsustamise ja prioriseerimise sessioone.",
      "Koostasin kasutajalugusid. Lisasin tööde järjekorda parendusülesandeid ja vigu. Korraldasin sprintide planeerimist, päevakoosolekuid ja tagasivaateid koos arendus- ja disainimeeskondadega.",
    ],
  },
  playtech2017: {
    title: "Mitut toodet hõlmav tehniline projektijuht",
    company: "Playtech, Eesti, Tartu (Online-hasartmängud ja iGaming)",
    dates: "jaanuar 2017 – september 2019",
    bullets: [
      "Juhtisin keskmise ja suure mahuga iGaming-projekte koostöös mõnede suurimate online-hasartmängu operaatoritega.",
      "Juhtisin sise- ja välisprojekte alates tootearendustest ja kolmandate osapoolte platvormide või tarkvara integratsioonidest kuni andmete migratsioonideni.",
    ],
  },
  playtech2013: {
    title: "Mitut toodet hõlmav integratsioonijuht",
    company: "Playtech, Eesti, Tartu (Online-hasartmängud ja iGaming)",
    dates: "oktoober 2013 – detsember 2016",
    bullets: [
      "Juhtisin API arendus- ja integratsiooniprojekte erinevate operaatoritega online-hasartmängu valdkonnas.",
      "Haldasin API dokumentatsiooni. Kontrollisin API juurutamise ajal serverilogisid. Leidsin ja lahendasin võimalikke valekonfiguratsioone ja võrguprobleeme. Registreerisin vigu.",
    ],
  },
  events: {
    title: "Ürituste korraldaja",
    company: "Event Rentals Ltd, Austraalia, Brisbane (Rendiäri)",
    dates: "detsember 2012 – mai 2013",
    bullets: [
      "Paigaldasin ürituste ja pidude renditehnikat (telgid, lauad, toolid). Vastutasin rendivarustuse transpordi eest Queenslandi piirkonnas.",
    ],
  },
  telia: {
    title: "Tehnilise toe spetsialist",
    company: "Telia Company, Eesti, Pärnu (Telekommunikatsioon)",
    dates: "oktoober 2009 – november 2012",
    bullets: [
      "Pakkusin tehnilist abi Telia interneti-, TV- ja mobiiliteenuste küsimustes. Olin klientide peamine kontaktisik suhtluse ja klienditeeninduse osas.",
    ],
  },
};

const tools = [
  ["Google Workspace", 5, "Suurepärane"],
  ["Microsoft 365", 5, "Suurepärane"],
  ["Team Gantt", 5, "Suurepärane"],
  ["Monday", 4, "Hea"],
  ["Miro", 5, "Suurepärane"],
  ["Trello", 4, "Hea"],
  ["Proto.io", 4, "Hea"],
  ["Lookback", 3, "Keskmine"],
  ["Google Cloud Platform", 2, "Algaja"],
  ["Postman", 3, "Keskmine"],
  ["Canva", 3, "Keskmine"],
  ["Visual Studio Code", 3, "Keskmine"],
  ["Hotjar", 3, "Keskmine"],
  ["Figma", 3, "Keskmine"],
  ["Google Analytics", 3, "Keskmine"],
  ["Atlassian (Jira, Confluence, Bitbucket)", 4, "Hea"],
];

const esc = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const job = ({ title, company, dates, bullets }) => `
  <article class="job">
    <h3>${esc(title)}</h3>
    <p class="meta">${esc(company)}<br>${esc(dates)}</p>
    <ul>${bullets.map((text) => `<li>${esc(text)}</li>`).join("")}</ul>
  </article>`;
const list = (items) => `<ul class="plain">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
const dots = (count) =>
  Array.from({ length: 5 }, (_, i) => `<i class="${i < count ? "on" : ""}"></i>`).join("");

const html = `<!doctype html>
<html lang="et"><head><meta charset="utf-8"><title>Madis Burmeister – CV</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Nunito:wght@400;600&family=Roboto:wght@400&display=swap">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: Nunito, sans-serif; font-size: 12.4px; color: #222; }
  .page { position: relative; width: 794px; height: 1123px; overflow: hidden; page-break-after: always; }
  .page:last-child { page-break-after: auto; }
  header { position: absolute; left: 37px; right: 37px; top: 0; height: 214px; border-bottom: 3px solid #fff200; }
  h1 { position: absolute; top: 46px; font: 600 40px/1 Montserrat, sans-serif; letter-spacing: 0.01em; color: #000; }
  .role { position: absolute; top: 108px; font: 400 17.5px Roboto, sans-serif; color: #111; }
  .linkedin { position: absolute; top: 158px; display: flex; align-items: center; gap: 10px; color: #555; font-size: 13px; text-decoration: none; }
  .linkedin svg { width: 22px; height: 22px; }
  .photo { position: absolute; right: 0; top: 38px; width: 135px; height: 135px; border-radius: 22px; object-fit: cover; object-position: 50% 27%; box-shadow: 0 1px 6px rgba(0,0,0,.18); }
  .left { position: absolute; left: 37px; width: 212px; }
  .right { position: absolute; left: 271px; width: 487px; }
  .vline { position: absolute; left: 252px; width: 2.5px; background: #fff200; }
  h2 { font: 600 16px/1.2 Montserrat, sans-serif; color: #111; text-transform: uppercase; margin-bottom: 11px; }
  .left h2 { margin-top: 20px; }
  .left h2:first-child { margin-top: 0; }
  ul.plain { list-style: none; }
  ul.plain li, .left p { line-height: 21.5px; }
  .left h4 { font: 700 12.6px/22px Nunito, sans-serif; margin-top: 0; }
  .summary { padding-left: 24px; text-align: justify; line-height: 21px; margin-bottom: 10px; padding-bottom: 12px; border-bottom: 1.5px dashed #ddd; }
  .job { position: relative; padding: 11px 0 8px 20px; border-top: 1.5px dashed #ddd; }
  .job:first-of-type { border-top: 0; padding-top: 6px; }
  .job::before { content: ""; position: absolute; left: -25px; top: 5px; width: 17px; height: 17px; border: 1.6px solid #1b1b1b; border-radius: 50%; background: #fff; }
  .job:first-of-type::before { top: 1px; }
  .job h3 { font: 700 12px/1.3 Montserrat, sans-serif; text-transform: uppercase; color: #111; margin-bottom: 4px; }
  .job .meta { line-height: 19.5px; margin-bottom: 7px; }
  .job ul { list-style: none; padding-left: 12px; }
  .job li { position: relative; text-align: justify; line-height: 17px; margin-bottom: 5px; padding-left: 0; }
  .job li::before { content: "◦"; position: absolute; left: -12px; top: 0; color: #c0755a; font-size: 12px; }
  .tools li { display: flex; align-items: center; justify-content: space-between; min-height: 35px; padding-right: 6px; }
  .tools .name { width: 118px; line-height: 1.25; }
  .tools .rate { text-align: right; line-height: 1.1; }
  .tools .rate small { display: block; font-size: 11px; margin-top: 1px; }
  .tools i { display: inline-block; width: 11.5px; height: 11.5px; border: 1.3px solid #111; border-radius: 50%; margin-left: 1.5px; }
  .tools i.on { background: #111; }
  .courses li { line-height: 20px; margin-bottom: 0; }
  .courses a { color: #1b8aa6; }
</style></head><body>

<section class="page" id="p1">
  <header>
    <h1>MADIS BURMEISTER</h1>
    <p class="role">IT-projektijuht. Arendan end UX- ja veebidisaini valdkonnas.</p>
    <a class="linkedin" href="http://linkedin.com/in/madis-burmeister">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#000"/><path fill="#fff" d="M7.3 9.5h2.3v7.2H7.3zM8.4 5.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM11.2 9.5h2.2v1h.03c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.5 2.8 3.5v3.9h-2.3v-3.5c0-.8 0-1.9-1.2-1.9s-1.3.9-1.3 1.8v3.6h-2.3z"/></svg>
      linkedin.com/in/madis-burmeister
    </a>
    <img class="photo" src="${photo}" alt="">
  </header>
  <span class="vline" style="top:228px; height:850px"></span>

  <div class="left" style="top:240px">
    <h2>Kontakt:</h2>
    <p>+372 5130102</p>
    <p>madis.burmeister@gmail.com</p>
    <h2>Pehmed oskused:</h2>
    ${list(["Probleemide lahendamine", "Tähelepanu detailidele", "Empaatia", "Kriitiline mõtlemine", "Kasutajauuring", "Avatus konstruktiivsele tagasisidele", "Äritaip", "Konkurentide toodete analüüs"])}
    <h2>Oskused:</h2>
    ${list(["Projektijuhtimine", "Esinemisoskus", "Sidusrühmade juhtimine", "Programmijuhtimine", "API integratsioon", "Infoarhitektuur", "Prototüüpimine", "Kasutajatestimine", "Wireframe'ide loomine", "UX/UI disain", "Veebidisain ja -arendus"])}
    <h2>Tehnilised oskused:</h2>
    <h4>Märgistuskeeled:</h4><p>HTML, XML</p>
    <h4>Stiilikeel:</h4><p>CSS</p>
    <h4>Muud keeled:</h4><p>JavaScript, JSON, REST</p>
    <h4>Veebiarenduse raamistikud:</h4><p>Node.js, Vue.js, Google Maps API</p>
    <h4>Sisuhaldustarkvara:</h4><p>Wix, WordPress</p>
  </div>

  <div class="right" style="top:240px">
    <h2>Professionaalne kokkuvõte:</h2>
    <p class="summary">Kogenud IT-projektijuht, kellel on üle kümne aasta kogemust tehniliste, mitut toodet hõlmavate IT-projektide juhtimisel. Mind huvitavad ka UX ja veebidisain. Põhikogemus on hasartmänguvaldkonnast, kus olen juhtinud projekte tehnoloogiaettevõtetes nagu Playtech ja GIG. Olen panustanud ka ringlustehnoloogia (Circular Tech) valdkonda. Hea probleemilahendusoskus ja suurepärased kultuuridevahelise suhtluse oskused. Töökogemus välismaalt.</p>
    <h2>Töökogemus:</h2>
    ${job(jobs.playtech2025)}${job(jobs.foxway)}${job(jobs.gap)}${job(jobs.playtech2021)}
  </div>
</section>

<section class="page" id="p2">
  <span class="vline" style="top:40px; height:1000px"></span>
  <div class="left" style="top:46px">
    <h2>Tööriistad:</h2>
    <ul class="plain tools">
      ${tools.map(([name, level, label]) => `<li><span class="name">${esc(name)}</span><span class="rate">${dots(level)}<small>${label}</small></span></li>`).join("")}
    </ul>
    <h2>Haridus:</h2>
    <p>Ärijuhtimise bakalaureusekraad<br>(EQF 6. tase)</p>
    <h2>Kursused:</h2>
    <ul class="plain courses">
      <li>◦ ITIL® Foundation – sertifikaat <a href="${links.itil}">link</a></li>
      <li>◦ UX-disaini kutsediplom (EQF 5. tase) – sertifikaat <a href="${links.diploma}">link</a></li>
      <li>◦ Kasutajakogemuse (UX) disaini kursus (14 akadeemilist tundi) – sertifikaat <a href="${links.course}">link</a></li>
    </ul>
    <h2>Keeled:</h2>
    <p>Eesti keel (emakeel), inglise keel (C1), hispaania keel (A1)</p>
    <h2>Hobid:</h2>
    <p>Videomängud, jalgpall, reisimine</p>
  </div>
  <div class="right" style="top:46px">
    ${job(jobs.gig)}${job(jobs.mooncascade)}${job(jobs.playtech2017)}${job(jobs.playtech2013)}${job(jobs.events)}${job(jobs.telia)}
  </div>
</section>
</body></html>`;

const browser = await chromium.launch({ channel: "chrome" });
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const pdf = await page.pdf({ format: "A4", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await writeFile(output, pdf);
  console.log(`Wrote ${output} (${pdf.length} bytes)`);
} finally {
  await browser.close();
}
