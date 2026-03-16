export function initNavbar() {
  const sidebar = document.getElementById("main-sidebar");
  if (!sidebar) return;

  const toggleBtn = document.getElementById("sidebar-toggle-btn");
  const closeBtn = document.getElementById("mobile-sidebar-close");
  const collapseBtn = document.getElementById("desktop-sidebar-collapse");
  const mainContent = document.querySelector(".main-content");
  const sidebarLinks = sidebar.querySelectorAll(".sidebar-link");

  const closeMobileSidebar = () => {
    sidebar.classList.remove("mobile-open");
    document.body.style.overflow = ""; // Restore scrolling
  };

  const openMobileSidebar = () => {
    sidebar.classList.add("mobile-open");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const setSidebarState = (isCollapsed) => {
    if (isCollapsed) {
      sidebar.classList.add("sidebar-collapsed");
      if (mainContent) mainContent.classList.add("sidebar-collapsed-content");
      localStorage.setItem("sidebar-collapsed", "true");
    } else {
      sidebar.classList.remove("sidebar-collapsed");
      if (mainContent) mainContent.classList.remove("sidebar-collapsed-content");
      localStorage.setItem("sidebar-collapsed", "false");
    }
  };

  // Initialize from localStorage (only for desktop)
  const savedState = localStorage.getItem("sidebar-collapsed");
  if (savedState === "true" && window.innerWidth > 1024) {
    setSidebarState(true);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        openMobileSidebar();
      } else {
        setSidebarState(false);
      }
    });
  }

  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      setSidebarState(true);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileSidebar);
  }

  // Handle active link highlights
  const updateActiveState = () => {
    const path = window.location.pathname;
    const fileName = path.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    sidebarLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const linkFile = href.split("/").pop();

      if (href.startsWith("#")) {
        link.classList.toggle("active", currentHash === href);
      } else {
        const isHomeMatch = (fileName === "index.html" || fileName === "") && (linkFile === "index.html" || linkFile === "");
        link.classList.toggle("active", linkFile === fileName || isHomeMatch);
      }
    });
  };

  window.addEventListener("hashchange", updateActiveState);
  updateActiveState();

  // Resize listener
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMobileSidebar();
      // Restore collapsed state if relevant
      const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
      if (isCollapsed) setSidebarState(true);
    } else {
      // On mobile, ensure sidebar-collapsed classes don't interfere with drawer
      sidebar.classList.remove("sidebar-collapsed");
      if (mainContent) mainContent.classList.remove("sidebar-collapsed-content");
    }
  });

  // Keyboard accessibility
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileSidebar();
  });

  // Close mobile sidebar on link click or outside click
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) closeMobileSidebar();
    });
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 1024 && 
        sidebar.classList.contains("mobile-open") && 
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      closeMobileSidebar();
    }
  });
}

