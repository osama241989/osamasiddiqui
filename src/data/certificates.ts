import certificatesPdf from "@/assets/certificates/osama-certificates.pdf.asset.json";
import googleAiEssentials from "@/assets/certificates/google-ai-essentials.jpg.asset.json";
import googleDigitalMarketing from "@/assets/certificates/google-digital-marketing.jpg.asset.json";
import dataAnalytics from "@/assets/certificates/data-analytics-business-intelligence.jpg.asset.json";
import digitalMarketing from "@/assets/certificates/digiskills-digital-marketing.jpg.asset.json";
import seo from "@/assets/certificates/seo.jpg.asset.json";
import wordpress from "@/assets/certificates/wordpress.jpg.asset.json";

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
};

export const certificateGallery = [
  { title: "Google AI Essentials", issuer: "Google · Coursera", date: "2025", image: googleAiEssentials.url },
  { title: "Fundamentals of Digital Marketing", issuer: "Google Digital Workshop", date: "2022", image: googleDigitalMarketing.url },
  { title: "Data Analytics & Business Intelligence", issuer: "DigiSkills · Virtual University", date: "2024", image: dataAnalytics.url },
  { title: "Digital Marketing", issuer: "DigiSkills · Virtual University", date: "2023", image: digitalMarketing.url },
  { title: "Search Engine Optimization", issuer: "DigiSkills · Virtual University", date: "2023", image: seo.url },
  { title: "WordPress", issuer: "DigiSkills · Virtual University", date: "2023", image: wordpress.url },
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