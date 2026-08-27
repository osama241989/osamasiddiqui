import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  Compass,
  Cpu,
  Droplets,
  Factory,
  GraduationCap,
  HardHat,
  Heart,
  Hotel,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import portrait from "@/assets/portrait.jpg.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";
import portfolioAsset from "@/assets/portfolio.pdf.asset.json";
import imgRealEstate from "@/assets/p-realestate.jpg.asset.json";
import imgMattress from "@/assets/p-mattress.jpg.asset.json";
import imgFnb from "@/assets/p-fnb.jpg.asset.json";
import imgAceco from "@/assets/p-aceco.jpg.asset.json";

import {
  awards,
  certifications,
  experience,
  industries,
  metrics,
  profile,
  projects,
  skillGroups,
  skillsInAction,
  toolGroups,
  valueAreas,
} from "@/data/profile";

const TITLE = "Osama Siddiqui — Digital Marketing & Business Development, Riyadh";
const DESCRIPTION =
  "Digital marketing, business development and IT systems professional in Riyadh with 10+ years across the GCC. 30+ clients, 100+ campaigns, 20+ industries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const industryIcons: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  compass: Compass,
  building: Building2,
  hardhat: HardHat,
  hotel: Hotel,
  utensils: UtensilsCrossed,
  shopping: ShoppingBag,
  factory: Factory,
  droplet: Droplets,
  cpu: Cpu,
  briefcase: Briefcase,
  heart: Heart,
};

const projectImages = [imgRealEstate, imgMattress, imgFnb, imgAceco];

