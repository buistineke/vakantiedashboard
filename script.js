const stops = [
  {
    name: "Strasbourg",
    country: "Frankrijk",
    dateStart: "2026-08-28",
    dateEnd: "2026-08-31",
    lat: 48.5734, lon: 7.7521,
    hotel: { label: "Séjours & Affaires Strasbourg Kléber", link: "https://www.booking.com/Share-0OJoS9", note: "Parkeren gereserveerd", address: "16 Rue Hannong, 67000 Strasbourg, France" },
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
    dateStart: "2026-08-31",
    dateEnd: "2026-09-02",
    lat: 47.5596, lon: 7.5886,
    hotel: { label: "Casa Ländli", link: "https://www.booking.com/Share-ixAonz", note: "Geboekt via ProtonMail · parkeren aan de weg, nog uitzoeken", address: "35 Hörnle, 79639 Grenzach-Wyhlen, Germany" },
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
    country: "Italië",
    dateStart: "2026-09-02",
    dateEnd: "2026-09-04",
    lat: 45.5758, lon: 10.6215,
    hotel: { label: "Hotel Residence La Rotonda", link: "https://www.booking.com/Share-EBNmLE", note: "Parkeren gratis", address: "Via Provinciale 10, 25080 Tignale, Italy" },
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
    dateStart: "2026-09-04",
    dateEnd: "2026-09-07",
    lat: 45.8150, lon: 15.9819,
    hotel: { label: "Servus Zagreb Town Centre", link: "https://www.booking.com/Share-gvfG7Z2", note: "Public parking · dagtrip Podgarić Monument op 5 sept", address: "Tkalčićeva 34, 10000 Zagreb, Croatia" },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Spomenik_revoluciji-Podgaric.jpg/960px-Spomenik_revoluciji-Podgaric.jpg", alt: "Podgarić monument", credit: "https://commons.wikimedia.org/wiki/File:Spomenik_revoluciji-Podgaric.jpg" },
    sights: [
      { n: "Lotrščak Tower", r: 4.7 },
      { n: "Cathedral of Zagreb", r: 4.6 },
      { n: "Museum of Broken Relationships", r: 4.3 },
      { n: "Stone Gate", r: 4.7 },
      { n: "Podgarić Monument (dagtrip)", r: null }
    ]
  },
  {
    name: "Bratislava",
    country: "Slowakije",
    dateStart: "2026-09-07",
    dateEnd: "2026-09-09",
    lat: 48.1486, lon: 17.1077,
    hotel: { label: "Downtown Bratislava B&B", link: "https://www.booking.com/Share-sUqvtdQ", note: "⚠️ Public parking — check alternatief", address: "31 Panenská, 811 03 Bratislava, Slovakia" },
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
    dateStart: "2026-09-09",
    dateEnd: "2026-09-12",
    lat: 48.3069, lon: 14.2858,
    hotel: { label: "Air Linz Residence", link: "https://www.booking.com/Share-gAn9QaT", note: "Nog reserveren · parkeren gratis · Ars Electronica 10–11 sept", address: "Schmale Gasse 15/2, 4050 Linz, Austria" },
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
    country: "Duitsland",
    dateStart: "2026-09-12",
    dateEnd: "2026-09-16",
    lat: 48.1351, lon: 11.5820,
    hotel: { label: "Homaris Apartments Therese", link: "https://www.booking.com/Share-phrrFbl", note: "Gärtnerplatzviertel/Glockenbach · Oktoberfest-timing checken", address: "Schwanthalerstraße 88, 80336 München, Germany" },
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Neues_Rathaus_M%C3%BCnchen_2018.jpg/960px-Neues_Rathaus_M%C3%BCnchen_2018.jpg", alt: "Neues Rathaus, München", credit: "https://commons.wikimedia.org/wiki/File:Neues_Rathaus_M%C3%BCnchen_2018.jpg" },
    sights: [
      { n: "Marienplatz", r: 4.7 },
      { n: "Englischer Garten", r: 4.7 },
      { n: "Olympiapark", r: 4.7 },
      { n: "Schloss Nymphenburg", r: 4.6 }
    ]
  }
];

document.getElementById('countries-count').textContent = new Set(stops.map(s => s.country)).size;

const departureDate = "2026-08-28";
const daysToDeparture = daysUntil(departureDate);
if(daysToDeparture >= 0){
  const countdownPill = document.getElementById('countdown-pill');
  document.getElementById('countdown-days').textContent = daysToDeparture;
  countdownPill.hidden = false;
}

const WMO = {
  0:["Helder","☀️"],1:["Overwegend helder","🌤️"],2:["Half bewolkt","⛅"],3:["Bewolkt","☁️"],
  45:["Mist","🌫️"],48:["Rijp/mist","🌫️"],
  51:["Lichte motregen","🌦️"],53:["Motregen","🌦️"],55:["Zware motregen","🌧️"],
  61:["Lichte regen","🌧️"],63:["Regen","🌧️"],65:["Zware regen","🌧️"],
  71:["Lichte sneeuw","🌨️"],73:["Sneeuw","🌨️"],75:["Zware sneeuw","❄️"],
  80:["Buien","🌦️"],81:["Fikse buien","🌧️"],82:["Zware buien","⛈️"],
  95:["Onweer","⛈️"],96:["Onweer met hagel","⛈️"],99:["Zwaar onweer","⛈️"]
};

