import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md" aria-label="Main navigation">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight md:text-xl">OSAMA SIDDIQUI</Link>
        <div className="flex items-center gap-4 text-sm font-medium text-brand-muted md:gap-8">
          <a href="/#growth-cases" className="hidden transition-colors hover:text-brand-accent sm:block">Cases</a>
          <Link to="/projects" className="transition-colors hover:text-brand-accent">All Projects</Link>
          <a href="/#contact" className="rounded-lg bg-brand-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-brand-accent">Contact</a>
        </div>
      </div>
    </nav>
  );
}