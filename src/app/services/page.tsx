import { SectionShell } from "@/components/section-shell";
import { processSteps, services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <div className="space-y-14 py-10">
      <SectionShell
        eyebrow="Services"
        title="A better structure for whatever this becomes next."
        copy="The upgraded pages support a high-end consultation funnel, an educational authority brand, or a more tightly controlled future product experience."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="glass-card card-panel p-6">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-white/70">{service.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Sequence" title="Recommended on-site flow">
        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="glass-card p-6">
              <p className="font-display text-4xl text-[#6cb7ff]">{item.step}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-white/70">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
