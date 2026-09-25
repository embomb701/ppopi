import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(3,6,14,0.94)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">The Peptide Papi</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Built different. Better researched.</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Research-focused products, available documentation, and direct support.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Explore</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/70 sm:grid-cols-3">
              <Link href="/products">Products</Link>
              <Link href="/order">Order</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          More projects at <a 
            href="https://quickdrawsites.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-white/70"
          >
            quickdrawsites.com
          </a>
        </div>
      </div>
    </footer>
  );
}
