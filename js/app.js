/**
 * Main Application Orchestrator for Pralhad LIC Official Website
 * Enhanced with Multilingual Support (English, Marathi, Hindi), Full-Card Click Details & Sovereign Guarantee.
 */

let currentLang = localStorage.getItem("pralhad_lic_lang") || "en";
let currentCategory = "all";
let currentSearchTerm = "";
let currentCalcResult = null;
let currentSelectedPlan = null;
let returnChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Advisor Configuration
  initAdvisorBranding();

  // 2. Initialize Language
  initLanguage();

  // 3. Initialize Plan Catalog & Categories
  initPlanCatalog();

  // 4. Initialize Interactive Financial Calculator
  initCalculator();

  // 5. Initialize Goal Finder
  initGoalFinder();

  // 6. Initialize Lead Forms & WhatsApp Triggers
  initLeadCapture();

  // 7. Initialize Mobile Menu & FAQs
  initUIInteractions();
});

/**
 * Brand dynamic elements using SITE_CONFIG
 */
function initAdvisorBranding() {
  const config = SITE_CONFIG;

  document.querySelectorAll("[data-config]").forEach(el => {
    const key = el.getAttribute("data-config");
    if (config[key]) {
      el.textContent = config[key];
    }
  });

  const defaultWhatsAppMsg = encodeURIComponent(
    `Hello ${config.advisorName} ji, I visited your LIC website and would like a consultation on the best LIC policy for my family.`
  );
  const waUrl = `https://wa.me/${config.whatsappNumber}?text=${defaultWhatsAppMsg}`;

  document.querySelectorAll(".advisor-wa-link").forEach(el => {
    el.href = waUrl;
  });

  document.querySelectorAll(".advisor-call-link").forEach(el => {
    el.href = `tel:${config.phone.replace(/\s+/g, '')}`;
  });

  document.querySelectorAll(".advisor-email-link").forEach(el => {
    el.href = `mailto:${config.email}`;
  });
}

/**
 * Multilingual Support Engine (English, Marathi, Hindi)
 */
function initLanguage() {
  window.switchLanguage(currentLang);

  // Sync all language dropdowns
  const topSelect = document.getElementById("lang-select-top");
  const navSelect = document.getElementById("lang-select-nav");
  const mobileSelect = document.getElementById("lang-select-mobile");
  const headerMobileSelect = document.getElementById("lang-select-header-mobile");

  if (topSelect) topSelect.value = currentLang;
  if (navSelect) navSelect.value = currentLang;
  if (mobileSelect) mobileSelect.value = currentLang;
  if (headerMobileSelect) headerMobileSelect.value = currentLang;
}

window.switchLanguage = function(lang) {
  if (!I18N_DATA[lang]) lang = "en";
  currentLang = lang;
  I18N_DATA.currentLang = lang;
  localStorage.setItem("pralhad_lic_lang", lang);
  if (document.documentElement) document.documentElement.lang = lang;
  if (document.body) document.body.setAttribute("data-lang", lang);

  // Sync select inputs
  ["lang-select-top", "lang-select-nav", "lang-select-mobile", "lang-select-header-mobile"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = lang;
  });

  // Translate all [data-i18n] text nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N_DATA[lang] && I18N_DATA[lang][key] !== undefined) {
      el.textContent = I18N_DATA[lang][key];
    } else if (I18N_DATA["en"][key] !== undefined) {
      el.textContent = I18N_DATA["en"][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (I18N_DATA[lang] && I18N_DATA[lang][key] !== undefined) {
      el.placeholder = I18N_DATA[lang][key];
    } else if (I18N_DATA["en"][key] !== undefined) {
      el.placeholder = I18N_DATA["en"][key];
    }
  });

  // Re-render categories tabs
  renderCategoryTabs();

  // Re-render plan catalog cards
  renderPlans();

  // Update calculator plan dropdown options
  updateCalculatorPlanOptions();

  // Re-run current calculation display
  if (currentCalcResult) {
    updateCalculatorDisplay(currentCalcResult);
  }

  if (window.lucide) lucide.createIcons();
};

/**
 * Plan Catalog & Categorization Engine
 */
function initPlanCatalog() {
  const searchInput = document.getElementById("plan-search-input");
  renderCategoryTabs();
  renderPlans();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value.toLowerCase().trim();
      renderPlans();
    });
  }
}

