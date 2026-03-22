/* ===== pengusaha.js — Entrepreneur Tools ===== */
import { initApp } from "../core/app-init.js";
import { formatIDR } from "../core/utils.js";

initApp({ activePage: "pengusaha", basePath: "../../", pagePath: "" });

/* ============================
   1. GOAL TRACKER — Rp 1 Miliar
   ============================ */
const GOAL_TARGET = 1_000_000_000;
const goalInput = document.getElementById("goal-current");
const goalBtn = document.getElementById("goal-update-btn");
const goalFill = document.getElementById("goal-fill");
const goalPct = document.getElementById("goal-percentage");
const goalMsg = document.getElementById("goal-message");

function updateGoal() {
  const val = parseInt(goalInput.value) || 0;
  const pct = Math.min(100, Math.max(0, (val / GOAL_TARGET) * 100));

  goalFill.style.width = pct.toFixed(1) + "%";
  goalPct.textContent = pct.toFixed(1) + "%";

  // Milestones
  const ms = [
    { id: "ms-250", threshold: 250_000_000 },
    { id: "ms-500", threshold: 500_000_000 },
    { id: "ms-750", threshold: 750_000_000 },
    { id: "ms-1000", threshold: 1_000_000_000 },
  ];
  ms.forEach((m) => {
    const el = document.getElementById(m.id);
    if (val >= m.threshold) {
      el.classList.remove("bg-slate-50", "text-slate-400");
      el.classList.add("bg-amber-100", "text-amber-700");
    } else {
      el.classList.remove("bg-amber-100", "text-amber-700");
      el.classList.add("bg-slate-50", "text-slate-400");
    }
  });

  // Message
  if (val === 0) {
    goalMsg.textContent = "Masukkan jumlah aset saat ini untuk memulai.";
  } else if (val >= GOAL_TARGET) {
    goalMsg.innerHTML =
      "🎉 <strong>Selamat!</strong> Anda telah mencapai target Rp 1 Miliar!";
  } else {
    const remaining = GOAL_TARGET - val;
    goalMsg.textContent =
      "Sisa " + formatIDR(remaining) + " lagi menuju target. Terus semangat!";
  }

  localStorage.setItem("artha_goal", val);
}

// Load saved
const savedGoal = localStorage.getItem("artha_goal");
if (savedGoal && goalInput) {
  goalInput.value = savedGoal;
  updateGoal();
}
if (goalBtn) goalBtn.addEventListener("click", updateGoal);

/* ============================
   2. FINANCIAL TRACKER
   ============================ */
let transactions = JSON.parse(
  localStorage.getItem("artha_transactions") || "[]",
);
const txDesc = document.getElementById("tx-desc");
const txAmount = document.getElementById("tx-amount");
const txType = document.getElementById("tx-type");
const txAddBtn = document.getElementById("tx-add-btn");
const txList = document.getElementById("tx-list");
const totalIncomeEl = document.getElementById("total-income");
const totalExpenseEl = document.getElementById("total-expense");
const netBalanceEl = document.getElementById("net-balance");

function renderTransactions() {
  if (!txList) return;
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  totalIncomeEl.textContent = formatIDR(income);
  totalExpenseEl.textContent = formatIDR(expense);
  netBalanceEl.textContent = formatIDR(income - expense);

  if (transactions.length === 0) {
    txList.innerHTML =
      '<p class="text-center text-sm text-slate-400 py-8">Belum ada transaksi. Mulai catat keuangan bisnis Anda.</p>';
    return;
  }

  txList.innerHTML = transactions
    .map(
      (t, i) => `
    <div class="flex items-center justify-between p-4 rounded-xl ${t.type === "income" ? "bg-brand-green-light" : "bg-red-50"}">
      <div class="flex items-center gap-4">
        <span class="w-8 h-8 rounded-full ${t.type === "income" ? "bg-brand-green text-white" : "bg-red-500 text-white"} flex items-center justify-center text-xs font-bold">${t.type === "income" ? "+" : "-"}</span>
        <div>
          <div class="text-sm font-bold text-brand-black">${t.desc}</div>
          <div class="text-[10px] text-slate-400">${t.date || "—"}</div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="font-serif font-bold ${t.type === "income" ? "text-brand-green" : "text-red-500"}">${t.type === "income" ? "+" : "-"}${formatIDR(t.amount)}</span>
        <button onclick="window.__deleteTx(${i})" class="w-6 h-6 rounded-full bg-white text-slate-400 hover:text-red-500 flex items-center justify-center text-xs transition-colors">&times;</button>
      </div>
    </div>
  `,
    )
    .join("");
}

window.__deleteTx = function (idx) {
  transactions.splice(idx, 1);
  localStorage.setItem("artha_transactions", JSON.stringify(transactions));
  renderTransactions();
};

if (txAddBtn) {
  txAddBtn.addEventListener("click", () => {
    const desc = txDesc.value.trim();
    const amount = parseInt(txAmount.value) || 0;
    const type = txType.value;
    if (!desc || amount <= 0) return;

    transactions.unshift({
      desc,
      amount,
      type,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    });
    localStorage.setItem("artha_transactions", JSON.stringify(transactions));
    txDesc.value = "";
    txAmount.value = "";
    renderTransactions();
  });
}

renderTransactions();

/* ============================
   3. MARGIN CALCULATOR
   ============================ */
const calcSell = document.getElementById("calc-sell");
const calcCost = document.getElementById("calc-cost");
const calcBtn = document.getElementById("calc-margin-btn");
const calcResult = document.getElementById("calc-result");
const resProfit = document.getElementById("res-profit");
const resMargin = document.getElementById("res-margin");
const resMarkup = document.getElementById("res-markup");

if (calcBtn) {
  calcBtn.addEventListener("click", () => {
    const sell = parseFloat(calcSell.value) || 0;
    const cost = parseFloat(calcCost.value) || 0;
    if (sell <= 0 || cost <= 0) return;

    const profit = sell - cost;
    const margin = (profit / sell) * 100;
    const markup = cost > 0 ? (profit / cost) * 100 : 0;

    resProfit.textContent = formatIDR(profit);
    resMargin.textContent = margin.toFixed(1) + "%";
    resMarkup.textContent = markup.toFixed(1) + "%";
    calcResult.classList.remove("hidden");
  });
}

/* ============================
   4. BUDGET PLANNER
   ============================ */
const budgetTotal = document.getElementById("budget-total");
const budgetCats = document.querySelectorAll(".budget-cat");
const budgetVals = document.querySelectorAll(".budget-val");
const budgetAllocPct = document.getElementById("budget-alloc-pct");

function recalcBudget() {
  const total = parseInt(budgetTotal?.value) || 0;
  let sumPct = 0;
  budgetCats.forEach((input) => {
    const pct = parseFloat(input.value) || 0;
    sumPct += pct;
    const cat = input.dataset.cat;
    const valEl = document.querySelector(`.budget-val[data-cat="${cat}"]`);
    if (valEl) {
      valEl.textContent = formatIDR(Math.round((total * pct) / 100));
    }
  });
  if (budgetAllocPct) {
    budgetAllocPct.textContent = sumPct + "%";
    budgetAllocPct.classList.toggle("text-red-500", sumPct > 100);
    budgetAllocPct.classList.toggle(
      "text-brand-green",
      sumPct <= 100 && sumPct > 0,
    );
  }
}

if (budgetTotal) budgetTotal.addEventListener("input", recalcBudget);
budgetCats.forEach((input) => input.addEventListener("input", recalcBudget));

import { initAnimations } from '../animations.js';
 initAnimations(); 
