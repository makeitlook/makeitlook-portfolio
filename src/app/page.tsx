import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import PageLayout from "@/components/Layouts/PageLayout";
import SEO from "@/components/SEO/SEO";
import HeroSection from "@/components/HeroSection/HeroSection";
import { AnimatedBackground } from "@/components/AnimatedBackground/AnimatedBackground";
import About from "./about/page";

export default function Home() {
  return (
    <>
      <SEO
        title="Make It Look"
        description="A creative studio bringing your brand to life through bold web design, custom print, and standout visuals. From websites to business cards — we make it look good."
        url="https://www.makeitlook.co.uk"
        image="/images/og-image.png" // make sure this exists and represents your brand
        keywords={[
          "Make It Look",
          "Web Design",
          "Print Design",
          "Creative Studio",
          "Branding",
          "Business Cards",
          "Design Services",
          "Freelance Designer",
          "Marketing Materials",
        ]}
      />
      <AnimatedBackground />
      <section id="home" className="h-full">
        <AnimatedDiv>
          <HeroSection />
        </AnimatedDiv>
      </section>
      <About />
    </>
  );
}
