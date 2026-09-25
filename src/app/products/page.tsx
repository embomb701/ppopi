import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { productCategories, compoundSources } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Products"
        title="Research product catalog."
        copy="Each card includes additional research context (mechanisms and pathways studied). Browse current products, strengths, and prices. All materials are for laboratory and scientific research purposes only. Click any product name or the Research Info link for the primary source explanations."
      >
        <div className="product-notice mb-8">
          <strong>Research purposes only.</strong> Not for human consumption. No medical, therapeutic, or dosing advice is given or implied.
        </div>

        {productCategories.map((category) => (
          <section key={category.name} className="product-category mb-10">
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">{category.name}</h2>
              <span className="text-sm text-white/50">{category.products.length} items</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.products.map((product, index) => {
                const source = compoundSources[product.name];
                const desc = product.description || "Research compound. See primary sources for details.";
                return (
                  <div key={`${product.name}-${product.strength}-${index}`} className="product-card group border border-white/10 rounded-xl p-5 bg-white/[0.015] hover:bg-white/[0.03] transition flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        {source ? (
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="product-name-link text-lg font-semibold leading-tight hover:underline"
                          >
                            {product.name}
                          </a>
                        ) : (
                          <span className="product-name text-lg font-semibold">{product.name}</span>
                        )}
                        <span className="product-strength-badge text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/70 whitespace-nowrap self-start mt-1">
                          {product.strength}
                        </span>
                      </div>

                      <p className="product-description mt-3 text-sm text-white/70 leading-relaxed">
                        {desc}
                      </p>
                      {product.plainDescription && (
                        <p className="plain-desc mt-2 text-xs text-white/60 leading-snug">
                          In simpler terms: {product.plainDescription}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                      <div>
                        <span className="text-2xl font-semibold tabular-nums">${product.price}</span>
                      </div>

                      {source && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="research-info-btn inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 transition"
                        >
                          Research Info →
                        </a>
                      )}
                    </div>

                    {source?.note && (
                      <p className="mt-2 text-[10px] text-white/50">
                        {source.note}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        <div className="cta-band mt-12 text-center">
          <p className="eyebrow">Ready to request?</p>
          <h3 className="mt-2 text-2xl font-semibold">Build your order or contact us</h3>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/order" className="cta-button">Start order builder</Link>
            <Link href="/contact" className="ghost-button">Contact us</Link>
          </div>
          <p className="mt-4 text-xs text-white/50 max-w-md mx-auto">
            The order form calculates shipping ($25 under $200, free $200+) and emails a request. You will be contacted to arrange payment and fulfillment.
          </p>
        </div>
      </SectionShell>
    </div>
  );
}
