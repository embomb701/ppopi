import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";

export const metadata: Metadata = {
  title: "Order Request Received | The Peptide Papi",
  robots: { index: false, follow: false },
};

export default function OrderReceivedPage() {
  return (
    <div className="py-16">
      <SectionShell
        eyebrow="Order request received"
        title="Thank you. We’ll be in touch ASAP."
        copy="Your order request has been sent to The Peptide Papi. We will confirm availability, arrange payment using your preferred method, and send an order confirmation after payment is completed. Tracking information will follow when your order ships."
      >
        <div className="order-notice">
          <div>
            <p className="eyebrow">What happens next</p>
            <p className="mt-2 text-white/75">Watch for an email, text, or phone call based on the contact preference you selected.</p>
          </div>
          <div>
            <p className="eyebrow">Important</p>
            <p className="mt-2 text-white/75">Never send passwords, card details, Bitcoin seed phrases, or private keys by email or text.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/" className="cta-button">Return home</Link>
          <Link href="/products" className="ghost-button">View products</Link>
        </div>
      </SectionShell>
    </div>
  );
}
