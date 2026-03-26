import { initNavbar } from '../components/navbar.js';
import { initFooter } from '../components/footer.js';
import { createIcons, icons } from 'lucide';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initializes the common application components for a page.
 * @param {Object} options - Initialization options.
 * @param {string} options.activePage - The ID of the active page for the navbar.
 * @param {string} options.basePath - The base path to the root directory.
 */
export function initApp({ activePage, basePath = './', pagePath = '' }) {
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize Navbar and Footer
        initNavbar();
        initFooter();
        
        // Initialize Lucide Icons
        createIcons({ icons });

        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });

        console.log(`App initialized for page: ${activePage}`);
    });
}