function renderCategoryTabs() {
  const categoryContainer = document.getElementById("category-tabs-container");
  if (!categoryContainer) return;

  categoryContainer.innerHTML = PLAN_CATEGORIES.map(cat => {
    const localizedLabel = I18N_DATA.getCategory(cat.id, currentLang);
    return `
      <button 
        class="filter-tab px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold border border-stone-200 bg-white text-stone-700 transition hover:bg-stone-100 flex items-center space-x-1.5 shrink-0 ${cat.id === currentCategory ? 'active' : ''}" 
        data-category="${cat.id}">
        <span>${localizedLabel}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-bold tab-count">${cat.count}</span>
      </button>
    `;
  }).join("");

  categoryContainer.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      categoryContainer.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      renderPlans();
    });
  });
}

function renderPlans() {
  const plansGrid = document.getElementById("plans-grid");
  if (!plansGrid) return;

  const t = I18N_DATA[currentLang] || I18N_DATA["en"];

  let filtered = LIC_PLANS.filter(plan => {
    const matchCategory = currentCategory === "all" || plan.category === currentCategory;
    const matchSearch = !currentSearchTerm || 
      plan.name.toLowerCase().includes(currentSearchTerm) ||
      plan.tableNo.includes(currentSearchTerm) ||
      plan.categoryLabel.toLowerCase().includes(currentSearchTerm) ||
      (plan.shortDesc && plan.shortDesc.toLowerCase().includes(currentSearchTerm));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    plansGrid.innerHTML = `
      <div class="col-span-full py-16 text-center text-stone-500">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-stone-400 mb-3"></i>
        <h4 class="text-lg font-bold text-stone-800">No LIC plans matched your search</h4>
        <p class="text-sm mt-1">Try searching for "Jeevan Labh", "936", "Umang", "871", "Pension", or click "All Plans".</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Full-card click: Entire card triggers openPlanModal
  plansGrid.innerHTML = filtered.map(rawPlan => {
    const plan = I18N_DATA.getPlan(rawPlan, currentLang);
    const catLabel = I18N_DATA.getCategory(plan.category, currentLang);

    return `
      <div 
        onclick="openPlanModal('${plan.id}')" 
        class="plan-card rounded-2xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group pb-8">
        
        <!-- Top Badges & Table Number -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
              Table No. ${plan.tableNo}
            </span>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-100">
              ${catLabel}
            </span>
          </div>

          <!-- Plan Name & Tagline -->
          <h3 class="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition flex items-center justify-between">
            <span>${plan.name}</span>
            <i data-lucide="arrow-up-right" class="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition"></i>
          </h3>
          <p class="text-xs text-amber-800 font-bold mt-1 flex items-center">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block mr-1.5"></span>
            ${plan.badge}
          </p>
          <p class="text-xs text-stone-600 mt-2.5 leading-relaxed">
            ${plan.shortDesc}
          </p>

          <!-- Key Parameter Chips -->
          <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-stone-100 text-xs">
            <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <span class="text-stone-400 block text-[10px] uppercase font-bold">
                ${currentLang === 'mr' ? 'प्रवेश वय' : (currentLang === 'hi' ? 'प्रवेश आयु' : 'Entry Age')}
              </span>
              <span class="font-bold text-stone-800">${plan.minAge} to ${plan.maxAge} Yrs</span>
            </div>
            <div class="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
              <span class="text-stone-400 block text-[10px] uppercase font-bold">
                ${currentLang === 'mr' ? 'किमान विमा' : (currentLang === 'hi' ? 'न्यूनतम बीमा' : 'Min Sum Assured')}
              </span>
              <span class="font-bold text-stone-800">₹${LIC_CALCULATOR.formatIndianCurrency(plan.minSumAssured)}</span>
            </div>
          </div>

          <!-- Agent's Selling Hook / Pitch Callout -->
          <div class="mt-4 bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3 text-xs text-emerald-950">
            <p class="font-bold text-emerald-900 flex items-center mb-1">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-700 mr-1.5 shrink-0"></i>
              ${t.card_why_buy || "Why Customers Buy:"}
            </p>
            <p class="text-[11px] leading-relaxed text-emerald-800">
              ${plan.agentPitch.coreHook}
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-6 pt-4 border-t border-stone-100 space-y-2">
          <div class="flex items-center space-x-2">
            ${plan.calculatorConfig && plan.calculatorConfig.supported ? `
              <button 
                onclick="event.stopPropagation(); selectPlanInCalculator('${plan.tableNo}')" 
                class="flex-1 bg-[#0C281E] hover:bg-[#164232] text-amber-200 text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center space-x-1.5 shadow-sm">
                <i data-lucide="calculator" class="w-3.5 h-3.5 text-amber-400"></i>
                <span>${t.btn_calc_returns || "Calculate Returns"}</span>
              </button>
            ` : `
              <button 
                onclick="event.stopPropagation(); openLeadModalForPlan('${plan.id}')" 
                class="flex-1 bg-[#0C281E] hover:bg-[#164232] text-amber-200 text-xs font-bold py-2.5 px-3 rounded-xl transition flex items-center justify-center space-x-1.5 shadow-sm">
                <i data-lucide="send" class="w-3.5 h-3.5 text-amber-400"></i>
                <span>${t.btn_custom_quote || "Get Custom Quote"}</span>
              </button>
            `}
            <button 
              onclick="event.stopPropagation(); openPlanModal('${plan.id}')" 
              class="bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-2.5 px-3.5 rounded-xl transition flex items-center justify-center">
              <span>${t.btn_view_terms || "View Terms"}</span>
            </button>
          </div>

          <!-- Direct WhatsApp Quick Chat -->
          <a 
            href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello ${SITE_CONFIG.advisorName} ji, I would like to get quotation and purchase details for ${plan.name} (Table ${plan.tableNo}).`)}" 
            target="_blank" 
            rel="noopener noreferrer"
            onclick="event.stopPropagation()"
            class="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-bold py-2 px-3 rounded-xl transition flex items-center justify-center space-x-1.5 border border-emerald-300">
            <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-700"></i>
            <span>${t.btn_chat_wa || "Chat on WhatsApp"}</span>
          </a>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) lucide.createIcons();
}

/**
 * Plan Detail Modal
 */
window.openPlanModal = function(planId) {
  const rawPlan = LIC_PLANS.find(p => p.id === planId);
  if (!rawPlan) return;
  const plan = I18N_DATA.getPlan(rawPlan, currentLang);
  const catLabel = I18N_DATA.getCategory(plan.category, currentLang);

  const modal = document.getElementById("plan-detail-modal");
  const modalContent = document.getElementById("plan-modal-body");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="flex items-start justify-between border-b border-stone-200 pb-4">
      <div>
        <div class="flex items-center space-x-2 mb-1.5">
          <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">Table No. ${plan.tableNo}</span>
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-900">${catLabel}</span>
          ${plan.bonusType ? `<span class="text-[11px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">${plan.bonusType}</span>` : ''}
        </div>
        <h2 class="text-2xl font-black text-stone-900">${plan.name}</h2>
        <p class="text-xs text-amber-800 font-semibold mt-0.5">${plan.tagline}</p>
      </div>
      <button onclick="closePlanModal()" class="text-stone-400 hover:text-stone-700 p-1 rounded-lg">
        <i data-lucide="x" class="w-6 h-6"></i>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="py-5 space-y-6 max-h-[70vh] overflow-y-auto pr-1 text-xs">
      <!-- Agent Sales Pitch -->
      <div class="bg-gradient-to-r from-[#0C281E] to-[#164232] text-white p-5 rounded-2xl shadow-sm border border-amber-400/30">
        <h4 class="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center">
          <i data-lucide="sparkles" class="w-4 h-4 mr-2 text-amber-400"></i>
          ${currentLang === 'mr' ? 'सल्लागाराचा महत्त्वपूर्ण सल्ला' : (currentLang === 'hi' ? 'सलाहकार का मुख्य परामर्श' : 'Advisor Pitch & Financial Rationale')}
        </h4>
        <p class="text-sm text-stone-100 mb-3 italic font-medium">"${plan.agentPitch.coreHook}"</p>
        <ul class="space-y-2 text-stone-200">
          ${plan.agentPitch.keyPoints.map(pt => `<li class="flex items-start"><span class="text-amber-400 mr-2 font-bold">✔</span> <span>${pt}</span></li>`).join("")}
        </ul>
        <div class="mt-4 pt-3 border-t border-white/10 text-amber-200 flex items-center">
          <strong class="text-white mr-1.5">${currentLang === 'mr' ? 'कोणासाठी योग्य:' : (currentLang === 'hi' ? 'किसके लिए उपयुक्त:' : 'Ideal For:')}</strong> ${plan.agentPitch.idealFor}
        </div>
      </div>

      <!-- Eligibility Matrix -->
      <div>
        <h4 class="text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider">
          ${currentLang === 'mr' ? 'अधिकृत पात्रता आणि पॉलिसीचे नियम' : (currentLang === 'hi' ? 'आधिकारिक पात्रता व पॉलिसी के नियम' : 'Official Eligibility & Policy Rules')}
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span class="text-stone-400 block text-[10px] uppercase font-bold">${currentLang === 'mr' ? 'प्रवेश वय' : (currentLang === 'hi' ? 'प्रवेश आयु' : 'Entry Age')}</span>
            <span class="font-bold text-stone-800">${plan.minAge} to ${plan.maxAge} Years</span>
          </div>
          <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span class="text-stone-400 block text-[10px] uppercase font-bold">${currentLang === 'mr' ? 'किमान विमा' : (currentLang === 'hi' ? 'न्यूनतम बीमा' : 'Min Sum Assured')}</span>
            <span class="font-bold text-stone-800">₹${LIC_CALCULATOR.formatIndianCurrency(plan.minSumAssured)}</span>
          </div>
          <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span class="text-stone-400 block text-[10px] uppercase font-bold">${currentLang === 'mr' ? 'कमाल विमा' : (currentLang === 'hi' ? 'अधिकतम बीमा' : 'Max Sum Assured')}</span>
            <span class="font-bold text-stone-800">${plan.maxSumAssured}</span>
          </div>
          <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
            <span class="text-stone-400 block text-[10px] uppercase font-bold">${currentLang === 'mr' ? 'हप्ता प्रकार' : (currentLang === 'hi' ? 'भुगतान प्रकार' : 'Payment Modes')}</span>
            <span class="font-bold text-stone-800">${plan.paymentModes.join(", ")}</span>
          </div>
        </div>
      </div>

      <!-- Death & Maturity Benefit -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 bg-stone-50 border border-stone-200 rounded-xl">
          <h5 class="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2 flex items-center">
            <i data-lucide="shield" class="w-4 h-4 mr-1.5 text-emerald-700"></i>
            ${currentLang === 'mr' ? 'मृत्यू दावा लाभ (Death Benefit)' : (currentLang === 'hi' ? 'मृत्यु दावा लाभ (Death Benefit)' : 'Death Benefit')}
          </h5>
          <p class="text-stone-700 leading-relaxed">${plan.deathBenefit}</p>
        </div>
        <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
          <h5 class="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-2 flex items-center">
            <i data-lucide="gift" class="w-4 h-4 mr-1.5 text-emerald-700"></i>
            ${currentLang === 'mr' ? 'मॅच्युरिटी / परतावा लाभ' : (currentLang === 'hi' ? 'मैच्योरिटी / रिटर्न लाभ' : 'Maturity / Survival Benefit')}
          </h5>
          <p class="text-stone-700 leading-relaxed">${plan.maturityBenefit}</p>
        </div>
      </div>

      <!-- Tax & Statutory Truth -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl">
          <strong class="text-amber-950 block mb-1">
            ${currentLang === 'mr' ? 'कर सवलत (कलम 80C आणि 10(10D)):' : (currentLang === 'hi' ? 'टैक्स छूट (धारा 80C और 10(10D)):' : 'Tax Benefits (Section 80C & 10(10D)):')}
          </strong>
          <p class="text-stone-700 leading-relaxed">${plan.taxBenefits}</p>
        </div>
        <div class="p-3.5 bg-stone-50 border border-stone-200 rounded-xl">
          <strong class="text-stone-900 block mb-1">
            ${currentLang === 'mr' ? 'अडचणीच्या वेळी तात्काळ कर्ज सुविधा:' : (currentLang === 'hi' ? 'आपातकालीन लोन सुविधा:' : 'Emergency Loan Facility:')}
          </strong>
          <p class="text-stone-700 leading-relaxed">${plan.loanFacility}</p>
        </div>
      </div>

      <!-- Optional Riders -->
      ${plan.riders && plan.riders.length > 0 ? `
        <div>
          <h5 class="text-xs font-bold text-stone-900 mb-2 uppercase tracking-wider">
            ${currentLang === 'mr' ? 'उपलब्ध ऐच्छिक रायडर्स' : (currentLang === 'hi' ? 'उपलब्ध वैकल्पिक राइडर्स' : 'Available Optional Riders')}
          </h5>
          <div class="flex flex-wrap gap-1.5">
            ${plan.riders.map(r => `<span class="px-2.5 py-1 rounded-full text-[11px] bg-stone-100 text-stone-700 border font-medium">${r}</span>`).join("")}
          </div>
        </div>
      ` : ''}
    </div>

    <!-- Modal Footer Actions -->
    <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="text-xs text-stone-500">
        Advisor: <strong class="text-stone-800">${SITE_CONFIG.advisorFullName}</strong> (${SITE_CONFIG.branchName})
      </div>
      <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
        ${plan.calculatorConfig && plan.calculatorConfig.supported ? `
          <button 
            onclick="closePlanModal(); selectPlanInCalculator('${plan.tableNo}')" 
            class="w-full sm:w-auto bg-[#0C281E] hover:bg-[#164232] text-amber-300 text-xs font-bold py-3 sm:py-2.5 px-4 rounded-xl transition flex items-center justify-center space-x-1.5 shadow-sm">
            <i data-lucide="calculator" class="w-4 h-4"></i>
            <span>${currentLang === 'mr' ? 'परतावा मोजा' : (currentLang === 'hi' ? 'रिटर्न की गणना करें' : 'Calculate Returns')}</span>
          </button>
        ` : ''}
        <a 
          href="https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hello ${SITE_CONFIG.advisorName} ji, I would like to buy / discuss ${plan.name} (Table ${plan.tableNo}). Please contact me.`)}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 sm:py-2.5 px-4 rounded-xl transition flex items-center justify-center space-x-1.5">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          <span>${currentLang === 'mr' ? 'व्हॉट्सॲपवर खरेदी करा' : (currentLang === 'hi' ? 'व्हाट्सएप पर खरीदें' : 'Buy via WhatsApp')}</span>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  if (window.lucide) lucide.createIcons();
};

