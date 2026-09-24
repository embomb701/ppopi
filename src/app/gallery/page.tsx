import { GalleryGrid } from "@/components/gallery-grid";
import { SectionShell } from "@/components/section-shell";

export default function GalleryPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Gallery"
        title="Placeholder assets with a premium visual brief built in."
        copy="These placeholders are not filler blocks. They are art-directed slots for the exact style of assets this brand wants: chrome, shadow, blue edge light, premium texture, and controlled performance energy."
      >
        <GalleryGrid />
      </SectionShell>
    </div>
  );
}
