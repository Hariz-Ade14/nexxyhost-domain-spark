import Layout from "@/components/Layout";
import { useState } from "react";
import BusinessEmailHosting from "./BusinessEmailHosting";
import EnterpriseEmailHosting from "./EnterpriseEmailHosting";
import { Mail } from "lucide-react";
const EmailServices = () => {
  const [activeTab, setActiveTab] = useState("business");

 

  return (
    <Layout>
      <div>
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Professional Business Email Hosting
                </h1>
                <p className="text-base text-black mb-8">
                  Establish credibility and enhance your professional image with
                  custom domain email addresses. Secure, reliable, and
                  feature-rich email hosting for businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                    Start Email Hosting
                  </button>
                  <button className="border-2 border-button text-button px-8 py-3 rounded-lg font-semibold hover:bg-button hover:text-white transition-all">
                    View Features
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional business email communication"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-button" />
                    <span className="text-sm font-semibold text-gray-700">
                      Professional Email
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("business")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "business"
                      ? "bg-button text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Business Email
                </button>
                <button
                  onClick={() => setActiveTab("enterprise")}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "enterprise"
                      ? "bg-button text-white"
                      : "text-black"
                  }`}
                >
                  Enterprise Email
                </button>
              </div>
            </div>
          </div>
        </section>

        {activeTab === "business" && <BusinessEmailHosting />}

        {activeTab === "enterprise" && <EnterpriseEmailHosting />}

      </div>
    </Layout>
  );
};

export default EmailServices;
