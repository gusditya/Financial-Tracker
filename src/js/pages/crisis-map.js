/* ===== crisis-map.js — Crisis Survival Map (Navigate) ===== */
import { initApp } from "../core/app-init.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

initApp({ activePage: "crisis-map", basePath: "../../", pagePath: "" });

/* =========================================
   CHART.JS SHARED STYLES
   ========================================= */
const chartFont = { family: "'Inter', sans-serif", size: 11 };

/* =========================================
   CRISIS DATABASE
   ========================================= */
const crisisDB = {
  "1998": {
    name: "Krisis Moneter Asia",
    tagline: "Rupiah terjun bebas, ekonomi kolaps, rezim berakhir",
    color: "red",
    stats: [
      { label: "PDB Kontraksi", value: "-13.1%", sub: "Terburuk sepanjang sejarah" },
      { label: "Inflasi", value: "77.6%", sub: "Harga sembako 3x lipat" },
      { label: "Kurs Rupiah", value: "Rp 16.800", sub: "Dari Rp 2.500/USD" },
      { label: "Bank Dilikuidasi", value: "16 bank", sub: "November 1997" },
    ],
    // Numeric scores for radar: PDB impact, Inflasi, Kurs depresiasi, PHK, UMKM dampak, Recovery time (1-10 scale)
    radarScores: [10, 10, 10, 8, 7, 8],
    collapsed: [
      { sector: "Perbankan", detail: "16 bank ditutup, kredit macet 48.6% dari total", score: 10 },
      { sector: "Properti & Konstruksi", detail: "Proyek mangkrak, developer bangkrut massal", score: 9 },
      { sector: "Manufaktur (impor bahan)", detail: "Biaya produksi naik 300% karena kurs", score: 8 },
      { sector: "Retail Barang Mewah", detail: "Daya beli ambruk, toko-toko tutup", score: 7 },
    ],
    survived: [
      { sector: "Pertanian & Perikanan", detail: "Ekspor CPO & udang justru naik karena kurs menguntungkan", score: 8 },
      { sector: "UMKM Makanan", detail: "Warung Padang, gorengan, nasi bungkus tetap laris", score: 9 },
      { sector: "Ekspor Komoditas", detail: "Batubara, kopi, karet tertolong lemahnya Rupiah", score: 7 },
      { sector: "Kebutuhan Pokok", detail: "Sembako tetap dibutuhkan apapun kondisinya", score: 10 },
    ],
    playbook: [
      { title: "Stok Bahan Baku Lokal", tip: "Ganti bahan impor ke lokal. UMKM yang pakai bahan lokal selamat karena tidak terpengaruh kurs." },
      { title: "Kurangi Utang Berbunga", tip: "Suku bunga naik ke 70%. Bisnis yang punya utang bank kolaps. Cash is survival." },
      { title: "Jual Kebutuhan Primer", tip: "Orang stop beli barang mewah, tapi tetap makan 3x sehari. Pivot ke produk kebutuhan dasar." },
      { title: "Ekspor Jika Bisa", tip: "Rupiah lemah = ekspor murah. UMKM yang bisa ekspor justru booming." },
    ],
  },
  "2008": {
    name: "Krisis Finansial Global",
    tagline: "Subprime mortgage AS memicu efek domino dunia",
    color: "amber",
    stats: [
      { label: "IHSG Anjlok", value: "-50.6%", sub: "Dari 2.830 ke 1.355" },
      { label: "PDB Growth", value: "4.6%", sub: "Melambat dari 6.3%" },
      { label: "Ekspor Turun", value: "-25%", sub: "Demand global melemah" },
      { label: "PHK Formal", value: "50.000+", sub: "Sektor manufaktur & tambang" },
    ],
    radarScores: [3, 4, 3, 6, 4, 3],
    collapsed: [
      { sector: "Pertambangan & Komoditas", detail: "Harga batubara jatuh dari $180 ke $60/ton", score: 9 },
      { sector: "Tekstil & Garmen Ekspor", detail: "Order dari AS & Eropa turun drastis", score: 7 },
      { sector: "Properti Komersial", detail: "Penyerapan kantor turun, harga properti stagnan", score: 5 },
      { sector: "Otomotif (ekspor)", detail: "Permintaan global anjlok, produksi dikurangi", score: 6 },
    ],
    survived: [
      { sector: "Konsumsi Domestik", detail: "70% PDB Indonesia dari konsumsi. Indomie tetap laris.", score: 9 },
      { sector: "Telekomunikasi", detail: "Penetrasi HP meledak. Pulsa jadi kebutuhan primer.", score: 8 },
      { sector: "UMKM Makanan & Minuman", detail: "Warung kopi, bakso, nasi goreng tahan banting", score: 9 },
      { sector: "Perbankan (setelah restrukturisasi)", detail: "Bank-bank sudah kuat dari reformasi 1998", score: 7 },
    ],
    playbook: [
      { title: "Fokus Pasar Domestik", tip: "Jangan bergantung 100% ekspor. Indonesia punya 240 juta konsumen lokal." },
      { title: "Efisiensi Operasional", tip: "Potong biaya yang tidak esensial. Negosiasi ulang sewa dan kontrak." },
      { title: "Diversifikasi Produk", tip: "Tambah varian murah. Konsumen downgrade, bukan berhenti beli." },
      { title: "Jaga Cashflow Ketat", tip: "Terima pembayaran tunai. Kurangi piutang. Cash position = ketahanan." },
    ],
  },
  "2020": {
    name: "Pandemi COVID-19",
    tagline: "Lockdown global, disrupsi total, tapi digital meledak",
    color: "blue",
    stats: [
      { label: "PDB Kontraksi", value: "-2.07%", sub: "Pertama sejak 1998" },
      { label: "UMKM Terdampak", value: "87.5%", sub: "Dari 64 juta UMKM" },
      { label: "E-Commerce", value: "+54%", sub: "Transaksi online meledak" },
      { label: "Stimulus Pemerintah", value: "Rp 695T", sub: "PEN (Program Ekonomi Nasional)" },
    ],
    radarScores: [4, 3, 2, 5, 9, 4],
    collapsed: [
      { sector: "Pariwisata & Hotel", detail: "Okupansi hotel turun ke 10%. Bali lumpuh total.", score: 10 },
      { sector: "Transportasi & Penerbangan", detail: "Garuda rugi Rp 28.6T. Angkutan darat sepi.", score: 9 },
      { sector: "Event & Entertainment", detail: "Seluruh acara dibatalkan. Industri kreatif offline mati.", score: 8 },
      { sector: "Retail Fashion (offline)", detail: "Mall tutup berbulan-bulan. Brand lokal kolaps.", score: 7 },
    ],
    survived: [
      { sector: "E-commerce & Marketplace", detail: "Tokopedia, Shopee, Bukalapak naik 54%. Belanja online jadi kebiasaan.", score: 10 },
      { sector: "Kesehatan & Farmasi", detail: "Masker, hand sanitizer, vitamin booming. Apotek kewalahan.", score: 9 },
      { sector: "Logistik & Delivery", detail: "J&T, SiCepat, GoSend tumbuh 30%+. Last-mile delivery jadi kunci.", score: 8 },
      { sector: "UMKM Kuliner Online", detail: "Warung yang masuk GoFood/GrabFood selamat. Cloud kitchen bermunculan.", score: 9 },
    ],
    playbook: [
      { title: "Go Digital Sekarang!", tip: "UMKM yang masuk marketplace dalam 3 bulan pertama punya survival rate 70% vs 30%." },
      { title: "Manfaatkan Bantuan Pemerintah", tip: "Ada BLT UMKM Rp 2.4 juta, restrukturisasi kredit, subsidi bunga. Jangan gengsi." },
      { title: "Pivot Model Bisnis", tip: "Restoran jadi cloud kitchen. Toko baju jual masker. Adaptasi = survival." },
      { title: "Bangun Komunitas Online", tip: "WhatsApp group pelanggan, Instagram live selling, TikTok marketing. Reach tanpa biaya sewa." },
    ],
  },
};

