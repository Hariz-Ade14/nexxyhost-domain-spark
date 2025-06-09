import React from 'react';
import { Clock, Cloud, Database, Shield, Settings, Users } from 'lucide-react';

const features = [
  {
    icon: <Database className="w-12 h-12 text-emerald-500" />,
    title: "UNLIMITED DISK SPACE",
    description: "Unlimited web space for your websites, unlimited downloads and unlimited sizes."
  },
  {
    icon: <Clock className="w-12 h-12 text-emerald-500" />,
    title: "UNLIMITED BANDWIDTH",
    description: "Our servers gives you the opportunity to experience Unlimited data transfer."
  },
  {
    icon: <Users className="w-12 h-12 text-emerald-500" />,
    title: "24/7 CUSTOMER SUPPORT",
    description: "Our 24/7 Award winning support team is available to handle any request you may have."
  },
  {
    icon: <Cloud className="w-12 h-12 text-emerald-500" />,
    title: "FREE DAILY BACKUPS",
    description: "Our servers utilize a hardware RAID 10 array, this provides you with a high degree of reliability."
  },
  {
    icon: <Clock className="w-12 h-12 text-emerald-500" />,
    title: "99.9% UPTIME GUARANTEE",
    description: "Multi-layers of security protections, that will ensure maximum service uptime for all users."
  },
  {
    icon: <Shield className="w-12 h-12 text-emerald-500" />,
    title: "FREE DDOS PROTECTION",
    description: "Protect your website against network, transport and application layer DDoS attacks"
  },
  {
    icon: <Settings className="w-12 h-12 text-emerald-500" />,
    title: "AUTO-UPDATE",
    description: "We update the WordPress core and plugins to keep your site protected."
  },
  {
    icon: <Settings className="w-12 h-12 text-emerald-500" />,
    title: "OPTIMIZED SOFTWARE",
    description: "All software we install on our machines is optmized for speed and efficiency."
  },
  {
    icon: <Shield className="w-12 h-12 text-emerald-500" />,
    title: "SERVER LEVEL PROTECTION",
    description: "Whenever a major vulnerability appears, we develop and apply server-level fixes"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className='text-3xl lg:text-4xl font-bold text-center text-teal-900 mb-4'>Hosting Plans comes with :</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-teal-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-black leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features