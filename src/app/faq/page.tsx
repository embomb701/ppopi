import { SectionShell } from "@/components/section-shell";
import { faqItems } from "@/lib/site";

export default function FaqPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="FAQ"
        title="Clear answers before the next decision."
        copy="This page explains why the wording is tighter, why the disclaimer is more prominent, and how the site can branch later without tearing down the design system."
      >
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.q} className="glass-card p-6">
              <summary className="cursor-pointer list-none text-xl font-semibold text-white">{item.q}</summary>
              <p className="mt-4 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