function fmtDate(d){
  const dt = new Date(d+"T00:00:00");
  return dt.toLocaleDateString('nl-NL',{day:'numeric',month:'short'});
}

function daysUntil(d){
  const today = new Date(); today.setHours(0,0,0,0);
  const dt = new Date(d+"T00:00:00");
  return Math.round((dt-today)/86400000);
}

const GOOD_WEATHER_CODES = new Set([0,1,2,3]);

async function fetchWeather(stop){
  const el = document.getElementById('w-'+stop.name);
  const bodyEl = document.getElementById('wd-'+stop.name);
  const dUntil = daysUntil(stop.dateStart);
  if(dUntil > 15){
    el.classList.add('pending');
    el.innerHTML = `🗓️ nog te ver vooruit`;
    bodyEl.innerHTML = `<div class="weather-detail"><span class="icon-big">🗓️</span><div><div style="font-weight:700;font-size:14.5px;">Nog niet beschikbaar</div><div class="weather-note">Verschijnt zodra we binnen 15 dagen van ${fmtDate(stop.dateStart)} zitten.</div></div></div>`;
    return;
  }
  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${stop.lat}&longitude=${stop.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&start_date=${stop.dateStart}&end_date=${stop.dateStart}`;
    const res = await fetch(url);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if(data.error) throw new Error(data.reason || 'API error');
    const code = data.daily.weather_code[0];
    const tmax = Math.round(data.daily.temperature_2m_max[0]);
    const tmin = Math.round(data.daily.temperature_2m_min[0]);
    const [label, icon] = WMO[code] || ["Onbekend","❓"];
    const cond = GOOD_WEATHER_CODES.has(code) ? 'good' : 'bad';
    el.classList.add(cond);
    el.innerHTML = `${icon} ${tmax}° / ${tmin}°`;
    bodyEl.innerHTML = `
      <div class="weather-detail ${cond}">
        <span class="icon-big">${icon}</span>
        <div>
          <div><span class="temp-max">${tmax}°</span> <span class="temp-min">/ ${tmin}°</span></div>
          <div class="weather-note">${label} · verwachting voor ${fmtDate(stop.dateStart)}</div>
        </div>
      </div>`;
  }catch(e){
    el.classList.add('pending');
    el.innerHTML = `⚠️ onbekend`;
    bodyEl.innerHTML = `<div class="weather-note">Kon weersverwachting niet ophalen (${e.message}).</div>`;
  }
}

const VISITED_KEY = 'vakantie-visited';

function getVisited(){
  try{ return new Set(JSON.parse(localStorage.getItem(VISITED_KEY)) || []); }
  catch(e){ return new Set(); }
}

function setVisited(set){
  localStorage.setItem(VISITED_KEY, JSON.stringify([...set]));
}

const container = document.getElementById('stops');
const visitedStops = getVisited();
stops.forEach((stop, i) => {
  const div = document.createElement('div');
  div.className = 'stop';
  div.innerHTML = `
    <div class="dot" title="Markeer als bezocht">${i+1}</div>
    <details class="card">
      <summary>
        <div class="summary-left">
          <div class="place-name">${stop.name}</div>
          <div class="date-range">${fmtDate(stop.dateStart)} – ${fmtDate(stop.dateEnd)}<span class="dotsep">·</span>${stop.country}</div>
        </div>
        <div class="summary-right">
          <span class="weather-chip" id="w-${stop.name}">…</span>
          <span class="chevron">▶</span>
        </div>
      </summary>
      <div class="card-body">
        <div class="divider"></div>

        <div class="section-label">Weer</div>
        <div id="wd-${stop.name}"><div class="weather-note">Laden…</div></div>

        <div class="section-label">Hotel</div>
        <div class="hotel-card">
          <div>
            <div class="hotel-name">${stop.hotel.label}</div>
            <div class="hotel-meta">${stop.hotel.note}</div>
          </div>
          <div class="hotel-actions">
            <a class="hotel-link" href="${stop.hotel.link}" target="_blank" rel="noopener">Bekijken</a>
            <a class="hotel-link hotel-link--secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.hotel.address)}" target="_blank" rel="noopener">Route</a>
          </div>
        </div>

        <div class="section-label">Bezienswaardigheden</div>
        <div class="sights-row">
          <div class="sights-col">
            <ul class="sights">
              ${stop.sights.map(s => `<li>${s.n}${s.r ? `<span class="rating">★ ${s.r}</span>` : ''}</li>`).join('')}
            </ul>
          </div>
          <div class="landmark">
            <img src="${stop.image.src}" alt="${stop.image.alt}" loading="lazy">
            <a class="landmark-credit" href="${stop.image.credit}" target="_blank" rel="noopener">Foto: Wikimedia Commons</a>
          </div>
        </div>
      </div>
    </details>
  `;
  container.appendChild(div);
  fetchWeather(stop);

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

function updateRailLine(){
  const dots = container.querySelectorAll('.dot');
  if(!dots.length) return;
  const containerRect = container.getBoundingClientRect();
  const firstRect = dots[0].getBoundingClientRect();
  const lastRect = dots[dots.length-1].getBoundingClientRect();
  container.style.setProperty('--line-start', (firstRect.bottom - containerRect.top) + 'px');
  container.style.setProperty('--line-end', (containerRect.bottom - lastRect.top) + 'px');
}
updateRailLine();
container.addEventListener('toggle', updateRailLine, true);
window.addEventListener('resize', updateRailLine);

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