window.closePlanModal = function() {
  const modal = document.getElementById("plan-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

/**
 * Interactive Financial Calculator
 */
function initCalculator() {
  const planSelect = document.getElementById("calc-plan-select");
  const ageSlider = document.getElementById("calc-age-slider");
  const ageInput = document.getElementById("calc-age-input");
  const saSlider = document.getElementById("calc-sa-slider");
  const saInput = document.getElementById("calc-sa-input");
  const termSelect = document.getElementById("calc-term-select");
  const modeSelect = document.getElementById("calc-mode-select");

  if (!planSelect) return;

  updateCalculatorPlanOptions();
  planSelect.value = "936";
  onPlanChanged("936");

  planSelect.addEventListener("change", (e) => onPlanChanged(e.target.value));

  if (ageSlider && ageInput) {
    ageSlider.addEventListener("input", (e) => {
      ageInput.value = e.target.value;
      runCalculation();
    });
    ageInput.addEventListener("input", (e) => {
      ageSlider.value = e.target.value;
      runCalculation();
    });
  }

  if (saSlider && saInput) {
    saSlider.addEventListener("input", (e) => {
      saInput.value = e.target.value;
      runCalculation();
    });
    saInput.addEventListener("input", (e) => {
      saSlider.value = e.target.value;
      runCalculation();
    });
  }

  if (termSelect) termSelect.addEventListener("change", runCalculation);
  if (modeSelect) modeSelect.addEventListener("change", runCalculation);

  document.querySelectorAll(".sa-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.getAttribute("data-val");
      if (saSlider) saSlider.value = val;
      if (saInput) saInput.value = val;
      runCalculation();
    });
  });

  const printBtn = document.getElementById("print-quote-btn");
  if (printBtn) {
    printBtn.addEventListener("click", openPrintQuotationModal);
  }

  const waQuoteBtn = document.getElementById("wa-quote-btn");
  if (waQuoteBtn) {
    waQuoteBtn.addEventListener("click", () => {
      if (!currentCalcResult || !currentSelectedPlan) return;
      const waUrl = LIC_QUOTATION.generateWhatsAppLink(SITE_CONFIG, currentSelectedPlan, currentCalcResult);
      window.open(waUrl, "_blank");
    });
  }

  runCalculation();
}

