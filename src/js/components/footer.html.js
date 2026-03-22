export function renderFooter({ basePath = "", pagePath = "src/pages/" } = {}) {
  return `
    <footer class="bg-parchment border-t border-charcoal/5 w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                <div class="md:col-span-4">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="w-12 h-12 bg-charcoal text-white flex items-center justify-center rounded-2xl font-serif font-black text-xl shadow-lg">AN</div>
                        <span class="font-serif font-medium text-2xl text-charcoal">ArthaNavigate</span>
                    </div>
                    <p class="text-[15px] text-charcoal/60 leading-relaxed mb-10 max-w-sm font-light">
                        Membangun literasi finansial strategis untuk generasi yang lebih cerdas dalam menavigasi kekayaan dan ekonomi global.
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="w-10 h-10 bg-charcoal/5 hover:bg-bullion hover:text-white text-charcoal/60 rounded-full flex items-center justify-center transition-all duration-300 text-[10px] font-bold">IG</a>
                        <a href="#" class="w-10 h-10 bg-charcoal/5 hover:bg-bullion hover:text-white text-charcoal/60 rounded-full flex items-center justify-center transition-all duration-300 text-[10px] font-bold">LI</a>
                        <a href="#" class="w-10 h-10 bg-charcoal/5 hover:bg-bullion hover:text-white text-charcoal/60 rounded-full flex items-center justify-center transition-all duration-300 text-[10px] font-bold">TW</a>
                    </div>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Navigasi</h5>
                    <ul class="space-y-4 text-sm font-light">
                        <li><a href="${pagePath}pemula.html" class="text-charcoal/60 hover:text-bullion transition-colors">Pemula</a></li>
                        <li><a href="${pagePath}mahasiswa.html" class="text-charcoal/60 hover:text-bullion transition-colors">Mahasiswa</a></li>
                        <li><a href="${pagePath}pengusaha.html" class="text-charcoal/60 hover:text-bullion transition-colors">Pengusaha</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Wawasan</h5>
                    <ul class="space-y-4 text-sm font-light">
                        <li><a href="${pagePath}stocks.html" class="text-charcoal/60 hover:text-bullion transition-colors">Bursa Saham</a></li>
                        <li><a href="${pagePath}news.html" class="text-charcoal/60 hover:text-bullion transition-colors">Warta Ekonomi</a></li>
                        <li><a href="${basePath}index.html" class="text-charcoal/60 hover:text-bullion transition-colors">Dashboard</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Instrumen</h5>
                    <ul class="space-y-4 text-sm font-light">
                        <li><a href="${pagePath}eco-history.html" class="text-charcoal/60 hover:text-bullion transition-colors">Eco-History</a></li>
                        <li><a href="${pagePath}crisis-map.html" class="text-charcoal/60 hover:text-bullion transition-colors">Crisis Map</a></li>
                        <li><a href="${pagePath}mentor-ai.html" class="text-charcoal/60 hover:text-bullion transition-colors">Mentor AI</a></li>
                    </ul>
                </div>
                <div class="md:col-span-2">
                    <h5 class="text-charcoal font-bold text-[10px] uppercase tracking-[0.2em] mb-8">Kontak</h5>
                    <p class="text-sm text-charcoal/60 leading-relaxed font-light">editorial@arthanavigate.id<br />Jakarta, Indonesia</p>
                </div>
            </div>
            <div class="mt-24 pt-10 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p class="text-[10px] text-charcoal/40 font-bold uppercase tracking-[0.1em]">&copy; 2026 ArthaNavigate. All rights reserved.</p>
                <p class="text-[10px] text-charcoal/40 font-bold uppercase tracking-[0.1em]">Versi 5.2.0 — Legacy Modernization</p>
            </div>
        </div>
    </footer>`;
}
