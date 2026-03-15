export function renderNavbar({
  activePage = "home",
  basePath = "",
  pagePath = "src/pages/",
} = {}) {
  const mainLinks = [
    { href: `${pagePath}pemula.html`, label: "Pemula", id: "pemula" },
    { href: `${pagePath}mahasiswa.html`, label: "Mahasiswa", id: "mahasiswa" },
    { href: `${pagePath}pengusaha.html`, label: "Pengusaha", id: "pengusaha" },
    { href: `${pagePath}stocks.html`, label: "Saham", id: "stocks" },
    { href: `${pagePath}news.html`, label: "Berita", id: "news" },
  ];

  const toolLinks = [
    {
      href: `${pagePath}eco-history.html`,
      label: "Eco-History",
      id: "eco-history",
      icon: "🕰️",
    },
    {
      href: `${pagePath}crisis-map.html`,
      label: "Crisis Map",
      id: "crisis-map",
      icon: "🗺️",
    },
    {
      href: `${pagePath}value-converter.html`,
      label: "Value Converter",
      id: "value-converter",
      icon: "💰",
    },
    {
      href: `${pagePath}mentor-ai.html`,
      label: "Mentor AI",
      id: "mentor-ai",
      icon: "🤖",
    },
  ];

  const isToolActive = toolLinks.some((l) => l.id === activePage);

  const mainNavLinks = mainLinks
    .map((link) => {
      const isActive = activePage === link.id;
      return `<a href="${link.href}" class="nav-pill-item${isActive ? " active" : ""} w-full md:w-auto text-center">${link.label}</a>`;
    })
    .join("\n            ");

  const toolDropdownItems = toolLinks
    .map((link) => {
      const isActive = activePage === link.id;
      return `<a href="${link.href}" class="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium rounded-lg transition-colors ${isActive ? "bg-brand-green text-white" : "text-slate-600 hover:bg-brand-green-light hover:text-brand-green"}">${link.icon} ${link.label}</a>`;
    })
    .join("\n                    ");

  const mobileToolLinks = toolLinks
    .map((link) => {
      const isActive = activePage === link.id;
      return `<a href="${link.href}" class="nav-pill-item${isActive ? " active" : ""} w-full text-center text-xs">${link.icon} ${link.label}</a>`;
    })
    .join("\n            ");

  const logoHref =
    activePage === "home" ? "index.html" : `${basePath}index.html`;

  return `
    <nav class="dynamic-island-nav flex-col md:flex-row md:items-center" id="main-nav">
        <div class="flex items-center justify-between w-full md:w-auto">
            <a href="${logoHref}" class="nav-logo-pill flex items-center gap-2">
                <span class="w-6 h-6 bg-brand-green rounded-lg flex items-center justify-center text-white text-[10px] font-bold">AN</span>
                <span class="hidden sm:inline">ArthaNavigate</span>
                <span class="sm:hidden">AN</span>
            </a>
            <button id="mobile-menu-btn"
                class="md:hidden ml-4 p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors focus:outline-none">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        <div id="nav-links-container"
            class="hidden md:flex flex-col md:flex-row items-center gap-1 w-full md:w-auto mt-4 md:mt-0">
            ${mainNavLinks}
            <div class="relative hidden md:block" id="tools-dropdown">
                <button id="tools-dropdown-btn" class="nav-pill-item${isToolActive ? " active" : ""} flex items-center gap-1.5 cursor-pointer">
                    Fitur
                    <svg class="w-3 h-3 transition-transform" id="tools-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div id="tools-dropdown-menu" class="absolute top-full right-0 mt-2 w-52 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/60 p-2 hidden z-50">
                    ${toolDropdownItems}
                </div>
            </div>
            <a href="${activePage === 'home' ? '#pilih-jalur' : pagePath + 'pemula.html'}" class="nav-cta-btn hidden md:inline-flex items-center gap-1.5 ml-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Mulai Gratis
            </a>
            <div class="flex flex-col gap-1 w-full md:hidden mt-2 pt-2 border-t border-slate-200/60">
                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-1">Fitur Inovatif</span>
                ${mobileToolLinks}
                <a href="${activePage === 'home' ? '#pilih-jalur' : pagePath + 'pemula.html'}" class="nav-cta-btn text-center mt-2">Mulai Gratis</a>
            </div>
        </div>
    </nav>`;
}
