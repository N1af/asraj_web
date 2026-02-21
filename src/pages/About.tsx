import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import FoundersSection from "@/components/FoundersSection";
import TeamSection from "@/components/TeamSection";
import TimelineSection from "@/components/TimelineSection";
import TechStackSection from "@/components/TechStackSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24" />
      <AboutSection />
      <StatsSection />
      <MissionVisionSection />
      <FoundersSection />
      <TeamSection />
      <TimelineSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
