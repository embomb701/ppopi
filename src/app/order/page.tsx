import { OrderBuilder } from "@/components/order-builder";
import { SectionShell } from "@/components/section-shell";
import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Order"
        title="Build your order request."
        copy="Choose your products and quantities to see an estimated total. Submit your details and The Peptide Papi will contact you ASAP to confirm availability, arrange payment, and finalize the order."
      >
        <OrderBuilder />

        <p className="text-sm text-white/60 mt-4">
          Primary information sources for each compound (ClinicalTrials.gov, manufacturer pages, PubMed, DailyMed/FDA labels) are listed on the <Link href="/products" className="underline">Products page</Link>. These are for educational and reference purposes only and do not imply approval or endorsement.
        </p>
      </SectionShell>
    </div>
  );
}
