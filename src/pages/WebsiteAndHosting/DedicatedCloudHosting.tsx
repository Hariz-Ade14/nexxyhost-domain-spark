import React from "react";
import { Cloud, Zap, Shield, BarChart3, Globe, Server } from "lucide-react";
import Layout from "@/components/Layout";
import PricingPlans from "@/components/PricingPlans";
const DedicatedCloudHosting = () => {
  const features = [
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description:
        "Automatically scale resources up or down based on your traffic demands",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "NVMe SSD storage and latest CPUs for maximum speed and reliability",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Advanced firewalls, DDoS protection, and encrypted data storage",
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description:
        "Comprehensive monitoring and analytics for optimal performance",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Worldwide content delivery network for faster global access",
    },
    {
      icon: Server,
      title: "Dedicated Resources",
      description:
        "Guaranteed CPU, RAM, and storage exclusively for your applications",
    },
  ];

  const cloudBenefits = [
    "Auto-scaling based on traffic",
    "Load balancing across multiple servers",
    "99.99% uptime SLA",
    "Instant provisioning and deployment",
    "Built-in disaster recovery",
    "API access for automation",
    "Multiple data center locations",
    "Container and Kubernetes support",
  ];

  const plans = [
    {
      name: "Cloud Starter",
      price: "$49",
      popular: false,
      specs: {
        cpu: "2 vCPUs",
        ram: "4GB RAM",
        storage: "50GB SSD",
        bandwidth: "2TB Transfer",
      },
      features: [
        "Dedicated Cloud Server",
        "Full Root Access",
        "Free SSL Certificate",
        "DDoS Protection",
        "Daily Backups",
        "24/7 Monitoring",
        "99.9% Uptime SLA",
        "Technical Support",
      ],
    },
    {
      name: "Cloud Professional",
      price: "$99",
      popular: true,
      specs: {
        cpu: "4 vCPUs",
        ram: "8GB RAM",
        storage: "100GB SSD",
        bandwidth: "4TB Transfer",
      },
      features: [
        "Dedicated Cloud Server",
        "Full Root Access",
        "Auto-scaling Resources",
        "Load Balancer Included",
        "Free SSL Certificate",
        "Advanced DDoS Protection",
        "Hourly Backups",
        "Priority Support",
        "99.99% Uptime SLA",
      ],
    },
    {
      name: "Cloud Enterprise",
      price: "$199",
      popular: false,
      specs: {
        cpu: "8 vCPUs",
        ram: "16GB RAM",
        storage: "200GB SSD",
        bandwidth: "8TB Transfer",
      },
      features: [
        "Dedicated Cloud Server",
        "Full Root Access",
        "Advanced Auto-scaling",
        "Multiple Load Balancers",
        "CDN Integration",
        "Enterprise Security Suite",
        "Real-time Backups",
        "Dedicated Account Manager",
        "99.99% Uptime SLA",
        "Phone Support",
      ],
    },
  ];

  const useCases = [
    {
      title: "E-commerce Platforms",
      description:
        "Handle traffic spikes during sales with auto-scaling capabilities",
      icon: "🛒",
    },
    {
      title: "SaaS Applications",
      description:
        "Reliable infrastructure for software-as-a-service platforms",
      icon: "💼",
    },
    {
      title: "High-Traffic Websites",
      description:
        "Manage millions of visitors with distributed cloud architecture",
      icon: "🌐",
    },
    {
      title: "API Services",
      description:
        "Scalable backend infrastructure for API-driven applications",
      icon: "🔗",
    },
    {
      title: "Development Teams",
      description:
        "Flexible environments for development, staging, and production",
      icon: "👥",
    },
    {
      title: "Data Processing",
      description:
        "High-performance computing for data analysis and processing",
      icon: "📊",
    },
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView()
  }

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Dedicated Cloud Hosting Enterprise Performance
                </h1>
                <p className="text-base text-black mb-8 max-w-3xl">
                  Scale your business with our high-performance cloud
                  infrastructure. Get dedicated resources, automatic scaling,
                  and enterprise-grade security for mission-critical
                  applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={scrollToPricing} className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                    Launch Cloud Server
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cloud infrastructure and data centers"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-5 w-5 text-black" />
                    <span className="text-sm font-semibold text-teal-700">
                      Auto-Scaling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Enterprise Cloud Features
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto">
                Built for businesses that demand the highest levels of
                performance, security, and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-black leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cloud Infrastructure Illustration */}
        <section className="bg-gradient-to-br from-teal-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Cloud computing and scalable infrastructure"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                  <BarChart3 className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Built for Scale & Performance
                </h2>
                <p className="text-lg text-black mb-8">
                  Our cloud infrastructure automatically adapts to your needs,
                  ensuring optimal performance during traffic spikes and cost
                  efficiency during quiet periods.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Instant Scaling
                      </h4>
                      <p className="text-black">
                        Resources scale automatically based on demand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Global Network
                      </h4>
                      <p className="text-black">
                        Multiple data centers worldwide for low latency
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Enterprise Security
                      </h4>
                      <p className="text-black">
                        Advanced security measures and compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Perfect for Every Use Case
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto">
                Our cloud hosting adapts to your specific needs and scales with
                your growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-bold text-teal-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-black">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cloud Performance at Scale
              </h2>
              <p className="text-xl opacity-90">
                Trusted by enterprises and growing businesses worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">99.99%</div>
                <div className="opacity-90">Uptime SLA</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10GB/s</div>
                <div className="opacity-90">Network Speed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5K+</div>
                <div className="opacity-90">Cloud Instances</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Expert Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingPlans/>
        </section>
        

        {/* Cloud Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Why Choose Cloud Hosting?
                </h2>
                <p className="text-lg text-black mb-8">
                  Cloud hosting offers unmatched flexibility, reliability, and
                  performance compared to traditional hosting solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Instant Scalability
                      </h4>
                      <p className="text-black">
                        Scale resources up or down instantly based on demand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        High Availability
                      </h4>
                      <p className="text-black">
                        Redundant infrastructure ensures maximum uptime
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Cost Efficient
                      </h4>
                      <p className="text-black">
                        Pay only for the resources you actually use
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-teal-900 mb-6">
                  Cloud Features Included:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {cloudBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center text-black"
                    >
                      <span className="w-2 h-2 bg-teal-900 rounded-full mr-3"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DedicatedCloudHosting;
