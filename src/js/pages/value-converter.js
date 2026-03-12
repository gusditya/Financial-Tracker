/* ===== value-converter.js — The "Value" Converter (Validate) ===== */
import { initApp } from "../core/app-init.js";
import { formatIDR } from "../core/utils.js";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

initApp({ activePage: "value-converter", basePath: "../../", pagePath: "" });

/* =========================================
   CHART.JS SHARED STYLES
   ========================================= */
const chartFont = { family: "'Inter', sans-serif", size: 11 };
const gridColor = "rgba(148,163,184,0.12)";

/* =========================================
   INFLATION MULTIPLIER TABLE
   ========================================= */
const inflationMultiplier = {
  1970: 185.0,
  1975: 85.0,
  1980: 42.0,
  1985: 28.0,
  1990: 18.5,
  1995: 12.0,
  1998: 6.8,
  2000: 5.2,
  2005: 3.5,
  2008: 2.8,
  2010: 2.3,
  2015: 1.65,
  2020: 1.2,
};

/* =========================================
   WHAT COULD YOU BUY?
   ========================================= */
const priceData = {
  1970: { beras: 45, mie: 15, bensin: 25, kopi: 30, emas1g: 600 },
  1975: { beras: 100, mie: 35, bensin: 55, kopi: 60, emas1g: 1800 },
  1980: { beras: 200, mie: 75, bensin: 150, kopi: 125, emas1g: 6000 },
  1985: { beras: 350, mie: 150, bensin: 350, kopi: 250, emas1g: 12000 },
  1990: { beras: 500, mie: 200, bensin: 550, kopi: 400, emas1g: 18000 },
  1995: { beras: 800, mie: 400, bensin: 700, kopi: 600, emas1g: 25000 },
  1998: { beras: 3500, mie: 1000, bensin: 1000, kopi: 1500, emas1g: 45000 },
  2000: { beras: 2800, mie: 800, bensin: 1150, kopi: 1200, emas1g: 70000 },
  2005: { beras: 3500, mie: 1200, bensin: 4500, kopi: 2000, emas1g: 150000 },
  2008: { beras: 5000, mie: 1500, bensin: 6000, kopi: 3000, emas1g: 250000 },
  2010: { beras: 7000, mie: 1800, bensin: 4500, kopi: 4000, emas1g: 350000 },
  2015: { beras: 9500, mie: 2500, bensin: 7300, kopi: 5000, emas1g: 500000 },
  2020: { beras: 11000, mie: 2800, bensin: 7650, kopi: 6000, emas1g: 900000 },
};

const prices2026 = { beras: 15000, mie: 3500, bensin: 12500, kopi: 8000, emas1g: 1245000 };

const itemLabels = {
  beras: "Beras 1 kg",
  mie: "Mie Instan",
  bensin: "Bensin 1 L",
  kopi: "Kopi 1 gelas",
  emas1g: "Emas 1 gr",
};

const itemColors = {
  beras: { bg: "rgba(5,150,105,0.7)", border: "#059669" },
  mie: { bg: "rgba(245,158,11,0.7)", border: "#f59e0b" },
  bensin: { bg: "rgba(59,130,246,0.7)", border: "#3b82f6" },
  kopi: { bg: "rgba(168,85,247,0.7)", border: "#a855f7" },
  emas1g: { bg: "rgba(234,179,8,0.7)", border: "#eab308" },
};

/* =========================================
   DOM & LOGIC
   ========================================= */
const amountInput = document.getElementById("vc-amount");
const yearSelect = document.getElementById("vc-year");
const convertBtn = document.getElementById("vc-convert-btn");
const resultSection = document.getElementById("vc-result");

let itemsChart = null;
let erosionChart = null;

function calculateItems(amount, prices) {
  return Object.entries(prices).map(([key, price]) => {
    const qty = Math.floor(amount / price);
    return { key, label: itemLabels[key], qty, price };
  });
}