function updateCalculatorPlanOptions() {
  const planSelect = document.getElementById("calc-plan-select");
  if (!planSelect) return;

  const currentVal = planSelect.value || "936";
  const calcPlans = LIC_PLANS.filter(p => p.calculatorConfig && p.calculatorConfig.supported);

  planSelect.innerHTML = calcPlans.map(rawPlan => {
    const p = I18N_DATA.getPlan(rawPlan, currentLang);
    return `<option value="${p.tableNo}">${p.name} (Table ${p.tableNo})</option>`;
  }).join("");

  planSelect.value = currentVal;
}

function onPlanChanged(tableNo) {
  const rawPlan = LIC_PLANS.find(p => p.tableNo === tableNo);
  if (!rawPlan) return;
  const plan = I18N_DATA.getPlan(rawPlan, currentLang);
  currentSelectedPlan = plan;

  const termSelect = document.getElementById("calc-term-select");
  if (termSelect && plan.policyTermOptions) {
    termSelect.innerHTML = plan.policyTermOptions.map(opt => `
      <option value="${opt.term}_${opt.ppt}">
        ${currentLang === 'mr' ? `मुदत: ${opt.term} वर्षे (प्रीमियम: ${opt.ppt} वर्षे)` : (currentLang === 'hi' ? `अवधि: ${opt.term} वर्ष (प्रीमियम: ${opt.ppt} वर्ष)` : `Term: ${opt.term} Yrs (Pay ${opt.ppt} Yrs)`)}
      </option>
    `).join("");
  }

  const planDesc = document.getElementById("calc-plan-desc");
  if (planDesc) {
    planDesc.textContent = plan.tagline || plan.shortDesc;
  }

  runCalculation();
}

