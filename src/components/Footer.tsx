import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");

  const footerSections = [
    {
      title: "DOMAINS",
      links: [
        "Purchase and Register Domain",
        "Transfer Domain",
        "Perform WHOIS Search",
        "Become a Domain Reseller",
      ],
    },
    {
      title: "WEBSITE AND HOSTING",
      links: [
        "Website Builder",
        "Shared Hosting",
        "WordPress Shared Hosting",
        "Hosting Migration and Transfer",
        "Dedicated Cloud Hosting",
        "Reseller Hosting",
      ],
    },
    {
      title: "EMAIL SERVICES",
      links: ["Business Email Hosting", "Enterprise Email Hosting"],
    },
    {
      title: "SECURITY",
      links: ["SSL Certificates", "Website Security"],
    },
    {
      title: "SUPPORT",
      links: ["Knowledgebase", "Submit Ticket", "Legals", "Contact Us"],
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="text-white bg-teal-600">
      {/* Newsletter section */}
      <div className="bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with NexxyHost
            </h3>
            <p className="text-white-100 mb-8 max-w-2xl mx-auto">
              Get the latest hosting tips, security updates, and exclusive
              offers delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-white-900 border-none outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-900 text-white font-semibold rounded-lg hover:bg-teal-900/50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto bg-black rounded-t-[30px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-3">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">
                <a href="/">
                  <img src="/favicon.ico" alt="favicon" className="" />
                </a>
              </div>
            </div>
            <p className="text-white-400 mb-6 mt-5 max-w-fit">
              Empowering businesses worldwide with reliable hosting, domains,
              and security solutions since 2008.
            </p>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#048086ff] mb-4 uppercase tracking-wider">
                Address
              </h4>
              <ul>
                <li className="text-white-400 hover:text-white transition-colors text-sm">
                  Central Business District, Abuja-Nigeria.
                </li>
                <li className="text-white-400 hover:text-white transition-colors text-sm">
                  Phone: (234) 811-690-0912
                </li>
              </ul>
            </div>

            {/* Social icons */}
            <div className="flex space-x-4 my-5">
              <a href="#">
                <FaFacebook size={25} />
              </a>
              <a href="#">
                <FaTwitter size={25} />
              </a>
              <a href="#">
                <FaLinkedin size={25} />
              </a>
              <a href="#">
                <FaYoutube size={25} />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h4 className="text-sm font-bold text-[#048086ff] mb-4 uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-white-400 hover:text-white transition-colors text-sm"
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
        <div className="mt-12 pt-8 border-t border-white-800">
          <p className="text-white-400 text-center text-sm">
            © 2024 NexxyHost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
