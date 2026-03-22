import { initApp } from "../core/app-init.js";
import { initAnimations } from "../animations.js";
import { 
    info1HTML, info2HTML, info3HTML, info4HTML, 
    info5HTML, info6HTML, info7HTML 
} from "./news-data.js";

initApp({ activePage: "Dashboard", basePath: "./", pagePath: "src/pages/" });

/* ===== Magnetic Button Effect ===== */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .group-hover\:bg-bullion');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px) scale(1.02)`;
            btn.style.transition = 'transform 0.1s ease-out';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
            btn.style.transition = 'transform 0.5s ease-out';
        });
    });
}

/* ===== Dashboard News Modal ===== */
function initDashboardNews() {
    const dashboardNewsData = [
        {
          category: "Analisis Khusus",
          title: "Transformasi Makroekonomi Indonesia: Analisis Strategis Komoditas Emas, Disrupsi Ketenagakerjaan Generasi Z, dan Akselerasi Inklusi Keuangan",
          author: "Artha Editor Utama",
          date: "03 Mar 2026",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800",
          content: info1HTML
        },
        {
          category: "Update SNLIK",
          title: "Dinamika Literasi & Inklusi Keuangan",
          author: "Finance Desk",
          date: "28 Feb 2026",
          image: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&w=800",
          content: info2HTML
        },
        {
          category: "Kebijakan",
          title: "Rekomendasi Kebijakan Ekonomi Nasional",
          author: "Policy Advisor",
          date: "01 Mar 2026",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800",
          content: info3HTML
        },
        {
          category: "Resiliensi",
          title: "Lanskap Ekonomi & Proyeksi Global",
          author: "Global Analyst",
          date: "04 Mar 2026",
          image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800",
          content: info4HTML
        },
        {
          category: "Kesejahteraan",
          title: "Indikator Kemiskinan & Kesenjangan",
          author: "Social Analyst",
          date: "05 Mar 2026",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
          content: info5HTML
        },
        {
          category: "Aset Aman",
          title: "Evolusi Instrumen Emas Antam",
          author: "Commodity Expert",
          date: "06 Mar 2026",
          image: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?auto=format&fit=crop&w=800",
          content: info6HTML
        },
        {
          category: "Aset Digital",
          title: "Pasar Modal & Ekosistem Kripto",
          author: "Digital Asset Lead",
          date: "07 Mar 2026",
          image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800",
          content: info7HTML
        }
    ];

    const modal = document.getElementById("news-modal");
    const closeBtn = document.getElementById("close-modal-btn");
    const newsCards = document.querySelectorAll(".dash-news-card");

    function openNewsModal(itemData) {
        if(!modal) return;
        
        document.getElementById("modal-category").textContent = itemData.category;
        document.getElementById("modal-title").textContent = itemData.title;
        document.getElementById("modal-author").textContent = "By " + (itemData.author || "Redaksi");
        document.getElementById("modal-date").textContent = itemData.date;
        
        const imgEl = document.getElementById("modal-image");
        if(itemData.image) {
           imgEl.src = itemData.image;
           imgEl.classList.remove("hidden");
        } else {
           imgEl.classList.add("hidden");
        }
        
        const contentEl = document.getElementById("modal-content");
        contentEl.innerHTML = itemData.content || `<p class="italic text-slate-500">Materi lengkap untuk bagian ini sedang disusun.</p>`;
        
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.add("opacity-100");
          modal.firstElementChild.classList.remove("scale-95");
          modal.firstElementChild.classList.add("scale-100");
          document.body.style.overflow = "hidden";
        }, 10);
    }

    function closeNewsModal() {
        if(!modal) return;
        modal.classList.remove("opacity-100");
        modal.firstElementChild.classList.remove("scale-100");
        modal.firstElementChild.classList.add("scale-95");
        setTimeout(() => {
          modal.classList.add("hidden");
          document.body.style.overflow = "";
        }, 300);
    }

    if (closeBtn) closeBtn.addEventListener("click", closeNewsModal);
    if (modal) {
        modal.addEventListener("click", (e) => {
            if(e.target === modal) closeNewsModal();
        });
    }

    newsCards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const index = card.getAttribute("data-news-index");
            if(index !== null && dashboardNewsData[index]) {
                openNewsModal(dashboardNewsData[index]);
            }
        });
    });
}

// Execute immediately (defer by module type is sufficient)
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initAnimations();
        initMagneticButtons();
        initDashboardNews();
    });
} else {
    initAnimations();
    initMagneticButtons();
    initDashboardNews();
}
