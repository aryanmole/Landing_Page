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
                  STATE // LIVE
                </span>

                <span className="pl-3 text-[10px] tracking-[-0.24px] text-accent">
                  BUILDING WHAT&apos;S NEXT
                </span>
              </div>

              {/* simplified network topology */}
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

                  <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <style>{`
                  .animate-connect-aura {
                    animation: auraPulse 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: 183px 140px;
                  }
                  @keyframes auraPulse {
                    0% {
                      opacity: 0.05;
                      transform: scale(0.6);
                    }
                    15% {
                      opacity: 0.6;
                      transform: scale(1.35);
                    }
                    30%, 90% {
                      opacity: 0.35;
                      transform: scale(1.1);
                    }
                    96%, 100% {
                      opacity: 0.05;
                      transform: scale(0.6);
                    }
                  }

                  .animate-connect-core {
                    animation: corePulse 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: 183px 140px;
                  }
                  @keyframes corePulse {
                    0% {
                      transform: scale(0.9);
                      fill-opacity: 0.7;
                    }
                    15%, 25% {
                      transform: scale(1.25);
                      fill-opacity: 1;
                    }
                    35%, 90% {
                      transform: scale(1);
                      fill-opacity: 0.95;
                    }
                    96%, 100% {
                      transform: scale(0.9);
                      fill-opacity: 0.7;
                    }
                  }

                  .animate-connect-ring {
                    animation: ringRotate 5s linear infinite;
                    transform-origin: 183px 140px;
                  }
                  @keyframes ringRotate {
                    0% {
                      transform: rotate(0deg);
                      stroke-opacity: 0.5;
                    }
                    20%, 90% {
                      stroke-opacity: 1;
                    }
                    100% {
                      transform: rotate(360deg);
                      stroke-opacity: 0.5;
                    }
                  }

                  .animate-cocpit-line, .animate-cocpit-flow {
                    stroke-dasharray: 98;
                    stroke-dashoffset: 98;
                    animation: flowToCocpit 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
                  }
                  @keyframes flowToCocpit {
                    0%, 20% {
                      stroke-dashoffset: 98;
                      opacity: 0;
                    }
                    21% {
                      opacity: 1;
                    }
                    40%, 90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }
                    96%, 100% {
                      stroke-dashoffset: 98;
                      opacity: 0;
                    }
                  }

                  .animate-cocpit-signal {
                    offset-path: path("M 183 140 C 205 118, 234 127, 256 105");
                    animation: signalToCocpit 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
                  }
                  @keyframes signalToCocpit {
                    0%, 20% {
                      offset-distance: 0%;
                      opacity: 0;
                    }
                    21% {
                      opacity: 1;
                    }
                    39.5% {
                      offset-distance: 100%;
                      opacity: 1;
                    }
                    40%, 100% {
                      offset-distance: 100%;
                      opacity: 0;
                    }
                  }

                  .animate-cocpit-glow {
                    animation: cocpitGlow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: 256px 105px;
                  }
                  @keyframes cocpitGlow {
                    0%, 38% {
                      opacity: 0;
                      transform: scale(0.5);
                    }
                    42% {
                      opacity: 0.75;
                      transform: scale(1.4);
                    }
                    50%, 90% {
                      opacity: 0.35;
                      transform: scale(1);
                    }
                    96%, 100% {
                      opacity: 0;
                      transform: scale(0.5);
                    }
                  }

                  .animate-cocpit-node {
                    animation: cocpitNode 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                  @keyframes cocpitNode {
                    0%, 38% {
                      r: 3px;
                    }
                    40% {
                      r: 4px;
                    }
                    45%, 90% {
                      r: 3px;
                    }
                    96%, 100% {
                      r: 3px;
                    }
                  }

                  .animate-cyphex-line, .animate-cyphex-flow {
                    stroke-dasharray: 98;
                    stroke-dashoffset: 98;
                    animation: flowToCyphex 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
                  }
                  @keyframes flowToCyphex {
                    0%, 40% {
                      stroke-dashoffset: 98;
                      opacity: 0;
                    }
                    41% {
                      opacity: 1;
                    }
                    60%, 90% {
                      stroke-dashoffset: 0;
                      opacity: 1;
                    }
                    96%, 100% {
                      stroke-dashoffset: 98;
                      opacity: 0;
                    }
                  }

                  .animate-cyphex-signal {
                    offset-path: path("M 183 140 C 205 162, 234 153, 256 170");
                    animation: signalToCyphex 5s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
                  }
                  @keyframes signalToCyphex {
                    0%, 40% {
                      offset-distance: 0%;
                      opacity: 0;
                    }
                    41% {
                      opacity: 1;
                    }
                    59.5% {
                      offset-distance: 100%;
                      opacity: 1;
                    }
                    60%, 100% {
                      offset-distance: 100%;
                      opacity: 0;
                    }
                  }

                  .animate-cyphex-glow {
                    animation: cyphexGlow 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: 256px 170px;
                  }
                  @keyframes cyphexGlow {
                    0%, 58% {
                      opacity: 0;
                      transform: scale(0.5);
                    }
                    62% {
                      opacity: 0.75;
                      transform: scale(1.4);
                    }
                    70%, 90% {
                      opacity: 0.35;
                      transform: scale(1);
                    }
                    96%, 100% {
                      opacity: 0;
                      transform: scale(0.5);
                    }
                  }

                  .animate-cyphex-node {
                    animation: cyphexNode 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                  @keyframes cyphexNode {
                    0%, 58% {
                      fill: #7A7270;
                      r: 3px;
                    }
                    60% {
                      fill: #EC6229;
                      r: 4px;
                    }
                    65%, 90% {
                      fill: #EC6229;
                      r: 3px;
                    }
                    96%, 100% {
                      fill: #7A7270;
                      r: 3px;
                    }
                  }

                  .animate-cyphex-text {
                    animation: cyphexText 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
                  @keyframes cyphexText {
                    0%, 58% {
                      fill: #B8ADA8;
                    }
                    60%, 90% {
                      fill: #FFECE6;
                    }
                    96%, 100% {
                      fill: #B8ADA8;
                    }
                  }
                `}</style>

                <path
                  d="M 52 140 Q 110 100 183 140"
                  stroke="rgba(255,236,230,0.15)"
                  strokeDasharray="3 3"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M 52 140 Q 110 180 183 140"
                  stroke="rgba(255,236,230,0.15)"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M 183 140 C 205 118, 234 127, 256 105"
                  stroke="rgba(236,98,41,0.2)"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  className="animate-cocpit-flow"
                  d="M 183 140 C 205 118, 234 127, 256 105"
                  stroke="#EC6229"
                  strokeWidth="1.3"
                  fill="none"
                  filter="url(#glow-line)"
                />
                <path
                  className="animate-cocpit-line"
                  d="M 183 140 C 205 118, 234 127, 256 105"
                  stroke="#EC6229"
                  strokeWidth="1.3"
                  fill="none"
                />
                <circle
                  className="animate-cocpit-signal"
                  r="2.5"
                  fill="#FFFFFF"
                  filter="url(#glow-node)"
                />

                <path
                  d="M 183 140 C 205 162, 234 153, 256 170"
                  stroke="rgba(236,98,41,0.15)"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  className="animate-cyphex-flow"
                  d="M 183 140 C 205 162, 234 153, 256 170"
                  stroke="#EC6229"
                  strokeWidth="1.3"
                  fill="none"
                  filter="url(#glow-line)"
                />
                <path
                  className="animate-cyphex-line"
                  d="M 183 140 C 205 162, 234 153, 256 170"
                  stroke="#EC6229"
                  strokeWidth="1"
                  fill="none"
                />
                <circle
                  className="animate-cyphex-signal"
                  r="2.5"
                  fill="#FFFFFF"
                  filter="url(#glow-node)"
                />

                <circle
                  cx="52"
                  cy="140"
                  r="3.5"
                  fill="#FFECE6"
                />

                <text
                  x="52"
                  y="160"
                  fill="#B8ADA8"
                  fontSize="6"
                  textAnchor="middle"
                >
                  COCPIT PRODUCTS
                </text>

                <rect
                  x="145"
                  y="105"
                  width="28"
                  height="12"
                  rx="2"
                  fill="#0E1013"
                  stroke="rgba(255,236,230,0.2)"
                />

                <text
                  x="159"
                  y="113"
                  fill="#FFECE6"
                  fontSize="5"
                  textAnchor="middle"
                >
                  UNIFIED
                </text>

                <circle
                  className="animate-connect-aura"
                  cx="183"
                  cy="140"
                  r="14"
                  fill="#EC6229"
                  filter="url(#glow-soft)"
                />

                <circle
                  className="animate-connect-ring"
                  cx="183"
                  cy="140"
                  r="8"
                  fill="none"
                  stroke="#EC6229"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                <circle
                  className="animate-connect-core"
                  cx="183"
                  cy="140"
                  r="4"
                  fill="#EC6229"
                />

                <text
                  x="183"
                  y="160"
                  fill="#FFECE6"
                  fontSize="6"
                  textAnchor="middle"
                >
                  COCPIT CONNECT
                </text>

                <circle
                  className="animate-cocpit-glow"
                  cx="256"
                  cy="105"
                  r="7"
                  fill="#EC6229"
                  filter="url(#glow-soft)"
                />

                <circle
                  className="animate-cocpit-node"
                  cx="256"
                  cy="105"
                  r="3"
                  fill="#EC6229"
                />

                <text
                  x="264"
                  y="107"
                  fill="#FFECE6"
                  fontSize="6"
                >
                  COCPIT
                </text>

                <circle
                  className="animate-cyphex-glow"
                  cx="256"
                  cy="170"
                  r="7"
                  fill="#EC6229"
                  filter="url(#glow-soft)"
                />

                <circle
                  className="animate-cyphex-node"
                  cx="256"
                  cy="170"
                  r="3"
                  fill="#7A7270"
                />

                <text
                  className="animate-cyphex-text"
                  x="264"
                  y="172"
                  fill="#B8ADA8"
                  fontSize="6"
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
