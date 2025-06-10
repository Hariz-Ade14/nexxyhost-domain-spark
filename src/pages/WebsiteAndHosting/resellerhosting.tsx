import Layout from '@/components/Layout';
import { Users, DollarSign, Settings, Award, Headphones, TrendingUp } from 'lucide-react';

const ResellerHosting = () => {
  const features = [
    {
      icon: Users,
      title: 'White Label Solution',
      description: 'Brand the hosting service as your own with custom logos and branding'
    },
    {
      icon: DollarSign,
      title: 'Profitable Business',
      description: 'Generate recurring revenue with competitive pricing and high margins'
    },
    {
      icon: Settings,
      title: 'Complete Control',
      description: 'Full WHM/cPanel access to manage all client accounts independently'
    },
    {
      icon: Award,
      title: 'Quality Infrastructure',
      description: 'Enterprise-grade servers and network infrastructure for reliability'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Priority technical support to help you and your clients succeed'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth Tools',
      description: 'Marketing materials and tools to help grow your hosting business'
    }
  ];

  const businessBenefits = [
    'Start your own hosting company',
    'Generate recurring monthly income',
    'Full control over pricing and packages',
    'White-label branding options',
    'Comprehensive billing integration',
    'Client management tools',
    'Technical support for you and clients',
    'Marketing and sales resources'
  ];

  const plans = [
    {
      name: 'Reseller Starter',
      price: '$19.99',
      popular: false,
      resources: {
        disk: '50GB',
        bandwidth: '500GB',
        accounts: '25',
        domains: 'Unlimited'
      },
      features: [
        'WHM/cPanel Included',
        'Free SSL Certificates',
        'White Label Branding',
        'WHMCS Billing Software',
        'Free Website Migration',
        'Email Support',
        '99.9% Uptime Guarantee',
        'Client Management Tools'
      ]
    },
    {
      name: 'Reseller Professional',
      price: '$39.99',
      popular: true,
      resources: {
        disk: '100GB',
        bandwidth: '1TB',
        accounts: '50',
        domains: 'Unlimited'
      },
      features: [
        'WHM/cPanel Included',
        'Free SSL Certificates',
        'White Label Branding',
        'WHMCS Billing Software',
        'Free Website Migration',
        'Priority Support',
        'Softaculous Auto-Installer',
        'Marketing Materials',
        '99.9% Uptime Guarantee',
        'Private Name Servers'
      ]
    },
    {
      name: 'Reseller Enterprise',
      price: '$79.99',
      popular: false,
      resources: {
        disk: '200GB',
        bandwidth: '2TB',
        accounts: '100',
        domains: 'Unlimited'
      },
      features: [
        'WHM/cPanel Included',
        'Free SSL Certificates',
        'White Label Branding',
        'WHMCS Billing Software',
        'Free Website Migration',
        'Phone Support',
        'Softaculous Auto-Installer',
        'Marketing Materials',
        'SEO Tools Included',
        'Dedicated Account Manager',
        '99.99% Uptime SLA',
        'Private Name Servers'
      ]
    }
  ];

  const successStories = [
    {
      name: 'TechStart Solutions',
      business: 'Web Development Agency',
      result: 'Added $5K/month recurring revenue',
      quote: 'Reseller hosting helped us expand our services and increase client retention significantly.'
    },
    {
      name: 'Digital Marketing Pro',
      business: 'Marketing Consultant',
      result: '150+ hosting clients in 18 months',
      quote: 'The white-label solution lets me offer complete web solutions under my brand.'
    },
    {
      name: 'Local Web Services',
      business: 'Regional IT Company',
      result: '$15K/month hosting revenue',
      quote: 'Outstanding support and reliability helped us build a thriving hosting business.'
    }
  ];

  return (
    <Layout>
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                Start Your Hosting Business With Reseller Hosting
              </h1>
              <p className="text-base text-black mb-8">
                Launch your own web hosting company with our white-label reseller solutions. 
                Build recurring revenue, expand your services, and grow your business with 
                enterprise-grade infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                  Start Your Business
                </button>
                <button className="border-2 border-button text-button px-8 py-3 rounded-lg font-semibold hover:bg-button hover:text-white transition-all">
                  View Business Plan
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Business growth and reseller hosting opportunities"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-teal-600" />
                  <span className="text-sm font-semibold text-gray-700">Recurring Revenue</span>
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
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Our reseller hosting platform provides all the tools and support to build a profitable hosting business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-900 mb-3">{feature.title}</h3>
                  <p className="text-black leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Opportunity Illustration */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Entrepreneur building hosting business"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                Build a Profitable Hosting Business
              </h2>
              <p className="text-lg text-black mb-8">
                Join thousands of entrepreneurs who have built successful hosting businesses 
                with our reseller platform. Start generating recurring revenue today.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">White-Label Platform</h4>
                    <p className="text-black">Complete branding control with your logo and colors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">High Profit Margins</h4>
                    <p className="text-black">Competitive pricing allows for 80%+ profit margins</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">24/7 Support</h4>
                    <p className="text-black">We support both you and your clients around the clock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunity */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Success Network
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our resellers consistently build profitable businesses with our comprehensive 
                platform and dedicated support system.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">80%+</div>
                  <div className="opacity-90 text-sm">Profit Margins</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="opacity-90 text-sm">Business Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">5K+</div>
                  <div className="opacity-90 text-sm">Active Resellers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="opacity-90 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">What's Included:</h3>
              <div className="space-y-3">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    <span className="text-sm opacity-90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Reseller Hosting Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business goals and scale as you grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl ${plan.popular ? 'ring-4 ring-teal-500 transform scale-105' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="text-center pt-6">
                    <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-teal-900 mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-teal-600">{plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    
                    {/* Resources */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg mb-6">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="text-gray-700"><strong>Disk Space:</strong> {plan.resources.disk}</div>
                        <div className="text-gray-700"><strong>Bandwidth:</strong> {plan.resources.bandwidth}</div>
                        <div className="text-gray-700"><strong>Accounts:</strong> {plan.resources.accounts}</div>
                        <div className="text-gray-700"><strong>Domains:</strong> {plan.resources.domains}</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700' 
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}>
                    Start Reselling
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
              Success Stories from Our Resellers
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              See how other entrepreneurs have built thriving hosting businesses with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-teal-900">{story.name}</h4>
                  <p className="text-black font-medium">{story.business}</p>
                  <p className="text-2xl font-bold text-teal-900 mt-2">{story.result}</p>
                </div>
                <blockquote className="text-black italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-8">
            Ready to Start Your Hosting Business?
          </h2>
          <p className="text-xl text-black mb-12">
            Join our reseller program today and start building your profitable hosting business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">Choose Your Plan</h3>
              <p className="text-black">Select the reseller plan that matches your business goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">Set Up Your Brand</h3>
              <p className="text-black">Customize the platform with your branding and pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-teal-900 mb-2">Start Selling</h3>
              <p className="text-black">Launch your hosting business and start acquiring clients</p>
            </div>
          </div>

          <button className="bg-button text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
            Start Your Hosting Business Today
          </button>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default ResellerHosting;