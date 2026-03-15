/* ===== dashboard.js — Dashboard (index.html) ===== */
import { initApp } from "../core/app-init.js";

initApp({ activePage: "Dashboard", basePath: "./", pagePath: "src/pages/" });

/* ===== Animated Counters for Stats Section ===== */
function animateCounters() {
  const statEls = document.querySelectorAll('[data-aos="fade-up"] .text-4xl');
  if (!statEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent.trim();
          const match = text.match(/^(\d+)/);
          if (match) {
            const target = parseInt(match[1], 10);
            const suffix = text.replace(match[1], "");
            let current = 0;
            const duration = 1200;
            const step = Math.max(1, Math.floor(target / (duration / 16)));
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 16);
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statEls.forEach((el) => observer.observe(el));
}

/* ===== Staggered entrance for quick-action cards ===== */
function staggerCards() {
  const cards = document.querySelectorAll(".quick-action-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 400 + i * 150);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animateCounters();
  staggerCards();
});
