import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Globe, Calendar, User, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

// Define a type for the WHOIS result
interface WhoisResult {
  domain_name?: string;
  whois_server?: string;
  creation_date?: string;
  expiration_date?: string;
  registrar?: string;

  registrar_url?: string;

  name_servers?: string[];
  // Add other fields as needed
}

export default function WhoisSearchPage() {
  const [domainName, setDomainName] = useState("");
  const [result, setResult] = useState<WhoisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const domainExtensions = [
    { name: ".com", price: "$12.99/year", popular: true },
    { name: ".org", price: "$14.99/year" },
    { name: ".net", price: "$14.99/year" },
    { name: ".io", price: "$39.99/year" },
    { name: ".co", price: "$24.99/year" },
    { name: ".dev", price: "$19.99/year" },
    { name: ".app", price: "$19.99/year" },
    { name: ".store", price: "$29.99/year" },
  ];

  const domainFeatures = [
    {
      title: "Free WHOIS Privacy",
      description:
        "Keep your personal information private with free WHOIS privacy protection",
    },
    {
      title: "Domain Lock",
      description: "Prevent unauthorized domain transfers with domain locking",
    },
    {
      title: "Auto-Renewal",
      description: "Never lose your domain with automatic renewal options",
    },
    {
      title: "DNS Management",
      description: "Easy DNS management with our intuitive control panel",
    },
  ];

  const handleSearch = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    if (!domainName) {
      setError("Please enter a domain name");
      setLoading(false);

      return;
    }

    const token = import.meta.env.VITE_WHOIS_API_KEY;

    try {
      setError(null);
      setResult(null);
      const response = await axios.get("https://api.api-ninjas.com/v1/whois", {
        params: { domain: domainName },
        headers: {  
          Authorization: "Bearer",
          "X-Api-Key": token ,
          "Content-Type": "application/json",
        },
      });
      const responseMessage = response.data;

      console.log(responseMessage);
      console.log(responseMessage.domain_name);
      console.log(response);

      if (response) {
        setError(false);
        setLoading(false);
        setResult(responseMessage);
      }
    } catch (err) {
      setError("Failed to fetch domain info.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-200 via-teal-700 to-teal-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Domain Tools
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
                WHOIS Domain Lookup
              </h1>
              <p className="mb-8 text-xl text-cyan-100 max-w-2xl mx-auto">
                Find detailed information about any domain name. Check domain
                availability, ownership details, expiration dates, and more with
                our free WHOIS lookup tool.
              </p>

              {/* WHOIS Search Form */}
              <div className="max-w-2xl mx-auto mt-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Input
                      type="text"
                      value={domainName}
                      onChange={(e) => setDomainName(e.target.value)}
                      placeholder="Enter a domain name..."
                      className="w-full px-4 py-6 rounded-lg text-gray-900 text-lg"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="bg-button hover:from-teal-600 hover:to-cyan-600 px-8 py-6 text-lg"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Search
                  </Button>
                </div>
                <p className="text-sm text-cyan-100 mt-3">
                  Example: yourdomain.com, example.org, mybusiness.net
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHOIS Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">
                  What is WHOIS?
                </h2>
                <p className="text-lg text-black max-w-3xl mx-auto">
                  WHOIS is a query and response protocol that provides
                  information about domain registration, including the domain
                  owner, registrar, registration date, expiration date, and name
                  servers.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-tr from-teal-50 to-cyan-50 p-8">
                    <svg
                      className="w-full h-auto"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="64"
                        y="112"
                        width="384"
                        height="288"
                        rx="16"
                        fill="#E2F2F9"
                        stroke="#0D9488"
                        strokeWidth="12"
                      />
                      <rect
                        x="96"
                        y="160"
                        width="320"
                        height="48"
                        rx="8"
                        fill="white"
                        stroke="#06B6D4"
                        strokeWidth="4"
                      />
                      <circle cx="128" cy="184" r="12" fill="#06B6D4" />
                      <rect
                        x="152"
                        y="178"
                        width="240"
                        height="12"
                        rx="4"
                        fill="#0D9488"
                      />
                      <rect
                        x="96"
                        y="224"
                        width="320"
                        height="144"
                        rx="8"
                        fill="white"
                        stroke="#06B6D4"
                        strokeWidth="4"
                      />
                      <rect
                        x="120"
                        y="248"
                        width="80"
                        height="12"
                        rx="4"
                        fill="#0D9488"
                      />
                      <rect
                        x="120"
                        y="272"
                        width="272"
                        height="8"
                        rx="4"
                        fill="#0D9488"
                        opacity="0.6"
                      />
                      <rect
                        x="120"
                        y="296"
                        width="272"
                        height="8"
                        rx="4"
                        fill="#0D9488"
                        opacity="0.6"
                      />
                      <rect
                        x="120"
                        y="320"
                        width="272"
                        height="8"
                        rx="4"
                        fill="#0D9488"
                        opacity="0.6"
                      />
                      <rect
                        x="120"
                        y="344"
                        width="160"
                        height="8"
                        rx="4"
                        fill="#0D9488"
                        opacity="0.6"
                      />
                      <circle
                        cx="256"
                        cy="400"
                        r="80"
                        stroke="#0D9488"
                        strokeWidth="12"
                        strokeDasharray="12 12"
                        opacity="0.3"
                      />
                      <path
                        d="M256 64L280 88M256 64L232 88M256 64V112"
                        stroke="#06B6D4"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M256 448L280 424M256 448L232 424M256 448V400"
                        stroke="#06B6D4"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* WHOIS Elements */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-teal-600" />
                        <span className="text-sm font-medium text-gray-800">
                          Domain Info
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-cyan-600" />
                        <span className="text-sm font-medium text-gray-800">
                          Registration Data
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-900 mb-6">
                    What Information Can You Find?
                  </h3>
                  <p className="text-lg text-black mb-6">
                    Our WHOIS lookup tool provides comprehensive domain
                    information to help you make informed decisions about domain
                    purchases, ownership verification, and more.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-900 font-medium block">
                          Domain Availability
                        </span>
                        <span className="text-black text-sm">
                          Check if a domain is available for registration
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-900 font-medium block">
                          Registration Details
                        </span>
                        <span className="text-black text-sm">
                          View registration and expiration dates for any domain
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-900 font-medium block">
                          Registrar Information
                        </span>
                        <span className="text-black text-sm">
                          Identify which company the domain is registered with
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-900 font-medium block">
                          Name Servers
                        </span>
                        <span className="text-black text-sm">
                          See which DNS servers are hosting the domain
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 w-3 h-3 bg-teal-900 rounded-full flex-shrink-0"></div>
                      <div>
                        <span className="text-teal-900 font-medium block">
                          Contact Information
                        </span>
                        <span className="text-black text-sm">
                          View registrant details (if not protected by privacy)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample WHOIS Result */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-teal-900 mb-4">
                  WHOIS Results
                </h2>
                {/* <p className="text-lg text-black">
                  Here's an example of the information our WHOIS lookup provides
                </p> */}
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-button text-white">
                  <CardTitle className="text-xl">
                    WHOIS Results for example.com
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-teal-900" />
                        Domain Information
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Domain Name:
                            </p>
                            <p className="font-medium text-gray-900">
                              {result && result.domain_name}
                            </p>
                          </div>
                          {/* <div>
                            <p className="text-sm text-gray-500">
                              Domain Status:
                            </p>
                            <p className="font-medium text-green-600">
                              Registered
                            </p>
                          </div> */}
                          <div>
                            <p className="text-sm text-gray-500">
                              Creation Date:
                            </p>
                            <p className="font-medium text-gray-900">
                              {result && result.creation_date}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Expiration Date:
                            </p>
                            <p className="font-medium text-gray-900">
                              {result && result.expiration_date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <User className="mr-2 h-5 w-5 text-teal-600" />
                        Registrar Information
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Registrar:</p>
                            <p className="font-medium text-gray-900">
                              {result && result.registrar}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              WHOIS Server:
                            </p>
                            <p className="font-medium text-gray-900">
                              {result && result.whois_server}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Registrar URL:
                            </p>
                            <p className="font-medium text-gray-900">
                              {result && result.registrar_url}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Globe className="mr-2 h-5 w-5 text-teal-600" />
                        Name Servers
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="space-y-2">
                          <p className="font-medium text-gray-900">
                            {result && result.name_servers[0]}
                          </p>
                          <p className="font-medium text-gray-900">
                            {result && result.name_servers[1]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Domain Registration Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-teal-900 sm:text-4xl mb-4">
                Register Your Domain
              </h2>
              <p className="text-base text-black max-w-2xl mx-auto">
                Found a domain that's available? Register it now before someone
                else does!
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {domainExtensions.map((ext, index) => (
                  <Card
                    key={index}
                    className={`text-center border-0 shadow-lg hover:shadow-xl transition-all ${
                      ext.popular ? "ring-2 ring-cyan-400" : ""
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">
                        {ext.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-teal-600">
                        {ext.price}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2">
                {domainFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-black">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to Register Your Domain?
            </h2>
            <p className="mb-8 text-xl text-cyan-100">
              Found the perfect domain? Register it today and start building
              your online presence.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Register Domain Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
