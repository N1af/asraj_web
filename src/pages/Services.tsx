import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24" />
      <ServicesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
