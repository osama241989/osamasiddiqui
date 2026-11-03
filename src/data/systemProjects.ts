import daybookCover from "@/assets/systems/daybook-home.jpg.asset.json";
import daybookArtwork from "@/assets/systems/daybook-cover.png.asset.json";
import daybookChat from "@/assets/systems/daybook-chat.jpg.asset.json";
import daybookCard from "@/assets/systems/daybook-card.jpg.asset.json";
import daybookContacts from "@/assets/systems/daybook-contacts.jpg.asset.json";
import daybookTasks from "@/assets/systems/daybook-tasks.jpg.asset.json";
import daybookNotes from "@/assets/systems/daybook-notes.jpg.asset.json";
import daybookMoney from "@/assets/systems/daybook-money.jpg.asset.json";
import daybookMobile from "@/assets/systems/daybook-m-home.jpg.asset.json";
import daybookPdf from "@/assets/systems/daybook-case-study.pdf.asset.json";
import jobCover from "@/assets/systems/job-desk-d-desk.jpg.asset.json";
import jobCard from "@/assets/systems/job-desk-d-job-card.jpg.asset.json";
import jobReview from "@/assets/systems/job-desk-d-review-send.jpg.asset.json";
import jobEmails from "@/assets/systems/job-desk-d-emails.jpg.asset.json";
import jobAgency from "@/assets/systems/job-desk-d-ag-card.jpg.asset.json";
import jobAdd from "@/assets/systems/job-desk-d-add-card.jpg.asset.json";
import jobQr from "@/assets/systems/job-desk-d-sabbar-qr.jpg.asset.json";
import jobMobile from "@/assets/systems/job-desk-m-desk.jpg.asset.json";
import jobMobileJobs from "@/assets/systems/job-desk-m-jobs.jpg.asset.json";
import jobMobileReview from "@/assets/systems/job-desk-m-review-send.jpg.asset.json";
import jobMobileEmails from "@/assets/systems/job-desk-m-emails.jpg.asset.json";
import jobPdf from "@/assets/systems/job-desk-case-study.pdf.asset.json";
import jobCarousel from "@/assets/systems/job-desk-carousel.pdf.asset.json";
import dreamWorkflow from "@/assets/systems/dream-workflow.png.asset.json";
import dreamPdf from "@/assets/systems/dream-case-study.pdf.asset.json";
import leadWorkflow from "@/assets/lead-engine/workflow.png.asset.json";
import leadPdf from "@/assets/lead-engine/overview.pdf.asset.json";
import realestate from "@/assets/p-realestate.jpg.asset.json";

export interface SystemProject {
  slug: string; name: string; industry: string; services: string[]; status: string;
  summary: string; headline: string; role: string; cover: string; evidence: string;
  tools: string[]; challenge: string; workflow: { title: string; body: string }[];
  features: string[]; benefits: string[]; safeguards: string[];
  screenshots: { src: string; title: string; caption: string; mobile?: boolean }[];
  documents: { url: string; filename: string; title: string }[];
  facts?: { value: string; label: string }[]; planned?: string;
  external?: { url: string; title: string };
}
const doc = (asset: { url: string; original_filename: string }, title: string) => ({ url: asset.url, filename: asset.original_filename, title });
const shot = (asset: {url: string}, title: string, caption: string, mobile = false) => ({ src: asset.url, title, caption, mobile });

