import { createIcons, Menu, X } from 'lucide';

// Simple active state check
const currentPath = window.location.pathname;
const isActive = (path) => {
  if (path === '/' && (currentPath === '/' || currentPath.endsWith('index.html'))) return true;
  return currentPath.includes(path) && path !== '/';
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Data', path: '/src/pages/content.html' },
  { name: 'Edukasi', path: '/src/pages/edukasi.html' },
  { name: 'Tools', path: '/src/pages/tools.html' },
  { name: 'About', path: '/src/pages/about.html' },
];

const moreLinks = [
  { name: 'Data OJK & Literasi', path: '/src/pages/data-ojk.html' },
  { name: 'Peta Krisis Ekonomi', path: '/src/pages/krisis.html' },
  { name: 'Glosarium A-Z', path: '/src/pages/glosarium.html' },
  { name: 'Tokoh Ekonomi', path: '/src/pages/tokoh.html' },
  { name: 'Hubungi Kami', path: '/src/pages/contact.html' },
];

export function initNavbar() {
  const navbarContainer = document.getElementById('navbar-root');
  if (!navbarContainer) return;

  navbarContainer.innerHTML = `
    <header class="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none pt-4 px-4">
      <nav id="main-nav" class="pointer-events-auto flex items-center gap-1 h-12 px-2 bg-white/70 backdrop-blur-xl border border-charcoal/[0.06] rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-500 max-w-3xl w-full">
        
        <!-- Logo -->
        <a href="/" class="font-display font-semibold text-charcoal text-[15px] tracking-tight pl-3 pr-4 shrink-0">REALIGN</a>
        
        <!-- Desktop Nav Links (centered) -->
        <div class="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          ${navLinks.map(item => `
            <a href="${item.path}" class="relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${isActive(item.path) ? 'bg-charcoal text-white' : 'text-charcoal/60 hover:text-charcoal hover:bg-charcoal/[0.04]'}">${item.name}</a>
          `).join('')}
          
          <!-- More dropdown -->
          <div class="relative" id="more-dropdown-wrapper">
            <button id="more-dropdown-btn" class="px-3.5 py-1.5 text-[13px] font-medium rounded-full text-charcoal/60 hover:text-charcoal hover:bg-charcoal/[0.04] transition-all duration-200 flex items-center gap-1">
              More <svg class="w-3 h-3 opacity-40 transition-transform duration-200" id="more-dropdown-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="more-dropdown-panel" class="absolute top-full right-0 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-charcoal/[0.06] rounded-2xl shadow-xl opacity-0 translate-y-1 pointer-events-none transition-all duration-200 overflow-hidden py-1.5">
              ${moreLinks.map(link => `
                <a href="${link.path}" class="block px-4 py-2 text-[13px] font-medium text-charcoal/70 hover:text-charcoal hover:bg-charcoal/[0.03] transition-colors ${isActive(link.path) ? 'text-charcoal bg-charcoal/[0.04]' : ''}">${link.name}</a>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <a href="/src/pages/content.html" class="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-[13px] font-semibold text-white bg-charcoal rounded-full hover:bg-charcoal/80 transition-colors shrink-0 ml-auto">
          Eksplorasi
        </a>
        
        <!-- Mobile Toggle -->
        <button id="mobile-menu-btn" class="md:hidden ml-auto p-2 text-charcoal/70 hover:text-charcoal focus:outline-none shrink-0">
          <i data-lucide="menu" id="menu-icon" class="w-5 h-5"></i>
        </button>
      </nav>
    </header>

    <!-- Mobile Fullscreen Drawer -->
    <div id="mobile-drawer" class="fixed inset-0 bg-white z-[60] transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden overflow-y-auto">
      <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-charcoal/[0.06]">
        <a href="/" class="font-display font-semibold text-charcoal text-lg tracking-tight">REALIGN</a>
        <button id="mobile-close-btn" class="p-2 text-charcoal/60 hover:text-charcoal">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="flex flex-col px-6 py-6 gap-1">
        ${[...navLinks, ...moreLinks].map(item => `
          <a href="${item.path}" class="py-3 text-[15px] font-medium border-b border-charcoal/[0.04] transition-colors ${isActive(item.path) ? 'text-charcoal' : 'text-charcoal/50 hover:text-charcoal'}">${item.name}</a>
        `).join('')}
        <a href="/src/pages/content.html" class="mt-6 flex items-center justify-center py-3.5 text-[14px] font-semibold text-white bg-charcoal rounded-full hover:bg-charcoal/80 transition-colors">
          Mulai Eksplorasi
        </a>
      </div>
    </div>

    <!-- Scroll Progress -->
    <div id="scroll-progress-bar" class="fixed top-0 left-0 h-[2px] bg-charcoal z-[70] w-0 transition-all duration-75"></div>
  `;

  // Initialize Lucide Icons
  createIcons({ icons: { Menu, X } });

  // Event Listeners
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileDrawer.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.add('translate-x-full');
      document.body.style.overflow = '';
    }
  };

  mobileBtn.addEventListener('click', toggleMenu);
  mobileCloseBtn.addEventListener('click', toggleMenu);

  // Close drawer on link click
  mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
  });

  // More dropdown toggle
  const moreBtn = document.getElementById('more-dropdown-btn');
  const morePanel = document.getElementById('more-dropdown-panel');
  const moreChevron = document.getElementById('more-dropdown-chevron');
  let isMoreOpen = false;

  const toggleMore = () => {
    isMoreOpen = !isMoreOpen;
    if (isMoreOpen) {
      morePanel.classList.remove('opacity-0', 'translate-y-1', 'pointer-events-none');
      morePanel.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
      if (moreChevron) moreChevron.style.transform = 'rotate(180deg)';
    } else {
      morePanel.classList.add('opacity-0', 'translate-y-1', 'pointer-events-none');
      morePanel.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
      if (moreChevron) moreChevron.style.transform = '';
    }
  };

  if (moreBtn && morePanel) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMore();
    });

    document.addEventListener('click', (e) => {
      if (isMoreOpen && !morePanel.contains(e.target) && !moreBtn.contains(e.target)) {
        toggleMore();
      }
    });
  }
}

