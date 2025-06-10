import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const [email, setEmail] = useState("");

  const footerSections = [
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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="w-full mx-auto bg-black rounded-t-[30px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-3">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            {/* <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-blue-600">
                <a href="/">
                  <img src="/favicon.ico" alt="favicon" className="" />
                </a>
              </div>
            </div> */}
            {/* <p className="text-white-400 mb-6 mt-5 max-w-fit">
              Empowering businesses worldwide with reliable hosting, domains,
              and security solutions since 2008.
            </p> */}
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
                {section.name}
              </h4>
              <ul className="space-y-3">
                {section.items.map((link, linkIndex,) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-white-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
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
