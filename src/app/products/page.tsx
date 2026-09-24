import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { productCategories } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Products"
        title="Research product price list."
        copy="Browse current products, strengths, and prices. Availability and pricing may change. Contact us to confirm before ordering."
      >
        <div className="product-notice">
          <strong>Research purposes only.</strong> Products are not for human consumption. No medical, treatment, or dosing advice is provided.
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {productCategories.map((category) => (
            <section key={category.name} className="product-category">
              <div className="product-category-heading">
                <h2>{category.name}</h2>
                <span>{category.products.length} {category.products.length === 1 ? "item" : "items"}</span>
              </div>

              <div className="product-column-labels" aria-hidden="true">
                <span>Product</span>
                <span>Strength</span>
                <span>Price</span>
              </div>

              <div className="divide-y divide-white/10">
                {category.products.map((product, index) => (
                  <div className="product-row" key={`${product.name}-${product.strength}-${index}`}>
                    <div className="product-name">{product.name}</div>
                    <div className="product-strength">
                      <span className="product-mobile-label">Strength</span>
                      {product.strength}
                    </div>
                    <div className="product-price">${product.price}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="cta-band">
          <p className="eyebrow">Questions or availability</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Contact The Peptide Papi.</h2>
          <p className="mt-4 max-w-2xl text-white/70">Send a message about current availability, product documentation, or order support.</p>
          <Link href="/contact" className="cta-button mt-6">Contact us</Link>
        </section>
      </SectionShell>
    </div>
  );
}
