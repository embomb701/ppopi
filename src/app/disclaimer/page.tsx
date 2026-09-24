import { SectionShell } from "@/components/section-shell";
import { disclaimerSections } from "@/lib/site";

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Disclaimer"
        title="Important research-use information."
        copy="Please read this information before contacting us or reviewing available products."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {disclaimerSections.map((section) => (
            <article key={section.title} className="glass-card card-panel p-6">
              <p className="eyebrow">Important</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-white/70">{section.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
