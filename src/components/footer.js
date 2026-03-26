import { createIcons, ArrowRight } from 'lucide';

export function initFooter() {
  const footerContainer = document.getElementById('footer-root');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <!-- Jumbotron Call to Action -->
    <section class="bg-charcoal text-white py-24 md:py-32 relative overflow-hidden">
      <!-- Decorative element -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="font-display text-5xl md:text-7xl tracking-tight mb-8">Siap Memutus Siklus?</h2>
        <p class="font-sans text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">Mengetahui masalah adalah separuh solusi. Eksplorasi direktori edukasi finansial kami untuk merakit pertahanan ekonomi pribadimu.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/src/pages/edukasi.html" class="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase bg-parchment text-charcoal hover:bg-bullion hover:text-white rounded-full transition-all duration-300 w-full sm:w-auto shadow-xl">
            Mulai Belajar Sekarang <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
          </a>
          <a href="/src/pages/tools.html" class="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full transition-all w-full sm:w-auto">
            Akses Hak Akses Tools
          </a>
        </div>
      </div>
    </section>

    <!-- Main Footer -->
    <footer class="bg-[#1f1f1d] text-parchment py-16 lg:py-24 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          <!-- Brand & Manifesto (Span 4) -->
          <div class="flex flex-col md:col-span-4 lg:col-span-4">
            <div class="font-display font-semibold text-4xl tracking-tight mb-4 text-white">REALIGN</div>
            <p class="font-sans text-parchment/60 text-lg mb-8 leading-relaxed pr-4">
              Platform jurnalisme data dan literasi ekonomi radikal. Membongkar kebohongan statistik, merakit ulang pertahanan finansial Gen Z Indonesia.
            </p>
            <div class="flex items-center gap-4">
               <a href="https://github.com/gusditya/Financial-Tracker" target="_blank" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-colors text-parchment/70">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
               </a>
               <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-charcoal transition-colors text-parchment/70">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>

          <!-- Peta Situs Internal (Span 4) -->
          <div class="flex flex-col md:col-span-4 lg:col-span-3 lg:col-start-6">
            <h4 class="font-mono text-xs uppercase tracking-widest text-parchment/40 mb-6">Direktori Platform</h4>
            <div class="grid grid-cols-2 gap-x-4 gap-y-4">
              <a href="/index.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Trailer Beranda</a>
              <a href="/src/pages/content.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Laporan Utama</a>
              <a href="/src/pages/edukasi.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Pusat Edukasi</a>
              <a href="/src/pages/tools.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Perkakas Finansial</a>
              <a href="/src/pages/data-ojk.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Data OJK/BI</a>
              <a href="/src/pages/glosarium.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Kamus Istilah</a>
              <a href="/src/pages/tokoh.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Tokoh Ekonomi</a>
              <a href="/src/pages/about.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Tentang Kami</a>
              <a href="/src/pages/contact.html" class="font-sans text-parchment/80 hover:text-white transition-colors text-sm">Hubungi Kami</a>
            </div>
          </div>

          <!-- Metodologi & Atribusi (Span 4) -->
          <div class="flex flex-col md:col-span-4 lg:col-span-4">
            <h4 class="font-mono text-xs uppercase tracking-widest text-parchment/40 mb-6">Integritas Data</h4>
            <p class="font-sans text-sm text-parchment/60 leading-relaxed mb-4">
              Semua visualisasi grafik dan kalkulasi pada platform ini dikalibrasi mengacu pada raw-data publik berikut:
            </p>
            <ul class="font-sans text-sm text-parchment/80 space-y-2 mb-6">
              <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-bullion rounded-full"></div> BPS: Survei Angkatan Kerja Nasional</li>
              <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-bullion rounded-full"></div> OJK: Strategi Nasional Literasi Keuangan</li>
              <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 bg-bullion rounded-full"></div> Bank Indonesia: Statistik Makroekonomi</li>
            </ul>
            <a href="/src/pages/data-ojk.html" class="inline-flex items-center text-xs font-mono uppercase tracking-widest text-bullion hover:text-white transition-colors">
              Lihat Metodologi Lengkap <i data-lucide="arrow-right" class="w-3 h-3 ml-1"></i>
            </a>
          </div>

        </div>

        <!-- Bottom Credit -->
        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-mono text-xs text-parchment/40 tracking-wider">
            &copy; 2026 REALIGN INITIATIVE. PROYEK TECHSOFT WEB DESIGN.
          </p>
        </div>

      </div>
    </footer>
  `;

  // Initialize Lucide Icons in footer
  createIcons({
    icons: { ArrowRight }
  });
}
