/* ===== materi-mahasiswa.js — Detail materi untuk jalur Mahasiswa ===== */
import { initApp } from "../core/app-init.js";
initApp({ activePage: "mahasiswa", basePath: "../../", pagePath: "" });

/* ===== DATA MATERI ===== */
const materiData = [
  {
    id: 1,
    label: "Makro — Konsep 1",
    title: "Produk Domestik Bruto (PDB)",
    subtitle: "Indikator utama ukuran ekonomi suatu negara — cara menghitung, komponen, dan maknanya.",
    content: `
      <div class="materi-article">
        <h2>Definisi PDB</h2>
        <p><strong>Produk Domestik Bruto (PDB)</strong> atau Gross Domestic Product (GDP) adalah total nilai moneter dari seluruh barang dan jasa akhir yang diproduksi di dalam wilayah suatu negara dalam periode waktu tertentu (biasanya satu tahun atau satu kuartal).</p>

        <div class="materi-highlight">
          <h4>Rumus PDB – Pendekatan Pengeluaran</h4>
          <p class="text-2xl font-bold text-center my-4">PDB = C + I + G + (X − M)</p>
          <div class="materi-grid-2">
            <div class="materi-mini-card">
              <h5>C — Konsumsi Rumah Tangga</h5>
              <p>Pengeluaran rumah tangga untuk barang & jasa. Di Indonesia, konsumsi menyumbang <strong>~53%</strong> PDB.</p>
            </div>
            <div class="materi-mini-card">
              <h5>I — Investasi (PMTB)</h5>
              <p>Pembelian barang modal oleh sektor bisnis (pabrik, mesin, infrastruktur). Menyumbang <strong>~30%</strong> PDB.</p>
            </div>
            <div class="materi-mini-card">
              <h5>G — Belanja Pemerintah</h5>
              <p>Pengeluaran pemerintah: gaji ASN, infrastruktur, pendidikan, kesehatan. Sekitar <strong>~8%</strong> PDB.</p>
            </div>
            <div class="materi-mini-card">
              <h5>(X−M) — Net Ekspor</h5>
              <p>Ekspor dikurangi impor. Indonesia cenderung surplus perdagangan sejak 2020.</p>
            </div>
          </div>
        </div>

        <h2>PDB Nominal vs PDB Riil</h2>
        <ul>
          <li><strong>PDB Nominal</strong> — dihitung dengan harga berlaku (current prices). Bisa misleading karena terpengaruh inflasi.</li>
          <li><strong>PDB Riil</strong> — dihitung dengan harga konstan (constant prices) tahun dasar tertentu. Lebih akurat untuk melihat pertumbuhan ekonomi sebenarnya.</li>
          <li><strong>GDP Deflator</strong> — rasio PDB nominal/riil × 100. Mengukur tingkat harga keseluruhan ekonomi.</li>
        </ul>

        <h2>PDB per Kapita</h2>
        <p>PDB per kapita = PDB ÷ jumlah penduduk. Indonesia (2025): ~<strong>USD 4,900/kapita</strong>, masuk kategori negara berpendapatan menengah-bawah (upper-middle income threshold: USD 4,466).</p>

        <div class="materi-info-box">
          <strong>🌏 Posisi Indonesia di Dunia</strong>
          <p>PDB Indonesia 2025 mencapai <strong>~USD 1.4 triliun</strong>, menjadikannya ekonomi terbesar ke-16 dunia dan terbesar di Asia Tenggara. Target pemerintah: masuk 5 besar ekonomi dunia tahun 2045 ('Indonesia Emas').</p>
        </div>
      </div>
    `,
    chart: {
      title: "Pertumbuhan PDB Indonesia (2018–2026)",
      desc: "Pertumbuhan PDB riil year-on-year (%). Perhatikan kontraksi 2020 akibat pandemi dan pemulihan setelahnya.",
      type: "bar",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026*"],
        datasets: [{
          label: "Pertumbuhan PDB (%)",
          data: [5.17, 5.02, -2.07, 3.69, 5.31, 5.05, 5.05, 5.10, 5.20],
          backgroundColor: function(ctx) {
            return ctx.raw < 0 ? "#fca5a5" : "#93c5fd";
          },
          borderRadius: 8,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { min: -3, max: 7 } } }
    },
    takeaways: [
      "PDB = C + I + G + (X−M) — konsumsi rumah tangga menyumbang porsi terbesar (~53%)",
      "Gunakan PDB Riil (bukan nominal) untuk mengukur pertumbuhan ekonomi sebenarnya",
      "Indonesia: ekonomi ke-16 terbesar dunia dengan PDB ~USD 1.4 triliun",
      "Target Indonesia Emas 2045: masuk 5 besar ekonomi dunia"
    ]
  },
  {
    id: 2,
    label: "Makro — Konsep 2",
    title: "Kebijakan Moneter Bank Indonesia",
    subtitle: "Bagaimana BI mengendalikan inflasi, stabilitas Rupiah, dan pertumbuhan ekonomi melalui suku bunga.",
    content: `
      <div class="materi-article">
        <h2>Apa Itu Kebijakan Moneter?</h2>
        <p>Kebijakan moneter adalah tindakan yang diambil oleh <strong>bank sentral (Bank Indonesia)</strong> untuk mengendalikan jumlah uang beredar, suku bunga, dan nilai tukar guna mencapai stabilitas harga (inflasi terkendali) dan mendukung pertumbuhan ekonomi.</p>

        <div class="materi-highlight">
          <h4>BI-7 Day Reverse Repo Rate (BI7DRR)</h4>
          <p>Instrumen utama kebijakan moneter BI. Saat ini di level <strong>5.75%</strong> (2026). Ini adalah suku bunga acuan yang mempengaruhi seluruh sistem keuangan.</p>
          <div class="materi-grid-2">
            <div class="materi-mini-card" style="border-left: 4px solid #ef4444;">
              <h5>Suku Bunga Naik ↑</h5>
              <p>Kredit mahal → konsumsi turun → investasi turun → pertumbuhan melambat → <strong>inflasi turun</strong></p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #10b981;">
              <h5>Suku Bunga Turun ↓</h5>
              <p>Kredit murah → konsumsi naik → investasi naik → pertumbuhan meningkat → <strong>risiko inflasi naik</strong></p>
            </div>
          </div>
        </div>

        <h2>Instrumen Kebijakan Moneter BI</h2>
        <ol>
          <li><strong>Operasi Pasar Terbuka (OPT)</strong> — BI membeli/menjual surat berharga pemerintah di pasar untuk mengatur jumlah uang beredar</li>
          <li><strong>Fasilitas Diskonto</strong> — Tingkat bunga pinjaman BI ke bank komersial yang membutuhkan likuiditas darurat</li>
          <li><strong>Giro Wajib Minimum (GWM)</strong> — Persentase dana yang wajib disimpan bank di BI. Semakin tinggi GWM, semakin sedikit uang yang bisa dipinjamkan bank</li>
          <li><strong>Intervensi Valas</strong> — BI membeli/menjual dolar untuk menstabilkan nilai tukar Rupiah</li>
        </ol>

        <h2>Transmission Mechanism</h2>
        <p>Perubahan suku bunga BI tidak langsung terasa di ekonomi riil. Ada <strong>lag time 3-6 bulan</strong> sebelum dampaknya terasa. Jalur transmisi:</p>
        <ul>
          <li><strong>Jalur suku bunga</strong> — BI rate → suku bunga kredit & deposito bank → keputusan konsumsi/investasi</li>
          <li><strong>Jalur kredit</strong> — BI rate → kemampuan bank menyalurkan kredit → aktivitas ekonomi</li>
          <li><strong>Jalur nilai tukar</strong> — BI rate → aliran modal asing → nilai tukar Rupiah → harga impor</li>
          <li><strong>Jalur ekspektasi</strong> — Sinyal BI rate → ekspektasi inflasi pelaku ekonomi → keputusan harga</li>
        </ul>

        <div class="materi-info-box">
          <strong>📊 Mandat BI</strong>
          <p>Sejak UU No. 4/2023, Bank Indonesia memiliki <strong>triple mandate</strong>: (1) stabilitas nilai Rupiah, (2) stabilitas sistem pembayaran, dan (3) turut menjaga stabilitas sistem keuangan.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Pergerakan BI-7 Day Reverse Repo Rate (2018–2026)",
      desc: "Suku bunga acuan BI berfluktuasi sesuai kondisi ekonomi — turun saat pandemi, naik saat inflasi tinggi",
      type: "line",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        datasets: [{
          label: "BI7DRR (%)",
          data: [6.00, 5.00, 3.75, 3.50, 5.50, 6.00, 6.25, 5.75, 5.75],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.1)",
          tension: 0.3, fill: true, pointRadius: 6, pointBackgroundColor: "#3b82f6",
        }]
      },
      options: { scales: { y: { min: 3, max: 7 } } }
    },
    takeaways: [
      "BI7DRR adalah suku bunga acuan yang mempengaruhi seluruh sistem keuangan Indonesia",
      "Suku bunga naik → menekan inflasi tapi memperlambat pertumbuhan, dan sebaliknya",
      "Ada lag time 3-6 bulan sebelum kebijakan moneter terasa dampaknya",
      "BI punya triple mandate: stabilitas Rupiah, sistem pembayaran, dan sistem keuangan"
    ]
  },
  {
    id: 3,
    label: "Makro — Konsep 3",
    title: "Neraca Perdagangan & Nilai Tukar",
    subtitle: "Bagaimana ekspor-impor dan nilai tukar Rupiah saling mempengaruhi ekonomi Indonesia.",
    content: `
      <div class="materi-article">
        <h2>Neraca Perdagangan</h2>
        <p>Neraca perdagangan adalah <strong>selisih antara nilai ekspor dan impor</strong> suatu negara. Surplus (ekspor > impor) berarti negara menghasilkan devisa; defisit (impor > ekspor) berarti negara kehilangan devisa.</p>

        <div class="materi-highlight">
          <h4>Indonesia: Surplus Perdagangan</h4>
          <p>Indonesia mencatat <strong>surplus neraca perdagangan selama 40+ bulan berturut-turut</strong> (2020-2024), didorong oleh ekspor komoditas seperti batu bara, kelapa sawit (CPO), dan nikel. Total surplus kumulatif >USD 180 miliar.</p>
        </div>

        <h2>Faktor Penentu Nilai Tukar</h2>
        <ul>
          <li><strong>Suku bunga relatif</strong> — Suku bunga lebih tinggi menarik modal asing → Rupiah menguat</li>
          <li><strong>Inflasi relatif</strong> — Inflasi lebih rendah dari mitra dagang → Rupiah menguat</li>
          <li><strong>Neraca berjalan</strong> — Surplus perdagangan → permintaan Rupiah naik → menguat</li>
          <li><strong>Sentimen global</strong> — Risk-off global → investor keluar dari emerging market → Rupiah melemah</li>
          <li><strong>Stabilitas politik</strong> — Ketidakpastian politik → modal asing keluar → Rupiah melemah</li>
        </ul>

        <h2>Teori Nilai Tukar</h2>
        <div class="materi-grid-2">
          <div class="materi-mini-card">
            <h5>Purchasing Power Parity (PPP)</h5>
            <p>Dalam jangka panjang, nilai tukar menyesuaikan sehingga sekeranjang barang memiliki harga sama di kedua negara. Contoh: Big Mac Index.</p>
          </div>
          <div class="materi-mini-card">
            <h5>Interest Rate Parity (IRP)</h5>
            <p>Selisih suku bunga antara dua negara akan diimbangi oleh perubahan nilai tukar yang diharapkan.</p>
          </div>
        </div>

        <h2>Dampak Perubahan Nilai Tukar</h2>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Kondisi</th><th>Dampak Positif</th><th>Dampak Negatif</th></tr></thead>
            <tbody>
              <tr><td><strong>Rupiah Menguat</strong></td><td>Impor lebih murah, inflasi terkendali</td><td>Ekspor kurang kompetitif, devisa turun</td></tr>
              <tr><td><strong>Rupiah Melemah</strong></td><td>Ekspor lebih kompetitif, devisa naik</td><td>Impor mahal, inflasi naik, utang LN membengkak</td></tr>
            </tbody>
          </table>
        </div>

        <div class="materi-info-box">
          <strong>📈 Komoditas Ekspor Utama Indonesia (2025)</strong>
          <p>1. Batu Bara (~USD 35M) | 2. CPO (Kelapa Sawit) (~USD 28M) | 3. Nikel & Baja (~USD 20M) | 4. Karet & Tekstil (~USD 12M)</p>
        </div>
      </div>
    `,
    chart: {
      title: "Neraca Perdagangan Indonesia (Miliar USD)",
      desc: "Surplus perdagangan Indonesia sejak 2020, didorong oleh booming komoditas global",
      type: "bar",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [{
          label: "Surplus/Defisit (Miliar USD)",
          data: [-0.2, -3.6, 21.7, 35.3, 54.5, 36.9, 28.5, 31.2],
          backgroundColor: function(ctx) { return ctx.raw < 0 ? "#fca5a5" : "#93c5fd"; },
          borderRadius: 8,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { min: -10, max: 60 } } }
    },
    takeaways: [
      "Neraca perdagangan = ekspor − impor; Indonesia surplus 40+ bulan berturut-turut",
      "Nilai tukar dipengaruhi suku bunga, inflasi, neraca berjalan, dan sentimen global",
      "Rupiah menguat → impor murah tapi ekspor kurang kompetitif",
      "Komoditas (batu bara, CPO, nikel) masih mendominasi ekspor Indonesia"
    ]
  },
  {
    id: 4,
    label: "Makro — Konsep 4",
    title: "Siklus Bisnis & Resesi",
    subtitle: "Ekonomi bergerak dalam siklus — pahami pola dan indikatornya untuk mengambil keputusan strategis.",
    content: `
      <div class="materi-article">
        <h2>Fase Siklus Bisnis</h2>
        <p>Ekonomi tidak bergerak lurus — ia bergerak dalam <strong>siklus yang berulang</strong>. Memahami posisi kita dalam siklus sangat penting untuk keputusan investasi dan bisnis.</p>

        <div class="materi-highlight">
          <h4>4 Fase Siklus Bisnis</h4>
          <div class="materi-grid-2">
            <div class="materi-mini-card" style="border-left: 4px solid #10b981;">
              <h5>1. Ekspansi (Growth)</h5>
              <p>PDB naik, pengangguran turun, investasi meningkat, optimisme tinggi. Harga aset cenderung naik.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #f59e0b;">
              <h5>2. Puncak (Peak)</h5>
              <p>Ekonomi mencapai titik tertinggi. Inflasi mulai mengkhawatirkan, bank sentral biasanya menaikkan suku bunga.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #ef4444;">
              <h5>3. Kontraksi (Recession)</h5>
              <p>PDB menurun ≥2 kuartal berturut-turut. PHK meningkat, konsumsi turun, harga aset jatuh.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #3b82f6;">
              <h5>4. Palung (Trough)</h5>
              <p>Titik terendah siklus. Ekonomi mulai stabil, bank sentral biasanya menurunkan suku bunga untuk stimulasi.</p>
            </div>
          </div>
        </div>

        <h2>Indikator Ekonomi</h2>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Jenis</th><th>Indikator</th><th>Fungsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Leading</strong></td><td>PMI, izin bangunan, indeks kepercayaan konsumen</td><td>Memprediksi arah ekonomi 3-6 bulan ke depan</td></tr>
              <tr><td><strong>Coincident</strong></td><td>Produksi industri, penjualan ritel, PDB</td><td>Menggambarkan kondisi ekonomi saat ini</td></tr>
              <tr><td><strong>Lagging</strong></td><td>Tingkat pengangguran, CPI, suku bunga kredit</td><td>Mengkonfirmasi tren ekonomi yang sudah terjadi</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Resesi di Indonesia</h2>
        <p>Indonesia pernah mengalami resesi besar pada <strong>1998 (Krisis Asia)</strong> dengan PDB kontraksi -13.1% dan <strong>2020 (COVID-19)</strong> dengan PDB -2.07%. Pelajaran penting: diversifikasi ekonomi dan manajemen fiskal yang prudent sangat krusial.</p>

        <div class="materi-info-box">
          <strong>💼 Strategi di Setiap Fase</strong>
          <p><strong>Ekspansi:</strong> Investasi agresif (saham, properti) | <strong>Puncak:</strong> Mulai ambil profit, tingkatkan kas | <strong>Kontraksi:</strong> Defensive (obligasi, emas) | <strong>Palung:</strong> Mulai akumulasi aset murah.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Siklus Ekonomi Indonesia — Pertumbuhan PDB Kuartalan",
      desc: "Pertumbuhan PDB kuartalan (YoY) menunjukkan pola siklus ekonomi Indonesia",
      type: "line",
      data: {
        labels: ["Q1'19", "Q2'19", "Q3'19", "Q4'19", "Q1'20", "Q2'20", "Q3'20", "Q4'20", "Q1'21", "Q2'21", "Q3'21", "Q4'21", "Q1'22", "Q2'22", "Q3'22", "Q4'22"],
        datasets: [{
          label: "PDB Growth (%)",
          data: [5.07, 5.05, 5.02, 4.97, 2.97, -5.32, -3.49, -2.19, -0.74, 7.07, 3.51, 5.02, 5.01, 5.44, 5.72, 5.01],
          borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,0.08)",
          tension: 0.4, fill: true, pointRadius: 4, pointBackgroundColor: function(ctx) { return ctx.raw < 0 ? "#ef4444" : "#3b82f6"; }
        }, {
          label: "Garis 0%",
          data: Array(16).fill(0),
          borderColor: "#94a3b8", borderDash: [4, 4], pointRadius: 0, fill: false,
        }]
      },
      options: { scales: { y: { min: -7, max: 9 } } }
    },
    takeaways: [
      "Siklus bisnis: ekspansi → puncak → kontraksi → palung → ekspansi (berulang)",
      "Resesi = PDB negatif selama 2 kuartal berturut-turut",
      "Gunakan indikator leading untuk antisipasi, bukan indikator lagging",
      "Sesuaikan strategi investasi dengan fase siklus ekonomi saat ini"
    ]
  },
  {
    id: 5,
    label: "Mikro — Konsep 1",
    title: "Hukum Permintaan & Penawaran",
    subtitle: "Fondasi ekonomi mikro — bagaimana harga terbentuk dari interaksi pembeli dan penjual di pasar.",
    content: `
      <div class="materi-article">
        <h2>Hukum Permintaan (Law of Demand)</h2>
        <p><strong>Ketika harga naik, jumlah yang diminta turun</strong> (ceteris paribus — faktor lain tetap). Ini karena konsumen akan mencari barang substitusi atau mengurangi konsumsi.</p>

        <h2>Hukum Penawaran (Law of Supply)</h2>
        <p><strong>Ketika harga naik, jumlah yang ditawarkan naik</strong> (ceteris paribus). Produsen termotivasi memproduksi lebih banyak karena margin keuntungan yang lebih tinggi.</p>

        <div class="materi-highlight">
          <h4>Keseimbangan Pasar (Equilibrium)</h4>
          <p>Harga di mana jumlah yang diminta = jumlah yang ditawarkan. Di titik ini, tidak ada tekanan untuk harga berubah. Jika harga di atas equilibrium → surplus (kelebihan penawaran). Jika di bawah → shortage (kelebihan permintaan).</p>
        </div>

        <h2>Elastisitas Harga</h2>
        <p>Mengukur seberapa responsif kuantitas terhadap perubahan harga:</p>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Jenis</th><th>Elastisitas</th><th>Contoh</th><th>Karakteristik</th></tr></thead>
            <tbody>
              <tr><td><strong>Elastis</strong></td><td>E > 1</td><td>Tiket pesawat, gadget</td><td>Perubahan harga → perubahan besar pada permintaan</td></tr>
              <tr><td><strong>Inelastis</strong></td><td>E < 1</td><td>Beras, bensin, obat</td><td>Harga naik, orang tetap beli (kebutuhan pokok)</td></tr>
              <tr><td><strong>Unitary</strong></td><td>E = 1</td><td>Jarang terjadi</td><td>Perubahan harga → perubahan proporsional pada permintaan</td></tr>
              <tr><td><strong>Perfectly Inelastic</strong></td><td>E = 0</td><td>Insulin bagi penderita diabetes</td><td>Permintaan tidak berubah berapapun harganya</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Pergeseran Kurva</h2>
        <ul>
          <li><strong>Permintaan bergeser kanan</strong> — pendapatan naik, preferensi berubah, harga barang substitusi naik</li>
          <li><strong>Permintaan bergeser kiri</strong> — pendapatan turun, selera berubah, barang substitusi lebih murah</li>
          <li><strong>Penawaran bergeser kanan</strong> — teknologi baru, biaya produksi turun, cuaca baik (pertanian)</li>
          <li><strong>Penawaran bergeser kiri</strong> — biaya produksi naik, bencana alam, regulasi ketat</li>
        </ul>
      </div>
    `,
    chart: {
      title: "Simulasi: Hubungan Harga vs Jumlah Diminta & Ditawarkan",
      desc: "Konsep sederhana kurva supply-demand. Titik potong = harga keseimbangan (equilibrium)",
      type: "line",
      data: {
        labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
        datasets: [{
          label: "Permintaan (Demand)",
          data: [80, 70, 60, 50, 40, 30, 20, 10],
          borderColor: "#ef4444", tension: 0.3, pointRadius: 4,
        }, {
          label: "Penawaran (Supply)",
          data: [10, 20, 30, 40, 50, 60, 70, 80],
          borderColor: "#3b82f6", tension: 0.3, pointRadius: 4,
        }]
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Kuantitas →" } },
          y: { title: { display: true, text: "Harga (Rp) →" }, beginAtZero: true }
        }
      }
    },
    takeaways: [
      "Hukum permintaan: harga naik → jumlah diminta turun (ceteris paribus)",
      "Hukum penawaran: harga naik → jumlah ditawarkan naik (ceteris paribus)",
      "Harga keseimbangan terbentuk di titik potong kurva supply dan demand",
      "Elastisitas mengukur seberapa sensitif kuantitas terhadap perubahan harga"
    ]
  },
  {
    id: 6,
    label: "Mikro — Konsep 2",
    title: "Struktur Pasar",
    subtitle: "Dari persaingan sempurna hingga monopoli — bagaimana struktur pasar mempengaruhi harga dan efisiensi.",
    content: `
      <div class="materi-article">
        <h2>4 Struktur Pasar Utama</h2>

        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Fitur</th><th>Persaingan Sempurna</th><th>Monopolistik</th><th>Oligopoli</th><th>Monopoli</th></tr></thead>
            <tbody>
              <tr><td><strong>Jumlah Penjual</strong></td><td>Sangat banyak</td><td>Banyak</td><td>Sedikit (2-10)</td><td>1</td></tr>
              <tr><td><strong>Produk</strong></td><td>Identik</td><td>Diferensiasi</td><td>Bisa identik/berbeda</td><td>Unik, tanpa substitusi</td></tr>
              <tr><td><strong>Hambatan Masuk</strong></td><td>Tidak ada</td><td>Rendah</td><td>Tinggi</td><td>Sangat tinggi</td></tr>
              <tr><td><strong>Kontrol Harga</strong></td><td>Price taker</td><td>Sedikit</td><td>Signifikan</td><td>Price maker</td></tr>
              <tr><td><strong>Contoh di Indonesia</strong></td><td>Pasar sayur</td><td>Restoran, UMKM fashion</td><td>Telekomunikasi, semen</td><td>PLN, air PDAM</td></tr>
              <tr><td><strong>Efisiensi</strong></td><td>Paling efisien</td><td>Cukup efisien</td><td>Kurang efisien</td><td>Paling tidak efisien</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Persaingan Monopolistik — Yang Paling Umum</h2>
        <p>Ini adalah struktur pasar yang paling umum ditemui sehari-hari. Ciri utama: <strong>banyak penjual dengan produk yang terdiferensiasi</strong> (berbeda tapi bisa saling menggantikan).</p>
        <ul>
          <li>Contoh: restoran (nasi goreng vs nasi padang vs pizza), brand baju, salon</li>
          <li>Kunci sukses: <strong>diferensiasi</strong> — branding, kualitas, lokasi, layanan</li>
          <li>Keuntungan jangka panjang cenderung normal (karena hambatan masuk rendah)</li>
        </ul>

        <h2>Oligopoli — Pasar yang Didominasi Sedikit Pemain</h2>
        <p>Beberapa perusahaan besar mendominasi pasar. Keputusan satu perusahaan mempengaruhi perusahaan lain (interdependensi).</p>
        <ul>
          <li><strong>Telekomunikasi Indonesia</strong> — Telkomsel, Indosat, XL (3 pemain menguasai ~90% pasar)</li>
          <li><strong>Semen</strong> — Semen Indonesia (SMGR), Indocement (INTP) menguasai mayoritas pasar</li>
          <li>Cenderung terjadi <strong>price rigidity</strong> (harga kaku) — enggan perang harga</li>
        </ul>

        <div class="materi-info-box">
          <strong>⚖️ Peran KPPU</strong>
          <p>Komisi Pengawas Persaingan Usaha (KPPU) bertugas mencegah praktik monopoli dan persaingan tidak sehat di Indonesia, termasuk mengawasi merger, kartel, dan penyalahgunaan posisi dominan.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Market Share Telekomunikasi Indonesia (2025)",
      desc: "Contoh nyata strukturoligopoli — 3 pemain menguasai >90% pasar seluler Indonesia",
      type: "doughnut",
      data: {
        labels: ["Telkomsel (46%)", "Indosat Ooredoo (22%)", "XL Axiata (17%)", "Smartfren (9%)", "Lainnya (6%)"],
        datasets: [{
          data: [46, 22, 17, 9, 6],
          backgroundColor: ["#ef4444", "#f59e0b", "#3b82f6", "#10b981", "#94a3b8"],
          borderWidth: 0, hoverOffset: 8,
        }]
      },
      options: { plugins: { legend: { position: "bottom", labels: { usePointStyle: true } } } }
    },
    takeaways: [
      "4 struktur pasar: persaingan sempurna, monopolistik, oligopoli, monopoli",
      "Monopolistik paling umum dalam kehidupan sehari-hari (banyak UMKM)",
      "Oligopoli: sedikit pemain, interdependensi, cenderung price rigidity",
      "KPPU mengawasi agar tidak terjadi praktik monopoli yang merugikan konsumen"
    ]
  },
  {
    id: 7,
    label: "Mikro — Konsep 3",
    title: "Biaya Produksi & Marginal Cost",
    subtitle: "Memahami struktur biaya perusahaan — kunci untuk menentukan harga jual dan output optimal.",
    content: `
      <div class="materi-article">
        <h2>Jenis-Jenis Biaya Produksi</h2>

        <div class="materi-highlight">
          <h4>Klasifikasi Biaya</h4>
          <div class="materi-grid-2">
            <div class="materi-mini-card" style="border-left: 4px solid #3b82f6;">
              <h5>Fixed Cost (FC)</h5>
              <p>Biaya yang tidak berubah berapapun jumlah produksi. Contoh: sewa gedung, gaji manajer, depresiasi mesin.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #10b981;">
              <h5>Variable Cost (VC)</h5>
              <p>Biaya yang berubah sesuai jumlah produksi. Contoh: bahan baku, tenaga kerja langsung, kemasan.</p>
            </div>
          </div>
        </div>

        <h2>Rumus-Rumus Penting</h2>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Konsep</th><th>Rumus</th><th>Penjelasan</th></tr></thead>
            <tbody>
              <tr><td><strong>Total Cost (TC)</strong></td><td>TC = FC + VC</td><td>Total seluruh biaya produksi</td></tr>
              <tr><td><strong>Average Total Cost (ATC)</strong></td><td>ATC = TC / Q</td><td>Biaya rata-rata per unit produksi</td></tr>
              <tr><td><strong>Average Fixed Cost (AFC)</strong></td><td>AFC = FC / Q</td><td>FC per unit — menurun seiring Q naik</td></tr>
              <tr><td><strong>Average Variable Cost (AVC)</strong></td><td>AVC = VC / Q</td><td>VC per unit produksi</td></tr>
              <tr><td><strong>Marginal Cost (MC)</strong></td><td>MC = ΔTC / ΔQ</td><td>Tambahan biaya untuk 1 unit tambahan</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Profit Maximization: MR = MC</h2>
        <p>Perusahaan memaksimalkan keuntungan ketika <strong>Marginal Revenue (MR) = Marginal Cost (MC)</strong>. Jika MR > MC, tambah produksi. Jika MR < MC, kurangi produksi.</p>

        <h2>Economies of Scale</h2>
        <p>Ketika produksi meningkat, ATC cenderung turun (efisiensi skala). Namun setelah titik tertentu, ATC bisa naik kembali — ini disebut <strong>diseconomies of scale</strong> (terlalu besar untuk dikelola efisien).</p>

        <div class="materi-info-box">
          <strong>🏭 Contoh Praktis</strong>
          <p>Sebuah UMKM keripik dengan FC Rp 5 juta/bulan (sewa, listrik) dan VC Rp 3.000/bungkus (bahan baku). Jika memproduksi 2.000 bungkus: TC = 5jt + (3.000×2.000) = Rp 11 juta. ATC = Rp 5.500/bungkus. Jika harga jual Rp 8.000/bungkus → profit per unit = Rp 2.500.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Kurva Biaya: ATC, AVC, AFC, dan MC",
      desc: "Simulasi pergerakan biaya seiring bertambahnya jumlah produksi (Q). MC memotong ATC di titik minimum.",
      type: "line",
      data: {
        labels: ["100", "200", "400", "600", "800", "1000", "1200", "1500"],
        datasets: [
          { label: "ATC", data: [60, 35, 22, 18, 16.5, 16, 16.5, 18], borderColor: "#3b82f6", tension: 0.4 },
          { label: "AVC", data: [10, 10, 9.5, 10, 11, 12, 13.5, 15], borderColor: "#10b981", tension: 0.4 },
          { label: "AFC", data: [50, 25, 12.5, 8, 6.5, 5, 4, 3], borderColor: "#f59e0b", borderDash: [4, 4], tension: 0.4 },
          { label: "MC", data: [10, 8, 9, 12, 14, 16, 20, 25], borderColor: "#ef4444", tension: 0.4 },
        ]
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Jumlah Produksi (Q) →" } },
          y: { title: { display: true, text: "Biaya (Rp ribu) →" }, beginAtZero: true }
        }
      }
    },
    takeaways: [
      "TC = FC + VC — pahami komponen biaya tetap vs variabel",
      "Marginal Cost (MC) = tambahan biaya untuk 1 unit tambahan produksi",
      "Profit maksimal saat MR = MC — aturan emas pengambilan keputusan produksi",
      "Economies of scale: ATC turun saat produksi meningkat (sampai titik tertentu)"
    ]
  },
  {
    id: 8,
    label: "Mikro — Konsep 4",
    title: "Teori Perilaku Konsumen",
    subtitle: "Bagaimana konsumen membuat keputusan pembelian — utilitas, kurva indiferen, dan budget constraint.",
    content: `
      <div class="materi-article">
        <h2>Utilitas (Kepuasan)</h2>
        <p>Utilitas adalah <strong>ukuran kepuasan atau kesenangan</strong> yang diperoleh konsumen dari mengonsumsi barang/jasa. Konsep kunci:</p>
        <ul>
          <li><strong>Total Utility (TU)</strong> — Total kepuasan keseluruhan dari mengonsumsi sejumlah barang</li>
          <li><strong>Marginal Utility (MU)</strong> — Tambahan kepuasan dari mengonsumsi 1 unit tambahan</li>
        </ul>

        <div class="materi-highlight">
          <h4>Hukum Diminishing Marginal Utility</h4>
          <p>Setiap tambahan unit yang dikonsumsi memberikan <strong>tambahan kepuasan yang semakin kecil</strong>. Contoh: gelas pertama es teh saat haus → sangat memuaskan. Gelas ke-5 → sudah tidak terlalu nikmat.</p>
        </div>

        <h2>Kurva Indiferen (Indifference Curve)</h2>
        <p>Kurva yang menunjukkan <strong>kombinasi dua barang yang memberikan tingkat kepuasan sama</strong> bagi konsumen. Karakteristik:</p>
        <ul>
          <li>Menurun dari kiri atas ke kanan bawah (slope negatif)</li>
          <li>Cembung ke titik origin (convex)</li>
          <li>Kurva yang lebih tinggi = kepuasan lebih besar</li>
          <li>Dua kurva indiferen tidak pernah berpotongan</li>
        </ul>

        <h2>Budget Constraint (Garis Anggaran)</h2>
        <p>Garis yang menunjukkan semua kombinasi barang yang bisa dibeli dengan budget tertentu. Titik optimal konsumen: di mana <strong>kurva indiferen bersinggungan</strong> (tangent) dengan budget constraint.</p>

        <h2>Kondisi Optimum Konsumen</h2>
        <div class="materi-info-box">
          <strong>📐 Rumus Optimum</strong>
          <p class="text-xl font-bold text-center my-2">MUx / Px = MUy / Py</p>
          <p>Marginal Utility per rupiah yang dikeluarkan harus <strong>sama untuk semua barang</strong>. Jika tidak, konsumen bisa meningkatkan kepuasan dengan merealokasi pengeluaran.</p>
        </div>

        <h2>Aplikasi Praktis</h2>
        <ul>
          <li><strong>Bundling</strong> — Perusahaan menggabungkan produk karena total utility paket > individual</li>
          <li><strong>Pricing Strategy</strong> — Menentukan berapa harga optimal berdasarkan willingness to pay</li>
          <li><strong>Behavioral Economics</strong> — Anomali perilaku: framing effect, anchoring, loss aversion</li>
        </ul>
      </div>
    `,
    chart: {
      title: "Diminishing Marginal Utility",
      desc: "Ilustrasi: setiap tambahan konsumsi memberikan tambahan kepuasan yang semakin kecil",
      type: "bar",
      data: {
        labels: ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5", "Unit 6", "Unit 7"],
        datasets: [{
          label: "Marginal Utility",
          data: [100, 80, 55, 35, 20, 8, 0],
          backgroundColor: ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#d1fae5", "#f0fdf4", "#f1f5f9"],
          borderRadius: 8,
        }, {
          label: "Total Utility",
          data: [100, 180, 235, 270, 290, 298, 298],
          type: "line", borderColor: "#3b82f6", tension: 0.4, pointRadius: 5, yAxisID: "y1",
        }]
      },
      options: {
        scales: {
          y: { title: { display: true, text: "Marginal Utility →" }, beginAtZero: true },
          y1: { title: { display: true, text: "Total Utility →" }, position: "right", beginAtZero: true, grid: { drawOnChartArea: false } }
        }
      }
    },
    takeaways: [
      "Marginal Utility menurun seiring bertambahnya konsumsi (diminishing MU)",
      "Konsumen optimal saat MUx/Px = MUy/Py untuk semua barang",
      "Kurva indiferen: kombinasi barang dengan tingkat kepuasan yang sama",
      "Behavioral economics menunjukkan manusia tidak selalu rasional dalam keputusan"
    ]
  }
];

