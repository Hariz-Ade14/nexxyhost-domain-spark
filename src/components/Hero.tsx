import React, { useState } from "react";
import Header from "./Header";
const Hero = () => {
  const [domain, setDomain] = useState("");

  return (
    <section className="relative bg-[url('/images/nexxyhost.jpg')] min-h-fit bg-cover bg-center  text-white overflow-hidden">
      <Header/>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center flex flex-col gap-4">
          {/* Main headline */}
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-teal-300">
            NexxyHost Web Hosting
          </h1>
          <h1 className="text-2xl lg:text-4xl font-semibold leading-tight">
            Find the perfect domain.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Fast. Secure. Affordable.
            </span>
          </h1>

          <p className="text-xl lg:text-xl mt-10 text-gray-300  max-w-3xl mx-auto">
            Secured by multi-layers of security protection, together with
            redundancy capabilities.
          </p>

          {/* Domain search bar */}
          <div className="w-full mx-auto mb-8">
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
                <button className="px-8 py-3 bg-[#048086ff] text-white font-semibold rounded-xl hover:bg-teal-900 transition-colors">
                  Register
                </button>
                <button className="px-8 py-3 bg-[#048086ff] text-white font-semibold rounded-xl hover:bg-teal-900 transition-colors">
                  Transfer 
                </button>
              </div>
            </div>
          </div>

          {/* Popular extensions */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[".com $12.99", ".net $14.99", ".org $13.99", ".io $49.99",".xyz $49.99"].map(
              (ext) => (
                <span
                  key={ext}
                  className="bg-button px-4 py-2 rounded-full text-gray-300 hover:bg-teal-900 cursor-pointer transition-colors"
                >
                  {ext}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div> */}
    </section>
  );
};

export default Hero;
