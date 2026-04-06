import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { SkillsSection } from "@/sections/Skills";
import { Footer } from "@/sections/Footer";
import { GlowingOrbs } from "@/components/GlowingOrbs";
import { ScrollAnimator } from "@/components/ScrollAnimator";

export default function Home() {
  return (
    <div>
      <GlowingOrbs />
      <ScrollAnimator />
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <Footer/>
    </div>
  );
}
