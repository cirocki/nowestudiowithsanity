import BlogSection from "./sections/blogSection/BlogSection";
import ProjectsSection from "./sections/projectsSection/ProjectsSection";
import AboutSection from "./sections/aboutSection/AboutSection";
import OfferSection from "./sections/offerSection/OfferSection";
import HeroSection from "./sections/heroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
    </>
  );
}
