"use client";

import { useState, type FormEvent, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Footer from "@/components/home/Footer";

const roleTitles: Record<string, string> = {
  "marketing-intern": "Marketing Intern",
  "uiux-design-intern": "UI/UX Design Intern",
  "manual-testing-intern": "Manual Testing Intern",
  "ai-ml-developer": "AI / ML Developer",
  "hr-manager": "HR Manager",
};

type ApplyPageProps = {
  roleTitle?: string;
  onCancel?: () => void;
};

function ApplyFormContent({ roleTitle, onCancel }: ApplyPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") || searchParams.get("position") || "";
  const initialPosition = roleTitle || roleTitles[roleParam] || roleParam || "Marketing Intern";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    if (onCancel) {
      onCancel();
    } else {
      router.push("/careers");
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex w-full flex-col items-center gap-6 py-24 text-center"
      >
        <div className="h-12 w-12 rounded-full bg-[#EC6229]/20 border border-[#EC6229] flex items-center justify-center text-[#EC6229] text-xl">
          ✓
        </div>
        <h1 className="text-3xl font-medium text-[#FFECE6]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Application Submitted!
        </h1>
        <p className="max-w-[450px] text-base text-[#B8ADA8]" style={{ fontFamily: "var(--font-dm-sans)" }}>
          Thank you for applying for <span className="text-[#FFECE6] font-medium">{initialPosition}</span>. We will review your application and be in touch soon.
        </p>
        <button
          type="button"
          onClick={handleClose}
          className="mt-4 rounded-full bg-[#EC6229] px-6 py-2.5 text-sm font-medium text-[#FFECE6] hover:bg-[#d8551f] transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Back to Careers
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative w-full max-w-[832px] pt-0 pb-12">
      {/* Top Right Close Button */}
      <button
        type="button"
        aria-label="Close"
        className="fixed right-6 top-6 md:right-12 md:top-10 z-50 flex h-8 w-8 items-center justify-center text-[#FFECE6] transition-opacity hover:opacity-70 cursor-pointer"
        onClick={handleClose}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 4L16 16M16 4L4 16"
            stroke="#FFECE6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Form Container */}
      <motion.form
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-center gap-10"
      >
        {/* Input Fields Stack */}
        <div className="flex w-full flex-col gap-8">
          {/* Row 1: Full name + Email */}
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:gap-10">
            {/* Full Name */}
            <label className="flex flex-1 flex-col gap-2 border-b border-[#2C2C33] pb-2">
              <span
                className="text-[12px] font-medium leading-[16px] text-[#B8ADA8] font-sans"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Full name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Kat denins"
                required
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[20px] text-[#FFECE6] outline-none placeholder:text-[#726B67]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </label>

            {/* Email */}
            <label className="flex flex-1 flex-col gap-2 border-b border-[#2C2C33] pb-2">
              <span
                className="text-[12px] font-medium leading-[16px] text-[#B8ADA8] font-sans"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. katdenins@gmail.com"
                required
                className="w-full bg-transparent font-sans text-[14px] font-normal leading-[20px] text-[#FFECE6] outline-none placeholder:text-[#726B67]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </label>
          </div>

          {/* Row 2: Message */}
<label className="box-border flex h-[62px] w-full flex-col items-start justify-center gap-[10px] border-b border-[#2C2C33] px-0 py-[8px]">  <span
    className="h-[16px] w-full text-left text-[12px] font-medium leading-[16px] text-[#B8ADA8] font-sans"
  >
    Message
  </span>

  <div className="flex h-[20px] w-full items-center justify-between gap-[10px]">
    <input
  type="text"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Why do you want to join?"
  className="h-[20px] w-full bg-transparent font-sans text-[14px] font-normal leading-[20px] text-[#726B67] outline-none placeholder:text-[#726B67]"
  style={{ fontFamily: "var(--font-dm-sans)" }}
/>
  </div>
</label>
        </div>

        {/* Upload Resume Section */}
        <div className="flex flex-col items-center gap-3 pt-0">
          <label className="group flex flex-col items-center gap-3 cursor-pointer">
            {/* Upload Icon */}
           <div className="relative h-[20px] w-[20px]">
              <svg
                className="absolute left-[2.5px] top-[1.87px]"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15 9.37549V14.3755C15 14.5413 14.9342 14.7002 14.8169 14.8174C14.6997 14.9346 14.5408 15.0005 14.375 15.0005H0.625C0.45924 15.0005 0.300269 14.9346 0.183058 14.8174C0.0658481 14.7005 0 14.5413 0 14.3755V9.37549C0 9.20973 0.0658481 9.05076 0.183058 8.93355C0.300269 8.81634 0.45924 8.75049 0.625 8.75049C0.79076 8.75049 0.949731 8.81634 1.06694 8.93355C1.18415 9.05076 1.25 9.20973 1.25 9.37549V13.7505H13.75V9.37549C13.75 9.20973 13.8158 9.05076 13.9331 8.93355C14.0503 8.81634 14.2092 8.75049 14.375 8.75049C14.5408 8.75049 14.6997 8.81634 14.8169 8.93355C14.9342 9.05076 15 9.20973 15 9.37549ZM4.81719 4.19268L6.875 2.13409V9.37549C6.875 9.54125 6.94085 9.70022 7.05806 9.81743C7.17527 9.93464 7.33424 10.0005 7.5 10.0005C7.66576 10.0005 7.82473 9.93464 7.94194 9.81743C8.05915 9.70022 8.125 9.54125 8.125 9.37549V2.13409L10.1828 4.19268C10.3001 4.30995 10.4591 4.37584 10.625 4.37584C10.7909 4.37584 10.9499 4.30995 11.0672 4.19268C11.1845 4.0754 11.2503 3.91634 11.2503 3.75049C11.2503 3.58464 11.1845 3.42558 11.0672 3.3083L7.94219 0.183304C7.88414 0.125194 7.81521 0.0790944 7.73934 0.0476417C7.66346 0.016189 7.58213 0 7.5 0C7.41787 0 7.33654 0.016189 7.26066 0.0476417C7.18479 0.0790944 7.11586 0.125194 7.05781 0.183304L3.93281 3.3083C3.81554 3.42558 3.74965 3.58464 3.74965 3.75049C3.74965 3.91634 3.81554 4.0754 3.93281 4.19268C4.05009 4.30995 4.20915 4.37584 4.375 4.37584C4.54085 4.37584 4.69991 4.30995 4.81719 4.19268Z"
                  fill="#FFECE6"
                />
              </svg>
            </div>

            {/* Label Text */}
            <span
              className="text-[16px] font-medium leading-[24px] text-[#FFECE6] font-sans group-hover:text-[#EC6229] transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {resume ? resume.name : "Upload your resume"}
            </span>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="sr-only"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            />
          </label>
        </div>

        {/* Submit Application Button */}
        <button
          type="submit"
          className="flex h-[36px] w-[167px] items-center justify-center gap-[10px] rounded-[100px] bg-[#1A1A20] px-3 py-[6px] font-sans text-[16px] font-medium leading-[24px] text-[#726B67] transition-all cursor-pointer hover:bg-[#EC6229] hover:text-[#FFECE6]"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Submit application
        </button>
      </motion.form>
    </div>
  );
}

export default function ApplyPage({ roleTitle, onCancel }: ApplyPageProps) {
  return (
    <main className="min-h-screen bg-[#030303] text-[#FFECE6] font-sans">
      <div className="mx-auto flex max-w-[832px] flex-col items-center px-6 pt-[60px] pb-0">
        <Suspense fallback={<div className="py-24 text-[#B8ADA8] text-sm">Loading application form...</div>}>
          <ApplyFormContent roleTitle={roleTitle} onCancel={onCancel} />
        </Suspense>

        
      </div>
    </main>
  );
}