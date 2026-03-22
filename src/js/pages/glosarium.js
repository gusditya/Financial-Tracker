/* ===== glosarium.js — Kamus/Glosarium Finansial Searchable ===== */
import { initApp } from "../core/app-init.js";
initApp({ activePage: "glosarium", basePath: "../../", pagePath: "" });

/* ===== DATA — 35 istilah finansial ===== */
const glossaryData = [
  { term: "Inflasi", category: "Makroekonomi", definition: "Kenaikan harga barang dan jasa secara umum dan berkelanjutan dalam jangka waktu tertentu, yang menyebabkan daya beli uang menurun.", example: "Rata-rata inflasi Indonesia 2026 sekitar 2.87% — artinya harga barang naik rata-rata 2.87% per tahun." },
  { term: "Deflasi", category: "Makroekonomi", definition: "Kebalikan inflasi — penurunan harga barang dan jasa secara umum. Deflasi berkepanjangan bisa memicu spiral ekonomi negatif.", example: "Jepang mengalami deflasi selama 'Lost Decade' (1991–2001) yang menyebabkan stagnasi ekonomi." },
  { term: "PDB (Produk Domestik Bruto)", category: "Makroekonomi", definition: "Total nilai barang dan jasa akhir yang diproduksi di suatu negara dalam periode tertentu. Rumus: PDB = C + I + G + (X−M).", example: "PDB Indonesia 2025 mencapai ~USD 1.4 triliun, menjadikannya ekonomi terbesar ke-16 dunia." },
  { term: "Suku Bunga Acuan (BI Rate)", category: "Makroekonomi", definition: "Tingkat suku bunga yang ditetapkan Bank Indonesia sebagai referensi bagi bank-bank dalam menentukan suku bunga simpanan dan pinjaman.", example: "BI7DRR saat ini 5.75% — ketika naik, bunga kredit dan deposito ikut naik." },
  { term: "Resesi", category: "Makroekonomi", definition: "Penurunan aktivitas ekonomi yang signifikan, ditandai dengan PDB negatif selama minimal 2 kuartal berturut-turut.", example: "Indonesia mengalami resesi pada 2020 akibat pandemic COVID-19 dengan PDB -2.07%." },
  { term: "Neraca Perdagangan", category: "Makroekonomi", definition: "Selisih antara nilai ekspor dan impor suatu negara. Surplus jika ekspor > impor, defisit jika sebaliknya.", example: "Indonesia mencatat surplus perdagangan 40+ bulan berturut-turut sejak 2020." },
  { term: "APBN", category: "Makroekonomi", definition: "Anggaran Pendapatan dan Belanja Negara — rencana keuangan tahunan pemerintah yang berisi estimasi penerimaan dan pengeluaran negara.", example: "APBN 2026 menargetkan pendapatan negara Rp 2.996 triliun dengan belanja Rp 3.621 triliun." },
  { term: "Compound Interest", category: "Investasi", definition: "Bunga berbunga — keuntungan investasi yang diinvestasikan kembali sehingga menghasilkan keuntungan tambahan secara eksponensial.", example: "Rp 500K/bulan dengan return 10%/tahun menjadi Rp 380 juta dalam 20 tahun (modal hanya Rp 120 juta)." },
  { term: "Saham", category: "Investasi", definition: "Bukti kepemilikan atas sebagian perusahaan. Pemegang saham berhak atas dividen dan capital gain dari kenaikan harga saham.", example: "Saham BBCA (Bank BCA) naik lebih dari 1000% dalam 10 tahun terakhir." },
  { term: "Obligasi / Surat Utang", category: "Investasi", definition: "Surat utang yang diterbitkan pemerintah atau perusahaan. Investor meminjamkan uang dan menerima bunga (kupon) berkala.", example: "ORI (Obligasi Ritel Indonesia) menawarkan kupon 6-7% per tahun dengan jaminan negara." },
  { term: "Reksadana", category: "Investasi", definition: "Wadah investasi kolektif di mana dana dari banyak investor dikelola oleh Manajer Investasi ke berbagai instrumen (saham, obligasi, pasar uang).", example: "Dengan Rp 10.000 saja Anda sudah bisa mulai investasi reksadana via Bibit atau Bareksa." },
  { term: "Deposito", category: "Perbankan", definition: "Simpanan berjangka di bank dengan bunga lebih tinggi dari tabungan biasa, namun dana tidak bisa ditarik sebelum jatuh tempo tanpa penalti.", example: "Deposito 12 bulan di bank besar biasanya memberikan bunga 4-5% per tahun." },
  { term: "Diversifikasi", category: "Investasi", definition: "Strategi menyebar investasi ke berbagai instrumen/sektor untuk mengurangi risiko. 'Jangan taruh semua telur dalam satu keranjang.'", example: "Portofolio yang terdiversifikasi: 30% saham, 30% obligasi, 20% RDPU, 10% emas, 10% deposito." },
  { term: "Dollar Cost Averaging (DCA)", category: "Investasi", definition: "Teknik investasi rutin dengan jumlah tetap setiap periode, tanpa memperhatikan harga pasar. Meratakan biaya pembelian.", example: "Investasi Rp 500K/bulan ke IHSG secara konsisten selama 10 tahun — beli di harga tinggi maupun rendah." },
  { term: "Dana Darurat", category: "Perencanaan", definition: "Sejumlah uang yang disisihkan khusus untuk keadaan tidak terduga (sakit, PHK, darurat). Idealnya 3-12 bulan pengeluaran.", example: "Pengeluaran Rp 5 juta/bulan → dana darurat ideal Rp 15-30 juta (lajang) atau Rp 45-60 juta (berkeluarga)." },
  { term: "Likuiditas", category: "Perbankan", definition: "Kemudahan suatu aset diubah menjadi uang tunai tanpa kehilangan nilai signifikan. Semakin mudah dicairkan, semakin likuid.", example: "Tabungan sangat likuid (tarik ATM kapan saja), properti tidak likuid (butuh waktu berminggu/bulan untuk dijual)." },
  { term: "Return", category: "Investasi", definition: "Keuntungan atau imbal hasil dari suatu investasi, biasanya dinyatakan dalam persentase per tahun (p.a.).", example: "Saham rata-rata memberikan return 10-15% p.a., sedangkan deposito hanya 4-5% p.a." },
  { term: "Portofolio", category: "Investasi", definition: "Kumpulan seluruh aset investasi yang dimiliki seseorang, termasuk saham, obligasi, reksadana, properti, emas, dll.", example: "Investor agresif biasanya memiliki portofolio dengan 70% saham dan 30% obligasi." },
  { term: "Capital Gain", category: "Investasi", definition: "Keuntungan yang diperoleh dari selisih harga jual dan harga beli suatu aset (saham, properti, emas).", example: "Beli saham di harga Rp 1.000, jual di Rp 1.500 → capital gain Rp 500/lembar (50%)." },
  { term: "Dividen", category: "Investasi", definition: "Pembagian keuntungan perusahaan kepada pemegang saham, biasanya dibayarkan secara berkala (tahunan atau kuartalan).", example: "BBCA membagikan dividen ~Rp 250/lembar di 2025, atau ~2.5% dari harga saham (dividend yield)." },
  { term: "PPh (Pajak Penghasilan)", category: "Pajak", definition: "Pajak yang dikenakan atas penghasilan orang pribadi atau badan. Indonesia menerapkan tarif progresif 5-35%.", example: "Penghasilan Rp 60 juta pertama dikenai pajak 5%, di atas itu hingga Rp 250 juta dikenai 15%." },
  { term: "PTKP", category: "Pajak", definition: "Penghasilan Tidak Kena Pajak — batas penghasilan yang bebas dari PPh. Untuk WP lajang: Rp 54 juta/tahun (Rp 4.5 juta/bulan).", example: "Jika gaji Anda Rp 6 juta/bulan (Rp 72 juta/tahun), maka yang kena pajak hanya Rp 72 jt – Rp 54 jt = Rp 18 juta." },
  { term: "LPS (Lembaga Penjamin Simpanan)", category: "Perbankan", definition: "Lembaga yang menjamin simpanan nasabah di bank. Simpanan dijamin hingga Rp 2 miliar per nasabah per bank.", example: "Jika bank bangkrut, LPS akan mengganti simpanan Anda hingga maksimal Rp 2 miliar." },
  { term: "OJK", category: "Perbankan", definition: "Otoritas Jasa Keuangan — lembaga pengawas sektor jasa keuangan Indonesia (perbankan, pasar modal, asuransi, fintech).", example: "Sebelum investasi, pastikan platform terdaftar dan diawasi OJK untuk keamanan." },
  { term: "QRIS", category: "Fintech", definition: "Quick Response Code Indonesian Standard — sistem pembayaran digital nasional menggunakan QR code yang menyatukan semua e-wallet dan bank.", example: "Dengan 1 QR code QRIS, merchant bisa menerima pembayaran dari GoPay, OVO, DANA, ShopeePay, dan bank." },
  { term: "E-Wallet", category: "Fintech", definition: "Dompet digital untuk menyimpan saldo dan melakukan transaksi pembayaran elektronik. Contoh: GoPay, OVO, DANA, ShopeePay.", example: "Transaksi e-wallet di Indonesia mencapai Rp 472 triliun pada 2025, tumbuh 38% per tahun." },
  { term: "P2P Lending", category: "Fintech", definition: "Peer-to-Peer Lending — platform yang mempertemukan peminjam dan pemberi pinjaman secara langsung (tanpa bank). Risiko tinggi.", example: "Platform legal (terdaftar OJK): Investree, Modalku, Amartha — return bisa 10-18% tapi ada risiko gagal bayar." },
  { term: "Asuransi", category: "Perencanaan", definition: "Mekanisme perlindungan finansial di mana peserta membayar premi untuk mendapat pertanggungan atas risiko tertentu (sakit, kecelakaan, kematian).", example: "BPJS Kesehatan adalah asuransi kesehatan nasional dengan premi Rp 35-150K/bulan tergantung kelas." },
  { term: "Premi", category: "Perencanaan", definition: "Biaya yang harus dibayar peserta asuransi secara berkala (bulanan/tahunan) untuk mendapatkan pertanggungan.", example: "Premi asuransi jiwa murni (term life) bisa mulai dari Rp 200K/bulan untuk UP Rp 500 juta." },
  { term: "Margin", category: "Bisnis", definition: "Selisih antara harga jual dan biaya produksi, dinyatakan sebagai persentase dari harga jual. Mengukur profitabilitas.", example: "Harga jual Rp 50.000, biaya Rp 30.000 → margin = (50K-30K)/50K = 40%." },
  { term: "Cash Flow", category: "Bisnis", definition: "Arus kas — pergerakan uang masuk (pemasukan) dan keluar (pengeluaran) dalam suatu periode waktu. Kunci kesehatan bisnis.", example: "Cash flow positif: pemasukan Rp 20 juta, pengeluaran Rp 15 juta → surplus Rp 5 juta." },
  { term: "Break Even Point (BEP)", category: "Bisnis", definition: "Titik impas — kondisi di mana total pendapatan sama dengan total biaya. Di atas BEP = untung, di bawah BEP = rugi.", example: "Bisnis kue: FC Rp 5 juta, margin/kue Rp 10K → BEP = 5.000.000/10.000 = 500 kue harus terjual." },
  { term: "Ekonomi Syariah", category: "Makroekonomi", definition: "Sistem ekonomi yang berlandaskan prinsip Islam, melarang riba (bunga), gharar (ketidakpastian berlebihan), dan maisir (spekulasi/judi).", example: "Bank syariah menggunakan akad murabahah (jual-beli), mudharabah (bagi hasil), dan ijara (sewa)." },
  { term: "Sukuk", category: "Investasi", definition: "Surat berharga syariah (obligasi syariah) yang menggunakan prinsip bagi hasil, bukan bunga. Diterbitkan pemerintah maupun korporasi.", example: "Sukuk Tabungan (ST) pemerintah menawarkan return ~6-7% p.a. dengan prinsip syariah." },
  { term: "Elastisitas", category: "Mikroekonomi", definition: "Ukuran sensitivitas perubahan kuantitas terhadap perubahan harga. Elastis (E>1): sangat responsif, Inelastis (E<1): tidak responsif.", example: "Beras inelastis (harga naik, tetap dibeli). Tiket pesawat elastis (harga naik, banyak yang beralih ke kereta)." },
];

