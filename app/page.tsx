import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import MetricsSection from "@/components/MetricsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LogoIntro from "@/components/LogoIntro";

export default function Home() {
  return (
    <>
      <LogoIntro />
      <Sidebar />
      <main className="relative max-w-[832px] mx-auto px-6 pt-16 pb-0 flex flex-col">
        <Hero />
        <ProductShowcase />
        <MetricsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

