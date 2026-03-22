import { initApp } from "../core/app-init.js";
import { initAnimations } from "../animations.js";
import { 
    info1HTML, info2HTML, info3HTML, info4HTML, 
    info5HTML, info6HTML, info7HTML,
    sideInfo1HTML, sideInfo2HTML, sideInfo3HTML
} from "./news-data.js";

initApp({ activePage: "news", basePath: "../../", pagePath: "" });
initAnimations();

function renderNews() {

  const news = [
    {
      type: "main",
      category: "Analisis Khusus",
      title: "Transformasi Makroekonomi Indonesia: Analisis Strategis Komoditas Emas, Disrupsi Ketenagakerjaan Generasi Z, dan Akselerasi Inklusi Keuangan",
      excerpt: "Membawa wawasan mendalam (Deep Dive) ke dalam strategi komoditas emas dalam menghadapi inflasi, tantangan Gen Z terhadap AI, hingga analisis TVM praktis UMKM.",
      author: "Artha Editor Utama",
      date: "03 Mar 2026",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800",
      content: info1HTML
    },
    {
      type: "main",
      category: "Update SNLIK",
      title: "Dinamika Literasi & Inklusi Keuangan",
      excerpt: "Hasil SNLIK 2025 menunjukkan kenaikan indeks nasional, namun kesenjangan antara perkotaan dan perdesaan tetap menjadi tantangan besar.",
      author: "Finance Desk",
      date: "28 Feb 2026",
      image: "https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&w=800",
      content: info2HTML
    },
    {
      type: "main",
      category: "Kebijakan",
      title: "Rekomendasi Kebijakan Ekonomi Nasional",
      excerpt: "Indonesia berada dalam periode transisi kompleks. Penguatan literasi digital dan reformasi kurikulum adaptif AI menjadi langkah strategis.",
      author: "Policy Advisor",
      date: "01 Mar 2026",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800",
      content: info3HTML
    },
    {
      type: "main",
      category: "Resiliensi",
      title: "Lanskap Ekonomi & Proyeksi Global",
      excerpt: "IMF memproyeksikan pertumbuhan ekonomi dunia tetap tangguh di angka 3,3%, sementara Indonesia tercatat mencapai 5,11% pada 2025.",
      author: "Global Analyst",
      date: "04 Mar 2026",
      image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=800",
      content: info4HTML
    },
    {
      type: "main",
      category: "Kesejahteraan",
      title: "Indikator Kemiskinan & Kesenjangan",
      excerpt: "Tingkat kemiskinan nasional turun menjadi 8,25% per September 2025, namun disparitas regional Timur masih memerlukan intervensi khusus.",
      author: "Social Analyst",
      date: "05 Mar 2026",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800",
      content: info5HTML
    },
    {
      type: "main",
      category: "Aset Aman",
      title: "Evolusi Instrumen Emas Antam",
      excerpt: "Emas mengukuhkan posisinya sebagai safe haven utama dengan potensi lonjakan harga hingga Rp2,5 juta per gram pada akhir 2025.",
      author: "Commodity Expert",
      date: "06 Mar 2026",
      image: "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?auto=format&fit=crop&w=800",
      content: info6HTML
    },
    {
      type: "main",
      category: "Aset Digital",
      title: "Pasar Modal & Ekosistem Kripto",
      excerpt: "Sektor teknologi menjadi penggerak utama IHSG di level 8.646, sementara volume transaksi kripto nasional melonjak tajam.",
      author: "Digital Asset Lead",
      date: "07 Mar 2026",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800",
      content: info7HTML
    },
    {
      type: "sidebar",
      category: "Crypto 2026",
      title: "Bitcoin Menemukan Stabilitas Sebagai Aset Lindung Nilai",
      date: "1 jam yang lalu",
      author: "Blockchain Analyst",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200",
      content: sideInfo1HTML
    },
    {
      type: "sidebar",
      category: "Kebijakan",
      title: "Insentif Pajak Baru untuk UMKM yang Melakukan Ekspor",
      date: "3 jam yang lalu",
      author: "Fiscal Expert",
      image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1200",
      content: sideInfo2HTML
    },
    {
      type: "sidebar",
      category: "Laporan 2025",
      title: "Rangkuman Pertumbuhan Ekonomi Digital Indonesia 2025",
      date: "1 hari yang lalu",
      author: "Tech Reporter",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1200",
      content: sideInfo3HTML
    },
  ];

  const mainNewsEl = document.getElementById("main-news");
  const sidebarNewsEl = document.getElementById("sidebar-news");

  if (mainNewsEl && sidebarNewsEl) {
    news.forEach((item) => {
      if (item.type === "main") {
        const article = document.createElement("div");
        article.className = "group cursor-pointer border-b border-slate-200 pb-16 last:border-0";
        article.innerHTML = `
          <div class="overflow-hidden harbor-card mb-8 relative img-hover-zoom">
            <img src="${item.image}" class="w-full h-96 object-cover">
            <div class="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full">${item.category}</div>
          </div>
          <h3 class="font-serif text-4xl font-bold mt-2 mb-6 text-brand-black group-hover:text-brand-green transition-colors leading-tight">${item.title}</h3>
          <p class="text-slate-500 font-sans leading-relaxed text-lg mb-8">${item.excerpt}</p>
          <div class="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <span class="text-brand-black">By ${item.author}</span>
            <span>|</span>
            <span>${item.date}</span>
          </div>
        `;
        
        // Add click listener for Modal
        article.addEventListener("click", () => openNewsModal(item));
        mainNewsEl.appendChild(article);
      } else {
        const sideItem = document.createElement("div");
        sideItem.className = "group cursor-pointer border-b border-slate-200 pb-6 last:border-0";
        sideItem.innerHTML = `
          <span class="text-brand-green font-bold text-[9px] uppercase tracking-widest block mb-2">${item.category}</span>
          <h4 class="font-serif font-bold text-xl text-brand-black group-hover:text-brand-green transition-colors">${item.title}</h4>
          <span class="text-[10px] text-slate-400 mt-3 block font-bold uppercase tracking-tighter">${item.date}</span>
        `;
        // Click listener for Sidebar items
        sideItem.addEventListener("click", () => openNewsModal(item));
        sidebarNewsEl.appendChild(sideItem);
      }
    });
  }

  // Modal Logic
  const modal = document.getElementById("news-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  
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
    // Trigger fade in animation
    setTimeout(() => {
      modal.classList.add("opacity-100");
      modal.firstElementChild.classList.remove("scale-95");
      modal.firstElementChild.classList.add("scale-100");
      document.body.style.overflow = "hidden"; // prevent background scroll
    }, 10);
  }

  function closeNewsModal() {
    if(!modal) return;
    modal.classList.remove("opacity-100");
    modal.firstElementChild.classList.remove("scale-100");
    modal.firstElementChild.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // restore scroll
    }, 300);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeNewsModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if(e.target === modal) closeNewsModal();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderNews);
} else {
  renderNews();
}