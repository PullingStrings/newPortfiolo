import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsHighlight from "../components/sections/ProjectsHighlight";
import ContactCTA from "../components/sections/ContactCTA";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <ProjectsHighlight />
      <AboutSection />
      <SkillsSection />
      <ContactCTA />
    </>
  );
}
