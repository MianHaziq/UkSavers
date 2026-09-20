"use client";

import { motion } from "motion/react";
import { BadgePoundSterling, Truck, ShieldCheck, Headset } from "lucide-react";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

const features = [
  {
    icon: BadgePoundSterling,
    title: "Competitive Pricing",
    text: "Direct sourcing relationships mean genuine trade savings, passed straight to you.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    text: "Reliable dispatch across the UK, from single cases to full pallet loads.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Sourcing",
    text: "Every brand we stock is sourced from verified, compliant manufacturers and importers.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "A real team on hand to help with orders, stock queries and account setup.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            Why Choose Us
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Built for retailers who want more for less
          </h2>
        </Reveal>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.12)}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={fadeUp} className="text-center">
                <motion.span
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-accent"
                >
                  <Icon size={24} />
                </motion.span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
