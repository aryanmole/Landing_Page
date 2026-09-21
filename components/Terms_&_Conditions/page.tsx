"use client";

import Link from "next/link";
import Footer from "@/components/home/Footer";

const sections = [
  {
    id: "1",
    title: "1. ACCEPTANCE OF TERMS",
    content: [
      `Welcome to Cocpit! These Terms of Use ("Terms") constitute a legally binding agreement between you (whether an individual user or representing an organization) and Cocpit ("Company," "we," "our," or "us"). By accessing or using the Cocpit web platform, mobile applications (iOS/Android), and associated services (collectively, the "Platform"), you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Platform.`,
      `These Terms, together with the Cocpit’s Privacy Policy, Cookie Policy, Community Guidelines and any other policies or rules expressly incorporated by reference, govern your access to and use of the Platform.`,
    ],
  },
  {
    id: "2",
    title: "2. PLATFORM OVERVIEW",
    content: [
      `The Platform is a technology platform that facilitates professional networking, recruitment-related activities, job discovery, professional communication, community participation and AI-powered tools. Cocpit does not guarantee that any particular user, recruiter, company, job opportunity, candidate, connection or other information available through the Platform is accurate, authentic, legitimate or suitable for any particular purpose unless expressly stated otherwise.`,
    ],
  },
  {
    id: "3",
    title: "3. ELIGIBILITY & REGISTRATION",
    subsections: [
      {
        sub: "3.1. Eligibility:",
        text: "You must be at least 16 years of age to create an account and use the Platform. By creating an account, you warrant that you possess the legal capacity to enter into a binding contract under applicable laws in India, the UAE, or your resident jurisdiction.",
      },
      {
        sub: "3.2. Individual Accounts:",
        text: "Registration requires authentication via email (using an OTP), Google, or Apple login. You agree to provide true, accurate and complete information, including your professional experience, education, skills, qualifications and resume. Except where expressly stated as verified by Cocpit, all profile information is self-declared by users. Cocpit does not independently verify your educational qualifications, employment history, professional experience, certifications or other credentials and users remain solely responsible for the accuracy of such information. You are solely responsible for maintaining the confidentiality of your login credentials.",
      },
      {
        sub: "3.3. Organization (Company) Accounts:",
        text: "If you create an account on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms. Company accounts are subject to mandatory verification prior to accessing designated organization features. Verification may require submission of valid company or business registration documents and such other supporting information as Cocpit may reasonably request. In addition, users creating company pages or posting employment opportunities may be required to complete identity verification through submission of government-issued identification documents as prescribed by Cocpit.",
      },
      {
        sub: "3.4. Recruiter Accounts:",
        text: "Users accessing the Platform for recruitment or hiring-related activities, including posting jobs, identifying candidates or communicating with potential candidates, must provide accurate information regarding themselves and the relevant organization. Recruiters shall not misrepresent job opportunities, employment terms, organizations or hiring requirements.",
      },
      {
        sub: "3.5. Verification of Job Posting Privileges:",
        text: "Access to recruitment-related features, including creation of company pages, posting employment opportunities and managing organization recruitment activities, may be restricted until Cocpit's applicable verification requirements have been successfully completed. Cocpit reserves the right to refuse, suspend or revoke such privileges where verification cannot be completed or where submitted information appears inaccurate, misleading or fraudulent.",
      },
      {
        sub: "3.6. One Account:",
        text: "Unless otherwise permitted by Cocpit, you shall not create multiple accounts for the purpose of evading restrictions, misleading other users or circumventing any suspension or termination.",
      },
    ],
  },
  {
    id: "4",
    title: "4. PAYMENTS, BILLING, AND SUBSCRIPTIONS",
    subsections: [
      {
        sub: "4.1. Free and Premium Tiers:",
        text: "Cocpit may offer both free and premium/paid account tiers for individuals and organizations (e.g., recruiter subscriptions, premium memberships, boosted job listings). Features and limitations of each tier will be explicitly detailed at the point of sale.",
      },
      {
        sub: "4.2. Billing & Auto-Renewal:",
        text: "Where you subscribe to a paid service on a recurring basis, your subscription will automatically renew at the end of the billing cycle unless canceled prior to the renewal date. You authorize us (or our designated third-party payment processors) to charge the applicable fees to your provided payment method.",
      },
      {
        sub: "4.3. Cancellations & Refunds:",
        text: "You may cancel your subscription at any time through your account settings or applicable app store subscriptions. Unless explicitly required by applicable law, all fees paid are non-refundable, and we do not provide prorated refunds for mid-cycle cancellations.",
      },
    ],
  },
  {
    id: "5",
    title: "5. USER CONDUCT & ACCEPTABLE USE",
    content: [
      `You agree to use the Platform lawfully, professionally and responsibly and shall comply with all applicable laws, these Terms and any applicable Platform policies. You shall not:`,
    ],
    bullets: [
      "(a) provide false, inaccurate, misleading or fraudulent information;",
      "(b) impersonate another person or organisation or falsely represent your affiliation with any person or organisation;",
      "(c) misrepresent your professional experience, education, qualifications, skills, employment history or other credentials;",
      "(d) create or publish fraudulent, misleading, discriminatory, unlawful or deceptive job opportunities or recruitment content;",
      "(e) harass, threaten, intimidate, stalk, abuse or discriminate against any person;",
      "(f) upload, publish or transmit content that is unlawful, defamatory, obscene, sexually explicit, hateful, invasive of privacy or otherwise objectionable;",
      "(g) use the Platform to send spam, unsolicited commercial communications, phishing messages or fraudulent communications;",
      "(h) scrape, crawl, harvest, copy, extract or systematically collect information from the Platform without Cocpit's prior written permission;",
      "(i) use bots, scripts, automated tools or other methods to access or interact with the Platform in an unauthorised manner;",
      "(j) introduce malware, viruses, malicious code or other harmful material;",
      "(k) attempt to gain unauthorised access to the Platform, another user's account or any systems connected to the Platform;",
      "(l) reverse engineer, decompile, disassemble or attempt to derive the source code of the Platform, except to the extent expressly permitted by applicable law;",
      "(m) use the Platform to build, train, develop or operate a competing product or service using Platform data without Cocpit's prior written consent;",
      "(n) misuse, disclose, sell, distribute or otherwise exploit information obtained from other users without appropriate authorisation; or",
      "(o) otherwise interfere with or disrupt the operation, security or integrity of the Platform.",
    ],
  },
  {
    id: "6",
    title: "6. PLATFORM USAGE",
    content: [
      `The Platform may allow users to create professional profiles, discover and connect with other users, follow companies or individuals, view and interact with professional content, search for jobs and opportunities, participate in communities, communicate with other users and access other features made available by us from time to time.`,
      `You understand that information available on the Platform may be provided by users or third parties. We do not guarantee the accuracy, completeness, timeliness or reliability of user-generated information. Your access to certain Platform features may depend on your account type, verification status, subscription plan, location, device, technical requirements or other conditions determined by us. We may modify, suspend, restrict or discontinue any feature of the Platform at any time.`,
    ],
  },
  {
    id: "7",
    title: "7. JOB POSTING AND RECRUITMENT",
    content: [
      `Recruiters and organisations may use the Platform to create and publish job postings and recruitment opportunities. Recruiters and organisations are solely responsible for ensuring that all job postings and recruitment-related information are accurate, complete and up to date. Recruiters and organisations shall ensure that their job postings and recruitment activities comply with applicable employment, labour, anti-discrimination, data protection and other applicable laws.`,
      `Recruiters and organizations acknowledge that Cocpit facilitates the publication and management of employment opportunities but does not verify the legitimacy, accuracy or completeness of employment opportunities, recruiter credentials or candidate qualifications. Candidates may withdraw submitted applications through the Platform, and recruiters may withdraw employment offers prior to acceptance. Unless withdrawn earlier, employment offers may automatically expire after the response period determined by the Platform.`,
      `Cocpit does not guarantee that any job posting is legitimate, that any recruiter or organisation will complete a hiring process or that any candidate will be hired. Users are responsible for independently verifying the identity, legitimacy and terms of any recruiter, organisation, job opportunity or employment opportunity before sharing sensitive information or entering into any arrangement.`,
      `Recruiters may download or export applicant resumes only through functionality expressly made available by Cocpit. No other applicant information or Platform data may be downloaded, extracted, copied or retained outside the Platform except as expressly permitted by applicable law or these Terms.`,
      `Where AI tools are used to generate or assist in creating job descriptions, the relevant recruiter or organisation remains solely responsible for reviewing and approving the final job description before publication.`,
    ],
  },
  {
    id: "8",
    title: "8. COMMUNITY PARTICIPATION",
    content: [
      `The Platform may allow users to create, publish, share and interact with posts, articles, polls, comments, media, discussions and other community content. You are solely responsible for the content you submit or publish and must ensure that such content is lawful, accurate and does not violate the rights of any person or applicable law. We do not endorse or guarantee the accuracy of user-generated content.`,
      `Cocpit may, in its discretion, review, moderate, restrict, remove or disable access to any content that it believes violates these Terms, applicable law or any Platform policy, or that may create legal, security, safety or reputational risk for Cocpit or its users.`,
    ],
  },
  {
    id: "9",
    title: "9. CONTENT & INTELLECTUAL PROPERTY",
    subsections: [
      {
        sub: "9.1. Cocpit IP:",
        text: "The Platform, including its software, technology, design, layout, trademarks, logos, branding, text, graphics, interfaces, databases and other materials provided by us, are owned by or licensed to Cocpit and are protected by applicable intellectual property laws.",
      },
      {
        sub: "9.2. Limited Licence:",
        text: "Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable licence to access and use the Platform for its intended purposes.",
      },
      {
        sub: "9.3. User Content:",
        text: "You retain ownership of content that you create and upload to the Platform.",
      },
      {
        sub: "9.4. Licence to Cocpit:",
        text: "By submitting content to the Platform, you grant Cocpit a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, process, adapt, format, display, distribute and otherwise use such content to operate, provide, maintain, improve and promote the Platform, subject to your account settings and the Cocpit’s Privacy Policy.",
      },
      {
        sub: "9.5. No Transfer of Ownership:",
        text: "Except for the licence expressly granted under these Terms, you retain ownership of your User Content and Cocpit does not acquire ownership of your User Content.",
      },
      {
        sub: "9.6. Feedback:",
        text: "Any feedback, suggestions or recommendations provided by you regarding the Platform may be used by Cocpit without restriction or compensation.",
      },
    ],
  },
  {
    id: "10",
    title: "10. AI SERVICES AND AUTOMATED FEATURES",
    content: [
      `Cocpit integrates advanced Artificial Intelligence (AI), including third-party models such as Google Gemini, to enhance the user and recruitment experience. By using the Platform, you acknowledge and agree to the following:`,
    ],
    subsections: [
      {
        sub: "10.1. AI-Assisted Profile Creation & Resume Parsing:",
        text: "The Platform may use AI tools to assist Users in creating, structuring, and enhancing their profiles and to parse and extract relevant information from resumes or uploaded documents for improved presentation and matching.",
      },
      {
        sub: "10.2. AI-Generated Job Match Score:",
        text: "The Platform may generate an AI-based job match score for Users by analysing profile data, skills, experience, and job requirements to indicate potential suitability for specific job opportunities.",
      },
      {
        sub: "10.3. Career Trajectory & Skill-Gap Analysis:",
        text: "The Platform may provide AI-driven insights relating to a User’s potential career progression, including identification of skill gaps and suggested areas for improvement based on industry trends and job market data.",
      },
      {
        sub: "10.4. Behavioural Analytics & Recommendation Algorithms:",
        text: "The Platform may use behavioural data, interaction history, and usage patterns to generate personalised recommendations, including job listings, learning resources, and career opportunities.",
      },
      {
        sub: "10.5. AI-Assisted Content Generation:",
        text: "The Platform may offer AI tools that assist Users in generating or improving written content, including but not limited to resumes, cover letters, job applications, and professional summaries.",
      },
      {
        sub: "10.6. AI-Generated Job Description Creation:",
        text: "The Platform may provide employers with AI-assisted tools to generate, refine, or optimise job descriptions based on inputs provided by the employer and industry standards.",
      },
      {
        sub: "10.7. Human Review & Recruiter Responsibility:",
        text: "All AI-generated outputs are intended to assist Users and recruiters and do not replace human judgment. Employers and recruiters remain solely responsible for hiring decisions, evaluation of candidates, and verification of all information.",
      },
      {
        sub: "10.8. AI Limitations & Disclaimer:",
        text: "The Platform does not guarantee the accuracy, completeness, or suitability of any AI-generated output. AI-generated content is provided on an 'as is' basis and may contain errors, omissions, or inaccuracies. Users are advised to independently verify all outputs before relying on them.",
      },
      {
        sub: "10.9. Mandatory AI Recruitment Analysis:",
        text: "Where a User applies for employment opportunities through the Platform, Cocpit automatically generates AI-assisted recruitment analyses, including job match assessments and related recruitment insights, as an integral component of the recruitment workflow. Such processing cannot be disabled or opted out of for individual applications. By submitting an application through the Platform, the applicant acknowledges and consents to such automated processing for the purpose of facilitating recruitment activities.",
      },
    ],
  },
  {
    id: "11",
    title: "11. THIRD-PARTY SERVICES DISCLAIMER",
    content: [
      `The Platform integrates with third-party services and APIs (such as Twilio, Cloudinary, Google Places, Resend, and payment gateways). Cocpit is not responsible for the availability, accuracy, or reliability of these third-party services. Any disruption in these services that affects the Platform is beyond our control. Cocpit disclaims all liability for errors or breaches originating from third-party processors.`,
    ],
  },
  {
    id: "12",
    title: "12. DATA PROTECTION & PRIVACY",
    content: [
      `We process your data in compliance with the Indian Digital Personal Data Protection Act (DPDP Act, 2023) and the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL). Detailed information on how we collect, process, share, and delete your data is available in our separate Privacy Policy.`,
      `Cocpit may process user activity, behavioral interactions, searches, follows, content engagement, resume information, profile information and recruitment-related information for the purposes of generating personalized recommendations, AI-assisted recruitment analysis, behavioral insights, content recommendations, platform analytics and improving Platform functionality. Further details regarding such processing, retention periods and third-party processors are available in the Privacy Policy.`,
    ],
  },
  {
    id: "13",
    title: "13. DISCLAIMERS, RELEASE & LIMITATION OF LIABILITY",
    subsections: [
      {
        sub: "13.1. 'As Is' Basis:",
        text: "The Platform is provided on an 'AS IS' and 'AS AVAILABLE' basis without warranties of any kind, whether express or implied.",
      },
      {
        sub: "13.2. Employment Outcomes:",
        text: "Cocpit does not guarantee employment, the accuracy of recruiter profiles, or the legitimacy of candidates. We are not a party to any employment contract formed between a user and an organization.",
      },
      {
        sub: "13.3. User-to-User Disputes & Release:",
        text: "Cocpit is a platform that facilitates connections. We are not responsible for the conduct of any user, whether online or offline. In the event of a dispute between you and one or more users (including candidates, recruiters, or organizations), you release Cocpit from all claims, demands, and damages arising out of or connected with such disputes.",
      },
      {
        sub: "13.4. Limitation of Liability:",
        text: "In no event shall Cocpit, its directors, employees, or affiliates be liable for any indirect, incidental, special, or consequential damages arising out of your use of the Platform.",
      },
    ],
  },
  {
    id: "14",
    title: "14. INDEMNIFICATION",
    content: [
      `You agree to indemnify, defend, and hold harmless Cocpit, its affiliates, and its officers from any claims, damages, liabilities, and expenses (including legal fees) arising out of your use of the Platform, your violation of these Terms, your posting of discriminatory or illegal job listings, your fraudulent, unlawful or negligent conduct, or your infringement of any third-party intellectual property.`,
    ],
  },
  {
    id: "15",
    title: "15. SERVICE INTERRUPTIONS & FORCE MAJEURE",
    content: [
      `We do not guarantee that the Platform will be available 100% of the time. We are not liable for any downtime, data loss, or service interruptions caused by maintenance, server outages, or events beyond our reasonable control (Force Majeure).`,
    ],
  },
  {
    id: "16",
    title: "16. ACCOUNT RESTRICTION, SUSPENSION & TERMINATION",
    subsections: [
      {
        sub: "16.1. Enforcement Rights:",
        text: "Cocpit reserves the right, at its sole discretion and without limiting any other rights available under these Terms or applicable law, to investigate any suspected violation of these Terms, the Community Guidelines or applicable law and to remove content, restrict Platform functionality, suspend, disable or permanently terminate any account where it reasonably believes that a user has engaged in prohibited conduct, submitted fraudulent information, misused the Platform or otherwise compromised the safety, integrity or security of the Platform or its users.",
      },
      {
        sub: "16.2. Level 1 Violations (Three-Strike Enforcement):",
        text: "Level 1 Violations encompass hate speech, harassment, bullying, toxic conduct, doxxing, spam, inauthentic behaviour, and misleading business claims. Cocpit strictly enforces a progressive three-strike disciplinary ladder for such offenses: a) First Report: Formal written warning and immediate content removal; b) Second Report (Same Account): Mandatory thirty (30) day account suspension; and c) Third Report (Same Account): Permanent account termination and credential ban.",
      },
      {
        sub: "16.3. Level 2 Violations (Professional Misconduct):",
        text: "Level 2 Violations include fake job postings, recruitment scams, impersonation, credential misrepresentation, unauthorized data disclosure, and fraudulent pay-for-employment schemes. Upon establishing a Level 2 Violation, Cocpit may immediately remove the offending content, issue a formal warning, impose a temporary account suspension, or permanently terminate the account depending on the severity of the deception.",
      },
      {
        sub: "16.4. Level 3 Violations (High-Risk & Illegal Content):",
        text: "Level 3 Violations include child sexual abuse material (CSAM), explicit adult content, terrorism or extremist promotion, unlawful activities, non-consensual intimate imagery, graphic violence, and severe copyright or trademark infringement. Such violations shall result in immediate content removal, permanent account termination without prior notice, and referral to competent law enforcement or regulatory authorities.",
      },
      {
        sub: "16.5. Administrative Reviews & Mass Reports:",
        text: "Cocpit may place reported accounts under review or temporary restriction for up to forty-eight (48) hours while investigating prohibited conduct. Accounts subject to mass reporting or suspected coordinated abuse will be immediately suspended pending a formal administrative review. If reviewed conduct is assessed as minor, Cocpit will restore content and access; if assessed as a major violation, Cocpit will permanently ban the account and block registration credentials.",
      },
      {
        sub: "16.6. Circumvention & Fraudulent Accounts:",
        text: "Users shall not create new accounts to bypass any restriction, suspension, or termination. Cocpit reserves the right to block or reject any account associated with previously terminated users, including restricting the use of the same email address, mobile number, or device identifiers.",
      },
      {
        sub: "16.7. User Reporting & Appeals:",
        text: "Submission of a violation report by a user does not guarantee content removal or account suspension. A suspended or terminated user may submit an appeal through Cocpit's designated grievance mechanism. Cocpit will review the appeal at its sole discretion, and its decision following such review shall be final and binding.",
      },
      {
        sub: "16.8. Survival of Enforcement Rights:",
        text: "Any enforcement action taken under this Clause shall be without prejudice to Cocpit's right to pursue other legal or equitable remedies, including reporting unlawful conduct to competent authorities and seeking recovery for any financial or reputational losses suffered.",
      },
    ],
  },
  {
    id: "17",
    title: "17. ACCOUNT DELETION",
    subsections: [
      {
        sub: "17.1.",
        text: "Users may request deletion of their account through the Platform. Upon such request, Cocpit may deactivate the account and retain it in a recoverable state for a period of forty (40) days, during which the user may restore access in accordance with Cocpit's applicable procedures. If the account is not restored within such period, it shall be permanently deleted or anonymised, subject to applicable law and the Privacy Policy.",
      },
      {
        sub: "17.2.",
        text: "Upon permanent deletion, the user shall lose access to the account and all associated Platform features. Certain content or information, including messages previously exchanged with other users, may continue to remain visible to the relevant recipients, and the deleted account may be displayed as 'User Not Found' or a similar identifier where necessary to preserve the integrity of conversations and Platform records.",
      },
      {
        sub: "17.3.",
        text: "Notwithstanding the foregoing, Cocpit may retain, archive or process certain information after account deletion where required or permitted by applicable law, for compliance with legal obligations, fraud prevention, dispute resolution, enforcement of these Terms, protection of the Platform, or the establishment, exercise or defence of legal claims, all in accordance with the Privacy Policy.",
      },
    ],
  },
  {
    id: "18",
    title: "18. APP STORE & GOOGLE PLAY SPECIFIC PROVISIONS",
    content: [
      `If you download the Platform from the Apple App Store or Google Play Store, you acknowledge that these Terms are concluded between you and Cocpit only, and not with Apple Inc. or Google LLC. Cocpit, not Apple or Google, is solely responsible for the Platform and its content. You acknowledge that Apple and Google have no obligation whatsoever to furnish any maintenance and support services with respect to the Platform. Apple and Google, and their subsidiaries, are third-party beneficiaries of these Terms, and upon your acceptance, they will have the right to enforce these Terms against you.`,
    ],
  },
  {
    id: "19",
    title: "19. GRIEVANCE REDRESSAL (INDIA COMPLIANCE)",
    content: [
      `In compliance with the Indian Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, Cocpit has appointed a Grievance Officer. If you have any complaints regarding content, privacy, or safety, you may contact the Grievance Officer at:`,
      `Email: grievance@cocpit.com`,
      `Timeframe: Complaints will be acknowledged within 24 hours and resolved within 15 days of receipt.`,
    ],
  },
  {
    id: "20",
    title: "20. GOVERNING LAW & JURISDICTION",
    content: [
      `For Users Residing in India: These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.`,
      `For Users Residing in the UAE or Middle East: These Terms shall be governed by the federal laws of the United Arab Emirates as applicable in the Emirate of Dubai. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai.`,
      `For Users Residing Elsewhere: Unless mandated by local consumer protection laws, the governing law shall default to the jurisdiction of India.`,
      `Nothing in these Terms shall limit any mandatory rights or remedies available to you under the laws applicable to your place of residence.`,
    ],
  },
  {
    id: "21",
    title: "21. AMENDMENTS",
    content: [
      `We reserve the right to modify these Terms at any time. If we make material changes, we will notify you via email or a prominent notice on the Platform. Your continued use of the Platform after changes take effect constitutes your acceptance of the revised Terms.`,
    ],
  },
];

export default function TermsAndConditionsPage() {
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
            Legal Document
          </span>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="max-w-[832px] mx-auto px-6 pt-12 md:pt-16 pb-20 flex flex-col gap-10">
        {/* Document Header Title Card */}
        <div className="flex flex-col gap-4 border-b border-[#2C2C33] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C24] border border-[#2C2C33] text-[11px] font-semibold tracking-wider uppercase text-[#EC6229] w-fit">
            COCPIT LEGAL & COMPLIANCE
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FFECE6]">
            Terms of Use
          </h1>

          <p className="text-xs text-[#726B67] tracking-wide">
            Last Updated & Effective Date: <span className="text-[#B8ADA8]">September 2026</span>
          </p>
        </div>

        {/* Section List */}
        <div className="flex flex-col gap-10">
          {sections.map((sec) => (
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