import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24" />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Testimonials;
