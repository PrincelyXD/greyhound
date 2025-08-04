import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Pricing } from "../components/PricingSection";
import { Features } from "../components/home/Features";
import { Hero } from "../components/home/Hero";
import { HowItWorks } from "../components/home/HowItWorks";
import { Testimonials } from "../components/home/Testimonials";
import { UseCases } from "../components/home/UseCases";

const page = () => {
  return (
    <div className="absolute top-0 z-[-2] h-fit w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    
      <Hero />
      <Features/>
      <UseCases/>
      <HowItWorks/>
      <Testimonials/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default page;
