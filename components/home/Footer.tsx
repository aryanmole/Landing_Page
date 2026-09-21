"use client";

import { motion } from "framer-motion";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "User Policy" },
  { href: "/community-guidelines", label: "Community Guidelines" },
];

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`w-full flex flex-col items-center gap-6 pt-24 md:pt-[100px] pb-16 bg-bg font-sans ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="w-full max-w-[832px] flex flex-col md:flex-row items-start gap-[40px] mx-auto"
      >
        {/* Brand column */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="w-full md:w-[323.33px] h-[132px] flex flex-col items-start gap-[16px] pb-[42px] opacity-100"
        >
          <div className="flex items-center gap-4">
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5625 0.00012207V4.92663C16.1992 4.92663 15.3201 7.21049 15.3122 10.0276V10.0641C15.3122 11.5466 15.324 12.3992 15.2984 13.5741L9.08361 13.6096C9.08361 13.6096 9.04419 12.8497 9.04419 11.6037C9.04419 11.3563 9.04518 11.0902 9.04912 10.8073C9.05207 10.6003 9.04912 10.3785 9.04419 10.1459V7.42734C9.20779 4.96803 9.71534 3.36825 11.9969 1.77438C12.8119 1.20563 14.1956 0.676309 15.4551 0.412142C16.8191 0.12629 18.7458 0.00012207 20.5907 0.00012207H21.5634H21.5625Z"
                fill="#EC6229"
              />
              <path
                d="M15.3123 18.6337V24.2748C15.3123 24.2748 14.986 24.2837 14.4272 24.2837C13.3136 24.2837 11.2735 24.2502 9.04327 24.0491C8.82349 24.0294 8.60273 24.0077 8.38 23.985C7.56201 23.9002 6.74401 23.6972 5.9546 23.3916C4.24371 22.7302 2.66883 21.5848 1.53941 20.1004C1.28317 19.7633 1.01116 19.2478 0.770688 18.6573C0.538102 18.0866 0.335082 17.4459 0.204991 16.8269C0.0374505 16.0235 0 14.8417 0 13.6618C0 12.8388 0.01774 12.0157 0.0226676 11.3228C0.0246387 10.9994 0.023653 11.376 0.0325228 9.76831H5.9477C5.92109 12.1912 5.91814 12.2473 5.91518 13.3139C5.91518 13.5603 5.92701 13.8166 5.9546 14.0778C6.11524 15.5573 6.81793 17.1857 9.04327 18.0482C9.60404 18.266 10.2614 18.4346 11.0311 18.54C12.0265 18.6761 13.9512 18.6337 15.3123 18.6337Z"
                fill="#EC6229"
              />
            </svg>

            <span className="text-base font-bold uppercase tracking-wide text-ink">
              Cocpit
            </span>
          </div>
          <p className="w-full font-sans font-normal text-[12px] leading-[16px] tracking-[0px] text-[#B8ADA8]">
            We believe the next generation of technology will come from
            questioning what exists, exploring what&apos;s possible, and
            building what doesn&apos;t.
          </p>
        </motion.div>

        {/* Nav list */}
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="w-full md:w-[178px] h-[112px] flex flex-col gap-[8px] opacity-100 text-muted"
        >
          {navLinks.map((link) => (
            <li key={link.label} className="h-[16px]">
              <a
                href={link.href}
                className="font-sans font-normal text-[12px] leading-[16px] tracking-[0px] hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Legal list */}
        <motion.ul
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
          className="w-full md:w-[250.67px] h-[132px] flex flex-col gap-[8px] text-muted"
        >
          {legalLinks.map((link) => (
            <li key={link.label} className="h-[16px]">
              <a
                href={link.href}
                className="font-sans font-normal text-[12px] leading-[16px] tracking-[0px] hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full pt-2 flex justify-center"
      >
        <p className="font-sans font-normal text-[12px] leading-[16px] tracking-[0px] text-muted text-center">
          © 2025 Cocpit, Inc. All rights reserved.{" "}
          <span className="text-[#EC6229]">Be curious.</span>
        </p>
      </motion.div>
    </footer>
  );
}