function SectionHeading({ title, note }: { title: string; note?: string }) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">{title}</h2>
        <div className="h-1 w-20 bg-brand-accent" />
      </div>
      {note ? (
        <p className="max-w-md text-brand-muted md:text-right">{note}</p>
      ) : null}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-primary">
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="text-xl font-bold tracking-tight">
            OSAMA SIDDIQUI
          </a>
          <div className="hidden gap-8 text-sm font-medium text-brand-muted md:flex">
            <a href="#expertise" className="transition-colors hover:text-brand-accent">
              Expertise
            </a>
            <a href="#industries" className="transition-colors hover:text-brand-accent">
              Industries
            </a>
            <a href="#projects" className="transition-colors hover:text-brand-accent">
              Projects
            </a>
            <a href="#experience" className="transition-colors hover:text-brand-accent">
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full bg-brand-primary px-5 py-2 text-white transition-all hover:bg-brand-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
          <div className="flex-1 space-y-8 animate-fade-up">
            <div className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent">
              Riyadh, Saudi Arabia · Open to opportunities
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
              Digital growth and{" "}
              <span className="text-brand-accent">business systems</span> for the GCC.
            </h1>
            <p className="max-w-xl text-xl leading-relaxed text-brand-muted">
              10+ years connecting marketing, technology and business development — from
              performance campaigns and lead generation to CRM, digital systems and AI
              automation. Founder of Connect World Business, supporting 30+ clients across
              20+ sectors in Saudi Arabia and the GCC.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="cursor-pointer rounded-lg bg-brand-primary px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                View My Experience
              </a>
              <a
                href={cvAsset.url}
                download="Osama-Siddiqui-CV.pdf"
                className="cursor-pointer rounded-lg border border-slate-200 px-8 py-4 font-semibold text-brand-primary transition-all hover:bg-slate-50"
              >
                Download Resume
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm font-medium text-brand-muted">
              <li>Digital Marketing</li>
              <li>Business Development</li>
              <li>Marketing Operations</li>
              <li>IT & Digital Systems</li>
              <li>AI Automation</li>
            </ul>
          </div>
          <div className="w-full shrink-0 md:w-1/3">
            <img
              src={portrait.url}
              alt="Portrait of Osama Siddiqui"
              width={1080}
              height={1440}
              className="aspect-3/4 w-full rounded-2xl object-cover object-top outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-brand-primary px-6 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-bold text-white">{m.value}</div>
              <div className="mt-1 text-sm text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Professional Profile" />
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-5 text-lg leading-relaxed text-brand-muted md:col-span-2">
              <p>
                I am a marketing and business growth professional based in Riyadh, working at
                the intersection of digital marketing, business development and digital
                systems. My work spans data-driven campaign strategy, customer acquisition,
                website and e-commerce delivery, CRM, and technology-enabled operations.
              </p>
              <p>
                Alongside running Connect World Business — a full-service digital marketing
                and business solutions agency — I currently manage IT systems, educational
                technology platforms and AI-assisted workflows for a multi-school education
                group, including British Council examination coordination.
              </p>
              <p>
                That combination means I can plan a campaign, build the website behind it,
                connect it to a CRM, report on the KPIs, and coordinate the teams and systems
                that keep it running.
              </p>
            </div>
            <div className="space-y-6 rounded-xl border border-slate-100 bg-surface-light p-8">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Based in
                </div>
                <div className="font-medium">{profile.location}</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Languages
                </div>
                <ul className="space-y-1 text-brand-muted">
                  {profile.languages.map((l) => (
                    <li key={l.name}>
                      <span className="font-medium text-brand-primary">{l.name}</span> —{" "}
                      {l.level}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  Focus
                </div>
                <p className="text-brand-muted">
                  Digital marketing · Business development · Marketing operations · IT &
                  digital systems · AI automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Core Skills & Expertise"
            note="Capabilities grouped as they are applied — strategy, execution, systems and measurement."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {skillGroups.map((g) => (
              <div
                key={g.title}
                className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-xl font-bold text-brand-accent">
                  {g.initial}
                </div>
                <h3 className="mb-4 text-xl font-bold">{g.title}</h3>
                <ul className="space-y-3 text-brand-muted">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Industries I Can Support"
            note="Sectors drawn from delivered client work and in-house roles across Saudi Arabia and the GCC."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.icon] ?? Briefcase;
              return (
                <div
                  key={ind.name}
                  className="rounded-xl border border-slate-100 p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{ind.name}</h3>
                  <p className="leading-relaxed text-brand-muted">{ind.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Selected Projects"
            note="Client programmes delivered through Connect World Business and consulting roles."
          />
          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p, i) => (
              <article key={p.name} className="group">
                <img
                  src={(projectImages[i] ?? projectImages[0])!.url}
                  alt={`${p.name} work sample`}
                  loading="lazy"
                  className="mb-6 aspect-video w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5 transition-transform group-hover:scale-[1.02]"
                />
                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {p.industry}
                </h4>
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-muted">{p.role}</p>
                <dl className="mt-5 space-y-3 text-brand-muted">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                      Challenge
                    </dt>
                    <dd className="leading-relaxed">{p.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                      Approach
                    </dt>
                    <dd className="leading-relaxed">{p.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                      Impact
                    </dt>
                    <dd className="leading-relaxed">{p.impact}</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white px-2 py-1 text-xs font-medium text-brand-muted ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-brand-primary px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">
            Career Trajectory
          </h2>
          <div className="relative space-y-12 before:absolute before:left-[17px] before:h-full before:w-[2px] before:bg-slate-800">
            {experience.map((role) => (
              <div key={role.role + role.company} className="relative pl-12">
                <div className="absolute left-0 top-1 z-10 h-9 w-9 rounded-full border-4 border-brand-primary bg-brand-accent" />
                <div className="font-bold text-brand-accent">{role.period}</div>
                <h3 className="mt-1 text-xl font-bold">{role.role}</h3>
                <div className="mb-4 text-slate-400">
                  {role.company} · {role.place}
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {role.points.map((pt) => (
                    <li key={pt} className="before:mr-2 before:text-brand-accent before:content-['—']">
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-l-2 border-brand-accent pl-4 text-sm text-slate-200">
                  {role.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills in action */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Skills in Action"
            note="Where each capability has actually been applied, and what it produced."
          />
          <div className="overflow-hidden rounded-xl border border-slate-100">
            {skillsInAction.map((s, i) => (
              <div
                key={s.skill}
                className={`grid gap-2 p-6 md:grid-cols-12 md:gap-8 ${
                  i % 2 === 1 ? "bg-surface-light" : "bg-white"
                }`}
              >
                <div className="font-bold md:col-span-3">{s.skill}</div>
                <div className="text-sm font-medium text-brand-accent md:col-span-4">
                  {s.where}
                </div>
                <div className="text-brand-muted md:col-span-5">{s.delivered}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Tools & Technologies" />
          <div className="grid gap-8 md:grid-cols-3">
            {toolGroups.map((g) => (
              <div key={g.title} className="rounded-xl border border-slate-100 bg-white p-8">
                <h3 className="mb-4 text-lg font-bold">{g.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-light px-3 py-1.5 text-sm font-medium text-brand-muted ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional value */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="What I Can Support"
            note="The types of initiatives where my experience is directly applicable."
          />
          <div className="grid gap-px overflow-hidden rounded-xl bg-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {valueAreas.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <h3 className="mb-3 text-lg font-bold">{v.title}</h3>
                <p className="leading-relaxed text-brand-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career highlights */}
      <section className="bg-surface-light px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Career Highlights" />
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">At a glance</h3>
              <ul className="space-y-3 text-brand-muted">
                <li>10+ years of professional experience</li>
                <li>30+ business clients supported</li>
                <li>100+ marketing campaigns executed</li>
                <li>30+ websites and landing pages delivered</li>
                <li>Multi-industry experience across 20+ sectors</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Awards & recognition</h3>
              <ul className="space-y-4">
                {awards.map((a) => (
                  <li key={a.title}>
                    <div className="font-medium">{a.title}</div>
                    <div className="text-sm text-brand-muted">{a.org}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Education & certifications</h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.year + c.title} className="flex gap-4">
                    <span className="w-12 shrink-0 text-sm font-bold text-brand-accent">
                      {c.year}
                    </span>
                    <span>
                      <span className="block font-medium">{c.title}</span>
                      <span className="text-sm text-brand-muted">{c.issuer}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-32">
        <div className="mx-auto max-w-4xl rounded-3xl bg-surface-light p-12 text-center md:p-20">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to start a conversation?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg text-brand-muted">
            Available for full-time roles, consulting engagements and client projects across
            Saudi Arabia and the GCC.
          </p>
          <div className="mb-10 flex flex-col items-center justify-center gap-6 md:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="w-full rounded-xl bg-brand-primary px-10 py-5 font-bold text-white transition-all hover:bg-brand-accent md:w-auto"
            >
              Contact Me Directly
            </a>
            <div className="flex gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-white"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                aria-label="Call Osama"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email Osama"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-colors hover:bg-white"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-brand-muted md:flex-row md:gap-8">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-brand-primary">
              {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-brand-primary">
              {profile.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <a
              href={cvAsset.url}
              download="Osama-Siddiqui-CV.pdf"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 transition-colors hover:border-brand-accent"
            >
              Download CV (PDF)
            </a>
            <a
              href={portfolioAsset.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 transition-colors hover:border-brand-accent"
            >
              View Project Portfolio
            </a>
            <a
              href={profile.agency}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 transition-colors hover:border-brand-accent"
            >
              Connect World Business
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-brand-muted md:flex-row">
          <div>© {new Date().getFullYear()} Osama Siddiqui. All rights reserved.</div>
          <div className="font-medium">
            Digital Marketing · Business Development · IT & Digital Systems
          </div>
        </div>
      </footer>
    </div>
  );
}
