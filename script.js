const stops = [
  {
    name: "Strasbourg",
    country: "Frankrijk",
    countryEn: "France",
    dateStart: "2026-08-28",
    dateEnd: "2026-08-31",
    lat: 48.5734, lon: 7.7521,
    hotel: {
      label: "Séjours & Affaires Strasbourg Kléber",
      link: "https://www.booking.com/Share-0OJoS9",
      note: { nl: "Parkeren gereserveerd", en: "Parking reserved" },
      address: "16 Rue Hannong, 67000 Strasbourg, France"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Strasbourg_Cathedral_Exterior_-_Diliff.jpg/960px-Strasbourg_Cathedral_Exterior_-_Diliff.jpg", alt: "Cathédrale Notre-Dame de Strasbourg", credit: "https://commons.wikimedia.org/wiki/File:Strasbourg_Cathedral_Exterior_-_Diliff.jpg" },
    sights: [
      { n: "Cathédrale Notre-Dame de Strasbourg", r: 4.8 },
      { n: "Place Kléber", r: 4.5 },
      { n: "Barrage Vauban", r: 4.6 },
      { n: "Ponts Couverts", r: 4.7 }
    ]
  },
  {
    name: "Basel",
    country: "Zwitserland",
    countryEn: "Switzerland",
    dateStart: "2026-08-31",
    dateEnd: "2026-09-02",
    lat: 47.5596, lon: 7.5886,
    hotel: {
      label: "Casa Ländli",
      link: "https://www.booking.com/Share-ixAonz",
      note: { nl: "Geboekt via ProtonMail · parkeren aan de weg, nog uitzoeken", en: "Booked via ProtonMail · street parking, still figuring out" },
      address: "35 Hörnle, 79639 Grenzach-Wyhlen, Germany"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Museum_Tinguely_from_across_the_Rhine_in_Basel%2C_Switzerland_%28August_2025%29.jpg/960px-Museum_Tinguely_from_across_the_Rhine_in_Basel%2C_Switzerland_%28August_2025%29.jpg", alt: "Museum Tinguely, Basel", credit: "https://commons.wikimedia.org/wiki/File:Museum_Tinguely_from_across_the_Rhine_in_Basel,_Switzerland_(August_2025).jpg" },
    sights: [
      { n: "Museum Tinguely", r: null },
      { n: "Basel Cathedral (Münster)", r: 4.6 },
      { n: "Kunstmuseum Basel", r: 4.6 },
      { n: "Spalentor", r: 4.6 }
    ]
  },
  {
    name: "Gardameer",
    nameEn: "Lake Garda",
    country: "Italië",
    countryEn: "Italy",
    dateStart: "2026-09-02",
    dateEnd: "2026-09-04",
    lat: 45.5758, lon: 10.6215,
    hotel: {
      label: "Hotel Residence La Rotonda",
      link: "https://www.booking.com/Share-EBNmLE",
      note: { nl: "Parkeren gratis", en: "Free parking" },
      address: "Via Provinciale 10, 25080 Tignale, Italy"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Italy_-_Sirmione_-_Scaligero_Castle.jpg/960px-Italy_-_Sirmione_-_Scaligero_Castle.jpg", alt: "Castello Scaligero, Sirmione", credit: "https://commons.wikimedia.org/wiki/File:Italy_-_Sirmione_-_Scaligero_Castle.jpg" },
    sights: [
      { n: "Castello Scaligero di Sirmione", r: 4.6 },
      { n: "Vittoriale degli Italiani", r: 4.7 },
      { n: "Grotte di Catullo (Sirmione)", r: 4.5 },
      { n: "Parco Alto Garda Bresciano", r: 4.6 }
    ]
  },
  {
    name: "Zagreb",
    country: "Kroatië",
    countryEn: "Croatia",
    dateStart: "2026-09-04",
    dateEnd: "2026-09-07",
    lat: 45.8150, lon: 15.9819,
    hotel: {
      label: "Servus Zagreb Town Centre",
      link: "https://www.booking.com/Share-gvfG7Z2",
      note: { nl: "Public parking · dagtrip Podgarić Monument op 5 sept", en: "Public parking · day trip to Podgarić Monument on Sep 5" },
      address: "Tkalčićeva 34, 10000 Zagreb, Croatia"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Spomenik_revoluciji-Podgaric.jpg/960px-Spomenik_revoluciji-Podgaric.jpg", alt: "Podgarić monument", credit: "https://commons.wikimedia.org/wiki/File:Spomenik_revoluciji-Podgaric.jpg" },
    sights: [
      { n: "Lotrščak Tower", r: 4.7 },
      { n: "Cathedral of Zagreb", r: 4.6 },
      { n: "Museum of Broken Relationships", r: 4.3 },
      { n: "Stone Gate", r: 4.7 },
      { n: "Podgarić Monument (dagtrip)", nEn: "Podgarić Monument (day trip)", r: null }
    ]
  },
  {
    name: "Bratislava",
    country: "Slowakije",
    countryEn: "Slovakia",
    dateStart: "2026-09-07",
    dateEnd: "2026-09-09",
    lat: 48.1486, lon: 17.1077,
    hotel: {
      label: "Downtown Bratislava B&B",
      link: "https://www.booking.com/Share-sUqvtdQ",
      note: { nl: "⚠️ Public parking — check alternatief", en: "⚠️ Public parking — check alternative" },
      address: "31 Panenská, 811 03 Bratislava, Slovakia"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bratislava_-_Burg_%28b%29.JPG/960px-Bratislava_-_Burg_%28b%29.JPG", alt: "Bratislava Castle", credit: "https://commons.wikimedia.org/wiki/File:Bratislava_-_Burg_(b).JPG" },
    sights: [
      { n: "Bratislava Castle", r: 4.5 },
      { n: "Hviezdoslavovo námestie", r: 4.6 },
      { n: "Devín Castle", r: 4.7 },
      { n: "Slavín memorial", r: 4.7 }
    ]
  },
  {
    name: "Linz",
    country: "Oostenrijk",
    countryEn: "Austria",
    dateStart: "2026-09-09",
    dateEnd: "2026-09-12",
    lat: 48.3069, lon: 14.2858,
    hotel: {
      label: "Air Linz Residence",
      link: "https://www.booking.com/Share-gAn9QaT",
      note: { nl: "Nog reserveren · parkeren gratis · Ars Electronica 10–11 sept", en: "Still to book · free parking · Ars Electronica Sep 10–11" },
      address: "Schmale Gasse 15/2, 4050 Linz, Austria"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Linz-Ars-Electronica-Center.JPG/960px-Linz-Ars-Electronica-Center.JPG", alt: "Ars Electronica Center, Linz", credit: "https://commons.wikimedia.org/wiki/File:Linz-Ars-Electronica-Center.JPG" },
    sights: [
      { n: "Ars Electronica Center", r: 4.5 },
      { n: "Linz Hauptplatz", r: 4.6 },
      { n: "Neuer Dom (New Cathedral)", r: 4.7 },
      { n: "Grottenbahn (Pöstlingberg)", r: 4.6 }
    ]
  },
  {
    name: "München",
    nameEn: "Munich",
    country: "Duitsland",
    countryEn: "Germany",
    dateStart: "2026-09-12",
    dateEnd: "2026-09-16",
    lat: 48.1351, lon: 11.5820,
    hotel: {
      label: "Homaris Apartments Therese",
      link: "https://www.booking.com/Share-phrrFbl",
      note: { nl: "Gärtnerplatzviertel/Glockenbach · Oktoberfest-timing checken", en: "Gärtnerplatzviertel/Glockenbach · check Oktoberfest timing" },
      address: "Schwanthalerstraße 88, 80336 München, Germany"
    },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Neues_Rathaus_M%C3%BCnchen_2018.jpg/960px-Neues_Rathaus_M%C3%BCnchen_2018.jpg", alt: "Neues Rathaus, München", credit: "https://commons.wikimedia.org/wiki/File:Neues_Rathaus_M%C3%BCnchen_2018.jpg" },
    sights: [
      { n: "Marienplatz", r: 4.7 },
      { n: "Englischer Garten", r: 4.7 },
      { n: "Olympiapark", r: 4.7 },
      { n: "Schloss Nymphenburg", r: 4.6 }
    ]
  }
];

const UI = {
  nl: {
    locale: "nl-NL",
    eyebrow: "🧭 28 aug — 16 sept",
    intro: "Groningen tot aan het Gardameer en terug via de Balkan.",
    countdownLabel: "Dagen tot vertrek",
    countriesLabel: "Landen",
    kmLabel: "Kilometer",
    daysLabel: "Reisdagen",
    weerLabel: "Weer",
    hotelLabel: "Hotel",
    sightsLabel: "Bezienswaardigheden",
    route: "Route",
    footer: "Weer via Open-Meteo · verschijnt automatisch zodra een bestemming binnen 15 dagen ligt",
    pending: "nog te ver vooruit",
    pendingTitle: "Nog niet beschikbaar",
    pendingNote: (date) => `Verschijnt zodra we binnen 15 dagen van ${date} zitten.`,
    forecastFor: (date) => `verwachting voor ${date}`,
    weatherError: (msg) => `Kon weersverwachting niet ophalen (${msg}).`,
    weatherUnknown: "onbekend",
    themeToggleLabel: "Wissel tussen licht en donker",
    langToggleLabel: "Switch to English",
    visitedTitle: "Markeer als bezocht",
    photoCredit: "Foto: Wikimedia Commons",
    authSub: "Voer het wachtwoord in om verder te gaan",
    authSubmit: "Ga verder",
    authError: "Onjuist wachtwoord",
    authPlaceholder: "Wachtwoord"
  },
  en: {
    locale: "en-GB",
    eyebrow: "🧭 Aug 28 — Sep 16",
    intro: "Groningen to Lake Garda and back through the Balkans.",
    countdownLabel: "Days until departure",
    countriesLabel: "Countries",
    kmLabel: "Kilometers",
    daysLabel: "Travel days",
    weerLabel: "Weather",
    hotelLabel: "Hotel",
    sightsLabel: "Attractions",
    route: "Route",
    footer: "Weather via Open-Meteo · appears automatically once a stop is within 15 days",
    pending: "too far ahead",
    pendingTitle: "Not available yet",
    pendingNote: (date) => `Appears once we're within 15 days of ${date}.`,
    forecastFor: (date) => `forecast for ${date}`,
    weatherError: (msg) => `Couldn't fetch the forecast (${msg}).`,
    weatherUnknown: "unknown",
    themeToggleLabel: "Toggle light and dark mode",
    langToggleLabel: "Overschakelen naar Nederlands",
    visitedTitle: "Mark as visited",
    photoCredit: "Photo: Wikimedia Commons",
    authSub: "Enter the password to continue",
    authSubmit: "Continue",
    authError: "Incorrect password",
    authPlaceholder: "Password"
  }
};

const WMO = {
  0:  { icon: "☀️", nl: "Helder", en: "Clear" },
  1:  { icon: "🌤️", nl: "Overwegend helder", en: "Mostly clear" },
  2:  { icon: "⛅", nl: "Half bewolkt", en: "Partly cloudy" },
  3:  { icon: "☁️", nl: "Bewolkt", en: "Cloudy" },
  45: { icon: "🌫️", nl: "Mist", en: "Fog" },
  48: { icon: "🌫️", nl: "Rijp/mist", en: "Rime fog" },
  51: { icon: "🌦️", nl: "Lichte motregen", en: "Light drizzle" },
  53: { icon: "🌦️", nl: "Motregen", en: "Drizzle" },
  55: { icon: "🌧️", nl: "Zware motregen", en: "Heavy drizzle" },
  61: { icon: "🌧️", nl: "Lichte regen", en: "Light rain" },
  63: { icon: "🌧️", nl: "Regen", en: "Rain" },
  65: { icon: "🌧️", nl: "Zware regen", en: "Heavy rain" },
  71: { icon: "🌨️", nl: "Lichte sneeuw", en: "Light snow" },
  73: { icon: "🌨️", nl: "Sneeuw", en: "Snow" },
  75: { icon: "❄️", nl: "Zware sneeuw", en: "Heavy snow" },
  80: { icon: "🌦️", nl: "Buien", en: "Showers" },
  81: { icon: "🌧️", nl: "Fikse buien", en: "Heavy showers" },
  82: { icon: "⛈️", nl: "Zware buien", en: "Violent showers" },
  95: { icon: "⛈️", nl: "Onweer", en: "Thunderstorm" },
  96: { icon: "⛈️", nl: "Onweer met hagel", en: "Thunderstorm with hail" },
  99: { icon: "⛈️", nl: "Zwaar onweer", en: "Severe thunderstorm" }
};
const GOOD_WEATHER_CODES = new Set([0,1,2,3]);
const UNKNOWN_WMO = { icon: "❓", nl: "Onbekend", en: "Unknown" };

const LANG_KEY = 'vakantie-lang';
let LANG = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'nl';
function t(){ return UI[LANG]; }

function fmtDate(d){
  const dt = new Date(d+"T00:00:00");
  return dt.toLocaleDateString(t().locale, {day:'numeric', month:'short'});
}

function daysUntil(d){
  const today = new Date(); today.setHours(0,0,0,0);
  const dt = new Date(d+"T00:00:00");
  return Math.round((dt-today)/86400000);
}

const VISITED_KEY = 'vakantie-visited';
function getVisited(){
  try{ return new Set(JSON.parse(localStorage.getItem(VISITED_KEY)) || []); }
  catch(e){ return new Set(); }
}
function setVisited(set){
  localStorage.setItem(VISITED_KEY, JSON.stringify([...set]));
}
const visitedStops = getVisited();

const weatherCache = {};

function todayDateStr(){
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function isCurrentStop(stop){
  const today = new Date(); today.setHours(0,0,0,0);
  const start = new Date(stop.dateStart+"T00:00:00");
  const end = new Date(stop.dateEnd+"T00:00:00");
  return today >= start && today <= end;
}

async function fetchWeather(stop){
  const dUntil = daysUntil(stop.dateStart);
  if(dUntil > 15){
    weatherCache[stop.name] = { state: 'pending' };
    renderWeather(stop);
    return;
  }
  // While we're actually at this destination, show today's weather instead of the arrival-day forecast.
  const forecastDate = isCurrentStop(stop) ? todayDateStr() : stop.dateStart;
  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${stop.lat}&longitude=${stop.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${forecastDate}&end_date=${forecastDate}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if(data.error) throw new Error(data.reason || 'API error');
    weatherCache[stop.name] = {
      state: 'ok',
      date: forecastDate,
      code: data.daily.weather_code[0],
      tmax: Math.round(data.daily.temperature_2m_max[0]),
      tmin: Math.round(data.daily.temperature_2m_min[0])
    };
  }catch(e){
    weatherCache[stop.name] = { state: 'error', message: e.message };
  }
  renderWeather(stop);
}

function renderWeather(stop){
  const el = document.getElementById('w-'+stop.name);
  const bodyEl = document.getElementById('wd-'+stop.name);
  if(!el || !bodyEl) return;
  const cached = weatherCache[stop.name];
  el.classList.remove('good','bad','pending');
  if(!cached || cached.state === 'pending'){
    el.classList.add('pending');
    el.innerHTML = `🗓️ ${t().pending}`;
    bodyEl.innerHTML = `<div class="weather-detail"><span class="icon-big">🗓️</span><div><div style="font-weight:700;font-size:14.5px;">${t().pendingTitle}</div><div class="weather-note">${t().pendingNote(fmtDate(stop.dateStart))}</div></div></div>`;
    return;
  }
  if(cached.state === 'error'){
    el.classList.add('pending');
    el.innerHTML = `⚠️ ${t().weatherUnknown}`;
    bodyEl.innerHTML = `<div class="weather-note">${t().weatherError(cached.message)}</div>`;
    return;
  }
  const wmo = WMO[cached.code] || UNKNOWN_WMO;
  const label = wmo[LANG];
  const cond = GOOD_WEATHER_CODES.has(cached.code) ? 'good' : 'bad';
  el.classList.add(cond);
  el.innerHTML = `${wmo.icon} ${cached.tmax}° / ${cached.tmin}°`;
  bodyEl.innerHTML = `
    <div class="weather-detail ${cond}">
      <span class="icon-big">${wmo.icon}</span>
      <div>
        <div><span class="temp-max">${cached.tmax}°</span> <span class="temp-min">/ ${cached.tmin}°</span></div>
        <div class="weather-note">${label} · ${t().forecastFor(fmtDate(cached.date))}</div>
      </div>
    </div>`;
}

function mapsUrl(query){
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const container = document.getElementById('stops');

function renderStops(){
  container.innerHTML = '';
  stops.forEach((stop, i) => {
    const div = document.createElement('div');
    div.className = 'stop';
    const placeName = LANG === 'en' && stop.nameEn ? stop.nameEn : stop.name;
    const countryName = LANG === 'en' ? stop.countryEn : stop.country;
    div.innerHTML = `
      <div class="dot" title="${t().visitedTitle}">${i+1}</div>
      <details class="card">
        <summary>
          <div class="summary-left">
            <div class="place-name">${placeName}</div>
            <div class="date-range">${fmtDate(stop.dateStart)} – ${fmtDate(stop.dateEnd)}<span class="dotsep">·</span>${countryName}</div>
          </div>
          <div class="summary-right">
            <span class="weather-chip" id="w-${stop.name}">…</span>
            <span class="chevron">▶</span>
          </div>
        </summary>
        <div class="card-body">
          <div class="divider"></div>

          <div class="section-label">${t().weerLabel}</div>
          <div id="wd-${stop.name}"><div class="weather-note">…</div></div>

          <div class="section-label">${t().hotelLabel}</div>
          <div class="hotel-card">
            <div>
              <a class="hotel-name" href="${stop.hotel.link}" target="_blank" rel="noopener">${stop.hotel.label}</a>
              <div class="hotel-meta">${stop.hotel.note[LANG]}</div>
            </div>
            <div class="hotel-actions">
              <a class="hotel-link hotel-link--primary" href="${mapsUrl(stop.hotel.address)}" target="_blank" rel="noopener">${t().route}</a>
            </div>
          </div>

          <div class="section-label">${t().sightsLabel}</div>
          <div class="sights-row">
            <div class="sights-col">
              <ul class="sights">
                ${stop.sights.map(s => `<li><a class="sight-link" href="${mapsUrl(s.n + ', ' + placeName)}" target="_blank" rel="noopener">${LANG === 'en' && s.nEn ? s.nEn : s.n}</a>${s.r ? `<span class="rating">★ ${s.r}</span>` : ''}</li>`).join('')}
              </ul>
            </div>
            <div class="landmark">
              <img src="${stop.image.src}" alt="${stop.image.alt}" loading="lazy">
              <a class="landmark-credit" href="${stop.image.credit}" target="_blank" rel="noopener">${t().photoCredit}</a>
            </div>
          </div>
        </div>
      </details>
    `;
    container.appendChild(div);
    renderWeather(stop);

    const dotEl = div.querySelector('.dot');
    const placeNameEl = div.querySelector('.place-name');
    function renderVisited(isVisited){
      dotEl.classList.toggle('visited', isVisited);
      placeNameEl.classList.toggle('visited', isVisited);
      dotEl.textContent = isVisited ? '✓' : (i+1);
    }
    renderVisited(visitedStops.has(stop.name));
    dotEl.addEventListener('click', () => {
      const nowVisited = !visitedStops.has(stop.name);
      if(nowVisited){ visitedStops.add(stop.name); } else { visitedStops.delete(stop.name); }
      setVisited(visitedStops);
      renderVisited(nowVisited);
    });
  });
  updateRailLine();
}

function renderHeroText(){
  document.getElementById('eyebrow-text').textContent = t().eyebrow;
  document.getElementById('intro-text').textContent = t().intro;
  document.getElementById('countdown-label').textContent = t().countdownLabel;
  document.getElementById('countries-label').textContent = t().countriesLabel;
  document.getElementById('km-label').textContent = t().kmLabel;
  document.getElementById('days-label').textContent = t().daysLabel;
  document.getElementById('footer-text').textContent = t().footer;
  document.getElementById('theme-toggle').setAttribute('aria-label', t().themeToggleLabel);
  document.getElementById('lang-toggle').setAttribute('aria-label', t().langToggleLabel);
  document.getElementById('lang-toggle').textContent = LANG === 'nl' ? '🇬🇧' : '🇳🇱';
}

document.getElementById('countries-count').textContent = new Set(stops.map(s => s.country)).size;

const departureDate = "2026-08-28";
const daysToDeparture = daysUntil(departureDate);
if(daysToDeparture >= 0){
  const countdownPill = document.getElementById('countdown-pill');
  document.getElementById('countdown-days').textContent = daysToDeparture;
  countdownPill.hidden = false;
}

const tripStart = stops[0].dateStart;
const tripEnd = stops[stops.length - 1].dateEnd;
const totalTripDays = Math.round((new Date(tripEnd+"T00:00:00") - new Date(tripStart+"T00:00:00")) / 86400000) + 1;
const daysLeftInTrip = Math.max(0, Math.min(totalTripDays, daysUntil(tripEnd) + 1));
document.getElementById('travel-days-count').textContent = daysLeftInTrip;

function updateRailLine(){
  const dots = container.querySelectorAll('.dot');
  if(!dots.length) return;
  const containerRect = container.getBoundingClientRect();
  const firstRect = dots[0].getBoundingClientRect();
  const lastRect = dots[dots.length-1].getBoundingClientRect();
  container.style.setProperty('--line-start', (firstRect.bottom - containerRect.top) + 'px');
  container.style.setProperty('--line-end', (containerRect.bottom - lastRect.top) + 'px');
}

renderHeroText();
renderStops();
container.addEventListener('toggle', updateRailLine, true);
window.addEventListener('resize', updateRailLine);

document.getElementById('lang-toggle').addEventListener('click', () => {
  LANG = LANG === 'nl' ? 'en' : 'nl';
  localStorage.setItem(LANG_KEY, LANG);
  renderHeroText();
  renderStops();
});

const THEME_KEY = 'vakantie-theme';

function isNightNow(){
  const h = new Date().getHours();
  return h >= 20 || h < 7;
}

function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function currentTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === 'light' || saved === 'dark') return saved;
  return isNightNow() ? 'dark' : 'light';
}

applyTheme(currentTheme());

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});

function reevaluateAutoTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved === 'light' || saved === 'dark') return;
  applyTheme(isNightNow() ? 'dark' : 'light');
}
setInterval(reevaluateAutoTheme, 5 * 60 * 1000);
document.addEventListener('visibilitychange', () => {
  if(!document.hidden) reevaluateAutoTheme();
});

const AUTH_KEY = 'vakantie-auth';
const AUTH_PASSWORD = 'okletsgo';

function renderAuthText(){
  document.getElementById('auth-sub').textContent = t().authSub;
  document.getElementById('auth-submit').textContent = t().authSubmit;
  document.getElementById('auth-error').textContent = t().authError;
  document.getElementById('auth-input').setAttribute('placeholder', t().authPlaceholder);
}
renderAuthText();

function unlockApp(){
  document.getElementById('auth-gate').style.display = 'none';
  document.getElementById('app').hidden = false;
  updateRailLine();
}

if(localStorage.getItem(AUTH_KEY) === 'ok'){
  unlockApp();
} else {
  const input = document.getElementById('auth-input');
  const errorEl = document.getElementById('auth-error');
  function tryUnlock(){
    if(input.value === AUTH_PASSWORD){
      localStorage.setItem(AUTH_KEY, 'ok');
      errorEl.hidden = true;
      unlockApp();
    } else {
      errorEl.hidden = false;
    }
  }
  document.getElementById('auth-submit').addEventListener('click', tryUnlock);
  input.addEventListener('keydown', (e) => { if(e.key === 'Enter') tryUnlock(); });
  input.focus();
}

stops.forEach(fetchWeather);
