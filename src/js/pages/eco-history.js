/* ===== eco-history.js — Eco-History Sync (Impel Novelty) ===== */
import { initApp } from "../core/app-init.js";
import { formatIDR } from "../core/utils.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

initApp({ activePage: "eco-history", basePath: "../../", pagePath: "" });

/* =========================================
   HISTORICAL ECONOMIC DATA (Indonesia)
   ========================================= */
const ecoData = {
  1960: { pdb: "8.0 Miliar USD", pdbNum: 8, pdbGrowth: "1.9%", growthNum: 1.9, inflasi: "~20%", inflasiNum: 20, kurs: "45/USD", kursNum: 45, presiden: "Soekarno", penduduk: "88 juta", story: "Era awal kemerdekaan ekonomi. Indonesia masih sangat bergantung pada ekspor komoditas mentah. Pendapatan per kapita hanya $91. Soekarno fokus pada proyek infrastruktur nasionalis besar-besaran." },
  1965: { pdb: "5.3 Miliar USD", pdbNum: 5.3, pdbGrowth: "-2.3%", growthNum: -2.3, inflasi: "594%", inflasiNum: 594, kurs: "1.000/USD (baru)", kursNum: 1000, presiden: "Soekarno → Soeharto", penduduk: "103 juta", story: "Hiperinflasi menghancurkan daya beli rakyat. Harga beras naik 900% dalam setahun. Pergantian rezim dari Orde Lama ke Orde Baru dimulai." },
  1970: { pdb: "9.0 Miliar USD", pdbNum: 9, pdbGrowth: "7.5%", growthNum: 7.5, inflasi: "12.3%", inflasiNum: 12.3, kurs: "378/USD", kursNum: 378, presiden: "Soeharto", penduduk: "115 juta", story: "Awal era Orde Baru. Program Repelita I dimulai. Stabilisasi ekonomi berhasil menekan inflasi dari 600% ke 12%. Boom minyak mulai mengalirkan devisa." },
  1975: { pdb: "27 Miliar USD", pdbNum: 27, pdbGrowth: "5.0%", growthNum: 5.0, inflasi: "19.0%", inflasiNum: 19, kurs: "415/USD", kursNum: 415, presiden: "Soeharto", penduduk: "130 juta", story: "Puncak Oil Boom pertama. Pendapatan minyak membiayai pembangunan sekolah, jalan, dan irigasi. Indonesia menjadi eksportir minyak terbesar OPEC." },
  1980: { pdb: "72 Miliar USD", pdbNum: 72, pdbGrowth: "9.9%", growthNum: 9.9, inflasi: "18.0%", inflasiNum: 18, kurs: "627/USD", kursNum: 627, presiden: "Soeharto", penduduk: "147 juta", story: "Ekonomi tumbuh pesat berkat oil boom kedua. GDP per kapita mencapai $490. Revolusi Hijau berhasil — Indonesia swasembada beras 1984. Urbanisasi masif dimulai." },
  1985: { pdb: "86 Miliar USD", pdbNum: 86, pdbGrowth: "2.5%", growthNum: 2.5, inflasi: "4.7%", inflasiNum: 4.7, kurs: "1.111/USD", kursNum: 1111, presiden: "Soeharto", penduduk: "164 juta", story: "Harga minyak jatuh drastis memaksa diversifikasi ekonomi. Deregulasi perbankan dan sektor riil dimulai. Industrialisasi non-migas tumbuh pesat." },
  1990: { pdb: "114 Miliar USD", pdbNum: 114, pdbGrowth: "7.2%", growthNum: 7.2, inflasi: "7.8%", inflasiNum: 7.8, kurs: "1.843/USD", kursNum: 1843, presiden: "Soeharto", penduduk: "179 juta", story: "Dekade 'Macan Asia'. Ekonomi tumbuh rata-rata 7% per tahun. Sektor manufaktur, tekstil, dan elektronik booming. Kelas menengah mulai terbentuk." },
  1995: { pdb: "202 Miliar USD", pdbNum: 202, pdbGrowth: "8.2%", growthNum: 8.2, inflasi: "9.4%", inflasiNum: 9.4, kurs: "2.249/USD", kursNum: 2249, presiden: "Soeharto", penduduk: "194 juta", story: "Puncak keajaiban ekonomi Asia. Investasi asing deras masuk. Gedung pencakar langit bermunculan. Tapi utang swasta yang tak terkontrol menjadi bom waktu." },
  1998: { pdb: "95 Miliar USD", pdbNum: 95, pdbGrowth: "-13.1%", growthNum: -13.1, inflasi: "77.6%", inflasiNum: 77.6, kurs: "10.014/USD", kursNum: 10014, presiden: "Soeharto → Habibie", penduduk: "204 juta", story: "Krisis moneter terburuk. Rupiah ambruk 80%. Bank-bank kolaps. Harga sembako melonjak 3x lipat. Kerusuhan sosial. Soeharto mundur setelah 32 tahun berkuasa." },
  2000: { pdb: "165 Miliar USD", pdbNum: 165, pdbGrowth: "4.9%", growthNum: 4.9, inflasi: "9.4%", inflasiNum: 9.4, kurs: "8.422/USD", kursNum: 8422, presiden: "Abdurrahman Wahid", penduduk: "211 juta", story: "Era Reformasi. Demokrasi pertama dimulai. Ekonomi mulai pulih dari krisis. Otonomi daerah diberlakukan. Perbankan direkstrukturisasi secara besar-besaran." },
  2005: { pdb: "286 Miliar USD", pdbNum: 286, pdbGrowth: "5.7%", growthNum: 5.7, inflasi: "17.1%", inflasiNum: 17.1, kurs: "9.705/USD", kursNum: 9705, presiden: "Susilo B. Yudhoyono", penduduk: "226 juta", story: "BBM naik 2x lipat memicu inflasi. Tsunami Aceh 2004 masih membayangi. Tapi fundamental ekonomi membaik. SBY mulai program stabilisasi fiskal." },
  2008: { pdb: "510 Miliar USD", pdbNum: 510, pdbGrowth: "6.0%", growthNum: 6.0, inflasi: "11.1%", inflasiNum: 11.1, kurs: "9.699/USD", kursNum: 9699, presiden: "Susilo B. Yudhoyono", penduduk: "237 juta", story: "Krisis global dari AS, tapi Indonesia relatif tahan. PDB hanya melambat ke 4.6% di 2009. Konsumsi domestik yang kuat jadi penyelamat." },
  2010: { pdb: "755 Miliar USD", pdbNum: 755, pdbGrowth: "6.2%", growthNum: 6.2, inflasi: "7.0%", inflasiNum: 7.0, kurs: "9.090/USD", kursNum: 9090, presiden: "Susilo B. Yudhoyono", penduduk: "242 juta", story: "Indonesia masuk G20. Investment grade kembali diraih. Commodity boom mendorong ekspor. Startup digital mulai bermunculan." },
};

