import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Shield,
  Lock,
  AlertTriangle,
  Zap,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";

export default function WebSecurityPage() {
  const securityPlans = [
    {
      name: "Basic Protection",
      price: "$9.99",
      period: "/month",
      description: "Essential security for small websites",
      features: [
        "Malware Scanning",
        "Basic Firewall Protection",
        "Security Monitoring",
        "Automated Backups",
        "SSL Certificate",
        "Email Alerts",
      ],
      color: "border-teal-200",
    },
    {
      name: "Advanced Security",
      price: "$24.99",
      period: "/month",
      description: "Comprehensive protection for business websites",
      features: [
        "Real-time Malware Scanning",
        "Advanced WAF Protection",
        "DDoS Attack Mitigation",
        "Daily Security Scans",
        "Automated Malware Removal",
        "Daily Backups",
        "SSL Certificate",
        "Security Dashboard",
        "Email & SMS Alerts",
      ],
      color: "border-cyan-400",
      popular: true,
    },
    {
      name: "Enterprise Security",
      price: "$49.99",
      period: "/month",
      description: "Maximum protection for high-value websites",
      features: [
        "Real-time Malware Scanning",
        "Enterprise WAF Protection",
        "Advanced DDoS Protection",
        "Hourly Security Scans",
        "Automated Malware Removal",
        "Hourly Backups",
        "Extended Validation SSL",
        "Security Dashboard",
        "Priority Incident Response",
        "Dedicated Security Expert",
        "PCI Compliance Scanning",
        "Custom Security Rules",
      ],
      color: "border-teal-400",
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Web Application Firewall",
      description: "Block malicious traffic before it reaches your website",
    },
    {
      icon: AlertTriangle,
      title: "Malware Detection",
      description: "Continuous scanning to detect and remove malicious code",
    },
    {
      icon: Lock,
      title: "DDoS Protection",
      description:
        "Advanced mitigation against distributed denial of service attacks",
    },
    {
      icon: Zap,
      title: "Automated Backups",
      description: "Regular backups with one-click restoration options",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Advanced Protection
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                Web Security Solutions
              </h1>
              <p className="mb-8 text-xl text-cyan-100 max-w-2xl mx-auto">
                Protect your website from hackers, malware, and data breaches
                with our comprehensive security solutions. Keep your business
                and customers safe online.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100"
                >
                  Secure Your Website
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Free Security Scan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Threats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Protect Against Growing Cyber Threats
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Websites face an average of 94 attacks per day. Our
                    comprehensive security solutions protect your website from
                    hackers, malware, and other online threats, ensuring your
                    business and customer data remains safe.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Malware & Ransomware
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        SQL Injection Attacks
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        DDoS Attacks
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Brute Force Attempts
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Zero-Day Exploits
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/images/security-shield.png"
                      alt="Advanced web security protection shield"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20"></div>

                    {/* Security Indicators */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-800">
                          Threats Blocked
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium text-gray-800">
                          24/7 Protection
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our multi-layered security approach protects your website from
                all angles
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                How Our Security Works
              </h2>
              <div className="grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Monitor
                  </h3>
                  <p className="text-gray-600">
                    Continuous monitoring of your website for suspicious
                    activity and potential threats
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Detect
                  </h3>
                  <p className="text-gray-600">
                    Advanced algorithms identify malware, vulnerabilities, and
                    attack patterns
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Protect
                  </h3>
                  <p className="text-gray-600">
                    Automatically block threats and apply security patches to
                    vulnerabilities
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Report
                  </h3>
                  <p className="text-gray-600">
                    Detailed security reports and alerts keep you informed of
                    your website's security status
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Dashboard Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="/images/performance-dashboard.png"
                      alt="Security monitoring dashboard"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20"></div>

                    {/* Dashboard Elements */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-800">
                          Security Status
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-gray-800">
                          Threat Analytics
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Real-Time Security Dashboard
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Monitor your website's security status in real-time with our
                    intuitive dashboard. Get instant alerts about potential
                    threats and take immediate action to protect your website.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Real-time threat monitoring
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Security incident history
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        Vulnerability assessment
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">
                        One-click security actions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Plans Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                Security Plans
              </h2>
              <p className="text-lg text-gray-600">
                Choose the right level of protection for your website
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {securityPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative ${plan.color} ${
                    plan.popular ? "ring-2 ring-cyan-400 scale-105" : ""
                  } transition-transform hover:scale-105`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-900">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                      Get Protected
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Security FAQ
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900">
                        How does the website firewall work?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Our Web Application Firewall (WAF) acts as a shield
                        between your website and the internet. It filters all
                        incoming traffic, blocking malicious requests before
                        they reach your website. The WAF uses intelligent rules
                        to identify and block common attack patterns, SQL
                        injections, cross-site scripting, and other threats.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900">
                        What happens if malware is detected on my site?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        When malware is detected, you'll receive an immediate
                        alert. With our Advanced and Enterprise plans, we
                        automatically remove the malware and patch the
                        vulnerability that allowed the infection. We then
                        perform a thorough scan to ensure all malicious code has
                        been removed and provide a detailed report of the
                        incident.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Can security solutions slow down my website?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Our security solutions are designed to have minimal
                        impact on website performance. We use a cloud-based
                        approach that filters traffic before it reaches your
                        server, actually improving performance in many cases by
                        blocking malicious requests. Our system is optimized to
                        add less than 1ms of latency to legitimate requests.
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Do I need security if I have a small website?
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </div>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Small websites are actually targeted more frequently
                        because they often have fewer security measures in
                        place. Hackers use automated tools that scan the
                        internet for vulnerable websites regardless of size. Our
                        Basic Protection plan is specifically designed to
                        provide affordable but effective security for small
                        websites.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Protect Your Website Today
            </h2>
            <p className="mb-8 text-xl text-cyan-100">
              Don't wait until after an attack. Secure your website now.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Get Protected Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
