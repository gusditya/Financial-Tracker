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
