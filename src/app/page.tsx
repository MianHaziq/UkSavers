import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhotoShowcase from "@/components/PhotoShowcase";
import ProductsSection from "@/components/ProductsSection";
import BrandsWeStock from "@/components/BrandsWeStock";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProductsSection />
        <PhotoShowcase />
        <BrandsWeStock />
        <CategoriesSection />
        <WhyChooseUs />
        <HowItWorks />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