window.selectPlanInCalculator = function(tableNo) {
  const planSelect = document.getElementById("calc-plan-select");
  const calcSection = document.getElementById("calculator-section");
  if (planSelect) {
    planSelect.value = tableNo;
    onPlanChanged(tableNo);
  }
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth" });
  }
};

function runCalculation() {
  const planSelect = document.getElementById("calc-plan-select");
  const ageInput = document.getElementById("calc-age-input");
  const saInput = document.getElementById("calc-sa-input");
  const termSelect = document.getElementById("calc-term-select");
  const modeSelect = document.getElementById("calc-mode-select");

  if (!planSelect || !termSelect) return;

  const tableNo = planSelect.value;
  const age = Number(ageInput.value || 30);
  const sumAssured = Number(saInput.value || 1000000);
  const [term, ppt] = (termSelect.value || "25_16").split("_").map(Number);
  const mode = modeSelect ? modeSelect.value : "Yearly";

  const result = LIC_CALCULATOR.calculate({
    tableNo,
    age,
    term,
    ppt,
    sumAssured,
    mode
  });

  currentCalcResult = result;
  updateCalculatorDisplay(result);
}

function updateCalculatorDisplay(res) {
  const elFirstYear = document.getElementById("calc-first-year");
  const elRenewal = document.getElementById("calc-renewal");
  const elDaily = document.getElementById("calc-daily");
  const elTotalInvest = document.getElementById("calc-total-invest");

  if (elFirstYear) elFirstYear.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.firstYearInstallment)}`;
  if (elRenewal) elRenewal.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.renewalInstallment)}`;
  
  const dailyText = currentLang === 'mr' ? `दररोज फक्त ₹${res.dailyEquiv}` : (currentLang === 'hi' ? `प्रतिदिन मात्र ₹${res.dailyEquiv}` : `Just ₹${res.dailyEquiv} / day`);
  if (elDaily) elDaily.textContent = dailyText;
  if (elTotalInvest) elTotalInvest.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.totalInvestment)}`;

  const elMaturity = document.getElementById("calc-maturity");
  const elTotalReturns = document.getElementById("calc-total-returns");
  const elBonusAccrued = document.getElementById("calc-bonus-accrued");
  const elFab = document.getElementById("calc-fab");
  const elNetGain = document.getElementById("calc-net-gain");
  const elMultiple = document.getElementById("calc-multiple");
  const elBonusLabel = document.getElementById("calc-bonus-label");

  if (elMaturity) elMaturity.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.maturityLumpSum)}`;
  if (elTotalReturns) elTotalReturns.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.totalReturns)}`;
  if (elBonusAccrued) elBonusAccrued.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.accruedBonus)}`;
  if (elFab) elFab.textContent = `₹${LIC_CALCULATOR.formatIndianCurrency(res.finalAdditionalBonus)}`;
  if (elNetGain) elNetGain.textContent = `+ ₹${LIC_CALCULATOR.formatIndianCurrency(res.netGain)}`;
  
  const returnMultipleText = currentLang === 'mr' ? `${res.returnMultiple} पट परतावा` : (currentLang === 'hi' ? `${res.returnMultiple} गुना रिटर्न` : `${res.returnMultiple}x Return`);
  if (elMultiple) elMultiple.textContent = returnMultipleText;

  if (elBonusLabel) {
    if (res.isContractualGuaranteed) {
      elBonusLabel.textContent = currentLang === 'mr' ? "गॅरंटीड ॲडिशन्स" : (currentLang === 'hi' ? "गारंटीड एडीशन्स" : "Guaranteed Additions");
    } else {
      elBonusLabel.textContent = currentLang === 'mr' ? "संचित बोनस" : (currentLang === 'hi' ? "संचित बोनस" : "Accrued Reversionary Bonus");
    }
  }

  // Milestones or Regular Income Callout
  const milestonesContainer = document.getElementById("calc-milestones-container");
  if (milestonesContainer) {
    if (res.milestonePayouts && res.milestonePayouts.length > 0) {
      const heading = currentLang === 'mr' ? '★ हमखास नियतकालिक कॅशबॅक परतावे:' : (currentLang === 'hi' ? '★ गारंटीड नियमित नकद वापसी:' : '★ Guaranteed Milestone Survival Cashbacks:');
      milestonesContainer.innerHTML = `
        <div class="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-950 mb-3">
          <span class="font-bold block text-emerald-900 mb-1">${heading}</span>
          <div class="flex flex-wrap gap-2">
            ${res.milestonePayouts.map(m => `
              <span class="px-2.5 py-1 bg-white border border-emerald-400 rounded-lg font-bold text-emerald-800">
                ${currentLang === 'mr' ? `${m.year} वे वर्ष` : (currentLang === 'hi' ? `${m.year}वां वर्ष` : `Year ${m.year}`)}: ${m.percent}% (₹${LIC_CALCULATOR.formatIndianCurrency(m.amount)})
              </span>
            `).join("")}
          </div>
        </div>
      `;
    } else if (res.guaranteedAnnualIncome > 0) {
      const heading = currentLang === 'mr' ? '★ आयुष्यभर मिळणारे हमखास वार्षिक उत्पन्न:' : (currentLang === 'hi' ? '★ आजीवन गारंटीड वार्षिक आय:' : '★ Contractually Guaranteed Regular Annual Income:');
      const text = currentLang === 'mr' ? 
        `दरवर्षी विम्याच्या १०% म्हणजेच ₹${LIC_CALCULATOR.formatIndianCurrency(res.guaranteedAnnualIncome)} आयुष्यभर थेट तुमच्या बँक खात्यात!` : 
        (currentLang === 'hi' ? `प्रतिवर्ष १०% यानी ₹${LIC_CALCULATOR.formatIndianCurrency(res.guaranteedAnnualIncome)} जीवन भर सीधे आपके बैंक खाते में!` : `₹${LIC_CALCULATOR.formatIndianCurrency(res.guaranteedAnnualIncome)} paid into your bank account EVERY SINGLE YEAR for life!`);

      milestonesContainer.innerHTML = `
        <div class="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs text-emerald-950 mb-3">
          <span class="font-bold block text-emerald-900 mb-1">${heading}</span>
          <p class="text-emerald-900 font-semibold">${text}</p>
        </div>
      `;
    } else {
      milestonesContainer.innerHTML = "";
    }
  }

  renderCashflowTimeline(res.timeline);
  renderReturnsChart(res);
}

