/**
 * Central Configuration for Pralhad LIC Official Advisory Website
 * Update this file to change your contact details, branch, or agency information across the entire website.
 */
const SITE_CONFIG = {
  // Advisor Details
  advisorName: "Pralhad",
  advisorFullName: "Pralhad - Senior Life Insurance Advisor",
  agencyCode: "000000",
  branchName: "Branch Office 883, Division I",
  division: "Division Office",
  experienceYears: "15+",
  satisfiedFamilies: "1,000+",
  claimsSettledPercent: "98.5%",
  sovereignGuaranteeYear: "1956",

  // Contact Information
  phone: "+91 92213 09638",
  whatsappNumber: "919221309638", // Format: country code without + or spaces (for wa.me)
  email: "xyz@gmail.com",
  officeAddress: "xyz address",
  city: "City Center",
  workingHours: "Mon - Sat: 9:00 AM - 8:00 PM (Sunday by Appointment)",

  // Service Offerings
  services: [
    "Doorstep Documentation & Free KYC Pickup",
    "Personalized Financial Goal Planning (Child Education, Marriage, Retirement)",
    "Policy Revival & Address / Nomination Updates",
    "Triple Tax-Saving Consultation under Sec 80C & 10(10D)",
  ],

  // Social & Web Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/9221309638"
  },

  // Trust Badges & Metrics
  stats: [
    { label: "Families Protected", value: "1,000+" },
    { label: "Claims Settled", value: "98.5%" },
    { label: "Years Experience", value: "15+ Yrs" },
    { label: "Govt Sovereign Guarantee", value: "100%" }
  ]
};

// Export for Node/ES environment if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
