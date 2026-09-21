"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "@/components/home/Footer";

const colors = {
  page: "#030303",
  card: "#0B0B10",
  chipBg: "#1A1A20",
  chipBorder: "#2C2C33",
  tagBg: "#222228",
  textPrimary: "#FFECE6",
  textSecondary: "#B8ADA8",
  accent: "#EC6229",
};

const pillars = [
  {
    title: "Discover. Connect. Engage",
    body: "Explore professional content, discover relevant people, and build meaningful connections through a feed designed around your professional interests. Stay informed with content that matters to your career, engage with your network, and discover new conversations, ideas, and opportunities—all in one place.",
    imageAlt: "Close-up of the Cocpit feed interface",
    type: "feed" as const,
    reverse: false,
  },
  {
    title: "Build Your Professional Presence",
    body: "Showcase your experience, skills, achievements, and interests in one professional profile—making it easier to present your strengths, build credibility, connect with the right people, and discover opportunities that align with your career goals.",
    type: "profile" as const,
    imageAlt: "Close-up of the Cocpit personal profile interface",
    reverse: true,
  },
];

function Chip({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-full px-3 py-2 border border-[#2C2C33]/60"
      style={{ background: colors.tagBg }}
    >
      <span className="text-xs leading-4 text-[#FFECE6] font-sans">
        {label}
      </span>
    </div>
  );
}

export default function ProductDetail({ onClose }: { onClose?: () => void }) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.push("/product");
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#030303] text-[#FFECE6] font-sans">
      {/* Close button */}
      <button
        onClick={handleClose}
        aria-label="Close"
        className="fixed right-6 top-6 md:right-12 md:top-10 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#2C2C33] bg-[#0E0E14]/80 text-[#FFECE6] backdrop-blur-md hover:bg-[#1C1C24] hover:text-[#EC6229] transition-all cursor-pointer shadow-lg"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 4L16 16M16 4L4 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="mx-auto flex max-w-[832px] flex-col items-center gap-6 px-6 pt-[60px] pb-0">
        {/* Hero */}
        <div className="flex w-full flex-col items-center gap-6 pt-6 text-center">
          <h1
            className="text-center font-medium leading-[1.05] tracking-[-2.4px] text-[#FFECE6]"
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
            }}
          >
            Cocpit
          </h1>

          <div className="flex items-center gap-2.5 rounded-full border border-[#2C2C33] bg-[#1A1A20] px-4 py-2">
            <span className="text-sm font-semibold text-[#FFECE6] sm:text-base">
              Professional Networking Platform
            </span>
            <span className="h-2 w-2 rounded-full bg-[#EC6229] shadow-[0_0_8px_rgba(236,98,41,0.8)]" />
            <span className="text-sm font-medium text-[#EC6229] sm:text-base">
              Live
            </span>
          </div>

          <p className="max-w-[832px] text-center text-lg font-light leading-relaxed text-[#B8ADA8] sm:text-xl">
            Connect, discover opportunities, and grow professionally in one
            place. Save time, money, and mental sanity by bringing your
            professional world together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <Chip label="Career & Business Insights" />
            <Chip label="Personalized Connections" />
            <Chip label="Job Matching & Fit Scoring" />
          </div>

          <button className="mt-2 rounded-full bg-[#EC6229] px-6 py-2.5 text-base font-medium text-[#FFECE6] hover:bg-[#d8551f] transition-colors shadow-[0_0_20px_rgba(236,98,41,0.3)]">
            Register now
          </button>
        </div>

        {/* Pillars */}
        <div className="mt-16 flex w-full flex-col gap-20 md:mt-24 md:gap-24">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`flex w-full flex-col items-center gap-8 md:flex-row md:justify-between ${
                pillar.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex w-full flex-col gap-4 md:w-[392px]">
                <h2 className="text-2xl font-medium leading-8 text-[#FFECE6] sm:text-3xl sm:leading-9">
                  {pillar.title}
                </h2>
                <p className="text-base leading-6 text-[#B8ADA8]">
                  {pillar.body}
                </p>
              </div>

              {/* Interface Visual Card */}
              <div className="relative aspect-[400/252] w-full overflow-hidden rounded-xl border border-[#2C2C33] bg-[#0E0E14] p-5 shadow-2xl md:w-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EC6229]/10 via-transparent to-transparent opacity-50" />
                
                {pillar.type === "feed" ? (
                  <div className="relative z-10 h-full w-full">
                    <Image
                      src="/images/image.png"
                      alt={pillar.imageAlt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center gap-3 border-b border-[#2C2C33]/60 pb-3">
                      <div className="h-10 w-10 rounded-full bg-[#1C1C28] border border-[#2C2C33] flex items-center justify-center text-sm font-bold text-[#FFECE6]">
                        JD
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#FFECE6]">Professional Profile</span>
                        <span className="text-[10px] text-[#EC6229]">Verified Identity</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 py-1">
                      <div className="rounded bg-[#1A1A22] p-2 border border-[#2C2C33]/40">
                        <span className="block text-[10px] text-[#726B67]">SKILLS</span>
                        <span className="text-xs text-[#FFECE6]">AI Architecture</span>
                      </div>
                      <div className="rounded bg-[#1A1A22] p-2 border border-[#2C2C33]/40">
                        <span className="block text-[10px] text-[#726B67]">STATUS</span>
                        <span className="text-xs text-[#EC6229]">Open to Work</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#2C2C33]/50 pt-2 text-[11px] text-[#B8ADA8]">
                      <span>Profile Strength: 100%</span>
                      <span className="text-[#EC6229]">Connect →</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Continuous innovation, full-width card */}
          <div className="flex w-full flex-col gap-4 rounded-xl border border-[#2C2C33]/80 bg-[#0B0B10] p-8 shadow-xl">
            <h2 className="text-2xl font-medium leading-8 text-[#FFECE6] sm:text-3xl">
              Continuous Innovation
            </h2>
            <p className="text-base leading-relaxed text-[#B8ADA8]">
              We focus our product and technology efforts on solving real
              professional challenges and creating meaningful experiences
              that deliver lasting value for professionals, businesses, and
              organizations.
            </p>
          </div>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </section>
  );
}

