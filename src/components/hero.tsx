import Image from "next/image";
import Link from "next/link";
import { heroMetrics } from "@/lib/site";

export function Hero() {
  return (
    <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
      <div>
        <div className="hero-chip-wrap">
          <span className="hero-chip">Science-minded positioning</span>
          <span className="hero-chip">Luxury performance aesthetic</span>
        </div>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
          The site now looks <span className="chrome-text">expensive</span>, moves like a premium funnel, and speaks with more discipline.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
          Inspired by the strongest peptide-brand patterns — bold authority up front, careful medical boundaries underneath, and visual polish that feels black-card premium instead of generic wellness-template.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/gallery" className="cta-button">See the gallery</Link>
          <Link href="/disclaimer" className="ghost-button">Review the disclaimers</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="metric-label">{metric.label}</p>
              <p className="metric-value">{metric.value}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[44rem]">
        <div className="hero-core-glow" />
        <div className="logo-frame hero-frame">
          <Image src="/logo.jpg" alt="The Peptide Papi logo" width={1200} height={1200} className="h-auto w-full rounded-[2rem] object-cover" priority />
          <div className="frame-badge frame-badge-top">Science</div>
          <div className="frame-badge frame-badge-right">Precision</div>
          <div className="frame-badge frame-badge-bottom">Transformation</div>
        </div>
      </div>
    </section>
  );
}
