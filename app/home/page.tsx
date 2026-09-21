import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import MetricsSection from "@/components/home/MetricsSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <main className="relative max-w-[832px] mx-auto px-6 pb-0 flex flex-col">
      <Hero />
      <ProductShowcase />
      <MetricsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
