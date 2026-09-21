import type { Metadata } from "next";
import ProductDetail from "@/components/productDetails/page";

export const metadata: Metadata = {
  title: "Cocpit — Product Details",
  description:
    "Professional Networking Platform. Connect, discover opportunities, and grow professionally in one place.",
};

export default function ProductDetailPage() {
  return <ProductDetail />;
}
