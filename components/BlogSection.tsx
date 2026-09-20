"use client";

import { motion } from "framer-motion";

const posts = [
  {
    tag: "ARTICLE",
    title: "Why the Next Generation of Technology Won't Come from SaaS",
    excerpt: "On escaping incremental optimization loops and designing computing",
    date: "Oct 2026",
  },
  {
    tag: "SOCIAL",
    title: "What we're building next",
    excerpt: "An update from the Cocpit team",
    date: "Sept 2026",
  },
  {
    tag: "VIDEO",
    title: "Building the Next Generation",
    excerpt: "On escaping incremental optimization loops and designing computing",
    date: "Mar 2026",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full flex flex-col items-center gap-10 pt-24 md:pt-[100px] pb-16">
      <div className="w-full flex flex-col items-center gap-1 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-4xl md:text-[48px] leading-[1.1] md:leading-[52px] font-medium text-ink"
        >
          What&apos;s Happening at Cocpit
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[490px] text-sm leading-[18px] text-muted"
        >
          News, product updates, and insights from our technology team.
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-10 md:py-12 border-t border-b border-[#2C2C33]"
      >
        {posts.map((post) => (
          <motion.a
            key={post.title}
            href="#"
            variants={{
              hidden: { opacity: 0, y: 25, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
              },
            }}
            className="group flex flex-col gap-1 py-2"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] tracking-[1.5px] uppercase text-[#7A7270]">
                {post.tag}
              </span>
              <h3 className="text-[24px] leading-[28px] font-medium tracking-[0px] text-ink group-hover:text-accent transition-colors truncate">
                {post.title}
              </h3>
              <p className="text-xs text-[#B8ADA8] truncate leading-5">
                {post.excerpt}
              </p>
            </div>

            <div className="flex justify-between items-center pt-1">
              <span className="text-xs  text-[#B8ADA8] ">{post.date}</span>
              <svg
                className="w-4 h-4 stroke-[#7A7270] group-hover:stroke-ink transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
