
import React, { useState } from 'react';

const Hero = () => {
  const [domain, setDomain] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Lightning effect background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-blue-400 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-24 bg-purple-400 transform -rotate-12 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-20 bg-cyan-400 transform rotate-45 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Find the perfect domain.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Fast. Secure. Affordable.
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Start your online journey with NexxyHost. Get premium hosting, domains, and security solutions all in one place.
          </p>

          {/* Domain search bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col lg:flex-row gap-4 p-2 bg-white rounded-2xl shadow-2xl">
              <div className="flex-1">
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter your domain name..."
                  className="w-full px-6 py-4 text-lg text-gray-900 bg-transparent border-none outline-none placeholder-gray-500"
                />
              </div>
              <div className="flex gap-2">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                  Search
                </button>
                <button className="px-8 py-4 bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-600 transition-colors">
                  Transfer Domain
                </button>
              </div>
            </div>
          </div>

          {/* Popular extensions */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-gray-400">Popular:</span>
            {['.com $12.99', '.net $14.99', '.org $13.99', '.io $49.99'].map((ext) => (
              <span key={ext} className="bg-gray-800 px-4 py-2 rounded-full text-gray-300 hover:bg-gray-700 cursor-pointer transition-colors">
                {ext}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;
