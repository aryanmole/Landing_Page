"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../home/Footer";

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

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // Simulated API endpoint submission
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("sent");
    setForm(initialFormState);
  }

  return (
    <main className="bg-[#030303] font-sans text-[#FFECE6] min-h-screen">
      <div className="mx-auto flex max-w-[832px] flex-col items-center gap-6 px-6 pt-[60px] pb-0">
        {/* Hero + form */}
        <section className="box-border flex w-full flex-col items-center border-b border-[#FFECE6]/[0.07] pt-0 pb-0">
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    className="w-full max-w-[535px] text-center font-sans text-[36px] sm:text-[48px] font-medium leading-[42px] sm:leading-[52px] tracking-[0px] text-[#FFECE6]"
    style={{
      fontFamily: "var(--font-dm-sans)",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "52px",
      letterSpacing: "0px",
      color: "#FFECE6",
      textAlign: "center",
    }}
  >
    Be curious.
    <br />
    Let&apos;s invent what&apos;s next.
  </motion.h1>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    className="mt-[16px] w-full max-w-[542px] text-center font-sans text-[14px] font-light leading-[18px] tracking-[0px] text-[#B8ADA8]"
    style={{
      fontFamily: "var(--font-dm-sans)",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "18px",
      letterSpacing: "0px",
      color: "#B8ADA8",
      textAlign: "center",
    }}
  >
    Whether you&apos;re exploring a new idea, building ambitious technology,
    looking for your next opportunity, or simply curious about what we&apos;re
    creating — we&apos;re listening.
  </motion.p>

  {/* Form */}
  <motion.form
    initial={{ opacity: 0, y: 25, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    onSubmit={handleSubmit}
    className="mt-[16px] flex h-[208px] w-[560px] flex-col items-center gap-[8px] pt-[24px]"
  >
    {/* Name + Email */}
    <div className="flex h-[72px] w-[560px] flex-row items-start justify-center gap-[20px]">
      {/* Name */}
      <div className="flex h-[72px] w-[270px] flex-col items-start gap-[8px]">
        <label htmlFor="name" className="sr-only">
          Your name or organization
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name or organization"
          value={form.name}
          onChange={(e) =>
            setForm((f) => ({ ...f, name: e.target.value }))
          }
          required
          className="box-border flex h-[48px] w-[270px] items-center border-0 border-b border-[#2C2C33] bg-transparent px-0 py-[8px] font-sans text-[16px] font-normal leading-[20px] text-[#FFECE6] outline-none placeholder:text-[#726B67] focus:border-[#EC6229]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        />

        <span className="h-[16px] w-[270px] font-sans text-[12px] leading-[16px] text-[#030303]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          &nbsp;
        </span>
      </div>

      {/* Email */}
      <div className="flex h-[72px] w-[270px] flex-col items-start gap-[8px]">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={form.email}
          onChange={(e) =>
            setForm((f) => ({ ...f, email: e.target.value }))
          }
          required
          className="box-border flex h-[48px] w-[270px] items-center border-0 border-b border-[#2C2C33] bg-transparent px-0 py-[8px] font-sans text-[16px] font-normal leading-[20px] text-[#FFECE6] outline-none placeholder:text-[#726B67] focus:border-[#EC6229]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        />

        <span className="h-[16px] w-[270px] font-sans text-[12px] leading-[16px] text-[#030303]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          &nbsp;
        </span>
      </div>
    </div>

    {/* Message */}
    <div className="flex h-[60px] w-[560px] flex-col items-start gap-[8px]">
      <label htmlFor="message" className="sr-only">
        Brief statement of inquiry
      </label>

      <input
        id="message"
        name="message"
        type="text"
        placeholder="Brief statement of inquiry"
        value={form.message}
        onChange={(e) =>
          setForm((f) => ({ ...f, message: e.target.value }))
        }
        required
        className="box-border flex h-[48px] w-[560px] items-center border-0 border-b border-[#2C2C33] bg-transparent px-0 py-[8px] font-sans text-[16px] font-normal leading-[20px] text-[#FFECE6] outline-none placeholder:text-[#726B67] focus:border-[#EC6229]"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      />

      <span className="h-[16px] w-[560px] font-['DM_Sans'] text-[12px] leading-[16px] text-[#030303]">
        &nbsp;
      </span>
    </div>

    {/* Submit */}
    <button
  type="submit"
  disabled={status === "submitting"}
  className="flex h-[36px] w-[100px] flex-row items-center justify-center gap-[10px] rounded-[100px] bg-[#1A1A20] px-[12px] py-[6px] font-['DM_Sans'] text-[16px] font-medium not-italic leading-[24px] text-[#B8ADA8] transition-colors duration-200 hover:bg-[#EC6229] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
  style={{
    fontFamily: "var(--font-dm-sans)",
    fontStyle: "normal",
  }}
>
  {status === "submitting"
    ? "Sending…"
    : status === "sent"
      ? "Sent ✓"
      : "Submit"}
</button>

    {/* Success message */}
    {status === "sent" && (
      <p className="pt-2 font-['DM_Sans'] text-xs leading-4 text-[#EC6229]">
        Thanks — we&apos;ll be in touch.
      </p>
    )}
  </motion.form>
</section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
