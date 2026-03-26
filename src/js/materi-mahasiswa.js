import { initApp } from "../core/app-init.js";

// Initialize the app for this page
initApp({ activePage: "mahasiswa", basePath: "../../", pagePath: "" });

const materiData = {
    1: {
        title: "Produk Domestik Bruto (PDB)",
        category: "Makroekonomi",
        readTime: "12 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Produk Domestik Bruto (PDB) adalah total nilai moneter dari seluruh barang dan jasa akhir yang diproduksi di dalam wilayah suatu negara dalam periode waktu tertentu. Ini bukan hanya sekadar angka, melainkan indikator kesehatan struktural ekonomi sebuah bangsa.</p>
            
            <div class="bg-charcoal text-parchment p-8 rounded-2xl my-10 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-bullion/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <h4 class="text-bullion font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Formula Pengeluaran</h4>
                <p class="text-3xl font-display mb-4 tracking-tight">Y = C + I + G + (X — M)</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono uppercase tracking-widest opacity-60">
                    <div>C: Konsumsi</div>
                    <div>I: Investasi</div>
                    <div>G: Belanja Negara</div>
                    <div>X-M: Ekspor Neto</div>
                </div>
            </div>

            <h3 class="font-display text-2xl text-charcoal mb-6">3 Pendekatan Utama</h3>
            <div class="space-y-4 my-8">
                <div class="p-6 bg-white rounded-2xl border border-charcoal/[0.06] flex gap-6 group hover:border-charcoal/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-surplus/10 flex items-center justify-center shrink-0">
                        <i data-lucide="factory" class="w-6 h-6 text-surplus"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-charcoal mb-1">Pendekatan Produksi</h4>
                        <p class="text-sm text-charcoal/60 leading-relaxed">Menjumlahkan nilai tambah (value added) dari setiap tahap produksi di seluruh sektor industri primer, sekunder, dan tersier.</p>
                    </div>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-charcoal/[0.06] flex gap-6 group hover:border-charcoal/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-bullion/10 flex items-center justify-center shrink-0">
                        <i data-lucide="banknote" class="w-6 h-6 text-bullion"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-charcoal mb-1">Pendekatan Pengeluaran</h4>
                        <p class="text-sm text-charcoal/60 leading-relaxed">Menghitung total belanja domestik. Di Indonesia, Konsumsi Rumah Tangga (C) menyumbang >50% dari total PDB.</p>
                    </div>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-charcoal/[0.06] flex gap-6 group hover:border-charcoal/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-deficit/10 flex items-center justify-center shrink-0">
                        <i data-lucide="wallet" class="w-6 h-6 text-deficit"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-charcoal mb-1">Pendekatan Pendapatan</h4>
                        <p class="text-sm text-charcoal/60 leading-relaxed">Menghitung total balas jasa faktor produksi: Upah (labor), Sewa (land), Bunga (capital), dan Laba (entrepreneurship).</p>
                    </div>
                </div>
            </div>
        `,
        takeaway: "PDB nominal vs PDB riil: Selalu gunakan PDB riil untuk membandingkan pertumbuhan ekonomi antar tahun agar tidak bias oleh inflasi.",
        chartData: {
            labels: ['2021', '2022', '2023', '2024', '2025*'],
            data: [3.70, 5.31, 5.05, 5.01, 5.20],
            label: 'Pertumbuhan PDB RI (%)'
        }
    },
    2: {
        title: "Kebijakan Moneter & BI-Rate",
        category: "Kebijakan Publik",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Kebijakan moneter adalah orkestrasi bank sentral untuk mengendalikan jumlah uang beredar (JUB) guna mencapai stabilitas harga dan nilai tukar.</p>
            
            <div class="border-l-4 border-bullion pl-8 py-4 my-10">
                <h4 class="text-xs font-mono uppercase tracking-[0.3em] text-mist mb-2">Mandat Tunggal Bank Indonesia</h4>
                <p class="text-2xl font-serif text-charcoal leading-snug">"Mencapai dan memelihara kestabilan nilai Rupiah."</p>
            </div>

            <h3 class="font-display text-2xl text-charcoal mb-6 group flex items-center gap-3">
                <i data-lucide="settings-2" class="w-6 h-6 text-bullion"></i>
                Instrumen Utama
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                <div class="p-6 bg-white rounded-2xl border border-charcoal/[0.06]">
                    <h4 class="font-bold text-charcoal mb-2">BI-7 Day Reverse Repo Rate</h4>
                    <p class="text-sm text-charcoal/60">Suku bunga acuan yang menjadi 'sinyal' bagi perbankan nasional untuk menentukan suku bunga kredit dan simpanan.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-charcoal/[0.06]">
                    <h4 class="font-bold text-charcoal mb-2">Giro Wajib Minimum (GWM)</h4>
                    <p class="text-sm text-charcoal/60">Persentase dana nasabah yang wajib ditahan di BI. Digunakan untuk menarik atau menyuntik likuiditas ke pasar.</p>
                </div>
            </div>

            <div class="bg-surplus/5 rounded-2xl p-8 border border-surplus/10">
                <p class="text-sm text-charcoal/70 leading-relaxed italic">Saat inflasi naik di atas target (misal >4%), BI cenderung bersifat **Hawkish** (menaikkan suku bunga). Saat ekonomi lesu, BI bersifat **Dovish** (menurunkan bunga).</p>
            </div>
        `,
        takeaway: "Suku bunga adalah 'rem' dan 'gas' ekonomi. Efektivitasnya sangat bergantung pada mekanisme transmisi ke sektor perbankan dan riil.",
        chartData: {
            labels: ['Jan', 'Mar', 'Mei', 'Jul', 'Sep', 'Nov'],
            data: [5.75, 5.75, 6.00, 6.25, 6.25, 6.00],
            label: 'BI-Rate (%)'
        }
    },
    3: {
        title: "Neraca Pembayaran & Kurs",
        category: "Ekonomi Internasional",
        readTime: "9 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Neraca Pembayaran (Balance of Payments) adalah catatan sistematis atas seluruh transaksi ekonomi antara penduduk suatu negara dengan negara lain.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div class="p-8 bg-charcoal text-parchment rounded-2xl">
                    <h4 class="text-bullion font-mono text-[10px] uppercase tracking-widest mb-4">Current Account</h4>
                    <p class="text-sm text-parchment/70 leading-relaxed">Fokus pada perdagangan barang & jasa. CAD (Current Account Deficit) sering menjadi sorotan karena menandakan ketergantungan pada modal asing.</p>
                </div>
                <div class="p-8 bg-white border border-charcoal/[0.06] rounded-2xl">
                    <h4 class="text-charcoal font-bold mb-4">Capital & Financial Account</h4>
                    <p class="text-sm text-charcoal/60 leading-relaxed">Mencatat investasi langsung (FDI), investasi portofolio (saham/obligasi), dan pinjaman luar negeri.</p>
                </div>
            </div>

            <h3 class="font-display text-2xl text-charcoal mb-4">Determinan Nilai Tukar</h3>
            <p class="text-sm text-charcoal/70 leading-relaxed mb-6">Kurs Rupiah ditentukan oleh mekanisme pasar. Menguatnya Rupiah (apresiasi) biasanya didorong oleh surplus dagang atau tingginya minat investor asing pada aset domestik.</p>
        `,
        takeaway: "Nilai tukar adalah barometer kepercayaan global terhadap fundamental ekonomi dan stabilitas politik suatu negara.",
        chartData: {
            labels: ['2021', '2022', '2023', '2024'],
            data: [14250, 15570, 15400, 15900],
            label: 'Rata-rata USD/IDR'
        }
    },
    4: {
        title: "Siklus Bisnis & Resesi",
        category: "Analisis Makro",
        readTime: "11 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Ekonomi tidak bergerak linear, melainkan dalam siklus gelombang: ekspansi, puncak, kontraksi, dan palung.</p>
            
            <div class="space-y-4 my-10">
                <div class="flex items-center gap-6 p-6 bg-white border border-charcoal/[0.06] rounded-2xl group hover:bg-parchment transition-all">
                    <div class="w-10 h-10 rounded-full bg-bullion/10 flex items-center justify-center shrink-0">
                        <i data-lucide="trending-up" class="w-5 h-5 text-bullion"></i>
                    </div>
                    <p class="text-sm text-charcoal/80"><strong>Ekspansi:</strong> PDB naik, pengangguran turun, kepercayaan konsumen tinggi.</p>
                </div>
                <div class="flex items-center gap-6 p-6 bg-white border border-charcoal/[0.06] rounded-2xl group hover:bg-parchment transition-all">
                    <div class="w-10 h-10 rounded-full bg-deficit/10 flex items-center justify-center shrink-0">
                        <i data-lucide="trending-down" class="w-5 h-5 text-deficit"></i>
                    </div>
                    <p class="text-sm text-charcoal/80"><strong>Resesi:</strong> Penurunan aktivitas ekonomi yang signifikan selama minimal 2 kuartal berturut-turut.</p>
                </div>
            </div>

            <div class="bg-charcoal rounded-2xl p-8 mb-10">
                <h4 class="text-parchment/40 font-mono text-[10px] uppercase tracking-widest mb-4">Kebijakan Kontra-Siklikal</h4>
                <p class="text-sm text-parchment/70 leading-relaxed">Pemerintah menggunakan fiskal (belanja/pajak) and BI menggunakan moneter (bunga) untuk mendinginkan ekonomi saat 'overheating' atau memanaskannya saat resesi.</p>
            </div>
        `,
        takeaway: "Memahami di posisi mana kita dalam siklus bisnis sangat krusial bagi investor untuk menentukan alokasi aset yang tepat.",
        chartData: {
            labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
            data: [5.11, 5.05, 4.95, 5.02],
            label: 'Pertumbuhan Kuartalan (%)'
        }
    },
    5: {
        title: "Hukum Permintaan & Penawaran",
        category: "Mikroekonomi",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Pasar adalah medan tempur antara keinginan konsumen (Demand) dan ambisi produsen (Supply).</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div class="p-8 bg-white border-t-2 border-charcoal rounded-b-2xl shadow-sm">
                    <h4 class="font-display text-xl mb-3">Law of Demand</h4>
                    <p class="text-xs text-charcoal/40 font-mono mb-4 italic">P↑ → Q↓ (Ceteris Paribus)</p>
                    <p class="text-sm text-charcoal/70 leading-relaxed">Harga gas naik, orang beralih ke transportasi umum. Ini adalah landasan efisiensi alokasi sumber daya.</p>
                </div>
                <div class="p-8 bg-white border-t-2 border-surplus rounded-b-2xl shadow-sm">
                    <h4 class="font-display text-xl mb-3">Law of Supply</h4>
                    <p class="text-xs text-charcoal/40 font-mono mb-4 italic">P↑ → Q↑ (Ceteris Paribus)</p>
                    <p class="text-sm text-charcoal/70 leading-relaxed">Saat harga kopi melonjak, petani terdorong untuk menanam lebih banyak kopi. Profit adalah sinyal produksi.</p>
                </div>
            </div>

            <div class="p-6 border border-charcoal/[0.06] rounded-2xl bg-white flex items-center gap-6">
                <i data-lucide="refresh-cw" class="w-8 h-8 text-charcoal"></i>
                <p class="text-sm text-charcoal/60">Titik temu keduanya disebut <strong>Equilibrium</strong> — harga di mana jumlah yang ditawarkan tepat sama dengan jumlah yang diminta.</p>
            </div>
        `,
        takeaway: "Intervensi harga (seperti Price Ceiling/Floor) seringkali mendistorsi pasar dan menciptakan kelangkaan atau surplus yang tidak efisien.",
        chartData: {
            labels: ['P1', 'P2', 'P3', 'P4', 'P5'],
            data: [100, 80, 60, 40, 20],
            label: 'Kurva Permintaan'
        }
    },
    6: {
        title: "Struktur Pasar & Persaingan",
        category: "Organisasi Industri",
        readTime: "12 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Seberapa banyak kendali yang dimiliki perusahaan atas harga ditentukan oleh spektrum struktur pasar.</p>
            
            <div class="space-y-4 my-10">
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl flex justify-between items-center group hover:bg-parchment transition-all">
                    <div>
                        <h4 class="font-bold text-charcoal">Persaingan Sempurna</h4>
                        <p class="text-xs text-charcoal/50">Banyak penjual, produk identik. Contoh: Pasar Beras.</p>
                    </div>
                    <span class="text-[10px] font-mono text-mist uppercase tracking-widest">Price Taker</span>
                </div>
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl flex justify-between items-center group hover:bg-parchment transition-all">
                    <div>
                        <h4 class="font-bold text-charcoal">Oligopoli</h4>
                        <p class="text-xs text-charcoal/50">Beberapa pemain besar. Contoh: Provider Seluler.</p>
                    </div>
                    <span class="text-[10px] font-mono text-mist uppercase tracking-widest">Interdependence</span>
                </div>
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl flex justify-between items-center group hover:bg-parchment transition-all">
                    <div>
                        <h4 class="font-bold text-charcoal">Monopoli</h4>
                        <p class="text-xs text-charcoal/50">Satu penjual tunggal. Contoh: PLN.</p>
                    </div>
                    <span class="text-[10px] font-mono text-mist uppercase tracking-widest">Price Maker</span>
                </div>
            </div>

            <div class="p-8 bg-charcoal text-parchment rounded-2xl">
                <h4 class="text-bullion font-mono text-[10px] uppercase tracking-widest mb-4">Efisiensi</h4>
                <p class="text-sm text-parchment/70 leading-relaxed italic">Persaingan mendorong efisiensi alokatif dan produktif, sementara monopoli cenderung menghasilkan 'Deadweight Loss' bagi kesejahteraan sosial.</p>
            </div>
        `,
        takeaway: "Regulasi anti-trust sangat penting untuk mencegah pemusatan kekuatan ekonomi yang merugikan konsumen akhir.",
        chartData: {
            labels: ['Sempurna', 'Oligopoli', 'Monopoli'],
            data: [100, 45, 10],
            label: 'Jumlah Kompetitor (Indeks)'
        }
    },
    7: {
        title: "Biaya Produksi & Marginal Cost",
        category: "Teori Perusahaan",
        readTime: "9 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Membedah struktur biaya adalah kunci untuk menjawab: "Apakah kita harus menambah produksi lagi?"</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl">
                    <h4 class="text-xs font-mono uppercase text-mist mb-2 tracking-widest">Fixed Cost</h4>
                    <p class="text-sm text-charcoal/70">Biaya tetap berapapun outputnya (contoh: Sewa Pabrik).</p>
                </div>
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl">
                    <h4 class="text-xs font-mono uppercase text-mist mb-2 tracking-widest">Variable Cost</h4>
                    <p class="text-sm text-charcoal/70">Berubah seiring jumlah output (contoh: Bahan Baku).</p>
                </div>
                <div class="p-6 bg-charcoal text-parchment rounded-2xl">
                    <h4 class="text-xs font-mono uppercase text-bullion mb-2 tracking-widest">Marginal Cost</h4>
                    <p class="text-sm text-parchment/70">Tambahan biaya untuk 1 unit output ekstra.</p>
                </div>
            </div>

            <div class="p-10 border-2 border-charcoal rounded-3xl text-center">
                <p class="text-[10px] font-mono uppercase tracking-[0.4em] text-mist mb-4">Golden Rule of Profit</p>
                <p class="text-4xl font-display text-charcoal">MR = MC</p>
                <p class="text-xs text-charcoal/50 mt-4 leading-relaxed">Laba maksimal tercapai saat pendapatan tambahan (Marginal Revenue) tepat sama dengan biaya tambahan (Marginal Cost).</p>
            </div>
        `,
        takeaway: "Ekonomi skala (Economies of Scale) terjadi saat biaya rata-rata turun seiring meningkatnya skala produksi.",
        chartData: {
            labels: ['10 unit', '50 unit', '100 unit', '500 unit'],
            data: [50000, 42000, 38000, 35000],
            label: 'Average Cost (IDR/unit)'
        }
    },
    8: {
        title: "Teori Perilaku Konsumen",
        category: "Psikologi Ekonomi",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Konsumen adalah agen rasional yang memaksimalkan kepuasan (Utility) di bawah kekangan anggaran yang ketat.</p>
            
            <div class="bg-bullion/5 border border-bullion/20 rounded-2xl p-8 my-10">
                <h4 class="text-bullion font-bold text-lg mb-4 flex items-center gap-3">
                    <i data-lucide="scale-2" class="w-6 h-6"></i>
                    Law of Diminishing Marginal Utility
                </h4>
                <p class="text-sm text-charcoal/70 leading-relaxed italic">"Kepuasan tambahan yang Anda dapatkan dari setiap donat tambahan yang dimakan akan terus menurun hingga mencapai titik jenuh."</p>
            </div>

            <h3 class="font-display text-2xl text-charcoal mb-6">Equilibrium Konsumen</h3>
            <p class="text-sm text-charcoal/70 leading-relaxed mb-10">Kondisi optimal tercapai saat kurva indiferen (keinginan) bersinggungan dengan garis anggaran (kemampuan).</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl">
                    <h4 class="font-bold text-charcoal mb-2">Income Effect</h4>
                    <p class="text-xs text-charcoal/50">Perubahan konsumsi karena perubahan daya beli riil.</p>
                </div>
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl">
                    <h4 class="font-bold text-charcoal mb-2">Substitution Effect</h4>
                    <p class="text-xs text-charcoal/50">Berpindah ke barang lain karena perubahan harga relatif.</p>
                </div>
            </div>
        `,
        takeaway: "Pilihan konsumen bukan sekadar selera, tapi kalkulasi matematis antara utilitas marginal dan harga barang.",
        chartData: {
            labels: ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'],
            data: [50, 85, 105, 115, 120],
            label: 'Total Utility'
        }
    },
    9: {
        title: "Ekonomi Syariah & Perbankan Islam",
        category: "Sistem Alternatif",
        readTime: "11 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-8 font-serif text-charcoal/80">Sistem ekonomi syariah berfokus pada keadilan sosial dan integritas moral dalam setiap transaksi keuangan.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 font-mono text-[10px] uppercase tracking-widest text-mist">
                <div class="flex items-center gap-3"><i data-lucide="x-circle" class="w-4 h-4 text-deficit"></i> No Interest (Riba)</div>
                <div class="flex items-center gap-3"><i data-lucide="x-circle" class="w-4 h-4 text-deficit"></i> No Gambling (Maysir)</div>
                <div class="flex items-center gap-3"><i data-lucide="check-circle" class="w-4 h-4 text-surplus"></i> Risk Sharing</div>
                <div class="flex items-center gap-3"><i data-lucide="check-circle" class="w-4 h-4 text-surplus"></i> Asset-Backed Only</div>
            </div>

            <h3 class="font-display text-2xl text-charcoal mb-6">Akad Utama</h3>
            <div class="space-y-4">
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl group hover:border-charcoal transition-all">
                    <h4 class="font-bold text-charcoal mb-2">Murabahah (Jual Beli)</h4>
                    <p class="text-sm text-charcoal/60 leading-relaxed">Bank membeli barang dan menjualnya kembali ke nasabah dengan margin keuntungan yang disekapati transparan.</p>
                </div>
                <div class="p-6 bg-white border border-charcoal/[0.06] rounded-2xl group hover:border-charcoal transition-all">
                    <h4 class="font-bold text-charcoal mb-2">Musyarakah (Kemitraan)</h4>
                    <p class="text-sm text-charcoal/60 leading-relaxed">Berbagi ekuitas, risiko, dan keuntungan. Sangat ideal untuk pendanaan UMKM produktif.</p>
                </div>
            </div>
        `,
        takeaway: "Ekonomi syariah tidak hanya soal larangan, tetapi tentang mendorong kemakmuran melalui sektor riil yang adil.",
        chartData: {
            labels: ['Tabungan', 'Pinjaman', 'Sukuk', 'Zakat/Wakaf'],
            data: [40, 35, 20, 5],
            label: 'Komposisi Aset Syariah (%)'
        }
    }
};

const renderMateri = (id) => {
    const data = materiData[id];
    const contentArea = document.getElementById('materi-content');
    if (!data || !contentArea) return;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });

    contentArea.innerHTML = `
        <div class="animate-fade-in">
            <div class="flex items-center gap-3 mb-8">
                <span class="inline-block px-4 py-1.5 bg-charcoal text-parchment text-[10px] font-mono uppercase tracking-widest rounded-full">
                    ${data.category}
                </span>
                <span class="text-[10px] font-mono font-bold text-mist uppercase tracking-widest">
                    • ${data.readTime} Baca
                </span>
            </div>
            
            <h1 class="font-display text-5xl md:text-6xl text-charcoal mb-12 leading-tight tracking-tight">${data.title}</h1>
            
            <div class="prose-custom">
                ${data.content}
            </div>

            <div class="my-16 bg-white border border-charcoal/[0.06] p-10 lg:p-12 rounded-[32px] group">
                <div class="flex items-center justify-between mb-8">
                    <h4 class="text-[10px] font-mono font-bold text-mist uppercase tracking-[0.3em]">Economic Data Visualization</h4>
                    <div class="w-1.5 h-1.5 rounded-full bg-charcoal animate-pulse"></div>
                </div>
                <div class="h-[350px]">
                    <canvas id="materiChart"></canvas>
                </div>
            </div>

            <div class="bg-charcoal text-parchment p-12 lg:p-16 rounded-[40px] mt-16 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-64 h-64 bg-bullion/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="h-[1px] w-12 bg-parchment/10"></div>
                        <h4 class="text-bullion font-mono font-bold text-[10px] uppercase tracking-[0.4em]">Editorial Conclusion</h4>
                    </div>
                    
                    <p class="text-2xl md:text-3xl font-serif italic leading-relaxed text-parchment/90 mb-0">
                        "${data.takeaway}"
                    </p>
                </div>
            </div>
        </div>
    `;

    // Initialize Icons in the newly injected content
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Initialize Chart
    const ctx = document.getElementById('materiChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.chartData.labels,
            datasets: [{
                label: data.chartData.label,
                data: data.chartData.data,
                backgroundColor: '#B8872A', // bullion
                borderRadius: 4,
                barThickness: 24
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    grid: { color: 'rgba(43, 43, 40, 0.05)', borderDash: [5, 5] },
                    ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#6E6E6A' }
                },
                x: { 
                    grid: { display: false },
                    ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#6E6E6A' }
                }
            }
        }
    });

    // Update Navigation
    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;
    const prevBtn = document.getElementById('prev-topic');
    const nextBtn = document.getElementById('next-topic');

    if (materiData[prevId]) {
        prevBtn.href = `?topic=${prevId}`;
        document.getElementById('prev-topic-title').textContent = materiData[prevId].title;
        prevBtn.classList.remove('invisible');
    } else {
        prevBtn.classList.add('invisible');
    }

    if (materiData[nextId]) {
        nextBtn.href = `?topic=${nextId}`;
        document.getElementById('next-topic-title').textContent = materiData[nextId].title;
        nextBtn.classList.remove('invisible');
    } else {
        nextBtn.classList.add('invisible');
    }
    
    // Refresh Icons for Nav
    if (window.lucide) {
        window.lucide.createIcons();
    }
};

// Handle Routing
const urlParams = new URLSearchParams(window.location.search);
const topicId = urlParams.get('topic') || 1;
renderMateri(topicId);
