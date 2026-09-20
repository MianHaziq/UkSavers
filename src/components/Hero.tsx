"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import HeroGraphic from "./HeroGraphic";
import { staggerContainer, fadeUp } from "./Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.16),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.06),transparent_40%)]"
      />

      <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
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
            Genuine Brands.{" "}
            <span className="text-accent">Wholesale Prices.</span>{" "}
            Delivered Nationwide.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70 md:mx-0 md:text-lg"
          >
            UK Savers Ltd sources and supplies food, household, health and
            lifestyle brands at prices built for independent retailers,
            cash & carries and online sellers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto"
            >
              Become a Trade Partner
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60 md:justify-start"
          >
            <ShieldCheck size={18} className="text-accent" />
            Verified supplier &middot; No minimum order for registered traders
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <HeroGraphic />
        </motion.div>
      </div>
    </section>
  );
}
