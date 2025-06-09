
import React from 'react';
import { Globe, Server, Cloud, Shield } from 'lucide-react';

const ServiceHighlights = () => {
  const services = [
    {
      icon: Globe,
      title: 'Domain Registration & Transfer',
      description: 'Register or transfer your domain with competitive pricing and easy management tools.',
      features: ['Free WHOIS protection', 'Easy DNS management', 'Auto-renewal options']
    },
    {
      icon: Server,
      title: 'Web Hosting Plans',
      description: 'Fast and reliable shared hosting perfect for websites, blogs, and small businesses.',
      features: ['99.9% uptime guarantee', 'Free SSL certificates', '24/7 support']
    },
    {
      icon: Cloud,
      title: 'Cloud & Managed Hosting',
      description: 'Scalable cloud solutions and fully managed hosting for growing businesses.',
      features: ['Auto-scaling resources', 'Daily backups', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Email Hosting & SSL',
      description: 'Professional email hosting and security certificates to protect your business.',
      features: ['Custom email addresses', 'Advanced spam filtering', 'SSL encryption']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            From domain registration to enterprise hosting, we provide all the tools and services your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-200 transition-colors">
                <service.icon className="h-8 w-8 text-teal-600" />
              </div>
              
              <h3 className="text-xl font-bold text-teal-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-black mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-black">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full py-3 text-teal-600 font-semibold hover:bg-teal-50 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
