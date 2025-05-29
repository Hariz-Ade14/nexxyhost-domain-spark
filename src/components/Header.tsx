
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'DOMAINS',
      items: [
        'Purchase and Register Domain',
        'Transfer Domain',
        'Perform WHOIS Search',
        'Become a Domain Reseller'
      ]
    },
    {
      name: 'WEBSITE AND HOSTING',
      items: [
        'Website Builder',
        'Shared Hosting',
        'WordPress Shared Hosting',
        'Hosting Migration and Transfer',
        'Dedicated Cloud Hosting',
        'Reseller Hosting'
      ]
    },
    {
      name: 'EMAIL SERVICES',
      items: [
        'Business Email Hosting',
        'Enterprise Email Hosting'
      ]
    },
    {
      name: 'SECURITY',
      items: [
        'SSL Certificates',
        'Website Security'
      ]
    },
    {
      name: 'SUPPORT',
      items: [
        'Knowledgebase',
        'Submit Ticket',
        'Legals',
        'Contact Us'
      ]
    }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              nexxyhost
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu) => (
              <div
                key={menu.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  {menu.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === menu.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {menu.items.map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Webmail Login
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="space-y-4 mt-4">
              {menuItems.map((menu) => (
                <div key={menu.name} className="space-y-2">
                  <div className="font-semibold text-gray-900">{menu.name}</div>
                  {menu.items.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block pl-4 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a href="#" className="block text-gray-700 hover:text-blue-600 mb-2">
                  Webmail Login
                </a>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
