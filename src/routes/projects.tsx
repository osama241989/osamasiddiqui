import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import cwbPortfolio from "@/assets/cwb-portfolio-2026.pdf.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { allProjects } from "@/data/profile";
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
  return (
    <div className="min-h-screen bg-white font-sans text-brand-primary">
      <SiteHeader />
      <header className="border-b border-slate-100 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent"><ArrowLeft className="h-4 w-4" /> Back to profile</Link>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-accent">Portfolio</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">All Projects</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted">A selection of business growth, customer acquisition, digital marketing, branding, e-commerce and campaign work across Saudi Arabia and the GCC.</p>
          <a href={cwbPortfolio.url} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-brand-accent">Open Full CWB Portfolio <ExternalLink className="h-4 w-4" /></a>
        </div>
      </header>
      <main className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          {allProjects.map((project) => (
            <article key={project.name} className="border-b border-slate-200 pb-12">
              <img src={projectImages[project.image]} alt={`${project.name} project work`} className="mb-6 aspect-video w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5" />
              <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">{project.industry}</p>
              <h2 className="mt-2 text-2xl font-bold">{project.name}</h2>
              <p className="mt-2 text-sm font-medium text-brand-muted">{project.role}</p>
              <div className="mt-6 space-y-4 text-brand-muted">
                <p><strong className="text-brand-primary">Challenge:</strong> {project.challenge}</p>
                <p><strong className="text-brand-primary">Approach:</strong> {project.approach}</p>
                <p><strong className="text-brand-primary">Impact:</strong> {project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded bg-surface-light px-2 py-1 text-xs font-medium text-brand-muted ring-1 ring-slate-200">{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </main>
      <footer className="border-t border-slate-100 px-6 py-10 text-center text-sm text-brand-muted">© {new Date().getFullYear()} Osama Siddiqui · Business Growth Consultant</footer>
    </div>
  );
}