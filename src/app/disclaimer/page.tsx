import { SectionShell } from "@/components/section-shell";
import { disclaimerSections } from "@/lib/site";

export default function DisclaimerPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Disclaimer"
        title="Stronger disclaimer language, made visible."
        copy="This page reframes the site as premium brand and informational content unless and until the underlying business model is reviewed, licensed, and operationally ready for something more specific."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {disclaimerSections.map((section) => (
            <article key={section.title} className="glass-card card-panel p-6">
              <p className="eyebrow">Boundary</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-white/70">{section.body}</p>
            </article>
          ))}
        </div>
        <div className="glass-card p-6 text-white/70">
          Important: if you later choose a research-only sales model, the entire product experience should stay consistent with that framework. If you choose a clinician-guided model, evaluation, prescribing, and suitability should be tied to licensed professional review rather than broad website promises.
        </div>
      </SectionShell>
    </div>
  );
}
