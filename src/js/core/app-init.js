/**
 * Shared application initialization for all pages
 * Handles: CSS imports, AOS animation library, Navbar, Footer
 */
import "../../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { renderNavbar } from "../components/navbar.html.js";
import { renderFooter } from "../components/footer.html.js";
import { initNavbar } from "./navbar.js";

/**
 * Initialize core app features used across all pages.
 * @param {Object} opts
 * @param {string} opts.activePage - e.g. 'Dashboard','pemula','mahasiswa','pengusaha','stocks','news'
 * @param {string} opts.basePath   - relative path back to root, e.g. './' or '../../'
 * @param {string} opts.pagePath   - relative path to pages folder from current file
 */
export function initApp({
  activePage = "Dashboard",
  basePath = "./",
  pagePath = "src/pages/",
} = {}) {
  /* -- Inject Navbar -- */
  const navRoot = document.getElementById("navbar-root");
  if (navRoot) {
    navRoot.innerHTML = renderNavbar({ activePage, basePath, pagePath });
  }

  /* -- Inject Footer -- */
  const footRoot = document.getElementById("footer-root");
  if (footRoot) {
    footRoot.innerHTML = renderFooter({ basePath, pagePath });
  }

  /* -- AOS scroll animations (Disabled in favor of custom system) -- */
  /* AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  }); */

  /* -- Dynamic Island Navbar behaviour -- */
  initNavbar();
}
