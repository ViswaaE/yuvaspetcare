import FaqComponent from "@/components/Faq";
import StatsBanner from "@/components/Stats";
import AboutUsSection from "@/pages/Landing_page/about-us-section";
import BlogSection from "@/pages/Landing_page/Blogsection";
import HeroSection from "@/pages/Landing_page/Herosection";
import ServicesSection from "@/pages/Landing_page/services-section";
import TestimonialSection from "@/pages/Landing_page/Testimonial";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <FaqComponent />
      <StatsBanner />
      <TestimonialSection />
      <BlogSection /> 
    </div>
  );
}
