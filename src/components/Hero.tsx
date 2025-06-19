import React, { useState } from "react";
import Header from "./Header";
import { Palette } from "lucide-react";
const Hero = () => {
  const [domain, setDomain] = useState("");

  return (
    <section className="relative bg-[url('/images/nexxyhost.jpg')] bg-cover bg-center bg-no-repeat bg-fixed w-full text-white overflow-hidden">
      <Header />
      <div className="relative w-[100%] mx-auto sm:px-6 py-24 lg:py-32">
        <div className="text-center bg-black/30 w-full  lg:px-0 flex flex-col gap-7">
          {/* Main headline */}
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-teal-200">
            Domain Names | Hosting | Security
          </h1>
          <h1 className="text-xl lg:text-xl font-semibold mx-3 text-white lg:leading-[.5rem]">
            PROFESSIONAL TECHNICAL SUPPORT 24/7 TO HELP YOU!
          </h1>

          <p className="text-md lg:text-sm lg:leading-[1.5rem] text-white  max-w-3xl mx-auto">
            Huge Choice | New Extensions | Lowest Prices
            <br />
            Register Your Perfect Domain Name Today.
          </p>

          {/* Domain search bar */}
          <div className="lg:w-[80%] w-[80%] mx-auto mb-8">
            <div className="flex flex-col lg:flex-row gap-4 p-2 bg-white rounded-2xl shadow-2xl">
              <div className="flex-1">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="w-full px-6 py-2 text-lg text-gray-900 bg-transparent border-none outline-none placeholder-gray-500"
                />
              </div>
              <div className="flex gap-2">
                <a
                  href="https://nexxyhost.com/clientarea/cart.php?a=add&domain=register"
                  className="no-underline w-[50%] "
                >
                  <button className="px-8 py-3 bg-[#048086ff] text-white font-semibold rounded-xl hover:bg-teal-900 transition-colors">
                    Register
                  </button>
                </a>
                <a
                  href="https://nexxyhost.com/clientarea/cart.php?a=add&domain=transfer"
                  className="no-underline w-[50%] "
                >
                  <button className="px-8 py-3 bg-[#048086ff] text-white font-semibold rounded-xl hover:bg-teal-900 transition-colors">
                    Transfer
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Popular extensions */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              ".com $12.99",
              ".net $14.99",
              ".org $13.99",
              ".io $49.99",
              ".xyz $49.99",
            ].map((ext) => (
              <span
                key={ext}
                className="bg-button px-4 py-2 rounded-full text-gray-300 hover:bg-teal-900 cursor-pointer transition-colors"
              >
                {ext}
              </span>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white to-cyan-50 py-0">
        <div className="max-w-6xl py-20 mx-auto px-4 sm:px-6 lg:px-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="/images/heroimage.jpg"
                alt="Website design and development illustration"
                className="rounded-2xl w-[1000px]"
              />
            </div>
            <div className="bg-none p-0">
              <h1 className="text-4xl md:text-3xl mb-4 font-bold text-teal-900">
                Domain Name | Hosting | Security 
              </h1>
             <p className="text-base text-black leading-[2rem] mb-8">
                At NexxyHost, Our main goal has been to provide high quality
                Hosting, Servers and Domain Name Registration at an affordable
                price to every client, Beginners, Small Businesses and Large
                Businesses. Without successful clients, we wouldn't be around,
                which is what pushes us to provide the best service possible
                without compromising on quality or features.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-8">
        <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-4xl md:text-3xl font-bold text-teal-900 mb-6">
              Reliable, Secured & Affordable
              </h1>
               <p className="text-base text-black leading-[2rem]">
                For NexxyHost, It is all about great pricing and a commitment to
                World-class customer service delivery. It's fundamental to
                generate confidence and security in each of our customers,
                offering them Top-notch services. Our vast Team is dedicated to
                helping our customers around the clock so we can be the best web
                hosting company to our customer at all times.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/heroimage.gif"
                alt="Website design and development illustration"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
