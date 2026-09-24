import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(3,6,14,0.94)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="eyebrow">The Peptide Papi</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Built different. Better researched.</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            Research-focused products, available documentation, and direct support.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass-card p-5">
            <p className="eyebrow">Contact</p>
            <Link href="/contact" className="mt-3 block font-semibold text-white">Send a message</Link>
            <p className="mt-2 text-white/70">{site.instagram}</p>
          </div>
          <div className="glass-card p-5">
            <p className="eyebrow">Explore</p>
            <div className="mt-3 grid gap-2 text-white/70">
              <Link href="/products">Products</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
