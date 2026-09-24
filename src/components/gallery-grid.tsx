import { galleryItems } from "@/lib/site";

export function GalleryGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {galleryItems.map((item, index) => (
        <article key={item.title} className="gallery-card">
          <div className={`placeholder-art placeholder-${(index % 6) + 1}`}>
            <span className="placeholder-kicker">{item.tag}</span>
            <div className="placeholder-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="p-6">
            <p className="eyebrow">{item.subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-white/70">{item.copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
