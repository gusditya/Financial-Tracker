import { initApp } from "../core/app-init.js";

// Initialize the app for this page
initApp({ activePage: "pemula", basePath: "../../", pagePath: "" });

const materiData = {
    1: {
        title: "Pahami Uang & Fungsinya",
        category: "Dasar Ekonomi",
        readTime: "5 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Uang bukan sekadar kertas atau angka di layar ponsel Anda. Secara fundamental, uang adalah alat yang memecahkan masalah <em>"Double Coincidence of Wants"</em> dalam sistem barter.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">Tiga Fungsi Utama Uang</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div class="bg-soft-pemula p-6 rounded-2xl border border-emerald-100/50 shadow-sm transition-all hover:shadow-md">
                    <div class="text-3xl mb-4">🔄</div>
                    <h4 class="font-bold mb-2">Alat Tukar</h4>
                    <p class="text-sm text-slate-500">Mempermudah transaksi barang dan jasa tanpa perlu mencari orang yang memiliki barang yang kita inginkan.</p>
                </div>
                <div class="bg-soft-pemula p-6 rounded-2xl border border-emerald-100/50 shadow-sm transition-all hover:shadow-md">
                    <div class="text-3xl mb-4">📏</div>
                    <h4 class="font-bold mb-2">Satuan Hitung</h4>
                    <p class="text-sm text-slate-500">Memberikan standar nilai yang jelas untuk membandingkan harga berbagai barang berbeda.</p>
                </div>
                <div class="bg-soft-pemula p-6 rounded-2xl border border-emerald-100/50 shadow-sm transition-all hover:shadow-md">
                    <div class="text-3xl mb-4">💰</div>
                    <h4 class="font-bold mb-2">Penyimpan Nilai</h4>
                    <p class="text-sm text-slate-500">Memungkinkan kita menunda konsumsi hari ini untuk digunakan di masa depan.</p>
                </div>
            </div>

            <div class="bg-soft-pemula p-8 rounded-3xl border border-emerald-200/40 my-10 backdrop-blur-sm">
                <h4 class="text-emerald-800 font-bold mb-3 italic">Pesan Utama:</h4>
                <p class="text-emerald-700 leading-relaxed font-serif">"Uang adalah pelayan yang baik, tetapi tuan yang buruk. Memahami cara kerja uang adalah langkah pertama untuk memastikan Anda yang mengendalikannya, bukan sebaliknya."</p>
            </div>
        `,
        takeaway: "Uang hanyalah alat. Fokuslah pada nilai yang Anda ciptakan, dan gunakan uang untuk menyimpan nilai tersebut secara efisien.",
        chartData: {
            labels: ['Barter', 'Commodity Money', 'Paper Money', 'Digital/Crypto'],
            data: [10, 30, 80, 95],
            label: 'Tingkat Efisiensi Transaksi (%)'
        }
    },
    2: {
        title: "Mengenal Inflasi & Deflasi",
        category: "Daya Beli",
        readTime: "7 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Pernahkah Anda bertanya mengapa harga semangkuk bakso sepuluh tahun lalu hanya Rp 5.000, tapi sekarang Rp 20.000? Itulah **Inflasi**.</p>
            
            <div class="bg-soft-pemula border border-emerald-100/50 rounded-3xl p-8 my-8 shadow-sm">
                <h4 class="font-bold text-xl mb-4 text-slate-800">Mengapa Inflasi Terjadi?</h4>
                <ul class="space-y-4">
                    <li class="flex gap-4">
                        <span class="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                        <div>
                            <strong class="block text-slate-800">Demand-Pull Inflation</strong>
                            <span class="text-slate-500 text-sm">Permintaan barang tinggi sementara stok terbatas, sehingga harga naik.</span>
                        </div>
                    </li>
                    <li class="flex gap-4">
                        <span class="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                        <div>
                            <strong class="block text-slate-800">Cost-Push Inflation</strong>
                            <span class="text-slate-500 text-sm">Biaya produksi (bahan baku, gaji, BBM) naik, memaksa produsen menaikkan harga jual.</span>
                        </div>
                    </li>
                </ul>
            </div>

            <p class="leading-relaxed">Inflasi yang sehat (sekitar 2-3%) menandakan ekonomi bertumbuh. Namun, bagi penabung, inflasi adalah 'pencuri senyap' yang menggerus nilai uang Anda jika hanya didiamkan.</p>
        `,
        takeaway: "Investasi minimal harus setara dengan tingkat inflasi agar daya beli Anda tidak berkurang di masa depan.",
        chartData: {
            labels: ['2021', '2022', '2023', '2024', '2025 (Proj)'],
            data: [1.87, 5.51, 2.61, 2.80, 2.87],
            label: 'Laju Inflasi Tahunan Indonesia (%)'
        }
    },
    3: {
        title: "Buat Anggaran Pertama Anda",
        category: "Manajemen Kas",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Tanpa rencana, uang Anda akan mengalir ke tempat yang tidak Anda sadari. Budgeting adalah cara memberi tahu uang Anda ke mana harus pergi, bukan bertanya ke mana ia pergi.</p>
            
            <h3 class="text-2xl font-bold mb-6">Metode Hero: 50/30/20</h3>
            <div class="space-y-4 mb-8">
                <div class="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl">
                    <div class="w-16 h-16 bg-brand-green text-white rounded-xl flex items-center justify-center font-bold text-xl font-serif">50%</div>
                    <div>
                        <h4 class="font-bold">Needs (Kebutuhan)</h4>
                        <p class="text-sm text-slate-500">Makan, sewa kos, transportasi, tagihan listrik, paket data minimal.</p>
                    </div>
                </div>
                <div class="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl">
                    <div class="w-16 h-16 bg-amber-400 text-white rounded-xl flex items-center justify-center font-bold text-xl font-serif">30%</div>
                    <div>
                        <h4 class="font-bold">Wants (Keinginan)</h4>
                        <p class="text-sm text-slate-500">Kopi kekinian, nonton bioskop, langganan Netflix, hobi.</p>
                    </div>
                </div>
                <div class="flex items-center gap-6 p-4 bg-slate-50 rounded-2xl">
                    <div class="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-xl font-serif">20%</div>
                    <div>
                        <h4 class="font-bold">Savings & Debt (Masa Depan)</h4>
                        <p class="text-sm text-slate-500">Dana darurat, investasi reksadana, cicilan utang.</p>
                    </div>
                </div>
            </div>
        `,
        takeaway: "Konsistensi lebih penting daripada jumlah. Mulailah mencatat setiap pengeluaran, sekecil apapun itu.",
        chartData: {
            labels: ['Kebutuhan', 'Keinginan', 'Tabungan'],
            data: [50, 30, 20],
            label: 'Alokasi Budget (%)'
        }
    },
    4: {
        title: "Bangun Dana Darurat",
        category: "Proteksi",
        readTime: "6 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Dana darurat adalah satu-satunya hal yang memisahkan Anda dari bencana finansial saat laptop rusak, sakit mendadak, atau kehilangan pekerjaan.</p>
            
            <div class="bg-brand-cream border-2 border-dashed border-emerald-200 rounded-3xl p-8 my-8">
                <h4 class="font-bold mb-4">Berapa yang Anda Butuhkan?</h4>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="text-center">
                        <div class="text-sm text-slate-400 uppercase tracking-widest mb-1">Single</div>
                        <div class="text-2xl font-bold text-brand-green">3 Bulan</div>
                        <div class="text-[10px] text-slate-500">Pengeluaran</div>
                    </div>
                    <div class="text-center">
                        <div class="text-sm text-slate-400 uppercase tracking-widest mb-1">Menikah</div>
                        <div class="text-2xl font-bold text-brand-green">6 Bulan</div>
                        <div class="text-[10px] text-slate-500">Pengeluaran</div>
                    </div>
                    <div class="text-center">
                        <div class="text-sm text-slate-400 uppercase tracking-widest mb-1">Freelance</div>
                        <div class="text-2xl font-bold text-brand-green">12 Bulan</div>
                        <div class="text-[10px] text-slate-500">Pengeluaran</div>
                    </div>
                </div>
            </div>
            
            <p class="leading-relaxed">Simpan dana ini di tempat yang **aman** dan **likuid** (mudah dicairkan), bukan di bawah bantal atau di aset berisiko tinggi seperti saham gorengan.</p>
        `,
        takeaway: "Jangan berinvestasi sebelum dana darurat terkumpul minimal untuk 3 bulan pengeluaran.",
        chartData: {
            labels: ['Dana Darurat', 'Investasi Saham', 'Crypto', 'Gadget Baru'],
            data: [100, 20, 10, 5],
            label: 'Prioritas Alokasi (%)'
        }
    },
    5: {
        title: "Kenali Produk Perbankan",
        category: "Instrumen",
        readTime: "8 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Bank bukan cuma tempat narik uang di ATM. Memahami produk perbankan membantu Anda memarkir uang di tempat yang paling menguntungkan.</p>
            
            <div class="overflow-hidden rounded-2xl border border-slate-200 mt-8 mb-10">
                <table class="w-full text-sm">
                    <thead class="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th class="px-6 py-4 text-left font-bold">Produk</th>
                            <th class="px-6 py-4 text-left font-bold">Likuiditas</th>
                            <th class="px-6 py-4 text-left font-bold">Imbal Hasil</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr>
                            <td class="px-6 py-4 font-medium">Tabungan Biasa</td>
                            <td class="px-6 py-4 text-emerald-600">Sangat Tinggi</td>
                            <td class="px-6 py-4">Sangat Rendah (0-1%)</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-medium">Deposito</td>
                            <td class="px-6 py-4 text-amber-600">Rendah</td>
                            <td class="px-6 py-4">Menengah (3-5%)</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-medium">Giro</td>
                            <td class="px-6 py-4 text-emerald-600">Sangat Tinggi</td>
                            <td class="px-6 py-4">Hampir Nol</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,
        takeaway: "Gunakan tabungan untuk operasional, deposito untuk dana yang tidak dipakai dalam 3-12 bulan.",
        chartData: {
            labels: ['Tabungan', 'Deposito', 'RDPU (Alternatif)'],
            data: [0.5, 4.2, 5.5],
            label: 'Estimasi Bunga p.a (%)'
        }
    },
    6: {
        title: "Dasar-Dasar Investasi",
        category: "Wealth Building",
        readTime: "12 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Investasi adalah cara memaksa uang Anda bekerja keras untuk Anda. Dua konsep terpenting: **Risk vs Return** dan **Diversifikasi**.</p>
            
            <h4 class="font-bold text-xl mb-4">Tangga Investasi Pemula</h4>
            <div class="flex flex-col gap-3 mb-8">
                <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 flex justify-between items-center">
                    <span>1. Reksadana Pasar Uang</span>
                    <span class="text-[10px] font-bold bg-emerald-100 px-2 py-1 rounded">RISIKO RENDAH</span>
                </div>
                <div class="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 flex justify-between items-center">
                    <span>2. Obligasi / SBN</span>
                    <span class="text-[10px] font-bold bg-blue-100 px-2 py-1 rounded">RISIKO MENENGAH</span>
                </div>
                <div class="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500 flex justify-between items-center">
                    <span>3. Reksadana Saham / ETF</span>
                    <span class="text-[10px] font-bold bg-amber-100 px-2 py-1 rounded">RISIKO TINGGI</span>
                </div>
            </div>
        `,
        takeaway: "Jangan taruh semua telur dalam satu keranjang. Diversifikasi adalah satu-satunya 'makan siang gratis' di dunia keuangan.",
        chartData: {
            labels: ['Pasar Uang', 'Obligasi', 'Saham', 'Crypto'],
            data: [5, 8, 12, 50],
            label: 'Potensi Return p.a (%)'
        }
    },
    7: {
        title: "Pahami Pajak & Kewajiban",
        category: "Legalitas",
        readTime: "9 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Seorang warga negara yang cerdas secara finansial juga paham kewajibannya terhadap negara. Pajak bukan untuk ditakuti, tapi untuk dikelola.</p>
            
            <div class="bg-white border border-slate-200 rounded-3xl p-8 my-8">
                <h4 class="font-bold text-xl mb-6">Pajak Investasi di Indonesia</h4>
                <div class="space-y-4">
                    <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                        <span class="font-medium">Saham</span>
                        <span class="text-slate-500">0.1% (Final saat jual)</span>
                    </div>
                    <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                        <span class="font-medium">Deposito</span>
                        <span class="text-slate-500">20% (Dari bunga)</span>
                    </div>
                    <div class="flex justify-between items-center pb-3 border-b border-slate-100">
                        <span class="font-medium">Reksadana</span>
                        <span class="text-emerald-600 font-bold">0% (Bukan objek pajak)</span>
                    </div>
                </div>
            </div>
        `,
        takeaway: "Selalu sertakan aspek pajak saat menghitung potensi return bersih investasi Anda.",
        chartData: {
            labels: ['Gaji Bruto', 'Pajak (PPh)', 'Take Home Pay'],
            data: [100, 5, 95],
            label: 'Proporsi Pendapatan (Contoh)'
        }
    },
    8: {
        title: "Buat Rencana Jangka Panjang",
        category: "Vision",
        readTime: "11 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Financial Freedom bukan tentang memiliki banyak uang, tapi tentang memiliki banyak pilihan. Pilihan itu dibangun dengan rencana yang matang.</p>
            
            <div class="bg-slate-900 text-white p-8 rounded-3xl my-10">
                <h4 class="text-amber-400 font-bold mb-4">Kekuatan Compound Interest</h4>
                <p class="text-slate-300 italic mb-6">"Bunga berbunga adalah keajaiban dunia kedelapan. Dia yang memahaminya, akan mendapatkannya. Dia yang tidak, akan membayarnya."</p>
                <div class="bg-white/10 p-4 rounded-xl border border-white/20">
                    <p class="text-sm">Tabungan Rp 1jt/bln selama 20 thn (return 10%):</p>
                    <p class="text-3xl font-bold text-white mt-2">Rp 759.000.000+</p>
                </div>
            </div>
        `,
        takeaway: "Waktu adalah aset terbesar Anda. Mulailah hari ini, meskipun dengan jumlah yang sangat kecil.",
        chartData: {
            labels: ['Tahun 1', 'Tahun 10', 'Tahun 20', 'Tahun 30'],
            data: [12, 200, 759, 2200],
            label: 'Pertumbuhan Aset (Juta Rp)'
        }
    },
    9: {
        title: "Asuransi & Perlindungan Finansial",
        category: "Proteksi",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Asuransi adalah cara kita mentransfer risiko yang tidak sanggup kita tanggung sendiri kepada pihak lain.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div class="p-6 bg-white rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-3 text-brand-green">Asuransi Kesehatan</h4>
                    <p class="text-sm text-slate-500">Wajib dimiliki (minimal BPJS). Melindungi tabungan dari biaya rumah sakit yang bisa meledak kapan saja.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-3 text-brand-green">Asuransi Jiwa</h4>
                    <p class="text-sm text-slate-500">Penting jika Anda sudah memiliki tanggungan (istri, anak, orang tua) yang bergantung pada pendapatan Anda.</p>
                </div>
            </div>
            
            <p class="text-slate-600 italic">Hindari asuransi yang digabung dengan investasi (unit-link) jika Anda ingin biaya yang lebih efisien dan perlindungan yang lebih maksimal.</p>
        `,
        takeaway: "Prioritaskan asuransi kesehatan sebagai pertahanan pertama sebelum aset Anda berkembang lebih besar.",
        chartData: {
            labels: ['Rawat Inap', 'Operasi', 'Obat-obatan', 'Limit BPJS'],
            data: [40, 100, 30, 170],
            label: 'Estimasi Biaya vs Proteksi (%)'
        }
    },
    10: {
        title: "Fintech & Keamanan Digital",
        category: "Teknologi",
        readTime: "8 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Di era digital, kenyamanan bertransaksi datang dengan risiko keamanan yang juga baru. Melek fintech berarti tahu cara memakainya tanpa tertipu.</p>
            
            <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 my-8">
                <h4 class="font-bold text-amber-800 mb-4">5 Aturan Emas Keamanan Digital</h4>
                <ul class="text-sm text-amber-900 space-y-2">
                    <li>❌ Jangan pernah membagikan OTP kepada siapapun.</li>
                    <li>✅ Gunakan Two-Factor Authentication (2FA) di semua akun.</li>
                    <li>❌ Hindari bertransaksi di WiFi publik tanpa VPN.</li>
                    <li>✅ Cek legalitas pinjaman online di website resmi OJK.</li>
                    <li>❌ Ganti password secara berkala dengan kombinasi yang kuat.</li>
                </ul>
            </div>
        `,
        takeaway: "Kenyamanaan tidak boleh mengorbankan keamanan. Selalu waspada terhadap penipuan berbasis social engineering.",
        chartData: {
            labels: ['E-Wallet', 'Bank Digital', 'P2P Lending', 'Investment App'],
            data: [85, 40, 15, 25],
            label: 'Tingkat Adopsi Fintech (%)'
        }
    }
};

const renderMateri = (id) => {
    const data = materiData[id];
    const contentArea = document.getElementById('materi-content');
    if (!data || !contentArea) return;

    contentArea.innerHTML = `
        <div class="animate-fade-in max-w-4xl mx-auto">
            <div class="flex items-center gap-3 mb-8">
                <span class="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100/50">
                    ${data.category}
                </span>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    • ${data.readTime} Baca
                </span>
            </div>
            
            <h1 class="font-serif text-5xl md:text-6xl text-slate-900 mb-12 leading-tight font-bold">${data.title}</h1>
            
            <div class="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
                ${data.content}
            </div>

            <div class="my-16 harbor-card bg-emerald-500/[0.02] border border-emerald-500/10 p-10 lg:p-12 group">
                <div class="flex items-center justify-between mb-8">
                    <h4 class="text-xs font-bold text-emerald-600/40 uppercase tracking-[0.3em]">Market Insight Visualization</h4>
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div class="h-[350px]">
                    <canvas id="materiChart"></canvas>
                </div>
            </div>

            <div class="bg-slate-950 text-white p-12 lg:p-16 rounded-[40px] mt-16 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="h-[1px] w-12 bg-emerald-500/30"></div>
                        <h4 class="text-emerald-400 font-bold text-[10px] uppercase tracking-[0.4em]">Strategic Takeaway</h4>
                    </div>
                    
                    <p class="text-2xl md:text-3xl font-serif italic leading-relaxed text-slate-100 mb-0">
                        "${data.takeaway}"
                    </p>
                </div>
            </div>
        </div>
    `;

    // Initialize Chart
    const ctx = document.getElementById('materiChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.chartData.labels,
            datasets: [{
                label: data.chartData.label,
                data: data.chartData.data,
                backgroundColor: '#1E7B55',
                borderRadius: 8,
                barThickness: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { borderDash: [5, 5] } },
                x: { grid: { display: false } }
            }
        }
    });

    // Update Navigation
    const prevId = parseInt(id) - 1;
    const nextId = parseInt(id) + 1;
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
};

// Handle Routing
const urlParams = new URLSearchParams(window.location.search);
const topicId = urlParams.get('topic') || 1;
renderMateri(topicId);
