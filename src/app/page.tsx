import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { LegalStrip } from "@/components/legal-strip";
import { SectionShell } from "@/components/section-shell";
import { faqItems, pillars, processSteps, services } from "@/lib/site";

export default function Home() {
  return (
    <div className="space-y-24">
      <Hero />

      <SectionShell
        eyebrow="What matters"
        title="Clear information. Direct support. Responsible research."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card card-panel p-6">
              <p className="eyebrow">{pillar.title}</p>
              <p className="mt-4 text-white/72">{pillar.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Support"
        title="Get the information you need."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="glass-card card-panel p-6">
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell eyebrow="Get started" title="Three simple steps.">
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

      <SectionShell
        eyebrow="Gallery"
        title="Products, documentation, gear, and community."
      >
        <GalleryGrid limit={6} />
        <div className="pt-2">
          <Link href="/gallery" className="ghost-button">View the full gallery</Link>
        </div>
      </SectionShell>

      <LegalStrip />

      <SectionShell eyebrow="FAQ" title="Common questions.">
        <div className="space-y-4">
          {faqItems.slice(0, 3).map((item) => (
            <details key={item.q} className="glass-card p-6">
              <summary className="cursor-pointer list-none text-xl font-semibold text-white">{item.q}</summary>
              <p className="mt-4 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <section className="cta-band">
        <p className="eyebrow">Questions?</p>
        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Ask about products, documentation, or availability.</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="cta-button">Contact us</Link>
          <Link href="/disclaimer" className="ghost-button">Read the disclaimer</Link>
        </div>
      </section>
    </div>
  );
}