/* =========================================
   TIMELINE MILESTONES
   ========================================= */
const milestones = [
  { year: 1965, label: "Hiperinflasi 594%", color: "red" },
  { year: 1970, label: "Repelita I dimulai", color: "green" },
  { year: 1984, label: "Swasembada beras", color: "green" },
  { year: 1997, label: "Krisis Asia dimulai", color: "red" },
  { year: 1998, label: "Soeharto mundur", color: "amber" },
  { year: 2004, label: "Pemilu langsung pertama", color: "blue" },
  { year: 2008, label: "Krisis Global (tahan)", color: "amber" },
  { year: 2010, label: "Masuk G20", color: "green" },
  { year: 2020, label: "Pandemi COVID-19", color: "red" },
  { year: 2024, label: "PDB > $1.3 Triliun", color: "green" },
];

/* =========================================
   CHART.JS SHARED STYLES
   ========================================= */
const chartFont = { family: "'Inter', sans-serif", size: 11 };
const gridColor = "rgba(148,163,184,0.12)";

/* =========================================
   DOM & LOGIC
   ========================================= */
const birthInput = document.getElementById("birth-year");
const syncBtn = document.getElementById("sync-btn");
const resultSection = document.getElementById("eco-result");
const resultYear = document.getElementById("result-year");
const dataCardsEl = document.getElementById("eco-data-cards");
const storyCardEl = document.getElementById("eco-story-card");
const timelineEl = document.getElementById("eco-timeline");

let pdbChart = null;
let inflationChart = null;

