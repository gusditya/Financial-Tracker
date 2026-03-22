import { initApp } from "../core/app-init.js";
import { initAnimations } from "../animations.js";
import Chart from "chart.js/auto";

initApp({ activePage: "investasi-compare", basePath: "../../", pagePath: "" });
initAnimations();

/* ===== PRODUCT DATA ===== */
const products = [
  {
    id: "deposito",
    name: "Deposito",
    icon: "🏦",
    returnRange: "3–5%",
    risk: "Sangat Rendah",
    riskLevel: 1,
    liquidity: "Menengah",
    liquidityLevel: 3,
    minModal: "Rp 1 Juta",
    cocokUntuk: "Konservatif, Dana Darurat",
    returnScore: 2,
    stabilityScore: 5,
    accessScore: 3,
    growthScore: 1,
    diversityScore: 1,
    description: "Simpanan berjangka di bank dengan bunga tetap dan jaminan LPS hingga Rp 2 miliar.",
    kelebihan: [
      "Bunga lebih tinggi dari tabungan biasa (3-5% p.a.)",
      "Dijamin LPS hingga Rp 2 miliar — sangat aman",
      "Return tetap dan predictable, tidak terpengaruh pasar",
      "Cocok untuk 'parkir uang' jangka pendek-menengah",
      "Tersedia di semua bank, mudah diakses",
    ],
    risiko: [
      "Return di bawah inflasi — daya beli tetap menurun",
      "Dana terkunci selama tenor (1-12 bulan), ada penalti jika cairkan dini",
      "Pajak bunga 20% (final) — return efektif semakin kecil",
      "Tidak ada potensi capital gain seperti saham atau properti",
      "Suku bunga bisa turun saat BI Rate diturunkan",
    ],
    tips: "Gunakan deposito untuk dana darurat cadangan atau dana yang akan dipakai dalam 3-12 bulan. Jangan jadikan instrumen utama untuk pertumbuhan kekayaan jangka panjang.",
  },
  {
    id: "rdpu",
    name: "Reksadana Pasar Uang",
    icon: "💵",
    returnRange: "4–6%",
    risk: "Rendah",
    riskLevel: 1,
    liquidity: "Tinggi",
    liquidityLevel: 5,
    minModal: "Rp 10 Ribu",
    cocokUntuk: "Pemula, Dana Darurat",
    returnScore: 2,
    stabilityScore: 5,
    accessScore: 5,
    growthScore: 2,
    diversityScore: 2,
    description: "Reksadana yang menginvestasikan dana ke instrumen pasar uang (deposito, SBI, obligasi <1 tahun).",
    kelebihan: [
      "Modal sangat kecil (mulai Rp 10.000) — ramah pemula",
      "Likuiditas tinggi — bisa dicairkan H+1 hari kerja",
      "Return lebih tinggi dari tabungan biasa (4-6% p.a.)",
      "Keuntungan TIDAK dikenakan pajak (saat ini)",
      "Diversifikasi otomatis — dikelola Manajer Investasi profesional",
      "Risiko sangat rendah, hampir tidak pernah rugi",
    ],
    risiko: [
      "Return terbatas, masih bisa di bawah inflasi di tahun tertentu",
      "Tidak dijamin LPS (bukan simpanan bank)",
      "Return tidak tetap — berfluktuasi meski stabil",
      "Ada biaya manajemen (management fee) yang dipotong otomatis",
      "Pencairan H+1, tidak instan seperti ATM",
    ],
    tips: "RDPU adalah alternatif terbaik untuk tabungan dan dana darurat. Return lebih tinggi dari deposito, bebas pajak, dan sangat likuid. Ideal untuk pemula yang baru mulai investasi.",
  },
  {
    id: "rd-campuran",
    name: "Reksadana Campuran",
    icon: "⚖️",
    returnRange: "7–12%",
    risk: "Sedang",
    riskLevel: 3,
    liquidity: "Tinggi",
    liquidityLevel: 4,
    minModal: "Rp 10 Ribu",
    cocokUntuk: "Moderate, Menengah",
    returnScore: 4,
    stabilityScore: 3,
    accessScore: 5,
    growthScore: 3,
    diversityScore: 4,
    description: "Reksadana yang mengalokasikan dana ke campuran saham, obligasi, dan pasar uang secara fleksibel.",
    kelebihan: [
      "Balance antara pertumbuhan dan stabilitas",
      "Return lebih tinggi dari RDPU/obligasi (7-12% p.a.)",
      "Diversifikasi multi-aset otomatis oleh MI",
      "Modal kecil (mulai Rp 10.000), bebas pajak keuntungan",
      "Cocok untuk tujuan jangka menengah (3-5 tahun)",
    ],
    risiko: [
      "Nilai bisa turun saat pasar saham koreksi",
      "Return tidak dijamin — bisa negatif di tahun buruk",
      "Tergantung skill Manajer Investasi dalam alokasi aset",
      "Tidak bisa memilih saham/obligasi yang dibeli",
      "Biaya manajemen lebih tinggi dari RDPU",
    ],
    tips: "Pilih RD Campuran jika Anda ingin return lebih tinggi dari RDPU tapi tidak siap volatilitas penuh saham. Ideal untuk tujuan 3-5 tahun seperti DP rumah atau dana pendidikan.",
  },
  {
    id: "rd-saham",
    name: "Reksadana Saham",
    icon: "📈",
    returnRange: "10–18%",
    risk: "Tinggi",
    riskLevel: 4,
    liquidity: "Tinggi",
    liquidityLevel: 4,
    minModal: "Rp 10 Ribu",
    cocokUntuk: "Agresif, Jangka Panjang",
    returnScore: 5,
    stabilityScore: 2,
    accessScore: 5,
    growthScore: 5,
    diversityScore: 4,
    description: "Reksadana yang menginvestasikan minimal 80% dana ke saham, dikelola manajer investasi profesional.",
    kelebihan: [
      "Potensi return tertinggi di antara reksadana (10-18% p.a.)",
      "Diversifikasi saham otomatis — tidak perlu pilih saham sendiri",
      "Modal sangat kecil (Rp 10.000), cocok untuk DCA bulanan",
      "Bebas pajak keuntungan & dividen (untuk reksadana)",
      "Dikelola profesional dengan riset mendalam",
    ],
    risiko: [
      "Volatilitas tinggi — nilai bisa turun 20-30% dalam setahun",
      "Butuh horizon investasi panjang (minimal 5 tahun)",
      "Psikologis berat saat pasar turun drastis (panic selling)",
      "Return tidak dijamin dan tergantung kondisi pasar",
      "Biaya manajemen relatif tinggi (1-2% p.a.)",
    ],
    tips: "Reksadana saham ideal untuk tujuan jangka panjang (5-20 tahun). Gunakan strategi DCA (investasi rutin bulanan) untuk mengurangi risiko timing. Jangan investasikan uang yang Anda butuhkan dalam 1-3 tahun.",
  },
  {
    id: "saham",
    name: "Saham Individual",
    icon: "🏢",
    returnRange: "Bervariasi",
    risk: "Tinggi",
    riskLevel: 5,
    liquidity: "Tinggi",
    liquidityLevel: 5,
    minModal: "Rp 100 Ribu",
    cocokUntuk: "Berpengalaman, Aktif",
    returnScore: 5,
    stabilityScore: 1,
    accessScore: 4,
    growthScore: 5,
    diversityScore: 3,
    description: "Membeli langsung saham perusahaan yang terdaftar di Bursa Efek Indonesia (BEI). Full control tapi high risk.",
    kelebihan: [
      "Potensi return sangat tinggi (multibagger — 100%+ dalam tahun tertentu)",
      "Kontrol penuh — Anda pilih sendiri perusahaan yang dibeli",
      "Pendapatan ganda: capital gain + dividen",
      "Sangat likuid — bisa jual kapan saja saat bursa buka",
      "Bisa menjadi pemilik sebagian perusahaan besar Indonesia",
    ],
    risiko: [
      "Risiko kerugian besar — saham bisa turun 50%+ bahkan menjadi tidak berharga",
      "Butuh pengetahuan analisis fundamental dan teknikal yang kuat",
      "Emosi dan bias psikologis sering menghalangi keputusan rasional",
      "Waktu dan usaha signifikan untuk riset perusahaan",
      "Pajak jual 0.1% dari nilai transaksi (final)",
      "Banyak saham 'gorengan' yang bisa menjebak pemula",
    ],
    tips: "Mulai dengan saham blue chip (BBCA, BBRI, TLKM, UNVR) yang relatif lebih stabil. Jangan investasikan >10% portofolio ke saham individual jika Anda pemula. Lakukan riset fundamental sebelum membeli.",
  },
  {
    id: "obligasi",
    name: "Obligasi / SBN",
    icon: "📜",
    returnRange: "5–7%",
    risk: "Rendah",
    riskLevel: 1,
    liquidity: "Menengah",
    liquidityLevel: 3,
    minModal: "Rp 1 Juta",
    cocokUntuk: "Konservatif, Pendapatan Tetap",
    returnScore: 3,
    stabilityScore: 4,
    accessScore: 3,
    growthScore: 2,
    diversityScore: 2,
    description: "Surat utang yang diterbitkan pemerintah (ORI, SBR, ST) atau korporasi. Memberikan kupon/bunga berkala.",
    kelebihan: [
      "Dijamin negara (untuk SBN) — sangat aman",
      "Kupon/bunga tetap dan predictable (5-7% p.a.)",
      "Lebih tinggi dari deposito, dengan keamanan setara",
      "Berkontribusi pada pembangunan Indonesia",
      "Bisa diperdagangkan di pasar sekunder (untuk beberapa jenis)",
      "Pajak kupon hanya 10% (vs deposito 20%)",
    ],
    risiko: [
      "Likuiditas terbatas — sebagian seri tidak bisa dijual sebelum jatuh tempo",
      "Harga obligasi turun saat suku bunga naik (interest rate risk)",
      "Tenor panjang (2-3 tahun) — dana terkunci",
      "Return real bisa di bawah inflasi di tahun-tahun tertentu",
      "Obligasi korporasi punya risiko gagal bayar (default risk)",
    ],
    tips: "SBN (ORI, SBR, Sukuk Tabungan) adalah instrumen 'almost risk-free' terbaik di Indonesia. Cocok untuk investor konservatif yang menginginkan pendapatan tetap di atas deposito.",
  },
  {
    id: "emas",
    name: "Emas",
    icon: "🪙",
    returnRange: "5–15%",
    risk: "Sedang",
    riskLevel: 2,
    liquidity: "Menengah",
    liquidityLevel: 3,
    minModal: "Rp 50 Ribu",
    cocokUntuk: "Hedging Inflasi, Diversifikasi",
    returnScore: 3,
    stabilityScore: 3,
    accessScore: 4,
    growthScore: 3,
    diversityScore: 2,
    description: "Investasi logam mulia (emas batangan, emas digital, atau perhiasan) sebagai perlindungan nilai terhadap inflasi.",
    kelebihan: [
      "Lindung nilai (hedge) terbaik terhadap inflasi dan ketidakstabilan ekonomi",
      "Aset safe haven — cenderung naik saat krisis",
      "Bisa dimulai dari nominal kecil (emas digital mulai Rp 50K)",
      "Likuid — mudah dijual di toko emas atau platform digital",
      "Tidak ada pajak capital gain untuk emas batangan <100 gram",
      "Nilainya universal — diakui di seluruh dunia",
    ],
    risiko: [
      "Tidak menghasilkan passive income (tidak ada dividen/kupon)",
      "Harga bisa volatile dalam jangka pendek (turun 10-20%)",
      "Spread jual-beli bisa 3-5% (selisih harga beli dan jual)",
      "Emas fisik butuh penyimpanan aman dan ada biaya safekeeping",
      "Return jangka panjang lebih rendah dari saham",
      "Harga sangat dipengaruhi sentimen global (USD, geopolitik)",
    ],
    tips: "Alokasikan 5-15% portofolio ke emas sebagai diversifikasi dan hedge inflasi. Emas digital (Pegadaian Digital, Pluang, Treasury) lebih praktis dari emas fisik.",
  },
  {
    id: "properti",
    name: "Properti",
    icon: "🏠",
    returnRange: "8–15%",
    risk: "Sedang-Tinggi",
    riskLevel: 3,
    liquidity: "Rendah",
    liquidityLevel: 1,
    minModal: "Rp 50 Juta+",
    cocokUntuk: "Jangka Panjang, Passive Income",
    returnScore: 4,
    stabilityScore: 3,
    accessScore: 1,
    growthScore: 4,
    diversityScore: 2,
    description: "Investasi di aset fisik (rumah, apartemen, ruko, tanah) untuk disewakan atau dijual kembali.",
    kelebihan: [
      "Dual income: capital gain (kenaikan harga) + passive income (sewa)",
      "Aset tangible — bisa dilihat, ditinggali, digunakan",
      "Harga cenderung naik jangka panjang (mengikuti inflasi)",
      "Leverage: bisa dibeli dengan KPR (modal 10-30% DP)",
      "Passive income dari sewa bisa menutupi cicilan KPR",
      "Aset bisa diwariskan ke generasi berikutnya",
    ],
    risiko: [
      "Modal sangat besar — minimal DP puluhan juta",
      "Tidak likuid — butuh minggu/bulan untuk menjual",
      "Biaya perawatan, pajak PBB, dan asuransi properti",
      "Risiko penyewa bermasalah (tidak bayar, merusak properti)",
      "Lokasi salah = harga tidak naik atau sulit disewakan",
      "Regulasi bisa berubah (pajak properti, izin bangunan)",
      "PPh final 2.5% saat menjual properti",
    ],
    tips: "Properti cocok untuk jangka sangat panjang (10+ tahun). Lokasi adalah segalanya — pilih area dengan pertumbuhan tinggi (dekat transportasi publik, pusat bisnis, kampus). Pastikan nilai sewa menutupi cicilan KPR.",
  },
  {
    id: "kripto",
    name: "Cryptocurrency",
    icon: "₿",
    returnRange: "??%",
    risk: "Sangat Tinggi",
    riskLevel: 5,
    liquidity: "Tinggi",
    liquidityLevel: 5,
    minModal: "Rp 10 Ribu",
    cocokUntuk: "Spekulatif, Risk-Taker",
    returnScore: 5,
    stabilityScore: 1,
    accessScore: 5,
    growthScore: 5,
    diversityScore: 1,
    description: "Aset digital berbasis blockchain seperti Bitcoin, Ethereum, dsb. Sangat volatile dengan potensi gain dan loss yang ekstrem.",
    kelebihan: [
      "Potensi return sangat tinggi (Bitcoin: +1000% dalam 5 tahun tertentu)",
      "Modal kecil — bisa mulai dari Rp 10.000",
      "Trading 24/7 — tidak terbatas jam bursa",
      "Teknologi blockchain memiliki potensi masa depan yang besar",
      "Likuid tinggi untuk koin major (Bitcoin, Ethereum)",
    ],
    risiko: [
      "Volatilitas EKSTREM — bisa turun 50-80% dalam hitungan bulan",
      "Banyak proyek scam, rug pull, dan pump-and-dump",
      "Belum diregulasi sekuat pasar modal (masih dalam pengembangan di Indonesia)",
      "Tidak ada underlying value yang jelas untuk sebagian besar koin",
      "Risiko kehilangan akses (lupa password, platform bangkrut)",
      "Pajak 0.1% PPN + 0.1% PPh per transaksi",
      "Psikologis sangat berat — FOMO dan panic selling umum terjadi",
    ],
    tips: "JANGAN alokasikan lebih dari 5% portofolio ke kripto. Hanya investasikan uang yang siap Anda kehilangan 100%. Fokus pada Bitcoin dan Ethereum jika pemula. Hindari altcoin tidak jelas.",
  },
];

