
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Features from '@/components/Features';
import FAQs from '@/components/FAQs';
import { faqs } from '@/components/FAQs';
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <PricingPlans />
      <Features />
      <Testimonials />
      <FAQs faqs={faqs} subheading={"Get answers to the most common questions about our hosting services"}/>
      <Footer />
    </div>
  );
};

export default Index;
