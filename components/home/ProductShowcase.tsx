"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Intelligent connection",
    description:
      "Find relevant professionals based on your skills, interests, education, and experience.",
  },
  {
    number: "02",
    title: "Personalized job matching",
    description:
      "Discover roles matched to your profile, with a clear score showing how well you fit.",
  },
  {
    number: "03",
    title: "Goal-driven analytics",
    description:
      "Track your trajectory and uncover insights to help you reach your professional goals.",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="product"
      className="flex flex-col items-start gap-6 pt-24 md:pt-[100px]"
    >
      {/* Header */}
      <div className="w-full flex flex-col items-center gap-3 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[450px] text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[52px] tracking-[0px] text-ink"
        >
          What We&apos;re building
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[450px] text-sm leading-[18px] text-muted"
        >
          This is our first step toward the future — a professional network
          where people connect, discover opportunities, and grow.
        </motion.p>
      </div>

      {/* Card Panel */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full box-border flex flex-col gap-10 p-6 md:p-12 bg-panel border hairline"
      >
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full flex flex-col gap-4 pb-6 border-b hairline"
        >
          <div className="w-full flex flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg text-xs tracking-wide bg-accent/[0.08] text-accent">
                PRODUCT 01
              </span>
              <span className="text-2xl font-medium text-ink">Cocpit</span>
            </div>
            <button className="px-3 py-1.5 rounded-full bg-accent text-ink text-base font-medium whitespace-nowrap">
              Register now
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-[-0.24px] text-dim">
            <span>VERSION // 1.0</span>
            <span>TYPE // PROFESSIONAL NETWORK</span>
            <span className="flex items-center gap-1.5 text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              ACTIVE RELEASE
            </span>
          </div>
        </motion.div>

        {/* Content: info + mockup */}
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-10">
          {/* Left info column */}
          <div className="w-full max-w-[282.5px] flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full text-base leading-6 font-light tracking-[0px] text-ink"
            >
              A professional network built for meaningful connections and
              opportunities. Discover the right people, build relationships,
              and find new ways to grow — whether you&apos;re building your
              career, your business, or something new.
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
              className="flex flex-col gap-6 pt-6 border-t border-[#2C2C33]"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.number}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                    },
                  }}
                  className="flex items-start gap-3"
                >
                  <span className="text-xs text-accent font-normal leading-[16px]">
                    {feature.number}
                  </span>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium leading-[20px] text-ink">
                      {feature.title}
                    </span>

                    <span className="max-w-[254.5px] text-xs font-normal leading-[16px] tracking-[0px] text-muted">
                      {feature.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right visual mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-[411.5px] lg:h-[407px] flex flex-col gap-[12px] px-[24px] py-[12px] bg-[#030303] border border-[#2C2C33]"
          >
            <div className="w-full flex justify-between items-center gap-1 pb-3 border-b border-[#2C2C33]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                </div>

                <span className="text-[11px] tracking-[-0.24px] text-dim">
                  cocpitconnect.com // cocpit-node
                </span>
              </div>

              <span className="text-[10px] text-accent tracking-[0px]">
                LIVE MESH
              </span>
            </div>

            <div className="relative w-full flex-1 min-h-[310px] flex items-center justify-center overflow-hidden bg-[#070708] border border-[#2C2C33]">
              {/* floating telemetry badge */}
              <div className="absolute left-0 bottom-0 flex items-center px-3 py-1.5 bg-[#030303] border-t border-r border-[#2C2C33]">
                <span className="text-[10px] tracking-[-0.24px] text-dim">
                  STATE // CONNECTED
                </span>

                <span className="pl-3 text-[10px] tracking-[-0.24px] text-accent">
                  BUILDING WHAT&apos;S NEXT
                </span>
              </div>

              {/* static network topology */}
              <svg
                viewBox="0 0 314 272"
                className="w-full h-full p-4 opacity-90"
              >
                <defs>
                  <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="glow-line" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Upper connection line (COCPIT PRODUCTS -> UNIFIED -> COCPIT CONNECT) */}
                <path
                  d="M 52 140 C 75 102, 105 92, 130 92 C 155 92, 168 110, 183 140"
                  stroke="rgba(255,236,230,0.2)"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Lower connection line (COCPIT PRODUCTS -> COCPIT CONNECT) */}
                <path
                  d="M 52 140 C 80 185, 150 185, 183 140"
                  stroke="rgba(255,236,230,0.18)"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Connection line: COCPIT CONNECT -> COCPIT (Glowing Orange Edge) */}
                <path
                  d="M 183 140 C 206 140, 220 105, 246 105"
                  stroke="#EC6229"
                  strokeWidth="2"
                  fill="none"
                  filter="url(#glow-line)"
                />

                {/* Connection line: COCPIT CONNECT -> CYPHEX (Dark Brown Edge) */}
                <path
                  d="M 183 140 C 206 140, 220 170, 246 170"
                  stroke="#422114"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* UNIFIED Badge */}
                <rect
                  x="116"
                  y="85"
                  width="28"
                  height="13"
                  rx="1.5"
                  fill="#070708"
                  stroke="rgba(255,236,230,0.2)"
                  strokeWidth="0.8"
                />
                <text
                  x="130"
                  y="94"
                  fill="#FFECE6"
                  fontSize="5"
                  textAnchor="middle"
                  letterSpacing="0.5px"
                >
                  UNIFIED
                </text>

                {/* Node 1: COCPIT PRODUCTS */}
                <circle
                  cx="52"
                  cy="140"
                  r="9"
                  fill="#14161B"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
                <circle
                  cx="52"
                  cy="140"
                  r="3"
                  fill="#FFECE6"
                />
                <text
                  x="52"
                  y="160"
                  fill="#B8ADA8"
                  fontSize="6"
                  textAnchor="middle"
                >
                  <tspan x="52" dy="0">COCPIT</tspan>
                  <tspan x="52" dy="7">PRODUCTS</tspan>
                </text>

                {/* Center Node: COCPIT CONNECT */}
                <circle
                  cx="183"
                  cy="140"
                  r="13"
                  fill="none"
                  stroke="#EC6229"
                  strokeWidth="1.5"
                  filter="url(#glow-soft)"
                />
                <circle
                  cx="183"
                  cy="140"
                  r="9"
                  fill="none"
                  stroke="#EC6229"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle
                  cx="183"
                  cy="140"
                  r="5"
                  fill="#EC6229"
                />
                <text
                  x="183"
                  y="162"
                  fill="#FFECE6"
                  fontSize="6"
                  textAnchor="middle"
                >
                  <tspan x="183" dy="0">COCPIT</tspan>
                  <tspan x="183" dy="7">CONNECT</tspan>
                </text>

                {/* Target Node: COCPIT */}
                <circle
                  cx="246"
                  cy="105"
                  r="9"
                  fill="#070708"
                  stroke="#EC6229"
                  strokeWidth="1.5"
                  filter="url(#glow-soft)"
                />
                <circle
                  cx="246"
                  cy="105"
                  r="3"
                  fill="#EC6229"
                />
                <text
                  x="260"
                  y="107"
                  fill="#FFECE6"
                  fontSize="6"
                  fontWeight="500"
                >
                  COCPIT
                </text>

                {/* Target Node: CYPHEX */}
                <circle
                  cx="246"
                  cy="170"
                  r="9"
                  fill="#14161B"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />
                <circle
                  cx="246"
                  cy="170"
                  r="1.5"
                  fill="#B8ADA8"
                />
                <text
                  x="260"
                  y="172"
                  fill="#8E8E93"
                  fontSize="6"
                  fontWeight="500"
                >
                  CYPHEX
                </text>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
