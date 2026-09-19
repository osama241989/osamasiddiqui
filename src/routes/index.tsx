import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Award, BarChart3, Bot, BriefcaseBusiness, Building2, ChartNoAxesCombined, Check, Cpu, Download, ExternalLink, Eye, Factory, GraduationCap, HardHat, Hotel, Linkedin, Mail, MapPin, Megaphone, Network, Phone, ShoppingCart, Sparkles, Target, TrendingUp, Truck, UtensilsCrossed } from "lucide-react";
import portrait from "@/assets/portrait-formal.png.asset.json";
import cvAsset from "@/assets/business-growth-cv.pdf.asset.json";
import portfolioAsset from "@/assets/cwb-portfolio-2026.pdf.asset.json";
import caseStudiesReport from "@/assets/cwb-case-studies-report.pdf.asset.json";
import clientPortfolio from "@/assets/business-growth-client-portfolio.pdf.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { awards, certifications, experience, profile } from "@/data/profile";
import { projectImages } from "@/data/projectImages";
import { clientLogos } from "@/data/clientLogos";
import { certificateGallery, certificatesDocument, featuredAiCredential, verifiedSkillGroups } from "@/data/certificates";
import { aiCapabilities, aiTools, approach, businessResults, growthCases, growthMetrics, growthServices, industryNames, realEstateExperience } from "@/data/growth";

const TITLE = "Business Growth Consultant | Osama Siddiqui";
const DESCRIPTION = "Business Growth Consultant in Riyadh using strategy, data, digital marketing and practical AI to identify gaps and drive measurable growth.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: TITLE }, { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "profile" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const serviceIcons = [BriefcaseBusiness, Target, Megaphone, ChartNoAxesCombined, Bot, Network];
const industryIcons = [Building2, HardHat, GraduationCap, Hotel, UtensilsCrossed, Cpu, Factory, ShoppingCart, Truck, BriefcaseBusiness];
const campaignDashboards = [
  {
    company: "The Mattress Factory",
    summary: "E-commerce growth engine built from zero",
    icon: TrendingUp,
    metrics: [
      { value: "SAR 529K", label: "Conversion value" },
      { value: "18.3x", label: "Return on ad spend" },
      { value: "17,700", label: "Google Ads clicks" },
      { value: "2.66M", label: "Meta impressions" },
    ],
  },
  {
    company: "ACECO Engineering",
    summary: "B2B demand and local discovery system",
    icon: BarChart3,
    metrics: [
      { value: "1.1M", label: "Google impressions" },
      { value: "19,300", label: "Google Ads clicks" },
      { value: "2,557", label: "Phone calls" },
      { value: "22,259", label: "Business actions" },
    ],
  },
  {
    company: "Lavender SPA & Saloon",
    summary: "First-month customer acquisition launch",
    icon: Target,
    metrics: [
      { value: "451", label: "Messaging leads" },
      { value: "SAR 2.65", label: "Cost per lead" },
      { value: "2,162", label: "Landing-page views" },
      { value: "17,490", label: "Instagram views" },
    ],
  },
];

function SectionHeading({ title, note, inverse = false }: { title: string; note?: string; inverse?: boolean }) {
  return <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"><div><h2 className={`mb-4 text-3xl font-bold tracking-tight md:text-4xl ${inverse ? "text-primary-foreground" : ""}`}>{title}</h2><div className="h-1 w-20 bg-brand-accent" /></div>{note ? <p className={`max-w-lg leading-relaxed md:text-right ${inverse ? "text-slate-300" : "text-brand-muted"}`}>{note}</p> : null}</div>;
}

