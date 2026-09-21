"use client";

import Link from "next/link";
import Footer from "@/components/home/Footer";

const privacySections = [
  {
    id: "1",
    title: "1. INTRODUCTION",
    content: [
      `Cocpit (“Cocpit”, “Company”, “we”, “our” or “us”), operates the Cocpit website, mobile applications and related services (collectively, the “Platform”). We provide Privacy Policy (“Policy”) to explain how we collect, receive, use, process, share, store, disclose, protect, and otherwise handle personal data and other information in connection with your access to and use of the Platform.`,
      `By accessing or using the Platform, you consent to the practices described in this Privacy Policy. This Privacy Policy should be read together with the Cocpit Terms of Use and other applicable policies made available on the Platform.`,
      `In compliance with applicable data protection laws, including Section 5 of the Digital Personal Data Protection Act, 2023, you have the right to access this Privacy Policy and any associated consent notices in English or any of the twenty-two (22) languages specified in the Eighth Schedule to the Constitution of India. Language preferences can be selected via the Platform settings or requested by contacting our Grievance Officer.`,
      `Note: This Policy applies to individual users, recruiters, company representatives, organisations, institutes and other persons who access or use the Platform.`,
    ],
  },
  {
    id: "2",
    title: "2. DATA CONTROLLER / DATA FIDUCIARY",
    content: [
      `Cocpit is responsible for determining the purposes and means of processing personal data collected through the Platform, except where otherwise stated in this Privacy Policy or required by applicable law.`,
      `Where an organisation, recruiter or company uses the Platform to process personal data relating to candidates, employees or other individuals, such organisation may independently determine the purposes for which such information is processed and may have separate responsibilities under applicable data protection laws.`,
    ],
  },
  {
    id: "3",
    title: "3. INFORMATION WE COLLECT",
    subsections: [
      {
        sub: "A. Profile and Authentication Information:",
        text: "Upon creation of your profile we collect: Identification Information (Name, age, country, state, username, profile photograph); Contact Information (Email address, mobile number); Professional Information (Qualification, Job title, position, company name, number of experience, industry). Mandatory information will be marked as such at the moment of collection. Where you register using email and password, Cocpit may generate and process a one time password (“OTP”) for account verification. Your password is hashed before being stored. Where you use Google or Apple authentication, we receive information necessary to authenticate your account.",
      },
      {
        sub: "B. Professional Profile Information:",
        text: "We shall derive professional information as per the resume/ CV uploaded by you, including your professional headline, biography, job title, current and previous employment, education, qualifications, skills, professional interests, work preferences, availability, location, profile photograph, cover image, resume, professional experience and career goals.",
      },
      {
        sub: "C. Resume and Uploaded Documents:",
        text: "Where you upload a resume, CV or other document, Cocpit may process the information contained in such document. Cocpit may use artificial intelligence (“AI”) tools to extract structured information from an uploaded resume and use such information to pre-fill relevant profile fields.",
      },
      {
        sub: "D. Company and Organisation Information:",
        text: "Where you create or manage a company, organisation or institute account, Cocpit may collect the organisation's name, industry, size, contact details, telephone number, logo, cover image, verification documents and other information required for account creation and administration.",
      },
      {
        sub: "E. Team and Access Information:",
        text: "Where you participate in an organisation account, we may process information relating to invitations, membership, assigned roles, permissions, role changes, member removal and other actions affecting access.",
      },
    ],
  },
  {
    id: "4",
    title: "4. JOBS AND RECRUITMENT",
    content: [
      `Where you post a job, apply for a job or otherwise use our recruitment functionality, we may process information relating to the job posting, job requirements, recruiter, organisation, applicant and application. Only users who have completed the applicable verification requirements may post jobs or create company pages on the Platform.`,
      `When you apply for a job, we process your name, email address, resume, cover note, professional profile information, education, experience, skills, location and other information submitted as part of your application.`,
      `At the time of application, we create and retain a snapshot of certain profile information associated with that application. Cocpit may process application information through AI systems for recruitment-related analysis and assessment.`,
    ],
  },
  {
    id: "5",
    title: "5. USE OF PERSONAL DATA",
    content: [
      `Cocpit may collect and process personal data for the purposes of providing, operating, maintaining and improving the Platform and its features. This includes managing user accounts, authenticating users, maintaining profiles, enabling professional networking, facilitating job postings and applications, providing messaging, delivering AI-powered features, verifying organisations, preventing fraud, and complying with legal obligations.`,
    ],
  },
  {
    id: "6",
    title: "6. ARTIFICIAL INTELLIGENCE AND AUTOMATED PROCESSING",
    content: [
      `Cocpit uses AI and machine learning technologies to provide certain features of the Platform. AI may be used for resume parsing, profile creation, job description generation, career trajectory analysis, skill-gap analysis, role-readiness analysis, resume-strength analysis, and recruitment matching.`,
      `Cocpit also uses AI to generate a Job Match Score for recruiters using the applicant’s resume and profile information. Cocpit may also generate a Career Trajectory Score for users. AI-assisted recruitment scoring is automatically generated as part of the application process.`,
      `Certain AI processing may be performed through third-party AI service providers, including Google Gemini or other providers used by Cocpit from time to time.`,
    ],
  },
  {
    id: "7",
    title: "7. BEHAVIOURAL PROFILING AND RECOMMENDATIONS",
    content: [
      `Cocpit may automatically analyse your activity on the Platform and generate inferred information regarding your interests, engagement and professional activity. Likes, views, searches, follows and interactions may be used to generate behavioural scores and personalized recommendations.`,
    ],
  },
  {
    id: "8",
    title: "8. USER-GENERATED CONTENT AND COMMUNICATIONS",
    content: [
      `Where you create, upload or share content through the Platform, including posts, articles, comments, polls, images, videos, company updates, or documents, Cocpit may process such content for providing Platform functionality, maintaining security, and enforcing applicable policies.`,
      `Cocpit may process messages and related information, including sender and recipient information, message content, attachments, timestamps and conversation details.`,
    ],
  },
  {
    id: "9",
    title: "9. ANALYTICS AND PLATFORM ACTIVITY",
    content: [
      `Cocpit may collect and process information relating to your interactions with profiles, content and the Platform, including profile views, search appearances, post impressions, engagement, resume views and downloads, job application activity and recruiter interactions.`,
    ],
  },
  {
    id: "10",
    title: "10. LOCATION INFORMATION",
    content: [
      `When you search for a location through the Platform, your search query may be transmitted to a third-party location service, including Google Places API, for the purpose of providing location suggestions.`,
    ],
  },
  {
    id: "11",
    title: "11. DEVICE AND TECHNICAL INFORMATION",
    content: [
      `When you access or use the Platform, Cocpit may collect your IP address, browser information, device type, operating system, device identifier, session information, authentication information, access timestamps and technical diagnostic metadata.`,
    ],
  },
  {
    id: "12",
    title: "12. SHARING OF PERSONAL DATA",
    content: [
      `Cocpit may share personal data with service providers and technology providers who assist Cocpit in operating, securing and improving the Platform (authentication, email delivery, SMS, AI services, cloud storage, location, push notifications, analytics).`,
      `Personal data may also be disclosed where required or permitted by applicable law, including to courts, law enforcement authorities, regulatory authorities, and legal advisers.`,
    ],
  },
  {
    id: "13",
    title: "13. THIRD-PARTY SERVICES",
    content: [
      `Cocpit integrates with third-party service providers, including: (a) Google Gemini – resume text, skills, work experience, target roles; (b) Twilio – phone numbers and OTP info; (c) Cloudinary – profile photos, resumes, and media; (d) Firebase FCM – push notification tokens; (e) Resend – transactional emails; and (f) New Relic – performance diagnostic metadata.`,
    ],
  },
  {
    id: "14",
    title: "14. INTERNATIONAL DATA TRANSFERS",
    content: [
      `Your personal data may be processed or stored in countries other than the country in which you reside. Where personal data is transferred internationally, Cocpit takes reasonable steps to comply with applicable legal requirements and implement appropriate safeguards.`,
    ],
  },
  {
    id: "15",
    title: "15. DATA RETENTION AND DELETION",
    content: [
      `Cocpit retains personal data for as long as reasonably necessary to fulfill collection purposes, provide the Platform, comply with legal obligations, and protect legal rights.`,
      `Where you request deletion of your account, Cocpit provides a 40-day restoration period. If un-restored after 40 days, the account is permanently deleted or anonymised.`,
    ],
  },
  {
    id: "16",
    title: "16. COOKIES AND SIMILAR TECHNOLOGIES",
    content: [
      `Cocpit uses cookies, tokens, local storage and similar technologies for authentication, security, session management, preferences, analytics, and performance.`,
    ],
  },
  {
    id: "17",
    title: "17. DATA SECURITY",
    content: [
      `Cocpit implements technical and organizational measures (password hashing, OTP protection, token rotation, SSL, access controls) intended to protect personal data against unauthorized access or loss.`,
    ],
  },
  {
    id: "18",
    title: "18. DATA PRINCIPAL / DATA SUBJECT RIGHTS",
    bullets: [
      "• Right to Access: Request a summary of your personal data processed and third parties shared with.",
      "• Right to Correction & Erasure: Request correction of inaccurate data or erasure when purposes are fulfilled.",
      "• Right to Withdraw Consent: Withdraw previously granted consent at any time.",
      "• Right to Nominate (India DPDP Act): Nominate an individual to exercise your rights as a Data Principal.",
      "• Right to Data Portability (UAE & Singapore): Receive a structured machine-readable copy of your personal data.",
      "• Right to Object to Automated Processing (UAE PDPL): Object to automated processing subject to statutory exceptions.",
      "• Right to Non-Discrimination: Exercise statutory privacy rights without retaliatory treatment.",
    ],
  },
  {
    id: "19",
    title: "19. CHILDREN'S PRIVACY",
    content: [
      `The Platform is intended for individuals who are at least 16 years of age. Cocpit does not knowingly permit individuals below 16 years of age to create an account or use the Platform.`,
    ],
  },
  {
    id: "20",
    title: "20. GRIEVANCE REDRESSAL",
    content: [
      `In compliance with the Indian Digital Personal Data Protection Act, 2023 (DPDP Act), Singapore PDPA, and global data protection standards, Cocpit has designated an official Grievance Officer / DPO:`,
      `Grievance Officer: Yash Oswal`,
      `Email: yashoswal@cocpitin.org`,
      `If dissatisfied with internal resolution, you possess the legal right to escalate complaints to the Data Protection Board of India (DPBI), UAE Data Protection Office / TDRA, Singapore PDPC, or your local supervisory authority.`,
    ],
  },
  {
    id: "21",
    title: "21. CHANGES TO THIS PRIVACY POLICY",
    content: [
      `Cocpit may modify or update this Privacy Policy from time to time. Material changes will be notified via the Platform or email where required by applicable law.`,
    ],
  },
  {
    id: "22",
    title: "22. CONTACT US",
    content: [
      `For any questions regarding this Privacy Policy or Cocpit's processing of personal data, you may contact:`,
      `Email: yashoswal@cocpitin.org`,
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </span>
        </div>
      </div>

      {/* Main Document Body */}
      <div className="max-w-[832px] mx-auto px-6 pt-12 md:pt-16 pb-20 flex flex-col gap-10">
        {/* Document Header Title Card */}
        <div className="flex flex-col gap-4 border-b border-[#2C2C33] pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C24] border border-[#2C2C33] text-[11px] font-semibold tracking-wider uppercase text-[#EC6229] w-fit">
            COCPIT PRIVACY & DATA PROTECTION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FFECE6]">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#726B67] tracking-wide">
            Last Updated & Effective Date: <span className="text-[#B8ADA8]">September 2026</span>
          </p>
        </div>

        {/* Section List */}
        <div className="flex flex-col gap-10">
          {privacySections.map((sec) => (
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