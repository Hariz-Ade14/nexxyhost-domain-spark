import { Palette, Code } from "lucide-react";
import Layout from "@/components/Layout";

type templateProps = {
     name: string;
     description: string;
     count: string
}
const templates: templateProps[] = [
  { name: 'Business', description: 'Professional templates for corporate websites', count: '50+' },
  { name: 'E-commerce', description: 'Online store templates with shopping cart', count: '30+' },
  { name: 'Portfolio', description: 'Showcase your work with stunning galleries', count: '25+' },
  { name: 'Blog', description: 'Beautiful layouts for content creators', count: '20+' },
  { name: 'Restaurant', description: 'Templates designed for food businesses', count: '15+' },
  { name: 'Non-profit', description: 'Templates for organizations and causes', count: '12+' }
];

const WebsiteBuilder = () => {
  return (
    <Layout>
      <div>
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-teal-900 mb-6">
                  Build Your Dream Website Without Coding
                  {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> */}
                  {/* </span> */}
                </h1>
                <p className="text-xl text-teal-600 mb-8">
                  Create stunning, professional websites in minutes with our
                  intuitive drag-and-drop builder. Choose from hundreds of
                  templates and customize everything to match your brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-button text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all transform hover:scale-105">
                    Start Building Free
                  </button>
                  <button className="border-2 border-teal-900 text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-all">
                    View Templates
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Website design and development illustration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Palette className="h-5 w-5 text-teal-600" />
                    <span className="text-sm font-semibold text-teal-700">
                      Drag & Drop Builder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="b-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Build Beautiful Websites Visually
            </h2>
            <p className="text-lg text-teal-600 mb-6">
              Our intuitive drag-and-drop website builder makes it easy to
              create professional websites without any coding knowledge. Choose
              from hundreds of templates and customize everything to match your
              brand.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-teal-700 font-medium">
                  Intuitive Drag & Drop Interface
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-teal-700 font-medium">
                  500+ Professional Templates
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-teal-700 font-medium">
                  Automatic Mobile Optimization
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-teal-700 font-medium">
                  Built-in SEO Tools
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Website builder interface and design tools"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-900 p-3 rounded-xl shadow-lg text-white">
                  <Code className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                  Design Like a Pro
                </h2>
                <p className="text-lg text-teal-600 mb-8">
                  Our intuitive interface makes website building accessible to
                  everyone. No technical skills required - just drag, drop, and
                  customize.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Visual Editor
                      </h4>
                      <p className="text-teal-600">
                        See your changes in real-time as you build
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        Custom Branding
                      </h4>
                      <p className="text-teal-600">
                        Upload your logo and customize colors to match your
                        brand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-900 mb-1">
                        One-Click Publishing
                      </h4>
                      <p className="text-teal-600">
                        Publish your website instantly with a single click
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Templates for Every Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start with a beautiful template and customize it to match your
                unique style and brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {template.count}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {template.name}
                    </h3>
                    <p className="text-gray-600">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WebsiteBuilder;
