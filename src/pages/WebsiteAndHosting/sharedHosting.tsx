import React from "react";
import Layout from "@/components/Layout";
import PricingPlans from "@/components/PricingPlans";
import { Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SharedHosting: React.FC = () => {
  return (
    <Layout>
      <div>
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Reliable Shared Hosting For Everyone
                </h1>
                <p className="text-base text-black mb-8 max-w-3xl">
                  Perfect for personal websites, blogs, and small businesses.
                  Get fast, secure, and affordable hosting with everything you
                  need to succeed online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a className="bg-button text-center text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105" href="#pricing">
                    <button >
                      Start Your Website
                    </button>
                  </a>
                  <button className="border-2 border-button text-button px-8 py-3 rounded-lg font-semibold hover:bg-button hover:text-white transition-all">
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
                    <span className="text-sm font-semibold text-teal-700">
                      Shared Resources
                    </span>
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
              <p className="text-xl text-black max-w-3xl mx-auto">
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
                    <span className="text-black">Intel Xeon Processors</span>
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
                    <span className="text-black">NVMe SSD Storage</span>
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
                    <span className="text-black">Multiple Cache Layers</span>
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
                    <span className="text-black">Nginx Server</span>
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
                    <span className="text-black">Global CDN Integration</span>
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
                    <span className="text-black">cPanel Control Panel</span>
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
                    <span className="text-black">
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
                    <span className="text-black">
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
                    <span className="text-black">Free Website Builder</span>
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
                    <span className="text-black">Git Version Control</span>
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
                    <span className="text-black">Free SSL Certificates</span>
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
                    <span className="text-black">DDoS Protection</span>
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
                    <span className="text-black">
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
                    <span className="text-black">Web Application Firewall</span>
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
                    <span className="text-black">Regular Security Updates</span>
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
                    <span className="text-black">
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
                    <span className="text-black">99.9% Uptime Guarantee</span>
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
                    <span className="text-black">Automated Backups</span>
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
                    <span className="text-black">
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
                    <span className="text-black">
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
                <p className="text-lg text-black mb-8">
                  Our shared hosting platform uses the latest technology to
                  ensure your website loads quickly and stays online 24/7.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        SSD Storage
                      </h4>
                      <p className="text-black">
                        Lightning-fast solid-state drives for optimal
                        performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Global CDN
                      </h4>
                      <p className="text-black">
                        Content delivery network for faster global access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Advanced Caching
                      </h4>
                      <p className="text-black">
                        Built-in caching technology for improved load times
                      </p>
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
            <div className="bg-gradient-to-r from-teal-900 to-cyan-600 rounded-xl overflow-hidden shadow-xl">
              <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:py-16">
                <div className="lg:w-0 lg:flex-1">
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Free Website Migration
                  </h2>
                  <p className="mt-4 max-w-3xl text-lg text-white">
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
                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <p className="w-full cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-button hover:bg-teal-700">
                            Start Migration Process
                          </p>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[40vw]">
                          <DialogHeader className="!text-xl text-teal-900 font-bold">
                            Start Migration
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="name-1">Name</Label>
                              <Input id="name-1" name="name" />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" name="email" />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="Phone Number">Phone Number</Label>
                              <Input id="phone number" name="phone number" />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="url">Website Url</Label>
                              <Input id="url" name="url" />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="project">Project</Label>
                              <Input id="project" name="project" />
                            </div>
                          </div>
                          <Button className="!bg-button hover:bg-button/50 w-[40%] flex justify-self-end">
                            Migrate
                          </Button>
                        </DialogContent>
                      </form>
                    </Dialog>

                    <p className="mt-3 text-sm text-black text-center">
                      No credit card required for migration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="pricing" className=""><PricingPlans /></div>
        

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-100">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
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
