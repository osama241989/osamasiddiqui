import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Mail, Phone, SlidersHorizontal, RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SystemProjectCard } from "@/components/SystemPortfolio";
import { systemProjects } from "@/data/systemProjects";
import { filterProjects, projectServices } from "@/data/projectFilters";
import cwbPortfolio from "@/assets/cwb-portfolio-2026.pdf.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { allProjects, profile, telHref } from "@/data/profile";
import { WHATSAPP_URL, WhatsAppIcon } from "@/components/WhatsAppButton";

import { projectImages } from "@/data/projectImages";

const TITLE = "All Projects | Osama Siddiqui";
const DESCRIPTION = "Selected growth, marketing, brand, digital platform and customer acquisition projects by Business Growth Consultant Osama Siddiqui.";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: TITLE }, { name: "description", content: DESCRIPTION },
    { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [industry, setIndustry] = useState("all");
  const [service, setService] = useState("all");
  const [selected, setSelected] = useState<(typeof allProjects)[number] | null>(null);
  const legacyProjects = allProjects.map(project => ({...project, services: projectServices[project.image] ?? []}));
  const catalog = [...legacyProjects, ...systemProjects];
  const industries = [...new Set(catalog.map(project => project.industry))].sort();
  const services = [...new Set(catalog.flatMap(project => project.services))].sort();
  const filteredLegacy = filterProjects(legacyProjects, industry, service);
  const filteredSystems = filterProjects(systemProjects, industry, service);
  const count = filteredLegacy.length + filteredSystems.length;
  const reset = () => {setIndustry("all"); setService("all");};
  return (
    <div className="min-h-screen bg-white font-sans text-brand-primary">
      <SiteHeader />
      <header className="border-b border-slate-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"><ArrowLeft className="h-4 w-4" /> Back to profile</Link>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">Portfolio</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">All Projects</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted">A selection of business growth, customer acquisition, digital marketing, branding, e-commerce and campaign work across Saudi Arabia and the GCC.</p>
          <Button asChild className="mt-8"><a href={cwbPortfolio.url} target="_blank" rel="noreferrer">Open Full CWB Portfolio <ExternalLink className="h-4 w-4" /></a></Button>
        </div>
      </header>
      <main className="px-6 py-20">
        <div className="mx-auto max-w-7xl"><div className="mb-10 border-y border-border py-6"><div className="mb-5 flex items-center gap-2 font-semibold"><SlidersHorizontal className="size-4 text-brand-accent" /> Filter projects</div><div className="flex flex-col gap-4 sm:flex-row sm:items-end"><label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-semibold">Industry<select aria-label="Industry" value={industry} onChange={event => setIndustry(event.target.value)} className="h-11 w-full rounded-md border border-border bg-background px-3 text-brand-primary"><option value="all">All industries</option>{industries.map(item => <option key={item} value={item}>{item}</option>)}</select></label><label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-semibold">Service type<select aria-label="Service type" value={service} onChange={event => setService(event.target.value)} className="h-11 w-full rounded-md border border-border bg-background px-3 text-brand-primary"><option value="all">All services</option>{services.map(item => <option key={item} value={item}>{item}</option>)}</select></label><Button variant="outline" className="h-11" onClick={reset} disabled={industry === "all" && service === "all"}><RotateCcw /> Reset filters</Button></div><p className="mt-5 text-sm text-brand-muted" aria-live="polite">{count} / {catalog.length} <span>projects</span></p></div>
        <div className="grid gap-12 md:grid-cols-2">
          {filteredSystems.map(project => <SystemProjectCard key={project.slug} project={project} />)}
          {filteredLegacy.map((project) => (
            <article key={project.name} className="border-b border-slate-200 pb-12">
              <img src={projectImages[project.image]} alt={`${project.name} project work`} className="mb-6 aspect-video w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5" />
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{project.industry}</p>
              <h2 className="mt-2 text-2xl font-bold">{project.name}</h2>
              <p className="mt-2 text-sm font-medium text-brand-muted">{project.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">{project.challenge}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded bg-surface-light px-2 py-1 text-xs font-medium text-brand-muted ring-1 ring-slate-200">{tag}</span>)}</div>
              <Button variant="link" className="mt-5 h-auto p-0 text-brand-accent" onClick={() => setSelected(project)}>View project details <ArrowRight /></Button>
            </article>
          ))}
        </div>{count === 0 && <div className="py-16 text-center"><h2 className="text-2xl font-bold">No projects match these filters</h2><Button variant="outline" className="mt-5" onClick={reset}><RotateCcw /> Reset filters</Button></div>}</div>
      </main>
      <Dialog open={selected !== null} onOpenChange={open => {if (!open) setSelected(null);}}><DialogContent className="max-h-[90vh] w-[94vw] max-w-3xl overflow-y-auto" data-lenis-prevent><DialogTitle>{selected?.name}</DialogTitle><DialogDescription>{selected?.role}</DialogDescription>{selected && <><img src={projectImages[selected.image]} alt={`${selected.name} project evidence`} className="aspect-video w-full rounded-lg object-contain" /><div className="space-y-5 text-sm leading-relaxed text-brand-muted"><p><strong className="text-brand-primary">Challenge:</strong> {selected.challenge}</p><p><strong className="text-brand-primary">Approach:</strong> {selected.approach}</p><p><strong className="text-brand-primary">Impact:</strong> {selected.impact}</p></div><Button asChild variant="outline"><a href={cwbPortfolio.url} target="_blank" rel="noreferrer">Review original portfolio <ExternalLink /></a></Button></>}</DialogContent></Dialog>
      <footer className="border-t border-slate-100 px-6 py-10 text-center text-sm text-brand-muted"><p>© {new Date().getFullYear()} Osama Siddiqui · Business Growth Consultant</p><div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-medium"><a className="inline-flex items-center gap-2 hover:text-brand-accent" href={telHref}><Phone className="h-4 w-4" />{profile.phone}</a><a className="inline-flex items-center gap-2 hover:text-brand-accent" href={`mailto:${profile.email}`}><Mail className="h-4 w-4" />{profile.email}</a><a className="inline-flex items-center gap-2 hover:text-brand-accent" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon className="h-4 w-4 text-whatsapp" /> WhatsApp</a></div></footer>
    </div>
  );
}