/* ===== CATEGORY COLORS ===== */
const catColors = {
  "Makroekonomi": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Mikroekonomi": { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
  "Investasi": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Perbankan": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  "Perencanaan": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Pajak": { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  "Fintech": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  "Bisnis": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
};

/* ===== RENDER ===== */
function renderCategories() {
  const categories = [...new Set(glossaryData.map(g => g.category))].sort();
  const wrap = document.getElementById("glos-categories");
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "glos-cat-btn px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    wrap.appendChild(btn);
  });
}

function renderCards(filtered) {
  const grid = document.getElementById("glos-grid");
  const empty = document.getElementById("glos-empty");
  document.getElementById("glos-count").textContent = `Menampilkan ${filtered.length} istilah`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  grid.innerHTML = filtered.map((g, i) => {
    const c = catColors[g.category] || { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200" };
    return `
      <div class="harbor-card p-6 flex flex-col animate-fade-in-up" style="animation-delay:${i * 40}ms">
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold px-3 py-1 rounded-full ${c.bg} ${c.text} ${c.border} border">${g.category}</span>
          <span class="text-slate-300 text-lg font-serif font-bold">${g.term.charAt(0)}</span>
        </div>
        <h3 class="font-serif text-lg font-bold text-brand-black mb-2">${g.term}</h3>
        <p class="text-sm text-slate-500 leading-relaxed flex-1 mb-4">${g.definition}</p>
        <div class="bg-slate-50 rounded-xl p-4 mt-auto">
          <div class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Contoh</div>
          <p class="text-xs text-slate-600 leading-relaxed">${g.example}</p>
        </div>
      </div>`;
  }).join("");
}

function filterAndRender() {
  const query = document.getElementById("glos-search").value.toLowerCase().trim();
  const activeCat = document.querySelector(".glos-cat-btn.active")?.dataset.cat || "all";

  let filtered = glossaryData;
  if (activeCat !== "all") {
    filtered = filtered.filter(g => g.category === activeCat);
  }
  if (query) {
    filtered = filtered.filter(g =>
      g.term.toLowerCase().includes(query) ||
      g.definition.toLowerCase().includes(query) ||
      g.category.toLowerCase().includes(query)
    );
  }
  // Sort alphabetically
  filtered.sort((a, b) => a.term.localeCompare(b.term, "id"));
  renderCards(filtered);
}

/* ===== INIT ===== */

  renderCategories();
  filterAndRender();

  // Search
  document.getElementById("glos-search").addEventListener("input", filterAndRender);

  // Category buttons
  document.getElementById("glos-categories").addEventListener("click", (e) => {
    const btn = e.target.closest(".glos-cat-btn");
    if (!btn) return;
    document.querySelectorAll(".glos-cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterAndRender();
  });

