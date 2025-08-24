import AboutUsSection from "@/pages/Landing_page/about-us-section";
import HeroSection from "@/pages/Landing_page/Herosection";
import ServicesSection from "@/pages/Landing_page/services-section";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
    </div>
  );
}
