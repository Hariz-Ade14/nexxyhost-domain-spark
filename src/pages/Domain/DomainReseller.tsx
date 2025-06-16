import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";


const DomainResellerProgram = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    expectedVolume: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description:
        "We'll review your application and get back to you within 24 hours.",
    });
    setFormData({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      expectedVolume: "",
    });
  };


  const benefits = [
    {
      icon: "💰",
      title: "High Profit Margins",
      description:
        "Earn up to 35% commission on every domain registration and renewal",
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description:
        "Simple API integration with comprehensive documentation and support",
    },
    {
      icon: "🎨",
      title: "White Label Ready",
      description: "Fully customizable interface to match your brand identity",
    },
    {
      icon: "📈",
      title: "Growing Market",
      description: "Tap into the ever-expanding domain registration market",
    },
    {
      icon: "🚀",
      title: "Fast Setup",
      description:
        "Get started in minutes with our streamlined onboarding process",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br  mt-20 from-teal-50 via-white to-teal-50">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
              Become a Domain Reseller
            </h1>
            <p className="text-base text-black mb-8 max-w-3xl mx-auto">
              Join our profitable domain reseller program and start earning with
              competitive wholesale prices, powerful tools, and dedicated
              support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text !bg-button px-8">
                Start Your Application
              </Button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-teal-900 text-center mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[80%] flex mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl text-teal-900 font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-black">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
        

          {/* Application Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm mb-16">
            <h2 className="text-3xl font-bold text-center text-teal-900 mb-8">
              Apply to Become a Reseller
            </h2>
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <Label htmlFor="expectedVolume">
                  Expected Monthly Volume *
                </Label>
                <Input
                  id="expectedVolume"
                  name="expectedVolume"
                  value={formData.expectedVolume}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 50-100 domains per month"
                />
              </div>

              <Button type="submit" size="lg" className="w-full !bg-button hover:!bg-teal-700">
                Submit Application
              </Button>
            </form>
          </div>

          {/* Features Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-teal-900 mb-8">
              Powerful Reseller Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-teal-900 mb-2">Custom Pricing</h3>
                <p className="text-black text-sm">
                  Set your own retail prices and maximize profits
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-xl">⚡</span>
                </div>
                <h3 className="font-semibold text-teal-900 mb-2">Real-time API</h3>
                <p className="text-black text-sm">
                  Instant domain registration and management
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">📊</span>
                </div>
                <h3 className="font-semibold text-teal-900 mb-2">Analytics Dashboard</h3>
                <p className="text-black text-sm">
                  Track sales, commissions, and performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-600 text-xl">🛠️</span>
                </div>
                <h3 className="font-semibold text-teal-900 mb-2">Developer Tools</h3>
                <p className="text-black text-sm">
                  SDKs, plugins, and integration support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DomainResellerProgram;
