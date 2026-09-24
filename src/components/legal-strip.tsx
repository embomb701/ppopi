export function LegalStrip() {
  return (
    <section className="legal-strip">
      <div>
        <p className="eyebrow">Important</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Research use only.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass-card p-5 text-white/72">Not intended for human consumption.</div>
        <div className="glass-card p-5 text-white/72">No medical, treatment, or dosing advice.</div>
        <div className="glass-card p-5 text-white/72">No outcomes are promised or guaranteed.</div>
      </div>
    </section>
  );
}
