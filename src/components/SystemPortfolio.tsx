import { Link } from "@tanstack/react-router";
import { ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { systemProjects, type SystemProject } from "@/data/systemProjects";

export function SystemProjectCard({ project }: { project: SystemProject }) {
  return <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background">
    <Link to="/projects/$slug" params={{slug: project.slug}} aria-label={`View ${project.name} case study`} className="block overflow-hidden border-b border-border bg-surface-light">
      <img src={project.cover} alt={`${project.name} ${project.slug.includes('dream') ? 'n8n workflow' : 'project preview'}`} loading="lazy" className="aspect-video w-full object-contain transition-transform duration-500 hover:scale-[1.03] motion-reduce:transform-none" />
    </Link>
    <div className="flex flex-1 flex-col p-6"><p className="text-xs font-semibold text-brand-accent">{project.status}</p><h3 className="mt-3 text-xl font-bold text-brand-primary">{project.name}</h3><p className="mt-3 text-sm leading-relaxed text-brand-muted">{project.summary}</p><div className="my-5 flex flex-wrap gap-2">{project.tools.slice(0,4).map(tool => <span key={tool} className="rounded bg-surface-light px-2 py-1 text-xs text-brand-muted">{tool}</span>)}</div><Button asChild variant="link" className="mt-auto h-auto justify-start p-0 text-brand-accent"><Link to="/projects/$slug" params={{slug: project.slug}}>View case study <ArrowRight /></Link></Button></div>
  </article>;
}

export function SystemPortfolio() {
  return <section id="lead-engine" className="bg-surface-light px-6 py-20"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-accent"><Workflow className="size-5" /> AUTOMATION & DIGITAL SYSTEMS</p><h2 className="text-3xl font-bold text-brand-primary md:text-4xl">Practical AI. Connected workflows.</h2><div className="mt-5 h-1 w-20 bg-brand-accent" /></div><p className="max-w-lg text-brand-muted">AI assistants, lead-generation workflows and property business systems — built around practical business needs.</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{systemProjects.map(project => <SystemProjectCard key={project.slug} project={project} />)}</div><Button asChild variant="outline" className="mt-8"><Link to="/projects">Browse all projects <ArrowRight /></Link></Button></div></section>;
}