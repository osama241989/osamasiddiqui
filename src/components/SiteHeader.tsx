import { Link } from "@tanstack/react-router";
import { LanguageToggle } from "./LanguageToggle";
import { WhatsAppIcon } from "./WhatsAppButton";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md" aria-label="Main navigation">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight md:text-xl">OSAMA SIDDIQUI</Link>
        <div className="flex items-center gap-3 text-sm font-medium text-brand-muted md:gap-6">
          <a href="/#growth-cases" className="hidden transition-colors hover:text-brand-accent lg:block">Cases</a>
          <Link to="/projects" className="hidden transition-colors hover:text-brand-accent sm:block">All Projects</Link>
          <LanguageToggle />
          <a href="/#contact" className="hidden whitespace-nowrap rounded-lg border border-slate-200 px-4 py-2 font-semibold transition-colors hover:border-brand-accent hover:text-brand-accent md:block">Book a Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-whatsapp px-4 py-2 font-bold text-brand-primary shadow-sm transition-colors hover:bg-whatsapp/90">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
