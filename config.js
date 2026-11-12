/**
 * Central Configuration for Pralhad LIC Official Advisory Website
 * Update this file to change your contact details, branch, or agency information across the entire website.
 */
const SITE_CONFIG = {
  // Advisor Details
  advisorName: "Pralhad",
  advisorFullName: "Pralhad - Senior Life Insurance Advisor",
  agencyCode: "03458921",
  branchName: "Branch Office 883, Division I",
  division: "Division Office",
  experienceYears: "15+",
  satisfiedFamilies: "2,500+",
  claimsSettledPercent: "98.5%",
  sovereignGuaranteeYear: "1956",

  // Contact Information
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210", // Format: country code without + or spaces (for wa.me)
  email: "pralhad.licadvisor@gmail.com",
  officeAddress: "Office No. 104, LIC Advisory Center, Main Market Road",
  city: "City Center",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM (Sunday by Appointment)",

  // Service Offerings
  services: [
    "Doorstep Documentation & Free KYC Pickup",
    "Personalized Financial Goal Planning (Child Education, Marriage, Retirement)",
    "Hassle-Free Death & Maturity Claim Settlement Assistance",
    "Policy Revival & Address / Nomination Updates",
    "Triple Tax-Saving Consultation under Sec 80C & 10(10D)",
    "Free Life Insurance Portfolio Health Checkup"
  ],

  // Social & Web Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/919876543210"
  },

  // Trust Badges & Metrics
  stats: [
    { label: "Families Protected", value: "2,500+" },
    { label: "Claims Settled", value: "98.5%" },
    { label: "Years Experience", value: "15+ Yrs" },
    { label: "Govt Sovereign Guarantee", value: "100%" }
  ]
};

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
