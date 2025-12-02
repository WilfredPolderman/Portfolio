import { type FunctionComponent } from "react";
import { HeroSection } from "@/components/HomeSections/HeroSection";
import { SkillsSection } from "@/components/HomeSections/SkillsSection";
import { ProjectHighlightSection } from "@/components/HomeSections/ProjectHighlightSection";
import { ContactSection } from "@/components/HomeSections/ContactSection";

/***********/
//TODO:
//-Dark mode toevoegen
/***********/

export const Home: FunctionComponent = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectHighlightSection />
      <ContactSection />
    </>
  );
};
