/**
 * Quotation & Lead Conversion Engine
 * Formats WhatsApp direct quotes, Printable Official Benefit Illustrations, and Lead Captures.
 */

const LIC_QUOTATION = {
  /**
   * Helper to format currency
   */
  fmt(amount) {
    if (typeof LIC_CALCULATOR !== 'undefined' && LIC_CALCULATOR.formatIndianCurrency) {
      return LIC_CALCULATOR.formatIndianCurrency(amount);
    }
    if (isNaN(amount) || amount === null || amount === undefined) return "0";
    amount = Math.round(amount);
    let numStr = amount.toString();
    let isNegative = false;
    if (numStr.startsWith("-")) {
      isNegative = true;
      numStr = numStr.substring(1);
    }
    let lastThree = numStr.substring(numStr.length - 3);
    let otherNumbers = numStr.substring(0, numStr.length - 3);
    if (otherNumbers !== "") {
      lastThree = "," + lastThree;
    }
    let formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return isNegative ? `-${formatted}` : formatted;
  },

  /**
   * Build WhatsApp URL with pre-filled benefit details
   */
  generateWhatsAppLink(config, plan, calcResult, customerData = {}) {
    const phone = config.whatsappNumber;
    const planName = plan ? `${plan.name} (Table ${plan.tableNo})` : "LIC Policy";
    const custName = customerData.name ? customerData.name : "Prospective Client";
    const custPhone = customerData.phone ? customerData.phone : "";
    const custCity = customerData.city ? customerData.city : "";

    let message = `*LIC POLICY QUOTATION INQUIRY*\n`;
    message += `------------------------------------\n`;
    message += `*Advisor:* ${config.advisorFullName}\n`;
    message += `*Branch:* ${config.branchName}\n\n`;

    if (customerData.name) {
      message += `*Client Name:* ${custName}\n`;
      if (custPhone) message += `*Contact:* ${custPhone}\n`;
      if (custCity) message += `*City:* ${custCity}\n`;
      message += `------------------------------------\n\n`;
    }

    message += `*Selected Plan:* ${planName}\n`;
    message += `*Age:* ${calcResult.age} Years\n`;
    message += `*Sum Assured:* ₹${this.fmt(calcResult.sumAssured)}\n`;
    message += `*Policy Term:* ${calcResult.term} Years\n`;
    message += `*Premium Paying Term:* ${calcResult.ppt} Years\n`;
    message += `*Payment Frequency:* ${calcResult.mode}\n\n`;

    message += `*INVESTMENT BREAKDOWN:*\n`;
    message += `• 1st Year Premium (incl. GST): ₹${this.fmt(calcResult.firstYearInstallment)}\n`;
    if (calcResult.ppt > 1) {
      message += `• Renewal Premium (incl. GST): ₹${this.fmt(calcResult.renewalInstallment)}\n`;
    }
    message += `• Daily Savings Equiv: *Just ₹${calcResult.dailyEquiv} / day*\n`;
    message += `• Total Investment: ₹${this.fmt(calcResult.totalInvestment)}\n\n`;

    if (!calcResult.isTermPlan) {
      message += `*GUARANTEED & ESTIMATED RETURNS:*\n`;
      if (calcResult.milestonePayouts && calcResult.milestonePayouts.length > 0) {
        message += `• Milestone Payouts: ₹${this.fmt(calcResult.totalSurvivalBenefit)} (Periodic Cash Back)\n`;
      }
      if (calcResult.guaranteedAnnualIncome > 0) {
        message += `• Guaranteed Annual Income: ₹${this.fmt(calcResult.guaranteedAnnualIncome)} / Year for Life!\n`;
      }
      message += `• Maturity Lump Sum: *₹${this.fmt(calcResult.maturityLumpSum)}*\n`;
      message += `• Total Estimated Returns: *₹${this.fmt(calcResult.totalReturns)}*\n`;
      message += `• Net Wealth Gain: ₹${this.fmt(calcResult.netGain)} (${calcResult.returnMultiple}x Return)\n\n`;
    } else {
      message += `*COVERAGE HIGHLIGHTS:*\n`;
      message += `• Pure Life Cover: ₹${this.fmt(calcResult.sumAssured)}\n`;
      message += `• 100% Sovereign Guarantee under Section 37 of LIC Act\n\n`;
    }

    message += `*TAX BENEFITS:*\n`;
    message += `• Tax Savings under Sec 80C & 100% Tax-Free Returns under Sec 10(10D)\n\n`;
    message += `Hello Pralhad ji, I would like to purchase / get more details on this plan. Please connect with me at your earliest.`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encoded}`;
  },

  /**
   * Render Printable Official-Style Illustration HTML
   */
  renderPrintableQuotation(config, plan, calcResult, customerData = {}) {
    const today = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const clientName = customerData.name || "Valued Client";
    const clientPhone = customerData.phone || "Not Specified";
    const clientCity = customerData.city || "India";

    return `
      <div class="print-quotation bg-white text-gray-900 p-8 max-w-4xl mx-auto border border-gray-300 rounded-lg shadow-sm" id="printable-quotation-content">
        <!-- Header -->
        <div class="border-b-2 border-blue-900 pb-4 mb-6 flex justify-between items-start">
          <div>
            <div class="flex items-center space-x-3 mb-1">
              <div class="w-10 h-10 bg-blue-900 text-yellow-400 font-bold rounded-full flex items-center justify-center text-lg shadow">
                LIC
              </div>
              <div>
                <h1 class="text-xl font-extrabold text-blue-900 tracking-tight">LIFE INSURANCE CORPORATION OF INDIA</h1>
                <p class="text-xs text-gray-600 font-medium">Personalized Benefit Illustration & Financial Plan</p>
              </div>
            </div>
            <p class="text-xs text-amber-800 font-semibold mt-1">
              ★ Backed by Sovereign Guarantee of Central Government under Section 37 of LIC Act, 1956
            </p>
          </div>
          <div class="text-right text-xs text-gray-600">
            <p><span class="font-bold text-gray-800">Date:</span> ${today}</p>
            <p><span class="font-bold text-gray-800">Quote Ref:</span> LIC-${Date.now().toString().slice(-6)}</p>
            <p class="text-emerald-700 font-bold">Claim Ratio: 98.5%+</p>
          </div>
        </div>

        <!-- Advisor & Client Info Bar -->
        <div class="grid grid-cols-2 gap-4 bg-blue-50 p-4 rounded-md mb-6 border border-blue-100 text-sm">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">Prepared For:</h3>
            <p class="font-bold text-gray-900 text-base">${clientName}</p>
            <p class="text-xs text-gray-600">Age: <span class="font-semibold text-gray-800">${calcResult.age} Years</span> | Phone: ${clientPhone}</p>
            <p class="text-xs text-gray-600">Location: ${clientCity}</p>
          </div>
          <div class="border-l border-blue-200 pl-4">
            <h3 class="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">Authorized Advisor:</h3>
            <p class="font-bold text-gray-900 text-base">${config.advisorFullName}</p>
            <p class="text-xs text-gray-600">Agency Code: <span class="font-semibold text-gray-800">${config.agencyCode}</span></p>
            <p class="text-xs text-gray-600">Branch: ${config.branchName}</p>
            <p class="text-xs text-gray-600 font-semibold text-blue-900">Contact: ${config.phone}</p>
          </div>
        </div>

        <!-- Plan Specifications Table -->
        <div class="mb-6">
          <h2 class="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b pb-1">1. Policy Specifications</h2>
          <table class="w-full text-xs text-left border border-gray-200">
            <tbody class="divide-y divide-gray-200">
              <tr class="bg-gray-50">
                <td class="p-2 font-semibold text-gray-700 w-1/4">Plan Name & Table No.</td>
                <td class="p-2 font-bold text-blue-900 w-1/4">${plan.name} (Table ${plan.tableNo})</td>
                <td class="p-2 font-semibold text-gray-700 w-1/4">Basic Sum Assured</td>
                <td class="p-2 font-bold text-emerald-800 w-1/4">₹${this.fmt(calcResult.sumAssured)}</td>
              </tr>
              <tr>
                <td class="p-2 font-semibold text-gray-700">Policy Term</td>
                <td class="p-2 text-gray-900 font-medium">${calcResult.term} Years</td>
                <td class="p-2 font-semibold text-gray-700">Premium Paying Term (PPT)</td>
                <td class="p-2 text-gray-900 font-medium">${calcResult.ppt} Years</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="p-2 font-semibold text-gray-700">Payment Frequency</td>
                <td class="p-2 text-gray-900 font-medium">${calcResult.mode}</td>
                <td class="p-2 font-semibold text-gray-700">Daily Equivalent Cost</td>
                <td class="p-2 text-amber-700 font-bold">₹${calcResult.dailyEquiv} / day</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Premium Details & Schedule -->
        <div class="mb-6">
          <h2 class="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b pb-1">2. Premium Outflow Summary</h2>
          <div class="grid grid-cols-3 gap-3 text-center">
            <div class="p-3 bg-gray-50 border rounded">
              <span class="text-xs text-gray-500 block">1st Year Installment (incl. GST)</span>
              <span class="text-lg font-bold text-blue-900">₹${this.fmt(calcResult.firstYearInstallment)}</span>
            </div>
            <div class="p-3 bg-gray-50 border rounded">
              <span class="text-xs text-gray-500 block">Renewal Installment (incl. GST)</span>
              <span class="text-lg font-bold text-blue-900">₹${this.fmt(calcResult.renewalInstallment)}</span>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded">
              <span class="text-xs text-amber-800 font-semibold block">Total Investment Over PPT</span>
              <span class="text-lg font-bold text-amber-900">₹${this.fmt(calcResult.totalInvestment)}</span>
            </div>
          </div>
        </div>

        <!-- Returns & Maturity Illustration -->
        <div class="mb-6">
          <h2 class="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b pb-1">3. Guaranteed & Estimated Benefit Illustration</h2>
          <table class="w-full text-xs text-left border border-gray-200">
            <thead class="bg-blue-900 text-white font-semibold">
              <tr>
                <th class="p-2">Benefit Component</th>
                <th class="p-2">Calculation Basis</th>
                <th class="p-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="p-2 font-semibold">Basic Sum Assured (Guaranteed)</td>
                <td class="p-2 text-gray-600">Contractual Death & Maturity Base</td>
                <td class="p-2 text-right font-medium">₹${this.fmt(calcResult.sumAssured)}</td>
              </tr>
              ${calcResult.accruedBonus > 0 ? `
              <tr>
                <td class="p-2 font-semibold">Vested Bonus / Guaranteed Additions</td>
                <td class="p-2 text-gray-600">Accrued over policy tenure</td>
                <td class="p-2 text-right font-medium">₹${this.fmt(calcResult.accruedBonus)}</td>
              </tr>
              ` : ''}
              ${calcResult.finalAdditionalBonus > 0 ? `
              <tr>
                <td class="p-2 font-semibold">Final Additional Bonus (FAB)</td>
                <td class="p-2 text-gray-600">Paid on maturity for long-term policies</td>
                <td class="p-2 text-right font-medium">₹${this.fmt(calcResult.finalAdditionalBonus)}</td>
              </tr>
              ` : ''}
              ${calcResult.totalSurvivalBenefit > 0 ? `
              <tr class="bg-emerald-50">
                <td class="p-2 font-semibold text-emerald-900">Periodic Survival / Income Payouts</td>
                <td class="p-2 text-emerald-800 text-xs">Milestone Cashbacks or Lifelong Annual Payouts</td>
                <td class="p-2 text-right font-bold text-emerald-900">₹${this.fmt(calcResult.totalSurvivalBenefit)}</td>
              </tr>
              ` : ''}
              <tr class="bg-blue-50 font-bold text-sm">
                <td class="p-2.5 text-blue-900" colspan="2">Total Estimated Payout (Maturity + Survival)</td>
                <td class="p-2.5 text-right text-blue-900 text-base">₹${this.fmt(calcResult.totalReturns)}</td>
              </tr>
              <tr class="bg-green-100 font-bold text-sm">
                <td class="p-2.5 text-emerald-900" colspan="2">Net Wealth Gain Over Premium Paid (${calcResult.returnMultiple}x Multiplier)</td>
                <td class="p-2.5 text-right text-emerald-900 text-base">+ ₹${this.fmt(calcResult.netGain)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Key Statutory Disclaimers & Signatures -->
        <div class="border-t pt-4 text-xs text-gray-500 space-y-1">
          <p class="font-bold text-gray-700">Important Statutory Notes:</p>
          <p>• <strong>Tax Benefits:</strong> Premiums eligible for deduction under Section 80C. Payouts and death claims are 100% tax-free under Section 10(10D) as per current Income Tax provisions.</p>
          <p>• <strong>Sovereign Guarantee:</strong> As per Section 37 of the LIC Act, 1956, the Sum Assured and all bonuses declared by the Corporation are fully guaranteed as to payment in cash by the Central Government of India.</p>
          <p>• <strong>Illustration Purpose:</strong> Bonuses are illustrative and depend on Corporation's surplus valuation. LIC has maintained an unbroken 65+ year record of annual bonus declarations.</p>
        </div>

        <div class="mt-8 pt-4 border-t flex justify-between items-center text-xs text-gray-600">
          <div>
            <p class="font-semibold">Client Signature: _______________________</p>
          </div>
          <div class="text-right">
            <p class="font-bold text-blue-900">${config.advisorFullName}</p>
            <p class="text-gray-500">Authorized LIC Life Insurance Advisor</p>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Store Lead locally in localStorage and provide CSV download
   */
  saveLeadLocally(leadData) {
    try {
      let leads = JSON.parse(localStorage.getItem("pralhad_lic_leads") || "[]");
      leads.unshift({
        id: "LEAD-" + Date.now(),
        date: new Date().toISOString(),
        ...leadData
      });
      localStorage.setItem("pralhad_lic_leads", JSON.stringify(leads));
      return true;
    } catch (e) {
      console.warn("Could not save lead to localStorage", e);
      return false;
    }
  },

  /**
   * Export all leads to CSV file
   */
  exportLeadsCSV() {
    try {
      const leads = JSON.parse(localStorage.getItem("pralhad_lic_leads") || "[]");
      if (!leads.length) {
        alert("No leads recorded yet.");
        return;
      }
      const headers = ["ID", "Date", "Name", "Phone", "Age", "City", "Plan", "Budget", "Notes"];
      const rows = leads.map(l => [
        l.id,
        l.date,
        `"${(l.name || '').replace(/"/g, '""')}"`,
        `"${l.phone || ''}"`,
        l.age || '',
        `"${(l.city || '').replace(/"/g, '""')}"`,
        `"${(l.plan || '').replace(/"/g, '""')}"`,
        `"${l.budget || ''}"`,
        `"${(l.notes || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `lic_leads_${new Date().toISOString().slice(0,10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Export error", e);
    }
  }
};

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LIC_QUOTATION;
}

