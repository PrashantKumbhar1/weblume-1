import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br 
        from-[#020617] via-[#042f2e] to-[#020617] 
        animate-[gradient-shift_18s_ease_infinite]" />

      <Navbar />
      <main>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

