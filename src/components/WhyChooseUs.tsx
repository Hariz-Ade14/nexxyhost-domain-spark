
import React from 'react';
import { Clock, Shield, DollarSign, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Our expert support team is available around the clock to help you succeed.',
      stat: '99.8% Customer Satisfaction'
    },
    {
      icon: Clock,
      title: '99.9% Uptime Guarantee',
      description: 'Reliable infrastructure ensures your website stays online when it matters most.',
      stat: '99.98% Average Uptime'
    },
    {
      icon: Shield,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security with SSL certificates, firewalls, and malware protection.',
      stat: '0 Security Breaches'
    },
    {
      icon: DollarSign,
      title: 'Affordable Plans',
      description: 'Premium hosting solutions at competitive prices with transparent billing.',
      stat: 'Starting at $2.99/mo'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
            Why Choose NexxyHost?
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-teal-200 to-teal-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-10 w-10 text-teal-600" />
              </div>
              
              <h3 className="text-xl font-bold text-teal-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-black mb-4">
                {feature.description}
              </p>
              
              <div className="bg-teal-50 px-4 py-2 rounded-full inline-block">
                <span className="text-black font-semibold text-sm">
                  {feature.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-20 text-center">
          <p className="text-teal-500 mb-8">Trusted by over 50,000+ websites worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-teal-600">WordPress</div>
            <div className="text-2xl font-bold text-teal-600">Shopify</div>
            <div className="text-2xl font-bold text-teal-600">Joomla</div>
            <div className="text-2xl font-bold text-teal-600">Drupal</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
