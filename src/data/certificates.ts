import certificatesPdf from "@/assets/certificates/osama-certificates.pdf.asset.json";
import googleAiBadge from "@/assets/certificates/all/google-ai-essentials-badge.png.asset.json";
import googleIntroductionToAi from "@/assets/certificates/all/google-introduction-to-ai.jpeg.asset.json";
import googleMaximizeProductivity from "@/assets/certificates/all/google-maximize-productivity-ai.jpeg.asset.json";
import googleArtOfPrompting from "@/assets/certificates/all/google-art-of-prompting.jpeg.asset.json";
import googleUseAiResponsibly from "@/assets/certificates/all/google-use-ai-responsibly.jpeg.asset.json";
import googleStayAheadAi from "@/assets/certificates/all/google-stay-ahead-ai.jpeg.asset.json";
import googleDigitalMarketing from "@/assets/certificates/all/google-digital-marketing.jpeg.asset.json";
import digiskillsDataAnalytics from "@/assets/certificates/all/digiskills-data-analytics-bi.jpg.asset.json";
import digiskillsDigitalMarketing from "@/assets/certificates/all/digiskills-digital-marketing.jpg.asset.json";
import digiskillsFreelancing from "@/assets/certificates/all/digiskills-freelancing.jpg.asset.json";
import digiskillsSeo from "@/assets/certificates/all/digiskills-seo.jpg.asset.json";
import digiskillsWordpress from "@/assets/certificates/all/digiskills-wordpress.jpg.asset.json";
import hubspotSocialMedia from "@/assets/certificates/all/hubspot-social-media.jpeg.asset.json";
import canva500Designs from "@/assets/certificates/all/canva-500-designs.png.asset.json";
import alSiddiqueComputer from "@/assets/certificates/all/al-siddique-computer-certificate.jpg.asset.json";

export const certificatesDocument = certificatesPdf.url;

export const featuredAiCredential = {
  title: "Google AI Essentials",
  issuer: "Google · Coursera",
  date: "July 2025",
  description: "Five-course specialization with hands-on practice in responsible AI use, prompting and improving productivity with AI tools.",
  courses: [
    "Introduction to AI",
    "Maximize Productivity With AI Tools",
    "Discover the Art of Prompting",
    "Use AI Responsibly",
    "Stay Ahead of the AI Curve",
  ],
  verifyUrl: "https://coursera.org/verify/specialization/IXA813JUWUG0",
  badge: googleAiBadge.url,
};

export const certificateGallery = [
  { title: "Introduction to AI", issuer: "Google · Coursera", date: "2025", image: googleIntroductionToAi.url },
  { title: "Maximize Productivity With AI Tools", issuer: "Google · Coursera", date: "2025", image: googleMaximizeProductivity.url },
  { title: "Discover the Art of Prompting", issuer: "Google · Coursera", date: "2025", image: googleArtOfPrompting.url },
  { title: "Use AI Responsibly", issuer: "Google · Coursera", date: "2025", image: googleUseAiResponsibly.url },
  { title: "Stay Ahead of the AI Curve", issuer: "Google · Coursera", date: "2025", image: googleStayAheadAi.url },
  { title: "Fundamentals of Digital Marketing", issuer: "Google Digital Workshop", date: "2022", image: googleDigitalMarketing.url },
  { title: "Data Analytics & Business Intelligence", issuer: "DigiSkills · Virtual University", date: "2024", image: digiskillsDataAnalytics.url },
  { title: "Digital Marketing", issuer: "DigiSkills · Virtual University", date: "2023", image: digiskillsDigitalMarketing.url },
  { title: "Freelancing", issuer: "DigiSkills · Virtual University", date: "2023", image: digiskillsFreelancing.url },
  { title: "Search Engine Optimization", issuer: "DigiSkills · Virtual University", date: "2023", image: digiskillsSeo.url },
  { title: "WordPress", issuer: "DigiSkills · Virtual University", date: "2023", image: digiskillsWordpress.url },
  { title: "Social Media Certification", issuer: "HubSpot Academy", date: "2021", image: hubspotSocialMedia.url },
  { title: "500 Designs Milestone", issuer: "Canva", date: "Milestone", image: canva500Designs.url },
  { title: "Computer Studies Certificate", issuer: "Al-Siddique Institute", date: "2013", image: alSiddiqueComputer.url },
];

export const verifiedSkillGroups = [
  {
    title: "Practical AI",
    items: ["AI tool selection", "Prompting", "Responsible AI use", "AI-assisted productivity"],
  },
  {
    title: "Digital Growth",
    items: ["Digital marketing", "SEO", "Social media strategy", "Content and engagement"],
  },
  {
    title: "Data & Delivery",
    items: ["Data analytics", "Business intelligence", "Social ROI reporting", "WordPress"],
  },
];
