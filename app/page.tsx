import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import StartSection from "@/components/sections/StartSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <StartSection />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
