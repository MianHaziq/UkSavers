import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import CategoriesSection from "@/components/CategoriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <StatsBar />
        <CategoriesSection />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonial />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
