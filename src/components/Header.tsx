import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const menuItems = [
    {
      name: "Domains",
      items: [
        { label: "Transfer | Register Domain", url: "/register-domain" },
        { label: "Perform WHOIS Search", url: "/register-domain" },
        { label: "Become a Domain Reseller", url: "/register-domain" },
      ],
    },
    {
      name: "Website & Hosting",
      items: [
        { label: "Website Builder", url: "/website-builder" },
        { label: "Shared Hosting", url: "/shared-hosting" },
        { label: "WordPress Shared Hosting", url: "/wordpressshared-hosting" },
        { label: "Hosting Migration and Transfer", url: "/hosting-migration" },
        { label: "Dedicated Cloud Hosting", url: "/dedicated-cloud-hosting" },
        { label: "Reseller Hosting", url: "/reseller-hosting" },
      ],
    },
    {
      name: "Email Services",
      items: [
        { label: "Business Email Hosting", url: "/register-domain" },
        { label: "Enterprise Email Hosting", url: "/transfer-domain" },
      ],
    },
    {
      name: "Security",
      items: [
        { label: "SSL Certificates", url: "/register-domain" },
        { label: "Website Security", url: "/transfer-domain" },
      ],
    },
    {
      name: "Support",
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  return (
    <header
      className={`fixed w-full lg:px-4 py-1 transition-all duration-300 z-10 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${isMenuOpen && " bg-white"}`}
    >
      <div className="max-w-full mx-auto sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">
              <a href="/">
                <img src="/favicon.ico" alt="favicon" className="w-[120px]" />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                {menuItems.map(({ name, items }) => (
                  <NavigationMenuItem className="!bg-transparent" key={name}>
                    <NavigationMenuTrigger
                      className={`px-3 !bg-transparent !hover:bg-transparent  py-2  hover:underline ${
                        location.pathname !== "/"
                          ? "text-black"
                          : "text-gray-300"
                      } ${scrolled ? "text-teal-900" : " hover:text-teal-500"}`}
                    >
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
              href="https://nexxyhost.com/clientarea/clientarea.php"
              className="no-underline"
            >
              <button className="bg-button text-white px-10 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Login
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`inline-flex items-center justify-center p-2 rounded-md  hover:text-teal-600 focus:outline-none ${
                scrolled ? "text-teal-900" : "text-teal-500"
              }`}
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
          <div
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="500"
            className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto py-4 top-[70px]"
          >
            <div className="space-y-4  overflow-y-scroll">
              {menuItems.map(({ name, items }) => (
                <div key={name} className="space-y-2">
                  <div className="font-medium px-2 text-teal-900">{name}</div>
                  <div className="space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.url}
                        className="block px-3 py-2 rounded-md text-teal-700 hover:underline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="https://nexxyhost.com/clientarea/clientarea.php"
                className="no-underline mx-3 my-10"
              >
                <button className="bg-button text-white px-10 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  Login
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
