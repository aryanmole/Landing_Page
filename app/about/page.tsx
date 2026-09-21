import type { Metadata } from "next";
import AboutPage from "@/components/about/page";

export const metadata: Metadata = {
  title: "About — Cocpit",
  description:
    "Cocpit is a parent technology company exploring new possibilities. We build software engineered for genuine human utility and long-term autonomy.",
};

export default function Page() {
  return <AboutPage />;
}
