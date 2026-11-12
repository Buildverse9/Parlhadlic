/**
 * LIC Financial & Maturity Calculation Engine (Verified & Transparent)
 * Accurately models Premiums, Bonuses, GST, Milestones, and Maturity Lump Sums.
 */

const LIC_CALCULATOR = {
  // Calibrated Tabular base rates per 1,000 SA
  tabularRates: {
    "936": {
      // Jeevan Labh: { Term_PPT: { age: baseRatePer1000 } }
      "16_10": { 20: 84.5, 25: 84.8, 30: 85.3, 35: 86.4, 40: 88.5, 45: 92.2, 50: 98.4, 55: 108.1 },
      "21_15": { 20: 53.2, 25: 53.6, 30: 54.3, 35: 55.8, 40: 58.4, 45: 63.1, 50: 70.2, 54: 77.8 },
      "25_16": { 20: 45.1, 25: 45.6, 30: 46.5, 35: 48.2, 40: 51.5, 45: 56.8, 50: 64.6 }
    },
    "915": {
      // New Jeevan Anand: Term = PPT
      "15_15": { 20: 74.2, 25: 74.6, 30: 75.3, 35: 76.8, 40: 79.5, 45: 84.1, 50: 91.5 },
      "20_20": { 20: 53.8, 25: 54.3, 30: 55.2, 35: 57.1, 40: 60.5, 45: 66.2, 50: 74.8 },
      "25_25": { 20: 42.6, 25: 43.2, 30: 44.5, 35: 47.0, 40: 51.2, 45: 58.1, 50: 67.9 },
      "35_35": { 20: 31.2, 25: 32.1, 30: 34.0, 35: 37.5, 40: 43.0 }
    },
    "933": {
      // Jeevan Lakshya (PPT = Term - 3)
      "18_15": { 20: 56.4, 25: 56.9, 30: 57.8, 35: 59.6, 40: 63.0, 45: 68.8, 50: 77.5 },
      "21_18": { 20: 48.2, 25: 48.8, 30: 49.8, 35: 51.9, 40: 55.7, 45: 62.1 },
      "25_22": { 20: 41.5, 25: 42.1, 30: 43.4, 35: 45.9, 40: 50.3 }
    },
    "860": {
      // Bima Jyoti (Guaranteed Additions ₹50/1000)
      "15_10": { 20: 82.0, 25: 82.5, 30: 83.2, 35: 84.5, 40: 87.2, 45: 91.8, 50: 99.2, 55: 110.5 },
      "20_15": { 20: 56.1, 25: 56.6, 30: 57.5, 35: 59.2, 40: 62.4, 45: 67.9, 50: 76.2 }
    },
    "871": {
      // Jeevan Utsav (Whole Life, 10% Guaranteed Lifelong Income)
      "100_5":  { 20: 172.5, 25: 173.0, 30: 174.0, 35: 175.5, 40: 178.0, 45: 182.0, 50: 188.5, 60: 210.0 },
      "100_8":  { 20: 104.2, 25: 104.8, 30: 105.6, 35: 107.0, 40: 109.2, 45: 113.0, 50: 118.5, 60: 136.0 },
      "100_10": { 20: 80.5, 25: 81.0, 30: 81.8, 35: 83.2, 40: 85.5, 45: 89.2, 50: 95.0, 60: 111.0 },
      "100_12": { 20: 65.8, 25: 66.3, 30: 67.2, 35: 68.6, 40: 71.0, 45: 74.8, 50: 80.5 },
      "100_16": { 20: 47.9, 25: 48.4, 30: 49.3, 35: 50.8, 40: 53.2, 45: 57.0, 50: 63.0 }
    },
    "945": {
      // Jeevan Umang (Whole Life, 8% Survival Benefit)
      "100_15": { 20: 51.5, 25: 52.0, 30: 52.8, 35: 54.2, 40: 56.8, 45: 61.2, 50: 68.0, 55: 78.5 },
      "100_20": { 20: 38.6, 25: 39.1, 30: 40.0, 35: 41.5, 40: 44.2, 45: 48.8, 50: 56.0 },
      "100_25": { 20: 30.8, 25: 31.4, 30: 32.3, 35: 34.0, 40: 37.0, 45: 42.0 },
      "100_30": { 20: 25.4, 25: 26.0, 30: 27.1, 35: 29.0, 40: 32.2 }
    },
    "920": {
      // 20-Year Money Back (PPT 15)
      "20_15": { 20: 76.5, 25: 76.8, 30: 77.5, 35: 78.8, 40: 81.2, 45: 85.4, 50: 92.0 }
    },
    "921": {
      // 25-Year Money Back (PPT 20)
      "25_20": { 20: 60.1, 25: 60.5, 30: 61.2, 35: 62.5, 40: 65.1, 45: 69.8 }
    },
    "863": {
      // Dhan Rekha (Guaranteed Additions ₹55/1000)
      "20_10": { 20: 105.0, 25: 105.5, 30: 106.2, 35: 107.5, 40: 109.8, 45: 114.2, 50: 122.0 },
      "30_15": { 20: 68.5, 25: 69.0, 30: 70.0, 35: 71.5, 40: 74.2, 45: 79.0 }
    },
    "854": {
      // Tech Term (Pure Term per 1,000 SA)
      "20_20": { 20: 1.1, 25: 1.2, 30: 1.4, 35: 1.9, 40: 2.8, 45: 4.2, 50: 6.5 },
      "30_30": { 20: 1.3, 25: 1.5, 30: 1.8, 35: 2.6, 40: 3.9, 45: 6.0, 50: 9.2 },
      "40_40": { 20: 1.6, 25: 1.9, 30: 2.4, 35: 3.6, 40: 5.5 }
    },
    "874": {
      // Amritbaal (Child Guaranteed ₹80/1000 SA)
      "15_7":  { 0: 142.0, 3: 142.5, 5: 143.2, 8: 144.5, 10: 146.0 },
      "20_10": { 0: 94.0,  3: 94.5,  5: 95.2,  8: 96.5,  10: 98.0 }
    }
  },

  /**
   * Interpolate base tabular rate
   */
  getBaseRate(tableNo, term, ppt, age) {
    const key = `${term}_${ppt}`;
    const planTable = this.tabularRates[tableNo];
    if (!planTable || !planTable[key]) {
      return 50.0;
    }

    const ageRates = planTable[key];
    const ages = Object.keys(ageRates).map(Number).sort((a, b) => a - b);

    if (age <= ages[0]) return ageRates[ages[0]];
    if (age >= ages[ages.length - 1]) return ageRates[ages[ages.length - 1]];

    for (let i = 0; i < ages.length - 1; i++) {
      const a1 = ages[i];
      const a2 = ages[i + 1];
      if (age >= a1 && age <= a2) {
        const r1 = ageRates[a1];
        const r2 = ageRates[a2];
        const factor = (age - a1) / (a2 - a1);
        return r1 + factor * (r2 - r1);
      }
    }
    return ageRates[ages[0]];
  },

  /**
   * High Sum Assured Rebate per 1,000 SA
   */
  getHighSARebate(sumAssured) {
    if (sumAssured >= 5000000) return 3.00;
    if (sumAssured >= 2000000) return 2.50;
    if (sumAssured >= 1000000) return 2.00;
    if (sumAssured >= 500000)  return 1.50;
    if (sumAssured >= 300000)  return 1.00;
    return 0.00;
  },

  /**
   * Mode Factor & Rebate
   */
  getModeFactor(mode) {
    switch (mode) {
      case "Yearly":
        return { multiplier: 1, rebatePercent: 0.02 }; // 2% yearly rebate
      case "Half-Yearly":
        return { multiplier: 0.5, rebatePercent: 0.01 }; // 1% half-yearly rebate
      case "Quarterly":
        return { multiplier: 0.25, rebatePercent: 0.00 };
      case "Monthly (NACH)":
        return { multiplier: 1 / 12, rebatePercent: 0.00 };
      case "Single":
        return { multiplier: 1, rebatePercent: 0.00 };
      default:
        return { multiplier: 1, rebatePercent: 0.00 };
    }
  },

  /**
   * Simple Reversionary Bonus Rate (per 1,000 SA per year)
   */
  getBonusRate(tableNo, term) {
    switch (tableNo) {
      case "936": // Jeevan Labh
        if (term === 16) return 43;
        if (term === 21) return 47;
        return 50; // 25 years
      case "915": // New Jeevan Anand
        if (term <= 15) return 41;
        if (term <= 20) return 45;
        return 49;
      case "933": // Jeevan Lakshya
        if (term <= 15) return 43;
        if (term <= 20) return 46;
        return 48;
      case "860": // Bima Jyoti (Contractual GA)
        return 50;
      case "871": // Jeevan Utsav (Contractual GA during PPT)
        return 40;
      case "945": // Jeevan Umang
        return 45;
      case "920": // Money Back 20
        return 39;
      case "921": // Money Back 25
        return 41;
      case "863": // Dhan Rekha (Contractual GA)
        return 55;
      case "874": // Amritbaal (Contractual GA)
        return 80;
      case "854": // Tech Term
      case "855": // Jeevan Amar
        return 0;
      default:
        return 45;
    }
  },

  /**
   * Final Additional Bonus Rate (per 1,000 SA)
   */
  getFABRate(tableNo, term, sumAssured) {
    if (["860", "871", "863", "874", "854", "855"].includes(tableNo)) {
      return 0;
    }
    if (term < 15) return 0;
    if (term < 20) return 30;
    if (term < 25) return 100;
    if (term === 25) {
      if (sumAssured >= 1000000) return 350;
      if (sumAssured >= 500000) return 250;
      return 150;
    }
    if (sumAssured >= 1000000) return 550;
    return 350;
  },

  /**
   * Main calculation method
   */
  calculate({ tableNo, age, term, ppt, sumAssured, mode = "Yearly" }) {
    tableNo = String(tableNo);
    age = Number(age);
    term = Number(term);
    ppt = Number(ppt);
    sumAssured = Number(sumAssured);

    // 1. Base tabular rate & Rebates
    let baseRate = this.getBaseRate(tableNo, term, ppt, age);
    const saRebate = this.getHighSARebate(sumAssured);
    let netRatePerThousand = Math.max(0.5, baseRate - saRebate);

    // 2. Mode Rebate
    const modeConfig = this.getModeFactor(mode);
    let annualBasicPremium = (netRatePerThousand * (sumAssured / 1000));
    annualBasicPremium -= annualBasicPremium * modeConfig.rebatePercent;

    let installmentBasic = annualBasicPremium * modeConfig.multiplier;

    // 3. GST: 4.5% Year 1, 2.25% Renewal (18% for pure term)
    const isTermPlan = ["854", "855"].includes(tableNo);
    const gstRateYear1 = isTermPlan ? 0.18 : 0.045;
    const gstRateRenewal = isTermPlan ? 0.18 : 0.0225;

    const installmentGstYear1 = Math.round(installmentBasic * gstRateYear1);
    const installmentGstRenewal = Math.round(installmentBasic * gstRateRenewal);

    const firstYearInstallment = Math.round(installmentBasic + installmentGstYear1);
    const renewalInstallment = Math.round(installmentBasic + installmentGstRenewal);

    const firstYearAnnual = Math.round(annualBasicPremium * (1 + gstRateYear1));
    const renewalAnnual = Math.round(annualBasicPremium * (1 + gstRateRenewal));

    const dailyEquiv = Math.round(firstYearAnnual / 365);
    const monthlyEquiv = Math.round(firstYearAnnual / 12);

    // Total Investment
    let totalInvestment = 0;
    if (ppt === 1 || mode === "Single") {
      totalInvestment = firstYearInstallment;
    } else {
      totalInvestment = firstYearAnnual + (ppt - 1) * renewalAnnual;
    }

    // 4. Returns & Bonus Accruals
    const bonusPerThousand = this.getBonusRate(tableNo, term);
    const fabPerThousand = this.getFABRate(tableNo, term, sumAssured);

    let accruedBonus = 0;
    let finalAdditionalBonus = 0;
    let milestonePayouts = [];
    let guaranteedAnnualIncome = 0;
    let totalSurvivalBenefit = 0;
    let maturityLumpSum = 0;
    let isContractualGuaranteed = false;
    let deathBenefitToFamily = sumAssured;

    // Plan Specific Calculations
    if (tableNo === "936" || tableNo === "915" || tableNo === "933") {
      // Classic With-Profits Endowment
      accruedBonus = Math.round(bonusPerThousand * term * (sumAssured / 1000));
      finalAdditionalBonus = Math.round(fabPerThousand * (sumAssured / 1000));
      maturityLumpSum = sumAssured + accruedBonus + finalAdditionalBonus;
      deathBenefitToFamily = Math.round(sumAssured * 1.25);
    } else if (tableNo === "860") {
      // Bima Jyoti: 100% Contractual Guaranteed Additions (₹50/1000 SA per year)
      isContractualGuaranteed = true;
      accruedBonus = Math.round(50 * term * (sumAssured / 1000));
      maturityLumpSum = sumAssured + accruedBonus;
      deathBenefitToFamily = Math.round(sumAssured * 1.25);
    } else if (tableNo === "871") {
      // Jeevan Utsav: 10% Guaranteed Income lifelong + ₹40/1000 GA during PPT
      isContractualGuaranteed = true;
      accruedBonus = Math.round(40 * ppt * (sumAssured / 1000)); // Accrued during PPT
      guaranteedAnnualIncome = Math.round(sumAssured * 0.10); // 10% every year for life!
      
      // Calculate realistic lifetime benefit (estimated over 30 years post-PPT)
      const estimatedYearsOfIncome = 30;
      totalSurvivalBenefit = guaranteedAnnualIncome * estimatedYearsOfIncome;
      
      // On demise at any point after PPT, family receives Basic SA + GA
      deathBenefitToFamily = sumAssured + accruedBonus;
      maturityLumpSum = deathBenefitToFamily;
    } else if (tableNo === "945") {
      // Jeevan Umang: 8% Guaranteed Annual Income from PPT till 99 + Lump Sum at 100
      accruedBonus = Math.round(bonusPerThousand * ppt * (sumAssured / 1000));
      finalAdditionalBonus = Math.round(fabPerThousand * (sumAssured / 1000));
      guaranteedAnnualIncome = Math.round(sumAssured * 0.08); // 8% every year
      
      const estimatedYearsOfIncome = 30;
      totalSurvivalBenefit = guaranteedAnnualIncome * estimatedYearsOfIncome;
      maturityLumpSum = sumAssured + accruedBonus + finalAdditionalBonus;
      deathBenefitToFamily = sumAssured + accruedBonus + finalAdditionalBonus;
    } else if (tableNo === "920") {
      // 20-Yr Money Back: 20% at 5, 10, 15 yrs + 40% + Bonus at 20th yr
      const sb = Math.round(sumAssured * 0.20);
      milestonePayouts = [
        { year: 5, percent: 20, amount: sb },
        { year: 10, percent: 20, amount: sb },
        { year: 15, percent: 20, amount: sb }
      ];
      totalSurvivalBenefit = sb * 3;
      accruedBonus = Math.round(bonusPerThousand * term * (sumAssured / 1000));
      finalAdditionalBonus = Math.round(fabPerThousand * (sumAssured / 1000));
      maturityLumpSum = Math.round(sumAssured * 0.40) + accruedBonus + finalAdditionalBonus;
      deathBenefitToFamily = Math.round(sumAssured * 1.25) + accruedBonus;
    } else if (tableNo === "921") {
      // 25-Yr Money Back: 15% at 5, 10, 15, 20 yrs + 40% + Bonus at 25th yr
      const sb = Math.round(sumAssured * 0.15);
      milestonePayouts = [
        { year: 5, percent: 15, amount: sb },
        { year: 10, percent: 15, amount: sb },
        { year: 15, percent: 15, amount: sb },
        { year: 20, percent: 15, amount: sb }
      ];
      totalSurvivalBenefit = sb * 4;
      accruedBonus = Math.round(bonusPerThousand * term * (sumAssured / 1000));
      finalAdditionalBonus = Math.round(fabPerThousand * (sumAssured / 1000));
      maturityLumpSum = Math.round(sumAssured * 0.40) + accruedBonus + finalAdditionalBonus;
      deathBenefitToFamily = Math.round(sumAssured * 1.25) + accruedBonus;
    } else if (tableNo === "863") {
      // Dhan Rekha (Guaranteed Additions ₹55/1000)
      isContractualGuaranteed = true;
      const sb1 = Math.round(sumAssured * 0.10);
      milestonePayouts = [
        { year: Math.round(term * 0.5), percent: 10, amount: sb1 },
        { year: Math.round(term * 0.75), percent: 10, amount: sb1 }
      ];
      totalSurvivalBenefit = sb1 * 2;
      accruedBonus = Math.round(55 * term * (sumAssured / 1000));
      maturityLumpSum = Math.round(sumAssured * 0.80) + accruedBonus;
    } else if (tableNo === "874") {
      // Amritbaal: Contractual Guaranteed Additions ₹80/1000 SA
      isContractualGuaranteed = true;
      accruedBonus = Math.round(80 * term * (sumAssured / 1000));
      maturityLumpSum = sumAssured + accruedBonus;
    } else if (isTermPlan) {
      maturityLumpSum = 0;
      totalSurvivalBenefit = 0;
    } else {
      accruedBonus = Math.round(bonusPerThousand * term * (sumAssured / 1000));
      finalAdditionalBonus = Math.round(fabPerThousand * (sumAssured / 1000));
      maturityLumpSum = sumAssured + accruedBonus + finalAdditionalBonus;
    }

    const totalReturns = maturityLumpSum + totalSurvivalBenefit;
    const netGain = totalReturns - totalInvestment;
    const returnMultiple = totalInvestment > 0 ? (totalReturns / totalInvestment).toFixed(2) : "N/A";

    // 5. Cashflow Timeline
    const timeline = [];
    const maxYear = term === 100 ? Math.min(30, 100 - age) : term;

    for (let yr = 1; yr <= maxYear; yr++) {
      let premiumOutflow = 0;
      if (yr <= ppt) {
        premiumOutflow = yr === 1 ? firstYearAnnual : renewalAnnual;
      }

      let cashInflow = 0;
      let milestoneNote = "";

      // Milestones
      const ms = milestonePayouts.find(m => m.year === yr);
      if (ms) {
        cashInflow += ms.amount;
        milestoneNote = `${ms.percent}% Milestone Payout (₹${this.formatIndianCurrency(ms.amount)})`;
      }

      // Jeevan Utsav 10% annual income
      if (tableNo === "871" && yr > ppt) {
        cashInflow += guaranteedAnnualIncome;
        milestoneNote = `10% Guaranteed Lifelong Income (₹${this.formatIndianCurrency(guaranteedAnnualIncome)})`;
      }

      // Jeevan Umang 8% annual income
      if (tableNo === "945" && yr > ppt) {
        cashInflow += guaranteedAnnualIncome;
        milestoneNote = `8% Guaranteed Annual Income (₹${this.formatIndianCurrency(guaranteedAnnualIncome)})`;
      }

      // Terminal maturity year
      if (yr === term && tableNo !== "871") {
        cashInflow += maturityLumpSum;
        milestoneNote = `Maturity Lump Sum (₹${this.formatIndianCurrency(maturityLumpSum)})`;
      }

      let lifeCover = deathBenefitToFamily;

      timeline.push({
        year: yr,
        age: age + yr,
        premiumOutflow,
        cashInflow,
        milestoneNote,
        lifeCover
      });
    }

    return {
      tableNo,
      age,
      term,
      ppt,
      sumAssured,
      mode,
      firstYearInstallment,
      renewalInstallment,
      firstYearAnnual,
      renewalAnnual,
      dailyEquiv,
      monthlyEquiv,
      totalInvestment,
      accruedBonus,
      finalAdditionalBonus,
      milestonePayouts,
      guaranteedAnnualIncome,
      totalSurvivalBenefit,
      maturityLumpSum,
      totalReturns,
      netGain,
      returnMultiple,
      timeline,
      isTermPlan,
      isContractualGuaranteed,
      deathBenefitToFamily
    };
  },

  /**
   * Currency formatter in Indian numbering system
   */
  formatIndianCurrency(amount) {
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
  }
};

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LIC_CALCULATOR;
}
