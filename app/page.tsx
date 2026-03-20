import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import StartSection from "./components/StartSection";
import FeaturesChess from "./components/FeaturesChess";
import FeaturesGrid from "./components/FeaturesGrid";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTAFooter from "./components/CTAFooter";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ background: "#000" }}>
      <Navbar />
      <Hero />
      <Partners />
      <StartSection />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <Contact />
      <CTAFooter />
    </main>
  );
}
