import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Package, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productsData from "@/data/products.json";

type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  size: string;
  image: string;
  ean: string;
  origin: string;
  packSize: string;
  casesPerLayer: string;
  layersPerPallet: string;
  uom: string;
};

const products = productsData as Product[];

const COUNTRIES: Record<string, string> = {
  UK: "United Kingdom",
  GB: "United Kingdom",
  USA: "United States",
  US: "United States",
  CA: "Canada",
  PL: "Poland",
  DE: "Germany",
  NL: "Netherlands",
  IE: "Ireland",
  FR: "France",
  BE: "Belgium",
  IT: "Italy",
  ES: "Spain",
  CN: "China",
  IL: "Israel",
  RO: "Romania",
  TR: "Turkey",
  AT: "Austria",
  CZ: "Czechia",
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found | UK Savers Ltd" };
  return {
    title: `${product.name} | UK Savers Ltd`,
    description: `${product.name} by ${product.brand} — available wholesale from UK Savers Ltd. Request trade pricing.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const specs = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "Size", value: product.size },
    { label: "Sold as", value: product.uom },
    { label: "Units per case", value: product.packSize },
    { label: "Cases per layer", value: product.casesPerLayer },
    { label: "Layers per pallet", value: product.layersPerPallet },
    { label: "Origin", value: COUNTRIES[product.origin] || product.origin },
    { label: "EAN", value: product.ean },
  ].filter((s) => s.value);

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        (p.brand === product.brand || p.category === product.category)
    )
    .slice(0, 4);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col bg-bg-soft">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm text-muted"
          >
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/products" className="hover:text-ink">
              Products
            </Link>
            <ChevronRight size={14} />
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl border border-border bg-white p-10">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  unoptimized
                  priority
                  className="h-auto w-full max-w-[320px] object-contain"
                />
              ) : (
                <div className="flex h-64 w-full items-center justify-center text-muted">
                  <Package size={56} />
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-semibold text-accent-dark">
                  {product.brand}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-muted ring-1 ring-border">
                  {product.category}
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-muted">
                Available wholesale by the case or full pallet. Get in touch for
                current trade pricing and availability.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
                >
                  Request a Quote
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-dark"
                >
                  <ArrowLeft size={16} />
                  Back to products
                </Link>
              </div>

              <dl className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between gap-4 px-5 py-3 text-sm ${
                      i % 2 ? "bg-bg-soft" : "bg-white"
                    }`}
                  >
                    <dt className="text-muted">{spec.label}</dt>
                    <dd className="text-right font-semibold text-ink">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display text-2xl font-extrabold text-ink">
                Related products
              </h2>
              <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="flex h-full flex-col rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-md hover:shadow-ink/5"
                    >
                      <div className="relative mx-auto h-28 w-28">
                        {p.image ? (
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="112px"
                            unoptimized
                            className="object-contain"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-muted">
                            <Package size={28} />
                          </div>
                        )}
                      </div>
                      <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent-dark">
                        {p.brand}
                      </span>
                      <span className="mt-1 text-sm font-semibold leading-snug text-ink">
                        {p.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
