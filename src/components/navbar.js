import { createIcons, Menu, X, ChevronDown, ArrowRight } from 'lucide';

// Simple active state check
const currentPath = window.location.pathname;
const isActive = (path) => {
  if (path === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) return true;
  return currentPath.includes(path) && path !== '/';
};

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Konten', path: '#', hasDropdown: true },
  { name: 'About', path: '/src/pages/about.html' },
  { name: 'Kontak', path: '/src/pages/contact.html' },
];

const dropdownItems = [
  { name: 'Data OJK & Literasi', path: '/src/pages/data-ojk.html' },
  { name: 'Peta Krisis Ekonomi', path: '/src/pages/krisis.html' },
  { name: 'Edukasi: Pemula & Mahasiswa', path: '/src/pages/edukasi.html' },
  { name: 'Tools: Kalkulator & Konverter', path: '/src/pages/tools.html' },
  { name: 'Glosarium A-Z', path: '/src/pages/glosarium.html' },
  { name: 'Tokoh Ekonomi Indonesia', path: '/src/pages/tokoh.html' },
];

export function initNavbar() {
  const navbarContainer = document.getElementById('navbar-root');
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <nav id="main-nav" class="fixed top-0 inset-x-0 h-16 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 bg-parchment/0">
      <a href="/" class="font-display font-semibold text-charcoal text-xl tracking-tight z-50">REALIGN</a>

      <div class="hidden md:flex items-center gap-8">
        ${navItems.map(item => {
          if (item.hasDropdown) {
            return `
              <div class="relative group h-16 flex items-center cursor-pointer">
                <span class="font-sans text-sm font-medium flex items-center gap-1 transition-colors ${currentPath.includes('/src/pages/') || currentPath.includes('content.html') ? 'text-charcoal border-b-2 border-bullion' : 'text-charcoal/70 hover:text-charcoal'}">
                  ${item.name} <i data-lucide="chevron-down" class="w-3 h-3 opacity-40 group-hover:rotate-180 transition-transform duration-300"></i>
                </span>
                <div class="absolute top-[calc(100%-8px)] left-0 w-72 bg-white border border-charcoal/5 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 overflow-hidden p-2">
                  <div class="flex flex-col">
                    <div class="px-4 py-3 border-b border-charcoal/5 mb-1">
                      <p class="text-[10px] font-bold text-mist uppercase tracking-widest">Eksplorasi Data</p>
                    </div>
                    ${dropdownItems.map(drop => `
                      <a href="${drop.path}" class="flex items-center gap-3 px-4 py-3 hover:bg-parchment/50 rounded-xl font-sans text-sm text-charcoal/80 hover:text-charcoal transition-all ${isActive(drop.path) ? 'bg-parchment font-semibold text-charcoal' : ''}">
                        <span class="w-1.5 h-1.5 rounded-full bg-bullion/40"></span>
                        ${drop.name}
                      </a>
                    `).join('')}
                    <div class="mt-2 p-2 bg-charcoal/5 rounded-xl">
                      <a href="/src/pages/content.html" class="flex items-center justify-between px-3 py-2 font-sans text-xs text-surplus font-bold hover:translate-x-1 transition-transform">
                        Data Utama REALIGN <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            `;
          }
          return `
            <a href="${item.path}" class="font-sans text-sm font-medium transition-colors h-16 flex items-center ${isActive(item.path) ? 'text-charcoal border-b-2 border-bullion' : 'text-charcoal/70 hover:text-charcoal'}">
              ${item.name}
            </a>
          `;
        }).join('')}
      </div>

      <div class="flex items-center gap-4 z-50">
        <a href="/src/pages/content.html" class="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-parchment bg-charcoal rounded-full hover:bg-deficit transition-colors shadow-sm cursor-pointer border border-transparent">
          Mulai Eksplorasi &rarr;
        </a>
        <button id="mobile-menu-btn" class="md:hidden p-2 text-charcoal focus:outline-none">
          <i data-lucide="menu" id="menu-icon"></i>
        </button>
      </div>

      <div id="mobile-drawer" class="fixed inset-0 bg-parchment z-40 transform translate-x-full transition-transform duration-300 md:hidden overflow-y-auto pt-20 px-6 pb-6">
        <div class="flex flex-col gap-6 text-lg">
          ${navItems.map(item => {
            if (item.hasDropdown) {
              return `
                <div class="flex flex-col gap-3">
                  <div class="font-sans font-semibold text-charcoal border-b border-charcoal/10 pb-2">Konten Data</div>
                  <div class="flex flex-col pl-4 gap-3 text-base">
                    ${dropdownItems.map(drop => `
                      <a href="${drop.path}" class="${isActive(drop.path) ? 'text-bullion font-medium' : 'text-charcoal/70'}">${drop.name}</a>
                    `).join('')}
                    <a href="/src/pages/content.html" class="text-surplus font-medium mt-2">✨ Data Utama REALIGN</a>
                  </div>
                </div>
              `;
            }
            return `
            <a href="${item.path}" class="font-sans ${isActive(item.path) ? 'font-semibold text-bullion' : 'font-medium text-charcoal/80'}">${item.name}</a>
            `;
          }).join('')}
          <a href="/src/pages/content.html" class="inline-flex w-full mt-4 justify-center items-center px-5 py-3 text-base font-medium text-parchment bg-charcoal rounded-full active:bg-deficit transition-colors shadow-sm">
            Mulai Eksplorasi &rarr;
          </a>
        </div>
      </div>
    </nav>
    <div id="scroll-progress-bar" class="fixed top-0 left-0 h-[2px] bg-bullion z-[60] w-0 transition-all duration-75"></div>
  `;

  // Initialize Lucide Icons
  createIcons({
    icons: { Menu, X, ChevronDown, ArrowRight }
  });

  // Event Listeners
  const navElement = document.getElementById('main-nav');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');

  let isMenuOpen = false;

  mobileBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileDrawer.classList.remove('translate-x-full');
      menuIcon.setAttribute('data-lucide', 'x');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.add('translate-x-full');
      menuIcon.setAttribute('data-lucide', 'menu');
      document.body.style.overflow = '';
    }
    // Re-run createIcons for the mobile toggle
    createIcons({ icons: { Menu, X } });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navElement.classList.add('bg-parchment/90', 'backdrop-blur-md', 'border-b', 'border-charcoal/10');
      navElement.classList.remove('bg-parchment/0');
    } else {
      navElement.classList.remove('bg-parchment/90', 'backdrop-blur-md', 'border-b', 'border-charcoal/10');
      navElement.classList.add('bg-parchment/0');
    }

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
  });
}
