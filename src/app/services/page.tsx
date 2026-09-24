import { SectionShell } from "@/components/section-shell";
import { processSteps, services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <div className="space-y-14 py-10">
      <SectionShell
        eyebrow="Support"
        title="Product information and direct assistance."
        copy="Reach out for current availability, documentation, order support, or general business inquiries."
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

      <SectionShell eyebrow="Get started" title="Browse, ask, and review.">
        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="glass-card card-panel p-6">
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
