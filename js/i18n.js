/**
 * Internationalization (i18n) Engine for Pralhad LIC Official Website
 * Supports English (en), Marathi (mr), and Hindi (hi).
 */

const I18N_DATA = {
  // Current active language
  currentLang: "en",

  en: {
    // Top Bar
    sovereign_guarantee_badge: "Sovereign Guarantee:",
    sovereign_guarantee_text: "100% Sum Assured & Declared Bonuses Guaranteed by Central Govt (Sec 37, LIC Act 1956)",
    claim_ratio: "98.5%+ Claim Ratio",
    doorstep_service: "Free Doorstep Consultation",
    authorized_advisor: "AUTHORIZED LIC ADVISOR",
    branch_office: "Branch Office 883",

    // Navigation
    nav_plans: "LIC Plans",
    nav_calculator: "Maturity Calculator",
    nav_why_lic: "Why LIC (Truth vs FDs)",
    nav_goals: "Goal Matcher",
    nav_about: "About Pralhad",
    nav_faqs: "FAQs",
    nav_calc_btn: "Calculate Returns",
    nav_wa_btn: "WhatsApp Pralhad",

    // Mobile Navigation Bar
    mobile_bar_call: "Call",
    mobile_bar_calc: "Calculator",
    mobile_bar_plans: "Plans",
    mobile_bar_wa: "WhatsApp",
    mobile_swipe_hint: "Swipe left to compare all columns →",
    card_tap_hint: "Tap card to view full policy details →",

    // Hero Section
    hero_badge: "Authorized LIC of India Advisory Practice",
    hero_title_1: "Build Wealth With ",
    hero_title_highlight: "100% Sovereign-Guaranteed",
    hero_title_2: " Safety.",
    hero_subhead: "No market volatility, no bank default risk. Lock in contractually guaranteed cashflows, lifelong income, and tax-free payouts backed by the Parliament of India under Section 37 of the LIC Act.",
    hero_stat_1_val: "100%",
    hero_stat_1_lbl: "Govt Sovereign Guarantee",
    hero_stat_2_val: "98.5%+",
    hero_stat_2_lbl: "Claim Settlement Ratio",
    hero_stat_3_val: "100%",
    hero_stat_3_lbl: "Tax-Free (Sec 10(10D))",
    hero_stat_4_val: "2,500+",
    hero_stat_4_lbl: "Families Protected",
    hero_calc_cta: "Calculate Your Exact Maturity Returns",
    hero_wa_cta: "Get Instant Quotation on WhatsApp",
    hero_trust_sign: "Guaranteed personal doorstep guidance by Advisor Pralhad. Zero hidden service fees.",

    // Goal Matcher
    goals_tag: "Interactive Goal Matcher",
    goals_title: "What Is Your Most Important Financial Objective?",
    goals_desc: "Click on your priority goal to view the recommended plan and launch its calculator instantly.",
    goal_1_title: "Child's Higher Studies",
    goal_1_desc: "Ensure graduation/MBBS/wedding funds are 100% guaranteed even if you are not around tomorrow.",
    goal_1_btn: "Calculate Child Fund",
    goal_2_title: "Lifelong Guaranteed Income",
    goal_2_desc: "Receive 10% or 8% guaranteed cash directly into your bank every year for life, plus capital back to family.",
    goal_2_btn: "Calculate Lifelong Income",
    goal_3_title: "Limited-Pay High Bonus",
    goal_3_desc: "Pay premiums for a limited period (10, 15, or 16 yrs) and reap high compounding reversionary bonuses.",
    goal_3_btn: "Calculate Wealth Multiplier",
    goal_4_title: "₹1 Cr+ Pure Protection",
    goal_4_desc: "Shield home loans and your family's future with maximum financial replacement at just ₹25 - ₹35/day.",
    goal_4_btn: "Calculate ₹1 Cr Cover",

    // Calculator Section
    calc_tag: "Verified Returns & Cashflow Engine",
    calc_title: "How Much Money Will You Get In How Many Years?",
    calc_desc: "Calculate your exact installment premiums, daily equivalent savings, bonus accruals, survival payouts, and 100% tax-free maturity amount.",
    calc_box_title: "Customize Policy Parameters",
    calc_lbl_plan: "1. Select LIC Policy",
    calc_lbl_age: "2. Entry Age",
    calc_lbl_sa: "3. Basic Sum Assured (Life Cover)",
    calc_lbl_term: "4. Term & PPT",
    calc_lbl_mode: "5. Payment Mode",
    calc_mode_yearly: "Yearly (2% Rebate)",
    calc_mode_half_yearly: "Half-Yearly (1% Rebate)",
    calc_mode_quarterly: "Quarterly",
    calc_mode_monthly: "Monthly (NACH)",
    calc_disclosure: "Official Disclosure: Reversionary bonuses are calculated using latest declared annual valuation surplus rates. Guaranteed plans (Utsav, Bima Jyoti, Amritbaal) reflect 100% contractual guarantees in the policy bond.",
    calc_total_label: "Total Estimated Maturity & Survival Payouts",
    calc_daily_label: "Daily Savings Equivalent:",
    calc_col_1st_yr: "1st Year Installment",
    calc_col_renewal: "Renewal Installment",
    calc_col_total_invest: "Total Investment",
    calc_col_accrued_bonus: "Accrued Bonus / GA",
    calc_col_fab: "Final Addl. Bonus (FAB)",
    calc_col_net_gain: "Net Wealth Gain",
    calc_chart_caption: "Investment vs. Wealth Gain",
    calc_milestone_title: "Milestone Cashflows Over Time",
    calc_btn_wa: "Send Quotation To Pralhad on WhatsApp",
    calc_btn_print: "Print Official Illustration",

    // Why Buy LIC Section
    pitch_tag: "Why 25+ Crore Indian Families Trust LIC",
    pitch_title: "The Truth: LIC vs. Bank Fixed Deposits vs. Mutual Funds",
    pitch_desc: "Clear, honest financial facts every policyholder must understand before investing.",
    pitch_p1_title: "Section 37 Sovereign Guarantee",
    pitch_p1_sub: "Backed by the Central Government",
    pitch_p1_text: "Bank fixed deposits are insured only up to ₹5 Lakhs by DICGC. In contrast, under Section 37 of the LIC Act 1956, the Government of India guarantees every single rupee of your sum assured and declared bonuses in cash. Zero default risk.",
    pitch_p1_badge: "100% Capital & Profit Protection",
    pitch_p2_title: "Real Tax Freedom (80C & 10(10D))",
    pitch_p2_sub: "Zero Tax on Death & Qualified Maturity",
    pitch_p2_text: "Bank FD interest is taxed at your income tax slab (up to 31.2%), reducing your real return to 4-5%. LIC policies give Section 80C deductions up to ₹1.5L, and death claims are 100% tax-free without ceiling. Maturity proceeds for policies with annual premium up to ₹5L are completely tax-free under Section 10(10D).",
    pitch_p2_badge: "Keep 100% of Your Compounding Gains",
    pitch_p3_title: "Day 1 Family Protection",
    pitch_p3_sub: "Human Life Value (HLV)",
    pitch_p3_text: "If you save ₹50,000 in a mutual fund or FD and pass away after 6 months, your family gets only what you deposited. In an LIC plan, paying just one installment immediately creates a ₹10,00,000+ safety net that ensures your children's education and family lifestyle continue uninterrupted.",
    pitch_p3_badge: "Full Protection from Day 1",

    // Table Comparison
    comp_title: "Honest Comparison: LIC of India vs. Bank Fixed Deposits vs. Mutual Funds",
    comp_col_feature: "Key Factor",
    comp_col_lic: "LIC of India",
    comp_col_fd: "Bank Fixed Deposits",
    comp_col_mf: "Mutual Funds (SIP)",

    // Plan Explorer
    catalog_tag: "Official Policy Directory",
    catalog_title: "All Currently Available LIC Plans",
    catalog_desc: "Click anywhere on any policy card to open complete official policy terms, eligibility parameters, death and maturity claim calculations.",
    search_placeholder: "Search by plan name or table number (e.g. 936, Jeevan Labh, 871, Umang)...",
    card_why_buy: "Why Customers Buy:",
    card_click_hint: "Click card to view complete policy details →",
    btn_calc_returns: "Calculate Returns",
    btn_custom_quote: "Get Custom Quote",
    btn_view_terms: "View Full Terms",
    btn_chat_wa: "Chat on WhatsApp",

    // About Advisor
    about_tag: "Your Dedicated Financial Partner",
    about_title: "Meet Advisor Pralhad: 15+ Years of Service & 2,500+ Families Protected",
    about_desc: "Buying life insurance is a multi-decade relationship. Having a dedicated advisor ensures that your nominations stay updated, loan paperwork is handled in emergencies, and your family has a caring professional by their side during death or maturity claims.",
    about_srv_1_title: "Free Doorstep Service:",
    about_srv_1_desc: "Proposal form filling, medical checkup arrangement, and document collection.",
    about_srv_2_title: "Hassle-Free Claims:",
    about_srv_2_desc: "Personal guidance and documentation support during maturity or death claims.",
    about_srv_3_title: "Policy Revival & Updates:",
    about_srv_3_desc: "Revival of lapsed policies, bank mandate setup, and address changes.",
    about_srv_4_title: "Free Portfolio Review:",
    about_srv_4_desc: "Audit existing policies to ensure adequate family coverage and tax efficiency.",
    about_book_btn: "Book Free Consultation with Pralhad",

    // Testimonials
    test_tag: "Real Stories of Peace of Mind",
    test_title: "How Families Secured Their Financial Freedom",

    // Lead Form
    form_tag: "Free Personalized Financial Advice",
    form_title: "Ready to Protect Your Family's Financial Future?",
    form_desc: "Submit your details to receive an official benefit illustration on WhatsApp, or request a free doorstep visit by Advisor Pralhad.",
    form_lbl_name: "Your Full Name *",
    form_lbl_phone: "WhatsApp / Phone Number *",
    form_lbl_age: "Your Age",
    form_lbl_city: "City / Location",
    form_lbl_budget: "Monthly Savings Budget",
    form_lbl_plan: "Interested Policy or Financial Goal",
    form_btn_submit: "Get Instant Quotation via WhatsApp & Book Doorstep Visit",
    form_privacy: "🔒 Your contact information is 100% confidential. No spam, guaranteed.",

    // FAQs
    faq_tag: "Frequently Asked Questions",
    faq_title: "Clear, Verified Answers to Common LIC Questions",
    faq_q1: "What is the Section 37 Sovereign Guarantee of LIC?",
    faq_a1: "Under Section 37 of the Life Insurance Corporation Act 1956 passed by the Indian Parliament, the Sum Assured and all bonuses declared by LIC are legally guaranteed as to payment in cash by the Central Government of India. This statutory guarantee is unique to LIC and applies to every in-force policy.",
    faq_q2: "Are LIC policy maturity payouts really tax-free?",
    faq_a2: "Yes! Under Section 10(10D) of the Income Tax Act: 1. All death benefit claim payouts are 100% tax-free with zero upper limit. 2. For policies issued after April 1, 2023, maturity proceeds are completely tax-free if the aggregate annual premium across non-ULIP life insurance policies does not exceed ₹5,00,000 per year.",
    faq_q3: "Can I get a loan against my LIC policy during an emergency?",
    faq_a3: "Yes, all endowment and money-back policies qualify for a policy loan after 2 continuous years of premium payment. You can borrow up to 90% of the surrender value at competitive interest rates without any CIBIL score checks, and Advisor Pralhad can help arrange the disbursement within 48 to 72 hours.",
    faq_q4: "What happens if I miss paying a premium on the due date?",
    faq_a4: "LIC provides a Grace Period of 30 days for yearly, half-yearly, and quarterly modes (and 15 days for monthly mode). During this grace period, full life risk cover remains active. Even if a policy lapses, it can easily be revived within 5 years with Advisor Pralhad's assistance.",
    faq_q5: "What documents are required to purchase an LIC policy?",
    faq_a5: "Only standard KYC documents: 1. Aadhaar Card (Address Proof), 2. PAN Card (Identity Proof), 3. Passport size photo, 4. Bank Account Details / Cancelled Cheque (for direct credit of returns), and 5. Income proof (ITR / Salary Slip) for higher sum assured policies. Advisor Pralhad collects these right from your doorstep.",

    // Table Comparison Rows
    comp_row1_feat: "Statutory Guarantee",
    comp_row1_lic: "100% Central Govt Sovereign Guarantee (Sec 37)",
    comp_row1_fd: "Only up to ₹5 Lakhs (DICGC)",
    comp_row1_mf: "Zero Guarantee (Market Risk)",

    comp_row2_feat: "Tax on Returns",
    comp_row2_lic: "100% Tax-Free (Sec 10(10D) up to limits)",
    comp_row2_fd: "Fully Taxed at Slab Rate (up to 31.2%)",
    comp_row2_mf: "Capital Gains Tax (12.5% LTCG)",

    comp_row3_feat: "Immediate Life Cover",
    comp_row3_lic: "Full Sum Assured active from Day 1",
    comp_row3_fd: "Zero Life Cover",
    comp_row3_mf: "Zero Life Cover",

    comp_row4_feat: "Emergency Loan Facility",
    comp_row4_lic: "Up to 90% without CIBIL check",
    comp_row4_fd: "Premature penalty / break FD",
    comp_row4_mf: "Redemption taxes & market timing",

    comp_row5_feat: "Child Future Shield",
    comp_row5_lic: "Premiums waived & yearly stipend paid",
    comp_row5_fd: "Deposits cease upon demise",
    comp_row5_mf: "SIP stops immediately",

    // Footer
    footer_agency_code: "Agency Code:",
    footer_popular_title: "Popular LIC Plans",
    footer_services_title: "Advisor Services",
    footer_srv_1: "Free Doorstep KYC Pickup",
    footer_srv_2: "Claim Settlement Guidance",
    footer_srv_3: "Maturity Payout Processing",
    footer_srv_4: "Policy Revival Assistance",
    footer_srv_5: "Address & Nomination Changes",
    footer_srv_6: "Annual Portfolio Review",
    footer_contact_title: "Contact & Branch",
    footer_phone_lbl: "Direct Phone:",
    footer_wa_lbl: "WhatsApp:",
    footer_disclosure: "Statutory Disclosure: Insurance is the subject matter of solicitation. All policy features, premiums, and benefit illustrations shown are for educational and advisory guidance based on official LIC of India guidelines. With-profits bonuses depend on annual valuation surplus declarations.",
    footer_rights: "© 2026 Pralhad LIC Official Advisory. Backed by Section 37 of LIC Act 1956."
  },

  // ==========================================
  // MARATHI (मराठी) TRANSLATIONS
  // ==========================================
  mr: {
    // Top Bar
    sovereign_guarantee_badge: "सार्वभौम हमी:",
    sovereign_guarantee_text: "१००% विमा रक्कम आणि बोनस केंद्र सरकारद्वारे गॅरंटीड (कलम ३७, एलआयसी कायदा १९५६)",
    claim_ratio: "९८.५%+ क्लेम सेटलमेंट",
    doorstep_service: "मोफत घरपोच सल्ला व सेवा",
    authorized_advisor: "अधिकृत एलआयसी सल्लागार",
    branch_office: "शाखा कार्यालय ८८३",

    // Navigation
    nav_plans: "एलआयसी योजना",
    nav_calculator: "मॅच्युरिटी कॅल्क्युलेटर",
    nav_why_lic: "एलआयसीच का? (सत्य विरुद्ध एफडी)",
    nav_goals: "उद्दिष्ट शोधक",
    nav_about: "प्रल्हाद यांच्याबद्दल",
    nav_faqs: "वारंवार विचारले जाणारे प्रश्न",
    nav_calc_btn: "परतावा मोजा",
    nav_wa_btn: "व्हॉट्सॲपवर संपर्क करा",

    // Mobile Navigation Bar
    mobile_bar_call: "कॉल करा",
    mobile_bar_calc: "कॅल्क्युलेटर",
    mobile_bar_plans: "योजना",
    mobile_bar_wa: "व्हॉट्सॲप",
    mobile_swipe_hint: "सर्व तुलना पाहण्यासाठी डावीकडे स्वाइप करा →",
    card_tap_hint: "संपूर्ण माहिती पाहण्यासाठी कार्डवर टॅप करा →",

    // Hero Section
    hero_badge: "भारतीय जीवन विमा निगम (LIC) अधिकृत सल्लागार केंद्र",
    hero_title_1: "आपल्या कुटुंबाचे भविष्य सुरक्षित करा ",
    hero_title_highlight: "१००% सरकारी सार्वभौम हमीसह",
    hero_title_2: "!",
    hero_subhead: "शेअर बाजाराची कोणतीही जोखीम नाही, बँकेप्रमाणे बुडण्याची भीती नाही. भारतीय संसदेच्या कायद्यानुसार कलम ३७ अंतर्गत १००% हमखास परतावा, करमुक्त संपत्ती आणि आयुष्यभराची सुरक्षा मिळवा.",
    hero_stat_1_val: "१००%",
    hero_stat_1_lbl: "सरकारी सार्वभौम हमी",
    hero_stat_2_val: "९८.५%+",
    hero_stat_2_lbl: "दावा निपटारा गुणोत्तर",
    hero_stat_3_val: "१००%",
    hero_stat_3_lbl: "करमुक्त परतावा (१०(१०D))",
    hero_stat_4_val: "२,५००+",
    hero_stat_4_lbl: "संरक्षित कुटुंबे",
    hero_calc_cta: "तुमचा अचूक परतावा कॅल्क्युलेटरवर मोजा",
    hero_wa_cta: "व्हॉट्सॲपवर त्वरित कोटेशन मिळवा",
    hero_trust_sign: "सल्लागार प्रल्हाद यांच्याकडून मोफत वैयक्तिक घरपोच सेवा. कोणताही अतिरिक्त छुपा खर्च नाही.",

    // Goal Matcher
    goals_tag: "आर्थिक उद्दिष्ट मॅचर",
    goals_title: "आपले सर्वात महत्त्वाचे आर्थिक ध्येय काय आहे?",
    goals_desc: "तुमच्या प्राधान्य उद्दिष्टावर क्लिक करा आणि शिफारस केलेली सर्वोत्तम पॉलिसी व कॅल्क्युलेटर लगेच पहा.",
    goal_1_title: "मुलांचे उच्च शिक्षण व लग्न",
    goal_1_desc: "आपण असो वा नसो, मुलांच्या शिक्षणाचा आणि लग्नाचा खर्च १००% हमखास मिळण्याची तरतूद.",
    goal_1_btn: "मुलांच्या निधीचे गणित पहा",
    goal_2_title: "आयुष्यभर नियमित पेन्शन",
    goal_2_desc: "दरवर्षी विमेच्या १०% किंवा ८% हमखास रक्कम बँक खात्यात मिळवा आणि संपूर्ण भांडवल वारसांना परत मिळवा.",
    goal_2_btn: "आयुष्यभर पेन्शन मोजा",
    goal_3_title: "कमी मुदत प्रीमियम, जास्त बोनस",
    goal_3_desc: "केवळ १०, १५ किंवा १६ वर्षे प्रीमियम भरा आणि २५ व्या वर्षी भरघोस करमुक्त बोनस मिळवा.",
    goal_3_btn: "संपत्ती वृद्धी मोजा",
    goal_4_title: "१ कोटी+ कुटुंबाची सुरक्षा",
    goal_4_desc: "गृहकर्ज आणि कुटुंबाचे राहणीमान सुरक्षित ठेवण्यासाठी दररोज केवळ २५ ते ३५ रुपयांमध्ये मोठा विमा.",
    goal_4_btn: "१ कोटी संरक्षणाचे गणित पहा",

    // Calculator Section
    calc_tag: "तपासलेले परतावा व कॅशफ्लो कॅल्क्युलेटर",
    calc_title: "तुम्हाला किती वर्षांत किती पैसे मिळतील?",
    calc_desc: "तुमचा हप्ता, दररोजची बचत, जमा होणारा बोनस, वेळोवेळी मिळणारे परतावे आणि करमुक्त मॅच्युरिटी रक्कम अचूक मोजा.",
    calc_box_title: "पॉलिसीचे निकष निवडा",
    calc_lbl_plan: "१. एलआयसी योजना निवडा",
    calc_lbl_age: "२. तुमचे चालू वय",
    calc_lbl_sa: "३. विमा छत्र रक्कम (Sum Assured)",
    calc_lbl_term: "४. मुदत आणि प्रीमियम भरण्याचा कालावधी",
    calc_lbl_mode: "५. हप्ता भरण्याची पद्धत",
    calc_mode_yearly: "वार्षिक (२% सवलत)",
    calc_mode_half_yearly: "सहामाही (१% सवलत)",
    calc_mode_quarterly: "त्रैमासिक",
    calc_mode_monthly: "मासिक (NACH बँक डेबिट)",
    calc_disclosure: "अधिकृत माहिती: रिव्हर्शनरी बोनस एलआयसीच्या ताज्या घोषित व्हॅल्यूएशन दरावर आधारित आहेत. गॅरंटीड योजना (उत्सव, विमा ज्योती, अमृतबाल) पॉलिसी बॉण्डमध्ये १००% कायदेशीर हमी देतात.",
    calc_total_label: "अंदाजे एकूण मॅच्युरिटी व सर्व परतावे",
    calc_daily_label: "दररोजची समतुल्य बचत:",
    calc_col_1st_yr: "पहिल्या वर्षाचा हप्ता",
    calc_col_renewal: "पुढील वर्षांचा हप्ता",
    calc_col_total_invest: "एकूण जमा केलेली रक्कम",
    calc_col_accrued_bonus: "जमा बोनस / GA",
    calc_col_fab: "अंतिम अतिरिक्त बोनस (FAB)",
    calc_col_net_gain: "निव्वळ करमुक्त नफा",
    calc_chart_caption: "गुंतवणूक विरुद्ध एकूण नफा",
    calc_milestone_title: "वर्षनिहाय मिळणारे परतावे",
    calc_btn_wa: "हे कोटेशन प्रल्हाद यांना व्हॉट्सॲपवर पाठवा",
    calc_btn_print: "अधिकृत कोटेशन प्रिंट करा",

    // Why Buy LIC Section
    pitch_tag: "२५+ कोटी भारतीय कुटुंबे एलआयसीवर का विश्वास ठेवतात?",
    pitch_title: "वास्तविक सत्य: एलआयसी विरुद्ध बँक एफडी विरुद्ध म्युच्युअल फंड",
    pitch_desc: "गुंतवणूक करण्यापूर्वी प्रत्येक कुटुंबाने समजून घ्यावेत असे महत्त्वपूर्ण आर्थिक नियम.",
    pitch_p1_title: "कलम ३७ अंतर्गत सार्वभौम हमी",
    pitch_p1_sub: "केंद्र सरकारची संपूर्ण कायदेशीर गॅरंटी",
    pitch_p1_text: "बँकेतील एफडी केवळ ५ लाख रुपयांपर्यंतच विमा संरक्षित असते. याउलट, एलआयसी कायदा १९५६ च्या कलम ३७ नुसार, केंद्र सरकार एलआयसीच्या प्रत्येक विम्याच्या मूळ रकमेची आणि घोषित बोनसची १००% रोख हमी देते. शून्य जोखीम.",
    pitch_p1_badge: "१००% भांडवल व नफा सुरक्षा",
    pitch_p2_title: "१००% करमुक्त परतावा (80C आणि 10(10D))",
    pitch_p2_sub: "मृत्यू दावा आणि मॅच्युरिटी पूर्णपणे करमुक्त",
    pitch_p2_text: "बँक एफडीवरील व्याज तुमच्या इन्कम टॅक्स स्लॅबनुसार ३१.२% पर्यंत कापले जाते. एलआयसीमध्ये ८०C अंतर्गत १.५ लाखांपर्यंत कर वजावट मिळते, आणि कलम १०(१०D) अंतर्गत मिळणारी सर्व मॅच्युरिटी रक्कम व मृत्यू दावे पूर्णपणे करमुक्त असतात.",
    pitch_p2_badge: "मिळणारा सर्व नफा तुमचा स्वतःचा",
    pitch_p3_title: "पहिल्या दिवसापासून संपूर्ण कुटुंबाला विमा सुरक्षा",
    pitch_p3_sub: "ह्युमन लाइफ व्हॅल्यू (HLV)",
    pitch_p3_text: "म्युच्युअल फंड किंवा एफडीमध्ये ५०,००० जमा केल्यानंतर ६ महिन्यांत काही अघटीत घडल्यास वारसांना फक्त जमा रक्कम मिळते. पण एलआयसीमध्ये केवळ १ हप्ता भरल्यासही पहिल्याच दिवसापासून कुटुंबाला १० लाख किंवा त्याहून अधिक रुपयांचे पूर्ण छत्र मिळते.",
    pitch_p3_badge: "पहिल्या दिवसापासून पूर्ण सुरक्षा",

    // Table Comparison
    comp_title: "तौलनिक अभ्यास: एलआयसी ऑफ इंडिया विरुद्ध बँक एफडी विरुद्ध म्युच्युअल फंड",
    comp_col_feature: "महत्त्वाचे वैशिष्ट्य",
    comp_col_lic: "एलआयसी ऑफ इंडिया",
    comp_col_fd: "बँक फिक्स्ड डिपॉझिट (FD)",
    comp_col_mf: "म्युच्युअल फंड (SIP)",

    // Plan Explorer
    catalog_tag: "अधिकृत पॉलिसी मार्गदर्शक",
    catalog_title: "सध्या उपलब्ध असलेल्या सर्व एलआयसी योजना",
    catalog_desc: "कोणत्याही पॉलिसी कार्डवर कुठेही क्लिक करा आणि तिचे संपूर्ण नियम, पात्रता, मृत्यू व मॅच्युरिटी फायदे सविस्तर पहा.",
    search_placeholder: "योजनेचे नाव किंवा टेबल नंबर शोधा (उदा. 936, जीवन लाभ, 871, उमंग)...",
    card_why_buy: "ग्राहक ही पॉलिसी का घेतात?",
    card_click_hint: "संपूर्ण तपशील पाहण्यासाठी कार्डवर क्लिक करा →",
    btn_calc_returns: "परतावा मोजा",
    btn_custom_quote: "कोटेशन मिळवा",
    btn_view_terms: "नियम पहा",
    btn_chat_wa: "व्हॉट्सॲपवर विचारा",

    // About Advisor
    about_tag: "तुमचा विश्वासू आर्थिक मार्गदर्शक",
    about_title: "सल्लागार प्रल्हाद: १५+ वर्षांचा अनुभव आणि २,५००+ संरक्षित कुटुंबे",
    about_desc: "आयुष्य विमा काढणे ही २०-३० वर्षांची वचनबद्धता असते. एक अनुभवी सल्लागार सोबत असल्यास नॉमिनेशन बदलणे, अडचणीच्या वेळी पॉलिसीवर कर्ज घेणे, आणि सर्वात महत्त्वाचे म्हणजे क्लेमच्या वेळी कुटुंबाला तत्पर मदत मिळणे सोपे होते.",
    about_srv_1_title: "मोफत घरपोच सेवा:",
    about_srv_1_desc: "प्रस्ताव फॉर्म भरणे, मेडिकल तपासणीचे नियोजन आणि कागदपत्रे घरून गोळा करणे.",
    about_srv_2_title: "दावा निपटारा सहाय्य:",
    about_srv_2_desc: "मॅच्युरिटी किंवा क्लेमच्या वेळी सर्व कागदपत्रांचे वैयक्तिक मार्गदर्शन.",
    about_srv_3_title: "पॉलिसी पुनरुज्जीवन:",
    about_srv_3_desc: "बंद पडलेली पॉलिसी पुन्हा सुरू करणे आणि बँक खाते अपडेट करणे.",
    about_srv_4_title: "मोफत पोर्टफोलिओ तपासणी:",
    about_srv_4_desc: "तुमच्या जुन्या पॉलिसींची तपासणी करून कुटुंबाला योग्य कव्हर आहे का ते तपासणे.",
    about_book_btn: "प्रल्हाद यांच्याशी विनामूल्य चर्चा बुक करा",

    // Testimonials
    test_tag: "समाधानी ग्राहकांचे अनुभव",
    test_title: "कुटुंबांनी आर्थिक सुरक्षितता कशी मिळवली?",

    // Lead Form
    form_tag: "विनामूल्य वैयक्तिक आर्थिक सल्ला",
    form_title: "आपल्या कुटुंबाचे भविष्य आजच सुरक्षित करण्यास तयार आहात?",
    form_desc: "खालील माहिती भरा आणि थेट व्हॉट्सॲपवर अधिकृत कोटेशन मिळवा किंवा सल्लागार प्रल्हाद यांच्या घरपोच भेटीची विनंती करा.",
    form_lbl_name: "तुमचे पूर्ण नाव *",
    form_lbl_phone: "व्हॉट्सॲप / फोन नंबर *",
    form_lbl_age: "तुमचे वय",
    form_lbl_city: "गाव / शहर",
    form_lbl_budget: "दरमहा बचतीचे बजेट",
    form_lbl_plan: "आवडलेली योजना किंवा आर्थिक ध्येय",
    form_btn_submit: "व्हॉट्सॲपवर त्वरित कोटेशन मिळवा व भेट निश्चित करा",
    form_privacy: "🔒 तुमची माहिती १००% सुरक्षित व गोपनीय ठेवली जाते. कोणतीही स्पॅमिंग नाही.",

    // FAQs
    faq_tag: "नेहमी विचारले जाणारे प्रश्न",
    faq_title: "एलआयसीबद्दल ग्राहकांच्या शंकांची स्पष्ट उत्तरे",
    faq_q1: "एलआयसीची कलम ३७ अंतर्गत सार्वभौम हमी (Sovereign Guarantee) म्हणजे नक्की काय?",
    faq_a1: "भारतीय संसदेने संमत केलेल्या एलआयसी कायदा १९५६ च्या कलम ३७ नुसार, विम्याची मूळ रक्कम आणि एलआयसीने घोषित केलेला सर्व बोनस केंद्र सरकारद्वारे रोखीने अदा करण्याची १००% कायदेशीर हमी दिली जाते. ही सरकारी सुरक्षा फक्त एलआयसीमध्येच उपलब्ध आहे.",
    faq_q2: "एलआयसीचा मॅच्युरिटी परतावा खरोखर १००% करमुक्त असतो का?",
    faq_a2: "होय! आयकर कायद्याच्या कलम १०(१०D) नुसार: १. मृत्यू दाव्याची सर्व रक्कम कोणत्याही मर्यादेशिवाय १००% करमुक्त असते. २. १ एप्रिल २०२३ नंतर काढलेल्या पॉलिसींसाठी, सर्व नॉन-युलिप पॉलिसींचा एकूण वार्षिक प्रीमियम ५ लाखांपेक्षा जास्त नसल्यास मिळणारी मॅच्युरिटी रक्कम पूर्णपणे करमुक्त असते.",
    faq_q3: "अडचणीच्या वेळी मला माझ्या एलआयसी पॉलिसीवर तात्काळ कर्ज मिळू शकते का?",
    faq_a3: "होय, सलग २ वर्षे प्रीमियम भरल्यानंतर सर्व एंडोमेंट व मनी बॅक पॉलिसींवर पॉलिसी कर्ज मिळते. कोणत्याही सिबिल स्कोअरच्या तपासणीशिवाय सरेंडर व्हॅल्यूच्या ९०% पर्यंत कर्ज अगदी माफक व्याजदरात उपलब्ध होते. सल्लागार प्रल्हाद ४८ ते ७२ तासांत रक्कम मिळवून देण्यास मदत करतात.",
    faq_q4: "प्रीमियम भरण्याची तारीख चुकल्यास काय होते?",
    faq_a4: "एलआयसी वार्षिक, सहामाही आणि त्रैमासिक पद्धतींसाठी ३० दिवसांचा ग्रेस पिरियड (Grace Period) देते (मासिकसाठी १५ दिवस). या काळात पूर्ण विमा छत्र चालू राहते. पॉलिसी लॅप्स झाल्यास सल्लागार प्रल्हाद यांच्या मदतीने ती ५ वर्षांच्या आत सहज पुन्हा चालू केली जाऊ शकते.",
    faq_q5: "एलआयसी पॉलिसी काढण्यासाठी कोणती कागदपत्रे लागतात?",
    faq_a5: "केवळ मूलभूत केवायसी कागदपत्रे: १. आधार कार्ड (पत्ता पुरावा), २. पॅन कार्ड (ओळख पुरावा), ३. पासपोर्ट आकाराचा फोटो, ४. बँक खाते तपशील / रद्द केलेला धनादेश (परतावा खात्यात जमा होण्यासाठी), ५. उत्पन्नाचा दाखला (मोठ्या विम्यासाठी). ही सर्व कागदपत्रे सल्लागार प्रल्हाद स्वतः घरून संकलित करतात.",

    // Table Comparison Rows
    comp_row1_feat: "कायदेशीर सरकारी हमी",
    comp_row1_lic: "१००% केंद्र सरकारची सार्वभौम हमी (कलम ३७)",
    comp_row1_fd: "केवळ ५ लाखांपर्यंत (DICGC)",
    comp_row1_mf: "कोणतीही हमी नाही (बाजार जोखीम)",

    comp_row2_feat: "परताव्यावरील आयकर",
    comp_row2_lic: "१००% करमुक्त (कलम १०(१०D))",
    comp_row2_fd: "३१.२% पर्यंत स्लॅबनुसार पूर्ण कर",
    comp_row2_mf: "भांडवली नफा कर (१२.५% LTCG)",

    comp_row3_feat: "पहिल्या दिवसापासून विमा संरक्षण",
    comp_row3_lic: "पहिल्या हप्त्यापासून पूर्ण विमा सक्रिय",
    comp_row3_fd: "कोणतेही विमा संरक्षण नाही",
    comp_row3_mf: "कोणतेही विमा संरक्षण नाही",

    comp_row4_feat: "तातडीचे कर्ज (Emergency Loan)",
    comp_row4_lic: "सिबिल स्कोअरशिवाय ९०% पर्यंत तात्काळ कर्ज",
    comp_row4_fd: "मुदतपूर्व दंड / एफडी मोडावी लागते",
    comp_row4_mf: "कर कपात आणि बाजारातील घसरणीची जोखीम",

    comp_row5_feat: "मुलांच्या भविष्याची सुरक्षा",
    comp_row5_lic: "सर्व पुढील हप्ते माफ + दरवर्षी शिष्यवृत्ती",
    comp_row5_fd: "ठेव थांबते, खाते बंद होते",
    comp_row5_mf: "एसआयपी लगेच बंद होते",

    // Footer
    footer_agency_code: "एजन्सी कोड:",
    footer_popular_title: "लोकप्रिय एलआयसी योजना",
    footer_services_title: "सल्लागार सेवा",
    footer_srv_1: "मोफत घरपोच केवायसी सेवा",
    footer_srv_2: "क्लेम सेटलमेंट वैयक्तिक मार्गदर्शन",
    footer_srv_3: "मॅच्युरिटी परतावा थेट बँक खात्यात",
    footer_srv_4: "बंद पडलेली पॉलिसी पुन्हा चालू करणे",
    footer_srv_5: "पत्ता व वारसदार (नॉमिनेशन) बदल",
    footer_srv_6: "वार्षिक विमा पोर्टफोलिओ पुनरावलोकन",
    footer_contact_title: "संपर्क व शाखा",
    footer_phone_lbl: "थेट फोन:",
    footer_wa_lbl: "व्हॉट्सॲप:",
    footer_disclosure: "वैधानिक प्रकटीकरण: विमा ही विनंतीचा विषय आहे. दर्शविलेली सर्व पॉलिसी वैशिष्ट्ये, प्रीमियम आणि लाभांची आकडेवारी अधिकृत एलआयसी मार्गदर्शक तत्त्वांवर आधारित शैक्षणिक व सल्लागार हेतूसाठी आहे.",
    footer_rights: "© २०२६ प्रल्हाद एलआयसी अधिकृत सल्लागार केंद्र. एलआयसी कायदा १९५६ च्या कलम ३७ द्वारे समर्थित."
  },

  // ==========================================
  // HINDI (हिंदी) TRANSLATIONS
  // ==========================================
  hi: {
    // Top Bar
    sovereign_guarantee_badge: "संप्रभु गारंटी:",
    sovereign_guarantee_text: "१००% बीमा राशि व घोषित बोनस केंद्र सरकार द्वारा गारंटीड (धारा ३७, एलआईसी अधिनियम १९५६)",
    claim_ratio: "९८.५%+ क्लेम सेटलमेंट",
    doorstep_service: "निःशुल्क डोरस्टेप परामर्श",
    authorized_advisor: "अधिकृत एलआईसी सलाहकार",
    branch_office: "शाखा कार्यालय ८८३",

    // Navigation
    nav_plans: "एलआईसी योजनाएं",
    nav_calculator: "मैच्योरिटी कैलकुलेटर",
    nav_why_lic: "एलआईसी ही क्यों? (सच बनाम एफडी)",
    nav_goals: "लक्ष्य चयनकर्ता",
    nav_about: "प्रल्हाद के बारे में",
    nav_faqs: "अक्सर पूछे जाने वाले सवाल",
    nav_calc_btn: "रिटर्न कैलकुलेट करें",
    nav_wa_btn: "व्हाट्सएप पर बात करें",

    // Mobile Navigation Bar
    mobile_bar_call: "कॉल करें",
    mobile_bar_calc: "कैलकुलेटर",
    mobile_bar_plans: "योजनाएं",
    mobile_bar_wa: "व्हाट्सएप",
    mobile_swipe_hint: "सभी कॉलम देखने के लिए बाएं स्वाइप करें →",
    card_tap_hint: "पूरा विवरण देखने के लिए कार्ड पर टैप करें →",

    // Hero Section
    hero_badge: "भारतीय जीवन बीमा निगम (LIC) अधिकृत सलाहकार केंद्र",
    hero_title_1: "अपने परिवार का भविष्य सुरक्षित करें ",
    hero_title_highlight: "१००% सरकारी सॉवरेन गारंटी",
    hero_title_2: " के साथ।",
    hero_subhead: "शेयर बाजार का कोई जोखिम नहीं, बैंक डूबने का कोई डर नहीं। भारतीय संसद के कानून की धारा ३७ के तहत १००% गारंटीड रिटर्न, कर-मुक्त संपत्ति और आजीवन सुरक्षा पाएं।",
    hero_stat_1_val: "१००%",
    hero_stat_1_lbl: "सरकारी संप्रभु गारंटी",
    hero_stat_2_val: "९८.५%+",
    hero_stat_2_lbl: "दावा निपटान अनुपात",
    hero_stat_3_val: "१००%",
    hero_stat_3_lbl: "कर-मुक्त रिटर्न (१०(१०D))",
    hero_stat_4_val: "२,५००+",
    hero_stat_4_lbl: "संरक्षित परिवार",
    hero_calc_cta: "अपना सटीक रिटर्न कैलकुलेटर पर देखें",
    hero_wa_cta: "व्हाट्सएप पर तुरंत कोटेशन पाएं",
    hero_trust_sign: "सलाहकार प्रल्हाद द्वारा व्यक्तिगत डोरस्टेप सेवा। कोई अतिरिक्त शुल्क नहीं।",

    // Goal Matcher
    goals_tag: "वित्तीय लक्ष्य चयनकर्ता",
    goals_title: "आपका सबसे महत्वपूर्ण वित्तीय उद्देश्य क्या है?",
    goals_desc: "अपने मुख्य लक्ष्य पर क्लिक करें और सुझाई गई सर्वश्रेष्ठ योजना और कैलकुलेटर तुरंत देखें।",
    goal_1_title: "बच्चों की उच्च शिक्षा व विवाह",
    goal_1_desc: "आपके रहने या न रहने पर भी बच्चों की कॉलेज की पढ़ाई और विवाह का खर्च १००% गारंटीड।",
    goal_1_btn: "शिक्षा कोष की गणना करें",
    goal_2_title: "आजीवन गारंटीड नियमित आय",
    goal_2_desc: "हर साल बीमा राशि का १०% या ८% गारंटीड बैंक खाते में पाएं और पूरी मूल राशि वारिसों को मिले।",
    goal_2_btn: "आजीवन पेंशन की गणना करें",
    goal_3_title: "सीमित समय प्रीमियम, उच्च बोनस",
    goal_3_desc: "केवल १०, १५ या १६ वर्ष प्रीमियम भरें और २५वें वर्ष भारी कर-मुक्त बोनस राशि पाएं।",
    goal_3_btn: "संपत्ति वृद्धि की गणना करें",
    goal_4_title: "१ करोड़+ का परिवार सुरक्षा कवच",
    goal_4_desc: "होम लोन और परिवार के भविष्य की सुरक्षा के लिए केवल २५ से ३५ रुपये प्रतिदिन में बड़ा कवर।",
    goal_4_btn: "१ करोड़ कवर की गणना करें",

    // Calculator Section
    calc_tag: "सत्यापित रिटर्न और कैशफ्लो कैलकुलेटर",
    calc_title: "आपको कितने वर्षों में कितने पैसे मिलेंगे?",
    calc_desc: "अपनी किस्त, दैनिक बचत, संचित बोनस, समयानुसार मिलने वाले रिटर्न और कर-मुक्त मैच्योरिटी की सटीक गणना करें।",
    calc_box_title: "पॉलिसी पैरामीटर चुनें",
    calc_lbl_plan: "१. एलआईसी योजना चुनें",
    calc_lbl_age: "२. आपकी वर्तमान उम्र",
    calc_lbl_sa: "३. मूल बीमा राशि (Sum Assured)",
    calc_lbl_term: "४. पॉलिसी अवधि और भुगतान समय",
    calc_lbl_mode: "५. प्रीमियम भुगतान का तरीका",
    calc_mode_yearly: "वार्षिक (२% छूट)",
    calc_mode_half_yearly: "अर्ध-वार्षिक (१% छूट)",
    calc_mode_quarterly: "त्रैमासिक",
    calc_mode_monthly: "मासिक (NACH बैंक ऑटो-डेबिट)",
    calc_disclosure: "आधिकारिक प्रकटीकरण: रिवर्शनरी बोनस एलआईसी द्वारा घोषित नवीनतम अधिशेष दरों पर आधारित हैं। गारंटीड योजनाएं (उत्सव, बीमा ज्योति, अमृतबाल) पॉलिसी बॉण्ड में १००% वैधानिक गारंटी देती हैं।",
    calc_total_label: "अनुमानित कुल मैच्योरिटी व सभी रिटर्न",
    calc_daily_label: "दैनिक बचत के बराबर:",
    calc_col_1st_yr: "प्रथम वर्ष की किस्त",
    calc_col_renewal: "नवीनीकरण किस्त",
    calc_col_total_invest: "कुल जमा राशि",
    calc_col_accrued_bonus: "संचित बोनस / GA",
    calc_col_fab: "अंतिम अतिरिक्त बोनस (FAB)",
    calc_col_net_gain: "शुद्ध कर-मुक्त लाभ",
    calc_chart_caption: "निवेश बनाम कुल लाभ",
    calc_milestone_title: "वर्षवार मिलने वाले भुगतान",
    calc_btn_wa: "यह कोटेशन प्रल्हाद को व्हाट्सएप पर भेजें",
    calc_btn_print: "आधिकारिक कोटेशन प्रिंट करें",

    // Why Buy LIC Section
    pitch_tag: "२५+ करोड़ भारतीय परिवार एलआईसी पर क्यों भरोसा करते हैं?",
    pitch_title: "सच्चाई: एलआईसी बनाम बैंक एफडी बनाम म्यूचुअल फंड",
    pitch_desc: "निवेश करने से पहले हर व्यक्ति को समझने योग्य महत्वपूर्ण वित्तीय तथ्य।",
    pitch_p1_title: "धारा ३७ के तहत संप्रभु गारंटी",
    pitch_p1_sub: "केंद्र सरकार की पूर्ण कानूनी गारंटी",
    pitch_p1_text: "बैंक एफडी में केवल ५ लाख रुपये तक का ही बीमा होता है। इसके विपरीत, एलआईसी अधिनियम १९५६ की धारा ३७ के अनुसार, भारत सरकार एलआईसी की हर पॉलिसी की मूल राशि और घोषित बोनस की १००% नकद गारंटी देती है। शून्य जोखिम।",
    pitch_p1_badge: "१००% पूंजी और मुनाफे की सुरक्षा",
    pitch_p2_title: "वास्तविक कर मुक्ति (80C और 10(10D))",
    pitch_p2_sub: "मृत्यु दावा और मैच्योरिटी पूरी तरह कर-मुक्त",
    pitch_p2_text: "बैंक एफडी का ब्याज आपके इनकम टैक्स स्लैब के अनुसार ३१.२% तक काटा जाता है। एलआईसी में ८०सी के तहत १.५ लाख तक टैक्स छूट मिलती है, और धारा १०(१०डी) के तहत मिलने वाली मैच्योरिटी और क्लेम राशि पूरी तरह टैक्स-फ्री होती है।",
    pitch_p2_badge: "सारा मुनाफा पूरी तरह आपका",
    pitch_p3_title: "पहले ही दिन से पूरे परिवार को सुरक्षा",
    pitch_p3_sub: "ह्यूमन लाइफ वैल्यू (HLV)",
    pitch_p3_text: "म्यूचुअल फंड या एफडी में ५०,००० जमा करने के बाद ६ महीने में अनहोनी हो जाए, तो केवल जमा रकम ही मिलती है। लेकिन एलआईसी में सिर्फ १ किस्त भरने पर भी पहले ही दिन से परिवार को १० लाख या उससे अधिक का सुरक्षा कवच मिल जाता है।",
    pitch_p3_badge: "पहले दिन से पूर्ण सुरक्षा",

    // Table Comparison
    comp_title: "सच्ची तुलना: एलआईसी ऑफ इंडिया बनाम बैंक एफडी बनाम म्यूचुअल फंड",
    comp_col_feature: "महत्वपूर्ण बिंदु",
    comp_col_lic: "एलआईसी ऑफ इंडिया",
    comp_col_fd: "बैंक फिक्स्ड डिपॉजिट (FD)",
    comp_col_mf: "म्यूचुअल फंड (SIP)",

    // Plan Explorer
    catalog_tag: "आधिकारिक पॉलिसी निर्देशिका",
    catalog_title: "वर्तमान में उपलब्ध सभी एलआईसी योजनाएं",
    catalog_desc: "किसी भी पॉलिसी कार्ड पर कहीं भी क्लिक करें और उसके पूर्ण नियम, पात्रता, मृत्यु व मैच्योरिटी लाभ विस्तार से देखें।",
    search_placeholder: "योजना का नाम या टेबल नंबर खोजें (उदा. 936, जीवन लाभ, 871, उमंग)...",
    card_why_buy: "लोग यह योजना क्यों खरीदते हैं?",
    card_click_hint: "संपूर्ण विवरण देखने के लिए कार्ड पर क्लिक करें →",
    btn_calc_returns: "रिटर्न की गणना करें",
    btn_custom_quote: "कोटेशन प्राप्त करें",
    btn_view_terms: "नियम देखें",
    btn_chat_wa: "व्हाट्सएप पर पूछें",

    // About Advisor
    about_tag: "आपका विश्वसनीय वित्तीय सलाहकार",
    about_title: "सलाहकार प्रल्हाद: १५+ वर्षों का अनुभव और २,५००+ संरक्षित परिवार",
    about_desc: "जीवन बीमा लेना २०-३० वर्षों का अटूट संबंध है। एक समर्पित सलाहकार होने से नॉमिनेशन अपडेट रहना, आपातकाल में लोन की सुविधा, और क्लेम के समय परिवार को तुरंत कागजी मदद मिलना सुनिश्चित होता है।",
    about_srv_1_title: "मुफ्त डोरस्टेप सेवा:",
    about_srv_1_desc: "प्रस्ताव फॉर्म भरना, मेडिकल टेस्ट की व्यवस्था और दस्तावेज घर से लेना।",
    about_srv_2_title: "सरल क्लेम सहायता:",
    about_srv_2_desc: "मैच्योरिटी या क्लेम के समय व्यक्तिगत मार्गदर्शन और कागजी सहायता।",
    about_srv_3_title: "पॉलिसी पुनरुद्धार:",
    about_srv_3_desc: "बंद पड़ी पॉलिसी को दोबारा चालू करना और बैंक मैंडेट जोड़ना।",
    about_srv_4_title: "मुफ्त पोर्टफोलियो समीक्षा:",
    about_srv_4_desc: "आपकी पुरानी पॉलिसियों की जांच ताकि परिवार के पास सही सुरक्षा कवर हो।",
    about_book_btn: "प्रल्हाद के साथ मुफ्त परामर्श बुक करें",

    // Testimonials
    test_tag: "संतुष्ट ग्राहकों के अनुभव",
    test_title: "परिवारों ने वित्तीय आजादी कैसे हासिल की?",

    // Lead Form
    form_tag: "मुफ्त व्यक्तिगत वित्तीय सलाह",
    form_title: "अपने परिवार का वित्तीय भविष्य सुरक्षित करने के लिए तैयार हैं?",
    form_desc: "नीचे दिया गया फॉर्म भरें और व्हाट्सएप पर आधिकारिक कोटेशन पाएं या सलाहकार प्रल्हाद के घर आने का अनुरोध करें।",
    form_lbl_name: "आपका पूरा नाम *",
    form_lbl_phone: "व्हाट्सएप / फोन नंबर *",
    form_lbl_age: "आपकी उम्र",
    form_lbl_city: "शहर / स्थान",
    form_lbl_budget: "मासिक बचत बजट",
    form_lbl_plan: "पसंदीदा योजना या वित्तीय लक्ष्य",
    form_btn_submit: "व्हाट्सएप पर तुरंत कोटेशन पाएं व परामर्श तय करें",
    form_privacy: "🔒 आपकी जानकारी १००% गोपनीय रखी जाती है। कोई स्पैम नहीं।",

    // FAQs
    faq_tag: "अक्सर पूछे जाने वाले सवाल",
    faq_title: "एलआईसी से जुड़े आम सवालों के स्पष्ट उत्तर",
    faq_q1: "एलआईसी की धारा ३७ के तहत संप्रभु गारंटी (Sovereign Guarantee) क्या है?",
    faq_a1: "भारतीय संसद द्वारा पारित एलआईसी अधिनियम १९५६ की धारा ३७ के तहत, बीमा राशि और एलआईसी द्वारा घोषित सभी बोनस का नकद भुगतान भारत सरकार द्वारा कानूनी रूप से गारंटीड है। यह गारंटी केवल एलआईसी पॉलिसियों पर ही लागू होती है।",
    faq_q2: "क्या एलआईसी पॉलिसी से मिलने वाला रिटर्न वास्तव में कर-मुक्त होता है?",
    faq_a2: "हां! आयकर अधिनियम की धारा १०(१०डी) के तहत: १. मृत्यु दावों का सारा भुगतान बिना किसी सीमा के १००% कर-मुक्त होता है। २. १ अप्रैल २०२३ के बाद जारी पॉलिसियों के लिए, कुल वार्षिक गैर-यूलिप प्रीमियम ५,००,००० रुपये तक होने पर मिलने वाली पूरी मैच्योरिटी राशि कर-मुक्त होती है।",
    faq_q3: "क्या आपातकाल में मुझे अपनी एलआईसी पॉलिसी पर तुरंत लोन मिल सकता है?",
    faq_a3: "हां, लगातार २ वर्ष तक प्रीमियम भरने के बाद सभी एंडोमेंट और मनी बैक पॉलिसियों पर लोन की सुविधा मिलती है। बिना किसी सिबिल स्कोर जांच के सरेंडर वैल्यू का ९०% तक लोन बहुत कम ब्याज दर पर मिल जाता है। सलाहकार प्रल्हाद ४८ से ७२ घंटों में लोन राशि दिलाने में मदद करते हैं।",
    faq_q4: "यदि प्रीमियम भरने की अंतिम तारीख छूट जाए तो क्या होगा?",
    faq_a4: "एलआईसी वार्षिक, अर्ध-वार्षिक और त्रैमासिक प्रीमियम के लिए ३० दिनों का ग्रेस पीरियड देती है (मासिक के लिए १५ दिन)। इस दौरान पूरा रिस्क कवर सक्रिय रहता है। पॉलिसी लैप्स होने पर भी सलाहकार प्रल्हाद की मदद से ५ साल के भीतर आसानी से चालू की जा सकती है।",
    faq_q5: "एलआईसी पॉलिसी लेने के लिए कौन से दस्तावेजों की आवश्यकता होती है?",
    faq_a5: "केवल मानक केवाईसी दस्तावेज: १. आधार कार्ड (पते का प्रमाण), २. पैन कार्ड (पहचान प्रमाण), ३. पासपोर्ट आकार का फोटो, ४. बैंक खाता विवरण / रद्द चेक (सीधे बैंक में रिटर्न पाने के लिए), ५. आय प्रमाण (अधिक बीमा राशि के लिए)। सलाहकार प्रल्हाद ये सभी दस्तावेज आपके घर से आकर लेते हैं।",

    // Table Comparison Rows
    comp_row1_feat: "वैधानिक सरकारी गारंटी",
    comp_row1_lic: "१००% केंद्र सरकार की संप्रभु गारंटी (धारा ३७)",
    comp_row1_fd: "केवल ५ लाख रुपये तक (DICGC)",
    comp_row1_mf: "कोई गारंटी नहीं (बाजार जोखिम)",

    comp_row2_feat: "रिटर्न पर इनकम टैक्स",
    comp_row2_lic: "१००% कर-मुक्त (धारा १०(१०D))",
    comp_row2_fd: "स्लैब अनुसार ३१.२% तक भारी टैक्स",
    comp_row2_mf: "पूंजीगत लाभ कर (१२.५% LTCG)",

    comp_row3_feat: "पहले ही दिन से जीवन बीमा",
    comp_row3_lic: "पहली किस्त से ही पूरी बीमा राशि सक्रिय",
    comp_row3_fd: "कोई जीवन बीमा नहीं",
    comp_row3_mf: "कोई जीवन बीमा नहीं",

    comp_row4_feat: "आपातकालीन लोन सुविधा",
    comp_row4_lic: "बिना सिबिल स्कोर जांच के ९०% तक लोन",
    comp_row4_fd: "प्री-मैच्योर पेनल्टी / एफडी तोड़ना",
    comp_row4_mf: "टैक्स कटौती व बाजार का नुकसान",

    comp_row5_feat: "बच्चों के भविष्य की सुरक्षा",
    comp_row5_lic: "सभी भविष्य के प्रीमियम माफ + वार्षिक सहायता",
    comp_row5_fd: "जमा बंद, खाता समाप्त",
    comp_row5_mf: "एसआईपी तुरंत बंद",

    // Footer
    footer_agency_code: "एजेंसी कोड:",
    footer_popular_title: "लोकप्रिय एलआईसी योजनाएं",
    footer_services_title: "सलाहकार सेवाएं",
    footer_srv_1: "निःशुल्क डोरस्टेप केवाईसी पिकअप",
    footer_srv_2: "दावा निपटान व्यक्तिगत मार्गदर्शन",
    footer_srv_3: "मैच्योरिटी भुगतान सीधे बैंक में",
    footer_srv_4: "बंद पॉलिसी पुनरुद्धार सहायता",
    footer_srv_5: "पता व नॉमिनी परिवर्तन सेवा",
    footer_srv_6: "वार्षिक पोर्टफोलियो समीक्षा",
    footer_contact_title: "संपर्क व शाखा",
    footer_phone_lbl: "सीधा फोन:",
    footer_wa_lbl: "व्हाट्सएप:",
    footer_disclosure: "वैधानिक प्रकटीकरण: बीमा आग्रह की विषय वस्तु है। दिखाई गई सभी पॉलिसी विशेषताएं, प्रीमियम और लाभ उदाहरण आधिकारिक एलआईसी दिशा-निर्देशों पर आधारित शैक्षिक व सलाहकार मार्गदर्शन के लिए हैं।",
    footer_rights: "© २०२६ प्रल्हाद एलआईसी आधिकारिक सलाहकार केंद्र। एलआईसी अधिनियम १९५६ की धारा ३७ समर्थित।"
  },

  // Plan Details Localized
  planTranslations: {
    "936": {
      mr: {
        name: "एलआयसी जीवन लाभ (९३६)",
        badge: "कमी मुदत प्रीमियम / सर्वाधिक बोनस",
        tagline: "कमी वर्षे प्रीमियम भरा, भरघोस बोनस आणि १००% सरकारी सुरक्षितता मिळवा",
        shortDesc: "कमी कालावधीसाठी प्रीमियम भरून मुदतीअखेर सर्वाधिक करमुक्त बोनस देणारी लोकप्रिय योजना.",
        hook: "केवळ १०, १५ किंवा १६ वर्षे प्रीमियम भरा आणि मुदतीअखेर भरघोस सरकारी बोनससह मॅच्युरिटी मिळवा."
      },
      hi: {
        name: "एलआईसी जीवन लाभ (९३६)",
        badge: "सीमित प्रीमियम / सर्वाधिक बोनस",
        tagline: "सीमित वर्षों तक प्रीमियम भरें, उच्च बोनस और सरकारी सुरक्षा पाएं",
        shortDesc: "कम समय तक प्रीमियम भरकर मैच्योरिटी पर उच्चतम कर-मुक्त बोनस देने वाली लोकप्रिय बचत योजना।",
        hook: "केवल १०, १५ या १६ वर्ष प्रीमियम भरें और मैच्योरिटी पर सरकार समर्थित उच्च बोनस पाएं।"
      }
    },
    "871": {
      mr: {
        name: "एलआयसी जीवन उत्सव (८७१)",
        badge: "आयुष्यभर १०% हमखास पेन्शन + ४० रु. GA",
        tagline: "५ ते १६ वर्षे प्रीमियम भरा, आयुष्यभर विम्याच्या १०% हमखास पेन्शन मिळवा",
        shortDesc: "५ ते १६ वर्षे प्रीमियम भरून आयुष्यभर दरवर्षी विम्याच्या १०% हमखास बँक खात्यात मिळवणारी गॅरंटीड योजना.",
        hook: "भारतात इतर कुठे मिळेल विम्याच्या १०% रक्कम आयुष्यभर दरवर्षी थेट बँक खात्यात मिळण्याची १००% सरकारी गॅरंटी?"
      },
      hi: {
        name: "एलआईसी जीवन उत्सव (८७१)",
        badge: "आजीवन १०% गारंटीड आय + ४० रु. GA",
        tagline: "५ से १६ वर्ष प्रीमियम भरें, जीवन भर बीमा राशि का १०% गारंटीड पाएं",
        shortDesc: "५ से १६ वर्ष प्रीमियम भरकर आजीवन प्रतिवर्ष बीमा राशि का १०% बैंक में पाने वाली गारंटीड योजना।",
        hook: "भारत में और कहां मिलेगी बीमा राशि का १०% जीवन भर हर साल सीधे बैंक खाते में पाने की १००% सरकारी गारंटी?"
      }
    },
    "945": {
      mr: {
        name: "एलआयसी जीवन उमंग (९४५)",
        badge: "१०० व्या वर्षापर्यंत दरवर्षी ८% हमखास पेन्शन",
        tagline: "१५ ते २५ वर्षे प्रीमियम भरा, १०० व्या वर्षापर्यंत ८% पेन्शन आणि प्रचंड वारसा निधी मिळवा",
        shortDesc: "प्रीमियम संपल्यानंतर वयाच्या ९९ व्या वर्षापर्यंत दरवर्षी ८% पेन्शन आणि १०० व्या वर्षी मोठी रक्कम देणारी योजना.",
        hook: "३ पिढ्यांची योजना: तुम्ही प्रीमियम भरा, तुम्ही व जोडीदार पेन्शन घ्या, आणि मुलांसाठी १०० व्या वर्षी करोडोंचा वारसा ठेवा!"
      },
      hi: {
        name: "एलआईसी जीवन उमंग (९४५)",
        badge: "१००वें वर्ष तक प्रतिवर्ष ८% गारंटीड पेंशन",
        tagline: "१५ से २५ वर्ष प्रीमियम भरें, १००वें वर्ष तक ८% पेंशन और बड़ा वारिस कोष पाएं",
        shortDesc: "प्रीमियम समाप्त होने के बाद ९९ वर्ष की उम्र तक प्रतिवर्ष ८% पेंशन और १००वें वर्ष पर भारी मैच्योरिटी देने वाली योजना।",
        hook: "३ पीढ़ियों की योजना: आप प्रीमियम भरें, आप और जीवनसाथी पेंशन पाएं, और बच्चों के लिए भारी वारिस संपत्ति छोड़ें!"
      }
    },
    "933": {
      mr: {
        name: "एलआयसी जीवन लक्ष्य - कन्यादान (९३३)",
        badge: "मुलांच्या शिक्षणाची व लग्नाची १००% हमी",
        tagline: "आपण असो वा नसो, मुलांचे शिक्षण आणि लग्न १००% ठरल्याप्रमाणेच होणार",
        shortDesc: "पालक नसले तरी पुढील सर्व हप्ते माफ, दरवर्षी १०% मुलांच्या शिक्षणासाठी आणि मुदतीअखेर पूर्ण रक्कम देणारी खास योजना.",
        hook: "आपण असताना पदवीच्या किंवा लग्नाच्या दिवशी लाखोंचा धनादेश. आपण नसलो तरी एलआयसी सर्व हप्ते माफ करून पूर्ण रक्कम देते!"
      },
      hi: {
        name: "एलआईसी जीवन लक्ष्य - कन्यादान (९३३)",
        badge: "बच्चों की शिक्षा व विवाह का पक्का सुरक्षा कवच",
        tagline: "आप रहें या न रहें, बच्चों की शिक्षा और विवाह का सपना अवश्य पूरा होगा",
        shortDesc: "दुर्भाग्यवश अनहोनी होने पर सभी भविष्य के प्रीमियम माफ, प्रतिवर्ष १०% छात्रवृत्ति और मैच्योरिटी पर पूरी राशि।",
        hook: "आपके रहने पर दीक्षांत या विवाह पर बड़ा चेक। अनहोनी होने पर भी एलआईसी अभिभावक बनकर सभी सपने पूरे करती है!"
      }
    },
    "915": {
      mr: {
        name: "एलआयसी न्यू जीवन आनंद (९१५)",
        badge: "दुहेरी मृत्यू लाभ / सदाबहार योजना",
        tagline: "जिंदगी के साथ भी, जिंदगी के बाद भी - आज मॅच्युरिटी, आयुष्यभर मोफत विमा",
        shortDesc: "मुदतीअखेर बोनससह मोठी रक्कम आणि त्यानंतर वयाच्या १०० व्या वर्षापर्यंत विनामूल्य विमा देणारी लोकप्रिय योजना.",
        hook: "जिवंत असताना बोनससह पूर्ण मॅच्युरिटी तुम्हाला, आणि तुमच्या पश्चात वारसांना आणखी एक पूर्ण विम्याची रक्कम मोफत!"
      },
      hi: {
        name: "एलआईसी न्यू जीवन आनंद (९१५)",
        badge: "दोहरा मृत्यु लाभ / सदाबहार योजना",
        tagline: "जिंदगी के साथ भी, जिंदगी के बाद भी - आज मैच्योरिटी, आजीवन मुफ्त रिस्क कवर",
        shortDesc: "मैच्योरिटी पर बोनस सहित भारी राशि और उसके बाद १०० वर्ष की उम्र तक बिना किसी प्रीमियम के आजीवन रिस्क कवर।",
        hook: "जीवित रहने पर बोनस सहित पूरी मैच्योरिटी आपको, और आपके बाद वारिसों को एक और पूरी बीमा राशि मुफ्त!"
      }
    },
    "920": {
      mr: {
        name: "एलआयसी न्यू मनी बॅक (९२०)",
        badge: "दर ५ वर्षांनी २०% हमखास रोख परतावा",
        tagline: "दर ५ वर्षांनी २०% रक्कम खात्यात + २० व्या वर्षी ४०% विमा व बोनस",
        shortDesc: "५ व्या, १० व्या आणि १५ व्या वर्षी विम्याच्या २०% रक्कम आणि २० व्या वर्षी ४०% सह बोनस देणारी कॅशबॅक योजना.",
        hook: "सर्व पैसे २० वर्षे का अडकवून ठेवायचे? दर ५ वर्षांनी २०% कॅशबॅक थेट बँक खात्यात मिळवा!"
      },
      hi: {
        name: "एलआईसी न्यू मनी बैक (९२०)",
        badge: "हर ५ साल में २०% नकद वापसी",
        tagline: "हर ५ साल में २०% राशि खाते में + २०वें वर्ष ४०% बीमा व बोनस",
        shortDesc: "५वें, १०वें और १५वें वर्ष में २०% नकद वापसी और २०वें वर्ष में शेष ४०% के साथ पूरा संचित बोनस।",
        hook: "सारे पैसे २० साल के लिए क्यों बांधें? हर ५ साल में २०% नकद सीधे बैंक में पाएं!"
      }
    },
    "854": {
      mr: {
        name: "एलआयसी टेक टर्म / डिजी टर्म (८५४)",
        badge: "दररोज २५ ते ३५ रु. मध्ये १ कोटी कव्हर",
        tagline: "कमीत कमी प्रीमियममध्ये संपूर्ण कुटुंबाला १ कोटींचे सरकारी विमा संरक्षण",
        shortDesc: "कुटुंबाच्या आर्थिक सुरक्षिततेसाठी आणि गृहकर्जाच्या संरक्षणासाठी अत्यंत कमी दरातील टर्म इन्शुरन्स.",
        hook: "९८.५%+ क्लेम रेशो आणि केंद्र सरकारची हमी - संकटसमयी कुटुंबाच्या पाठीशी खंबीरपणे उभी राहणारी खरी सुरक्षा."
      },
      hi: {
        name: "एलआईसी टेक टर्म / डिजी टर्म (८५४)",
        badge: "प्रतिदिन मात्र २५-३५ रु. में १ करोड़ कवर",
        tagline: "किफायती प्रीमियम में पूरे परिवार को १ करोड़ का सरकारी बीमा संरक्षण",
        shortDesc: "परिवार की वित्तीय सुरक्षा और होम लोन की रक्षा के लिए सबसे किफायती व विश्वसनीय टर्म प्लान।",
        hook: "९८.५%+ क्लेम सेटलमेंट और भारत सरकार की गारंटी - दुख की घड़ी में परिवार को बिना किसी विवाद के पूरी राशि।"
      }
    },
    "860": {
      mr: {
        name: "एलआयसी विमा ज्योती (८६०)",
        badge: "दरवर्षी प्रति हजार ५० रु. १००% गॅरंटीड",
        tagline: "व्याजदराच्या चढउताराची चिंता नाही, दरवर्षी ५० रुपये गॅरंटीड बोनस बॉण्डवर लिहून मिळवा",
        shortDesc: "शेअर बाजार किंवा बँकेच्या दरावर अवलंबून नसलेली, दरवर्षी प्रति हजार ५० रुपये नक्की देणारी योजना.",
        hook: "व्याजदर कमी होण्याची भीती वाटते? विमा ज्योतीमध्ये दरवर्षी प्रति हजार ५० रुपये १००% कायदेशीर गॅरंटीड मिळतात."
      },
      hi: {
        name: "एलआईसी बीमा ज्योति (८६०)",
        badge: "प्रति हजार ५० रु. १००% कानूनी गारंटी",
        tagline: "ब्याज दरों में गिरावट का कोई डर नहीं, प्रति हजार ५० रुपये बॉण्ड पर लिखकर पाएं",
        shortDesc: "बाजार के उतार-चढ़ाव से मुक्त, हर साल प्रति हजार ५० रुपये की पक्की कानूनी गारंटी देने वाली योजना।",
        hook: "बैंक एफडी दरें गिरने की चिंता? बीमा ज्योति में प्रति हजार ५० रुपये हर साल पक्के गारंटीड मिलते हैं।"
      }
    },
    "874": {
      mr: {
        name: "एलआयसी अमृतबाल (८७४)",
        badge: "दरवर्षी प्रति हजार ८० रु. विक्रमी गॅरंटी",
        tagline: "मुलांच्या उच्च शिक्षणासाठी एलआयसीचा आजवरचा सर्वाधिक गॅरंटीड परतावा",
        shortDesc: "मुलांच्या १८ ते २५ व्या वर्षी कॉलेजच्या फीसाठी लागणाऱ्या मोठ्या खर्चाची संपूर्ण सोय करणारी योजना.",
        hook: "एलआयसीची सर्वात नवीन व सर्वाधिक परतावा देणारी योजना: दरवर्षी प्रति हजार ८० रुपये हमखास जोडले जातात."
      },
      hi: {
        name: "एलआईसी अमृतबाल (८७४)",
        badge: "प्रति हजार ८० रु. का ऐतिहासिक गारंटीड बोनस",
        tagline: "बच्चों की उच्च शिक्षा के लिए एलआईसी का अब तक का सबसे बड़ा गारंटीड प्लान",
        shortDesc: "बच्चों की १८ से २५ वर्ष की उम्र में कॉलेज व करियर के भारी खर्चों की निश्चिंत व्यवस्था।",
        hook: "एलआईसी का ऐतिहासिक प्लान: हर साल प्रति हजार ८० रुपये की कानूनी गारंटी।"
      }
    },
    "858": {
      mr: {
        name: "एलआयसी न्यू जीवन शांती (८५८)",
        badge: "आजच आयुष्यभराचा पेन्शन दर लॉक करा",
        tagline: "एकदाच रक्कम भरा, १ ते १२ वर्षांनंतर आयुष्यभर खात्रीशीर मासिक पेन्शन मिळवा",
        shortDesc: "पॉलिसी घेतानाच ठरलेला पेन्शन दर आयुष्यभर कधीही कमी न होणारी एकल प्रीमियम योजना.",
        hook: "एफडीचे व्याजदर दिवसेंदिवस कमी होत आहेत. एलआयसीमध्ये आजच आयुष्यभराचा उच्च पेन्शन दर लॉक करा!"
      },
      hi: {
        name: "एलआईसी न्यू जीवन शांति (८५८)",
        badge: "आज ही जीवन भर के लिए पेंशन दर लॉक करें",
        tagline: "एक बार निवेश करें, १ से १२ साल बाद जीवन भर गारंटीड मासिक पेंशन पाएं",
        shortDesc: "निवेश के समय तय की गई पेंशन दर आजीवन कभी कम नहीं होती, पूरी पूंजी वारिसों को वापस मिलती है।",
        hook: "बैंक एफडी की दरें घट रही हैं। एलआईसी में आज ही जीवन भर के लिए उच्च पेंशन दर लॉक करें!"
      }
    }
  },

  // Category Translations
  categoryTranslations: {
    "all": { mr: "सर्व योजना", hi: "सभी योजनाएं", en: "All Plans" },
    "endowment": { mr: "एंडोमेंट (बचत व नफा)", hi: "एंडोमेंट (बचत व लाभ)", en: "Endowment (Guaranteed Savings)" },
    "whole-life": { mr: "होल लाइफ (आजीवन उत्पन्न)", hi: "होल लाइफ (आजीवन आय)", en: "Whole Life (Lifelong Income)" },
    "money-back": { mr: "मनी बॅक (वेळोवेळी परतावा)", hi: "मनी बैक (नियमित वापसी)", en: "Money Back (Periodic Returns)" },
    "term": { mr: "टर्म इन्शुरन्स (शुद्ध संरक्षण)", hi: "टर्म इंश्योरेंस (शुद्ध सुरक्षा)", en: "Term Assurance (Pure Risk)" },
    "pension": { mr: "पेन्शन व निवृत्ती", hi: "पेंशन व सेवानिवृत्ति", en: "Pension & Retirement" },
    "child": { mr: "बाल शिक्षण व लग्न", hi: "बाल शिक्षा व विवाह", en: "Child Education & Goals" },
    "ulip": { mr: "युलिप (मार्केट लिंक्ड)", hi: "यूलिप (मार्केट लिंक्ड)", en: "ULIPs & Market Linked" },
    "health": { mr: "आरोग्य संरक्षण", hi: "स्वास्थ्य सुरक्षा", en: "Health Protection" }
  },

  /**
   * Helper to get localized plan fields
   */
  getPlan(plan, lang = this.currentLang) {
    if (lang === "en" || !this.planTranslations[plan.tableNo]) {
      return plan;
    }
    const t = this.planTranslations[plan.tableNo][lang] || {};
    return {
      ...plan,
      name: t.name || plan.name,
      badge: t.badge || plan.badge,
      tagline: t.tagline || plan.tagline,
      shortDesc: t.shortDesc || plan.shortDesc,
      agentPitch: {
        ...plan.agentPitch,
        coreHook: t.hook || plan.agentPitch.coreHook
      }
    };
  },

  /**
   * Helper to get localized category label
   */
  getCategory(catId, lang = this.currentLang) {
    if (this.categoryTranslations[catId] && this.categoryTranslations[catId][lang]) {
      return this.categoryTranslations[catId][lang];
    }
    return catId;
  }
};

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N_DATA;
}
