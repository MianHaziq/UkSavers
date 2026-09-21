"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-ink py-20">
      <Reveal className="relative mx-auto max-w-[1180px] overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-soft px-8 py-14 text-center">
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_45%)]"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
            Ready to start saving on wholesale?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Get in touch to set up a trade account and receive our
            latest wholesale pricing.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:info@uksaversltd.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-accent-dark sm:w-auto"
            >
              Register as a Trade Partner
              <ArrowRight size={16} />
            </Link>
            <Link
              href="tel:+442030001234"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Call Our Team
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
