import React, { useState } from "react";

import { Check, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
const domainExtensions = [
  { name: ".com", price: 12.99 },
  { name: ".org", price: 11.99 },
  { name: ".net", price: 13.99 },
  { name: ".io", price: 39.99 },
  { name: ".co", price: 24.99 },
  { name: ".me", price: 19.99 },
  { name: ".app", price: 15.99 },
  { name: ".dev", price: 15.99 },
];

const PurchaseRegister: React.FC = () => {
  const [domainName, setDomainName] = useState("");
  const [searchResults, setSearchResults] = useState<
    {
      available: boolean;
      domain: string;
      price: number;
    }[]
  >([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiURL = import.meta.env.VITE_API_URL;
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (domainName) {
      const domainAvailailtySearch = await fetch(
        // `${apiURL}/view-domain`,
       `${apiURL}/checkdomainavailable?APIKey=xuxASjwpmP71KtJ&websiteName="sanni.com"`,
      //   {
      //     method: 'GET',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${apiKey}`, // Replace with your auth mechanism
      //         'Accept': 'application/json'
      //     },
      //     // body: JSON.stringify({ domainName: domainName }) // Stringify the domain name
      // }
      );
      const response = await domainAvailailtySearch.json();
      console.log(response);
    }
  };

  return (
    <Layout>
      <div>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-5 md:mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Find Your Perfect Domain Name
                </h1>
                <p className="text-base w-[70%] text-black mb-8">
                  Secure your online identity with the perfect domain name.
                  Choose from hundreds of extension and get your website online
                  today with instant activation.
                </p>
                <div className="bg-white p-2 rounded-2xl mb-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Enter your domain name..."
                      value={domainName}
                      onChange={(e) => setDomainName(e.target.value)}
                      className="flex-1 px-4 py-3 border border-teal-900 rounded-lg"
                    />
                    <button
                      onClick={handleSearch}
                      className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all"
                    >
                      Search
                    </button>
                  </div>
                  <a
                    href="https://nexxyhost.com/clientarea/cart.php?a=add&domain=transfer"
                    className="text-teal-900 hover:underline no-underline flex mt-5"
                  >
                    Transfer Domain from another registrar <ChevronRight />
                  </a>
                </div>
                <p className="text-teal-600">
                  <span className="font-semibold">Popular:</span> .com, .net,
                  .org, .io, .co
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/register.avif"
                  alt="Website design and development illustration"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Domain Extensions */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-teal-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                Popular Domain Extensions
              </h2>
              <p className="text-xl text-black">
                Choose from a wide variety of domain extensions for your website
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {domainExtensions.map((ext, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <p className="text-2xl font-bold text-teal-600 mb-2">
                    {ext.name}
                  </p>
                  <p className="text-teal-900 font-semibold">
                    ${ext.price}/year
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                Why Register With Us?
              </h2>
              <p className="text-xl text-black max-w-3xl mx-auto">
                We provide the best domain registration service with premium
                features
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">
                    Free WHOIS Privacy
                  </h3>
                </div>
                <p className="text-black">
                  We include WHOIS privacy protection with all domain
                  registrations at no extra cost, keeping your personal
                  information private.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">
                    Free DNS Management
                  </h3>
                </div>
                <p className="text-black">
                  Manage your domain's DNS records with our easy-to-use control
                  panel, with advanced settings and quick propagation.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">Domain Lock</h3>
                </div>
                <p className="text-black">
                  Protect your domain from unauthorized transfers with our
                  domain lock feature, enhancing your domain security.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">
                    Email Forwarding
                  </h3>
                </div>
                <p className="text-black">
                  Create professional email addresses with your domain and
                  forward emails to your existing email account.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">Auto-Renewal</h3>
                </div>
                <p className="text-black">
                  Never lose your domain with our auto-renewal feature. We'll
                  automatically renew your domain before it expires.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-2 rounded-full">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">24/7 Support</h3>
                </div>
                <p className="text-black">
                  Our domain experts are available 24/7 to assist you with any
                  questions or issues related to your domain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your Domain?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Register your domain name today and take the first step towards
              establishing your online presence.
            </p>
            <a
              href="/register-domain"
              className="inline-block px-8 py-3 bg-teal-900 text-white font-medium rounded-md hover:bg-teal-900/50 transition-colors shadow-md text-lg"
            >
              Find Your Domain Now
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PurchaseRegister;
