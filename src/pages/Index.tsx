
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceHighlights from '../components/ServiceHighlights';
import WhyChooseUs from '../components/WhyChooseUs';
import PricingPlans from '../components/PricingPlans';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <PricingPlans />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