function renderCashflowTimeline(timeline) {
  const container = document.getElementById("calc-timeline-container");
  if (!container) return;

  const keyYears = timeline.filter(t => t.cashInflow > 0 || t.year === 1 || t.year === 5 || t.year === 10 || t.year === 15 || t.year === 20 || t.year === 25);

  container.innerHTML = keyYears.map(item => `
    <div class="timeline-item pb-4">
      <div class="timeline-dot ${item.cashInflow > 0 ? (item.milestoneNote.includes('Maturity') ? 'maturity' : 'payout') : ''}"></div>
      <div class="flex items-center justify-between text-xs">
        <div>
          <span class="font-bold text-stone-200">
            ${currentLang === 'mr' ? `${item.year} वे वर्ष` : (currentLang === 'hi' ? `${item.year}वां वर्ष` : `Year ${item.year}`)}
          </span>
          <span class="text-stone-400 ml-1">
            (${currentLang === 'mr' ? `वय ${item.age}` : (currentLang === 'hi' ? `आयु ${item.age}` : `Age ${item.age}`)})
          </span>
          ${item.milestoneNote ? `<p class="text-[11px] font-bold text-emerald-400 mt-0.5">${item.milestoneNote}</p>` : ''}
        </div>
        <div class="text-right">
          ${item.premiumOutflow > 0 ? `
            <span class="text-red-300 font-semibold block">- ₹${LIC_CALCULATOR.formatIndianCurrency(item.premiumOutflow)}</span>
          ` : `<span class="text-stone-400">${currentLang === 'mr' ? '₹० हप्ता' : (currentLang === 'hi' ? '₹० किस्त' : '₹0 Premium')}</span>`}
          ${item.cashInflow > 0 ? `
            <span class="text-emerald-300 font-bold block">+ ₹${LIC_CALCULATOR.formatIndianCurrency(item.cashInflow)}</span>
          ` : ''}
        </div>
      </div>
    </div>
  `).join("");
}

