"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/home/Footer";
import ProductDetail from "@/components/productDetails/page";

type Tag = string;

type LiveProduct = {
  index: string;
  status: "live";
  name: string;
  category: string;
  headline: string;
  description: string;
  tags: Tag[];
  image: string;
  imageAlt: string;
};

type InDevelopmentProduct = {
  index: string;
  status: "in-development";
  name: string;
  description: string;
};

const liveProduct: LiveProduct = {
  index: "01",
  status: "live",
  name: "Cocpit",
  category: "Category",
  headline: "Professional Networking Platform",
  description:
    "Connect, discover opportunities, and grow professionally in one place. Save time, money, and mental sanity by bringing your professional world together.",
  tags: [
    "Career & Business Insights",
    "Personalized Connections",
    "Job Matching & Fit Scoring",
  ],
  image: "/products/feed.png",
  imageAlt: "Editorial close-up of the Cocpit product interface",
};

const inDevelopmentProduct: InDevelopmentProduct = {
  index: "02",
  status: "in-development",
  name: "Cyphex",
  description:
    "Something new is taking shape. Exploring new possibilities for what comes next in foundational human-scale technology.",
};

export default function ProductsPage() {
  const [showDetail, setShowDetail] = useState(false);

  if (showDetail) {
    return <ProductDetail onClose={() => setShowDetail(false)} />;
  }

  return (
    <main className="bg-[#030303] font-sans text-[#FFECE6] min-h-screen">
      <div className="mx-auto flex max-w-[832px] flex-col items-center gap-6 px-6 pt-[60px] pb-0">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center pt-0">
          <h1 className="max-w-[698px] text-center text-[44px] font-medium leading-[1.05] tracking-[-1px] text-[#FFECE6] sm:text-[64px] sm:tracking-[-1.6px] lg:text-[90px] lg:leading-[90px] lg:tracking-[-2.4px]">
            Products built for{" "}
            <span
              className="font-serif italic font-normal"
              style={{ fontFamily: "var(--font-pt-serif)", fontStyle: "italic", fontWeight: 400 }}
            >
              what&apos;s next.
            </span>
          </h1>
          <p className="max-w-[832px] text-base font-light leading-[1.4] text-[#B8ADA8] sm:text-xl sm:leading-7">
            Explore the products Cocpit is building across different areas of
            technology.<br /> Each initiative is engineered for autonomy,
            precision, and long-term utility.
          </p>
        </section>

        {/* Product directory */}
        <section className="flex w-full flex-col items-start gap-6 pt-16 sm:pt-[80px]">
          <div className="flex w-full items-center justify-between border-b border-[#2C2C33] pb-4">
            <span className="text-xs uppercase leading-4 tracking-wide text-[#726B67]">
              Index // Directory
            </span>
            <span className="text-xs uppercase leading-4 tracking-wide text-[#726B67]">
              Active &amp; in development
            </span>
          </div>

          <div className="flex w-full flex-col gap-6">
            {/* 01 — Live product */}
            <article
              onClick={() => setShowDetail(true)}
              className="group flex flex-col gap-6 rounded-[8px_0_0_8px] border-l-4 border-l-[#EC6229] p-6 bg-[#0B0B10]/40 cursor-pointer transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-[40px] font-normal leading-[60px] text-[#FFECE6] sm:text-[56px] group-hover:text-[#EC6229] transition-colors">
                    {liveProduct.index}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#EC6229] shadow-[0_0_8px_rgba(236,98,41,0.8)]" />
                      <span className="text-xs font-semibold uppercase leading-4 text-[#EC6229] tracking-wider">
                        Live
                      </span>
                    </div>
                    <span className="text-[28px] font-normal leading-[36px] text-[#FFECE6] sm:text-[32px] group-hover:text-[#FFECE6]">
                      {liveProduct.name}
                    </span>
                  </div>
                </div>

                <span className="hidden sm:flex items-center gap-1 text-xs font-medium text-[#EC6229] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </span>
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-[24px]">
                {/* Left Panel */}
                <div className="flex w-full md:w-[358px] md:h-[220px] flex-col justify-between gap-[16px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase leading-4 tracking-wide text-[#726B67]">
                      {liveProduct.category}
                    </span>
                    <h2 className="text-xl leading-6 text-[#FFECE6]">
                      {liveProduct.headline}
                    </h2>
                  </div>

                  <p
                    className="w-[358px] font-sans text-[16px] font-normal leading-[20px] tracking-[0px] text-[#B8ADA8]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Connect, discover opportunities, and grow professionally in one place.
                    Save time, money, and mental sanity by bringing your professional world
                    together.
                  </p>

                  <div className="flex w-[358px] flex-wrap gap-[12px] pt-1">
                    {liveProduct.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[2px] bg-[#222228] px-[8px] py-[4px] text-[12px] leading-[16px] font-normal text-[#FFECE6]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Panel / Image */}
              <div className="relative w-full md:w-[370px] md:shrink-0 overflow-hidden rounded-[8px] border border-[#2C2C33]">
                <Image
                  src="/images/image.png"
                  alt="Cocpit Product Interface"
                  width={370}
                  height={220}
                  className="h-auto w-full rounded-[8px] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              </div>
            </article>

            {/* 02 — In development product */}
            <article className="flex flex-col md:flex-row items-start md:items-center gap-[24px] rounded-lg p-6 bg-[#0B0B10]/20">
              <div className="flex items-center gap-[8px]">
                <span
                  className="flex h-[60px] w-[80px] items-center text-[56px] font-normal leading-[60px] tracking-[0px] text-[#FFECE6]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {inDevelopmentProduct.index}
                </span>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#726B67]" />
                    <span className="w-[112px] h-[14px] flex items-center text-[11px] font-semibold uppercase leading-[14px] tracking-[1.1px] text-[#726B67]">
                      In development
                    </span>
                  </div>
                  <span
                    className="w-[113px] h-[36px] flex items-center text-[32px] font-normal leading-[36px] tracking-[0px] text-[#FFECE6]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {inDevelopmentProduct.name}
                  </span>
                </div>
              </div>

              <p
                className="w-full md:w-[530px] font-sans text-[16px] font-light leading-[20px] tracking-[0px] text-[#FFECE6]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {inDevelopmentProduct.description}
              </p>
            </article>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

