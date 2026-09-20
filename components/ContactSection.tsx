"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  }

  return (
    <section
      id="contact"
      className="box-border w-full max-w-[832px] min-h-[514px] flex flex-col items-center pt-[60px] pb-0 border-b border-[#2C2C33] mx-auto font-sans"
    >
      {/* Container: starts from "Be curious." */}
      <div className="w-full max-w-[896px] sm:w-[832px] min-h-[413px] flex flex-col items-center gap-[16px] p-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[535px] min-h-[104px] flex items-center justify-center text-center font-sans font-medium text-[48px] leading-[52px] text-[#FFECE6]"
        >
          Be curious.
          <br />
          Let&apos;s invent what&apos;s next.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[542px] min-h-[36px] flex items-center justify-center text-center font-sans font-light text-[14px] leading-[18px] text-[#B8ADA8]"
        >
          Whether you&apos;re exploring a new idea, building ambitious
          technology, looking for your next opportunity, or simply curious
          about what we&apos;re creating — we&apos;re listening.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          onSubmit={handleSubmit}
          className="w-full max-w-[560px] min-h-[208px] flex flex-col items-center pt-[24px] gap-[8px]"
        >
          {/* Frame 2609550: Name + Email */}
          <div className="w-full max-w-[560px] flex flex-col sm:flex-row items-start gap-[24px] p-0">
            {/* Input with icon and note: Name */}
            <div className="w-full sm:w-[268px] h-[72px] flex flex-col items-start gap-[8px]">
              {/* Component 10 */}
              <div className="box-border w-full h-[48px] flex flex-row items-center px-0 py-[8px] gap-[4px] border-b border-[#222228] focus-within:border-accent transition-colors">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full h-[20px] bg-transparent border-0 p-0 font-sans font-normal text-[16px] leading-[20px] text-[#B8ADA8] placeholder-[#B8ADA8] focus:outline-none"
                />
              </div>
              {/* Note */}
              <div className="w-full h-[16px] font-sans text-[12px] leading-[16px] text-[#030303]" />
            </div>

            {/* Input with icon and note: Email */}
            <div className="w-full sm:w-[268px] h-[72px] flex flex-col items-start gap-[8px]">
              {/* Component 10 */}
              <div className="box-border w-full h-[48px] flex flex-row items-center px-0 py-[8px] gap-[4px] border-b border-[#222228] focus-within:border-accent transition-colors">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full h-[20px] bg-transparent border-0 p-0 font-sans font-normal text-[16px] leading-[20px] text-[#B8ADA8] placeholder-[#B8ADA8] focus:outline-none"
                />
              </div>
              {/* Note */}
              <div className="w-full h-[16px] font-sans text-[12px] leading-[16px] text-[#030303]" />
            </div>
          </div>

          {/* Input with icon and note: Inquiry */}
          <div className="w-full max-w-[560px] h-[60px] flex flex-col items-start gap-[8px]">
            {/* Component 10 */}
            <div className="box-border w-full h-[48px] flex flex-row items-center px-0 py-[8px] gap-[4px] border-b border-[#222228] focus-within:border-accent transition-colors">
              <input
                type="text"
                name="inquiry"
                placeholder="Brief statement of inquiry"
                className="w-full h-[20px] bg-transparent border-0 p-0 font-sans font-normal text-[16px] leading-[20px] text-[#B8ADA8] placeholder-[#B8ADA8] focus:outline-none"
              />
            </div>
            {/* Note */}
            <div className="w-full h-[16px] font-sans text-[12px] leading-[16px] text-[#030303]" />
          </div>

          {/* Primary emphasis button */}
          <button
            type="submit"
            className="w-[100px] h-[36px] flex flex-row items-center justify-center gap-[10px] px-[12px] py-[6px] bg-[#1A1A20] rounded-[100px] font-sans font-medium text-[16px] leading-[24px] text-[#B8ADA8] hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Submit
          </button>
        </motion.form>
      </div>

      {/* Bottom Container Spacer */}
      <div className="w-full max-w-[832px] h-[17px]" />
    </section>
  );
}