function renderReturnsChart(res) {
  const ctx = document.getElementById("returns-chart-canvas");
  if (!ctx || typeof Chart === "undefined") return;

  if (returnChartInstance) {
    returnChartInstance.destroy();
  }

  const labelInvest = currentLang === 'mr' ? "एकूण जमा केलेली रक्कम" : (currentLang === 'hi' ? "कुल जमा राशि" : "Total Premium Invested");
  const labelGain = currentLang === 'mr' ? "निव्वळ करमुक्त नफा" : (currentLang === 'hi' ? "शुद्ध कर-मुक्त लाभ" : "Net Wealth Gain");

  const dataValues = [
    res.totalInvestment,
    Math.max(0, res.netGain)
  ];

  returnChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [labelInvest, labelGain],
      datasets: [{
        data: dataValues,
        backgroundColor: ["#164232", "#D4AF37"],
        borderWidth: 2,
        borderColor: "#0C281E"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 12,
            color: "#FAF9F5",
            font: { size: 11, family: "Inter" }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const val = context.raw || 0;
              return ` ₹${LIC_CALCULATOR.formatIndianCurrency(val)}`;
            }
          }
        }
      }
    }
  });
}

function openPrintQuotationModal() {
  if (!currentCalcResult || !currentSelectedPlan) return;

  const modal = document.getElementById("printable-quotation-modal");
  const modalContainer = document.getElementById("printable-modal-inner");
  if (!modal || !modalContainer) return;

  const html = LIC_QUOTATION.renderPrintableQuotation(SITE_CONFIG, currentSelectedPlan, currentCalcResult);
  modalContainer.innerHTML = html;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

window.closePrintModal = function() {
  const modal = document.getElementById("printable-quotation-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

window.triggerPrintNow = function() {
  window.print();
};

function initGoalFinder() {
  document.querySelectorAll("[data-goal-plan]").forEach(btn => {
    btn.addEventListener("click", () => {
      const planCode = btn.getAttribute("data-goal-plan");
      selectPlanInCalculator(planCode);
    });
  });
}

function initLeadCapture() {
  const leadForm = document.getElementById("main-lead-form");
  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("lead-name")?.value.trim();
      const phone = document.getElementById("lead-phone")?.value.trim();
      const age = document.getElementById("lead-age")?.value.trim();
      const city = document.getElementById("lead-city")?.value.trim();
      const plan = document.getElementById("lead-plan")?.value;
      const budget = document.getElementById("lead-budget")?.value;

      if (!name || !phone) {
        alert("Please provide your name and contact phone number.");
        return;
      }

      const leadData = { name, phone, age, city, plan, budget };
      LIC_QUOTATION.saveLeadLocally(leadData);

      const text = `*NEW LIC POLICY INQUIRY*\n--------------------\n*Name:* ${name}\n*Phone:* ${phone}\n*Age:* ${age || 'N/A'}\n*City:* ${city || 'N/A'}\n*Interested Plan:* ${plan || 'Best Recommended Plan'}\n*Monthly Savings Budget:* ${budget || 'Flexible'}\n\nHello Pralhad ji, please send me an official quotation and contact me.`;
      const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
      
      const thankYouMsg = currentLang === 'mr' ? 
        `धन्यवाद, ${name}! तुमची विनंती सल्लागार प्रल्हाद यांच्या व्हॉट्सॲपवर पाठवली जात आहे.` : 
        (currentLang === 'hi' ? `धन्यवाद, ${name}! आपका अनुरोध सलाहकार प्रल्हाद के व्हाट्सएप पर भेजा जा रहा है।` : `Thank you, ${name}! Redirecting you directly to Advisor Pralhad on WhatsApp with your request.`);

      alert(thankYouMsg);
      window.open(waUrl, "_blank");
      leadForm.reset();
    });
  }
}

