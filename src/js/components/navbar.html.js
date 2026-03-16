export function renderNavbar({
  activePage = "home",
  basePath = "",
  pagePath = "src/pages/",
} = {}) {
  const sections = [
    {
      title: "Navigation",
      links: [
        { id: "Dashboard", href: `${basePath}index.html`, label: "Dashboard", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
        { id: "pemula", href: `${pagePath}pemula.html`, label: "Pemula", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>` },
        { id: "mahasiswa", href: `${pagePath}mahasiswa.html`, label: "Mahasiswa", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
        { id: "pengusaha", href: `${pagePath}pengusaha.html`, label: "Pengusaha", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
      ]
    },
    {
      title: "Inovasi AI",
      links: [
        { id: "mentor-ai", href: `${pagePath}mentor-ai.html`, label: "Mentor AI", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
        { id: "eco-history", href: `${pagePath}eco-history.html`, label: "Eco-History", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
        { id: "crisis-map", href: `${pagePath}crisis-map.html`, label: "Crisis Map", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>` },
        { id: "value-converter", href: `${pagePath}value-converter.html`, label: "Converter", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>` },
      ]
    },
    {
      title: "Pasar",
      links: [
        { id: "stocks", href: `${pagePath}stocks.html`, label: "Saham", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg>` },
        { id: "news", href: `${pagePath}news.html`, label: "Berita", icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5M19 20l-5.94-2.28A2 2 0 0112 15.82V7.44a2 2 0 011.15-1.82L19 3m-11 8h4m-4 4h2"/></svg>` },
      ]
    }
  ];

  const logoHref = activePage === "home" || activePage === "Dashboard" ? "index.html" : `${basePath}index.html`;

  const renderedSections = sections.map(section => {
    const sectionLinks = section.links.map(link => {
      const isActive = activePage === link.id;
      return `<a href="${link.href}" class="sidebar-link ${isActive ? 'active' : ''}">
                ${link.icon}
                <span>${link.label}</span>
              </a>`;
    }).join("");

    return `
      <div class="sidebar-section">
        <h3 class="sidebar-section-title">${section.title}</h3>
        <div class="px-3 space-y-1">
          ${sectionLinks}
        </div>
      </div>
    `;
  }).join("");

  return `
    <aside class="sidebar-root" id="main-sidebar">
      <div class="sidebar-header p-6 pb-8 border-b border-slate-100/50 flex items-center justify-between">
        <a href="${logoHref}" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-brand-green/20 group-hover:scale-105 transition-transform">AN</div>
          <div class="flex flex-col">
            <span class="text-sm font-bold text-brand-black leading-tight tracking-tight">ArthaNavigate</span>
            <span class="text-[10px] text-slate-400 font-medium tracking-wide">Finansial Cerdas</span>
          </div>
        </a>
        <button id="desktop-sidebar-collapse" class="hidden md:block p-2 text-slate-400 hover:text-brand-green hover:bg-emerald-50 rounded-lg transition-all" title="Collapse Sidebar">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7M20 19l-7-7 7-7"/></svg>
        </button>
        <button id="mobile-sidebar-close" class="md:hidden p-2 text-slate-400 hover:text-brand-green hover:bg-emerald-50 rounded-lg transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="flex-grow overflow-y-auto py-4 custom-scrollbar">
        ${renderedSections}
      </div>

      <div class="p-4 mt-auto border-t border-slate-200/60">
        <a href="${pagePath}pemula.html" class="flex items-center justify-center gap-2 w-full py-4 bg-emerald-50 text-brand-green font-bold text-[10px] tracking-widest uppercase rounded-2xl hover:bg-brand-green hover:text-white transition-all duration-300">
           <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
           Mulai Sekarang
        </a>
      </div>
    </aside>

    <!-- Sidebar Toggle Button (3-line hamburger menu) -->
    <button id="sidebar-toggle-btn" class="fixed top-5 left-5 z-[110] p-3.5 bg-white shadow-xl rounded-2xl border border-slate-100 text-brand-green hover:bg-emerald-50 active:scale-95 transition-all">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-16 6h16"/>
      </svg>
    </button>
  `;
}