function Index() {
  const whatsapp = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;
  return (
    <div className="min-h-screen bg-white font-sans text-brand-primary">
      <SiteHeader />

      <section id="top" className="px-6 py-10 md:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
          <div className="flex-1 space-y-6 animate-fade-up">
            <div><h1 className="text-5xl font-bold leading-[1.08] tracking-tight md:text-7xl">Business Growth <span className="text-brand-accent">Consultant</span></h1><p className="mt-5 text-base font-semibold text-brand-muted md:text-lg">Business Strategy • Growth • Marketing • Data • AI & Automation</p></div>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-muted">I help businesses identify growth gaps, improve customer acquisition, strengthen their digital presence and build practical systems for growth using strategy, data, digital marketing and AI.</p>
            <p className="max-w-2xl border-l-2 border-brand-accent pl-5 font-semibold leading-relaxed">I don’t just run ads — I help solve business problems through strategy, data, technology and AI.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#growth-cases" className="rounded-lg bg-brand-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-brand-accent">View My Work</a>
              <a href={`mailto:${profile.email}?subject=Business Growth Opportunity`} className="rounded-lg border border-slate-200 px-6 py-3.5 font-semibold transition-colors hover:bg-surface-light">Let’s Discuss Your Business</a>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-slate-100 pt-5">
              <a href={cvAsset.url} download="Osama-Siddiqui-Business-Growth-Consultant-CV.pdf" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-primary"><Download className="h-4 w-4" /> Download Resume</a>
              <span className="text-slate-300">|</span>
              <a href={portfolioAsset.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-primary"><ExternalLink className="h-4 w-4" /> View CWB Portfolio</a>
            </div>
          </div>
          <div className="w-full shrink-0 md:w-[34%]"><img src={portrait.url} alt="Osama Siddiqui, Business Growth Consultant" width={768} height={1024} className="aspect-3/4 w-full rounded-2xl object-cover object-top outline-1 -outline-offset-1 outline-black/5" /></div>
        </div>
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 border-t border-slate-100 pt-6 md:grid-cols-2">
          {[{ title: "Business Growth Client Portfolio", detail: "81 clients, 17 industries and delivered services", asset: clientPortfolio, filename: "Osama-Siddiqui-Business-Growth-Client-Portfolio.pdf" }, { title: "CWB Case Studies Report", detail: "Detailed campaigns, results and business outcomes", asset: caseStudiesReport, filename: "Osama-Siddiqui-CWB-Case-Studies-Report.pdf" }].map((document) => <article key={document.title} className="flex flex-col justify-between gap-5 rounded-lg border border-slate-200 bg-surface-light p-5 sm:flex-row sm:items-center"><div><p className="font-bold">{document.title}</p><p className="mt-1 text-sm text-brand-muted">{document.detail}</p></div><div className="flex shrink-0 gap-2"><Button asChild variant="outline" size="sm"><a href={document.asset.url} target="_blank" rel="noreferrer"><Eye /> Review</a></Button><Button asChild size="sm"><a href={document.asset.url} download={document.filename}><Download /> Download</a></Button></div></article>)}
        </div>
      </section>

      <section aria-label="Professional results" className="bg-brand-primary px-6 py-12"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">{growthMetrics.map((metric) => <div key={metric.label}><div className="text-3xl font-bold text-primary-foreground">{metric.value}</div><div className="mt-2 text-sm leading-snug text-slate-400">{metric.label}</div></div>)}</div></section>

      <section aria-labelledby="client-logo-heading" className="overflow-hidden border-b border-slate-100 bg-white py-14"><div className="mx-auto mb-8 max-w-7xl px-6"><p id="client-logo-heading" className="text-center text-xs font-bold uppercase tracking-widest text-brand-muted">Selected organizations and brands supported</p></div><div className="group space-y-4 overflow-hidden" aria-label="Client logo showcase">{[clientLogos.filter((_, index) => index % 2 === 0), clientLogos.filter((_, index) => index % 2 !== 0)].map((row, rowIndex) => <div key={rowIndex} className={`flex w-max shrink-0 items-center group-hover:[animation-play-state:paused] ${rowIndex === 0 ? "animate-logo-track" : "animate-logo-track-reverse"}`}>{[...row, ...row, ...row].map((logo, index) => <div key={`${rowIndex}-${logo.name}-${index}`} className="mx-2 flex h-20 w-36 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-white p-3 shadow-sm sm:h-24 sm:w-44 sm:p-4"><img src={logo.src} alt={index < row.length ? `${logo.name} logo` : ""} aria-hidden={index >= row.length} loading="lazy" className="max-h-14 max-w-28 object-contain sm:max-h-16 sm:max-w-36" /></div>)}</div>)}</div></section>

      <section id="expertise" className="px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="How I Help Businesses Grow" note="Marketing is one of my tools. Business growth is the problem I solve." /><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{growthServices.map((service, index) => { const Icon = serviceIcons[index] ?? BriefcaseBusiness; return <article key={service.title} className="rounded-xl border border-slate-100 p-8 shadow-sm"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 leading-relaxed text-brand-muted">{service.body}</p></article>; })}</div></div></section>

      <section className="bg-surface-light px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Business Growth Dashboard" note="Verified outcomes grouped by business, so every result stays connected to its campaign context." /><div className="grid gap-6 lg:grid-cols-3">{campaignDashboards.map((dashboard) => { const Icon = dashboard.icon; return <article key={dashboard.company} className="overflow-hidden rounded-lg border border-slate-200 bg-white"><div className="flex items-start gap-4 border-b border-slate-100 p-6"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent"><Icon className="h-5 w-5" /></div><div><h3 className="font-bold">{dashboard.company}</h3><p className="mt-1 text-sm text-brand-muted">{dashboard.summary}</p></div></div><div className="grid grid-cols-2">{dashboard.metrics.map((metric, index) => <div key={metric.label} className={`min-h-32 p-5 ${index % 2 === 0 ? "border-r border-slate-100" : ""} ${index < 2 ? "border-b border-slate-100" : ""}`}><div className="text-2xl font-bold text-brand-accent">{metric.value}</div><div className="mt-2 text-sm leading-snug text-brand-muted">{metric.label}</div></div>)}</div></article>; })}</div><div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{businessResults.slice(3, 7).map((result) => <div key={result.label} className="bg-brand-primary p-6"><div className="text-2xl font-bold text-primary-foreground">{result.value}</div><div className="mt-2 text-sm text-slate-300">{result.label}</div></div>)}</div><p className="mt-6 text-sm text-brand-muted">Selected results from client projects and campaigns. Results vary by business, market, campaign period and objectives.</p></div></section>

      <section id="growth-cases" className="px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Selected Growth Cases" note="Four examples of building practical systems for acquisition and measurable growth." /><div className="grid gap-12 md:grid-cols-2">{growthCases.map((item) => <article key={item.company} className="border-b border-slate-200 pb-10"><img src={projectImages[item.image]} alt={`${item.company} growth case`} loading="lazy" className="mb-6 aspect-video w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5" /><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{item.company}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-4 leading-relaxed text-brand-muted">{item.description}</p><ul className="mt-5 grid gap-2 text-sm font-semibold sm:grid-cols-2">{item.results.map((result) => <li key={result} className="border-l-2 border-brand-accent pl-3">{result}</li>)}</ul><Link to="/projects" className="mt-6 inline-flex items-center gap-2 font-bold text-brand-accent hover:text-brand-primary">View Case Study <ArrowRight className="h-4 w-4" /></Link></article>)}</div><div className="mt-12 text-center"><Link to="/projects" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 font-bold hover:bg-surface-light">View All Projects <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section className="bg-brand-primary px-6 py-24 text-primary-foreground"><div className="mx-auto max-w-7xl"><SectionHeading inverse title="Business Growth & Real Estate Experience" note="Growth strategy, digital acquisition, websites, CRM and property technology solutions." /><div className="grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2 lg:grid-cols-5">{realEstateExperience.map((item) => <div key={item.name} className="bg-brand-primary p-7"><Building2 className="mb-5 h-6 w-6 text-brand-accent" /><h3 className="font-bold">{item.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{item.body}</p></div>)}</div><p className="mt-10 max-w-3xl border-l-2 border-brand-accent pl-5 text-lg text-slate-200">My role goes beyond marketing — I work across customer acquisition, digital systems, CRM, business development and growth strategy.</p></div></section>

      <section id="industries" className="px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="Industry Experience" note="81+ businesses supported across 17 industries." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{industryNames.map((industry, index) => { const Icon = industryIcons[index] ?? BriefcaseBusiness; return <div key={industry} className="flex min-h-32 flex-col justify-between rounded-lg border border-slate-100 p-6 shadow-sm"><div className="flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent"><Icon className="h-5 w-5" /></div><span className="text-sm font-bold text-brand-accent">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-5 font-bold">{industry}</h3></div>; })}</div></div></section>

      <section className="bg-surface-light px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="AI, Digital Marketing & Automation" note="Practical, certified capability used to improve analysis, acquisition, workflows and business decisions — not AI software engineering." /><div className="grid gap-8 lg:grid-cols-[1.15fr_1.85fr]"><article className="rounded-lg bg-brand-primary p-7 text-primary-foreground md:p-9"><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-3 text-brand-accent"><Sparkles className="h-6 w-6" /><span className="text-xs font-bold uppercase tracking-widest">Featured Google credential</span></div><div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-md bg-white p-2"><img src={featuredAiCredential.badge} alt="Google AI Essentials credential badge" className="max-h-full max-w-full object-contain" /></div></div><h3 className="mt-5 text-3xl font-bold">{featuredAiCredential.title}</h3><p className="mt-2 font-semibold text-slate-300">{featuredAiCredential.issuer} · {featuredAiCredential.date}</p><p className="mt-5 leading-relaxed text-slate-300">{featuredAiCredential.description}</p><ul className="mt-6 space-y-3">{featuredAiCredential.courses.map((course) => <li key={course} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />{course}</li>)}</ul><Button asChild className="mt-7 bg-brand-accent hover:bg-brand-accent/90"><a href={featuredAiCredential.verifyUrl} target="_blank" rel="noreferrer">Verify with Coursera <ExternalLink /></a></Button></article><div className="space-y-8"><div className="grid gap-4 sm:grid-cols-3">{verifiedSkillGroups.map((group) => <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6"><h3 className="font-bold">{group.title}</h3><ul className="mt-4 space-y-3 text-sm text-brand-muted">{group.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{item}</li>)}</ul></article>)}</div><div><h3 className="mb-5 text-lg font-bold">Business AI & Automation Capabilities</h3><div className="grid gap-px overflow-hidden rounded-lg bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">{aiCapabilities.map((capability) => <div key={capability} className="bg-white p-4 text-sm font-medium">{capability}</div>)}</div></div><div><h3 className="mb-4 text-lg font-bold">Tools</h3><div className="flex flex-wrap gap-3">{aiTools.map((tool) => <span key={tool} className="rounded-md bg-white px-4 py-2 font-semibold ring-1 ring-slate-200">{tool}</span>)}</div></div></div></div></div></section>

      <section id="experience" className="px-6 py-24"><div className="mx-auto max-w-5xl"><SectionHeading title="Experience & Qualifications" note="Career history, recognition and professional development." /><div className="relative space-y-10 before:absolute before:left-[15px] before:h-full before:w-px before:bg-slate-200">{experience.map((role) => <article key={role.role + role.company} className="relative pl-12"><div className="absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white bg-brand-accent" /><p className="font-bold text-brand-accent">{role.period}</p><h3 className="mt-1 text-xl font-bold">{role.role}</h3><p className="text-brand-muted">{role.company} · {role.place}</p><p className="mt-4 leading-relaxed text-brand-muted">{role.outcome}</p></article>)}</div><div className="mt-20 grid gap-10 border-t border-slate-200 pt-12 md:grid-cols-2"><div><h3 className="mb-5 text-xl font-bold">Awards & Recognition</h3><ul className="space-y-4">{awards.map((item) => <li key={item.title}><p className="font-semibold">{item.title}</p><p className="text-sm text-brand-muted">{item.org}</p></li>)}</ul></div><div><h3 className="mb-5 text-xl font-bold">Education & Certifications</h3><ul className="space-y-4">{certifications.map((item) => <li key={item.year + item.title} className="flex gap-4"><span className="w-12 shrink-0 text-sm font-bold text-brand-accent">{item.year}</span><span><span className="block font-semibold">{item.title}</span><span className="text-sm text-brand-muted">{item.issuer}</span></span></li>)}</ul></div></div><div className="mt-16 border-t border-slate-200 pt-12"><div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-3"><Award className="h-6 w-6 text-brand-accent" /><h3 className="text-2xl font-bold">Certificate Gallery</h3></div><p className="mt-2 text-brand-muted">All supplied certificates across AI, marketing, data, SEO, web, design and professional skills.</p></div><div className="flex gap-2"><Button asChild variant="outline"><a href={certificatesDocument} target="_blank" rel="noreferrer"><Eye /> Review PDF</a></Button><Button asChild><a href={certificatesDocument} download="Osama-Siddiqui-Certificates.pdf"><Download /> Download</a></Button></div></div><div className="group space-y-5 overflow-hidden" aria-label="Sliding certificate gallery">{[certificateGallery.filter((_, index) => index % 2 === 0), certificateGallery.filter((_, index) => index % 2 !== 0)].map((row, rowIndex) => <div key={rowIndex} className={`flex w-max shrink-0 items-stretch group-hover:[animation-play-state:paused] ${rowIndex === 0 ? "animate-certificate-track" : "animate-certificate-track-reverse"}`}>{[...row, ...row].map((certificate, index) => <article key={`${certificate.title}-${index}`} aria-hidden={index >= row.length} className="mx-2 w-64 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white sm:w-72"><img src={certificate.image} alt={index < row.length ? `${certificate.title} certificate` : ""} loading="lazy" className="aspect-[1.414/1] w-full border-b border-slate-100 object-cover object-top" /><div className="p-4"><p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{certificate.date}</p><h4 className="mt-2 font-bold leading-snug">{certificate.title}</h4><p className="mt-1 text-sm text-brand-muted">{certificate.issuer}</p></div></article>)}</div>)}</div></div></div></section>

      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group block bg-brand-accent px-6 py-14 text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-5"><Linkedin className="h-10 w-10" /><div><p className="text-sm font-bold uppercase tracking-widest">Connect on LinkedIn</p><h2 className="mt-1 text-3xl font-bold">Follow my professional work and insights</h2></div></div><span className="inline-flex items-center gap-2 font-bold">View Profile <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span></div></a>

      <section className="bg-surface-light px-6 py-24"><div className="mx-auto max-w-7xl"><SectionHeading title="My Approach" /><ol className="grid gap-4 md:grid-cols-7">{approach.map((step, index) => <li key={step} className="relative rounded-lg border border-slate-100 bg-white p-5"><span className="text-sm font-bold text-brand-accent">{String(index + 1).padStart(2, "0")}</span><p className="mt-5 font-bold leading-snug">{step}</p>{index < approach.length - 1 ? <ArrowDown className="mx-auto mt-4 h-4 w-4 text-brand-accent md:absolute md:-right-3 md:top-1/2 md:z-10 md:mt-0 md:-translate-y-1/2 md:-rotate-90" /> : null}</li>)}</ol></div></section>

      <section id="contact" className="px-6 py-24"><div className="mx-auto max-w-5xl rounded-2xl bg-brand-primary p-10 text-center text-primary-foreground md:p-16"><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Have a Business Challenge or Growth Opportunity?</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">If you are looking to improve customer acquisition, develop a growth strategy, strengthen your digital presence, automate business processes or build a practical digital solution, let’s discuss the opportunity.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href={`mailto:${profile.email}?subject=Business Growth Opportunity`} className="rounded-lg bg-brand-accent px-6 py-3.5 font-bold">Start a Conversation</a><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3.5 font-bold hover:bg-white/5">WhatsApp Me</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3.5 font-bold hover:bg-white/5">LinkedIn</a></div><div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 md:flex-row md:gap-6"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{profile.location}</span><a className="inline-flex items-center gap-2" href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone className="h-4 w-4" />{profile.phone}</a><a className="inline-flex items-center gap-2" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" />{profile.email}</a></div></div></section>

      <footer className="border-t border-slate-100 px-6 py-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-brand-muted md:flex-row"><span>© {new Date().getFullYear()} Osama Siddiqui. All rights reserved.</span><span className="font-medium">Business Growth Consultant · Riyadh, Saudi Arabia</span></div></footer>
    </div>
  );
}