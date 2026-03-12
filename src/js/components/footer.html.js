export function renderFooter({ basePath = "", pagePath = "src/pages/" } = {}) {
  return `
    <footer class="bg-white border-t border-slate-100 w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div class="md:col-span-3">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 bg-brand-green text-white flex items-center justify-center rounded-full font-serif font-bold text-lg">AN</div>
                        <span class="font-serif font-bold text-2xl text-brand-black">Artha<span class="text-brand-green">Navigate</span></span>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
                        Membangun literasi finansial untuk generasi yang lebih cerdas dalam mengelola kekayaan.
                    </p>
                    <div class="flex gap-3">
                        <a href="#" class="w-9 h-9 bg-slate-100 hover:bg-brand-green hover:text-white text-slate-500 rounded-full flex items-center justify-center transition-all text-xs font-bold">IG</a>
                        <a href="#" class="w-9 h-9 bg-slate-100 hover:bg-brand-green hover:text-white text-slate-500 rounded-full flex items-center justify-center transition-all text-xs font-bold">LI</a>
                        <a href="#" class="w-9 h-9 bg-slate-100 hover:bg-brand-green hover:text-white text-slate-500 rounded-full flex items-center justify-center transition-all text-xs font-bold">TW</a>
                    </div>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-brand-black font-bold text-xs uppercase tracking-widest mb-5">Jalur Belajar</h5>
                    <ul class="space-y-3 text-sm">
                        <li><a href="${pagePath}pemula.html" class="text-slate-500 hover:text-brand-green transition-colors">Pemula</a></li>
                        <li><a href="${pagePath}mahasiswa.html" class="text-slate-500 hover:text-brand-green transition-colors">Mahasiswa Ekonomi</a></li>
                        <li><a href="${pagePath}pengusaha.html" class="text-slate-500 hover:text-brand-green transition-colors">Pengusaha / UMKM</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-brand-black font-bold text-xs uppercase tracking-widest mb-5">Layanan</h5>
                    <ul class="space-y-3 text-sm">
                        <li><a href="${pagePath}stocks.html" class="text-slate-500 hover:text-brand-green transition-colors">Wawasan Saham</a></li>
                        <li><a href="${pagePath}news.html" class="text-slate-500 hover:text-brand-green transition-colors">Berita Ekonomi</a></li>
                        <li><a href="${basePath}index.html" class="text-slate-500 hover:text-brand-green transition-colors">Dashboard</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-brand-black font-bold text-xs uppercase tracking-widest mb-5">Fitur Inovatif</h5>
                    <ul class="space-y-3 text-sm">
                        <li><a href="${pagePath}eco-history.html" class="text-slate-500 hover:text-brand-green transition-colors">Eco-History Sync</a></li>
                        <li><a href="${pagePath}crisis-map.html" class="text-slate-500 hover:text-brand-green transition-colors">Crisis Survival Map</a></li>
                        <li><a href="${pagePath}value-converter.html" class="text-slate-500 hover:text-brand-green transition-colors">Value Converter</a></li>
                        <li><a href="${pagePath}mentor-ai.html" class="text-slate-500 hover:text-brand-green transition-colors">Mentor AI</a></li>
                    </ul>
                </div>
                <div class="md:col-span-3">
                    <h5 class="text-brand-black font-bold text-xs uppercase tracking-widest mb-5">Kontak</h5>
                    <p class="text-sm text-slate-500 leading-relaxed">editorial@arthanavigate.id<br />Jakarta, Indonesia</p>
                </div>
            </div>
            <div class="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-xs text-slate-400">&copy; 2026 ArthaNavigate. All rights reserved.</p>
                <p class="text-xs text-slate-400">Versi 5.0.0 — Innovation Edition</p>
            </div>
        </div>
    </footer>`;
}
