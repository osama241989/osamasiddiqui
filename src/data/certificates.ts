import certificatesPdf from "@/assets/certificates/osama-certificates.pdf.asset.json";
import googleIntroductionAi from "@/assets/certificates/all/google-introduction-to-ai.jpeg.asset.json";
import googleProductivityAi from "@/assets/certificates/all/google-maximize-productivity-ai.jpeg.asset.json";
import googlePrompting from "@/assets/certificates/all/google-art-of-prompting.jpeg.asset.json";
import googleResponsibleAi from "@/assets/certificates/all/google-use-ai-responsibly.jpeg.asset.json";
import googleAiCurve from "@/assets/certificates/all/google-stay-ahead-ai.jpeg.asset.json";
import googleAiBadge from "@/assets/certificates/all/google-ai-essentials-badge.png.asset.json";
import googleDigitalMarketing from "@/assets/certificates/all/google-digital-marketing.jpeg.asset.json";
import dataAnalytics from "@/assets/certificates/all/digiskills-data-analytics-bi.jpg.asset.json";
import digitalMarketing from "@/assets/certificates/all/digiskills-digital-marketing.jpg.asset.json";
import freelancing from "@/assets/certificates/all/digiskills-freelancing.jpg.asset.json";
import seo from "@/assets/certificates/all/digiskills-seo.jpg.asset.json";
import wordpress from "@/assets/certificates/all/digiskills-wordpress.jpg.asset.json";
import hubspotSocial from "@/assets/certificates/all/hubspot-social-media.jpeg.asset.json";
import canvaMilestone from "@/assets/certificates/all/canva-500-designs.png.asset.json";
import computerCertificate from "@/assets/certificates/all/al-siddique-computer-certificate.jpg.asset.json";

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
  { title: "Introduction to AI", issuer: "Google · Coursera", date: "2025", image: googleIntroductionAi.url },
  { title: "Maximize Productivity With AI Tools", issuer: "Google · Coursera", date: "2025", image: googleProductivityAi.url },
  { title: "Discover the Art of Prompting", issuer: "Google · Coursera", date: "2025", image: googlePrompting.url },
  { title: "Use AI Responsibly", issuer: "Google · Coursera", date: "2025", image: googleResponsibleAi.url },
  { title: "Stay Ahead of the AI Curve", issuer: "Google · Coursera", date: "2025", image: googleAiCurve.url },
  { title: "Fundamentals of Digital Marketing", issuer: "Google Digital Workshop", date: "2022", image: googleDigitalMarketing.url },
  { title: "Data Analytics & Business Intelligence", issuer: "DigiSkills · Virtual University", date: "2024", image: dataAnalytics.url },
  { title: "Digital Marketing", issuer: "DigiSkills · Virtual University", date: "2023", image: digitalMarketing.url },
  { title: "Freelancing", issuer: "DigiSkills · Virtual University", date: "2023", image: freelancing.url },
  { title: "Search Engine Optimization", issuer: "DigiSkills · Virtual University", date: "2023", image: seo.url },
  { title: "WordPress", issuer: "DigiSkills · Virtual University", date: "2023", image: wordpress.url },
  { title: "Social Media Certification", issuer: "HubSpot Academy", date: "2021", image: hubspotSocial.url },
  { title: "500 Designs Milestone", issuer: "Canva", date: "Milestone", image: canvaMilestone.url },
  { title: "Computer Studies Certificate", issuer: "Al-Siddique Institute", date: "2013", image: computerCertificate.url },
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