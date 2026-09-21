"use client";

import { motion } from "framer-motion";

export default function MetricsSection() {
  return (
    <section className="flex flex-col items-start gap-6 pt-24 md:pt-[100px] pb-16 border-b hairline-7">
      <div className="w-full flex flex-col items-center gap-3 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-[48px] leading-[1.1] md:leading-[52px] font-medium text-ink"
        >
          We&apos;re just getting started.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[490px] text-sm leading-[18px] text-muted"
        >
          As a new technology company, we&apos;re building our first
          professional networking product and growing with the people who use
          it.
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {/* Metric 01: Private Cohort */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="box-border flex flex-col justify-between gap-[8px] p-[32px] min-h-[226px] bg-[#030303] border border-[#2C2C33] w-full"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-dim">
              Product // Live
            </span>
            <span className="text-4xl md:text-[48px] leading-[52px] font-medium text-ink">
              01
            </span>
            <span className="text-xs uppercase tracking-wide text-accent">
              Product in market
            </span>
            <p className="text-xs leading-4 text-muted py-2">
              Our first professional networking platform is now live.
            </p>
          </div>
          <div className="relative w-full h-1 bg-white/[0.06] mt-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "96%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-accent"
            />
          </div>
        </motion.div>

        {/* Metric 03: Public Expansion State */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="box-border flex flex-col justify-between gap-[8px] p-[32px] min-h-[226px] bg-[#030303] border border-dashed border-[#2C2C33] w-full"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-accent">
              Next // In motion
            </span>
            <span className="pt-4 text-2xl font-medium text-ink">
              More to come
            </span>
            <p className="text-xs leading-4 text-muted">
              New products and ideas are taking shape at Cocpit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