/* =========================================
   DOM & LOGIC
   ========================================= */
const selectorEl = document.getElementById("crisis-selector");
const detailEl = document.getElementById("crisis-detail");
const detailYear = document.getElementById("crisis-detail-year");
const detailName = document.getElementById("crisis-detail-name");
const detailTagline = document.getElementById("crisis-detail-tagline");
const statsEl = document.getElementById("crisis-stats");
const collapsedEl = document.getElementById("sectors-collapsed");
const survivedEl = document.getElementById("sectors-survived");
const playbookEl = document.getElementById("survival-playbook");

let radarChart = null;
let sectorChart = null;

function renderCrisisCharts(year) {
  const crisis = crisisDB[year];
  if (!crisis) return;

  const crisisColorMap = { red: "#ef4444", amber: "#f59e0b", blue: "#3b82f6" };
  const crisisColorAlpha = { red: "rgba(239,68,68,0.2)", amber: "rgba(245,158,11,0.2)", blue: "rgba(59,130,246,0.2)" };
  const mainColor = crisisColorMap[crisis.color];
  const alphaColor = crisisColorAlpha[crisis.color];

  // --- RADAR CHART ---
  const radarCtx = document.getElementById("chart-crisis-radar");
  if (radarChart) radarChart.destroy();

  const radarLabels = ["PDB Impact", "Inflasi", "Kurs Depresiasi", "PHK Massal", "UMKM Dampak", "Waktu Recovery"];

  // Show all 3 crises on radar for comparison
  radarChart = new Chart(radarCtx, {
    type: "radar",
    data: {
      labels: radarLabels,
      datasets: [
        {
          label: "1998 Krisis Moneter",
          data: crisisDB["1998"].radarScores,
          borderColor: "#ef4444",
          backgroundColor: year === "1998" ? "rgba(239,68,68,0.25)" : "rgba(239,68,68,0.05)",
          borderWidth: year === "1998" ? 3 : 1.5,
          pointRadius: year === "1998" ? 5 : 2,
          pointBackgroundColor: "#ef4444",
        },
        {
          label: "2008 Krisis Global",
          data: crisisDB["2008"].radarScores,
          borderColor: "#f59e0b",
          backgroundColor: year === "2008" ? "rgba(245,158,11,0.25)" : "rgba(245,158,11,0.05)",
          borderWidth: year === "2008" ? 3 : 1.5,
          pointRadius: year === "2008" ? 5 : 2,
          pointBackgroundColor: "#f59e0b",
        },
        {
          label: "2020 Pandemi",
          data: crisisDB["2020"].radarScores,
          borderColor: "#3b82f6",
          backgroundColor: year === "2020" ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.05)",
          borderWidth: year === "2020" ? 3 : 1.5,
          pointRadius: year === "2020" ? 5 : 2,
          pointBackgroundColor: "#3b82f6",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { font: chartFont, usePointStyle: true, pointStyle: "circle", padding: 12 } },
        tooltip: {
          backgroundColor: "rgba(15,23,42,0.9)",
          titleFont: { ...chartFont, weight: "bold" },
          bodyFont: chartFont,
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}/10`,
          },
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 10,
          ticks: { stepSize: 2, font: { size: 9 }, backdropColor: "transparent" },
          pointLabels: { font: { ...chartFont, size: 10, weight: "600" } },
          grid: { color: "rgba(148,163,184,0.15)" },
          angleLines: { color: "rgba(148,163,184,0.15)" },
        },
      },
    },
  });

  // --- SECTOR HORIZONTAL BAR CHART ---
  const sectorCtx = document.getElementById("chart-crisis-sectors");
  if (sectorChart) sectorChart.destroy();

  const collapsedLabels = crisis.collapsed.map(s => s.sector);
  const collapsedScores = crisis.collapsed.map(s => -s.score); // negative for left side
  const survivedLabels = crisis.survived.map(s => s.sector);
  const survivedScores = crisis.survived.map(s => s.score);

  const allLabels = [...collapsedLabels, ...survivedLabels];
  const allScores = [...collapsedScores, ...survivedScores];
  const allColors = [
    ...collapsedScores.map(() => "rgba(239,68,68,0.7)"),
    ...survivedScores.map(() => "rgba(5,150,105,0.7)"),
  ];
  const allBorders = [
    ...collapsedScores.map(() => "#ef4444"),
    ...survivedScores.map(() => "#059669"),
  ];

  sectorChart = new Chart(sectorCtx, {
    type: "bar",
    data: {
      labels: allLabels,
      datasets: [{
        data: allScores,
        backgroundColor: allColors,
        borderColor: allBorders,
        borderWidth: 1,
        borderRadius: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(15,23,42,0.9)",
          titleFont: { ...chartFont, weight: "bold" },
          bodyFont: chartFont,
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: (ctx) => {
              const val = ctx.raw;
              return val < 0 ? `Dampak: ${Math.abs(val)}/10 (Terdampak)` : `Ketahanan: ${val}/10 (Survive)`;
            },
          },
        },
      },
      scales: {
        x: {
          min: -10,
          max: 10,
          grid: { color: "rgba(148,163,184,0.1)" },
          ticks: {
            font: chartFont,
            callback: v => Math.abs(v),
          },
          title: { display: true, text: "← Terdampak | Survive →", font: { ...chartFont, weight: "bold", size: 10 } },
        },
        y: {
          grid: { display: false },
          ticks: { font: { ...chartFont, size: 10 } },
        },
      },
    },
  });
}

function renderCrisis(year) {
  const crisis = crisisDB[year];
  if (!crisis) return;

  const colorMap = { red: "text-red-500", amber: "text-amber-600", blue: "text-blue-600" };

  // Highlight active card
  document.querySelectorAll(".crisis-card").forEach(card => {
    card.classList.remove("border-red-500", "border-amber-500", "border-blue-500", "bg-red-50", "bg-amber-50", "bg-blue-50");
    card.classList.add("border-transparent");
  });
  const activeCard = document.querySelector(`[data-crisis="${year}"]`);
  const borderColor = { red: "border-red-500", amber: "border-amber-500", blue: "border-blue-500" }[crisis.color];
  const bgColor = { red: "bg-red-50", amber: "bg-amber-50", blue: "bg-blue-50" }[crisis.color];
  activeCard.classList.remove("border-transparent");
  activeCard.classList.add(borderColor, bgColor);

  // Header
  detailYear.textContent = year;
  detailYear.className = `text-4xl font-serif font-bold ${colorMap[crisis.color]}`;
  detailName.textContent = crisis.name;
  detailTagline.textContent = crisis.tagline;

  // Stats
  statsEl.innerHTML = crisis.stats.map(s => `
    <div class="bg-slate-50 rounded-xl p-4 text-center">
      <div class="text-xl font-serif font-bold ${colorMap[crisis.color]}">${s.value}</div>
      <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">${s.label}</div>
      <div class="text-[9px] text-slate-400 mt-1">${s.sub}</div>
    </div>
  `).join("");

  // Collapsed sectors
  collapsedEl.innerHTML = crisis.collapsed.map(s => `
    <div class="flex items-start gap-3 p-3 bg-red-50 rounded-xl">
      <span class="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">&#10007;</span>
      <div>
        <div class="text-sm font-bold">${s.sector}</div>
        <div class="text-xs text-slate-500">${s.detail}</div>
      </div>
    </div>
  `).join("");

  // Survived sectors
  survivedEl.innerHTML = crisis.survived.map(s => `
    <div class="flex items-start gap-3 p-3 bg-brand-green-light rounded-xl">
      <span class="w-5 h-5 bg-brand-green text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">&#10003;</span>
      <div>
        <div class="text-sm font-bold">${s.sector}</div>
        <div class="text-xs text-slate-500">${s.detail}</div>
      </div>
    </div>
  `).join("");

  // Playbook
  playbookEl.innerHTML = crisis.playbook.map((p, i) => `
    <div class="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
      <span class="w-7 h-7 bg-brand-green text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">${i + 1}</span>
      <div>
        <div class="text-sm font-bold mb-1">${p.title}</div>
        <div class="text-xs text-slate-500 leading-relaxed">${p.tip}</div>
      </div>
    </div>
  `).join("");

  // Charts
  renderCrisisCharts(year);

  // Show
  detailEl.classList.remove("hidden");
  detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Event listeners
if (selectorEl) {
  selectorEl.addEventListener("click", (e) => {
    const card = e.target.closest("[data-crisis]");
    if (card) renderCrisis(card.dataset.crisis);
  });
}
