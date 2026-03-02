import '../css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initNavbar } from './navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  initNavbar();

  const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  const stocks = [
    { symbol: 'BBCA', name: 'Bank Central Asia', price: 10250, change: 1.25, trend: 'up', advice: 'Blue chip stabil untuk jangka panjang.' },
    { symbol: 'TLKM', name: 'Telkom Indonesia', price: 3820, change: -0.85, trend: 'down', advice: 'Sektor infrastruktur digital yang solid.' },
    { symbol: 'GOTO', name: 'GoTo Gojek Tokopedia', price: 68, change: 4.62, trend: 'up', advice: 'Volatilitas tinggi, perhatikan arus kas.' },
    { symbol: 'ASII', name: 'Astra International', price: 5175, change: 0.50, trend: 'up', advice: 'Diversifikasi bisnis otomotif & tambang.' },
    { symbol: 'UNVR', name: 'Unilever Indonesia', price: 2750, change: -1.10, trend: 'down', advice: 'Consumer goods yang sedang restrukturisasi.' },
    { symbol: 'BBNI', name: 'Bank Negara Indonesia', price: 5400, change: 0.95, trend: 'up', advice: 'Efisiensi operasional mendorong pertumbuhan.' },
    { symbol: 'AMRT', name: 'Sumber Alfaria Trijaya', price: 2890, change: 2.15, trend: 'up', advice: 'Ekspansi gerai yang sangat masif di 2025.' },
    { symbol: 'MDKA', name: 'Merdeka Copper Gold', price: 2450, change: -3.20, trend: 'down', advice: 'Dipengaruhi harga komoditas tambang global.' }
  ];

  const stockGrid = document.getElementById('stock-grid');
  if (stockGrid) {
    stocks.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'bg-white border border-black p-8 editorial-shadow transition-transform hover:-translate-y-2 group';
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (i % 3) * 100);
      card.innerHTML = `
        <div class="flex justify-between items-start mb-6">
          <div>
            <h4 class="font-bold text-xl group-hover:text-brand-green transition-colors">${s.symbol}</h4>
            <p class="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">${s.name}</p>
          </div>
          <span class="px-3 py-1 text-[10px] font-bold ${s.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'} uppercase tracking-tighter">
            ${s.trend === 'up' ? '▲' : '▼'} ${s.change}%
          </span>
        </div>
        <div class="mb-6 flex items-baseline gap-1">
          <span class="text-3xl font-serif font-bold">${formatIDR(s.price).replace('Rp', '').trim()}</span>
          <span class="text-xs text-slate-400 font-sans font-bold">IDR</span>
        </div>
        <div class="pt-4 border-t border-slate-100">
            <p class="text-xs text-slate-600 italic font-sans leading-relaxed">"${s.advice}"</p>
        </div>
      `;
      stockGrid.appendChild(card);
    });
  }
});