/* ===== RISK COLORS ===== */
const riskColors = {
  "Sangat Rendah": { bg: "bg-emerald-100", text: "text-emerald-700" },
  "Rendah": { bg: "bg-green-100", text: "text-green-700" },
  "Sedang": { bg: "bg-amber-100", text: "text-amber-700" },
  "Sedang-Tinggi": { bg: "bg-orange-100", text: "text-orange-700" },
  "Tinggi": { bg: "bg-red-100", text: "text-red-700" },
  "Sangat Tinggi": { bg: "bg-red-200", text: "text-red-800" },
};

/* ===== RENDER TABS ===== */
function renderTabs() {
  const tabsWrap = document.getElementById("inv-tabs");
  products.forEach((p) => {
    const btn = document.createElement("button");
    btn.className = "inv-tab px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-slate-200 hover:border-brand-green hover:text-brand-green";
    btn.dataset.id = p.id;
    btn.innerHTML = `${p.icon} ${p.name}`;
    btn.addEventListener("click", () => selectProduct(p.id));
    tabsWrap.appendChild(btn);
  });
}

/* ===== RENDER TABLE ===== */
function renderTable() {
  const tbody = document.getElementById("inv-table-body");
  tbody.innerHTML = products.map((p) => {
    const rc = riskColors[p.risk] || { bg: "bg-slate-100", text: "text-slate-700" };
    return `
      <tr class="inv-row cursor-pointer hover:bg-emerald-50/50 transition-colors" data-id="${p.id}">
        <td class="px-6 py-4 font-bold text-brand-black">
          <span class="mr-2">${p.icon}</span>${p.name}
        </td>
        <td class="px-6 py-4 text-center font-semibold text-brand-green">${p.returnRange} p.a.</td>
        <td class="px-6 py-4 text-center">
          <span class="px-3 py-1 rounded-full text-xs font-bold ${rc.bg} ${rc.text}">${p.risk}</span>
        </td>
        <td class="px-6 py-4 text-center text-sm">${p.liquidity}</td>
        <td class="px-6 py-4 text-center text-sm">${p.minModal}</td>
        <td class="px-6 py-4 text-center text-xs text-slate-500">${p.cocokUntuk}</td>
      </tr>`;
  }).join("");

  // Click on row
  document.querySelectorAll(".inv-row").forEach((row) => {
    row.addEventListener("click", () => selectProduct(row.dataset.id));
  });
}

