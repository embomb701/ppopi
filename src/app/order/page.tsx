import { OrderBuilder } from "@/components/order-builder";
import { SectionShell } from "@/components/section-shell";

export default function OrderPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Order"
        title="Build your order request."
        copy="Choose your products and quantities to see an estimated total. Submit your details and The Peptide Papi will contact you ASAP to confirm availability, arrange payment, and finalize the order."
      >
        <OrderBuilder />
      </SectionShell>
    </div>
  );
}