function renderCharts(amount, year) {
  const multiplier = inflationMultiplier[year] || 1;
  const equivalent2026 = Math.round(amount / multiplier);
  const oldPrices = priceData[year] || prices2026;
  const oldItems = calculateItems(amount, oldPrices);
  const newItems = calculateItems(equivalent2026, prices2026);

  // --- ITEMS COMPARISON GROUPED BAR ---
  const chartCtx = document.getElementById("chart-items-compare");
  if (itemsChart) itemsChart.destroy();

  const itemKeys = ["beras", "mie", "bensin", "kopi"];  // exclude emas (too different scale)
  const barLabels = itemKeys.map(k => itemLabels[k]);

  const oldQtys = itemKeys.map(k => {
    const item = oldItems.find(i => i.key === k);
    return item ? item.qty : 0;
  });
  const newQtys = itemKeys.map(k => {
    const item = newItems.find(i => i.key === k);
    return item ? item.qty : 0;
  });

  itemsChart = new Chart(chartCtx, {
    type: "bar",
    data: {
      labels: barLabels,
      datasets: [
        {
          label: `Bisa dibeli di ${year}`,
          data: oldQtys,
          backgroundColor: "rgba(5,150,105,0.7)",
          borderColor: "#059669",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "Bisa dibeli di 2026",
          data: newQtys,
          backgroundColor: "rgba(239,68,68,0.7)",
          borderColor: "#ef4444",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", labels: { font: chartFont, usePointStyle: true, pointStyle: "circle", padding: 16 } },
        tooltip: {
          backgroundColor: "rgba(15,23,42,0.9)",
          titleFont: { ...chartFont, weight: "bold" },
          bodyFont: chartFont,
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw.toLocaleString("id-ID")} unit`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: chartFont } },
        y: {
          grid: { color: gridColor },
          ticks: { font: chartFont },
          title: { display: true, text: "Jumlah yang bisa dibeli", font: { ...chartFont, weight: "bold" } },
        },
      },
    },
  });

  // --- EROSION TIMELINE LINE CHART ---
  const erosionCtx = document.getElementById("chart-erosion-timeline");
  if (erosionChart) erosionChart.destroy();

  const sortedYears = Object.keys(inflationMultiplier).map(Number).sort((a, b) => a - b);
  const erosionLabels = sortedYears.map(String);
  const erosionValues = sortedYears.map(y => {
    const m = inflationMultiplier[y];
    return parseFloat(((1 - 1 / m) * 100).toFixed(1));
  });

  // Find selected year index
  const selectedIdx = sortedYears.indexOf(year);

  erosionChart = new Chart(erosionCtx, {
    type: "line",
    data: {
      labels: erosionLabels,
      datasets: [
        {
          label: "Erosi Daya Beli (%)",
          data: erosionValues,
          borderColor: "#ef4444",
          backgroundColor: (ctx) => {
            const chart = ctx.chart;
            const { ctx: c, chartArea } = chart;
            if (!chartArea) return "rgba(239,68,68,0.1)";
            const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
            gradient.addColorStop(0, "rgba(239,68,68,0.3)");
            gradient.addColorStop(1, "rgba(239,68,68,0.02)");
            return gradient;
          },
          pointBackgroundColor: sortedYears.map(y => y === year ? "#ef4444" : "rgba(239,68,68,0.4)"),
          pointRadius: sortedYears.map(y => y === year ? 8 : 3),
          pointHoverRadius: 7,
          borderWidth: 2.5,
          tension: 0.35,
          fill: true,
        },
        {
          label: "Daya Beli Tersisa (%)",
          data: sortedYears.map(y => {
            const m = inflationMultiplier[y];
            return parseFloat((100 / m).toFixed(1));
          }),
          borderColor: "#059669",
          backgroundColor: "rgba(5,150,105,0.05)",
          pointBackgroundColor: sortedYears.map(y => y === year ? "#059669" : "rgba(5,150,105,0.4)"),
          pointRadius: sortedYears.map(y => y === year ? 8 : 3),
          pointHoverRadius: 7,
          borderWidth: 2.5,
          tension: 0.35,
          borderDash: [6, 3],
          fill: false,
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
              return yr === year ? "⭐ Tahun yang Anda pilih" : "";
            },
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}%`,
          },
        },
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: chartFont } },
        y: {
          min: 0,
          max: 100,
          grid: { color: gridColor },
          ticks: { font: chartFont, callback: v => v + "%" },
          title: { display: true, text: "Persentase (%)", font: { ...chartFont, weight: "bold" } },
        },
      },
    },
  });
}

