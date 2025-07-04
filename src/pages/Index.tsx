import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceIntro from "@/components/ServiceIntro";
import ProcessFlow from "@/components/ProcessFlow";
import DesignerPublicPartnership from "@/components/DesignerPublicPartnership";
import DetailedBenefits from "@/components/DetailedBenefits";
import Footer from "@/components/Footer";
import FloatingRightSidebar from "@/components/FloatingRightSidebar";
import DonationInsuranceSummary from "@/components/DonationInsuranceSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceIntro />
      <ProcessFlow />
      <DesignerPublicPartnership/>
      <DonationInsuranceSummary/>
      <DetailedBenefits />
      <Footer />
      <FloatingRightSidebar />
    </div>
  );
};

export default Index;