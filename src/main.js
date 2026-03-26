import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from 'countup.js';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import propertyData from './data/property.js';
import quizData from './data/quiz.js';
import inflationData from './data/inflation.js';
import { initNavbar } from './components/navbar.js';
import { initFooter } from './components/footer.js';
import { createIcons, icons } from 'lucide';

Chart.register(annotationPlugin);

document.addEventListener('DOMContentLoaded', () => {
  // Inject Global Components
  initNavbar();
  initFooter();
  createIcons({ icons });

  // Initialize AOS
  AOS.init({
    duration: 600,
    once: true,
    offset: 50,
  });

  // Initialize CountUp for Hero Section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const countUp = new CountUp('hero-countup', 9900000, {
          duration: 2,
          useEasing: true,
          separator: '.',
          decimal: ',',
        });
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroElement = document.getElementById('hero-countup');
  if (heroElement) {
    observer.observe(heroElement);
  }

  // Define Colors from PRD
  const colors = {
    parchment: '#F2EDE4',
    charcoal: '#2B2B28',
    deficit: '#C0392B',
    surplus: '#1E7B55',
    bullion: '#B8872A',
    mist: '#6E6E6A'
  };

  // Configure Global Chart Default
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = colors.charcoal;
  Chart.defaults.scale.grid.color = 'rgba(191,189,181,0.3)';
  Chart.defaults.scale.grid.borderDash = [4,4];

  // Chart 1: Kelas Menengah
  const ctxMiddleClass = document.getElementById('chartMiddleClass');
  if (ctxMiddleClass) {
    new Chart(ctxMiddleClass, {
      type: 'bar',
      data: {
        labels: ['2019', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: 'Populasi Kelas Menengah (Juta Jiwa)',
          data: [57.33, 49.51, 48.27, 47.85, 46.70],
          backgroundColor: [colors.mist, colors.deficit, colors.deficit, colors.deficit, colors.deficit],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: colors.charcoal,
            titleColor: colors.parchment,
            bodyColor: colors.parchment,
            cornerRadius: 8
          }
        },
        animation: {
          duration: 1200,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

  // Chart 2: Paradoks Pendidikan (Grouped bar + Line)
  const ctxEducation = document.getElementById('chartEducation');
  if (ctxEducation) {
    new Chart(ctxEducation, {
      type: 'bar',
      data: {
        labels: ['Lulusan SD', 'Lulusan SMA', 'Lulusan SMK', 'Lulusan Sarjana'],
        datasets: [
          {
            type: 'line',
            label: 'Rata-rata Pengangguran Usia Muda (17%)',
            data: [17, 17, 17, 17],
            borderColor: colors.mist,
            borderDash: [5, 5],
            pointRadius: 0,
            fill: false
          },
          {
            type: 'bar',
            label: 'Tingkat Pengangguran Terbuka (%)',
            data: [2.32, 6.70, 8.00, 6.23],
            backgroundColor: [colors.surplus, colors.mist, colors.deficit, colors.deficit],
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            backgroundColor: colors.charcoal,
            cornerRadius: 8
          }
        },
        animation: {
          duration: 1200,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

  // Chart 3: Harga Hidup vs Gaji
  const ctxLivingCost = document.getElementById('chartLivingCost');
  if (ctxLivingCost) {
    new Chart(ctxLivingCost, {
      type: 'bar',
      data: {
        labels: ['Gaji UMP', 'Beras/kg', 'Rumah Tipe 36', 'Biaya Kuliah'],
        datasets: [
          {
            label: 'Persentase Kenaikan (2004 - 2025)',
            data: [611, 367, 433, 1600],
            backgroundColor: [colors.mist, colors.deficit, colors.deficit, colors.deficit],
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: colors.charcoal,
            cornerRadius: 8
          }
        },
        scales: {
          y: {
            ticks: {
              callback: function(value) { return '+' + value + '%'; }
            }
          }
        },
        animation: {
          duration: 1200,
          easing: 'easeInOutQuart'
        }
      }
    });
  }

  // --- S-TIMELINE INFLASI ---
  const ctxTimeline = document.getElementById('chartTimeline');
  if (ctxTimeline) {
    const years = inflationData.map(d => d.year);
    const rates = inflationData.map(d => d.inflasi);
    const pointColors = inflationData.map(d => d.isCrisis ? colors.deficit : colors.bullion);
    const pointRadii = inflationData.map(d => d.isCrisis ? 8 : 6);

    const tlContextBox = document.getElementById('timeline-context');
    const tlYear = document.getElementById('tl-year');
    const tlPresident = document.getElementById('tl-president');
    const tlEvent = document.getElementById('tl-event');
    const tlFrame = document.getElementById('tl-frame');

    new Chart(ctxTimeline, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Tingkat Inflasi (%)',
          data: rates,
          borderColor: colors.charcoal,
          borderWidth: 2,
          pointBackgroundColor: pointColors,
          pointBorderColor: colors.parchment,
          pointBorderWidth: 2,
          pointRadius: pointRadii,
          pointHoverRadius: 10,
          tension: 0.1,
          fill: true,
          backgroundColor: 'rgba(43,43,40,0.02)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: true,
        },
        onClick: (e, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            const dataPoint = inflationData[index];
            
            tlYear.textContent = dataPoint.year;
            tlPresident.textContent = dataPoint.presiden;
            tlEvent.textContent = dataPoint.event;
            tlFrame.textContent = dataPoint.genZFrame;
            
            tlEvent.className = dataPoint.isCrisis ? "font-display text-2xl text-deficit mb-3" : "font-display text-2xl text-bullion mb-3";
            
            tlContextBox.classList.remove('hidden');
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: colors.charcoal,
            titleColor: colors.parchment,
            bodyColor: colors.parchment,
            cornerRadius: 8,
            callbacks: {
              label: function(context) {
                return `Inflasi: ${context.parsed.y}%`;
              }
            }
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: 10,
                yMax: 10,
                borderColor: colors.mist,
                borderWidth: 1,
                borderDash: [5, 5],
                label: {
                  display: true,
                  content: 'Batas Kritis 10%',
                  position: 'end',
                  backgroundColor: 'rgba(110,110,106,0.8)'
                }
              }
            }
          }
        },
        scales: {
          y: {
            type: 'logarithmic', // Use log scale since 1966 was 650% and 1998 was 77%
            min: 1,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        animation: {
          duration: 1500,
          easing: 'easeOutBounce'
        }
      }
    });
  }

  // --- S03 KALKULATOR INTERAKTIF ---
  const citySelect = document.getElementById('calc-city');
  const salaryInput = document.getElementById('calc-salary');
  const savingInput = document.getElementById('calc-saving');
  
  if (citySelect && salaryInput && savingInput) {
    const salaryValDisplay = document.getElementById('calc-salary-val');
    const savingValDisplay = document.getElementById('calc-saving-val');
    const resultDisplay = document.getElementById('calc-result');
    const targetCityDisplay = document.getElementById('calc-city-target');
    const targetDpDisplay = document.getElementById('calc-dp-target');

    // Populate City Dropdown
    propertyData.forEach((prop, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = prop.kota;
      citySelect.appendChild(option);
    });

    const formatRp = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

    let animationFrameId;
    let currentDisplayedYear = 0;

    const calculateDP = () => {
      const property = propertyData[citySelect.value];
      const salary = parseInt(salaryInput.value, 10);
      const savingPerc = parseInt(savingInput.value, 10);
      
      // Update UI Labels
      salaryValDisplay.textContent = formatRp(salary);
      savingValDisplay.textContent = `${savingPerc}%`;
      targetCityDisplay.textContent = property.kota;
      targetDpDisplay.textContent = formatRp(property.dp20pct);

      let dp = property.dp20pct;
      let tabungan = 0;
      let tahun = 0;
      const tabunganPerBulan = salary * (savingPerc / 100);

      while (tabungan < dp) {
        tabungan += tabunganPerBulan * 12;
        dp *= 1.08; // 8% inflation per year for property
        tabungan *= 0.9524; // 4.76% deficit in purchasing power
        tahun++;
        if (tahun > 99) break; // safety cap
      }

      // Smooth animate the result number
      const animateResult = () => {
        if (currentDisplayedYear < tahun) {
          currentDisplayedYear += Math.ceil((tahun - currentDisplayedYear) * 0.1);
          resultDisplay.textContent = currentDisplayedYear > 99 ? '99+' : currentDisplayedYear;
          animationFrameId = requestAnimationFrame(animateResult);
        } else if (currentDisplayedYear > tahun) {
          currentDisplayedYear -= Math.ceil((currentDisplayedYear - tahun) * 0.1);
          resultDisplay.textContent = currentDisplayedYear;
          animationFrameId = requestAnimationFrame(animateResult);
        } else {
          resultDisplay.textContent = tahun > 99 ? '99+' : tahun;
          // Set color based on severity
          if (tahun > 15) {
            resultDisplay.className = "font-serif text-[5rem] leading-none text-deficit transition-all duration-300";
          } else if (tahun > 5) {
            resultDisplay.className = "font-serif text-[5rem] leading-none text-bullion transition-all duration-300";
          } else {
            resultDisplay.className = "font-serif text-[5rem] leading-none text-surplus transition-all duration-300";
          }
        }
      };

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(animateResult);

      // Visual Bar Logic
      const kamuBar = document.getElementById('calc-kamu-bar');
      const kamuLabel = document.getElementById('calc-kamu-label');
      
      if (kamuBar && kamuLabel) {
        let widthPercent = Math.min(tahun, 100);
        kamuBar.style.width = widthPercent + '%';
        kamuLabel.textContent = (tahun > 99 ? '99+' : tahun) + ' thn';
        
        if (tahun > 15) {
          kamuBar.className = "absolute left-0 top-0 bottom-0 bg-deficit rounded-r-lg transition-all duration-700 ease-out";
          kamuLabel.className = "w-12 text-left text-xs font-bold text-deficit transition-colors duration-300";
        } else if (tahun > 5) {
          kamuBar.className = "absolute left-0 top-0 bottom-0 bg-bullion rounded-r-lg transition-all duration-700 ease-out";
          kamuLabel.className = "w-12 text-left text-xs font-bold text-bullion transition-colors duration-300";
        } else {
          kamuBar.className = "absolute left-0 top-0 bottom-0 bg-surplus rounded-r-lg transition-all duration-700 ease-out";
          kamuLabel.className = "w-12 text-left text-xs font-bold text-surplus transition-colors duration-300";
        }
      }
    };

    const shareBtn = document.getElementById('calc-share-btn');
    const shareTextDisplay = document.getElementById('calc-share-text');
    if (shareBtn) {
      shareBtn.onclick = async () => {
        const salary = formatRp(parseInt(salaryInput.value, 10));
        const city = propertyData[citySelect.value].kota;
        const resultYear = document.getElementById('calc-result').textContent;
        const textToShare = `Di ${city}, dengan asusmi inflasi properti dan UMP saat ini, aku butuh ${resultYear} tahun untuk menabung DP rumah. Boomer dulu rata-rata hanya butuh ~4 tahun. Cek posisimu di #REALIGN realign.id`;

        try {
          if (navigator.share) {
            await navigator.share({
              title: 'Hasil Kalkulator REALIGN',
              text: textToShare,
            });
          } else {
            await navigator.clipboard.writeText(textToShare);
            const originalText = shareTextDisplay.textContent;
            shareTextDisplay.textContent = "Disalin ke Clipboard!";
            setTimeout(() => shareTextDisplay.textContent = originalText, 2500);
          }
        } catch (err) {
          console.error("Share failed", err);
        }
      };
    }

    citySelect.addEventListener('change', calculateDP);
    salaryInput.addEventListener('input', calculateDP);
    savingInput.addEventListener('input', calculateDP);
    calculateDP();
  }

  // --- S04 INTERACTIVE QUIZ ---
  const questionArea = document.getElementById('quiz-question-area');
  const resultArea = document.getElementById('quiz-result-area');
  const progressContainer = document.getElementById('quiz-progress-container');
  
  if (questionArea && resultArea) {
    let currentQuestion = 0;
    let scores = { A: 0, B: 0, C: 0 };
    const totalQuestions = quizData.questions.length;

    const questionText = document.getElementById('quiz-question-text');
    const optionsContainer = document.getElementById('quiz-options');
    const progressBar = document.getElementById('quiz-progress-bar');
    
    // Result elements
    const resTagline = document.getElementById('quiz-result-tagline');
    const resDesc = document.getElementById('quiz-result-desc');
    const resAction = document.getElementById('quiz-result-action');
    const restartBtn = document.getElementById('quiz-restart');

    const renderQuestion = () => {
      // Update Progress
      const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;
      progressBar.style.width = `${progressPercent}%`;

      const qData = quizData.questions[currentQuestion];
      
      // Fade out animation
      questionArea.style.opacity = '0';
      questionArea.style.transform = 'translateY(10px)';

      setTimeout(() => {
        questionText.textContent = qData.q;
        optionsContainer.innerHTML = '';

        qData.options.forEach(opt => {
          const btn = document.createElement('button');
          btn.className = "w-full text-left bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl p-4 md:p-5 font-sans text-parchment transition-all duration-200";
          btn.textContent = opt.text;
          btn.onclick = () => handleAnswer(opt.type);
          optionsContainer.appendChild(btn);
        });

        // Fade in animation
        questionArea.style.opacity = '1';
        questionArea.style.transform = 'translateY(0)';
      }, 250);
    };

    const handleAnswer = (type) => {
      scores[type]++;
      currentQuestion++;

      if (currentQuestion < totalQuestions) {
        renderQuestion();
      } else {
        showResults();
      }
    };

    const showResults = () => {
      questionArea.classList.add('hidden');
      progressContainer.classList.add('hidden');
      resultArea.classList.remove('hidden');

      // Determine Outcome
      let outcomeType = 'survivor'; // default fallback for 'A'
      if (scores.C >= 3 || (scores.C == 2 && scores.B >= 2)) {
        outcomeType = 'builder';
      } else if (scores.B >= 2 || scores.C >= 1) {
        outcomeType = 'aware';
      }

      const outcome = quizData.results[outcomeType];
      
      const resCard = document.getElementById('quiz-result-card');
      const resIcon = document.getElementById('quiz-result-icon');
      
      // Set Colors and Icons based on outcome
      if (outcomeType === 'survivor') {
        resCard.className = "p-8 md:p-10 rounded-2xl border-l-[6px] shadow-lg mb-6 flex flex-col items-center text-center transition-all relative border-deficit bg-[#FCEBEB]";
        resTagline.className = "font-serif text-3xl md:text-4xl text-deficit mb-4";
        resIcon.className = "w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-deficit/10 text-deficit";
        resIcon.innerHTML = `<i data-lucide="alert-triangle" class="w-8 h-8"></i>`;
      } else if (outcomeType === 'aware') {
        resCard.className = "p-8 md:p-10 rounded-2xl border-l-[6px] shadow-lg mb-6 flex flex-col items-center text-center transition-all relative border-bullion bg-[#FAEEDA]";
        resTagline.className = "font-serif text-3xl md:text-4xl text-bullion mb-4";
        resIcon.className = "w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-bullion/10 text-bullion";
        resIcon.innerHTML = `<i data-lucide="compass" class="w-8 h-8"></i>`;
      } else if (outcomeType === 'builder') {
        resCard.className = "p-8 md:p-10 rounded-2xl border-l-[6px] shadow-lg mb-6 flex flex-col items-center text-center transition-all relative border-surplus bg-[#EAF3DE]";
        resTagline.className = "font-serif text-3xl md:text-4xl text-surplus mb-4";
        resIcon.className = "w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-surplus/10 text-surplus";
        resIcon.innerHTML = `<i data-lucide="trending-up" class="w-8 h-8"></i>`;
      }

      resTagline.textContent = outcome.tagline;
      resDesc.textContent = outcome.desc;
      resAction.textContent = outcome.action;
      
      createIcons({ icons }); // Re-init icons for the newly injected icon

      // Share Button Logic
      const shareBtn = document.getElementById('quiz-share-btn');
      const shareText = document.getElementById('quiz-share-text');
      if (shareBtn) {
        shareBtn.onclick = async () => {
          const textToShare = `Aku baru saja ikut tes simulasi REALIGN dan hasilnya: ${outcome.tagline}!\n\n${outcome.desc}\n\nAmbil tesmu dan pahami posisimu di era turbulensi ekonomi Gen Z di #REALIGN realign.id`;
          try {
            if (navigator.share) {
              await navigator.share({
                title: 'Hasil Kuesioner REALIGN',
                text: textToShare,
              });
            } else {
              await navigator.clipboard.writeText(textToShare);
              const originalLabel = shareText.textContent;
              shareText.textContent = "Disalin ke Clipboard!";
              setTimeout(() => shareText.textContent = originalLabel, 2500);
            }
          } catch (err) {
            console.error("Share failed", err);
          }
        };
      }
    };

    restartBtn.addEventListener('click', () => {
      currentQuestion = 0;
      scores = { A: 0, B: 0, C: 0 };
      resultArea.classList.add('hidden');
      questionArea.classList.remove('hidden');
      progressContainer.classList.remove('hidden');
      renderQuestion();
    });

    // Start
    renderQuestion();
  }
});
