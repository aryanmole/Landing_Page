"use client";

import { motion } from "framer-motion";

const footnotes = [
  { eyebrow: "01 / company", label: "Future-focused technology" },
  { eyebrow: "02 / first product", label: "Connect. Discover. Grow." },
  { eyebrow: "03 / approach", label: "Curiosity in action" },
];

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[832px] min-h-[180px] flex items-center justify-center"
      >
        <h1
          className="w-full text-center text-[44px] sm:text-[64px] md:text-[90px] leading-[52px] sm:leading-[72px] md:leading-[90px] font-medium tracking-[-1.2px] md:tracking-[-2.4px] text-ink font-sans align-middle"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: "90px",
            lineHeight: "90px",
            letterSpacing: "-2.4px",
            color: "#FFECE6",
            textAlign: "center",
          }}
        >
          Be curious about{" "}
          <br className="hidden sm:block" />
          <span
            className="font-sans font-light italic align-middle"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "90px",
              lineHeight: "90px",
              letterSpacing: "-2.4px",
              color: "#FFECE6",
            }}
          >
            what&apos;s possible.
          </span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full text-center text-lg md:text-xl leading-7 font-light text-muted max-w-[720px]"
      >
        We question what exists and explore new possibilities,
        <br />
        building technology for what comes next.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.25,
            },
          },
        }}
        className="w-full max-w-[832px] pt-[40px] border-t border-[#2C2C33] flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6"
      >
        {footnotes.map((item) => (
          <motion.div
            key={item.eyebrow}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            className="flex-1 flex flex-col items-center text-center gap-1"
          >
            <span className="text-xs font-normal uppercase leading-[16px] text-ink">
              {item.eyebrow}
            </span>
            <span className="text-xs font-normal leading-[16px] text-muted">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
