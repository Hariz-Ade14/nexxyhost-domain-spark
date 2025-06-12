import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Lock, ArrowRight, CheckCircle } from "lucide-react"
import Layout from "@/components/Layout"
import FAQs from "@/components/FAQs"
export default function SSLCertificatesPage() {
  const sslTypes = [
    {
      name: "Domain Validation (DV)",
      price: "$29.99",
      period: "/year",
      description: "Basic SSL security for small websites",
      features: [
        "Domain ownership validation",
        "Secure HTTPS connection",
        "Padlock in browser",
        "Quick issuance (minutes)",
        "Automatic renewal option",
        "Compatible with all browsers",
      ],
      color: "border-teal-900",
    },
    {
      name: "Organization Validation (OV)",
      price: "$149.99",
      period: "/year",
      description: "Enhanced validation for businesses",
      features: [
        "Business identity verification",
        "Company details in certificate",
        "Secure HTTPS connection",
        "Padlock in browser",
        "Higher trust indicator",
        "1-3 day issuance",
        "Automatic renewal option",
        "Compatible with all browsers",
      ],
      color: "border-teal-900",
      popular: true,
    },
    {
      name: "Extended Validation (EV)",
      price: "$299.99",
      period: "/year",
      description: "Maximum trust for e-commerce & financial sites",
      features: [
        "Rigorous business verification",
        "Green address bar (some browsers)",
        "Company name display",
        "Highest trust indicator",
        "Secure HTTPS connection",
        "Padlock in browser",
        "3-5 day issuance",
        "Automatic renewal option",
        "Compatible with all browsers",
      ],
      color: "border-teal-900",
    },
  ]

  const benefits = [
    {
      title: "Secure Customer Data",
      description: "Protect sensitive information with end-to-end encryption",
      icon: Lock,
    },
    {
      title: "Build Customer Trust",
      description: "Display security indicators that customers recognize and trust",
      icon: Shield,
    },
    {
      title: "Improve SEO Rankings",
      description: "Google gives preference to secure HTTPS websites in search results",
      icon: CheckCircle,
    },
    {
      title: "PCI Compliance",
      description: "Meet payment card industry requirements for online transactions",
      icon: Check,
    },
  ]

  const sslFaqData = [
    {
      question: "What is an SSL certificate?",
      answer: "An SSL (Secure Sockets Layer) certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. It ensures that all data passed between the web server and browser remains private and secure."
    },
    {
      question: "What's the difference between SSL certificate types?",
      answer: "The main differences are in the validation process and visual indicators. DV certificates verify domain ownership only and are issued quickly. OV certificates verify both domain ownership and organization details. EV certificates require the most rigorous verification and provide the highest level of trust with special browser indicators."
    },
    {
      question: "How long does it take to issue an SSL?",
      answer: "DV certificates can be issued within minutes to a few hours. OV certificates typically take 1-3 business days for verification and issuance. EV certificates require the most thorough validation and usually take 3-5 business days to issue."
    },
    {
      question: "Do I need technical knowledge to install SSL?",
      answer: "No! If you host with us, we offer one-click SSL installation or our support team can install it for you at no extra charge. For customers hosting elsewhere, we provide detailed installation guides and can offer installation assistance for a small fee."
    }
  ];
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Hero Section */}
      <section className="bg to-teal-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">Enhanced Website Security</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl text-teal-900">SSL Certificates</h1>
            <p className="mb-8 text-base text-black max-w-2xl mx-auto">
              Secure your website with industry-standard SSL encryption. Build customer trust, improve SEO rankings, and
              protect sensitive data with our range of SSL certificate options.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-button text-white hover:bg-teal-900">
                Get SSL Protection
              </Button>
              <Button size="lg" variant="outline" className="border-teal-900 border border-2 text-teal-900 hover:bg-button hover:text-white">
                Compare SSL Types
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SSL Illustration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/images/ssl2.avif"
                    alt="SSL security shield protecting website data"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20"></div>

                  {/* SSL Indicators */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-800">256-bit Encryption</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium text-gray-800">Trusted Security</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-teal-900 mb-6">Why Your Website Needs SSL</h2>
                <p className="text-lg text-black mb-6">
                  SSL certificates create an encrypted connection between your website and your visitors' browsers,
                  ensuring that all data passed between them remains private and secure. In today's digital landscape,
                  SSL is no longer optional—it's essential.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-900 rounded-full"></div>
                    <span className="text-black font-medium">Encrypts sensitive information</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-900 rounded-full"></div>
                    <span className="text-black font-medium">Builds customer confidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-900 rounded-full"></div>
                    <span className="text-black font-medium">Required for e-commerce sites</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-900 rounded-full"></div>
                    <span className="text-black font-medium">Improves search engine rankings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 sm:text-4xl mb-4">Benefits of SSL Certificates</h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              Protect your website and your customers with industry-standard security
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-teal-900">{benefit.title}</CardTitle>
                    <CardDescription className="text-black">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* SSL Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-teal-900 sm:text-4xl mb-4">Choose Your SSL Certificate</h2>
            <p className="text-lg text-black">Select the right level of validation for your website needs</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {sslTypes.map((ssl, index) => (
              <Card
                key={index}
                className={`relative ${ssl.color} ${ssl.popular ? "ring-2 ring-teal-900 scale-105" : ""} transition-transform hover:scale-105`}
              >
                {ssl.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-teal-900">{ssl.name}</CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-teal-900">{ssl.price}</span>
                    <span className="text-black">{ssl.period}</span>
                  </div>
                  <CardDescription>{ssl.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {ssl.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-button hover:from-teal-600 hover:to-cyan-600 hover:bg-teal-800">
                    Get Certificate
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal-900 text-center mb-12">How SSL Installation Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Purchase Certificate</h3>
                <p className="text-black">
                  Choose the SSL certificate type that best fits your website's needs and complete your purchase
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Validation Process</h3>
                <p className="text-black">
                  Complete the validation process to verify your domain ownership or business identity
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">Installation & Activation</h3>
                <p className="text-black">
                  Our team installs and configures your SSL certificate, or use our one-click installation tool
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
    <FAQs faqs={sslFaqData}/>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Secure Your Website Today</h2>
          <p className="mb-8 text-xl text-cyan-100">Join thousands of websites protected by our SSL certificates</p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Get SSL Protection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
    </Layout>
  )
}
