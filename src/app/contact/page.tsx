import { SectionShell } from "@/components/section-shell";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Contact"
        title="Use this page as the handoff into the real business model."
        copy="Applications, booked calls, inquiry forms, partner conversations, or future intake can start here once you decide the exact lane."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="glass-card p-6">
            <p className="eyebrow">Phone</p>
            <p className="mt-4 text-2xl font-semibold text-white">{site.phone}</p>
          </div>
          <div className="glass-card p-6">
            <p className="eyebrow">Email</p>
            <p className="mt-4 break-all text-2xl font-semibold text-white">{site.email}</p>
          </div>
          <div className="glass-card p-6">
            <p className="eyebrow">Instagram</p>
            <p className="mt-4 text-2xl font-semibold text-white">{site.instagram}</p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="glass-card p-6 text-white/70">
            Do not route emergency, urgent health, or protected medical information through a general website contact form or DM inbox.
          </div>
          <div className="glass-card p-6 text-white/70">
            If this becomes a clinic, consultation or prescribing platform later, the next build should add the correct consent, intake, and provider-review flow.
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
