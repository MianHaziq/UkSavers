import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata: Metadata = {
  title: "Product Catalogue | UK Savers Ltd",
  description:
    "Browse the UK Savers Ltd wholesale catalogue — food, drinks, confectionery, household, cleaning, health and beauty brands supplied across the UK.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <section className="bg-ink py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent">
              Our Catalogue
            </span>
            <h1 className="mt-2 font-display text-4xl font-extrabold text-white md:text-5xl">
              What we supply
            </h1>
            <p className="mt-4 text-white/70">
              A selection of the food, drinks, confectionery, household,
              cleaning and health &amp; beauty lines we stock. Not listed? Ask
              us and we&apos;ll source it.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-dark"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <ProductCatalog />
      </main>
      <Footer />
    </div>
  );
}
