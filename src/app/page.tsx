import AnimatedDiv from "@/components/AnimatedDiv/AnimatedDiv";
import SEO from "@/components/SEO/SEO";
import HeroSection from "@/components/HeroSection/HeroSection";
import { AnimatedBackground } from "@/components/AnimatedBackground/AnimatedBackground";
import About from "./about/page";
import Services from "./services/page";
import { CTA } from "@/components/CTA/CTA";
import ProjectsIndex from "./projects/page";

export default function Home() {
  return (
    <>
      <SEO
        title="Make It Look"
        description="A creative studio bringing your brand to life through bold web design, custom print, and standout visuals. From websites to business cards — we make it look good."
        url="https://www.makeitlook.co.uk"
        image="/images/og-image.png"
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

      {/* Full viewport fixed animated background */}

      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <AnimatedBackground />
        </div>

        <section id="home">
          <AnimatedDiv>
            <HeroSection />
          </AnimatedDiv>
        </section>

        <section id="services" className="pt-12">
          <Services />
        </section>
      </div>

      <div className="sm:px-32 justify-start items-center">
        <CTA />
      </div>

      <section id="about" className="pt-12">
        <About />
      </section>

      <section id="portfolio" className="pt-12">
        <ProjectsIndex />
      </section>
    </>
  );
}
