"use client";

import { motion } from "motion/react";
import CountUp from "./CountUp";
import { staggerContainer, fadeUp } from "./Reveal";

const stats = [
  { value: 1000, suffix: "+", label: "Retailers supplied" },
  { value: 150, suffix: "k+", label: "Monthly orders fulfilled" },
  { value: 30, suffix: "%", label: "Average trade savings" },
  { value: null, display: "1–3 days", label: "Nationwide delivery" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-border bg-white">
      <motion.div
        className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-6 py-10 text-center md:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer(0.12)}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="font-display text-2xl font-extrabold text-ink md:text-3xl">
              {stat.value !== null ? (
                <CountUp value={stat.value} suffix={stat.suffix} />
              ) : (
                stat.display
              )}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
