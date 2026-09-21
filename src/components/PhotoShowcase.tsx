import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  {
    src: "/photos/warehouse.jpg",
    alt: "UK Savers delivery truck being loaded with pallets of Coca-Cola and Red Bull",
    title: "Loaded and out the same day",
    text: "Orders picked, palletised and loaded straight from our warehouse onto the truck.",
  },
  {
    src: "/photos/water.jpg",
    alt: "Pallets of Volvic and Evian bottled water being loaded at the UK Savers warehouse",
    title: "Bottled water by the pallet",
    text: "Moving volume orders for retail, catering and vending customers.",
  },
];

export default function PhotoShowcase() {
  return (
    <section className="bg-bg-soft py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Inside UK Savers
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Real stock, moving every day
          </h2>
          <p className="mt-4 text-muted">
            Straight from our warehouse floor to your shelves.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.1}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1192}
                  height={1400}
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="w-full"
                />
                <figcaption className="p-6">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {photo.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {photo.text}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
