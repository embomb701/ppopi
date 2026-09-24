import { GalleryGrid } from "@/components/gallery-grid";
import { SectionShell } from "@/components/section-shell";

export default function GalleryPage() {
  return (
    <div className="space-y-12 py-10">
      <SectionShell
        eyebrow="Gallery"
        title="The Peptide Papi in pictures."
        copy="Products, documentation, branded gear, and community highlights. Select any image to view it full size."
      >
        <GalleryGrid />
      </SectionShell>
    </div>
  );
}
