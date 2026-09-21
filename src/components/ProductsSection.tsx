"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageSquareText } from "lucide-react";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

const products = [
  {
    name: "Red Bull Energy Drink",
    tag: "Energy drinks",
    text: "Available by the case or full pallet.",
    image: "/products/redbull.jpg",
  },
  {
    name: "Coca-Cola",
    tag: "Soft drinks",
    text: "2L bottles and multipacks, by the case or pallet.",
    image: "/products/cola.jpg",
  },
  {
    name: "Volvic Natural Mineral Water",
    tag: "Bottled water",
    text: "1.5L cases, for retail, catering and vending.",
    image: "/products/volvic.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Featured Products
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            A sample of what we move every week
          </h2>
          <p className="mt-4 text-muted">
            Real brands, straight from our warehouse floor to your shelves.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent-dark"
          >
            Browse our product range
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-lg hover:shadow-ink/5"
            >
              <div className="relative aspect-square w-full bg-bg-soft">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
                  {product.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {product.text}
                </p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark hover:text-ink"
                >
                  Request a quote
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-bg-soft p-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-accent sm:flex">
                <MessageSquareText size={22} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink">
                  Can&apos;t see what you need?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Tell us the product and we&apos;ll source it for you at the
                  best price.
                </p>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto"
            >
              Request a Product
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
