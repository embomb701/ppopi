import { SectionShell } from "@/components/section-shell";

const values = [
  {
    title: "Documentation",
    copy: "Available product and testing information is kept easy to request and review.",
  },
  {
    title: "Direct communication",
    copy: "Questions about products and availability receive straightforward answers.",
  },
  {
    title: "Responsible research",
    copy: "Products are presented for research use only, without medical advice or guaranteed outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="About"
        title="Built different. Better researched."
        copy="The Peptide Papi is a research-focused brand centered on clear information, available documentation, and direct support."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="glass-card card-panel p-6">
              <p className="eyebrow">{item.title}</p>
              <p className="mt-4 text-white/72">{item.copy}</p>
            </article>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
