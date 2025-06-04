import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useNavigate();
  const menuItems = [
    {
      name: "DOMAINS",
      items: [
        { label: "Transfer | Register Domain", url: "/register-domain" },
        { label: "Perform WHOIS Search", url: "/register-domain" },
        { label: "Become a Domain Reseller", url: "/register-domain" },
      ],
    },
    {
      name: "WEBSITE AND HOSTING",
      items: [
        { label: "Website Builder", url: "/register-domain" },
        { label: "Shared Hosting", url: "/shared-hosting" },
        { label: "WordPress Shared Hosting", url: "/register-domain" },
        { label: "Hosting Migration and Transfer", url: "/register-domain" },
        { label: "Dedicated Cloud Hosting", url: "/register-domain" },
        { label: "Reseller Hosting", url: "/register-domain" },
      ],
    },
    {
      name: "EMAIL SERVICES",
      items: [
        { label: "Business Email Hosting", url: "/register-domain" },
        { label: "Enterprise Email Hosting", url: "/transfer-domain" },
      ],
    },
    {
      name: "SECURITY",
      items: [
        { label: "SSL Certificates", url: "/register-domain" },
        { label: "Website Security", url: "/transfer-domain" },
      ],
    },
    {
      name: "SUPPORT",
      items: [
        { label: "Knowledgebase", url: "/register-domain" },
        { label: "Submit Ticket", url: "/transfer-domain" },
        { label: "Legals", url: "/register-domain" },
        { label: "Contact Us", url: "/transfer-domain" },
      ],
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full px-4 py-2 transition-all duration-300 z-10 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">
              <a href="/">
                <img src="/favicon.ico" alt="favicon" className=""  />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {menuItems.map(({ name, items }) => (
                  <NavigationMenuItem className="!bg-transparent" key={name}>
                    <NavigationMenuTrigger className={`px-3 !bg-transparent !hover:bg-transparent  py-2  hover:underline ${scrolled ? "text-teal-900" : "text-teal-500 hover:text-teal-500"}`}>
                      {name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-2 p-4 md:w-[500px]">
                        {items.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.url}
                              className="block select-none space-y-1 text-teal-900 rounded-md p-3 leading-none no-underline outline-none hover:underline"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className={`${scrolled ? "text-teal-900 hover:text-teal-600" : "hover:text-teal-900 text-teal-500"} text-teal-500 hover:text-teal-700 font-medium transition-colors`}
            >
               Login
            </a>
            <button className="bg-button text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-4">
              {menuItems.map(({ name, items }) => (
                <div key={name} className="space-y-2">
                  <div className="font-medium px-2">{name}</div>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.url}
                        className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  Webmail Login
                </a>
                <button className="w-full text-left px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
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
