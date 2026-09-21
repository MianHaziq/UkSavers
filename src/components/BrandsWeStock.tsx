import Reveal from "./Reveal";

const rowOne = [
  "Coca-Cola",
  "Red Bull",
  "Fanta",
  "Lipton",
  "Ribena",
  "Volvic",
  "Evian",
  "Highland Spring",
  "Monster",
  "Gatorade",
  "Heineken",
  "Smirnoff",
  "Stella Artois",
  "Oreo",
  "Skittles",
  "Wrigley's",
  "Mike & Ike",
  "Airhead",
];

const rowTwo = [
  "Kelloggs",
  "Dove",
  "Tide",
  "Nestle",
  "Hershey's",
  "Mentos",
  "Tic Tac",
  "Pringles",
  "Persil",
  "Fairy",
  "Dettol",
  "Domestos",
  "Vanish",
  "Harpic",
  "Cif",
  "Nivea",
  "Colgate",
  "Gillette",
  "Vaseline",
  "Head & Shoulders",
  "Calpol",
  "Nurofen",
  "Andrex",
  "Kleenex",
  "Huggies",
  "Pampers",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-bg-soft px-5 py-2.5 text-sm font-semibold text-ink"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandsWeStock() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Brands We Stock
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Trusted global and UK brands, always in stock
          </h2>
          <p className="mt-4 text-muted">
            A sample of the household names we regularly source and supply
            to our trade partners.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10 flex flex-col gap-4">
        <MarqueeRow items={rowOne} />
        <MarqueeRow items={rowTwo} reverse />
      </Reveal>
    </section>
  );
}
