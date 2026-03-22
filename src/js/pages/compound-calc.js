/* ===== compound-calc.js — Kalkulator Compound Interest Interaktif ===== */
import { initApp } from "../core/app-init.js";
import Chart from "chart.js/auto";
initApp({ activePage: "compound-calc", basePath: "../../", pagePath: "" });

/* ===== HELPERS ===== */
function formatRp(n) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

function animateCountUp(el, target, duration = 1200) {
  const start = 0;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * eased;
    el.textContent = formatRp(current);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ===== CALCULATION ===== */
function calculateCompound(initial, monthly, rate, years) {
  const monthlyRate = rate / 100 / 12;
  const months = years * 12;
  const yearlyData = [];

  let balance = initial;
  let totalDeposited = initial;

  for (let m = 1; m <= months; m++) {
    balance = balance * (1 + monthlyRate) + monthly;
    totalDeposited += monthly;

    if (m % 12 === 0) {
      yearlyData.push({
        year: m / 12,
        balance: Math.round(balance),
        deposited: Math.round(totalDeposited),
        profit: Math.round(balance - totalDeposited),
      });
    }
  }

  // Handle case where months is not divisible by 12
  if (months % 12 !== 0) {
    yearlyData.push({
      year: years,
      balance: Math.round(balance),
      deposited: Math.round(totalDeposited),
      profit: Math.round(balance - totalDeposited),
    });
  }

  return {
    finalValue: Math.round(balance),
    totalDeposited: Math.round(totalDeposited),
    profit: Math.round(balance - totalDeposited),
    yearlyData,
  };
}

/* ===== CHART ===== */
let chartInstance = null;

function renderChart(yearlyData, years) {
  const ctx = document.getElementById("ci-chart").getContext("2d");
  if (chartInstance) chartInstance.destroy();

  const labels = yearlyData.map((d) => `Tahun ${d.year}`);
  const investData = yearlyData.map((d) => d.balance);
  const savingData = yearlyData.map((d) => d.deposited);

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Investasi (Compound Interest)",
          data: investData,
          borderColor: "#10b981",
          backgroundColor: "rgba(16,185,129,0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 5,
          pointBackgroundColor: "#10b981",
          borderWidth: 3,
        },
        {
          label: "Menabung Biasa (Tanpa Bunga)",
          data: savingData,
          borderColor: "#94a3b8",
          borderDash: [6, 4],
          tension: 0,
          fill: false,
          pointRadius: 3,
          pointBackgroundColor: "#94a3b8",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (ctx) {
              return ctx.dataset.label + ": " + formatRp(ctx.parsed.y);
            },
          },
        },
        legend: { position: "bottom" },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (v) =>
              v >= 1e9
                ? (v / 1e9).toFixed(1) + " M"
                : v >= 1e6
                ? (v / 1e6).toFixed(0) + " Jt"
                : v.toLocaleString("id-ID"),
          },
        },
      },
    },
  });
}

/* ===== RENDER RESULT ===== */
function renderResult(result, rate, years) {
  const section = document.getElementById("ci-result");
  section.classList.remove("hidden");
  section.scrollIntoView({ behavior: "smooth", block: "start" });

  // Title
  document.getElementById("ci-result-title").textContent =
    "Uang Anda Tumbuh " +
    (result.finalValue / result.totalDeposited).toFixed(1) +
    "x Lipat!";
  document.getElementById("ci-result-subtitle").textContent =
    `Dalam ${years} tahun, modal ${formatRp(result.totalDeposited)} menjadi ${formatRp(result.finalValue)} — keuntungan compound ${formatRp(result.profit)}.`;

  // Animated count-up
  animateCountUp(document.getElementById("ci-final-value"), result.finalValue);
  animateCountUp(
    document.getElementById("ci-total-modal"),
    result.totalDeposited
  );
  animateCountUp(document.getElementById("ci-profit"), result.profit);

  // Composition bar
  const modalPct = (result.totalDeposited / result.finalValue) * 100;
  const profitPct = (result.profit / result.finalValue) * 100;
  document.getElementById("ci-bar-modal").style.width = modalPct + "%";
  document.getElementById("ci-bar-profit").style.width = profitPct + "%";
  document.getElementById("ci-bar-modal-pct").textContent =
    modalPct.toFixed(1) + "% Modal";
  document.getElementById("ci-bar-profit-pct").textContent =
    profitPct.toFixed(1) + "% Keuntungan Bunga";

  // Growth chart
  renderChart(result.yearlyData, years);

  // Rule of 72
  const doublingYears = (72 / rate).toFixed(1);
  document.getElementById("ci-r72-rate").textContent = rate;
  document.getElementById("ci-r72-years").textContent = doublingYears;
  document.getElementById("ci-r72-msg").textContent =
    `Dengan return ${rate}% per tahun, investasi Anda akan berlipat ganda setiap ~${doublingYears} tahun.`;

  // Yearly table
  const tbody = document.getElementById("ci-table-body");
  tbody.innerHTML = result.yearlyData
    .map(
      (d) => `
    <tr>
      <td class="font-bold">${d.year}</td>
      <td>${formatRp(d.deposited)}</td>
      <td class="font-bold text-brand-green">${formatRp(d.balance)}</td>
      <td class="text-amber-600">${formatRp(d.profit)}</td>
    </tr>
  `
    )
    .join("");
}

/* ===== EVENT LISTENERS ===== */

  const btn = document.getElementById("ci-calc-btn");
  btn.addEventListener("click", () => {
    const initial = parseFloat(document.getElementById("ci-initial").value) || 0;
    const monthly = parseFloat(document.getElementById("ci-monthly").value) || 0;
    const rate = parseFloat(document.getElementById("ci-rate").value) || 0;
    const years = parseInt(document.getElementById("ci-years").value) || 0;

    if (rate <= 0 || years <= 0) {
      alert("Masukkan return tahunan dan jangka waktu yang valid.");
      return;
    }
    if (initial <= 0 && monthly <= 0) {
      alert("Masukkan modal awal atau kontribusi bulanan.");
      return;
    }

    const result = calculateCompound(initial, monthly, rate, years);
    renderResult(result, rate, years);
  });