function renderResult() {
  const amount = parseInt(amountInput.value) || 0;
  const year = parseInt(yearSelect.value);
  if (amount <= 0) return;

  const multiplier = inflationMultiplier[year] || 1;
  const equivalent2026 = Math.round(amount / multiplier);
  const erosionPct = ((1 - 1 / multiplier) * 100).toFixed(1);

  // Title
  document.getElementById("vc-result-title").textContent =
    `${formatIDR(amount)} di ${year}`;
  document.getElementById("vc-result-subtitle").textContent =
    `Setara dengan daya beli ${formatIDR(equivalent2026)} di tahun 2026. Kehilangan ${erosionPct}% nilainya.`;

  // Old year card
  document.getElementById("vc-old-year").textContent = year;
  document.getElementById("vc-old-value").textContent = formatIDR(amount);

  const oldPrices = priceData[year] || prices2026;
  const oldItems = calculateItems(amount, oldPrices);
  document.getElementById("vc-old-items").innerHTML = oldItems.map(item => `
    <div class="flex items-center justify-between p-3 bg-brand-green-light rounded-xl">
      <span class="text-sm text-slate-600">${item.label}</span>
      <span class="font-bold text-brand-green">${item.qty.toLocaleString("id-ID")}x</span>
    </div>
  `).join("");

  // New (2026) card
  document.getElementById("vc-new-value").textContent = formatIDR(equivalent2026);
  const newItems = calculateItems(equivalent2026, prices2026);
  document.getElementById("vc-new-items").innerHTML = newItems.map(item => `
    <div class="flex items-center justify-between p-3 bg-red-50 rounded-xl">
      <span class="text-sm text-slate-600">${item.label}</span>
      <span class="font-bold text-red-500">${item.qty.toLocaleString("id-ID")}x</span>
    </div>
  `).join("");

  // Erosion bar
  document.getElementById("vc-erosion-label").textContent = `${erosionPct}% daya beli hilang`;
  document.getElementById("vc-erosion-label").classList.toggle("text-red-500", parseFloat(erosionPct) > 50);
  document.getElementById("vc-erosion-label").classList.toggle("text-amber-600", parseFloat(erosionPct) <= 50);
  setTimeout(() => {
    document.getElementById("vc-erosion-bar").style.width = `${erosionPct}%`;
  }, 300);

  document.getElementById("vc-erosion-msg").textContent =
    `Jika Anda menyimpan ${formatIDR(amount)} di bawah bantal sejak ${year}, daya belinya di 2026 hanya setara ${formatIDR(equivalent2026)}. Sisa ${(100 - parseFloat(erosionPct)).toFixed(1)}% dari nilai aslinya.`;

  // Charts
  renderCharts(amount, year);

  // CTA
  const yearsElapsed = 2026 - year;
  const investReturn = Math.round(amount * Math.pow(1.1, yearsElapsed));
  document.getElementById("vc-cta-desc").textContent =
    `Jika ${formatIDR(amount)} itu diinvestasikan dengan return 10% per tahun sejak ${year}, nilainya di 2026 bisa mencapai ${formatIDR(investReturn)}. Itu ${Math.round(investReturn / equivalent2026)}x lipat dari didiamkan!`;

  // Show
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

if (convertBtn) convertBtn.addEventListener("click", renderResult);
