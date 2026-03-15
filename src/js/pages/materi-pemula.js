/* ===== materi-pemula.js — Detail materi untuk jalur Pemula ===== */
import { initApp } from "../core/app-init.js";
initApp({ activePage: "pemula", basePath: "../../", pagePath: "" });

/* ===== DATA MATERI ===== */
const materiData = [
  {
    id: 1,
    label: "Langkah 01",
    title: "Pahami Uang & Fungsinya",
    subtitle: "Fondasi pertama literasi keuangan — memahami peran uang dalam kehidupan dan ekonomi.",
    content: `
      <div class="materi-article">
        <h2>Apa Itu Uang?</h2>
        <p>Uang adalah alat yang diterima secara umum sebagai medium pertukaran dalam transaksi ekonomi. Namun peran uang jauh lebih luas dari sekadar alat tukar. Dalam ilmu ekonomi, uang memiliki <strong>empat fungsi utama</strong> yang saling melengkapi.</p>

        <div class="materi-highlight">
          <h4>4 Fungsi Utama Uang</h4>
          <div class="materi-grid-2">
            <div class="materi-mini-card">
              <span class="materi-emoji">💱</span>
              <h5>Alat Tukar (Medium of Exchange)</h5>
              <p>Menghilangkan kebutuhan barter. Anda bisa menukar tenaga kerja menjadi uang, kemudian uang menjadi barang kebutuhan.</p>
            </div>
            <div class="materi-mini-card">
              <span class="materi-emoji">📏</span>
              <h5>Alat Ukur Nilai (Unit of Account)</h5>
              <p>Memberikan standar untuk mengukur dan membandingkan nilai barang/jasa. Misalnya: 1 kg beras = Rp 15.000.</p>
            </div>
            <div class="materi-mini-card">
              <span class="materi-emoji">🏦</span>
              <h5>Penyimpan Nilai (Store of Value)</h5>
              <p>Uang bisa disimpan dan digunakan di masa depan. Namun nilainya bisa berkurang karena inflasi.</p>
            </div>
            <div class="materi-mini-card">
              <span class="materi-emoji">📋</span>
              <h5>Standar Pembayaran (Standard of Deferred Payment)</h5>
              <p>Memungkinkan transaksi kredit — bayar sekarang, bayar nanti, atau cicilan.</p>
            </div>
          </div>
        </div>

        <h2>Jenis-Jenis Uang di Indonesia</h2>
        <p>Mata uang resmi Indonesia adalah <strong>Rupiah (IDR)</strong>, dikeluarkan oleh Bank Indonesia. Ada beberapa bentuk uang yang beredar:</p>
        <ul>
          <li><strong>Uang Kartal</strong> — Uang kertas dan logam yang beredar di masyarakat</li>
          <li><strong>Uang Giral</strong> — Saldo di rekening bank yang bisa digunakan via cek, transfer, atau debit</li>
          <li><strong>Uang Elektronik (E-Money)</strong> — GoPay, OVO, DANA, ShopeePay — saldo digital untuk transaksi harian</li>
          <li><strong>QRIS</strong> — Sistem pembayaran digital nasional yang menyatukan semua e-wallet</li>
        </ul>

        <div class="materi-info-box">
          <strong>💡 Tahukah Anda?</strong>
          <p>Menurut Bank Indonesia, transaksi digital di Indonesia tumbuh <strong>38.71%</strong> per tahun (2023-2025). Nilai transaksi e-money mencapai <strong>Rp 472 triliun</strong> di tahun 2025.</p>
        </div>

        <h2>Mengapa Penting Memahami Uang?</h2>
        <p>Pemahaman tentang uang adalah langkah pertama dalam literasi keuangan. Tanpa memahami bagaimana uang bekerja, sulit untuk:</p>
        <ul>
          <li>Mengelola pemasukan dan pengeluaran dengan bijak</li>
          <li>Membedakan kebutuhan vs keinginan</li>
          <li>Memahami mengapa nilai uang bisa turun (inflasi)</li>
          <li>Memilih produk keuangan yang tepat (tabungan, investasi, asuransi)</li>
        </ul>
      </div>
    `,
    chart: {
      title: "Pertumbuhan Transaksi Digital Indonesia",
      desc: "Volume transaksi e-money dan QRIS di Indonesia meningkat drastis setiap tahun (dalam triliun Rupiah)",
      type: "bar",
      data: {
        labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
        datasets: [{
          label: "Transaksi Digital (Triliun Rp)",
          data: [201, 256, 310, 388, 437, 472],
          backgroundColor: ["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981", "#059669"],
          borderRadius: 8,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
    },
    takeaways: [
      "Uang memiliki 4 fungsi: alat tukar, ukur nilai, simpan nilai, dan standar pembayaran",
      "Transaksi digital di Indonesia tumbuh >38% per tahun",
      "Memahami uang adalah langkah pertama menuju literasi keuangan",
      "E-money dan QRIS sudah menjadi bagian penting ekonomi Indonesia"
    ]
  },
  {
    id: 2,
    label: "Langkah 02",
    title: "Mengenal Inflasi & Deflasi",
    subtitle: "Bagaimana nilai uang Anda berubah seiring waktu — dan mengapa ini penting untuk keputusan keuangan.",
    content: `
      <div class="materi-article">
        <h2>Apa Itu Inflasi?</h2>
        <p>Inflasi adalah <strong>kenaikan harga barang dan jasa secara umum dan berkelanjutan</strong> dalam jangka waktu tertentu. Ini berarti daya beli uang Anda menurun seiring waktu — Rp 100.000 hari ini tidak bisa membeli barang sebanyak Rp 100.000 sepuluh tahun lalu.</p>

        <div class="materi-highlight">
          <h4>Dampak Inflasi terhadap Uang Anda</h4>
          <p>Dengan rata-rata inflasi Indonesia <strong>2.87% per tahun</strong> (2026), uang Anda mengalami erosi nilai:</p>
          <div class="materi-grid-2">
            <div class="materi-mini-card">
              <span class="materi-emoji">📉</span>
              <h5>Rp 1.000.000 Hari Ini</h5>
              <p>Bernilai ~Rp 971.300 tahun depan jika hanya disimpan tanpa bunga (kehilangan ~Rp 28.700).</p>
            </div>
            <div class="materi-mini-card">
              <span class="materi-emoji">⏳</span>
              <h5>Dalam 10 Tahun</h5>
              <p>Rp 1 juta hanya bernilai ~Rp 750.000 (daya beli berkurang 25%). Dalam 20 tahun: ~Rp 562.000.</p>
            </div>
          </div>
        </div>

        <h2>Jenis-Jenis Inflasi</h2>
        <ul>
          <li><strong>Demand-Pull Inflation</strong> — Permintaan melebihi penawaran. Contoh: harga tiket pesawat naik saat liburan.</li>
          <li><strong>Cost-Push Inflation</strong> — Biaya produksi naik sehingga harga jual ikut naik. Contoh: kenaikan harga BBM mendorong harga transportasi dan makanan.</li>
          <li><strong>Built-In Inflation</strong> — Ekspektasi inflasi menjadi self-fulfilling. Pekerja minta gaji lebih tinggi → biaya produksi naik → harga naik.</li>
        </ul>

        <h2>Apa Itu Deflasi?</h2>
        <p>Deflasi adalah <strong>kebalikan inflasi</strong> — penurunan harga barang dan jasa secara umum. Meski terdengar positif, deflasi berkepanjangan justru berbahaya karena:</p>
        <ul>
          <li>Konsumen menunda pembelian (karena mengharapkan harga lebih murah)</li>
          <li>Pendapatan perusahaan menurun → PHK → pengangguran naik</li>
          <li>Ekonomi bisa masuk spiral deflasi (kontraksi berkepanjangan)</li>
        </ul>

        <div class="materi-info-box">
          <strong>📊 Data Indonesia</strong>
          <p>Bank Indonesia menargetkan inflasi pada rentang <strong>2.5% ± 1%</strong> per tahun. Inflasi terlalu tinggi (>6%) maupun terlalu rendah (<1%) sama-sama tidak sehat bagi ekonomi.</p>
        </div>

        <h2>Strategi Melawan Inflasi</h2>
        <ul>
          <li><strong>Jangan hanya menabung di bawah bantal</strong> — simpan di instrumen yang memberikan bunga/return</li>
          <li><strong>Investasikan minimal setara inflasi</strong> — cari return >3% per tahun</li>
          <li><strong>Diversifikasi aset</strong> — gabungan tabungan, deposito, reksadana, dan saham</li>
          <li><strong>Tingkatkan penghasilan</strong> — keterampilan baru, side income, passive income</li>
        </ul>
      </div>
    `,
    chart: {
      title: "Tingkat Inflasi Indonesia (2018–2026)",
      desc: "Pergerakan tingkat inflasi tahunan Indonesia. Target BI: 2.5% ± 1%",
      type: "line",
      data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
        datasets: [{
          label: "Inflasi (%)",
          data: [3.13, 2.72, 1.68, 1.87, 5.51, 2.61, 2.30, 2.55, 2.87],
          borderColor: "#10b981",
          backgroundColor: "rgba(16,185,129,0.1)",
          tension: 0.4, fill: true, pointRadius: 5, pointBackgroundColor: "#10b981",
        }, {
          label: "Target BI (2.5%)",
          data: [2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
          borderColor: "#94a3b8", borderDash: [6, 4], pointRadius: 0, fill: false,
        }]
      },
      options: { scales: { y: { beginAtZero: true, max: 7 } } }
    },
    takeaways: [
      "Inflasi membuat daya beli uang menurun setiap tahun (~2.87% di Indonesia)",
      "Rp 1 juta hari ini hanya bernilai ~Rp 750.000 dalam 10 tahun jika tidak diinvestasikan",
      "Deflasi bukan hal positif — bisa memicu spiral ekonomi negatif",
      "Investasi minimal harus menghasilkan return setara atau lebih dari inflasi"
    ]
  },
  {
    id: 3,
    label: "Langkah 03",
    title: "Buat Anggaran Pertama Anda",
    subtitle: "Metode 50/30/20 dan cara praktis mengelola cash flow agar penghasilan tidak habis sia-sia.",
    content: `
      <div class="materi-article">
        <h2>Mengapa Anggaran Itu Penting?</h2>
        <p>Anggaran keuangan (budgeting) adalah <strong>rencana terperinci bagaimana Anda mengalokasikan pemasukan</strong> untuk berbagai pos pengeluaran, tabungan, dan investasi. Tanpa anggaran, penghasilan cenderung habis tanpa tahu ke mana perginya.</p>

        <div class="materi-highlight">
          <h4>Aturan 50/30/20</h4>
          <p>Metode paling populer dan sederhana untuk memulai budgeting. Bagi penghasilan bersih Anda menjadi tiga kategori:</p>
          <div class="materi-grid-3">
            <div class="materi-mini-card" style="border-left: 4px solid #10b981;">
              <h5>50% — Kebutuhan</h5>
              <p>Sewa/cicilan rumah, makanan, transportasi, listrik, air, internet, asuransi kesehatan.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #3b82f6;">
              <h5>30% — Keinginan</h5>
              <p>Hiburan, makan di luar, belanja fashion, hobi, streaming, gym, liburan.</p>
            </div>
            <div class="materi-mini-card" style="border-left: 4px solid #f59e0b;">
              <h5>20% — Tabungan & Investasi</h5>
              <p>Dana darurat, tabungan, reksadana, saham, deposito, pembayaran utang.</p>
            </div>
          </div>
        </div>

        <h2>Langkah Praktis Membuat Anggaran</h2>
        <ol>
          <li><strong>Catat semua pemasukan</strong> — gaji, bonus, freelance, passive income</li>
          <li><strong>Lacak pengeluaran selama 1 bulan</strong> — gunakan aplikasi atau spreadsheet</li>
          <li><strong>Kategorikan</strong> — kebutuhan, keinginan, atau tabungan/investasi</li>
          <li><strong>Evaluasi</strong> — apakah ada pengeluaran keinginan yang bisa dikurangi?</li>
          <li><strong>Buat target</strong> — sesuaikan agar mendekati rasio 50/30/20</li>
          <li><strong>Review bulanan</strong> — evaluasi setiap akhir bulan dan sesuaikan</li>
        </ol>

        <h2>Bedakan Kebutuhan vs Keinginan</h2>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Kebutuhan (Needs)</th><th>Keinginan (Wants)</th></tr></thead>
            <tbody>
              <tr><td>Makan sehari-hari</td><td>Makan di restoran mahal</td></tr>
              <tr><td>Transportasi ke kantor</td><td>Beli mobil baru padahal ada motor</td></tr>
              <tr><td>Pakaian dasar</td><td>Beli brand fashion terbaru</td></tr>
              <tr><td>Tempat tinggal</td><td>Upgrade ke apartemen mewah</td></tr>
              <tr><td>Asuransi kesehatan</td><td>Langganan streaming 3 platform</td></tr>
            </tbody>
          </table>
        </div>

        <div class="materi-info-box">
          <strong>📱 Tips Praktis</strong>
          <p>Gunakan aplikasi pencatat keuangan seperti <strong>Money Manager, Wallet by BudgetBakers,</strong> atau spreadsheet sederhana Google Sheets. Yang penting: konsisten mencatat selama minimal 3 bulan.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Alokasi Anggaran 50/30/20",
      desc: "Contoh pembagian gaji Rp 5.000.000/bulan berdasarkan aturan 50/30/20",
      type: "doughnut",
      data: {
        labels: ["Kebutuhan (50%)", "Keinginan (30%)", "Tabungan & Investasi (20%)"],
        datasets: [{
          data: [2500000, 1500000, 1000000],
          backgroundColor: ["#10b981", "#3b82f6", "#f59e0b"],
          borderWidth: 0, hoverOffset: 8,
        }]
      },
      options: {
        plugins: {
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                return ctx.label + ": Rp " + ctx.raw.toLocaleString("id-ID");
              }
            }
          }
        }
      }
    },
    takeaways: [
      "Aturan 50/30/20: 50% kebutuhan, 30% keinginan, 20% tabungan/investasi",
      "Langkah pertama: lacak semua pengeluaran selama 1 bulan penuh",
      "Bedakan kebutuhan (harus) vs keinginan (bisa ditunda)",
      "Review anggaran secara konsisten setiap bulan"
    ]
  },
  {
    id: 4,
    label: "Langkah 04",
    title: "Bangun Dana Darurat",
    subtitle: "Jaring pengaman keuangan pertama Anda — berapa idealnya dan bagaimana cara membangunnya.",
    content: `
      <div class="materi-article">
        <h2>Apa Itu Dana Darurat?</h2>
        <p>Dana darurat adalah <strong>sejumlah uang yang disisihkan khusus untuk keadaan tidak terduga</strong> — sakit, kehilangan pekerjaan, kerusakan kendaraan, atau situasi darurat lainnya. Dana ini <strong>bukan</strong> untuk liburan atau belanja.</p>

        <div class="materi-highlight">
          <h4>Berapa Target Dana Darurat Ideal?</h4>
          <div class="materi-grid-3">
            <div class="materi-mini-card" style="border-top: 4px solid #10b981;">
              <h5>Lajang</h5>
              <p><strong>3–6 bulan</strong> pengeluaran bulanan. Contoh: pengeluaran Rp 4 juta/bln → Dana darurat Rp 12–24 juta.</p>
            </div>
            <div class="materi-mini-card" style="border-top: 4px solid #3b82f6;">
              <h5>Menikah</h5>
              <p><strong>6–9 bulan</strong> pengeluaran bulanan. Tanggung jawab lebih besar = buffer lebih tebal.</p>
            </div>
            <div class="materi-mini-card" style="border-top: 4px solid #f59e0b;">
              <h5>Punya Anak</h5>
              <p><strong>9–12 bulan</strong> pengeluaran bulanan. Semakin banyak tanggungan, semakin besar kebutuhan.</p>
            </div>
          </div>
        </div>

        <h2>Dimana Menyimpan Dana Darurat?</h2>
        <p>Kunci dana darurat: <strong>mudah diakses (likuid)</strong> dan aman. Jangan diinvestasikan di instrumen berisiko tinggi.</p>
        <ul>
          <li><strong>Tabungan terpisah</strong> — buat rekening khusus dana darurat, jangan campur dengan tabungan harian</li>
          <li><strong>Deposito berjangka 1-3 bulan</strong> — bunga sedikit lebih tinggi, bisa dicairkan saat perlu</li>
          <li><strong>Reksadana Pasar Uang (RDPU)</strong> — return ~4-5% p.a., bisa dicairkan H+1 kerja</li>
        </ul>

        <h2>Strategi Membangun Dana Darurat</h2>
        <ol>
          <li>Hitung pengeluaran bulanan rata-rata Anda</li>
          <li>Tentukan target (misalnya 6 bulan × Rp 4 juta = Rp 24 juta)</li>
          <li>Sisihkan 10-20% penghasilan setiap bulan khusus untuk ini</li>
          <li>Otomatisasi: set auto-transfer ke rekening dana darurat setiap gajian</li>
          <li>Jika ada rezeki lebih (bonus, THR), tambahkan ke dana darurat</li>
        </ol>

        <div class="materi-info-box">
          <strong>⚠️ Aturan Emas Dana Darurat</strong>
          <p>Dana darurat harus dibangun <strong>SEBELUM</strong> mulai investasi. Tanpa dana darurat, Anda berisiko harus menjual investasi di saat harga sedang turun (forced selling) karena butuh uang mendadak.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Timeline Membangun Dana Darurat",
      desc: "Simulasi menabung Rp 1 juta/bulan untuk target dana darurat Rp 24 juta (6 bulan pengeluaran)",
      type: "bar",
      data: {
        labels: ["Bln 1", "Bln 4", "Bln 8", "Bln 12", "Bln 16", "Bln 20", "Bln 24"],
        datasets: [{
          label: "Akumulasi Dana (Juta Rp)",
          data: [1, 4, 8, 12, 16, 20, 24],
          backgroundColor: "#10b981", borderRadius: 8,
        }, {
          label: "Target (24 Juta)",
          data: [24, 24, 24, 24, 24, 24, 24],
          type: "line", borderColor: "#f59e0b", borderDash: [6, 4], pointRadius: 0, fill: false,
        }]
      },
      options: { scales: { y: { beginAtZero: true } } }
    },
    takeaways: [
      "Target dana darurat: 3-12 bulan pengeluaran tergantung status keluarga",
      "Simpan di instrumen likuid: tabungan terpisah, deposito, atau RDPU",
      "Bangun dana darurat SEBELUM mulai investasi",
      "Otomatisasi transfer setiap gajian agar konsisten"
    ]
  },
  {
    id: 5,
    label: "Langkah 05",
    title: "Kenali Produk Perbankan",
    subtitle: "Tabungan, deposito, dan giro — masing-masing punya tujuan berbeda. Kenali keuntungan dan kekurangannya.",
    content: `
      <div class="materi-article">
        <h2>Jenis Produk Perbankan Utama</h2>
        <p>Memahami produk perbankan adalah kunci mengelola uang dengan efisien. Setiap produk dirancang untuk kebutuhan berbeda.</p>

        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Fitur</th><th>Tabungan</th><th>Deposito</th><th>Giro</th></tr></thead>
            <tbody>
              <tr><td><strong>Bunga</strong></td><td>0.5–2% p.a.</td><td>3–5% p.a.</td><td>0–1% p.a.</td></tr>
              <tr><td><strong>Likuiditas</strong></td><td>Sangat tinggi</td><td>Terbatas (1-12 bln)</td><td>Sangat tinggi</td></tr>
              <tr><td><strong>Minimum</strong></td><td>Rp 100K–500K</td><td>Rp 1–10 Juta</td><td>Rp 500K–1 Juta</td></tr>
              <tr><td><strong>Cocok Untuk</strong></td><td>Dana harian</td><td>Dana darurat, parkir uang</td><td>Transaksi bisnis</td></tr>
              <tr><td><strong>Pajak Bunga</strong></td><td>20% (>Rp 7.5jt)</td><td>20%</td><td>20%</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Produk Digital Modern</h2>
        <p>Selain produk tradisional, bank digital menawarkan inovasi menarik:</p>
        <ul>
          <li><strong>Neo Bank / Bank Digital</strong> — Jago, Blu, Seabank — bunga tabungan hingga 5-6% p.a.</li>
          <li><strong>E-Wallet</strong> — GoPay, OVO, DANA — untuk transaksi harian, bukan penyimpanan jangka panjang</li>
          <li><strong>Tabungan Berjangka</strong> — Fitur auto-debit yang membantu disiplin menabung</li>
        </ul>

        <div class="materi-info-box">
          <strong>🔒 Jaminan LPS</strong>
          <p>Simpanan di bank yang terdaftar LPS dijamin hingga <strong>Rp 2 Miliar per nasabah per bank</strong> dengan syarat bunga tidak melebihi penjaminan LPS. Pastikan bank Anda terdaftar di OJK dan peserta LPS.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Perbandingan Bunga Produk Perbankan",
      desc: "Rata-rata suku bunga tahunan berbagai produk simpanan di Indonesia (2026)",
      type: "bar",
      data: {
        labels: ["Tabungan Biasa", "Tabungan Digital", "Deposito 1 Bln", "Deposito 3 Bln", "Deposito 12 Bln", "RDPU"],
        datasets: [{
          label: "Bunga/Return (% p.a.)",
          data: [1.0, 5.5, 3.25, 3.75, 4.5, 4.8],
          backgroundColor: ["#cbd5e1", "#10b981", "#93c5fd", "#60a5fa", "#3b82f6", "#f59e0b"],
          borderRadius: 8,
        }]
      },
      options: { indexAxis: "y", plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, max: 7 } } }
    },
    takeaways: [
      "Tabungan biasa cocok untuk dana harian, bukan untuk pertumbuhan uang",
      "Deposito memberikan bunga lebih tinggi tapi likuiditas terbatas",
      "Bank digital menawarkan bunga tabungan yang kompetitif (hingga 5-6%)",
      "Pastikan bank Anda terdaftar OJK dan dijamin LPS (maks Rp 2 Miliar)"
    ]
  },
  {
    id: 6,
    label: "Langkah 06",
    title: "Dasar-Dasar Investasi",
    subtitle: "Buat uang Anda bekerja — kenali instrumen investasi dari yang paling aman hingga agresif.",
    content: `
      <div class="materi-article">
        <h2>Apa Itu Investasi?</h2>
        <p>Investasi adalah <strong>menanamkan uang atau modal ke suatu instrumen dengan harapan mendapat keuntungan di masa depan</strong>. Tujuannya: melawan inflasi dan membuat uang Anda berkembang.</p>

        <div class="materi-highlight">
          <h4>Prinsip Dasar: Risk vs Return</h4>
          <p>Semakin tinggi potensi return, semakin tinggi risikonya. Tidak ada investasi yang high-return dan zero-risk.</p>
        </div>

        <h2>Piramida Investasi (dari Aman ke Agresif)</h2>
        <ol>
          <li><strong>Reksadana Pasar Uang (RDPU)</strong> — Return: 4-5% p.a. | Risiko: Sangat rendah | Modal: Rp 10.000</li>
          <li><strong>Obligasi / Surat Utang Negara (SBN)</strong> — Return: 5-7% p.a. | Risiko: Rendah | Modal: Rp 1 juta</li>
          <li><strong>Reksadana Campuran</strong> — Return: 7-12% p.a. | Risiko: Sedang | Modal: Rp 10.000</li>
          <li><strong>Reksadana Saham</strong> — Return: 10-18% p.a. | Risiko: Tinggi | Modal: Rp 10.000</li>
          <li><strong>Saham Individual</strong> — Return: bervariasi | Risiko: Tinggi | Modal: 1 lot (100 lembar)</li>
          <li><strong>Kripto</strong> — Return: sangat bervariasi | Risiko: Sangat tinggi | Modal: Rp 10.000</li>
        </ol>

        <h2>Cara Memulai Investasi</h2>
        <ul>
          <li>Pastikan dana darurat sudah terbangun (3-6 bulan pengeluaran)</li>
          <li>Mulai dari instrumen berisiko rendah: RDPU atau SBN</li>
          <li>Gunakan platform resmi terdaftar OJK (Bibit, Bareksa, Ajaib, Stockbit)</li>
          <li>Mulai kecil: Rp 100.000/bulan sudah cukup untuk memulai</li>
          <li>Konsisten: investasi rutin lebih baik dari investasi besar sekaligus (Dollar Cost Averaging)</li>
        </ul>

        <div class="materi-info-box">
          <strong>🎯 Dollar Cost Averaging (DCA)</strong>
          <p>Teknik investasi rutin dengan jumlah tetap setiap bulan, tanpa peduli harga pasar. Ini mengurangi risiko membeli di harga puncak dan meratakan biaya pembelian.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Perbandingan Risk vs Return Instrumen Investasi",
      desc: "Estimasi return tahunan rata-rata vs tingkat risiko berbagai instrumen investasi",
      type: "scatter",
      data: {
        datasets: [{
          label: "Instrumen Investasi",
          data: [
            { x: 1, y: 4.5, label: "RDPU" },
            { x: 2, y: 6, label: "SBN" },
            { x: 3, y: 5, label: "Deposito" },
            { x: 5, y: 10, label: "RD Campuran" },
            { x: 7, y: 15, label: "RD Saham" },
            { x: 8, y: 18, label: "Saham" },
          ],
          backgroundColor: "#10b981",
          pointRadius: 10,
          pointHoverRadius: 14,
        }]
      },
      options: {
        scales: {
          x: { title: { display: true, text: "Risiko →" }, min: 0, max: 10 },
          y: { title: { display: true, text: "Return (% p.a.) →" }, beginAtZero: true, max: 22 }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const labels = ["RDPU","SBN","Deposito","RD Campuran","RD Saham","Saham"];
                return labels[ctx.dataIndex] + ": ~" + ctx.parsed.y + "% p.a.";
              }
            }
          }
        }
      }
    },
    takeaways: [
      "Investasi = membuat uang bekerja untuk Anda, melawan inflasi",
      "Prinsip utama: high return = high risk, tidak ada pengecualian",
      "Mulai dari RDPU atau SBN jika baru pertama kali investasi",
      "Dollar Cost Averaging (DCA) lebih aman daripada lump sum untuk pemula"
    ]
  },
  {
    id: 7,
    label: "Langkah 07",
    title: "Pahami Pajak & Kewajiban",
    subtitle: "Setiap penghasilan dan investasi memiliki implikasi pajak. Kenali agar tidak kena masalah di kemudian hari.",
    content: `
      <div class="materi-article">
        <h2>Pajak Penghasilan (PPh) di Indonesia</h2>
        <p>Setiap Warga Negara Indonesia dengan penghasilan di atas Penghasilan Tidak Kena Pajak (PTKP) wajib membayar Pajak Penghasilan (PPh).</p>

        <div class="materi-highlight">
          <h4>PTKP (Penghasilan Tidak Kena Pajak) 2026</h4>
          <ul>
            <li>WP Pribadi Lajang: <strong>Rp 54 juta/tahun</strong> (Rp 4.5 juta/bulan)</li>
            <li>Menikah: + Rp 4.5 juta</li>
            <li>Per tanggungan (maks 3): + Rp 4.5 juta per orang</li>
          </ul>
        </div>

        <h2>Tarif PPh Progresif</h2>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Lapisan Penghasilan Kena Pajak</th><th>Tarif</th></tr></thead>
            <tbody>
              <tr><td>s.d. Rp 60 juta</td><td>5%</td></tr>
              <tr><td>Rp 60 juta – Rp 250 juta</td><td>15%</td></tr>
              <tr><td>Rp 250 juta – Rp 500 juta</td><td>25%</td></tr>
              <tr><td>Rp 500 juta – Rp 5 miliar</td><td>30%</td></tr>
              <tr><td>> Rp 5 miliar</td><td>35%</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Pajak pada Investasi</h2>
        <ul>
          <li><strong>Saham</strong> — Pajak jual: 0.1% dari nilai transaksi (final). Dividen sampai Rp 10 juta/tahun bebas pajak.</li>
          <li><strong>Deposito</strong> — 20% dari bunga (final, dipotong otomatis oleh bank)</li>
          <li><strong>Obligasi / SBN</strong> — 10% dari kupon/bunga (final)</li>
          <li><strong>Reksadana</strong> — Saat ini TIDAK dikenakan pajak atas keuntungan</li>
          <li><strong>Properti</strong> — PPh final 2.5% dari harga jual + PBB tahunan</li>
        </ul>

        <div class="materi-info-box">
          <strong>📅 Kewajiban Pelaporan</strong>
          <p>Setiap WP wajib melaporkan SPT Tahunan paling lambat <strong>31 Maret</strong> (Karyawan) atau <strong>30 April</strong> (Wiraswasta). Pelaporan bisa dilakukan online melalui <strong>DJP Online (djponline.pajak.go.id)</strong>.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Tarif PPh Progresif di Indonesia",
      desc: "Semakin tinggi penghasilan kena pajak, semakin tinggi persentase pajaknya",
      type: "bar",
      data: {
        labels: ["s.d. 60 Juta", "60–250 Juta", "250–500 Juta", "500 Juta–5 M", "> 5 Miliar"],
        datasets: [{
          label: "Tarif PPh (%)",
          data: [5, 15, 25, 30, 35],
          backgroundColor: ["#d1fae5", "#a7f3d0", "#fde68a", "#fdba74", "#fca5a5"],
          borderRadius: 8,
        }]
      },
      options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 40 } } }
    },
    takeaways: [
      "PTKP WP lajang: Rp 54 juta/tahun — di bawah ini tidak kena PPh",
      "Sistem pajak Indonesia: progresif (makin besar penghasilan, makin besar tarifnya)",
      "Reksadana saat ini bebas pajak keuntungan — keuntungan bagi pemula",
      "Lapor SPT Tahunan wajib sebelum 31 Maret (via djponline.pajak.go.id)"
    ]
  },
  {
    id: 8,
    label: "Langkah 08",
    title: "Buat Rencana Keuangan Jangka Panjang",
    subtitle: "Compound interest adalah keajaiban ke-8 dunia — lihat bagaimana investasi kecil tumbuh menjadi besar.",
    content: `
      <div class="materi-article">
        <h2>Kekuatan Compound Interest</h2>
        <p>Compound interest (bunga berbunga) adalah konsep di mana <strong>keuntungan investasi diinvestasikan kembali</strong> sehingga menghasilkan keuntungan tambahan. Ini adalah kunci pertumbuhan kekayaan jangka panjang.</p>

        <div class="materi-highlight">
          <h4>Simulasi: Investasi Rp 500.000/bulan</h4>
          <p>Dengan return rata-rata <strong>10% per tahun</strong> dan investasi konsisten Rp 500.000/bulan:</p>
          <div class="materi-grid-3">
            <div class="materi-mini-card" style="border-top: 4px solid #10b981;">
              <h5>5 Tahun</h5>
              <p>Modal: Rp 30 juta<br>Nilai: <strong>Rp 38.8 juta</strong><br>Keuntungan: Rp 8.8 juta</p>
            </div>
            <div class="materi-mini-card" style="border-top: 4px solid #3b82f6;">
              <h5>10 Tahun</h5>
              <p>Modal: Rp 60 juta<br>Nilai: <strong>Rp 103 juta</strong><br>Keuntungan: Rp 43 juta</p>
            </div>
            <div class="materi-mini-card" style="border-top: 4px solid #f59e0b;">
              <h5>20 Tahun</h5>
              <p>Modal: Rp 120 juta<br>Nilai: <strong>Rp 380 juta</strong><br>Keuntungan: Rp 260 juta</p>
            </div>
          </div>
        </div>

        <h2>Cara Menetapkan Tujuan Keuangan</h2>
        <p>Tujuan keuangan yang baik bersifat <strong>SMART</strong>: Specific, Measurable, Achievable, Relevant, Time-bound.</p>
        <div class="materi-table-wrap">
          <table class="materi-table">
            <thead><tr><th>Tujuan</th><th>Target</th><th>Waktu</th><th>Investasi/Bulan*</th></tr></thead>
            <tbody>
              <tr><td>Dana Darurat</td><td>Rp 24 Juta</td><td>2 Tahun</td><td>Rp 1.000.000</td></tr>
              <tr><td>DP Rumah</td><td>Rp 150 Juta</td><td>5 Tahun</td><td>Rp 2.200.000</td></tr>
              <tr><td>Dana Pendidikan Anak</td><td>Rp 500 Juta</td><td>15 Tahun</td><td>Rp 1.200.000</td></tr>
              <tr><td>Dana Pensiun</td><td>Rp 5 Miliar</td><td>25 Tahun</td><td>Rp 3.700.000</td></tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-400 mt-2">*Asumsi return rata-rata 10% p.a. dengan investasi konsisten setiap bulan</p>

        <h2>Rule of 72</h2>
        <p>Rumus sederhana untuk memperkirakan berapa lama uang Anda berlipat ganda:</p>
        <div class="materi-info-box">
          <strong>📐 Rule of 72</strong>
          <p><strong>72 ÷ return (%) = jumlah tahun untuk menggandakan uang</strong></p>
          <p>Contoh: return 10% → 72 ÷ 10 = <strong>7.2 tahun</strong> untuk menggandakan investasi.</p>
          <p>Return 6% → 72 ÷ 6 = <strong>12 tahun</strong>. Return 15% → 72 ÷ 15 = <strong>4.8 tahun</strong>.</p>
        </div>
      </div>
    `,
    chart: {
      title: "Kekuatan Compound Interest: Investasi Rp 500K/bulan",
      desc: "Perbandingan pertumbuhan investasi vs hanya menabung biasa (tanpa bunga) selama 20 tahun",
      type: "line",
      data: {
        labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
        datasets: [{
          label: "Investasi 10% p.a. (Juta Rp)",
          data: [0, 13.2, 29.4, 49.5, 74.3, 103, 142, 187, 242, 306, 380],
          borderColor: "#10b981",
          backgroundColor: "rgba(16,185,129,0.1)",
          tension: 0.4, fill: true,
        }, {
          label: "Menabung biasa (Juta Rp)",
          data: [0, 12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
          borderColor: "#94a3b8",
          borderDash: [6, 4],
          tension: 0, fill: false, pointRadius: 3,
        }]
      },
      options: { scales: { y: { beginAtZero: true } } }
    },
    takeaways: [
      "Compound interest: keuntungan berbunga — kunci pertumbuhan kekayaan jangka panjang",
      "Rp 500K/bulan + 10% return = Rp 380 juta dalam 20 tahun (modal hanya Rp 120 juta)",
      "Rule of 72: 72 ÷ return(%) = tahun untuk menggandakan uang",
      "Tetapkan tujuan SMART dan hitung berapa investasi bulanan yang dibutuhkan"
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

  // Chart
  if (materi.chart) {
    const section = document.getElementById("chart-section");
    section.style.display = "";
    document.getElementById("chart-title").textContent = materi.chart.title;
    document.getElementById("chart-desc").textContent = materi.chart.desc;

    const ctx = document.getElementById("materi-chart").getContext("2d");
    new Chart(ctx, {
      type: materi.chart.type,
      data: materi.chart.data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        ...materi.chart.options,
      }
    });
  }

  // Takeaways
  if (materi.takeaways) {
    const section = document.getElementById("takeaways-section");
    section.style.display = "";
    const grid = document.getElementById("takeaways-grid");
    grid.innerHTML = materi.takeaways.map(t =>
      `<div class="takeaway-card"><svg class="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg><span class="text-sm text-slate-600">${t}</span></div>`
    ).join("");
  }

  // Navigation
  const prevBtn = document.getElementById("prev-topic");
  const nextBtn = document.getElementById("next-topic");
  if (topicId > 1) {
    prevBtn.style.visibility = "visible";
    prevBtn.href = `?topic=${topicId - 1}`;
  }
  if (topicId < materiData.length) {
    nextBtn.href = `?topic=${topicId + 1}`;
    nextBtn.textContent = "Selanjutnya";
  } else {
    nextBtn.href = "pemula.html";
    nextBtn.innerHTML = 'Kembali ke Jalur Pemula <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>';
  }
}

document.addEventListener("DOMContentLoaded", renderMateri);
