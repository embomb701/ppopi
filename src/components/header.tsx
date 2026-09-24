"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(3,6,14,0.74)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="brand-pill">
          <Image src="/logo.jpg" alt="The Peptide Papi logo" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#6cb7ff]">Elite concept build</p>
            <p className="text-sm font-medium text-white">{site.name}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`nav-pill ${active ? "nav-pill-active" : ""}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="cta-button">Start here</Link>
      </div>

      <div className="border-t border-white/5 px-4 py-3 lg:hidden">
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-pill whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
