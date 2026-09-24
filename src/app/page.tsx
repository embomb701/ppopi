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
        eyebrow="Why this version is better"
        title="It sounds more like the category leaders — without inheriting their riskiest habits."
        copy="The copy now borrows the strongest patterns from premium peptide and wellness brands: confidence, process, and authority. But the site avoids unsupported treatment promises and keeps the legal boundaries easier to see."
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
        eyebrow="Offer architecture"
        title="Designed for the next business model — not trapped in the current one."
        copy="Whether this becomes a consult funnel, a content-led authority brand, or a more structured peptide-adjacent offer later, the design system now has range."
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

      <SectionShell eyebrow="Flow" title="The page now moves like a top-tier funnel.">
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
        title="Placeholder imagery with real visual direction."
        copy="I added a gallery route and a polished placeholder system so this does not feel unfinished while you gather final photography or campaign assets."
      >
        <GalleryGrid />
        <div className="pt-2">
          <Link href="/gallery" className="ghost-button">Open the full gallery page</Link>
        </div>
      </SectionShell>

      <LegalStrip />

      <SectionShell eyebrow="FAQ snapshot" title="Careful answers without weak energy.">
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
        <p className="eyebrow">Next move</p>
        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Now it looks like a serious brand. The next step is deciding whether it becomes consult-led, content-led, or compliance-heavy product-led.</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="cta-button">Keep building</Link>
          <Link href="/disclaimer" className="ghost-button">See disclaimer page</Link>
        </div>
      </section>
    </div>
  );
}