function findClosestYear(target) {
  const years = Object.keys(ecoData).map(Number);
  return years.reduce((prev, curr) => Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
}

function renderCharts(birthYear) {
  const years = Object.keys(ecoData).map(Number).sort((a, b) => a - b);
  const labels = years.map(String);
  const pdbValues = years.map(y => ecoData[y].pdbNum);
  const growthValues = years.map(y => ecoData[y].growthNum);
  const inflasiValues = years.map(y => ecoData[y].inflasiNum);
  const kursValues = years.map(y => ecoData[y].kursNum);

  const closestYear = findClosestYear(birthYear);
  const birthIndex = years.indexOf(closestYear);

  // Highlight birth year with point styles
  const pointBgPdb = years.map(y => y === closestYear ? "#059669" : "rgba(5,150,105,0.6)");
  const pointRadiusPdb = years.map(y => y === closestYear ? 8 : 3);

  // --- PDB Chart ---
  const pdbCtx = document.getElementById("chart-pdb");
  if (pdbChart) pdbChart.destroy();
  pdbChart = new Chart(pdbCtx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "PDB (Miliar USD)",
          data: pdbValues,
          backgroundColor: years.map(y => y === closestYear ? "#059669" : "rgba(5,150,105,0.25)"),
          borderColor: years.map(y => y === closestYear ? "#059669" : "rgba(5,150,105,0.5)"),
          borderWidth: 1,
          borderRadius: 6,
          order: 2,
          yAxisID: "y",
        },
        {
          label: "Growth (%)",
          data: growthValues,
          type: "line",
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.1)",
          pointBackgroundColor: years.map(y => y === closestYear ? "#6366f1" : "rgba(99,102,241,0.5)"),
          pointRadius: years.map(y => y === closestYear ? 7 : 3),
          pointHoverRadius: 7,
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
          order: 1,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { position: "top", labels: { font: chartFont, usePointStyle: true, pointStyle: "circle", padding: 16 } },
        tooltip: {
          backgroundColor: "rgba(15,23,42,0.9)",
          titleFont: { ...chartFont, weight: "bold" },
          bodyFont: chartFont,
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            afterTitle: (items) => {
              const yr = parseInt(items[0].label);
              return yr === closestYear ? "⭐ Tahun lahir Anda!" : "";
            },
          },
        },
        annotation: birthIndex >= 0 ? {
          annotations: {
            birthLine: {
              type: "line",
              xMin: birthIndex,
              xMax: birthIndex,
              borderColor: "#059669",
              borderWidth: 2,
              borderDash: [6, 4],
              label: {
                display: true,
                content: "Lahir",
                position: "start",
                backgroundColor: "#059669",
                color: "#fff",
                font: { size: 10, weight: "bold" },
                padding: 4,
                borderRadius: 4,
              },
            },
          },
        } : {},
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: chartFont } },
        y: {
          position: "left",
          title: { display: true, text: "PDB (Miliar USD)", font: { ...chartFont, weight: "bold" } },
          grid: { color: gridColor },
          ticks: { font: chartFont },
        },
        y1: {
          position: "right",
          title: { display: true, text: "Growth (%)", font: { ...chartFont, weight: "bold" } },
          grid: { drawOnChartArea: false },
          ticks: { font: chartFont, callback: v => v + "%" },
        },
      },
    },
  });

  // --- Inflasi & Kurs Chart ---
  const infCtx = document.getElementById("chart-inflation");
  if (inflationChart) inflationChart.destroy();

  // Cap inflasi for display (594% would crush the chart)
  const inflasiCapped = inflasiValues.map(v => Math.min(v, 100));
  const hasOutlier = inflasiValues.some(v => v > 100);

  inflationChart = new Chart(infCtx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Inflasi (%)",
          data: inflasiCapped,
          borderColor: "#ef4444",
          backgroundColor: "rgba(239,68,68,0.08)",
          pointBackgroundColor: years.map(y => y === closestYear ? "#ef4444" : "rgba(239,68,68,0.5)"),
          pointRadius: years.map(y => y === closestYear ? 7 : 3),
          pointHoverRadius: 7,
          borderWidth: 2.5,
          tension: 0.3,
          fill: true,
          yAxisID: "y",
        },
        {
          label: "Kurs (Rp/USD)",
          data: kursValues,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.08)",
          pointBackgroundColor: years.map(y => y === closestYear ? "#3b82f6" : "rgba(59,130,246,0.5)"),
          pointRadius: years.map(y => y === closestYear ? 7 : 3),
          pointHoverRadius: 7,
          borderWidth: 2.5,
          tension: 0.3,
          fill: true,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { position: "top", labels: { font: chartFont, usePointStyle: true, pointStyle: "circle", padding: 16 } },
        tooltip: {
          backgroundColor: "rgba(15,23,42,0.9)",
          titleFont: { ...chartFont, weight: "bold" },
          bodyFont: chartFont,
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: (ctx) => {
              if (ctx.datasetIndex === 0) {
                const yr = parseInt(ctx.label);
                const actual = ecoData[yr]?.inflasiNum ?? ctx.raw;
                return ` Inflasi: ${actual > 100 ? actual + "% ⚠️" : actual + "%"}`;
              }
              return ` Kurs: Rp ${ctx.raw.toLocaleString("id-ID")}/USD`;
            },
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: chartFont } },
        y: {
          position: "left",
          title: { display: true, text: hasOutlier ? "Inflasi (% — capped 100)" : "Inflasi (%)", font: { ...chartFont, weight: "bold" } },
          grid: { color: gridColor },
          ticks: { font: chartFont, callback: v => v + "%" },
          min: 0,
        },
        y1: {
          position: "right",
          title: { display: true, text: "Kurs Rp/USD", font: { ...chartFont, weight: "bold" } },
          grid: { drawOnChartArea: false },
          ticks: { font: chartFont, callback: v => "Rp " + v.toLocaleString("id-ID") },
        },
      },
    },
  });
}