/* ===== RADAR CHART ===== */
let radarChart = null;

function renderRadar(product) {
  const section = document.getElementById("inv-radar-section");
  section.classList.remove("hidden");
  const ctx = document.getElementById("inv-radar-chart").getContext("2d");
  if (radarChart) radarChart.destroy();

  radarChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Return", "Stabilitas", "Aksesibilitas", "Pertumbuhan", "Diversifikasi"],
      datasets: [{
        label: product.name,
        data: [product.returnScore, product.stabilityScore, product.accessScore, product.growthScore, product.diversityScore],
        backgroundColor: "rgba(56,142,60,0.15)",
        borderColor: "#388E3C",
        borderWidth: 2,
        pointBackgroundColor: "#388E3C",
        pointRadius: 5,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: { beginAtZero: true, max: 5, ticks: { stepSize: 1, display: false }, grid: { color: "#e2e8f0" }, angleLines: { color: "#e2e8f0" } },
      },
      plugins: { legend: { display: false } },
    },
  });
}

/* ===== SELECT PRODUCT ===== */
function selectProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  // Update tabs
  document.querySelectorAll(".inv-tab").forEach((t) => {
    t.classList.toggle("bg-brand-green", t.dataset.id === id);
    t.classList.toggle("text-white", t.dataset.id === id);
    t.classList.toggle("border-brand-green", t.dataset.id === id);
  });

  // Update row highlights
  document.querySelectorAll(".inv-row").forEach((r) => {
    r.classList.toggle("bg-emerald-50", r.dataset.id === id);
  });

  const rc = riskColors[product.risk] || { bg: "bg-slate-100", text: "text-slate-700" };

  // Render detail
  const content = document.getElementById("inv-detail-content");
  content.innerHTML = `
    <div class="animate-fade-in-up">
      <div class="flex items-center gap-4 mb-8">
        <div class="w-16 h-16 bg-brand-green-light rounded-2xl flex items-center justify-center text-3xl">${product.icon}</div>
        <div>
          <h2 class="font-serif text-3xl font-bold">${product.name}</h2>
          <p class="text-sm text-slate-500">${product.description}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div class="bg-slate-50 rounded-xl p-4 text-center">
          <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Return</div>
          <div class="font-bold text-brand-green">${product.returnRange} p.a.</div>
        </div>
        <div class="bg-slate-50 rounded-xl p-4 text-center">
          <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Risiko</div>
          <div class="font-bold"><span class="px-2 py-0.5 rounded-full text-xs ${rc.bg} ${rc.text}">${product.risk}</span></div>
        </div>
        <div class="bg-slate-50 rounded-xl p-4 text-center">
          <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Likuiditas</div>
          <div class="font-bold text-brand-black">${product.liquidity}</div>
        </div>
        <div class="bg-slate-50 rounded-xl p-4 text-center">
          <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Modal Minimal</div>
          <div class="font-bold text-brand-black">${product.minModal}</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <!-- Kelebihan -->
        <div class="harbor-card-flat p-6 border border-emerald-100">
          <h3 class="font-serif text-lg font-bold mb-4 text-emerald-700 flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            Kelebihan
          </h3>
          <ul class="space-y-3">
            ${product.kelebihan.map((k) => `<li class="flex items-start gap-2 text-sm text-slate-600"><span class="text-emerald-500 mt-0.5">✓</span>${k}</li>`).join("")}
          </ul>
        </div>
        <!-- Risiko -->
        <div class="harbor-card-flat p-6 border border-red-100">
          <h3 class="font-serif text-lg font-bold mb-4 text-red-600 flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
            Risiko yang Harus Diketahui
          </h3>
          <ul class="space-y-3">
            ${product.risiko.map((r) => `<li class="flex items-start gap-2 text-sm text-slate-600"><span class="text-red-400 mt-0.5">⚠</span>${r}</li>`).join("")}
          </ul>
        </div>
      </div>

      <!-- Tips -->
      <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
        <h3 class="font-bold text-emerald-800 mb-2 flex items-center gap-2">
          <span>💡</span> Tips Praktis
        </h3>
        <p class="text-sm text-emerald-700 leading-relaxed">${product.tips}</p>
      </div>
    </div>`;

  // Radar chart
  renderRadar(product);

  // Scroll to detail
  document.getElementById("inv-detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderTabs();
  renderTable();
});
