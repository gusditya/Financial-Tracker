import { initApp } from "../core/app-init.js";

// Initialize the app for this page
initApp({ activePage: "mahasiswa", basePath: "../../", pagePath: "" });

const materiData = {
    1: {
        title: "PDB (Produk Domestik Bruto)",
        category: "Ekonomi Makro",
        readTime: "8 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">PDB adalah nilai pasar semua barang dan jasa akhir yang diproduksi dalam suatu negara pada periode tertentu. Ini adalah indikator utama untuk mengukur ukuran dan kesehatan ekonomi suatu negara.</p>
            
            <h3 class="text-2xl font-bold mb-4 mt-8">Metode Penghitungan PDB</h3>
            <div class="space-y-4 my-8">
                <div class="p-6 bg-soft-mahasiswa rounded-2xl border border-blue-100/50 shadow-sm flex gap-6 transition-all hover:shadow-md">
                    <div class="text-3xl">🏗️</div>
                    <div>
                        <h4 class="font-bold mb-1">Pendekatan Produksi</h4>
                        <p class="text-sm text-slate-500">Menjumlahkan nilai tambah dari setiap tahap produksi di seluruh industri.</p>
                    </div>
                </div>
                <div class="p-6 bg-soft-mahasiswa rounded-2xl border border-blue-100/50 shadow-sm flex gap-6 transition-all hover:shadow-md">
                    <div class="text-3xl">💸</div>
                    <div>
                        <h4 class="font-bold mb-1">Pendekatan Pengeluaran</h4>
                        <p class="text-sm text-slate-500">Y = C + I + G + (X - M). Menghitung total belanja rumah tangga, investasi, pemerintah, dan ekspor neto.</p>
                    </div>
                </div>
                <div class="p-6 bg-soft-mahasiswa rounded-2xl border border-blue-100/50 shadow-sm flex gap-6 transition-all hover:shadow-md">
                    <div class="text-3xl">🏦</div>
                    <div>
                        <h4 class="font-bold mb-1">Pendekatan Pendapatan</h4>
                        <p class="text-sm text-slate-500">Menjumlahkan total pendapatan yang diterima oleh faktor-faktor produksi (upah, sewa, bunga, laba).</p>
                    </div>
                </div>
            </div>
        `,
        takeaway: "PDB nominal vs PDB riil: Selalu gunakan PDB riil untuk membandingkan pertumbuhan ekonomi antar tahun agar tidak bias oleh inflasi.",
        chartData: {
            labels: ['2021', '2022', '2023', '2024', '2025 (Proj)'],
            data: [3.70, 5.31, 5.05, 5.01, 5.20],
            label: 'Pertumbuhan PDB RI (%)'
        }
    },
    2: {
        title: "Kebijakan Moneter BI",
        category: "Kebijakan Publik",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Kebijakan moneter adalah langkah-langkah yang diambil bank sentral (Bank Indonesia) untuk mempengaruhi jumlah uang beredar dan suku bunga demi mencapai kestabilan nilai Rupiah.</p>
            
            <div class="bg-blue-900 text-white p-8 rounded-3xl my-8">
                <h4 class="text-blue-300 font-bold mb-4 uppercase tracking-widest text-xs">Mandat Tunggal BI</h4>
                <p class="text-xl font-serif">"Mencapai dan memelihara kestabilan nilai Rupiah terhadap barang/jasa (inflasi) dan terhadap mata uang asing (kurs)."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4 font-serif">Instrumen Utama</h3>
            <ul class="space-y-4">
                <li class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p><strong class="text-slate-800">Suku Bunga Acuan (BI-Rate):</strong> Menaikkan suku bunga untuk meredam inflasi, menurunkan untuk mendorong pertumbuhan.</p>
                </li>
                <li class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p><strong class="text-slate-800">Giro Wajib Minimum (GWM):</strong> Cadangan minimum yang harus disimpan bank umum di BI.</p>
                </li>
                <li class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p><strong class="text-slate-800">Operasi Pasar Terbuka:</strong> Menjual atau membeli surat berharga untuk mengatur likuiditas pasar.</p>
                </li>
            </ul>
        `,
        takeaway: "Suku bunga naik -> Pinjaman mahal -> Konsumsi turun -> Inflasi terkendali. Ini adalah mekanisme 'rem' ekonomi.",
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
            <p class="text-lg leading-relaxed mb-6">Bagaimana sebuah negara berinteraksi dengan dunia luar tercatat dalam Neraca Pembayaran. Ini menentukan apakah mata uang kita menguat atau melemah.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-2">Current Account</h4>
                    <p class="text-xs text-slate-500 tracking-wide uppercase mb-3">Transaksi Berjalan</p>
                    <p class="text-sm">Mencatat ekspor-impor barang & jasa. Jika Ekspor > Impor, maka terjadi **Surplus**.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-2">Financial Account</h4>
                    <p class="text-xs text-slate-500 tracking-wide uppercase mb-3">Transaksi Finansial</p>
                    <p class="text-sm">Mencatat aliran modal masuk (investasi asing/FDI) dan keluar (investasi ke luar negeri).</p>
                </div>
            </div>

            <p class="leading-relaxed">Nilai tukar (Kurs) adalah 'harga' mata uang kita. Saat dunia butuh barang kita (ekspor naik) atau yakin pada ekonomi kita (investasi masuk), permintaan Rupiah naik, maka Rupiah menguat.</p>
        `,
        takeaway: "Kurs bukan sekadar angka, tapi cerminan daya tangguh ekonomi sebuah bangsa di mata global.",
        chartData: {
            labels: ['2021', '2022', '2023', '2024'],
            data: [14250, 15570, 15400, 15900],
            label: 'Rata-rata USD/IDR'
        }
    },
    4: {
        title: "Inflasi & Pengangguran",
        category: "Stabilitas Ekonomi",
        readTime: "12 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Dua 'monster' ekonomi yang paling ditakuti adalah inflasi yang tidak terkendali dan pengangguran yang tinggi. Keduanya memiliki hubungan unik yang sering digambarkan dalam Kurva Phillips.</p>
            
            <div class="bg-amber-50 border border-amber-200 p-8 rounded-3xl my-8">
                <h4 class="font-bold mb-4 text-amber-900">Kurva Phillips (Jangka Pendek)</h4>
                <p class="text-sm text-amber-800 leading-relaxed italic">"Terdapat hubungan terbalik antara tingkat inflasi dan pengangguran. Saat ekonomi memanas (inflasi naik), pengangguran cenderung turun karena perusahaan banyak merekrut."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4">Jenis-Jenis Pengangguran</h3>
            <div class="space-y-3">
                <div class="flex justify-between p-4 bg-soft-mahasiswa border border-blue-100/30 rounded-xl">
                    <span class="font-medium">Friksional</span>
                    <span class="text-xs text-slate-400">Peralihan antar pekerjaan</span>
                </div>
                <div class="flex justify-between p-4 bg-soft-mahasiswa border border-blue-100/30 rounded-xl">
                    <span class="font-medium">Struktural</span>
                    <span class="text-xs text-slate-400">Ketidakcocokan skill & permintaan</span>
                </div>
                <div class="flex justify-between p-4 bg-soft-mahasiswa border border-blue-100/30 rounded-xl">
                    <span class="font-medium">Siklikal</span>
                    <span class="text-xs text-slate-400">Terjadi saat resesi/kontraksi</span>
                </div>
            </div>
        `,
        takeaway: "Stabilitas harga sangat penting karena inflasi tinggi bertindak sebagai pajak regresif yang memukul masyarakat miskin paling keras.",
        chartData: {
            labels: ['SD', 'SMP', 'SMA', 'SMK', 'Diploma', 'Sarjana'],
            data: [2.32, 4.20, 6.70, 8.42, 5.10, 6.23],
            label: 'Tingkat Pengangguran Terbuka (%)'
        }
    },
    5: {
        title: "Hukum Permintaan & Penawaran",
        category: "Ekonomi Mikro",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Permintaan dan Penawaran adalah tulang punggung dari analisis ekonomi mikro. Keduanya berinteraksi di pasar untuk membentuk harga keseimbangan (equilibrium).</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div class="border-t-4 border-blue-500 pt-6">
                    <h4 class="font-bold text-xl mb-3">Law of Demand</h4>
                    <p class="text-sm text-slate-500 italic">P↑ -> Q↓ (Ceteris Paribus)</p>
                    <p class="text-sm mt-3">Saat harga naik, jumlah barang yang diminta akan turun karena efek substitusi dan efek pendapatan.</p>
                </div>
                <div class="border-t-4 border-emerald-500 pt-6">
                    <h4 class="font-bold text-xl mb-3">Law of Supply</h4>
                    <p class="text-sm text-slate-500 italic">P↑ -> Q↑ (Ceteris Paribus)</p>
                    <p class="text-sm mt-3">Saat harga naik, produsen termotivasi untuk menambah jumlah barang yang dipasarkan demi keuntungan maksimal.</p>
                </div>
            </div>
        `,
        takeaway: "Harga adalah sinyal. Harga yang tinggi memberikan sinyal kepada produsen untuk memproduksi lebih banyak dan bagi konsumen untuk mengonsumsi lebih sedikit.",
        chartData: {
            labels: ['Harga 10k', 'Harga 20k', 'Harga 30k', 'Harga 40k', 'Harga 50k'],
            data: [100, 80, 60, 40, 20],
            label: 'Kurva Permintaan (Unit)'
        }
    },
    6: {
        title: "Elastisitas Harga",
        category: "Analisis Pasar",
        readTime: "11 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Elastisitas mengukur seberapa sensitif konsumen atau produsen terhadap perubahan harga. Ini sangat krusial bagi perusahaan dalam menentukan strategi harga.</p>
            
            <div class="overflow-hidden rounded-2xl border border-slate-200 my-8">
                <div class="bg-slate-50 p-4 border-b border-slate-200 font-bold text-center">Spektrum Elastisitas</div>
                <div class="p-6 space-y-4">
                    <div class="flex justify-between items-center text-sm">
                        <span class="font-bold">Inelastis (|E| < 1)</span>
                        <span class="text-slate-500">Kebutuhan Pokok (Beras, BBM, Garam)</span>
                    </div>
                    <div class="w-full bg-slate-100 h-2 rounded-full"><div class="bg-red-500 h-full w-1/4 rounded-full"></div></div>
                    
                    <div class="flex justify-between items-center text-sm">
                        <span class="font-bold">Elastis (|E| > 1)</span>
                        <span class="text-slate-500">Barang Tersier (Emas, Mobil Mewah)</span>
                    </div>
                    <div class="w-full bg-slate-100 h-2 rounded-full"><div class="bg-emerald-500 h-full w-3/4 rounded-full"></div></div>
                </div>
            </div>
        `,
        takeaway: "Total Revenue akan naik jika harga dinaikkan pada barang inelastis, dan sebaliknya pada barang elastis.",
        chartData: {
            labels: ['Barang A (Inelastis)', 'Barang B (Elastis)'],
            data: [0.4, 1.8],
            label: 'Koefisien Elastisitas Harga'
        }
    },
    7: {
        title: "Biaya Produksi & Optimasi",
        category: "Teori Perusahaan",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Memahami biaya produksi adalah kunci bagi perusahaan untuk menentukan titik di mana mereka harus berhenti memproduksi demi laba maksimal.</p>
            
            <div class="space-y-4 my-8">
                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h4 class="font-bold mb-2">Fixed Cost (Biaya Tetap)</h4>
                    <p class="text-sm text-slate-500">Biaya yang tidak berubah berapapun jumlah produksi (contoh: sewa gedung, gaji manajer).</p>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <h4 class="font-bold mb-2">Variable Cost (Biaya Variabel)</h4>
                    <p class="text-sm text-slate-500">Biaya yang berubah seiring jumlah produksi (contoh: bahan baku, listrik pabrik).</p>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-blue-50 shadow-sm">
                    <h4 class="font-bold mb-2 text-blue-600">Marginal Cost (MC)</h4>
                    <p class="text-sm text-slate-500 font-serif">Kenaikan total biaya akibat memproduksi satu unit tambahan. Rumus: MC = ΔTC / ΔQ.</p>
                </div>
            </div>

            <p class="leading-relaxed italic">Prinsip Emas: Laba maksimal tercapai saat Marginal Revenue (MR) sama dengan Marginal Cost (MC).</p>
        `,
        takeaway: "Setiap unit tambahan yang diproduksi harus memberikan pendapatan yang lebih besar atau sama dengan biaya produksinya.",
        chartData: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            data: [50, 35, 30, 45, 70],
            label: 'Marginal Cost Curve (Rp/unit)'
        }
    },
    8: {
        title: "Teori Perilaku Konsumen",
        category: "Analisis Mikro",
        readTime: "9 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Konsumen selalu berusaha mendapatkan kepuasan (utilitas) maksimal dengan keterbatasan anggaran yang mereka miliki.</p>
            
            <div class="bg-blue-50 p-8 rounded-3xl border border-blue-100 my-8">
                <h4 class="font-bold text-blue-800 mb-4">The Law of Diminishing Marginal Utility</h4>
                <p class="text-sm text-blue-700 leading-relaxed italic">"Semakin banyak Anda mengonsumsi barang yang sama, tambahan kepuasan (Marginal Utility) yang Anda dapatkan dari setiap unit tambahan akan terus menurun."</p>
            </div>

            <h3 class="text-2xl font-bold mb-4">Alat Analisis</h3>
            <ul class="space-y-4">
                <li class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p><strong class="text-slate-800">Indifference Curve:</strong> Kurva yang menunjukkan kombinasi dua barang yang memberikan tingkat kepuasan yang sama.</p>
                </li>
                <li class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <p><strong class="text-slate-800">Budget Line:</strong> Garis yang menunjukkan batasan kombinasi barang yang sanggup dibeli konsumen sesuai anggarannya.</p>
                </li>
            </ul>
        `,
        takeaway: "Kepuasan maksimal (Equilibrium) tercapai saat kurva indiferen bersinggungan dengan garis anggaran.",
        chartData: {
            labels: ['Barang 1', 'Barang 2', 'Barang 3', 'Barang 4'],
            data: [100, 80, 50, 20],
            label: 'Marginal Utility'
        }
    },
    9: {
        title: "Ekonomi Syariah & Perbankan Islam",
        category: "Sistem Ekonomi",
        readTime: "10 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Sistem ekonomi syariah bukan sekadar tanpa bunga, tapi tentang keadilan, transparansi, dan pembagian risiko antara pemilik modal dan pengusaha.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div class="p-6 bg-white rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-3 text-blue-600">Mudharabah</h4>
                    <p class="text-sm text-slate-500">Akad kerja sama di mana satu pihak menyediakan seluruh modal dan pihak lain menjadi pengelola dengan nisbah bagi hasil yang disepakati.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl border border-slate-200">
                    <h4 class="font-bold mb-3 text-blue-600">Musyarakah</h4>
                    <p class="text-sm text-slate-500">Akad kerja sama di mana masing-masing pihak berkontribusi modal dan berbagi keuntungan serta risiko sesuai porsi modal/kesepakatan.</p>
                </div>
            </div>
            
            <p class="text-slate-600 italic">Prinsip utama: Larangan Riba (bunga), Gharar (ketidakpastian), dan Maysir (perjudian/spekulasi berlebih).</p>
        `,
        takeaway: "Ekonomi syariah mendorong sektor riil melalui kemitraan yang adil dan berorientasi pada kemaslahatan bersama.",
        chartData: {
            labels: ['Bank Konvensional', 'Bank Syariah'],
            data: [92, 8],
            label: 'Market Share di Indonesia (%)'
        }
    },
    10: {
        title: "Ekonomi Internasional & Globalisasi",
        category: "Globalisasi",
        readTime: "12 Menit",
        content: `
            <p class="text-lg leading-relaxed mb-6">Tidak ada negara yang bisa benar-benar mandiri. Perdagangan internasional memungkinkan setiap negara fokus pada apa yang paling efisien mereka produksi.</p>
            
            <div class="bg-slate-900 text-white p-8 rounded-3xl my-10">
                <h4 class="text-blue-300 font-bold mb-4">Teori Keunggulan Komparatif</h4>
                <p class="text-slate-200 leading-relaxed">David Ricardo membuktikan bahwa perdagangan akan menguntungkan kedua belah pihak jika masing-masing negara mengekspor barang yang biaya peluangnya (opportunity cost) lebih rendah.</p>
            </div>
            
            <h3 class="text-2xl font-bold mb-4">Kebijakan Perdagangan</h3>
            <ul class="space-y-3">
                <li class="flex justify-between p-4 bg-white border border-slate-100 rounded-xl">
                    <span class="font-medium">Tarif</span>
                    <span class="text-xs text-slate-400">Pajak atas barang impor</span>
                </li>
                <li class="flex justify-between p-4 bg-white border border-slate-100 rounded-xl">
                    <span class="font-medium">Kuota</span>
                    <span class="text-xs text-slate-400">Pembatasan jumlah barang impor</span>
                </li>
                <li class="flex justify-between p-4 bg-white border border-slate-100 rounded-xl">
                    <span class="font-medium">Subsidi Ekspor</span>
                    <span class="text-xs text-slate-400">Bantuan pemerintah untuk eksportir</span>
                </li>
            </ul>
        `,
        takeaway: "Proteksionisme mungkin melindungi industri dalam negeri dalam jangka pendek, namun seringkali merugikan konsumen dalam jangka panjang.",
        chartData: {
            labels: ['Komoditas', 'Manufaktur', 'Jasa', 'Teknologi'],
            data: [45, 35, 15, 5],
            label: 'Struktur Ekspor Indonesia (%)'
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
                <span class="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-blue-100/50">
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

            <div class="my-16 harbor-card bg-blue-500/[0.02] border border-blue-500/10 p-10 lg:p-12 group">
                <div class="flex items-center justify-between mb-8">
                    <h4 class="text-xs font-bold text-blue-600/40 uppercase tracking-[0.3em] Economic Insight Visualization</h4>
                    <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
                <div class="h-[350px]">
                    <canvas id="materiChart"></canvas>
                </div>
            </div>

            <div class="bg-slate-950 text-white p-12 lg:p-16 rounded-[40px] mt-16 relative overflow-hidden shadow-2xl">
                <div class="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>
                
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="h-[1px] w-12 bg-blue-500/30"></div>
                        <h4 class="text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em]">Strategic Conclusion</h4>
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
                backgroundColor: '#2563EB',
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
