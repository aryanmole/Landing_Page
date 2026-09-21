import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../home/Footer";

export const metadata: Metadata = {
  title: "About — Cocpit",
  description:
    "Cocpit is a parent technology company exploring new possibilities. We build software engineered for genuine human utility and long-term autonomy.",
};

type Pillar = {
  eyebrow: string;
  title: string;
  description: string;
};

type ManifestoItem = {
  number: string;
  tag: string;
  subtitle: string;
  description: string;
};

const whoWeAreItems: ManifestoItem[] = [
  {
    number: "01",
    tag: "PEOPLE FIRST",
    subtitle: "Real People. Real Problems",
    description:
      "We build for builders, creators and professionals who want more than just a platform - they want a place to grow, connect and to build what's next",
  },
  {
    number: "02",
    tag: "LONG TERM",
    subtitle: "Think beyond the next milestone.",
    description:
      "We are not here for quick wins. We build systems, products and communities that compound overtime.",
  },
  {
    number: "03",
    tag: "HUMANS + TECHNOLOGY",
    subtitle: "Technology in service for people",
    description:
      "Our work is guided by a simple principal - technology should expand human potential, not replace it.",
  },
];

const pillars: Pillar[] = [
  {
    eyebrow: "01 // Inquiry",
    title: "Question what exists",
    description:
      "Challenge assumptions. Look closer at what everyone accepts as normal, and ask whether there's a better, smarter, more meaningful way forward.",
  },
  {
    eyebrow: "02 // Discovery",
    title: "Explore possibilities",
    description:
      "Stay curious about what could be. Explore unfamiliar ideas, unexpected possibilities, and the spaces where imagination turns into something real.",
  },
  {
    eyebrow: "03 // Execution",
    title: "Build what comes next",
    description:
      "Don't just imagine the future. Build it. Turn bold ideas into products, experiences, and technologies that move the world forward.",
  },
];

const footerNavItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/product" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "User Policy", href: "/privacy-policy" },
  { label: "Community Guidelines", href: "/community-guidelines" },
];

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-[22px] rounded-full bg-[#EC6229]" />
      <span className="text-xs uppercase font-medium tracking-wider text-[#B8ADA8]">{label}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#030303] font-sans text-[#FFECE6] min-h-screen">
      <div className="mx-auto flex max-w-[832px] flex-col items-center gap-6 px-6 pt-[60px] pb-0">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center pt-0">
          <h1 className="w-full max-w-[1100px] text-center text-[44px] font-medium leading-[1.05] tracking-[-1px] text-[#FFECE6] sm:text-[64px] sm:tracking-[-1.6px] lg:text-[90px] lg:leading-[90px] lg:tracking-[-2.4px]">
            <span className="whitespace-nowrap">Building products for</span>
            <br />
            <span className="font-['PT_Serif'] font-normal italic">
              what comes next.
            </span>
          </h1>
          <p className="mx-auto max-w-[832px] text-center text-[20px] font-light leading-[28px] tracking-[0px] text-[#B8ADA8]">
            Cocpit is a parent technology company exploring new possibilities.
            We build software engineered for genuine human utility and long-term
            autonomy, starting with our first live network.
          </p>
        </section>

        {/* Who we are */}
        <section className="flex w-full flex-col items-start gap-8 pt-[142px]">
          <div className="w-full">
            <SectionEyebrow label="WHO WE ARE" />
          </div>

          <div className="flex w-full flex-col md:flex-row md:items-stretch pt-2">
            {/* Manifesto Left Column - Exact 405px box width, 341px text width */}
            <div className="w-full md:w-[405px] shrink-0 border-b md:border-b-0 md:border-r border-[#333333] pb-8 md:pb-0 md:pr-12 flex items-center">
              <p className="w-full md:w-[341px] text-[28px] sm:text-[36px] font-bold leading-[40px] sm:leading-[52px] tracking-[0px] text-[#FFECE6]">
                We are a tech company with a simple belief - that the future is built by the people who build
              </p>
            </div>

            {/* Right Side - Exact 427px container width, 358px content width */}
            <div className="flex w-full md:w-[427px] shrink-0 flex-col gap-8 justify-between md:pl-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#333333]">
              {whoWeAreItems.map((item, idx) => (
                <div
                  key={item.number}
                  className={`flex items-start gap-5 w-full pb-6 ${idx !== whoWeAreItems.length - 1 ? "border-b border-[#2C2C33]" : ""
                    }`}
                >
                  {/* Number */}
                  <span className="text-[14px] font-normal leading-[18px] text-[#EC6229] shrink-0 w-[20px]">
                    {item.number}
                  </span>

                  {/* Content (width 358px, exact Figma font specs) */}
                  <div className="flex-1 max-w-[358px] flex flex-col gap-1">
                    <span className="text-[12px] font-normal leading-[18px] tracking-[0px] text-[#726B67] uppercase">
                      {item.tag}
                    </span>
                    <h3 className="text-[16px] font-normal leading-[18px] tracking-[0px] text-[#FFECE6]">
                      {item.subtitle}
                    </h3>
                    <p className="text-[16px] font-normal leading-[22px] tracking-[0px] text-[#B8ADA8] pt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our vision */}
        <section className="flex w-full flex-col items-center gap-6 pt-[100px]">
          {/* Eyebrow */}
          <div className="flex h-[18px] w-full items-center gap-3">
            <div className="h-[2px] w-[22px] shrink-0 rounded-[16px] bg-[#FF5722]" />

            <span className="text-[14px] font-normal leading-[18px] text-[#B8ADA8]">
              Our Vision
            </span>
          </div>

          {/* Vision Content */}
          <div className="flex h-[292px] w-full flex-row items-center gap-[48px]">
            {/* Left Column */}
            <div className="box-border flex h-[292px] w-[407px] shrink-0 items-center border-r border-[#333333]">
              <p className="flex h-[292px] w-[341px] items-center text-[36px] font-bold leading-[52px] tracking-[0px] text-[#FFECE6]">
                We exist to build the future, not just keep up with it
              </p>
            </div>

            {/* Right Column */}
            <div className="flex h-[292px] w-[377px] shrink-0 items-center">
              <p
                className="w-[358px] text-[16px] font-normal leading-[18px]"
                style={{ color: "#B8ADA8" }}
              >
                Most companies optimize the present. <br />Cocpit builds the future.
                <br />
                <br />
                We&apos;re here to create technologies that solve real problems,
                open new frontiers and give people the tools to shape what&apos;s
                next — not just adapt to it.
              </p>
            </div>
          </div>
        </section>

        {/* Be curious */}
        <section className="mx-auto flex w-full max-w-[832px] flex-col items-center gap-6 pt-[100px]">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[48px] font-medium leading-[52px] text-[#FFECE6]">
              <span className=" font-medium">
                Be curious
              </span>
            </h2>

            <p className="text-[14px] font-normal leading-[18px] text-[#B8ADA8]">
              Question what exists. Explore what&apos;s possible. Build
              <br />
              what comes next.
            </p>
          </div>

          {/* Pillars */}
          <div className="flex h-[236px] w-[832px] flex-row items-center gap-[32px]">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="box-border flex h-[236px] w-[256px] shrink-0 flex-col items-start justify-between rounded-[8px] border border-[#2C2C33] bg-[#030303] p-[24px]"
              >
                {/* Content */}
                <div className="flex h-[144px] w-[206px] flex-col items-start gap-[12px]">
                  <span className="flex h-[16px] items-center text-[12px] font-normal leading-[16px] uppercase text-[#EC6229]">
                    {pillar.eyebrow}
                  </span>

                  <h3 className="flex h-[24px] w-[206px] items-center text-[20px] font-normal leading-[24px] text-[#FFECE6]">
                    {pillar.title}
                  </h3>

                  <p className="flex w-[206px] items-center text-[12px] font-normal leading-[16px] text-[#B8ADA8]">
                    {pillar.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="flex h-[42px] w-[32px] flex-col items-start pt-[40px]">
                  <div className="h-[2px] w-[32px] bg-[#FF5722]" />
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Footer */}
        <Footer/>
      </div>
    </main>
  );
}
