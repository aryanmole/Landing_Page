"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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

      <div className="mx-auto flex w-full max-w-[880px] flex-col items-center gap-6 px-6 pt-[60px] pb-0">
        {/* Hero */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center font-medium leading-[1.05] tracking-[-2.4px] text-[#FFECE6]"
            style={{
              fontSize: "clamp(48px, 8vw, 80px)",
            }}
          >
            Cocpit
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-2.5 rounded-full border border-[#2C2C33] bg-[#1A1A20] px-4 py-2"
          >
            <span className="text-sm font-semibold text-[#FFECE6] sm:text-base">
              Professional Networking Platform
            </span>
            <span className="h-2 w-2 rounded-full bg-[#EC6229] shadow-[0_0_8px_rgba(236,98,41,0.8)]" />
            <span className="text-sm font-light text-[#EC6229] sm:text-base">
              Live
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[832px] w-full text-center font-sans font-light text-[20px] leading-[20px] tracking-[0px] text-[#B8ADA8]"
          >
            Connect, discover opportunities, and grow professionally in one
            place. Save time, money, and mental sanity by bringing your
            professional world together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            <Chip label="Career & Business Insights" />
            <Chip label="Personalized Connections" />
            <Chip label="Job Matching & Fit Scoring" />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => {
              window.location.href = "https://uat.cocpit.in/";
            }}
            className="rounded-full bg-[#EC6229] px-6 py-2.5 text-base font-medium text-[#FFECE6] hover:bg-[#d8551f] transition-colors shadow-[0_0_20px_rgba(236,98,41,0.3)]"
          >
            Register now
          </motion.button>
        </div>

        {/* Pillars */}
        <div className="mt-[200px] flex w-full flex-col gap-[100px]">
          {/* Pillar 1: Text Left, Feed Card Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-full items-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex w-full shrink-0 flex-col gap-4 md:w-[380px]"
            >
              <h2 className="font-sans font-medium text-[32px] leading-[36px] tracking-[0px] text-[#FFECE6]">
                Discover. Connect. Engage
              </h2>
              <p className="w-full font-sans font-normal text-[16px] leading-[20px] tracking-[0px] text-[#B8ADA8]">
                Explore professional content, discover relevant people, and build meaningful connections through a feed designed around your professional interests. Stay informed with content that matters to your career, engage with your network, and discover new conversations, ideas, and opportunities—all in one place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full shrink-0 overflow-hidden rounded-[8px] border border-[#2C2C33] bg-[#0E0E14] md:w-[400px]"
            >
              <Image
                src="/images/image.png"
                alt="Close-up of the Cocpit feed interface"
                width={400}
                height={252}
                className="h-auto w-full rounded-[8px] object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Pillar 2: Profile Card Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-full items-center">
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-2 relative h-[280px] w-full shrink-0 overflow-hidden rounded-[8px] border border-[#2C2C33] bg-[#0E0E14] md:order-1 md:w-[400px]"
            >
              <Image
                src="/image/left_img.png"
                alt="Close-up of the Cocpit personal profile interface"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-1 flex w-full shrink-0 flex-col gap-4 md:order-2 md:w-[380px]"
            >
              <h2 className="font-sans font-medium text-[32px] leading-[36px] tracking-[0px] text-[#FFECE6] whitespace-pre-line">
                Build Your Professional{"\n"}Presence
              </h2>
              <p className="w-full font-sans font-normal text-[16px] leading-[20px] tracking-[0px] text-[#B8ADA8]">
                Showcase your experience, skills, achievements, and interests in one professional profile—making it easier to present your strengths, build credibility, connect with the right people, and discover opportunities that align with your career goals.
              </p>
            </motion.div>
          </div>

          {/* Continuous innovation, full-width card */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex w-full max-w-[832px] flex-col items-start gap-4 rounded-[8px] bg-[#030303] p-0"
          >
            <h2 className="flex h-[36px] w-full items-center font-sans text-[32px] font-medium leading-[36px] text-[#FFECE6]">
              Continuous Innovation
            </h2>

            <p className="flex h-[40px] w-full items-center font-sans text-[16px] font-normal leading-[20px] text-[#B8ADA8]">
              We focus our product and technology efforts on solving real professional
              challenges and creating meaningful experiences that deliver lasting value
              for professionals, businesses, and organizations.
            </p>
          </motion.div>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </section>
  );
}

