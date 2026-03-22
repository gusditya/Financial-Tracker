import { initApp } from "../core/app-init.js";
import { initAnimations } from "../animations.js";

initApp({ activePage: "mentor-ai", basePath: "../../", pagePath: "" });
initAnimations();

/* =========================================
   GEMINI API CONFIG
   ========================================= */
const GEMINI_MODEL = "gemini-2.0-flash";
const SYSTEM_PROMPT = `Kamu adalah "Mentor UMKM AI" dari platform ArthaNavigate. Peranmu:
1. Menjelaskan kebijakan fiskal dan moneter Indonesia (BI Rate, PPN, PPh, subsidi, dll) dalam bahasa yang sangat sederhana.
2. Selalu hubungkan ke dampak nyata pada UMKM (warung, toko kelontong, UMKM kuliner, dll).
3. Berikan saran strategi yang actionable dan spesifik.
4. Gunakan contoh nyata dan angka. Misalnya: "Jika BI Rate naik 0.25%, cicilan KUR Anda bisa naik sekitar Rp 50.000/bulan."
5. Jawab dalam Bahasa Indonesia yang mudah dipahami. Hindari jargon tanpa penjelasan.
6. Format jawaban dengan poin-poin yang rapi.
7. Di akhir, selalu berikan 1-2 tips praktis yang bisa langsung dilakukan besok.
Konteks: Tahun sekarang 2026. BI Rate 5.75%. PPN 12%. Inflasi 2.87%. Kurs USD/IDR ~15.600.`;

/* =========================================
   STATE
   ========================================= */
let conversationHistory = [];

/* =========================================
   DOM ELEMENTS
   ========================================= */
const apiKeyInput = document.getElementById("gemini-api-key");
const saveKeyBtn = document.getElementById("save-key-btn");
const keyStatus = document.getElementById("key-status");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("chat-send-btn");

/* =========================================
   API KEY MANAGEMENT
   ========================================= */
function getApiKey() {
  return localStorage.getItem("artha_gemini_key") || "";
}

function saveApiKey(key) {
  localStorage.setItem("artha_gemini_key", key);
}

// Load saved key
const savedKey = getApiKey();
if (savedKey && apiKeyInput) {
  apiKeyInput.value = savedKey;
  sendBtn.disabled = false;
  keyStatus.textContent = "API key tersimpan.";
  keyStatus.className = "mt-3 text-xs text-surplus";
  keyStatus.classList.remove("hidden");
}

if (saveKeyBtn) {
  saveKeyBtn.addEventListener("click", () => {
    const key = apiKeyInput.value.trim();
    if (!key) {
      keyStatus.textContent = "Masukkan API key terlebih dahulu.";
      keyStatus.className = "mt-3 text-xs text-red-500";
      keyStatus.classList.remove("hidden");
      return;
    }
    saveApiKey(key);
    sendBtn.disabled = false;
    keyStatus.textContent = "API key berhasil disimpan!";
    keyStatus.className = "mt-3 text-xs text-surplus";
    keyStatus.classList.remove("hidden");
  });
}

/* =========================================
   CHAT FUNCTIONS
   ========================================= */
