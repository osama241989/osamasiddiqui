import { useState } from "react";
import { z } from "zod";
import { CalendarCheck, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
  service: z.string().trim().max(80).optional(),
  request_type: z.enum(["contact", "booking"]),
  message: z.string().trim().min(1, "Please add a short message").max(2000),
});

const services = ["Business Growth Strategy", "Paid Ad Campaigns", "Website Build & Audit", "Logo & Full Brand Building", "Company Profile & Design", "AI & Automation", "Other"];
const field = "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-primary outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [type, setType] = useState<"booking" | "contact">("booking");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse({ ...fd, request_type: type, phone: fd.phone || undefined, company: fd.company || undefined, service: fd.service || undefined });
    if (!parsed.success) { setError(parsed.error.issues[0].message); setStatus("error"); return; }
    setStatus("sending");
    const d = parsed.data;
    const { error: dbError } = await supabase.from("contact_submissions").insert({ name: d.name, email: d.email, message: d.message, request_type: d.request_type, phone: d.phone ?? null, company: d.company ?? null, service: d.service ?? null });
    if (dbError) { setError("Something went wrong. Please try WhatsApp or email instead."); setStatus("error"); return; }
    setStatus("done");
  }

  if (status === "done") return <div className="rounded-xl bg-white p-10 text-center text-brand-primary"><CalendarCheck className="mx-auto h-10 w-10 text-brand-accent" /><h3 className="mt-4 text-2xl font-bold">Thank you — request received</h3><p className="mt-2 text-brand-muted">I'll get back to you shortly. For a faster reply, message me on WhatsApp.</p></div>;

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl bg-white p-6 text-left text-brand-primary md:p-8" noValidate>
      <div className="grid grid-cols-2 gap-2 rounded-lg bg-surface-light p-1">
        {(["booking", "contact"] as const).map((t) => <button key={t} type="button" onClick={() => setType(t)} className={`rounded-md py-2.5 text-sm font-bold transition-colors ${type === t ? "bg-brand-primary text-primary-foreground" : "text-brand-muted"}`}>{t === "booking" ? "Book a Consultation" : "Send a Message"}</button>)}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" placeholder="Full name *" maxLength={100} className={field} required />
        <input name="email" type="email" placeholder="Email *" maxLength={255} className={field} required />
        <input name="phone" type="tel" placeholder="Phone / WhatsApp" maxLength={30} className={field} />
        <input name="company" placeholder="Company" maxLength={120} className={field} />
      </div>
      <select name="service" defaultValue="" className={field}><option value="">Service you're interested in</option>{services.map((s) => <option key={s}>{s}</option>)}</select>
      <textarea name="message" rows={4} maxLength={2000} placeholder={type === "booking" ? "Tell me about your business and a preferred day/time *" : "Your message *"} className={field} required />
      {status === "error" ? <p className="text-sm font-medium text-destructive">{error}</p> : null}
      <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-brand-primary disabled:opacity-60"><Send className="h-4 w-4" />{status === "sending" ? "Sending..." : type === "booking" ? "Request Booking" : "Send Message"}</button>
    </form>
  );
}
