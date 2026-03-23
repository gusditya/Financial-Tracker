export function renderNavbar({
  activePage = "home",
  basePath = "",
  pagePath = "src/pages/",
} = {}) {
  const logoHref = activePage === "home" || activePage === "Dashboard" ? "index.html" : `${basePath}index.html`;

  const links = [
    { id: "Dashboard", href: `${basePath}index.html`, label: "Dashboard" },
    { id: "pemula", href: `${pagePath}pemula.html`, label: "Pemula" },
    { id: "mahasiswa", href: `${pagePath}mahasiswa.html`, label: "Mahasiswa" },
    { id: "pengusaha", href: `${pagePath}pengusaha.html`, label: "Pengusaha" },
    { id: "investasi-compare", href: `${pagePath}investasi-compare.html`, label: "Tools" },
    { id: "mentor-ai", href: `${pagePath}mentor-ai.html`, label: "AI" }
  ];

  const renderedDesktopLinks = links.map(link => {
    const isHomeMatch = (activePage === "home" || activePage === "Dashboard") && (link.id === "Dashboard");
    const isActive = activePage === link.id || isHomeMatch;
    return `<a href="${link.href}" class="font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? 'text-charcoal' : 'text-charcoal/40 hover:text-bullion'}">
              ${link.label}
            </a>`;
  }).join("");

  const renderedMobileLinks = links.map(link => {
    const isHomeMatch = (activePage === "home" || activePage === "Dashboard") && (link.id === "Dashboard");
    const isActive = activePage === link.id || isHomeMatch;
    return `<a href="${link.href}" class="block py-6 text-left font-serif text-2xl font-medium border-b border-charcoal/5 ${isActive ? 'text-charcoal' : 'text-charcoal/40'}">
              ${link.label}
            </a>`;
  }).join("");

  return `
    <!-- Top Navbar -->
    <nav class="fixed top-0 inset-x-0 z-[100] bg-white/95 backdrop-blur-md border-b border-charcoal/5 transition-all w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">

          <!-- LOGO -->
          <a href="${logoHref}" class="flex items-center gap-3 group shrink-0">
            <div class="w-10 h-10 bg-charcoal text-white rounded-[12px] flex items-center justify-center font-serif font-black text-lg group-hover:bg-bullion transition-all duration-500 shadow-md">AN</div>
            <div class="flex flex-col">
              <span class="text-sm font-serif font-medium text-charcoal leading-tight tracking-tight">ArthaNavigate</span>
              <span class="text-[9px] text-charcoal/40 font-bold tracking-[0.2em] uppercase">Finansial Cerdas</span>
            </div>
          </a>

          <!-- DESKTOP MENU -->
          <div class="hidden md:flex items-center gap-10">
            ${renderedDesktopLinks}
          </div>

          <!-- ACTIONS -->
          <div class="flex items-center gap-4 shrink-0">
            <a href="${pagePath}pemula.html" class="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-charcoal text-white text-[9px] font-bold rounded-full hover:bg-bullion hover:text-white transition-all duration-500 uppercase tracking-[0.2em] shadow-md hover:scale-105">
               Mulai Belajar
            </a>
            <!-- MOBILE MENU TOGGLE -->
            <button id="mobile-menu-toggle" class="md:hidden p-3 text-charcoal hover:bg-charcoal/5 rounded-xl transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- MOBILE MENU OVERLAY -->
    <div id="mobile-menu" class="fixed inset-0 z-[110] bg-white transform translate-x-full transition-transform duration-500 md:hidden flex flex-col">
      <div class="flex items-center justify-between p-6 border-b border-charcoal/5">
        <a href="${logoHref}" class="flex items-center gap-3">
          <div class="w-10 h-10 bg-charcoal text-white rounded-xl flex items-center justify-center font-serif font-black text-lg">AN</div>
          <span class="font-serif font-medium text-lg text-charcoal">ArthaNavigate</span>
        </a>
        <button id="mobile-menu-close" class="p-3 text-charcoal hover:bg-charcoal/5 rounded-xl transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="flex-grow overflow-y-auto pt-8 px-8">
        ${renderedMobileLinks}
      </div>
      <div class="p-8 border-t border-charcoal/5 flex flex-col gap-6">
        <a href="${pagePath}pemula.html" class="w-full text-center px-8 py-5 bg-charcoal text-white text-xs font-bold rounded-full uppercase tracking-[0.2em] shadow-xl">
           Mulai Sekarang
        </a>
      </div>
    </div>
  `;
}
