"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Package } from "lucide-react";
import productsData from "@/data/products.json";

type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  size: string;
  image: string;
};

const products = productsData as Product[];
const categories = [...new Set(products.map((p) => p.category))].sort();

const PAGE_SIZE = 48;

export default function ProductCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="mx-auto max-w-[1180px] px-6 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search by product or brand…"
            aria-label="Search products"
            className="w-full rounded-lg border border-border bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
          />
        </div>

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          aria-label="Filter by category"
          className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-ink outline-none focus:border-accent md:w-64"
        >
          <option value="All">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-6 text-sm text-muted">
        Showing {shown.length} of {filtered.length.toLocaleString("en-GB")}{" "}
        products
      </p>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-border bg-white p-10 text-center">
          <p className="font-display text-lg font-bold text-ink">
            No products matched that search
          </p>
          <p className="mt-2 text-sm text-muted">
            Tell us what you need and we&apos;ll source it for you.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink hover:bg-accent-dark"
          >
            Request a Product
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/products/${p.slug}`}
                className="flex h-full gap-4 rounded-xl border border-border bg-white p-4 transition-shadow hover:shadow-md hover:shadow-ink/5"
              >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-white">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="96px"
                    unoptimized
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-bg-soft text-muted">
                    <Package size={24} />
                  </div>
                )}
              </div>

              <div className="flex min-w-0 flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                  {p.brand}
                </span>
                <span className="mt-1 text-sm font-semibold leading-snug text-ink">
                  {p.name}
                </span>
                <span className="mt-auto flex flex-wrap items-center gap-2 pt-3 text-xs text-muted">
                  <span className="rounded-full bg-bg-soft px-2.5 py-1">
                    {p.category}
                  </span>
                  {p.size && <span>{p.size}</span>}
                </span>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {visible < filtered.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-dark"
          >
            Load more products
          </button>
        </div>
      )}
    </div>
  );
}
