
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerSections = [
    {
      title: 'DOMAINS',
      links: [
        'Purchase and Register Domain',
        'Transfer Domain',
        'Perform WHOIS Search',
        'Become a Domain Reseller'
      ]
    },
    {
      title: 'WEBSITE AND HOSTING',
      links: [
        'Website Builder',
        'Shared Hosting',
        'WordPress Shared Hosting',
        'Hosting Migration and Transfer',
        'Dedicated Cloud Hosting',
        'Reseller Hosting'
      ]
    },
    {
      title: 'EMAIL SERVICES',
      links: [
        'Business Email Hosting',
        'Enterprise Email Hosting'
      ]
    },
    {
      title: 'SECURITY',
      links: [
        'SSL Certificates',
        'Website Security'
      ]
    },
    {
      title: 'SUPPORT',
      links: [
        'Knowledgebase',
        'Submit Ticket',
        'Legals',
        'Contact Us'
      ]
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with NexxyHost
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest hosting tips, security updates, and exclusive offers delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-none outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-blue-400 mb-4">
              nexxyhost
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering businesses worldwide with reliable hosting, domains, and security solutions since 2008.
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-sm font-bold">yt</span>
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Webmail login link */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Webmail Login
              </a>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 NexxyHost. All rights reserved.
              </p>
              <div className="mt-2 space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
