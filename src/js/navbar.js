export function initNavbar() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    // Handle scroll resizing
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Handle Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const linksContainer = document.getElementById('nav-links-container');

    if (mobileBtn && linksContainer) {
        mobileBtn.addEventListener('click', () => {
            linksContainer.classList.toggle('hidden');
            linksContainer.classList.toggle('flex');

            // Adjust navbar styling when menu is open
            if (linksContainer.classList.contains('flex')) {
                nav.classList.add('mobile-open');
                nav.classList.remove('rounded-full');
                nav.classList.add('rounded-3xl');
            } else {
                nav.classList.remove('mobile-open');
                nav.classList.add('rounded-full');
                nav.classList.remove('rounded-3xl');
            }
        });
    }

    // Handle active link highlights (for hash links on the same page)
    const navLinks = nav.querySelectorAll('.nav-pill-item');

    // Function to update active state based on current hash or scroll position
    const updateActiveState = () => {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const currentHash = window.location.hash;

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Check if it's an internal hash link
            if (href.startsWith('#')) {
                if (currentHash === href) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            } else if (href === currentPath || (currentPath === 'index.html' && href === 'index.html')) {
                // Check if it's a page link
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    window.addEventListener('hashchange', updateActiveState);
    updateActiveState();

    // Smooth scroll for hash links if they exist on the current page
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu if open
            if (mobileBtn && linksContainer && linksContainer.classList.contains('flex')) {
                linksContainer.classList.add('hidden');
                linksContainer.classList.remove('flex');
                nav.classList.remove('mobile-open');
                nav.classList.add('rounded-full');
                nav.classList.remove('rounded-3xl');
            }

            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, href);
                    updateActiveState();
                }
            }
        });
    });
}
