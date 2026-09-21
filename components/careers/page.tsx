"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/home/Footer";
import ApplyPage from "@/components/careers/ApplyPage";

type JobRole = {
  id: string;
  title: string;
  meta: string;
  overview: string;
  openRoles?: string[];
  whatYoullDo: string[];
  whatWereLookingFor: string[];
};

const roles: JobRole[] = [
  {
    id: "marketing-intern",
    title: "Marketing Intern",
    meta: "Kolhapur, Maharashtra (On-site) · Internship",
    overview:
      "We're growing fast and looking for creative, driven, and passionate interns to join our Marketing Team.",
    openRoles: [
      "Content Strategist Intern",
      "Content Writer / Creator Intern",
      "Social Media Marketing Intern",
    ],
    whatYoullDo: [
      "Create engaging content for social media, campaigns, and branding",
      "Develop creative ideas and storytelling strategies",
      "Understand audience behavior and build meaningful engagement",
      "Collaborate with the team to grow Cocpit's digital presence",
      "Take ownership of projects and contribute fresh ideas",
    ],
    whatWereLookingFor: [
      "Creative thinkers with strong communication skills",
      "Passion for content, branding, and digital marketing",
      "Self-driven individuals who enjoy building from scratch",
      "Basic understanding of social media trends and audience engagement",
    ],
  },
  {
    id: "uiux-design-intern",
    title: "UI/UX Design Intern",
    meta: "Kolhapur, Maharashtra (On-site) · Internship",
    overview:
      "We're looking for a curious, detail-oriented design intern to help shape how Cocpit's products look, feel, and function.",
    whatYoullDo: [
      "Design intuitive user flows and interfaces for web and product screens",
      "Create wireframes, mockups, and prototypes in Figma",
      "Collaborate with engineering to ensure designs are implemented faithfully",
      "Run lightweight usability reviews and iterate on feedback",
      "Contribute to and help maintain our design system",
    ],
    whatWereLookingFor: [
      "A strong eye for visual and interaction design",
      "Familiarity with Figma or similar design tools",
      "Understanding of basic UX principles and user-centered design",
      "Self-driven individuals comfortable working with ambiguity",
    ],
  },
  {
    id: "manual-testing-intern",
    title: "Manual Testing Intern",
    meta: "Kolhapur, Maharashtra (On-site) · Internship",
    overview:
      "We're looking for a meticulous, curious tester to help us ship reliable, high-quality products.",
    whatYoullDo: [
      "Write and execute test cases across web and product features",
      "Identify, document, and track bugs through to resolution",
      "Perform regression testing ahead of releases",
      "Collaborate closely with engineering to reproduce and verify fixes",
      "Help build out our QA processes and checklists",
    ],
    whatWereLookingFor: [
      "Strong attention to detail and a methodical mindset",
      "Basic understanding of software testing concepts",
      "Clear, precise written communication for bug reports",
      "Self-driven individuals who enjoy finding what's broken",
    ],
  },
  {
    id: "ai-ml-developer",
    title: "AI / ML Developer",
    meta: "Kolhapur, Maharashtra (On-site) · Internship",
    overview:
      "We're looking for an AI/ML developer to help build the intelligent systems powering Cocpit's products.",
    whatYoullDo: [
      "Design, train, and evaluate machine learning models",
      "Build data pipelines for training and inference",
      "Collaborate with product and engineering to ship ML-powered features",
      "Monitor and improve model performance in production",
      "Stay current with research and apply it pragmatically",
    ],
    whatWereLookingFor: [
      "Solid foundations in machine learning and statistics",
      "Experience with Python and common ML frameworks",
      "Ability to reason about trade-offs between accuracy, latency, and cost",
      "Self-driven individuals comfortable going from ambiguous problem to shipped feature",
    ],
  },
  {
    id: "hr-manager",
    title: "HR Manager",
    meta: "Kolhapur, Maharashtra (On-site) · Internship",
    overview:
      "We're looking for an HR Manager to help build the people foundation of a fast-growing team.",
    whatYoullDo: [
      "Own end-to-end recruiting and onboarding",
      "Develop policies, processes, and culture practices as we scale",
      "Support managers on performance, growth, and team structure",
      "Handle day-to-day people operations and compliance",
      "Champion a healthy, high-trust work environment",
    ],
    whatWereLookingFor: [
      "Experience in HR, people operations, or recruiting",
      "Strong interpersonal and organizational skills",
      "Comfort building processes from scratch",
      "A genuine interest in helping people do their best work",
    ],
  },
];

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [applyingRole, setApplyingRole] = useState<string | null>(null);

  function toggleExpanded(id: string) {
    setExpandedId((current) => (current === id ? null : id));
  }

  if (applyingRole) {
    return <ApplyPage roleTitle={applyingRole} onCancel={() => setApplyingRole(null)} />;
  }

  return (
    <main className="bg-[#030303] font-sans text-[#FFECE6] min-h-screen">
      <div className="mx-auto flex max-w-[832px] flex-col items-start gap-6 px-6 pt-[60px] pb-0">
        {/* Header */}
        <section className="flex w-full flex-col items-center gap-3 text-center pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[561px] md:w-[561px] text-[36px] sm:text-[48px] font-medium leading-[42px] sm:leading-[52px] tracking-[0px] text-[#FFECE6] font-sans"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Join The Execution Layer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full max-w-[450px] md:w-[450px] font-sans text-[14px] font-light leading-[18px] tracking-[0px] text-center text-[#B8ADA8]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Help build the intelligent infrastructure powering Cocpit.
          </motion.p>
        </section>

        {/* Job list */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="flex w-full flex-col gap-3 pt-0"
        >
          {roles.map((role) => (
            <JobCard
              key={role.id}
              role={role}
              expanded={expandedId === role.id}
              onToggle={() => toggleExpanded(role.id)}
              onApply={() => setApplyingRole(role.title)}
            />
          ))}
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}

function JobCard({
  role,
  expanded,
  onToggle,
  onApply,
}: {
  role: JobRole;
  expanded: boolean;
  onToggle: () => void;
  onApply: () => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className="w-full rounded-xl border border-[#2C2C33] bg-[#0B0B10]/30 transition-all hover:border-[#3C3C48]"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full flex-col items-start gap-1 px-6 py-5 text-left cursor-pointer"
      >
        <span
          className="w-full max-w-[784px] h-[31px] flex items-center text-[24px] font-medium leading-[130%] tracking-[0px] text-[#FFECE6] font-sans"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {role.title}
        </span>
        <span
          className="w-full max-w-[509px] h-[16px] flex items-center text-[12px] font-normal leading-[130%] tracking-[0px] text-[#B8ADA8] font-sans"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {role.meta}
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col items-start gap-4 border-t border-[#2C2C33] px-6 pt-[24px] pb-6 bg-[#030303]/60 rounded-b-xl">
              <div
                className="w-full max-w-[782px] space-y-4 font-sans text-[14px] font-normal leading-[130%] tracking-[0px] text-[#FFECE6]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <p>
                  <span className="font-medium text-[#FFECE6]">Role Overview: </span>
                  {role.overview}
                </p>

                {role.openRoles && (
                  <div>
                    <p className="font-medium text-[#FFECE6]">Open Roles:</p>
                    <ul className="mt-1.5 list-inside list-disc space-y-1 text-[#FFECE6]">
                      {role.openRoles.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <p className="font-medium text-[#FFECE6]">What You&apos;ll Do:</p>
                  <ul className="mt-1.5 list-inside list-disc space-y-1 text-[#FFECE6]">
                    {role.whatYoullDo.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-[#FFECE6]">What We&apos;re Looking For:</p>
                  <ul className="mt-1.5 list-inside list-disc space-y-1 text-[#FFECE6]">
                    {role.whatWereLookingFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={onApply}
                className="mt-2 flex items-center justify-center gap-2.5 rounded-full bg-[#EC6229] px-6 py-2.5 text-sm font-medium leading-6 text-[#FFECE6] transition-opacity hover:opacity-90 cursor-pointer shadow-[0_0_16px_rgba(236,98,41,0.3)]"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