function addMessage(role, content) {
  const isUser = role === "user";
  const wrapper = document.createElement("div");
  wrapper.className = `flex gap-3 ${isUser ? "justify-end" : ""}`;

  if (isUser) {
    wrapper.innerHTML = `
      <div class="bg-charcoal text-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
        <p class="text-sm leading-relaxed">${escapeHtml(content)}</p>
      </div>
      <div class="w-8 h-8 bg-bullion rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
      </div>
    `;
  } else {
    wrapper.innerHTML = `
      <div class="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-4 h-4 text-bullion" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
      </div>
      <div class="bg-white rounded-2xl rounded-tl-sm p-4 max-w-[80%] border border-slate-200">
        <div class="text-sm text-slate-600 leading-relaxed prose-sm">${formatMarkdown(content)}</div>
      </div>
    `;
  }

  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingIndicator() {
  const wrapper = document.createElement("div");
  wrapper.className = "flex gap-3";
  wrapper.id = "loading-indicator";
  wrapper.innerHTML = `
    <div class="w-8 h-8 bg-charcoal text-white rounded-full flex items-center justify-center flex-shrink-0">
      <svg class="w-4 h-4 text-bullion" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    </div>
    <div class="bg-white rounded-2xl rounded-tl-sm p-4 border border-slate-200">
      <div class="flex gap-1.5">
        <div class="w-2 h-2 bg-bullion rounded-full animate-bounce" style="animation-delay:0ms"></div>
        <div class="w-2 h-2 bg-bullion rounded-full animate-bounce" style="animation-delay:150ms"></div>
        <div class="w-2 h-2 bg-bullion rounded-full animate-bounce" style="animation-delay:300ms"></div>
      </div>
    </div>
  `;
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingIndicator() {
  const el = document.getElementById("loading-indicator");
  if (el) el.remove();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^### (.*$)/gm, '<h4 class="font-bold text-base mt-4 mb-2">$1</h4>')
    .replace(/^## (.*$)/gm, '<h3 class="font-bold text-lg mt-4 mb-2">$1</h3>')
    .replace(/^- (.*$)/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^(\d+)\. (.*$)/gm, '<li class="ml-4 list-decimal">$1. $2</li>')
    .replace(/\n\n/g, "</p><p class='mt-2'>")
    .replace(/\n/g, "<br>");
}

/* =========================================
   GEMINI API CALL
   ========================================= */
async function callGemini(userMessage) {
  const apiKey = getApiKey();
  if (!apiKey) {
    addMessage("assistant", "Silakan masukkan API Key Gemini terlebih dahulu di bagian atas halaman.");
    return;
  }

  conversationHistory.push({ role: "user", parts: [{ text: userMessage }] });

  addLoadingIndicator();
  sendBtn.disabled = true;
  chatInput.disabled = true;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: conversationHistory,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1500,
          },
        }),
      }
    );

    removeLoadingIndicator();

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      const errMsg = errData?.error?.message || `Error ${response.status}`;
      throw new Error(errMsg);
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak bisa menjawab saat ini.";

    conversationHistory.push({ role: "model", parts: [{ text: reply }] });
    addMessage("assistant", reply);
  } catch (err) {
    removeLoadingIndicator();
    addMessage("assistant", `Terjadi kesalahan: ${err.message}. Pastikan API key valid dan coba lagi.`);
  } finally {
    sendBtn.disabled = false;
    chatInput.disabled = false;
    chatInput.focus();
  }
}

/* =========================================
   EVENT LISTENERS
   ========================================= */
async function handleSend() {
  const msg = chatInput.value.trim();
  if (!msg) return;

  addMessage("user", msg);
  chatInput.value = "";
  await callGemini(msg);
}

if (sendBtn) sendBtn.addEventListener("click", handleSend);

if (chatInput) {
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
  chatInput.addEventListener("input", () => {
    sendBtn.disabled = !chatInput.value.trim() || !getApiKey();
  });
}

// Quick questions (from welcome message)
document.querySelectorAll(".quick-question").forEach(el => {
  el.addEventListener("click", () => {
    const text = el.textContent.replace(/^["\u201C\u201D\u2022\s]+|["\u201C\u201D]+$/g, "").trim();
    chatInput.value = text;
    chatInput.dispatchEvent(new Event("input"));
    chatInput.focus();
  });
});

// Topic cards
document.querySelectorAll(".topic-card").forEach(card => {
  card.addEventListener("click", () => {
    const topic = card.dataset.topic;
    if (topic) {
      chatInput.value = topic;
      chatInput.dispatchEvent(new Event("input"));
      handleSend();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
