import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export const metadata: Metadata = {
  title: "Message Sent | The Peptide Papi",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="py-16">
      <SectionShell
        eyebrow="Message sent"
        title="Thank you for reaching out."
        copy="Your message was received. The Peptide Papi will respond as soon as possible."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="cta-button">Return home</Link>
          <Link href="/gallery" className="ghost-button">View the gallery</Link>
        </div>
      </SectionShell>
    </div>
  );
}
