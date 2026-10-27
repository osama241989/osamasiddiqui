import { ArrowRight, Check, Download, Eye, Mail, MapPin, Search, Send, ShieldCheck, Timer, Globe, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";
import workflow from "@/assets/lead-engine/workflow.png.asset.json";
import overview from "@/assets/lead-engine/overview.pdf.asset.json";

const LEAD_ENGINE_POST = "https://www.linkedin.com/posts/muhammadosamasiddiqui_automation-leadgeneration-b2bsales-activity-7520892698237620225-umgA";

const expertiseAreas = ["Digital Marketing", "Marketing Operations", "Business Development", "Marketing Strategy & Growth", "Digital Solutions", "AI Integration", "IT Support & Coordination"];

const achievements = [
  { value: "50,000+", label: "Lead Generation & ROI", body: "Qualified leads generated, with an average 280% ROI increase across 100+ campaigns." },
  { value: "30+", label: "Business & Portfolio Growth", body: "Enterprise clients supported with performance marketing and growth strategies." },
  { value: "65%", label: "Cost Efficiency", body: "Improvement in lead acquisition costs through data-driven campaigns and process automation." },
];

const competencies = ["Digital Marketing Strategy", "Google Ads", "Meta Ads", "SEO", "CRM Administration", "IT Systems Coordination", "AI Business Automation"];

export function ExpertiseHighlights() {
  return <section id="strengths" className="px-6 py-20"><div className="mx-auto max-w-7xl">
    <p className="mb-3 text-sm font-bold text-brand-accent">AREAS OF EXPERTISE</p>
    <h2 className="text-3xl font-bold text-brand-primary md:text-4xl">Key Achievements & Professional Strengths</h2>
    <div className="mt-6 flex flex-wrap gap-2">{expertiseAreas.map(a => <span key={a} className="rounded-full border border-border bg-surface-light px-4 py-2 text-sm font-semibold text-brand-primary">{a}</span>)}</div>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{achievements.map(a => <article key={a.label} className="rounded-lg border border-border p-7 shadow-sm"><div className="text-4xl font-bold text-brand-accent">{a.value}</div><h3 className="mt-3 text-lg font-bold text-brand-primary">{a.label}</h3><p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.body}</p></article>)}</div>
    <div className="mt-6 rounded-lg bg-surface-light p-6"><p className="mb-3 text-sm font-bold text-brand-primary">Core Competencies</p><div className="flex flex-wrap gap-x-6 gap-y-2">{competencies.map(c => <span key={c} className="flex items-center gap-2 text-sm font-semibold text-brand-primary"><Check className="size-4 text-brand-accent" />{c}</span>)}</div></div>
  </div></section>;
}

const steps = [
  { title: "Find Businesses", body: "Search by tower or district", icon: MapPin },
  { title: "Visit Websites", body: "Read company websites", icon: Globe },
  { title: "Collect Emails", body: "Real addresses only", icon: Search },
  { title: "Send Outreach", body: "Daily, from two mailboxes", icon: Send },
  { title: "Follow Up", body: "One follow-up after 14 days", icon: Timer },
  { title: "Receive Replies", body: "Replies, opt-outs, bounces logged", icon: Reply },
];

const capacity = [["60", "companies found per search"], ["2", "Gmail mailboxes in parallel"], ["7", "sending days a week"], ["14", "days before the follow-up"], ["0", "guessed email addresses"]];

const gains = ["Hours back every week — no manual research or email hunting", "Consistent daily outreach spread across working hours", "One clear view of every company, status and follow-up in a Google Sheet", "Healthy sender reputation — real company-domain addresses, no duplicates"];
const safeguards = ["No guessed emails — companies without a real address are skipped", "STOP is final — opt-outs lock the contact, in the spirit of Saudi PDPL", "Per-mailbox daily limits and pauses protect Gmail", "API keys kept in protected script settings"];

export function LeadEngineProject() {
  return <section id="lead-engine" className="bg-brand-primary px-6 py-20 text-primary-foreground"><div className="mx-auto max-w-7xl">
    <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="mb-3 text-sm font-bold text-brand-accent">FEATURED AUTOMATION PROJECT · CONNECT WORLD BUSINESS</p><h2 className="text-3xl font-bold md:text-4xl">Lead Engine — Automated B2B Outreach for Riyadh</h2><p className="mt-5 leading-relaxed text-primary-foreground/75">Pick a tower or district in Riyadh. Lead Engine finds the companies there, reads their websites for a real contact address, sends outreach on a daily schedule, follows up once, and records replies, opt-outs and bounces — all in one Google Sheet.</p></div>
      <div className="flex flex-wrap gap-2"><Button asChild variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><a href={overview.url} target="_blank" rel="noreferrer"><Eye /> Review overview</a></Button><Button asChild className="bg-brand-accent text-primary-foreground hover:bg-brand-accent/90"><a href={overview.url} download="Lead-Engine-Client-Overview.pdf"><Download /> Download</a></Button></div></div>
    <img src={workflow.url} alt="Lead Engine workflow: find businesses, visit websites, collect emails, send outreach, follow up, receive replies" loading="lazy" className="w-full rounded-xl border border-primary-foreground/15" />
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{steps.map((s, i) => <div key={s.title} className="rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 p-4"><div className="flex items-center justify-between"><s.icon className="size-6 text-brand-accent" /><span className="text-xs text-primary-foreground/45">{String(i + 1).padStart(2, "0")}</span></div><p className="mt-3 text-sm font-bold">{s.title}</p><p className="mt-1 text-xs text-primary-foreground/70">{s.body}</p></div>)}</div>
    <div className="mt-8 grid grid-cols-2 gap-6 border-y border-primary-foreground/15 py-8 text-center sm:grid-cols-5">{capacity.map(([v, l]) => <div key={l}><div className="text-3xl font-bold text-brand-accent">{v}</div><div className="mt-1 text-xs text-primary-foreground/70">{l}</div></div>)}</div>
    <p className="mt-3 text-xs text-primary-foreground/55">Configured limits and design rules, not campaign results.</p>
    <div className="mt-8 grid gap-6 md:grid-cols-2">{[["What the business gains", gains, Mail], ["Built-in safeguards", safeguards, ShieldCheck]].map(([title, items, Icon]) => { const I = Icon as typeof Mail; return <div key={title as string} className="rounded-lg border border-primary-foreground/15 p-6"><p className="mb-4 flex items-center gap-2 font-bold"><I className="size-5 text-brand-accent" />{title as string}</p><ul className="space-y-2">{(items as string[]).map(t => <li key={t} className="flex gap-2 text-sm text-primary-foreground/80"><Check className="mt-0.5 size-4 shrink-0 text-brand-accent" />{t}</li>)}</ul></div>; })}</div>
    <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><p className="text-sm text-primary-foreground/75">Fits agency lead generation, recruitment outreach, B2B sales prospecting and partnership outreach.</p><a href={LEAD_ENGINE_POST} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent">Read the LinkedIn post <ArrowRight className="size-4 rtl:rotate-180" /></a></div>
  </div></section>;
}
