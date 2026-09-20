"use client";

import { motion } from "motion/react";
import { PackageCheck, TrendingDown, Truck } from "lucide-react";

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-2xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="rounded-3xl border border-white/10 bg-navy-soft p-6 shadow-2xl shadow-black/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white/70">
            This month
          </span>
          <motion.span
            className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Live stock
          </motion.span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            "bg-accent/90",
            "bg-white/15",
            "bg-white/10",
            "bg-white/10",
            "bg-accent/60",
            "bg-white/15",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`aspect-square rounded-xl ${cls}`}
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
          <div>
            <p className="text-xs text-white/60">Avg. trade savings</p>
            <p className="font-display text-xl font-bold text-white">
              Up to 30%
            </p>
          </div>
          <TrendingDown className="text-accent" size={28} />
        </div>
      </div>

      <motion.div
        className="absolute -left-8 top-8 hidden w-48 rounded-2xl border border-border bg-white p-4 shadow-xl shadow-black/10 sm:block"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [16, 0, 0, -8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          y: {
            duration: 5,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.15, 0.5, 0.75, 1],
          },
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent-dark">
            <PackageCheck size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Order dispatched</p>
            <p className="text-xs text-muted">Pallet #4821</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -right-4 hidden w-52 rounded-2xl border border-border bg-white p-4 shadow-xl shadow-black/10 sm:block"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: [-16, 0, 0, 8, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          y: {
            duration: 6,
            delay: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.15, 0.5, 0.75, 1],
          },
        }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-accent">
            <Truck size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">Nationwide delivery</p>
            <p className="text-xs text-muted">1–3 working days</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
