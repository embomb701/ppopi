import { ReactNode } from "react";

export function SectionShell({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy?: string; children: ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
        {copy ? <p className="mt-4 text-lg text-white/70">{copy}</p> : null}
      </div>
      {children}
    </section>
  );
}
