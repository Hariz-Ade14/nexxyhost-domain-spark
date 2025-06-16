import { Mail, Shield, Users, Globe, Server, Zap } from "lucide-react";
import EmailPricing from "@/components/EmailPricing";
const EnterpriseEmailHosting = () => {
  const features = [
    {
      icon: Server,
      title: "Dedicated Infrastructure",
      description:
        "Dedicated email servers with guaranteed resources and maximum performance",
    },
    {
      icon: Shield,
      title: "Advanced Security Suite",
      description:
        "Enterprise-grade security with DLP, encryption, and compliance features",
    },
    {
      icon: Users,
      title: "Unlimited Users",
      description:
        "Support for unlimited email accounts with centralized management",
    },
    {
      icon: Globe,
      title: "Global Redundancy",
      description:
        "Multi-datacenter deployment with automatic failover and load balancing",
    },
    {
      icon: Zap,
      title: "High Performance",
      description:
        "Lightning-fast email delivery with SSD storage and optimized infrastructure",
    },
    {
      icon: Mail,
      title: "Advanced Features",
      description:
        "Enterprise collaboration tools, archiving, and integration capabilities",
    },
  ];

  const enterpriseFeatures = [
    "Dedicated email servers",
    "Unlimited email accounts",
    "Advanced threat protection",
    "Email archiving & compliance",
    "Single Sign-On (SSO) integration",
    "API access for integrations",
    "Custom domain management",
    "Priority enterprise support",
  ];

  const securityFeatures = [
    {
      title: "Advanced Threat Protection",
      description:
        "AI-powered threat detection and real-time protection against sophisticated attacks",
      icon: "🛡️",
    },
    {
      title: "Data Loss Prevention",
      description:
        "Prevent sensitive data from leaving your organization through email",
      icon: "🔒",
    },
    {
      title: "Compliance & Archiving",
      description:
        "Meet regulatory requirements with comprehensive email archiving",
      icon: "📋",
    },
    {
      title: "Encryption & Privacy",
      description:
        "End-to-end encryption and privacy controls for sensitive communications",
      icon: "🔐",
    },
  ];

  const complianceStandards = [
    "GDPR",
    "HIPAA",
    "SOX",
    "PCI DSS",
    "ISO 27001",
    "SOC 2",
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Enterprise-Grade Email Infrastructure
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Built for organizations that demand the highest levels of
              security, performance, and reliability
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

      {/* Security & Compliance */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Advanced Security & Compliance
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Protect your organization with enterprise-grade security and meet
              regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-12">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-teal-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-black text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">
              Compliance Standards Supported
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {complianceStandards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg text-center"
                >
                  <div className="font-bold text-teal-600">{standard}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Architecture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise data center and infrastructure"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                <Globe className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Global Enterprise Infrastructure
              </h2>
              <p className="text-lg text-black mb-8">
                Our enterprise email platform is built on a globally distributed
                infrastructure with redundancy, failover, and performance
                optimization at every level.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Multi-Datacenter Deployment
                    </h4>
                    <p className="text-gray-600">
                      Geographically distributed infrastructure for optimal
                      performance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Automatic Failover
                    </h4>
                    <p className="text-gray-600">
                      Seamless failover ensures continuous email availability
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Load Balancing
                    </h4>
                    <p className="text-gray-600">
                      Intelligent load distribution for optimal performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmailPricing type="Enterprise" />
      {/* Performance Stats */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise Performance Metrics
            </h2>
            <p className="text-xl opacity-90">
              Trusted by Fortune 500 companies and large organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="opacity-90">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">&lt;100ms</div>
              <div className="opacity-90">Email Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="opacity-90">Enterprise Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Why Choose Enterprise Email?
              </h2>
              <p className="text-lg text-black mb-8">
                Enterprise email hosting provides the scalability, security, and
                reliability that large organizations need for mission-critical
                communications.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-teal-900 mb-6">
                  Enterprise Features:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {enterpriseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-teal-900 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Enterprise team collaboration and communication"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-xl shadow-lg text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-sm opacity-90">Users Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8">
            Ready for Enterprise Email?
          </h2>
          <p className="text-xl text-black mb-12">
            Let our enterprise specialists design a custom email solution for
            your organization
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">
                Consultation
              </h3>
              <p className="text-black">
                Discuss your requirements with our enterprise specialists
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">
                Custom Design
              </h3>
              <p className="text-black">
                We design a solution tailored to your organization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">
                Implementation
              </h3>
              <p className="text-black">
                Seamless migration and deployment with minimal disruption
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-teal-600 text-teal-600 px-12 py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 hover:text-white transition-all">
              Request Demo
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default EnterpriseEmailHosting;
