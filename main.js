import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
  });

  // 2. Tab Logic
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('bg-brand-black', 'text-white');
        b.classList.add('bg-transparent', 'text-brand-black');
      });
      tabPanes.forEach(p => p.classList.add('hidden'));

      btn.classList.remove('bg-transparent', 'text-brand-black');
      btn.classList.add('bg-brand-black', 'text-white');

      const targetId = btn.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.remove('hidden');
    });
  });

  // 3. Helper Utility: Format IDR
  const formatIDR = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  // Helper Utility: Form Submission Handler
  const setupCalculator = (formId, resultId, calculateFn) => {
    const form = document.getElementById(formId);
    const resultContainer = document.getElementById(resultId);

    if (form && resultContainer) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const htmlOutput = calculateFn();
        if (htmlOutput) {
          resultContainer.innerHTML = htmlOutput;
        }
      });
    }
  };

  // Kalkulator 1: Target Tabungan
  setupCalculator('goal-form', 'goal-result', () => {
    const targetPrice = parseFloat(document.getElementById('target-price').value);
    const days = parseInt(document.getElementById('days-target').value);

    if (targetPrice > 0 && days > 0) {
      const daily = Math.ceil(targetPrice / days);
      return `<p class="text-brand-black font-bold text-lg mt-4 font-serif italic">Perlu menabung: <span class="text-brand-green">${formatIDR(daily)} / hari</span></p>`;
    }
    return null;
  });

  // Kalkulator 2: Dana Darurat
  setupCalculator('emergency-form', 'emergency-result', () => {
    const monthly = parseFloat(document.getElementById('monthly-expenses').value);

    if (monthly > 0) {
      const total = monthly * 6;
      return `<p class="text-brand-black font-bold text-lg mt-4 font-serif italic text-right">Target (6 Bln): <span class="text-brand-navy">${formatIDR(total)}</span></p>`;
    }
    return null;
  });

  // Kalkulator 3: Margin Keuntungan UMKM
  setupCalculator('profit-form', 'profit-result', () => {
    const capital = parseFloat(document.getElementById('capital-cost').value);
    const selling = parseFloat(document.getElementById('selling-price').value);

    if (capital > 0 && selling > 0) {
      const profit = selling - capital;
      const margin = ((profit / selling) * 100).toFixed(1);
      return `<p class="text-brand-black font-bold text-lg mt-4 font-serif italic">Profit: <span class="text-brand-green">${formatIDR(profit)}</span> <br/><span class="text-[10px] font-sans text-slate-400 uppercase tracking-widest leading-none">Margin: ${margin}%</span></p>`;
    }
    return null;
  });

  // 4. Sistem AI Assistant
  const aiToggleBtn = document.getElementById('ai-toggle-btn');
  const aiCloseBtn = document.getElementById('ai-close-btn');
  const aiChatWindow = document.getElementById('ai-chat-window');
  const aiChatForm = document.getElementById('ai-chat-form');
  const aiChatInput = document.getElementById('ai-chat-input');
  const aiMessages = document.getElementById('ai-messages');

  if (aiToggleBtn && aiChatWindow) {
    const toggleChat = () => {
      aiChatWindow.classList.toggle('hidden');
      aiChatWindow.classList.toggle('flex');
    };

    aiToggleBtn.addEventListener('click', toggleChat);
    aiCloseBtn.addEventListener('click', toggleChat);

    const addMessage = (text, sender) => {
      const isUser = sender === 'user';
      const wrapper = document.createElement('div');
      wrapper.className = `flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'} animate-fade-in-up`;

      const label = document.createElement('span');
      label.className = `text-[9px] font-bold text-slate-400 uppercase tracking-widest ${isUser ? 'pr-1' : 'pl-1'}`;
      label.textContent = isUser ? 'Anda' : 'Artha AI';

      const bubble = document.createElement('div');
      bubble.className = `border border-black p-4 text-xs font-sans max-w-[85%] leading-relaxed shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
        isUser
          ? 'bg-brand-black text-white'
          : 'bg-white text-brand-black'
      }`;
      bubble.textContent = text;

      wrapper.appendChild(label);
      wrapper.appendChild(bubble);
      aiMessages.appendChild(wrapper);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    };

    aiChatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userText = aiChatInput.value.trim();
      if (!userText) return;
      addMessage(userText, 'user');
      aiChatInput.value = '';

      setTimeout(() => {
        const responses = [
            "Berdasarkan analisis regresi, porsi tabungan Anda harus diprioritaskan sebelum pengeluaran variabel.",
            "Strategi 2026 menekankan pada diversifikasi aset rendah risiko untuk menjaga likuiditas.",
            "Margin UMKM rata-rata di sektor ritel saat ini berada di angka 15-20%. Pastikan HPP Anda akurat."
        ];
        addMessage(responses[Math.floor(Math.random() * responses.length)], 'ai');
      }, 1000);
    });
  }

  // 5. Enhanced Financial Tracker Logic
  let transactions = JSON.parse(localStorage.getItem('artha_transactions_v2')) || [];
  let monthlyBudget = parseFloat(localStorage.getItem('artha_budget')) || 0;

  const budgetInput = document.getElementById('budget-limit');
  const budgetContainer = document.getElementById('budget-progress-container');
  const budgetBar = document.getElementById('budget-bar');
  const budgetPercentEl = document.getElementById('budget-percent');
  const budgetStatusEl = document.getElementById('budget-status');

  if (budgetInput) {
    budgetInput.value = monthlyBudget || '';
    budgetInput.addEventListener('change', (e) => {
      monthlyBudget = parseFloat(e.target.value) || 0;
      localStorage.setItem('artha_budget', monthlyBudget);
      updateTrackingUI();
    });
  }

  const updateTrackingUI = () => {
    const list = document.getElementById('transaction-list');
    const noTransactions = document.getElementById('no-transactions');
    const balanceEl = document.getElementById('total-balance');
    const incomeEl = document.getElementById('total-income');
    const expenseEl = document.getElementById('total-expense');

    if (!list) return;

    list.innerHTML = '';
    let totalIncome = 0;
    let totalExpense = 0;

    if (transactions.length === 0) {
      if (noTransactions) noTransactions.classList.remove('hidden');
    } else {
      if (noTransactions) noTransactions.classList.add('hidden');
      transactions.forEach((t) => {
        if (t.type === 'income') totalIncome += t.amount;
        else totalExpense += t.amount;

        const row = document.createElement('tr');
        row.className = 'border-b border-black/5 hover:bg-slate-50 transition-colors';
        row.innerHTML = `
          <td class="px-6 py-4 text-slate-500 text-[10px] font-bold uppercase tracking-tighter">${t.date}</td>
          <td class="px-6 py-4"><span class="bg-slate-100 text-[9px] font-bold uppercase px-2 py-1 border border-black/10">${t.category}</span></td>
          <td class="px-6 py-4 font-medium text-brand-black">${t.desc}</td>
          <td class="px-6 py-4 text-right font-bold ${t.type === 'income' ? 'text-brand-green' : 'text-red-500'}">
            ${t.type === 'income' ? '+' : '-'}${formatIDR(t.amount).replace('Rp', '').trim()}
          </td>
        `;
        list.appendChild(row);
      });
    }

    const balance = totalIncome - totalExpense;
    if (balanceEl) balanceEl.textContent = formatIDR(balance);
    if (incomeEl) incomeEl.textContent = formatIDR(totalIncome);
    if (expenseEl) expenseEl.textContent = formatIDR(totalExpense);

    // Budget Logic
    if (monthlyBudget > 0) {
        budgetContainer.classList.remove('hidden');
        const percent = Math.min((totalExpense / monthlyBudget) * 100, 100);
        budgetBar.style.width = `${percent}%`;
        budgetPercentEl.textContent = `${Math.round((totalExpense / monthlyBudget) * 100)}%`;

        if (percent >= 100) {
            budgetBar.className = 'h-full bg-red-600 transition-all duration-500';
            budgetStatusEl.textContent = 'Peringatan: Anggaran terlampaui!';
            budgetStatusEl.className = 'text-[9px] mt-2 text-red-600 font-bold uppercase tracking-widest';
        } else if (percent > 80) {
            budgetBar.className = 'h-full bg-amber-500 transition-all duration-500';
            budgetStatusEl.textContent = 'Waspada: Mendekati batas limit.';
            budgetStatusEl.className = 'text-[9px] mt-2 text-amber-600 font-bold uppercase tracking-widest';
        } else {
            budgetBar.className = 'h-full bg-brand-green transition-all duration-500';
            budgetStatusEl.textContent = 'Status Anggaran: Aman';
            budgetStatusEl.className = 'text-[9px] mt-2 text-slate-400 font-bold uppercase tracking-widest';
        }
    } else {
        budgetContainer.classList.add('hidden');
    }

    localStorage.setItem('artha_transactions_v2', JSON.stringify(transactions));
  };

  const addTransaction = (type) => {
    const descInput = document.getElementById('track-desc');
    const amountInput = document.getElementById('track-amount');
    const categoryInput = document.getElementById('track-category');

    if (!descInput || !amountInput || !categoryInput) return;

    const desc = descInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (desc && amount > 0) {
      const newTransaction = {
        id: Date.now(),
        desc,
        amount,
        type,
        category,
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })
      };
      transactions.unshift(newTransaction);
      updateTrackingUI();
      descInput.value = '';
      amountInput.value = '';
    }
  };

  const btnIncome = document.getElementById('btn-income');
  const btnExpense = document.getElementById('btn-expense');
  const btnClear = document.getElementById('clear-tracking');

  if (btnIncome) btnIncome.addEventListener('click', () => addTransaction('income'));
  if (btnExpense) btnExpense.addEventListener('click', () => addTransaction('expense'));
  if (btnClear) btnClear.addEventListener('click', () => {
    if (confirm('Reset seluruh ledger transaksi?')) {
      transactions = [];
      updateTrackingUI();
    }
  });

  updateTrackingUI();
});
