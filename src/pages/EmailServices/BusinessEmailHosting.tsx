import { Mail, Shield, Users, Globe, Clock, Database } from "lucide-react";
import EmailPricing from "@/components/EmailPricing";
const BusinessEmailHosting = () => {
  const features = [
    {
      icon: Mail,
      title: "Professional Email Addresses",
      description:
        "Create unlimited email addresses with your domain name for a professional image",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description:
        "Enterprise-grade spam filtering, virus protection, and encryption",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Shared calendars, contacts, and collaboration tools for your team",
    },
    {
      icon: Globe,
      title: "Global Access",
      description:
        "Access your email from anywhere with webmail, mobile apps, and desktop clients",
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description:
        "Reliable email service with guaranteed uptime and redundant infrastructure",
    },
    {
      icon: Database,
      title: "Generous Storage",
      description:
        "Ample mailbox storage with options to upgrade as your business grows",
    },
  ];

  const emailBenefits = [
    "Custom domain email addresses",
    "IMAP/POP3/SMTP support",
    "Mobile device synchronization",
    "Webmail interface included",
    "Spam and virus protection",
    "Email forwarding and aliases",
    "Auto-responder functionality",
    "Email backup and archiving",
  ];

  const securityFeatures = [
    {
      title: "Spam Protection",
      description: "Advanced spam filtering blocks 99.9% of unwanted emails",
      icon: "🛡️",
    },
    {
      title: "Virus Scanning",
      description: "Real-time virus and malware detection for all attachments",
      icon: "🔍",
    },
    {
      title: "Encryption",
      description: "SSL/TLS encryption for secure email transmission",
      icon: "🔒",
    },
    {
      title: "Backup & Recovery",
      description: "Automatic email backup with point-in-time recovery",
      icon: "💾",
    },
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Complete Business Email Solution
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Everything your business needs for professional email
              communication and collaboration
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

      {/* Email Interface Preview */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Email interface and mobile access"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                <Globe className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Access Your Email Anywhere
              </h2>
              <p className="text-lg text-black mb-8">
                Modern webmail interface with mobile apps and desktop client
                support. Stay connected and productive whether you're in the
                office or on the go.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Modern Webmail
                    </h4>
                    <p className="text-black">
                      Intuitive web interface accessible from any browser
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Mobile Apps
                    </h4>
                    <p className="text-black">
                      Native iOS and Android apps for seamless mobile access
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Desktop Clients
                    </h4>
                    <p className="text-black">
                      Works with Outlook, Thunderbird, and other email clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EmailPricing type="Busniess" />
      {/* Security Features */}
      <section className="py-20">
        <div className="md:max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Protect your business communications with advanced security
              features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Pricing Section */}

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Why Choose Business Email Hosting?
              </h2>
              <p className="text-base text-black mb-8">
                Professional email hosting enhances your business credibility
                and provides the reliability and features your team needs to
                communicate effectively.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-teal-900 mb-6">
                  Complete Email Features:
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {emailBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-teal-900 rounded-full mr-3"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business team collaboration and communication"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-xl shadow-lg text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm opacity-90">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Upgrade Your Business Email?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses that trust our email hosting for their
            professional communications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
              Start 
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessEmailHosting;
