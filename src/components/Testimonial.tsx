"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import Reveal, { staggerContainer } from "./Reveal";

export default function Testimonial() {
  return (
    <section className="bg-white py-20">
      <Reveal className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          className="flex justify-center gap-1 text-accent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.08)}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -30 },
                show: { opacity: 1, scale: 1, rotate: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Star size={20} fill="currentColor" strokeWidth={0} />
            </motion.span>
          ))}
        </motion.div>
        <blockquote className="mt-6 font-display text-xl font-semibold leading-relaxed text-ink md:text-2xl">
          &ldquo;Switching our stock ordering to UK Savers Ltd cut our costs
          and cut our admin. Deliveries are reliable and the range keeps
          growing.&rdquo;
        </blockquote>
        <p className="mt-6 text-sm font-semibold text-ink">
          Independent Retailer
        </p>
        <p className="text-sm text-muted">Trade Partner since 2023</p>
      </Reveal>
    </section>
  );
}