window.openLeadModalForPlan = function(planId) {
  const plan = LIC_PLANS.find(p => p.id === planId);
  const planInput = document.getElementById("lead-plan");
  if (planInput && plan) {
    planInput.value = `${plan.name} (Table ${plan.tableNo})`;
  }
  const contactSection = document.getElementById("contact-section");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

function initUIInteractions() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-nav-dropdown");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    });
    // Click outside to close mobile menu
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });
  }

  // Backdrop click-to-close on Plan Modal
  const planModal = document.getElementById("plan-detail-modal");
  if (planModal) {
    planModal.addEventListener("click", (e) => {
      if (e.target === planModal) {
        window.closePlanModal();
      }
    });
  }

  // Backdrop click-to-close on Print Modal
  const printModal = document.getElementById("printable-quotation-modal");
  if (printModal) {
    printModal.addEventListener("click", (e) => {
      if (e.target === printModal) {
        window.closePrintModal();
      }
    });
  }

  // Escape key closes open modals and mobile menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closePlanModal();
      window.closePrintModal();
      if (mobileMenu) mobileMenu.classList.add("hidden");
    }
  });

  document.querySelectorAll(".faq-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      if (answer) {
        answer.classList.toggle("hidden");
        if (icon) {
          icon.classList.toggle("rotate-180");
        }
      }
    });
  });
}
