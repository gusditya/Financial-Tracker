import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  const news = [
    {
      type: 'main',
      category: 'Analisis 2026',
      title: 'Navigasi Suku Bunga: Mengapa 2026 Adalah Tahun Keseimbangan Baru',
      excerpt: 'Setelah ketidakpastian panjang di 2025, pasar global mulai menemukan titik ekuilibrium baru. Suku bunga yang stabil memberikan ruang bagi investasi jangka panjang di sektor riil...',
      author: 'Artha Editorial',
      date: '02 Mar 2026',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200'
    },
    {
      type: 'main',
      category: 'Kilas Balik 2025',
      title: 'Transformasi Hijau: Bagaimana 2025 Mengubah Roadmap Energi Indonesia',
      excerpt: 'Melihat kembali pencapaian signifikan di tahun lalu, di mana investasi pada energi terbarukan melampaui target nasional sebesar 12%. Ini adalah pondasi bagi ekonomi berkelanjutan...',
      author: 'Finance Desk',
      date: '28 Feb 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200'
    },
    {
        type: 'main',
        category: 'Market Update',
        title: 'Bursa Efek Asia Tenggara Menjadi Primadona Kolektor Saham',
        excerpt: 'Arus modal asing (Inflow) yang masuk ke wilayah ASEAN menunjukkan tren positif di kuartal pertama 2026, dipicu oleh ketahanan konsumsi domestik yang kuat...',
        author: 'Global Analyst',
        date: '01 Mar 2026',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200'
    },
    {
        type: 'sidebar',
        category: 'Crypto 2026',
        title: 'Bitcoin Menemukan Stabilitas Sebagai Aset Lindung Nilai',
        date: '1 jam yang lalu'
    },
    {
        type: 'sidebar',
        category: 'Kebijakan',
        title: 'Insentif Pajak Baru untuk UMKM yang Melakukan Eskpor',
        date: '3 jam yang lalu'
    },
    {
        type: 'sidebar',
        category: 'Laporan 2025',
        title: 'Rangkuman Pertumbuhan Ekonomi Digital Indonesia 2025',
        date: '1 hari yang lalu'
    }
  ];

  const mainNewsEl = document.getElementById('main-news');
  const sidebarNewsEl = document.getElementById('sidebar-news');

  if (mainNewsEl && sidebarNewsEl) {
    news.forEach((item, i) => {
      if (item.type === 'main') {
        const article = document.createElement('div');
        article.className = 'group cursor-pointer border-b border-black pb-16 last:border-0';
        article.setAttribute('data-aos', 'fade-up');
        article.innerHTML = `
          <div class="overflow-hidden border border-black mb-8 relative">
            <img src="${item.image}" class="w-full h-96 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000">
            <div class="absolute top-4 left-4 bg-brand-black text-white px-3 py-1 text-[9px] font-bold uppercase tracking-widest">${item.category}</div>
          </div>
          <h3 class="font-serif text-4xl font-bold mt-2 mb-6 group-hover:text-brand-green transition-colors leading-tight">${item.title}</h3>
          <p class="text-slate-600 font-sans leading-relaxed text-lg mb-8">${item.excerpt}</p>
          <div class="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <span class="text-brand-black">By ${item.author}</span>
            <span>|</span>
            <span>${item.date}</span>
          </div>
        `;
        mainNewsEl.appendChild(article);
      } else {
        const sideItem = document.createElement('div');
        sideItem.className = 'group cursor-pointer border-b border-slate-200 pb-8 last:border-0';
        sideItem.innerHTML = `
          <span class="text-brand-green font-bold text-[9px] uppercase tracking-widest block mb-2">${item.category}</span>
          <h4 class="font-serif font-bold text-xl group-hover:underline underline-offset-4 decoration-1">${item.title}</h4>
          <span class="text-[10px] text-slate-400 mt-3 block font-bold uppercase tracking-tighter">${item.date}</span>
        `;
        sidebarNewsEl.appendChild(sideItem);
      }
    });
  }
});
