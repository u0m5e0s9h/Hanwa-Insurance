import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceIntro from "@/components/ServiceIntro";
import ProcessFlow from "@/components/ProcessFlow";
import Footer from "@/components/Footer";
import FloatingRightSidebar from "@/components/FloatingRightSidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServiceIntro />
      <ProcessFlow />
      <Footer />
      <FloatingRightSidebar />
    </div>
  );
};

export default Index;