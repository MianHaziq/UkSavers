"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { staggerContainer, fadeUp } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.12),transparent_50%)]"
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-14 md:py-20">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80"
          >
            <Star size={14} className="text-accent" />
            Trusted UK Wholesale Partner
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl"
          >
            Genuine Brands. <span className="text-accent">Wholesale Prices.</span>{" "}
            Delivered Across the UK.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/75 md:mx-0 md:text-lg"
          >
            UK Savers sources and supplies food, household, health and
            lifestyle brands at prices built for independent retailers,
            cash &amp; carries and online sellers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start"
          >
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto"
            >
              Become a Trade Partner
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              View Products
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
        >
          <Image
            src="/photos/warehouse.jpg"
            alt="UK Savers delivery truck being loaded with pallets of Coca-Cola and Red Bull"
            width={1192}
            height={1400}
            priority
            sizes="(max-width: 768px) 100vw, 560px"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
