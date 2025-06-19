import Layout from "@/components/Layout";
import { WholeWord as Wordpress, RefreshCw, Palette } from "lucide-react";
import PricingPlans from "@/components/PricingPlans";

const WordpressShareHosting = () => {
  const benefits: string[] = [
    "Pre-installed WordPress with latest version",
    "Staging environments for testing",
    "Free SSL certificates included",
    "WP-CLI command line access",
    "Git integration for developers",
    "PHP 8.2 support with optimization",
    "Redis caching for performance",
    "Cloudflare CDN integration",
  ];
  return (
    <Layout>
      <div>
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  WordPress Hosting Built for Performance
                </h1>
                <p className="text-base text-black mb-8">
                  Experience the fastest WordPress hosting with our optimized
                  servers, advanced caching, and expert support. Perfect for
                  bloggers, businesses, and agencies who demand the best.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a  className="bg-button text-center text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105" href="#pricing">
                    <button>
                      Start Your WordPress Site
                    </button>
                  </a>
                  <button className="border-2 border-button text-button px-8 py-3 rounded-lg font-semibold hover:bg-button hover:text-white transition-all">
                    Free Migration
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="WordPress development and optimization"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/wordpress.png"
                  alt="WordPress dashboard and content management"
                  className="rounded-2xl  w-[450px]"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Optimized for WordPress Excellence
                </h2>
                <p className="text-lg text-black mb-8">
                  Our WordPress hosting platform is fine-tuned to deliver
                  exceptional performance, security, and reliability for your
                  WordPress websites.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Managed Updates
                      </h4>
                      <p className="text-black">
                        Automatic WordPress core, theme, and plugin updates
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
                        Built-in Redis and object caching for lightning speed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Security Hardening
                      </h4>
                      <p className="text-black">
                        WordPress-specific security measures and monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pricing" id="pricing">
          <PricingPlans plan="Wordpress Shared Hosting" />
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Why Choose Our WordPress Hosting?
                </h2>
                <p className="text-lg text-black mb-8">
                  We've spent years perfecting our WordPress hosting platform to
                  deliver the best possible experience for WordPress users of
                  all levels.
                </p>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-teal-900 mb-6">
                    Complete WordPress Features:
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-black"
                      >
                        <span className="w-2 h-2 bg-button rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="WordPress performance and analytics dashboard"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-xl shadow-lg text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3x</div>
                    <div className="text-sm opacity-90">Faster Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WordpressShareHosting;
