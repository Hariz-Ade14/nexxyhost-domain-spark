import {
  ArrowRight,
  Shield,
  Clock,
  Users,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import Layout from "@/components/Layout";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const HostingMigrationAndTransfer = () => {
  const migrationSteps = [
    {
      step: 1,
      title: "Site Analysis",
      description:
        "We analyze your current website and hosting setup to plan the perfect migration strategy.",
    },
    {
      step: 2,
      title: "Data Backup",
      description:
        "Complete backup of all your files, databases, and configurations to ensure nothing is lost.",
    },
    {
      step: 3,
      title: "Transfer Process",
      description:
        "Secure transfer of all website data to our optimized servers with minimal downtime.",
    },
    {
      step: 4,
      title: "Testing & Verification",
      description:
        "Thorough testing to ensure everything works perfectly on our platform.",
    },
    {
      step: 5,
      title: "DNS Update",
      description:
        "Seamless DNS transition to point your domain to our servers.",
    },
    {
      step: 6,
      title: "Post-Migration Support",
      description:
        "30 days of dedicated support to ensure everything runs smoothly.",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Zero Data Loss",
      description:
        "Complete backup and verification process ensures 100% data integrity",
    },
    {
      icon: Clock,
      title: "Minimal Downtime",
      description:
        "Expert migration process minimizes website downtime to mere minutes",
    },
    {
      icon: Users,
      title: "Expert Migration Team",
      description:
        "Dedicated specialists handle every aspect of your migration",
    },
    {
      icon: CheckCircle,
      title: "Success Guarantee",
      description: "We guarantee a successful migration or your money back",
    },
    {
      icon: RefreshCw,
      title: "Free Re-Migration",
      description:
        "If something goes wrong, we'll re-migrate your site at no extra cost",
    },
    {
      icon: ArrowRight,
      title: "Any Platform",
      description:
        "We migrate from any hosting provider or platform to our servers",
    },
  ];

  const supportedPlatforms = [
    "WordPress",
    "Drupal",
    "Joomla",
    "Magento",
    "PrestaShop",
    "OpenCart",
    "Custom PHP Applications",
    "Static HTML Sites",
    "Laravel Applications",
    "CodeIgniter",
    "Symfony",
    "CakePHP",
    "Node.js Applications",
    "Python Applications",
  ];

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Seamless Website Migration Zero Hassle, Zero Downtime
                </h1>
                <p className="text-base text-black mb-8 max-w-3xl">
                  Switch to our high-performance hosting with complete peace of
                  mind. Our expert migration team handles everything so you can
                  focus on your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/message/3NHP6PHXLBWSD1"
                    className="no-underline"
                  >
                    <button className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                      Talk to Migration Expert
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Website migration and data transfer process"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-teal-700">
                      Zero Downtime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Our 6-Step Migration Process
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto">
                We've perfected our migration process to ensure a smooth, secure
                transfer of your website
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-teal-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-black leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Illustration */}
        <section className="bg-gradient-to-br from-teal-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Data migration and server transfer visualization"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Professional Migration Service
                </h2>
                <p className="text-lg text-black mb-8">
                  Our experienced migration specialists use advanced tools and
                  proven processes to ensure your website transfer is completed
                  flawlessly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Complete Data Transfer
                      </h4>
                      <p className="text-black">
                        Files, databases, emails, and configurations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Testing & Validation
                      </h4>
                      <p className="text-black">
                        Comprehensive testing before going live
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Post-Migration Support
                      </h4>
                      <p className="text-black">
                        30 days of dedicated support included
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Why Choose Our Migration Service?
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto">
                Experience the difference with our professional, risk-free
                migration service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-black leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="bg-gradient-to-br from-teal-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                We Migrate Any Platform
              </h2>
              <p className="text-xl text-black max-w-2xl mx-auto">
                From popular CMS platforms to custom applications, we handle
                migrations of all types
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {supportedPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-teal-900">{platform}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-900 to-cyan-600 py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Professional Migration Service
            </h2>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Complete Migration Package
                  </h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      Full website backup and transfer
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      Database migration and optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      Email accounts migration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      DNS management and updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      SSL certificate installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                      30 days post-migration support
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-6">
                    <span className="text-5xl font-bold">FREE</span>
                    <p className="text-xl opacity-90 mt-2">
                      With any hosting plan
                    </p>
                  </div>

                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <p className="w-full cursor-pointer flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg">
                          Request Free Migration
                        </p>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[40vw]">
                        <DialogHeader>
                          <DialogTitle className="!text-2xl !text-teal-900">
                            Start Migration
                          </DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="Phone Number">Phone Number</Label>
                            <Input id="phone number" name="phone number" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="url">Website Url</Label>
                            <Input id="url" name="url" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="project">Project</Label>
                            <Input id="project" name="project" />
                          </div>
                        </div>
                        <Button className="!bg-button hover:bg-button/50 w-[40%] flex justify-self-end">
                          Migrate
                        </Button>
                      </DialogContent>
                    </form>
                  </Dialog>

                  <p className="text-sm opacity-90 mt-4">
                    *Migration completed within 24-48 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
                Migration Questions & Answers
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-2">
                  How long does migration take?
                </h3>
                <p className="text-black">
                  Most migrations are completed within 24-48 hours. Complex
                  sites with large databases may take up to 72 hours. We'll
                  provide you with a timeline after analyzing your site.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-2">
                  Will my site be down during migration?
                </h3>
                <p className="text-black">
                  Downtime is minimal, typically just a few minutes during the
                  final DNS switch. We perform the migration on our servers
                  first, then switch over when everything is ready.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-2">
                  What if something goes wrong?
                </h3>
                <p className="text-black">
                  We offer a success guarantee. If migration fails, we'll fix it
                  at no cost or provide a full refund. Your original site
                  remains untouched until migration is complete.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-teal-900 mb-2">
                  Do you migrate email accounts too?
                </h3>
                <p className="text-black">
                  Yes! We migrate all email accounts, settings, and existing
                  emails to ensure you don't lose any important communications
                  during the transition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HostingMigrationAndTransfer;