/* ===== RENDER LOGIC ===== */
function getTopicId() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("topic")) || 1;
}

function renderMateri() {
  const topicId = getTopicId();
  const materi = materiData.find(m => m.id === topicId);
  if (!materi) { document.getElementById("materi-title").textContent = "Materi tidak ditemukan"; return; }

  document.title = `ArthaNavigate | ${materi.title}`;
  document.getElementById("materi-label").textContent = materi.label;
  document.getElementById("materi-title").innerHTML = materi.title;
  document.getElementById("materi-subtitle").textContent = materi.subtitle;
  document.getElementById("materi-content").innerHTML = materi.content;

  if (materi.chart) {
    document.getElementById("chart-section").style.display = "";
    document.getElementById("chart-title").textContent = materi.chart.title;
    document.getElementById("chart-desc").textContent = materi.chart.desc;
    const ctx = document.getElementById("materi-chart").getContext("2d");
    new Chart(ctx, { type: materi.chart.type, data: materi.chart.data, options: { responsive: true, maintainAspectRatio: true, ...materi.chart.options } });
  }

  if (materi.takeaways) {
    document.getElementById("takeaways-section").style.display = "";
    document.getElementById("takeaways-grid").innerHTML = materi.takeaways.map(t =>
      `<div class="takeaway-card"><svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="text-sm text-slate-600">${t}</span></div>`
    ).join("");
  }

  const prevBtn = document.getElementById("prev-topic");
  const nextBtn = document.getElementById("next-topic");
  if (topicId > 1) { prevBtn.style.visibility = "visible"; prevBtn.href = `?topic=${topicId - 1}`; }
  if (topicId < materiData.length) {
    nextBtn.href = `?topic=${topicId + 1}`;
  } else {
    nextBtn.href = "mahasiswa.html";
    nextBtn.innerHTML = 'Kembali ke Jalur Mahasiswa <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>';
  }
}

document.addEventListener("DOMContentLoaded", renderMateri);