export const systemProjects: SystemProject[] = [
  {
    slug: "daybook-ai-crm", name: "Daybook AI CRM", industry: "Professional Services", services: ["AI & Automation", "CRM & Digital Systems"], status: "AI-first CRM",
    summary: "Turn a message, voice note or business card into contacts, tasks and timely follow-ups in three languages.",
    headline: "One messy message. Four clean records.", role: "Product concept, AI design & delivery", cover: daybookCover.url,
    evidence: "Supplied system screenshots. Dashboard figures illustrate the workspace, not client growth results.",
    tools: ["Google Gemini", "Cloudflare Workers", "Durable Objects", "SQLite", "PWA"],
    challenge: "Business contacts, voice notes and follow-ups were scattered across cards and chat threads. Rigid forms made it harder to keep relationship information current while on the move.",
    workflow: [{title: "Capture", body: "Type a message, record a voice note or photograph business cards."}, {title: "Understand", body: "Gemini interprets Roman Urdu, English or Arabic using contact and calendar context."}, {title: "Review", body: "Check an editable preview and resolve any uncertain fields."}, {title: "Save & learn", body: "Save linked records, sync to the cloud and learn from corrections."}],
    features: ["Single or bulk business-card scanning", "Contact categories, stages, tags and relationship history", "Tasks in board, table and calendar views", "Daily plans, cold-lead alerts and push reminders", "WhatsApp drafts and proposals exported to Word", "Rich notes, recurring tasks and expenses in SAR", "Activity log, backups and undo for AI actions"],
    benefits: ["Less repeated form entry", "A clearer view of contacts and follow-ups", "Voice and camera capture on an installable mobile app"],
    safeguards: ["Editable review before saving AI suggestions", "Owner-only login and backup/restore", "Secrets removed before AI processing", "Undo for AI actions"],
    facts: [{value: "3", label: "Supported languages"}, {value: "Up to 25", label: "Records from one message"}],
    planned: "Live voice conversation with Gemini is being integrated; it is not presented as a completed feature.",
    screenshots: [shot(daybookChat, "Capture in natural language", "One message can describe several linked records."), shot(daybookCard, "Scan business cards", "Review extracted contact details before saving."), shot(daybookContacts, "Relationship memory", "Contact categories, priorities and follow-up context."), shot(daybookTasks, "Tasks & follow-ups", "Organize work and dated reminders."), shot(daybookNotes, "Notes & ideas", "Keep business notes in the same workspace."), shot(daybookMoney, "Expense tracking", "Record expenses in SAR."), shot(daybookMobile, "Daybook on mobile", "Installable workspace with mobile capture.", true), shot(daybookArtwork, "Daybook presentation artwork", "Illustrative supplied artwork; figures are not measured business results.")],
    documents: [doc(daybookPdf, "Daybook case study")],
  },
  {
    slug: "job-desk-ai", name: "Job Desk AI", industry: "HR & Manpower Services", services: ["AI & Automation", "CRM & Digital Systems"], status: "AI System · Live",
    summary: "A personal AI recruiter that finds jobs every morning and prepares a tailored CV, cover letter and Gmail draft.",
    headline: "Wake up to jobs that already have your CV.", role: "Concept, AI workflow & build", cover: jobCover.url,
    evidence: "Real screenshots from a copy of the working system, using fictional demo data. Capabilities are not hiring outcomes.",
    tools: ["Claude AI", "Scheduled Tasks", "Gmail", "Google Drive", "Indeed"],
    challenge: "Searching multiple job boards, tailoring CVs and following up on applications becomes a second full-time job. Generic applications lack role-specific focus and are difficult to track.",
    workflow: [{title: "Search", body: "Find fresh roles across alerts, job boards, company career pages and recruitment agencies."}, {title: "Match", body: "Score role, skills, seniority, location and freshness out of ten."}, {title: "Tailor", body: "Prepare a job-specific ATS CV, cover letter and application answers."}, {title: "Review", body: "Create a Drive folder and Gmail draft; the candidate checks and sends."}, {title: "Track", body: "Monitor sent emails, replies and follow-up dates."}],
    features: ["Daily search across multiple job sources", "0–10 match score with reasons and gaps", "Tailored two-page ATS CV in PDF and Word", "Cover letters and form-question answers", "Published employer-email discovery", "Daily recruitment-agency outreach preparation", "Per-application Google Drive folder", "Gmail drafts, reply tracking and one-click follow-up", "Paste jobs from other websites or WhatsApp", "QR handoff and autofill bookmark for applications"],
    benefits: ["Turn repeated search and preparation into a review-and-send routine", "Keep application materials tailored to each role", "Track drafts, replies and follow-ups in one place"],
    safeguards: ["Nothing is sent without human review", "Never invent candidate skills or degrees", "Only employer-published contact addresses; never guessed", "Automatic portal applying remains in development"],
    facts: [{value: "1", label: "Scheduled morning run"}, {value: "Up to 18", label: "Scored jobs per run"}, {value: "8", label: "New agencies per run"}, {value: "2 pages", label: "Tailored CV per job"}],
    planned: "Fully automatic applying, including portal account creation and one-click auto apply, is in development. Current applications are prepared by AI and sent after review.",
    screenshots: [shot(jobCard, "Everything for one application", "Match score, keywords, CV files, cover letter and Drive folder."), shot(jobReview, "Review before sending", "Check recipient, message and attachments before anything goes out."), shot(jobEmails, "Email tracking", "Draft, sent, replied and follow-up due states."), shot(jobAgency, "Recruitment agencies", "Published agency addresses and outreach drafts."), shot(jobAdd, "Add a job from anywhere", "Paste a link and description for a tailored application."), shot(jobQr, "Desk-to-phone handoff", "QR handoff for app-only portals."), shot(jobMobile, "Mobile desk", "Fictional demo data.", true), shot(jobMobileJobs, "Mobile jobs", "Fictional demo data.", true), shot(jobMobileReview, "Mobile review", "Fictional demo data.", true), shot(jobMobileEmails, "Mobile email tracking", "Fictional demo data.", true)],
    documents: [doc(jobPdf, "Job Desk case study"), doc(jobCarousel, "Job Desk presentation")],
  },
  {
    slug: "dream-softness-ai-sales-agent", name: "Dream Softness AI Sales Agent", industry: "Retail & E-commerce", services: ["AI & Automation", "CRM & Digital Systems"], status: "n8n workflow · Deployment-ready design",
    summary: "A WhatsApp sales workflow connecting verified product knowledge, customer memory, lead scoring and follow-up.",
    headline: "From a WhatsApp inquiry to a structured sales follow-up.", role: "AI sales workflow & business automation", cover: dreamWorkflow.url,
    evidence: "Original n8n workflow screenshot and client presentation. Described capabilities are not verified sales results or proof of a live deployment.",
    tools: ["n8n", "Google Gemini", "WhatsApp Business API", "Google Sheets"],
    challenge: "Late replies, lost mattress inquiries and manual reminders make customer acquisition harder when sales staff are busy or offline.",
    workflow: [{title: "Receive & filter", body: "Receive WhatsApp messages and filter delivery receipts."}, {title: "Normalize", body: "Clean the customer's phone number and message text."}, {title: "Load context", body: "Read customer history and approved product information from Google Sheets."}, {title: "Generate reply", body: "Gemini drafts a brief, context-aware answer using verified information."}, {title: "Send & update", body: "Send the reply, extract lead details and update the CRM."}, {title: "Follow up", body: "Check eligible leads daily and use approved templates for scheduled reminders."}],
    features: ["Independent conversation context for each WhatsApp number", "English, Roman Urdu and Urdu-script responses", "Approved pricing, sizes and comfort specifications", "Last ten messages plus a rolling conversation summary", "Hot, Warm and Cold lead classification", "One CRM row per customer with recommended next action", "Designed for seven-day follow-up scheduling"],
    benefits: ["Support inquiries outside normal working hours", "Connect conversations to a structured sales pipeline", "Reduce repeated manual follow-up work"],
    safeguards: ["Missing information is referred to the team; no invented prices or stock", "No claims of live warehouse stock or direct payment processing", "Follow up only eligible Hot or Warm leads; stop for buyers, declined leads and opt-outs", "Cap follow-ups at one or two messages", "Approved WhatsApp templates outside the 24-hour messaging window", "Actual capacity depends on WhatsApp and AI-provider limits"],
    screenshots: [shot(dreamWorkflow, "Original n8n workflow", "Receive, gather verified context, answer, extract lead details and update CRM.")],
    documents: [doc(dreamPdf, "Dream Softness sales-agent presentation")],
  },
  {
    slug: "lead-engine", name: "Lead Engine — B2B Outreach", industry: "Professional Services", services: ["AI & Automation", "CRM & Digital Systems"], status: "Outreach automation",
    summary: "Discover businesses, collect published contact emails, schedule outreach and track replies in one Google Sheet.",
    headline: "From business discovery to a tracked B2B conversation.", role: "Connect World Business · Lead-generation workflow", cover: leadWorkflow.url,
    evidence: "Supplied workflow and client overview. Configured limits and design rules are not campaign results.", tools: ["Gmail", "Google Sheets", "Website Research", "Automation"],
    challenge: "Business research, email discovery and follow-up required repetitive manual work with no single view of contact status.",
    workflow: [{title: "Find businesses", body: "Search by a Riyadh tower or district."}, {title: "Visit websites", body: "Inspect each company's website."}, {title: "Collect emails", body: "Keep real published contact addresses; skip missing addresses."}, {title: "Send outreach", body: "Schedule outreach across two Gmail mailboxes."}, {title: "Follow up", body: "Send one follow-up after fourteen days."}, {title: "Track replies", body: "Record replies, opt-outs and bounces in Google Sheets."}],
    features: ["Location-based business discovery", "Published-email collection", "Daily outreach scheduling", "Reply and follow-up tracking", "One Google Sheet for company and contact status"],
    benefits: ["Less repeated research and email hunting", "Consistent outreach with one clear contact-status view", "No duplicate or guessed addresses"],
    safeguards: ["No guessed emails", "STOP locks the contact against further outreach", "Daily mailbox limits and pauses", "Protected script settings for API keys"],
    facts: [{value: "60", label: "Companies per search"}, {value: "2", label: "Gmail mailboxes"}, {value: "14 days", label: "One follow-up interval"}],
    screenshots: [shot(leadWorkflow, "Lead Engine workflow", "Business discovery through replies and follow-up.")], documents: [doc(leadPdf, "Lead Engine client overview")],
    external: {url: "https://www.linkedin.com/posts/muhammadosamasiddiqui_automation-leadgeneration-b2bsales-activity-7520892698237620225-umgA", title: "Read the LinkedIn project post"},
  },
  {
    slug: "abraj-tenant-management", name: "Abraj ul Mullak — Tenant Management CRM", industry: "Real Estate & Property", services: ["CRM & Digital Systems"], status: "Property business systems",
    summary: "Tenant-management CRM and digital business support for a real-estate operation.", headline: "Connecting tenant management with a stronger digital business.", role: "CRM, business setup, marketing & advertising", cover: realestate.url,
    evidence: "Related real-estate portfolio imagery, not a screenshot of the CRM. No system interface or measured outcomes were supplied.", tools: ["Tenant Management CRM", "Digital Business Systems"],
    challenge: "Support a property business across tenant management, business setup and digital acquisition.",
    workflow: [{title: "Tenant management", body: "CRM support for tenant-management work."}, {title: "Business setup", body: "Business and digital operations support."}, {title: "Marketing", body: "Marketing and advertising support for the property business."}],
    features: ["Tenant-management CRM", "Business setup support", "Marketing and advertising"], benefits: ["Connect property operations with digital business and acquisition support"], safeguards: ["Scope shown is limited to supplied portfolio evidence; no unverified automation or results are claimed."], screenshots: [], documents: [],
  },
  {
    slug: "aqarlee-proptech", name: "Aqarlee — PropTech Platform", industry: "Real Estate & Property", services: ["CRM & Digital Systems", "Websites & E-commerce"], status: "Web · Mobile · Admin",
    summary: "A property-technology platform spanning a website, mobile application and administration portal.", headline: "A connected digital platform for a property business.", role: "Real-estate digital business experience", cover: realestate.url,
    evidence: "Related real-estate portfolio imagery, not an Aqarlee interface screenshot. No measured platform outcomes were supplied.", tools: ["Web Platform", "Mobile App", "Admin Portal"],
    challenge: "Bring property-business activity into connected digital channels.", workflow: [{title: "Web", body: "Property-technology web platform."}, {title: "Mobile", body: "A mobile application for the platform."}, {title: "Administration", body: "An admin portal supporting the digital platform."}],
    features: ["Web platform", "Mobile application", "Admin portal"], benefits: ["A connected web, mobile and administration footprint"], safeguards: ["No specific platform features or performance outcomes beyond the supplied evidence are claimed."], screenshots: [], documents: [],
  },
];