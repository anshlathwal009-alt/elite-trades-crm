import HeroSection from "../components/home/HeroSection";
import AccreditationBar from "../components/AccreditationBar";
import IntroSection from "../components/home/IntroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ReviewsSection from "../components/home/ReviewsSection";
import ProcessSection from "../components/home/ProcessSection";
import CoverageSection from "../components/home/CoverageSection";
import CTASection from "../components/CTASection";
import { HOME } from "../config/content.en";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AccreditationBar label={HOME.accreditations.label} />
      <IntroSection />
      <ServicesSection />
      <ProjectsSection />
      <ReviewsSection />
      <ProcessSection />
      <CoverageSection />
      <CTASection />
    </div>
  );
}