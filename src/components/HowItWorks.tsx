"use client";

import { motion } from "motion/react";
import Reveal, { fadeUp, staggerContainer } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Register Your Business",
    text: "Sign up as a trade partner in minutes and get access to full pricing.",
  },
  {
    number: "02",
    title: "Browse & Order",
    text: "Explore our catalogue and place orders online or through your account manager.",
  },
  {
    number: "03",
    title: "Fast UK-Wide Delivery",
    text: "We pick, pack and dispatch quickly, with tracking on every order.",
  },
];

export default function HowItWorks() {
  return (
    <section id="about-us" className="bg-bg-soft py-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            How It Works
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Getting started is simple
          </h2>
        </Reveal>

        <motion.div
          className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.15)}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-border bg-white p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-light font-display text-sm font-extrabold text-accent-dark">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
