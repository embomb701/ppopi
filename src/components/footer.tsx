import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(3,6,14,0.94)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="eyebrow">Sharper, cleaner, safer</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A stronger site because the visual language and the legal language finally match.</h2>
          <p className="mt-4 max-w-2xl text-white/70">
            This build is intentionally premium and intentionally careful. Before a live launch, swap in the exact business model, real compliance review, and final intake or commerce flow.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass-card p-5">
            <p className="eyebrow">Contact</p>
            <p className="mt-3 text-white/80">{site.phone}</p>
            <p className="text-white/70 break-all">{site.email}</p>
            <p className="text-white/70">{site.instagram}</p>
          </div>
          <div className="glass-card p-5">
            <p className="eyebrow">Important</p>
            <div className="mt-3 grid gap-2 text-white/70">
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
