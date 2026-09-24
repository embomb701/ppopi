import { SectionShell } from "@/components/section-shell";

export default function AboutPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="About"
        title="The logo already knew what the site wanted to be."
        copy="Crown, chrome initials, DNA, molecule iconography, syringe cue, cobalt glow — the uploaded mark was already pointing toward an expensive, performance-coded, science-adjacent identity. This redesign finally follows through on that language."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Visual authority",
              copy: "Black-glass surfaces, moving highlights, and metallic contrast give the site more confidence before the visitor even reads the copy.",
            },
            {
              title: "Sharper voice",
              copy: "The words now feel less vague and more intentional: strong enough to carry status, careful enough not to trip obvious compliance problems.",
            },
            {
              title: "Future-proofed",
              copy: "This system can grow into applications, booking flows, gated content, or commerce once the exact model is chosen and reviewed properly.",
            },
          ].map((item) => (
            <article key={item.title} className="glass-card p-6">
              <p className="eyebrow">{item.title}</p>
              <p className="mt-4 text-white/72">{item.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
