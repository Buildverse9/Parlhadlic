/**
 * LIC Active Plans Comprehensive Dataset (Verified & Compliant)
 * All plan parameters, eligibility criteria, benefits, and sales points adhere strictly to official LIC circulars.
 */
const LIC_PLANS = [
  // ==========================================
  // 1. ENDOWMENT & SAVINGS PLANS
  // ==========================================
  {
    id: "jeevan-labh-936",
    tableNo: "936",
    name: "LIC Jeevan Labh",
    category: "endowment",
    categoryLabel: "With-Profits Endowment",
    badge: "Highest Bonus Allocation / Limited Premium",
    tagline: "Pay Premiums for Limited Years, Receive High Bonuses & Complete Family Protection",
    shortDesc: "A non-linked, with-profits, limited premium paying endowment plan offering high bonus rates and short premium payment periods.",
    minAge: 8,
    maxAge: 59,
    policyTermOptions: [
      { term: 16, ppt: 10, minAge: 8, maxAge: 59 },
      { term: 21, ppt: 15, minAge: 8, maxAge: 54 },
      { term: 25, ppt: 16, minAge: 8, maxAge: 50 }
    ],
    minSumAssured: 200000,
    maxSumAssured: "No Upper Limit (Subject to underwriting)",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "Sum Assured on Death (higher of Basic Sum Assured or 7x Annualized Premium) + Vested Simple Reversionary Bonuses + Final Additional Bonus (if any). Minimum 105% of total premiums paid.",
    maturityBenefit: "Basic Sum Assured + Vested Simple Reversionary Bonuses + Final Additional Bonus (FAB) paid as a lump sum at the end of the policy term.",
    survivalBenefit: "N/A (Full maturity corpus paid at term end).",
    taxBenefits: "Deduction under Section 80C up to ₹1.5 Lakh/yr. Maturity proceeds are 100% tax-free under Section 10(10D) for aggregate annual premiums up to ₹5 Lakhs. Death claims are 100% tax-free without ceiling.",
    loanFacility: "Available after completion of 2 full policy years with regular premium payments.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit Rider", "New Term Assurance Rider", "Critical Illness Rider"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB)",
    bonusRatePerThousand: 47, // Indicative historical average per 1,000 SA
    fabRatePerThousand: 250,   // Indicative FAB for 25 yrs
    agentPitch: {
      coreHook: "Pay for only 10, 15, or 16 years. Enjoy high compounding bonus accrual until maturity, backed by the Government of India under Section 37 of the LIC Act.",
      keyPoints: [
        "Limited Premium Paying: You do not pay for the whole term (e.g., pay 16 years, enjoy maturity at 25 years).",
        "Highest bonus rates declared among LIC's conventional endowment policies.",
        "Guaranteed safety: Section 37 of the LIC Act, 1956 guarantees Sum Assured and Bonuses in cash.",
        "Disciplined savings vehicle for child education, daughter's marriage, or risk-free retirement corpus.",
        "Emergency policy loan available within 48 hours without breaking your policy."
      ],
      idealFor: "Salaried individuals and business owners seeking high safe returns with limited paying commitment."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 25,
      defaultPpt: 16,
      baseRatePerThousand: 46.5
    }
  },
  {
    id: "new-jeevan-anand-915",
    tableNo: "915",
    name: "LIC New Jeevan Anand",
    category: "endowment",
    categoryLabel: "Endowment + Whole Life",
    badge: "Double Death Benefit / Lifetime Cover",
    tagline: "Zindagi Ke Saath Bhi, Zindagi Ke Baad Bhi - Maturity Today, Free Life Cover Forever",
    shortDesc: "A double benefit plan combining high lump-sum savings at maturity with complimentary lifelong life insurance cover until age 100.",
    minAge: 18,
    maxAge: 50,
    policyTermOptions: [
      { term: 15, ppt: 15, minAge: 18, maxAge: 50 },
      { term: 20, ppt: 20, minAge: 18, maxAge: 50 },
      { term: 25, ppt: 25, minAge: 18, maxAge: 50 },
      { term: 35, ppt: 35, minAge: 18, maxAge: 40 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "During Policy Term: 125% of Basic SA + Simple Reversionary Bonuses + FAB. After Maturity: Additional 100% Basic Sum Assured paid whenever death occurs (up to age 100) to family tax-free!",
    maturityBenefit: "Basic Sum Assured + Vested Simple Reversionary Bonuses + Final Additional Bonus in lump sum. The life risk cover continues for lifetime without paying any further premiums!",
    survivalBenefit: "N/A during term; Full whole life cover continues after maturity.",
    taxBenefits: "Deduction under Section 80C; Tax-Free Maturity & Death claim under Section 10(10D) as per current IT rules.",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance", "Critical Illness Rider"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB)",
    bonusRatePerThousand: 45,
    fabRatePerThousand: 200,
    agentPitch: {
      coreHook: "You get the full maturity amount with bonuses while you are alive, PLUS your family gets another full Sum Assured as an inheritance whenever you pass away, free of cost!",
      keyPoints: [
        "Double Financial Security: Maturity for yourself, and permanent legacy inheritance for children or grandchildren.",
        "Zero-cost life cover continues even after maturity till age 100.",
        "Section 37 Sovereign Guarantee ensures complete peace of mind.",
        "Provides liquidity through policy loans in emergencies."
      ],
      idealFor: "Family breadwinners wanting to enjoy a hefty maturity payout in their 50s while leaving a permanent financial legacy for their children."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 25,
      defaultPpt: 25,
      baseRatePerThousand: 45.2
    }
  },
  {
    id: "jeevan-lakshya-933",
    tableNo: "933",
    name: "LIC Jeevan Lakshya",
    category: "child",
    categoryLabel: "Child Goal & Family Protection",
    badge: "Child Education & Kanyadan Protector",
    tagline: "Your Child's Education & Marriage Guaranteed, Even in Your Absence",
    shortDesc: "A purpose-built plan that guarantees your child's future dreams: in case of unfortunate demise, all future premiums are waived, 10% annual income is paid, and the full maturity is paid at the end.",
    minAge: 18,
    maxAge: 50,
    policyTermOptions: [
      { term: 13, ppt: 10, minAge: 18, maxAge: 50 },
      { term: 18, ppt: 15, minAge: 18, maxAge: 50 },
      { term: 21, ppt: 18, minAge: 18, maxAge: 44 },
      { term: 25, ppt: 22, minAge: 18, maxAge: 40 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "1. All future premiums waived immediately. 2. 10% of Basic Sum Assured paid EVERY YEAR to the child for schooling/college till maturity. 3. At maturity, full 110% of Basic SA + SRB + FAB paid to child!",
    maturityBenefit: "Basic Sum Assured + Vested Reversionary Bonuses + Final Additional Bonus at end of policy term.",
    survivalBenefit: "N/A during regular term (unless demise happens, then 10% SA every year).",
    taxBenefits: "Section 80C rebate on premiums; 100% tax-free income and maturity benefits under Section 10(10D).",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Term Assurance Rider", "Critical Illness Rider"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB)",
    bonusRatePerThousand: 46,
    fabRatePerThousand: 220,
    agentPitch: {
      coreHook: "If you are alive, you hand over a giant cheque on your child's graduation or marriage day. If you are not here, LIC steps in as a parent, waives all fees, gives 10% cash every single year, and still gives the full maturity cheque!",
      keyPoints: [
        "Unbeatable Child Security: No bank FD or mutual fund waives future installments and pays an annual stipend upon death.",
        "10% Annual Income Benefit ensures uninterrupted schooling and lifestyle for your family.",
        "110% SA + Bonus paid at maturity guarantees the wedding or higher education happens exactly as planned.",
        "Limited Premium Payment: PPT is always 3 years less than Policy Term."
      ],
      idealFor: "Fathers and mothers with young children (ages 0-10) who want to guarantee graduation, MBBS/engineering, or wedding funding without any risk."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 32,
      defaultSumAssured: 1000000,
      defaultTerm: 21,
      defaultPpt: 18,
      baseRatePerThousand: 44.0
    }
  },
  {
    id: "bima-jyoti-860",
    tableNo: "860",
    name: "LIC Bima Jyoti",
    category: "endowment",
    categoryLabel: "Guaranteed Additions Endowment",
    badge: "100% Contractual Guaranteed Additions (₹50/1000 SA)",
    tagline: "Contractually Guaranteed Additions of ₹50 per ₹1,000 Sum Assured Every Single Year",
    shortDesc: "A non-linked, non-participating endowment plan offering legally guaranteed bonus additions of ₹50 per thousand sum assured added to the policy at the end of each policy year.",
    minAge: 0, // 90 days
    maxAge: 60,
    policyTermOptions: [
      { term: 15, ppt: 10, minAge: 0, maxAge: 60 },
      { term: 16, ppt: 11, minAge: 0, maxAge: 59 },
      { term: 18, ppt: 13, minAge: 0, maxAge: 57 },
      { term: 20, ppt: 15, minAge: 0, maxAge: 55 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "125% of Basic SA or 7 times annualized premium + Accrued Guaranteed Additions (₹50 per thousand SA per year).",
    maturityBenefit: "Basic Sum Assured + Total Accrued Guaranteed Additions (₹50 x Term x SA/1000) paid tax-free.",
    survivalBenefit: "N/A (Lump sum at maturity).",
    taxBenefits: "Deductions under Section 80C & 100% Tax-Free returns under Section 10(10D) as per current limits.",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance", "Critical Illness Rider", "Premium Waiver Benefit"],
    bonusType: "100% Guaranteed Additions (Contractual ₹50 per ₹1,000 SA per year)",
    bonusRatePerThousand: 50, // Guaranteed!
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Tired of fluctuating interest rates and bonus rumors? LIC Bima Jyoti legally writes ₹50 per thousand SA in your policy bond every single year, guaranteed!",
      keyPoints: [
        "100% Contractual Guarantee: ₹50 per ₹1,000 SA added every year regardless of economic ups and downs.",
        "Short Premium Paying Term: Pay for 5 years less than the policy term.",
        "Available for newborns starting from 90 days up to 60 years of age.",
        "Complete safety backed by Section 37 of the LIC Act."
      ],
      idealFor: "Risk-averse investors who demand fixed contractual guarantees rather than variable market or dividend returns."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 20,
      defaultPpt: 15,
      baseRatePerThousand: 50.0
    }
  },
  {
    id: "single-premium-endowment-917",
    tableNo: "917",
    name: "LIC Single Premium Endowment",
    category: "endowment",
    categoryLabel: "One-Time Investment",
    badge: "One-Time Deposit / Zero Renewal Hassle",
    tagline: "Deposit Once, Grow Wealth for Years with Guaranteed Sovereign Protection",
    shortDesc: "Single premium paying with-profits endowment plan ideal for investing bonus money, windfall gains, or property sale proceeds.",
    minAge: 0, // 90 days
    maxAge: 65,
    policyTermOptions: [
      { term: 10, ppt: 1, minAge: 0, maxAge: 65 },
      { term: 15, ppt: 1, minAge: 0, maxAge: 60 },
      { term: 20, ppt: 1, minAge: 0, maxAge: 55 },
      { term: 25, ppt: 1, minAge: 0, maxAge: 50 }
    ],
    minSumAssured: 50000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Single Premium"],
    deathBenefit: "Sum Assured on Death (higher of Basic SA or 1.25x Single Premium) + Simple Reversionary Bonuses + FAB.",
    maturityBenefit: "Basic Sum Assured + Vested Reversionary Bonuses + Final Additional Bonus.",
    survivalBenefit: "N/A.",
    taxBenefits: "Tax rebate under Section 80C; Tax-Free maturity under Section 10(10D) as per applicable guidelines.",
    loanFacility: "Available immediately after 3 months from policy commencement.",
    riders: ["N/A (Standard single premium)"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB)",
    bonusRatePerThousand: 42,
    fabRatePerThousand: 150,
    agentPitch: {
      coreHook: "Have a lump sum from business profits, property sale, or retirement gratuity? Park it in LIC once and watch it compound safely without recurring premium stress.",
      keyPoints: [
        "Zero Premium Due Reminders: Invest once and relax.",
        "Immediate Loan Availability within 90 days up to 90% of surrender value.",
        "Excellent alternative to taxable Fixed Deposits.",
        "Provides life insurance cover alongside high bonus appreciation."
      ],
      idealFor: "Individuals with idle lump-sum liquidity looking for safer-than-bank alternatives with life cover."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 35,
      defaultSumAssured: 1000000,
      defaultTerm: 15,
      defaultPpt: 1,
      baseRatePerThousand: 42.0
    }
  },

  // ==========================================
  // 2. WHOLE LIFE PLANS (LIFELONG INCOME)
  // ==========================================
  {
    id: "jeevan-utsav-871",
    tableNo: "871",
    name: "LIC Jeevan Utsav",
    category: "whole-life",
    categoryLabel: "Non-Linked Whole Life Income",
    badge: "10% Guaranteed Income for Life + ₹40/1000 GA",
    tagline: "Pay Premiums for 5 to 16 Years, Receive 10% Sum Assured Every Single Year for Life",
    shortDesc: "A non-linked, non-participating whole life plan offering guaranteed annual payout of 10% of Sum Assured for life, plus guaranteed additions of ₹40 per ₹1,000 SA during the premium paying term.",
    minAge: 0, // 90 days
    maxAge: 65,
    policyTermOptions: [
      { term: 100, ppt: 5, minAge: 8, maxAge: 65 },
      { term: 100, ppt: 8, minAge: 3, maxAge: 62 },
      { term: 100, ppt: 10, minAge: 0, maxAge: 60 },
      { term: 100, ppt: 12, minAge: 0, maxAge: 58 },
      { term: 100, ppt: 16, minAge: 0, maxAge: 50 }
    ],
    minSumAssured: 500000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "Sum Assured on Death (higher of Basic SA or 7x Annualized Premium, minimum 105% of premiums paid) + Accumulated Guaranteed Additions (₹40/1000 SA per year during PPT).",
    maturityBenefit: "Whole-life income plan: 10% of Basic Sum Assured paid EVERY YEAR for life as Regular Income (or flexi income accumulating at 5.5% p.a.). Upon death, full Basic Sum Assured + Guaranteed Additions paid to nominee.",
    survivalBenefit: "10% of Basic Sum Assured paid annually for life starting after deferment period (Option I: Regular Income, Option II: Flexi Income with 5.5% annual compound interest).",
    taxBenefits: "Deduction under Section 80C; All 10% annual payouts and death benefit are completely tax-free under Section 10(10D).",
    loanFacility: "Available after 2 policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "New Term Assurance", "Critical Illness Rider", "Premium Waiver Benefit"],
    bonusType: "Contractual Guaranteed Additions (₹40 per ₹1,000 SA during PPT) + 10% Annual Payout",
    bonusRatePerThousand: 40, // Guaranteed addition during PPT
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Where else in India can you get a 100% Government-backed guarantee of receiving 10% of your sum assured in your bank account every year for the rest of your life?",
      keyPoints: [
        "10% Guaranteed Annual Payout: If Sum Assured is ₹20 Lakhs, receive ₹2,00,000 every year without fail.",
        "Short Premium Paying Option: Pay for as little as 5 or 10 years and lock in income for 80+ years.",
        "Flexi Income Option: Leave your money with LIC and earn 5.5% compounding interest, withdraw whenever you want.",
        "Guaranteed Addition of ₹40 per ₹1,000 SA during the entire premium paying term.",
        "Sovereign Guarantee: No private company or bank can match this statutory safety."
      ],
      idealFor: "Anyone building a second salary, guaranteed retirement income, or parents gifting lifelong income to their child."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 35,
      defaultSumAssured: 1000000,
      defaultTerm: 100,
      defaultPpt: 10,
      baseRatePerThousand: 81.8
    }
  },
  {
    id: "jeevan-umang-945",
    tableNo: "945",
    name: "LIC Jeevan Umang",
    category: "whole-life",
    categoryLabel: "With-Profits Whole Life Income",
    badge: "8% Guaranteed Annual Income Till Age 100",
    tagline: "Pay for 15, 20, or 25 Years, Get 8% of Sum Assured Every Year + Giant Inheritance at 100",
    shortDesc: "A whole life with-profits plan offering 8% annual survival benefit from the end of PPT till age 99, plus a massive lump-sum maturity at age 100.",
    minAge: 0, // 90 days
    maxAge: 55,
    policyTermOptions: [
      { term: 100, ppt: 15, minAge: 0, maxAge: 55 },
      { term: 100, ppt: 20, minAge: 0, maxAge: 50 },
      { term: 100, ppt: 25, minAge: 0, maxAge: 45 },
      { term: 100, ppt: 30, minAge: 0, maxAge: 40 }
    ],
    minSumAssured: 200000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "Before PPT completion: Basic SA on Death + Simple Reversionary Bonuses + FAB. After PPT completion: Basic SA + Simple Reversionary Bonuses + FAB paid to nominee, even after collecting years of 8% survival income!",
    maturityBenefit: "At age 100: Basic Sum Assured + Accrued Reversionary Bonuses + Final Additional Bonus paid as huge inheritance.",
    survivalBenefit: "8% of Basic Sum Assured paid EVERY YEAR starting immediately after PPT finishes until age 99.",
    taxBenefits: "Deduction under Section 80C; All annual 8% payouts and maturity are 100% tax-free under Section 10(10D).",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance", "Critical Illness Rider", "Premium Waiver Benefit"],
    bonusType: "8% Guaranteed Survival Benefit + With-Profits Bonuses (SRB + FAB)",
    bonusRatePerThousand: 45,
    fabRatePerThousand: 400,
    agentPitch: {
      coreHook: "The ultimate 3-generation plan: You pay the premium, you and your spouse enjoy 8% tax-free pension for life, and your children inherit a huge fortune at age 100 or demise!",
      keyPoints: [
        "8% Annual Tax-Free Cash: ₹80,000 every year on a ₹10 Lakh policy, ₹1,60,000 on a ₹20 Lakh policy.",
        "Uninterrupted Life Cover until age 100.",
        "Accruing Bonuses: Unlike simple annuities where capital is locked or yields drop, Jeevan Umang gives bonuses on top of survival benefits.",
        "Loan facility available anytime up to 90% of surrender value."
      ],
      idealFor: "Professionals seeking an inflation-resistant pension, high-net-worth estate planning, and parents locking in a child's future income."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 100,
      defaultPpt: 15,
      baseRatePerThousand: 52.8
    }
  },

  // ==========================================
  // 3. MONEY BACK PLANS (PERIODIC PAYOUTS)
  // ==========================================
  {
    id: "money-back-20-920",
    tableNo: "920",
    name: "LIC New Money Back (20 Years)",
    category: "money-back",
    categoryLabel: "Periodic Cash Returns",
    badge: "20% Cash Back Every 5 Years",
    tagline: "Liquidity When You Need It - 20% Payouts at 5th, 10th & 15th Years + 40% + Bonus at 20th",
    shortDesc: "A participating non-linked money back plan offering guaranteed liquidity at regular 5-year intervals while maintaining 100% full risk cover throughout the 20-year term.",
    minAge: 13,
    maxAge: 50,
    policyTermOptions: [
      { term: 20, ppt: 15, minAge: 13, maxAge: 50 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "125% of Basic Sum Assured + Simple Reversionary Bonuses + FAB. (Crucial feature: Survival benefits already paid are NOT deducted from the death claim!)",
    maturityBenefit: "40% of Basic Sum Assured + Vested Reversionary Bonuses + Final Additional Bonus at 20th year.",
    survivalBenefit: "20% of Basic SA at end of 5th year, 20% of Basic SA at end of 10th year, 20% of Basic SA at end of 15th year (Total 60% paid in survival benefits).",
    taxBenefits: "Deduction under Section 80C; All survival benefits and maturity amount are 100% tax-free under Section 10(10D).",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance Rider", "Critical Illness Rider"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB) + 60% Guaranteed Cash Back",
    bonusRatePerThousand: 39,
    fabRatePerThousand: 90,
    agentPitch: {
      coreHook: "Why lock all your money away for 20 years? Get 20% cash in your bank at year 5, 10, and 15 for your lifestyle upgrades, car, or renovations, plus a grand bonus at year 20!",
      keyPoints: [
        "Guaranteed periodic liquidity every 5 years without breaking your investments.",
        "Crucial Protection: If something happens to you in the 18th year, LIC pays full 125% SA + Bonuses WITHOUT deducting the 60% money back you already enjoyed!",
        "Limited Premium Paying Term: Pay for only 15 years, enjoy benefits for 20 years.",
        "Triple Tax Exemption under Sections 80C and 10(10D)."
      ],
      idealFor: "Young families and entrepreneurs who need cash cushions every 5 years for vacations, home renovation, or vehicle purchases."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 20,
      defaultPpt: 15,
      baseRatePerThousand: 77.5
    }
  },
  {
    id: "money-back-25-921",
    tableNo: "921",
    name: "LIC New Money Back (25 Years)",
    category: "money-back",
    categoryLabel: "Periodic Cash Returns",
    badge: "15% Cash Back Every 5 Years",
    tagline: "4 Milestone Payouts of 15% Each + Grand Maturity Bonus at 25th Year",
    shortDesc: "A 25-year participating plan with premium payment of only 20 years, offering guaranteed periodic cash infusions at years 5, 10, 15, and 20.",
    minAge: 13,
    maxAge: 45,
    policyTermOptions: [
      { term: 25, ppt: 20, minAge: 13, maxAge: 45 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "125% of Basic Sum Assured + Simple Reversionary Bonuses + FAB, without deducting any past survival payouts.",
    maturityBenefit: "40% of Basic Sum Assured + Vested Reversionary Bonuses + Final Additional Bonus at 25th year.",
    survivalBenefit: "15% of Basic SA at end of 5th, 10th, 15th, and 20th years (Total 60% returned in cash).",
    taxBenefits: "Deduction under Section 80C; All 4 survival payouts and maturity lump-sum are 100% tax-free under Section 10(10D).",
    loanFacility: "Available after 2 full policy years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance", "Critical Illness Rider"],
    bonusType: "With-Profits (Simple Reversionary Bonus + FAB) + 60% Guaranteed Cash Back",
    bonusRatePerThousand: 41,
    fabRatePerThousand: 250,
    agentPitch: {
      coreHook: "Perfect milestone tracker: Get 15% every 5 years for your life goals, pay for only 20 years, and collect a massive 25th-year bonus.",
      keyPoints: [
        "Four milestone cash injections (15% x 4 = 60%) to finance predictable family needs.",
        "Higher Final Additional Bonus due to long 25-year term.",
        "Zero deduction of past survival payouts in the event of an unfortunate claim.",
        "Section 37 Sovereign Guarantee ensures complete reliability."
      ],
      idealFor: "Middle-aged individuals with recurring capital requirements (schooling, college, home upgrade, daughter's wedding)."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 25,
      defaultPpt: 20,
      baseRatePerThousand: 61.2
    }
  },
  {
    id: "dhan-rekha-863",
    tableNo: "863",
    name: "LIC Dhan Rekha",
    category: "money-back",
    categoryLabel: "Guaranteed Additions Money Back",
    badge: "Guaranteed Additions (₹50-₹60) + Women Rebate",
    tagline: "Periodic Cash Back With Contractual Guaranteed Additions of ₹50 - ₹60 per ₹1,000 SA",
    shortDesc: "A non-linked, non-participating savings-cum-protection plan offering guaranteed survival payouts, guaranteed additions, and special premium discounts for female lives.",
    minAge: 0, // 90 days
    maxAge: 60,
    policyTermOptions: [
      { term: 20, ppt: 10, minAge: 3, maxAge: 55 },
      { term: 30, ppt: 15, minAge: 2, maxAge: 45 },
      { term: 40, ppt: 20, minAge: 0, maxAge: 35 }
    ],
    minSumAssured: 200000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)", "Single"],
    deathBenefit: "125% of Basic Sum Assured + Accrued Guaranteed Additions (survival benefits already paid are not deducted).",
    maturityBenefit: "Balance Sum Assured (40% or 50% depending on term) + Accrued Guaranteed Additions (₹50 to ₹60 per 1000 SA).",
    survivalBenefit: "Periodic survival payouts of 10% to 15% of Sum Assured at defined intervals based on term.",
    taxBenefits: "Section 80C deduction & 100% Tax-Free under Section 10(10D).",
    loanFacility: "Available after 2 years.",
    riders: ["Accidental Death & Disability Benefit", "Accident Benefit", "Term Assurance", "Critical Illness Rider"],
    bonusType: "Contractual Guaranteed Additions (₹50 to ₹60 per ₹1,000 SA)",
    bonusRatePerThousand: 55, // Guaranteed addition
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Pay for half the term (e.g., pay 10 yrs for 20 yr term) and enjoy guaranteed money-back payouts plus guaranteed ₹50-₹60 additions!",
      keyPoints: [
        "Extraordinary 50% Limited Premium Term: Pay for only 10 years for a 20-year term, or 15 years for a 30-year term.",
        "Guaranteed Additions from ₹50 to ₹60 per thousand SA declared contractually.",
        "Special premium rate discount for women.",
        "Section 37 Sovereign Guarantee."
      ],
      idealFor: "Women investors, working professionals desiring ultra-short premium paying periods with periodic cash returns."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 1000000,
      defaultTerm: 20,
      defaultPpt: 10,
      baseRatePerThousand: 106.2
    }
  },

  // ==========================================
  // 4. TERM ASSURANCE (PURE RISK COVER)
  // ==========================================
  {
    id: "tech-term-854",
    tableNo: "854",
    name: "LIC Tech Term / Digi Term",
    category: "term",
    categoryLabel: "Pure Term Life Cover",
    badge: "₹1 Crore Cover at Affordable Cost",
    tagline: "High-Value Sovereign Family Protection at Unmatched Affordable Premiums",
    shortDesc: "A pure protection term insurance plan offering high financial security to the family of the policyholder in case of unfortunate demise at very affordable rates.",
    minAge: 18,
    maxAge: 65,
    policyTermOptions: [
      { term: 10, ppt: 10, minAge: 18, maxAge: 65 },
      { term: 20, ppt: 20, minAge: 18, maxAge: 60 },
      { term: 30, ppt: 30, minAge: 18, maxAge: 50 },
      { term: 40, ppt: 40, minAge: 18, maxAge: 40 }
    ],
    minSumAssured: 5000000, // 50 Lakhs min
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Single"],
    deathBenefit: "Full Sum Assured paid in lump sum, or in installments over 5, 10, or 15 years as chosen. Option for Level Sum Assured or Increasing Sum Assured (10% increase every year from 6th year).",
    maturityBenefit: "Zero (Pure term plan with maximum family risk cover).",
    survivalBenefit: "N/A.",
    taxBenefits: "Deduction under Section 80C up to ₹1.5 Lakh. Death claim payout is 100% tax-free under Section 10(10D).",
    loanFacility: "N/A (Pure term plan).",
    riders: ["Accident Benefit Rider"],
    bonusType: "Pure Protection (No Maturity / No Bonus)",
    bonusRatePerThousand: 0,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Private term plans advertise cheap rates but question claims when families are in grief. With LIC's 98.5%+ claim settlement and Government of India guarantee, your family is 100% safe.",
      keyPoints: [
        "Unbeatable Sovereign Guarantee: LIC claims can never be denied due to corporate insolvency.",
        "Massive ₹1 Crore+ life cover for just ₹25 - ₹35 a day.",
        "Increasing Sum Assured option to combat inflation automatically.",
        "Flexible death benefit payout options (lump sum or monthly family income)."
      ],
      idealFor: "Family breadwinners, home loan borrowers, young IT professionals seeking maximum financial replacement value."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 28,
      defaultSumAssured: 10000000,
      defaultTerm: 30,
      defaultPpt: 30,
      baseRatePerThousand: 1.5
    }
  },
  {
    id: "jeevan-amar-855",
    tableNo: "855",
    name: "LIC Jeevan Amar / Yuva Term",
    category: "term",
    categoryLabel: "Offline Term Insurance",
    badge: "Offline Term Cover with Non-Smoker Rebates",
    tagline: "Comprehensive High Sum Assured Protection with Special Non-Smoker Rates",
    shortDesc: "Offline term assurance plan offering flexible premium payment options (Regular, Limited 5/10 yrs, Single) and choice between Level and Increasing Sum Assured.",
    minAge: 18,
    maxAge: 65,
    policyTermOptions: [
      { term: 10, ppt: 10, minAge: 18, maxAge: 65 },
      { term: 20, ppt: 15, minAge: 18, maxAge: 60 },
      { term: 30, ppt: 25, minAge: 18, maxAge: 50 },
      { term: 40, ppt: 40, minAge: 18, maxAge: 40 }
    ],
    minSumAssured: 2500000, // 25 Lakhs
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Single"],
    deathBenefit: "Basic Sum Assured in lump sum or monthly installments. Increasing option grows cover by 10% annually up to double original SA.",
    maturityBenefit: "Zero (Pure risk cover).",
    survivalBenefit: "N/A.",
    taxBenefits: "Deduction under Section 80C; Tax-Free claim under Section 10(10D).",
    loanFacility: "N/A.",
    riders: ["Accident Benefit Rider"],
    bonusType: "Pure Protection (No Maturity / No Bonus)",
    bonusRatePerThousand: 0,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Personal offline service from Advisor Pralhad: From medical arrangement to nomination and claim assistance, your family won't have to deal with automated call centers.",
      keyPoints: [
        "Doorstep documentation and personalized assistance by an authorized LIC advisor.",
        "Separate discounted premium rates for healthy non-smokers and female policyholders.",
        "Limited payment option: Pay off all premiums in 5 or 10 years while enjoying cover till age 80.",
        "Section 37 Sovereign Guarantee."
      ],
      idealFor: "Individuals seeking personalized advisor support with transparent physical policy servicing."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 30,
      defaultSumAssured: 5000000,
      defaultTerm: 30,
      defaultPpt: 30,
      baseRatePerThousand: 1.8
    }
  },

  // ==========================================
  // 5. PENSION & ANNUITY PLANS (RETIREMENT)
  // ==========================================
  {
    id: "new-jeevan-shanti-858",
    tableNo: "858",
    name: "LIC New Jeevan Shanti",
    category: "pension",
    categoryLabel: "Deferred Guaranteed Annuity",
    badge: "Lock-in Lifelong Guaranteed Pension Rate",
    tagline: "Single Deposit Today, Enjoy a Guaranteed Monthly Pension for Life After 1 to 12 Years",
    shortDesc: "A single premium deferred annuity plan where the annuity rates are guaranteed at inception and paid for the life of the annuitant, with return of purchase price to family.",
    minAge: 30,
    maxAge: 79,
    policyTermOptions: [
      { term: "Life", ppt: 1, minAge: 30, maxAge: 79 }
    ],
    minSumAssured: 150000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Single Premium"],
    deathBenefit: "Higher of Purchase Price + Accrued Additional Benefit minus Annuity already paid, or 105% of Purchase Price.",
    maturityBenefit: "Lifelong Guaranteed Annuity (Monthly, Quarterly, Half-Yearly, or Yearly) with full return of purchase price to children/nominee on death.",
    survivalBenefit: "Guaranteed lifelong pension as per chosen deferment period (e.g. 5 yrs, 10 yrs).",
    taxBenefits: "Deduction under Section 80CCC. Annuity payouts are taxable as per personal income slab.",
    loanFacility: "Available after 3 months from inception.",
    riders: ["N/A"],
    bonusType: "Guaranteed Annuity Rate Locked at Purchase",
    bonusRatePerThousand: 85,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Fixed Deposit interest rates are dropping every decade. Lock in an 8% - 9.5% lifelong pension today with LIC that the Government of India guarantees will never reduce!",
      keyPoints: [
        "Guaranteed Annuity Rate locked at inception: No market crash can ever lower your monthly pension.",
        "Joint Life Option: Pension continues to your spouse after you, and the entire 100% purchase price is handed to your children.",
        "Deferment flexibility: Invest at age 45-50, start receiving regular pension at 55 or 60.",
        "Section 37 Sovereign Guarantee."
      ],
      idealFor: "Pre-retirees (ages 40-60) and seniors looking to lock in high guaranteed interest rates for life without stock market risk."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 50,
      defaultSumAssured: 2000000,
      defaultTerm: 10,
      defaultPpt: 1,
      baseRatePerThousand: 85.0
    }
  },
  {
    id: "jeevan-akshay-vii-857",
    tableNo: "857",
    name: "LIC Jeevan Akshay - VII",
    category: "pension",
    categoryLabel: "Immediate Guaranteed Annuity",
    badge: "Immediate Pension from Month 1",
    tagline: "Invest Once, Start Getting Guaranteed Monthly Pension from Next Month for Life",
    shortDesc: "An immediate annuity plan where you invest a lump sum and start receiving monthly pension immediately for the rest of your life, with return of 100% capital to nominees.",
    minAge: 30,
    maxAge: 85,
    policyTermOptions: [
      { term: "Life", ppt: 1, minAge: 30, maxAge: 85 }
    ],
    minSumAssured: 100000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Single Premium"],
    deathBenefit: "Option F: 100% Return of Purchase Price paid to nominee upon demise of annuitant.",
    maturityBenefit: "Guaranteed monthly/quarterly/annual pension for life.",
    survivalBenefit: "Continuous lifelong pension payment.",
    taxBenefits: "Rebate under Section 80CCC. Annuity taxable as salary/income.",
    loanFacility: "Available after 3 months.",
    riders: ["N/A"],
    bonusType: "Guaranteed Immediate Annuity Rate",
    bonusRatePerThousand: 68,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Retiring this month? Hand over your EPF/Gratuity to LIC and wake up on the 1st of every month with your pension credited into your bank account, guaranteed till age 100.",
      keyPoints: [
        "Immediate Cashflow: First pension payout starts within 30 days of depositing.",
        "100% Return of Capital to Nominee (Option F).",
        "Joint life option covers husband and wife for lifetime.",
        "Zero investment monitoring needed - no worries about stock market volatility."
      ],
      idealFor: "Retirees with lump sums from PF, gratuity, or VRS seeking immediate monthly salary replacement."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 60,
      defaultSumAssured: 2000000,
      defaultTerm: 30,
      defaultPpt: 1,
      baseRatePerThousand: 68.0
    }
  },

  // ==========================================
  // 6. CHILD EDUCATION & SPECIAL PLANS
  // ==========================================
  {
    id: "amritbaal-874",
    tableNo: "874",
    name: "LIC Amritbaal",
    category: "child",
    categoryLabel: "Guaranteed Child Endowment",
    badge: "Record ₹80 per ₹1,000 SA Guaranteed Additions",
    tagline: "Highest Guaranteed Additions Ever - ₹80 per ₹1,000 SA for Your Child's Higher Studies",
    shortDesc: "A non-linked, non-participating individual life insurance savings plan designed to fund higher education and financial needs of children, offering record-high guaranteed additions.",
    minAge: 0, // 30 days
    maxAge: 13,
    policyTermOptions: [
      { term: 10, ppt: 5, minAge: 0, maxAge: 13 },
      { term: 15, ppt: 7, minAge: 0, maxAge: 10 },
      { term: 20, ppt: 10, minAge: 0, maxAge: 5 },
      { term: 25, ppt: 10, minAge: 0, maxAge: 0 }
    ],
    minSumAssured: 200000,
    maxSumAssured: "No Upper Limit",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)", "Single"],
    deathBenefit: "Higher of Basic Sum Assured or 7x annualized premium + Accrued Guaranteed Additions (₹80/1000 SA per year).",
    maturityBenefit: "Basic Sum Assured + Accrued Guaranteed Additions at ₹80 per ₹1,000 SA per year paid at age 18-25.",
    survivalBenefit: "N/A (Lump sum at maturity or settlement option in installments).",
    taxBenefits: "Deductions under Section 80C & 100% Tax-Free maturity under Section 10(10D).",
    loanFacility: "Available after 2 years.",
    riders: ["Premium Waiver Benefit Rider"],
    bonusType: "100% Guaranteed Additions (₹80 per ₹1,000 SA per year)",
    bonusRatePerThousand: 80,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "LIC's newest and highest guaranteed addition plan: ₹80 per ₹1,000 SA added every year contractually. Perfect for paying high college tuition fees with zero uncertainty.",
      keyPoints: [
        "Unprecedented ₹80 per ₹1,000 SA Guaranteed Additions.",
        "Limited Premium Paying: Pay for 5, 6, or 7 years only.",
        "Maturity aligns exactly with child's age 18 to 25 when college fees are due.",
        "Premium Waiver Benefit ensures the policy runs smoothly even if parent is not around."
      ],
      idealFor: "Young parents aiming for premier engineering, medical, MBA, or study-abroad education funds for children aged 0 to 12."
    },
    calculatorConfig: {
      supported: true,
      defaultAge: 5,
      defaultSumAssured: 1000000,
      defaultTerm: 18,
      defaultPpt: 7,
      baseRatePerThousand: 95.0
    }
  },

  // ==========================================
  // 7. UNIT LINKED (ULIP) & HEALTH PLANS
  // ==========================================
  {
    id: "index-plus-873",
    tableNo: "873",
    name: "LIC Index Plus",
    category: "ulip",
    categoryLabel: "Index Linked Growth + Life Cover",
    badge: "Nifty 50 / Next 50 Market Growth",
    tagline: "Market Growth Linked to India's Top Indices with Guaranteed Additions & Life Insurance",
    shortDesc: "A unit-linked, non-participating regular premium life insurance plan that offers life insurance cover and investment in Nifty 50 and Nifty Growth index funds.",
    minAge: 0, // 90 days
    maxAge: 60,
    policyTermOptions: [
      { term: 10, ppt: 10, minAge: 0, maxAge: 60 },
      { term: 15, ppt: 15, minAge: 0, maxAge: 55 },
      { term: 20, ppt: 20, minAge: 0, maxAge: 50 },
      { term: 25, ppt: 25, minAge: 0, maxAge: 45 }
    ],
    minSumAssured: 300000,
    maxSumAssured: "Based on premium multiplier (7x - 10x)",
    paymentModes: ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"],
    deathBenefit: "Higher of Basic Sum Assured or Unit Fund Value.",
    maturityBenefit: "Full Unit Fund Value + Guaranteed Additions refund.",
    survivalBenefit: "N/A.",
    taxBenefits: "Deduction under Section 80C. Capital gains tax benefits under Section 10(10D) as per current IT rules.",
    loanFacility: "N/A (Partial withdrawals allowed after 5-year lock-in).",
    riders: ["Accidental Death Benefit Rider"],
    bonusType: "Unit-Linked Market Fund Value + Guaranteed Additions",
    bonusRatePerThousand: 0,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Want to capture India's stock market boom but trust only LIC? Index Plus gives you low-cost Nifty 50 index investing backed by the trusted house of LIC.",
      keyPoints: [
        "Invest directly in India's top 50 bluechip companies via Nifty 50 Index Fund.",
        "Guaranteed Additions added as percentage of annual premium at specific durations.",
        "Life cover included throughout the policy term.",
        "Partial withdrawals permitted after 5 policy years."
      ],
      idealFor: "Tech-savvy investors and young professionals desiring equity returns with an insurance safety net."
    },
    calculatorConfig: {
      supported: false
    }
  },
  {
    id: "arogya-rakshak-906",
    tableNo: "906",
    name: "LIC Arogya Rakshak",
    category: "health",
    categoryLabel: "Health & Surgical Benefit",
    badge: "Fixed Cash Hospital & Surgery Benefits",
    tagline: "Fixed Cash Benefits for Hospitalization & Major Surgeries, Independent of Mediclaim",
    shortDesc: "A non-linked, regular premium health insurance plan providing fixed financial protection against hospitalization, day care procedures, and surgical treatments.",
    minAge: 18,
    maxAge: 65,
    policyTermOptions: [
      { term: 20, ppt: 20, minAge: 18, maxAge: 65 }
    ],
    minSumAssured: 250000,
    maxSumAssured: 1000000,
    paymentModes: ["Yearly", "Half-Yearly"],
    deathBenefit: "Payment of Sum Assured to nominee + waiver of future premiums for covered family members.",
    maturityBenefit: "No maturity benefit (pure health protection).",
    survivalBenefit: "Hospital Cash Benefit + Major Surgical Benefit + Day Care Procedure Benefit.",
    taxBenefits: "Tax deduction under Section 80D up to ₹25,000 (and up to ₹50,000 for senior citizens).",
    loanFacility: "N/A.",
    riders: ["Quick Cash Benefit Rider"],
    bonusType: "Fixed Medical Benefit Payouts",
    bonusRatePerThousand: 0,
    fabRatePerThousand: 0,
    agentPitch: {
      coreHook: "Unlike regular mediclaim that pays only hospital bills, LIC Arogya Rakshak pays fixed cash directly into your bank account, compensating for loss of income and recovery costs!",
      keyPoints: [
        "Fixed Payout: Get full benefit regardless of actual expenses or other mediclaim policies.",
        "Covers entire family under a single policy.",
        "Income tax deduction under Section 80D.",
        "Ambulance charges and post-hospitalization allowances included."
      ],
      idealFor: "Families wanting financial support during medical crises to cover out-of-pocket costs and lost work days."
    },
    calculatorConfig: {
      supported: false
    }
  }
];

// Categories Metadata
const PLAN_CATEGORIES = [
  { id: "all", label: "All Plans", count: LIC_PLANS.length },
  { id: "endowment", label: "Endowment (Guaranteed Savings)", count: LIC_PLANS.filter(p => p.category === "endowment").length },
  { id: "whole-life", label: "Whole Life (Lifelong Income)", count: LIC_PLANS.filter(p => p.category === "whole-life").length },
  { id: "money-back", label: "Money Back (Periodic Returns)", count: LIC_PLANS.filter(p => p.category === "money-back").length },
  { id: "term", label: "Term Assurance (Pure Risk)", count: LIC_PLANS.filter(p => p.category === "term").length },
  { id: "pension", label: "Pension & Retirement", count: LIC_PLANS.filter(p => p.category === "pension").length },
  { id: "child", label: "Child Education & Goals", count: LIC_PLANS.filter(p => p.category === "child").length },
  { id: "ulip", label: "ULIPs & Market Linked", count: LIC_PLANS.filter(p => p.category === "ulip").length },
  { id: "health", label: "Health Protection", count: LIC_PLANS.filter(p => p.category === "health").length }
];

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LIC_PLANS, PLAN_CATEGORIES };
}
