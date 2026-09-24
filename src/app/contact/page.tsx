import { SectionShell } from "@/components/section-shell";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Contact"
        title="Questions about products or documentation?"
        copy="Reach out for current availability, certificates of analysis, order support, or general inquiries."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <a href={`mailto:${site.email}`} className="glass-card card-panel p-6">
            <p className="eyebrow">Email</p>
            <p className="mt-4 break-all text-2xl font-semibold text-white">{site.email}</p>
          </a>
          <div className="glass-card card-panel p-6">
            <p className="eyebrow">Instagram</p>
            <p className="mt-4 text-2xl font-semibold text-white">{site.instagram}</p>
          </div>
        </div>
        <div className="glass-card p-6 text-white/70">
          Do not send emergency, urgent health, or protected medical information through email or social media. Contact an appropriate healthcare or emergency service for medical needs.
        </div>
      </SectionShell>
    </div>
  );
}
