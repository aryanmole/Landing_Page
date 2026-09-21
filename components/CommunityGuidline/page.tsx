"use client";

import Link from "next/link";
import Footer from "@/components/home/Footer";

const guidelinesSections = [
  {
    id: "1",
    title: "1. PURPOSE & COMMUNITY VISION",
    content: [
      `Cocpit is designed to foster a high-integrity, professional, and innovative network where creators, developers, recruiters, and organization leaders collaborate to build what comes next.`,
      `Our Community Guidelines set the standards of acceptable behavior across all Platform interactions, including posts, job listings, messaging, community forums, AI-assisted tools, and recruitment workflows. By accessing Cocpit, you agree to uphold these standards.`,
    ],
  },
  {
    id: "2",
    title: "2. PROFESSIONAL CONDUCT & RESPECT",
    content: [
      `We believe that meaningful innovation thrives on constructive debate, collaboration, and mutual respect.`,
    ],
    bullets: [
      "• Zero Tolerance for Harassment: Do not engage in bullying, doxxing, stalking, intimidation, or personal attacks against any user or organization.",
      "• Inclusive & Non-Discriminatory Environment: Hate speech, slurs, discrimination, or bias based on race, ethnicity, religion, gender, sexual orientation, nationality, disability, or age is strictly prohibited.",
      "• Professional Tone: Maintain a respectful, constructive, and civil tone in all public posts, comments, direct messages, and recruitment communications.",
    ],
  },
  {
    id: "3",
    title: "3. AUTHENTICITY & RECRUITMENT SAFETY",
    content: [
      `Integrity is fundamental to professional discovery and hiring on Cocpit.`,
    ],
    bullets: [
      "• Accurate Credentials: Self-reported profiles, work experience, education, certifications, and skills must be accurate and truthful. Misrepresenting employment history or qualifications is a violation of our guidelines.",
      "• Verified Job Postings: Recruiters and company administrators must publish legitimate, accurate employment opportunities. Deceptive job posts, pay-for-employment schemes, multi-level marketing (MLM), or phantom job listings will result in immediate termination.",
      "• One Person, One Account: Creating multiple accounts to evade suspensions, impersonate other individuals or brands, or artificially manipulate engagement is prohibited.",
    ],
  },
  {
    id: "4",
    title: "4. CONTENT SAFETY & INTELLECTUAL PROPERTY",
    content: [
      `You own the content you create and publish on Cocpit, but you are responsible for ensuring it complies with applicable legal standards.`,
    ],
    bullets: [
      "• No Illegal or Harmful Content: Do not upload, post, or transmit content promoting illegal acts, violent extremism, adult content, non-consensual imagery, or dangerous activities.",
      "• Respect Intellectual Property: Only share content, code, images, or documents that you possess the legal right or copyright license to distribute.",
      "• No Spam or Scraping: Commercial spam, phishing, automated bot interaction, unauthorized data harvesting, or scraping of user profiles and candidate databases is forbidden.",
    ],
  },
  {
    id: "5",
    title: "5. RESPONSIBLE AI USAGE",
    content: [
      `Cocpit incorporates advanced AI tools (including Google Gemini) for resume parsing, job match scoring, career trajectory analysis, and job description creation.`,
    ],
    bullets: [
      "• Human Judgment in Hiring: AI match scores and career insights are advisory tools. Employers and recruiters must exercise independent human review when evaluating candidates.",
      "• No AI Manipulation: Do not attempt to reverse-engineer, prompt-inject, or manipulate AI scoring algorithms through deceptive keyword stuffing or hidden text in resumes.",
    ],
  },
  {
    id: "6",
    title: "6. THREE-STRIKE DISCIPLINARY FRAMEWORK",
    content: [
      `Cocpit enforces a progressive disciplinary model to protect community integrity:`,
    ],
    subsections: [
      {
        sub: "Level 1 Violations (Toxic Conduct, Harassment, Spam):",
        text: "Enforces a 3-strike ladder: (a) First Report: Written warning & content removal; (b) Second Report: Mandatory 30-day account suspension; (c) Third Report: Permanent account termination.",
      },
      {
        sub: "Level 2 Violations (Recruitment Scams, Credential Fraud):",
        text: "Immediate content removal, temporary account suspension, or permanent termination depending on deception severity.",
      },
      {
        sub: "Level 3 Violations (Illegal Activity, CSAM, Extremism):",
        text: "Immediate permanent account termination without prior warning and referral to law enforcement authorities.",
      },
    ],
  },
  {
    id: "7",
    title: "7. REPORTING & GRIEVANCE ESCALATION",
    content: [
      `If you encounter content or conduct that violates these guidelines, report it through the in-app reporting button or email our safety team.`,
      `Grievance Officer: Yash Oswal`,
      `Safety Email: grievance@cocpit.com / yashoswal@cocpitin.org`,
      `All reports are acknowledged within 24 hours and investigated thoroughly.`,
    ],
  },
];

export default function CommunityGuidelinesPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#FFECE6] font-sans antialiased">
      {/* Top Header Navigation */}
      <div className="w-full border-b border-[#2C2C33] bg-[#030303]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[832px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/home"
            className="flex items-center gap-2 text-xs font-medium text-[#B8ADA8] hover:text-[#FFECE6] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L4 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          <span className="text-xs uppercase tracking-widest text-[#726B67] font-semibold">
            Community Guidelines
          </span>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="max-w-[832px] mx-auto px-6 pt-12 md:pt-16 pb-20 flex flex-col gap-10">
        {/* Document Header Title Card */}
        <div className="flex flex-col gap-4 border-b border-[#2C2C33] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C24] border border-[#2C2C33] text-[11px] font-semibold tracking-wider uppercase text-[#EC6229] w-fit">
            COCPIT COMMUNITY SAFETY & STANDARDS
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FFECE6]">
            Community Guidelines
          </h1>

          <p className="text-xs text-[#726B67] tracking-wide">
            Last Updated & Effective Date: <span className="text-[#B8ADA8]">September 2026</span>
          </p>
        </div>

        {/* Section List */}
        <div className="flex flex-col gap-10">
          {guidelinesSections.map((sec) => (
            <section
              key={sec.id}
              className="flex flex-col gap-4 border-b border-[#2C2C33]/60 pb-8 transition-colors"
            >
              <h2 className="text-lg md:text-xl font-medium text-[#FFECE6] tracking-tight">
                {sec.title}
              </h2>

              {sec.content &&
                sec.content.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-sm md:text-base leading-relaxed text-[#B8ADA8] font-normal"
                  >
                    {p}
                  </p>
                ))}

              {sec.subsections && (
                <div className="flex flex-col gap-3 pt-1">
                  {sec.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1">
                      <span className="text-sm md:text-base font-medium text-[#FFECE6]">
                        {sub.sub}
                      </span>
                      <p className="text-sm md:text-base leading-relaxed text-[#B8ADA8]">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {sec.bullets && (
                <div className="flex flex-col gap-2 pl-2 pt-2">
                  {sec.bullets.map((b, bIdx) => (
                    <p
                      key={bIdx}
                      className="text-xs sm:text-sm leading-relaxed text-[#B8ADA8] bg-[#0E0E14] p-3 rounded-lg border border-[#2C2C33]/50 font-mono"
                    >
                      {b}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}