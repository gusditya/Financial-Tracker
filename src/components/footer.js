export function initFooter() {
  const footerContainer = document.getElementById('footer-root');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-charcoal border-t border-white/10 py-12 lg:py-16 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          <!-- Col 1: Brand -->
          <div class="flex flex-col">
            <div class="font-display font-semibold text-parchment text-3xl tracking-tight mb-4">REALIGN</div>
            <p class="font-serif italic text-parchment/60 text-lg mb-6">Editorial Data Journalism for Gen Z</p>
            <a href="/src/pages/content.html" class="inline-flex w-fit items-center justify-center px-5 py-2 text-sm font-medium text-charcoal bg-parchment rounded-full hover:bg-bullion hover:text-white transition-colors">
              Mulai Eksplorasi &rarr;
            </a>
          </div>

          <!-- Col 2: Navigation -->
          <div class="flex flex-col">
            <h4 class="font-mono text-xs uppercase tracking-widest text-parchment/40 mb-6">Sitemap</h4>
            <div class="flex flex-col gap-4">
              <a href="/" class="font-sans text-parchment/80 hover:text-bullion transition-colors w-fit">Home Trailer</a>
              <a href="/src/pages/content.html" class="font-sans text-parchment/80 hover:text-surplus transition-colors w-fit">Data Utama / Scrollytelling</a>
              <a href="/src/pages/about.html" class="font-sans text-parchment/80 hover:text-bullion transition-colors w-fit">Tentang Kami</a>
              <a href="/src/pages/contact.html" class="font-sans text-parchment/80 hover:text-bullion transition-colors w-fit">Hubungi Kami (Koreksi Data)</a>
            </div>
          </div>

          <!-- Col 3: Sources -->
          <div class="flex flex-col">
            <h4 class="font-mono text-xs uppercase tracking-widest text-parchment/40 mb-6">Sumber Data Resmi</h4>
            <ul class="font-sans text-sm text-parchment/60 space-y-3">
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> Badan Pusat Statistik (BPS) 2019-2026</li>
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> Survei Nasional Literasi OJK (SNLIK)</li>
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> Bank Indonesia & World Bank</li>
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> LPEM UI & Mandiri Institute</li>
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> World Inequality Database (WID)</li>
              <li class="flex items-start"><span class="text-bullion mr-2">▪</span> CSIS & ManpowerGroup</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Credit -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-mono text-xs text-parchment/40 tracking-wider">
            TECHSOFT 2026 WEB DESIGN COMPETITION
          </p>
          <p class="font-mono text-xs text-parchment/30">
            Data valid per Maret 2026.
          </p>
        </div>

      </div>
    </footer>
  `;
}
