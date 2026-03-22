export function initNavbar() {
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const closeBtn = document.getElementById("mobile-menu-close");

  const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("translate-x-full");
    document.body.style.overflow = ""; // Restore scrolling
  };

  const openMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", openMobileMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileMenu);
  }

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });

  // Close mobile menu on clicking a link inside it
  if (mobileMenu) {
    const links = mobileMenu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  // Dark Mode Toggle Logic
  const themeToggleBtns = document.querySelectorAll("#theme-toggle-btn");
  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
}

// Initialize theme immediately to prevent FOUC
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
