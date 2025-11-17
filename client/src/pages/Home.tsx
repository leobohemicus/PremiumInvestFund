import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InvestmentThesis from "@/components/InvestmentThesis";
import BenefitsSection from "@/components/BenefitsSection";
import BondSensitivitySlider from "@/components/BondSensitivitySlider";
import PortfolioSection from "@/components/PortfolioSection";
import InvestorRequirements from "@/components/InvestorRequirements";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InvestmentThesis />
      <BenefitsSection />
      <BondSensitivitySlider />
      <PortfolioSection />
      <InvestorRequirements />
      <ContactSection />
      <Footer />
    </div>
  );
}
