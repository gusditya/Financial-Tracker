import { initApp } from "../core/app-init.js";
import { formatIDR } from "../core/utils.js";
import { initAnimations } from "../animations.js";

initApp({ activePage: "stocks", basePath: "../../", pagePath: "" });
initAnimations();

function renderStocks() {

  const stocks = [
    {
      symbol: "BBCA",
      name: "Bank Central Asia",
      price: 10250,
      change: 1.25,
      trend: "up",
      advice: "Blue chip stabil untuk jangka panjang.",
      color: "bg-blue-600"
    },
    {
      symbol: "TLKM",
      name: "Telkom Indonesia",
      price: 3820,
      change: -0.85,
      trend: "down",
      advice: "Sektor infrastruktur digital yang solid.",
      color: "bg-red-600"
    },
    {
      symbol: "GOTO",
      name: "GoTo Gojek Tokopedia",
      price: 68,
      change: 4.62,
      trend: "up",
      advice: "Volatilitas tinggi, perhatikan arus kas.",
      color: "bg-emerald-500"
    },
    {
      symbol: "ASII",
      name: "Astra International",
      price: 5175,
      change: 0.5,
      trend: "up",
      advice: "Diversifikasi bisnis otomotif & tambang.",
      color: "bg-slate-800"
    },
    {
      symbol: "UNVR",
      name: "Unilever Indonesia",
      price: 2750,
      change: -1.1,
      trend: "down",
      advice: "Consumer goods yang sedang restrukturisasi.",
      color: "bg-blue-400"
    },
    {
      symbol: "BBNI",
      name: "Bank Negara Indonesia",
      price: 5400,
      change: 0.95,
      trend: "up",
      advice: "Efisiensi operasional mendorong pertumbuhan.",
      color: "bg-orange-500"
    },
    {
      symbol: "AMRT",
      name: "Sumber Alfaria Trijaya",
      price: 2890,
      change: 2.15,
      trend: "up",
      advice: "Ekspansi gerai yang sangat masif di 2025.",
      color: "bg-red-500"
    },
    {
      symbol: "MDKA",
      name: "Merdeka Copper Gold",
      price: 2450,
      change: -3.2,
      trend: "down",
      advice: "Dipengaruhi harga komoditas tambang global.",
      color: "bg-yellow-600"
    },
  ];

  const stockGrid = document.getElementById("stock-grid");
  if (stockGrid) {
    stockGrid.innerHTML = ""; // Clear for re-render if needed
    stocks.forEach((s, i) => {
      const card = document.createElement("div");
      card.className =
        "harbor-card p-10 transition-transform hover:-translate-y-2 group bg-white border border-charcoal/5 rounded-[40px]";
      card.innerHTML = `
        <div class="flex justify-between items-start mb-10">
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center shadow-lg border-2 border-white/20">
                <span class="text-white font-bold text-xs tracking-tighter">${s.symbol.substring(0,2)}</span>
            </div>
            <div>
                <h4 class="font-bold text-2xl text-brand-black group-hover:text-brand-green transition-colors leading-none mb-1">${s.symbol}</h4>
                <p class="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">${s.name}</p>
            </div>
          </div>
          <span class="px-4 py-1.5 text-[10px] font-bold rounded-xl ${s.trend === "up" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-500 border border-red-100"} uppercase tracking-widest">
            ${s.trend === "up" ? "▲" : "▼"} ${Math.abs(s.change)}%
          </span>
        </div>
        <div class="mb-10 flex items-baseline gap-2">
          <span class="text-4xl font-serif font-bold text-brand-black tracking-tight">${formatIDR(s.price).replace("Rp", "").trim()}</span>
          <span class="text-xs text-slate-400 font-sans font-bold tracking-[0.2em] uppercase">IDR</span>
        </div>
        <div class="pt-8 border-t border-slate-50">
            <p class="text-xs text-slate-500 italic font-sans leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">"${s.advice}"</p>
        </div>
      `;
      stockGrid.appendChild(card);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderStocks);
} else {
  renderStocks();
}