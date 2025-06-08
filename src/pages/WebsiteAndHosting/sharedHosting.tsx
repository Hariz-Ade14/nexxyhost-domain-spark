import React from "react";
import Layout from "@/components/Layout";

import { Server, Shield, Zap, Users, Database, Globe } from 'lucide-react';

const SharedHosting: React.FC = () => {
  return (
    <Layout>
      <div>
        {/* Features Section */}
        <section id="features" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center my-6 flex items-center justify-center flex-col bg-[url('/images/banner333.jpg')] min-h-[500px] bg-cover bg-center">
              <h2 className="lg:text-5xl text-2xl font-bold text-teal-500 mb-4">
                Powerful Hosting Features
              </h2>
              <p className="text-xl text-teal-600 max-w-3xl mx-auto">
                Our shared hosting plans include everything you need to build
                and grow your website
              </p>
            </div>

          </div>
        </section>

        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-teal-900 mb-6">
                Reliable Shared Hosting
                {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> */}
                  For Everyone
                {/* </span> */}
              </h1>
              <p className="text-xl text-teal-600 mb-8 max-w-3xl">
                Perfect for personal websites, blogs, and small businesses. Get fast, secure, 
                and affordable hosting with everything you need to succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                  Start Your Website
                </button>
                <button className="border-2 border-teal-900 text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all">
                  View All Features
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Shared hosting servers and infrastructure"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-teal-700">Shared Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Technical Specs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-teal-600 max-w-3xl mx-auto">
                Our hosting infrastructure is built for performance, security,
                and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-900 mb-4">
                  Hardware & Performance
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Intel Xeon Processors</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">NVMe SSD Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Multiple Cache Layers</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Nginx Server</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Global CDN Integration
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-900 mb-4">
                  Software & Tools
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">cPanel Control Panel</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Latest PHP, MySQL, Perl, Python
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Softaculous Auto-Installer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Free Website Builder</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Git Version Control</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-900 mb-4">
                  Security Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Free SSL Certificates</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">DDoS Protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Automatic Malware Scanning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Web Application Firewall
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Regular Security Updates
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-teal-900 mb-4">
                  Support & Reliability
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      24/7/365 Technical Support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      99.9% Uptime Guarantee
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">Automated Backups</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      30-Day Money-Back Guarantee
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-teal-600">
                      Comprehensive Knowledge Base
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="High-performance hosting infrastructure"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                <Zap className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Built for Speed & Reliability
              </h2>
              <p className="text-lg text-teal-600 mb-8">
                Our shared hosting platform uses the latest technology to ensure your website 
                loads quickly and stays online 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">SSD Storage</h4>
                    <p className="text-teal-600">Lightning-fast solid-state drives for optimal performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Global CDN</h4>
                    <p className="text-teal-600">Content delivery network for faster global access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">Advanced Caching</h4>
                    <p className="text-teal-600">Built-in caching technology for improved load times</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Free Migration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl overflow-hidden shadow-xl">
              <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:py-16">
                <div className="lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-teal-800">
                    Free Website Migration
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg text-cyan-100">
                    Our team of experts will handle your website migration
                    completely free of charge. We'll ensure your website is
                    transferred without any downtime or data loss.
                  </p>
                  <div className="mt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg
                          className="h-6 w-6 text-white mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-white">
                          Zero downtime migration
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-6 w-6 text-white mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-white">
                          Complete transfer of files, databases, and emails
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-6 w-6 text-white mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-white">
                          Expert configuration matching your previous setup
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-teal-900 mb-4">
                      Ready to migrate?
                    </h3>
                    <a
                      href="/hosting/migration"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-button hover:bg-blue-700"
                    >
                      Start Migration Process
                    </a>
                    <p className="mt-3 text-sm text-teal-500 text-center">
                      No credit card required for migration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-teal-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect hosting plan for your website and get online in
              minutes with our easy setup process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#pricing"
                className="px-8 py-3 rounded-md bg-button text-white font-medium text-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                View Hosting Plans
              </a>
             
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SharedHosting;
