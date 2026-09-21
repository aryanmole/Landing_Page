import type { Metadata } from "next";
import ApplyPage from "@/components/careers/ApplyPage";

export const metadata: Metadata = {
  title: "Apply — Cocpit Careers",
  description: "Submit your application to join the team at Cocpit.",
};

export default function ApplyPageRoute() {
  return <ApplyPage />;
}