function renderResult(targetYear) {
  const closest = findClosestYear(targetYear);
  const data = ecoData[closest];
  if (!data) return;

  resultYear.textContent = closest;
  const age2026 = 2026 - targetYear;
  document.getElementById("result-subtitle").textContent =
    closest === targetYear
      ? `Saat Anda lahir, begini kondisi ekonomi negara ini. Anda sekarang berusia ${age2026} tahun.`
      : `Data terdekat: tahun ${closest}. Anda sekarang berusia ${age2026} tahun.`;

  // Data cards
  const cards = [
    { label: "PDB Indonesia", value: data.pdb, color: "brand-green" },
    { label: "Pertumbuhan", value: data.pdbGrowth, color: data.pdbGrowth.startsWith("-") ? "red-500" : "brand-green" },
    { label: "Inflasi", value: data.inflasi, color: parseFloat(data.inflasi) > 10 ? "red-500" : "amber-600" },
    { label: "Kurs Rupiah", value: "Rp " + data.kurs, color: "blue-600" },
  ];

  dataCardsEl.innerHTML = cards.map((c, i) => `
    <div class="harbor-card-flat p-6 text-center animate-fade-in-up" style="animation-delay:${i * 100}ms">
      <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">${c.label}</div>
      <div class="text-2xl font-serif font-bold text-${c.color}">${c.value}</div>
    </div>
  `).join("");

  // Story card
  storyCardEl.innerHTML = `
    <div class="flex flex-col md:flex-row gap-8">
      <div class="md:w-1/3">
        <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Presiden</div>
        <div class="text-lg font-bold mb-4">${data.presiden}</div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Populasi</div>
        <div class="text-lg font-bold mb-4">${data.penduduk}</div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Usia Anda</div>
        <div class="text-lg font-bold">${age2026} tahun</div>
      </div>
      <div class="md:w-2/3">
        <h3 class="font-serif text-2xl font-bold mb-4">Cerita Ekonomi ${closest}</h3>
        <p class="text-slate-500 leading-relaxed">${data.story}</p>
      </div>
    </div>
  `;

  // Charts
  renderCharts(targetYear);

  // Timeline
  const relevant = milestones.filter(m => m.year >= closest);
  timelineEl.innerHTML = relevant.map(m => {
    const colorMap = { red: "bg-red-500", green: "bg-brand-green", amber: "bg-amber-500", blue: "bg-blue-600" };
    const textMap = { red: "text-red-500", green: "text-brand-green", amber: "text-amber-600", blue: "text-blue-600" };
    return `
      <div class="flex items-start gap-4">
        <div class="flex flex-col items-center">
          <div class="w-3 h-3 rounded-full ${colorMap[m.color]} shrink-0 mt-1"></div>
          <div class="w-px h-full bg-slate-200 min-h-[24px]"></div>
        </div>
        <div>
          <span class="text-xs font-bold ${textMap[m.color]}">${m.year}</span>
          <p class="text-sm text-slate-600 font-semibold">${m.label}</p>
        </div>
      </div>
    `;
  }).join("");

  // Show result
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (syncBtn) {
  syncBtn.addEventListener("click", () => {
    const year = parseInt(birthInput.value);
    if (!year || year < 1960 || year > 2010) {
      birthInput.classList.add("ring-2", "ring-red-400");
      setTimeout(() => birthInput.classList.remove("ring-2", "ring-red-400"), 1500);
      return;
    }
    renderResult(year);
  });
}

if (birthInput) {
  birthInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") syncBtn.click();
  });
}
