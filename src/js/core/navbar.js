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
}
