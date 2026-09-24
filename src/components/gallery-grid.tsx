import Image from "next/image";
import { galleryItems } from "@/lib/site";

export function GalleryGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.src} className="gallery-card">
          <a href={item.src} target="_blank" rel="noreferrer" className="gallery-image-wrap" aria-label={`Open ${item.title}`}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              loading={index < 2 ? "eager" : "lazy"}
              className="gallery-image"
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
