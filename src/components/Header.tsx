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
import Legals from "./Legals";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
        {
          label: "Register | Transfer Domain",
          url: "/register-domain",
          text: "Secure your online identity with the perfect domain name. ",
        },
        {
          label: "Perform WHOIS Search",
          url: "/whois-search",
          text: "Find detailed information about any domain name. Check domain availability, ownership details, expiration dates, and more with our free WHOIS lookup tool.",
        },
        {
          label: "Become a Domain Reseller",
          url: "/domain-reseller",
          text: "Automate reselling of Domain via API",
        },
      ],
    },
    {
      name: "Website & Hosting",
      items: [
        {
          label: "Website Builder",
          url: "/website-builder",
          text: "Create stunning websites in minutes with our drag-and-drop builder.",
        },
        {
          label: "Shared Hosting",
          url: "/shared-hosting",
          text: "Perfect for personal websites, blogs, and small businesses.",
        },
        {
          label: "WordPress Shared Hosting",
          url: "/wordpressshared-hosting",
          text: "Experience the fastest WordPress hosting with our optimized servers.",
        },
        {
          label: "Hosting Migration and Transfer",
          url: "/hosting-migration",
          text: "Switch to our high-performance hosting with complete peace of mind. ",
        },
        {
          label: "Dedicated Cloud Hosting",
          url: "/dedicated-cloud-hosting",
          text: "Scale your business with our high-performance cloud infrastructure.",
        },
        {
          label: "Reseller Hosting",
          url: "/reseller-hosting",
          text: "Scale your business with our high-performance cloud infrastructure.",
        },
      ],
    },
    {
      name: "Email Services",
      items: [
        {
          label: "Email Services",
          url: "/email-services",
          text: "Establish credibility and enhance your professional image with custom domain email addresses. ",
        },
      ],
    },
    {
      name: "Security",
      items: [
        {
          label: "SSL Certificates",
          url: "/ssl-certificate",
          text: "Secure your website with industry-standard SSL encryption.",
        },
        {
          label: "Website Security",
          url: "/website-security",
          text: "Protect your website from hackers, malware, and data breaches with our comprehensive security solutions.",
        },
      ],
    },
    {
      name: "Support",
      items: [
        {
          label: "Knowledgebase",
          url: "/knowledgebase",
          text: "We're here to help",
        },
        {
          label: "Submit Ticket",
          url: "/submit-ticket",
          text: "Need help? Our support team is here to assist you 24/7",
        },
        { label: "Legals", url: "/legals", text: "Our legal policies" },
        {
          label: "Contact Us",
          url: "/contact",
          text: "Have questions about our hosting services? ",
        },
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

  const [legals, setLegals] = useState(false);

  return (
    <header
      className={`fixed w-full lg:px-4 py-1 transition-all duration-300 top-0 z-10 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${isMenuOpen && " bg-white"}`}
    >
      <div className="max-w-full mx-auto sm:px-6 md:px-0 lg:px-2">
        <div className="flex items-center md:justify-center md:gap-[4rem] lg:justify-between justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">
              <a href="/">
                <img src="/nexxylogo.png" alt="favicon" className="w-[120px]" />
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
                      className={`px-3 md:px-1 lg:px-3 !bg-transparent !hover:bg-transparent  py-2  hover:underline ${
                        location.pathname !== "/"
                          ? "text-black"
                          : "text-gray-300"
                      } ${scrolled ? "text-teal-900" : " hover:text-teal-500"}`}
                    >
                      {name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {name === "Website & Hosting" ? (
                        <div className="flex items-start justify-between">
                          <ul className="w-[300px] gap-2 p-4 md:w-[300px]">
                            {items?.slice(0, 3).map((item) => (
                              <li
                                className="block select-none space-y-1 text-teal-900 rounded-md p-3 leading-none no-underline outline-none"
                                key={item.label}
                              >
                                <Link to={item.url} className="hover:underline">
                                  {item.label}
                                  <br />
                                </Link>
                                <sub className="hover:no-underline">
                                  {item.text}
                                </sub>
                              </li>
                            ))}
                          </ul>

                          <ul className="w-[300px] gap-2 p-4 md:w-[300px]">
                            {items?.slice(3, 6).map((item) => (
                              <li
                                className="block select-none space-y-1 text-teal-900 rounded-md p-3 leading-none no-underline outline-none"
                                key={item.label}
                              >
                                <Link to={item.url} className="hover:underline">
                                  {item.label}
                                  <br />
                                </Link>
                                <sub className="hover:no-underline">
                                  {item.text}
                                </sub>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="w-[400px] gap-2 p-4 md:w-[500px]">
                          {items?.map((item) => (
                            <li
                              className="block select-none text-teal-900 rounded-md p-3 leading-none no-underline outline-none"
                              key={item.label}
                            >
                              {item.label === "Legals" ? (
                                <HoverCard>
                                  <HoverCardTrigger>
                                    <p className="hover:underline cursor-pointer">
                                      {item.label}
                                    </p>
                                    <sub className="hover:no-underline">
                                      {item.text}
                                    </sub>
                                  </HoverCardTrigger>
                                  <HoverCardContent>
                                    <Legals />
                                  </HoverCardContent>
                                </HoverCard>
                              ) : (
                                <Link to={item.url}>
                                  <p className="hover:underline">{item.label}</p>
                                  <sub className="hover:no-underline">
                                    {item.text}
                                  </sub>
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
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
                Client Area
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
            className="fixed inset-0 z-50 bg-white md:hidden overflow-y-auto pt-4 pb-12 top-[70px]"
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
      {/* {legals &&  <Legals/>} */}
    </header>
  );
};

export default Header;
