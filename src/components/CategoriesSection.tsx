"use client";

import { motion } from "motion/react";
import {
  Cookie,
  SprayCan,
  HeartPulse,
  Home,
  Gift,
  Beef,
} from "lucide-react";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

const categories = [
  {
    icon: Cookie,
    title: "Confectionery & Snacks",
    text: "Best-selling sweets, crisps and treats from trusted UK, US and European brands.",
  },
  {
    icon: Beef,
    title: "Food & Drink",
    text: "Everyday groceries, soft drinks and speciality food ranges for retail and catering.",
  },
  {
    icon: Home,
    title: "Household Essentials",
    text: "Cleaning, paper and kitchen essentials that keep shelves stocked all year round.",
  },
  {
    icon: SprayCan,
    title: "Cleaning Supplies",
    text: "Trusted cleaning and hygiene brands at competitive trade pricing.",
  },
  {
    icon: HeartPulse,
    title: "Health & Beauty",
    text: "Personal care, wellness and beauty lines sourced from reliable manufacturers.",
  },
  {
    icon: Gift,
    title: "Lifestyle & Gifts",
    text: "Seasonal, gifting and lifestyle products to help retailers stand out.",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="border-t border-border bg-bg-soft py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            What We Sell
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Everyday brands, sourced at wholesale value
          </h2>
          <p className="mt-4 text-muted">
            A growing catalogue built around the categories independent
            retailers rely on most.
          </p>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.1)}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent-dark transition-colors group-hover:bg-ink group-hover:text-accent">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {category.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
