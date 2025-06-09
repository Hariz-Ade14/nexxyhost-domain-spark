import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type faqProps = {
  question: string;
  answer: string;
};

const faqs: faqProps[] = [
  {
    question: "What type of hosting is best for my website?",
    answer:
      "For most small to medium websites, our Shared Hosting is perfect and cost-effective. If you're using WordPress, our WordPress Hosting offers optimized performance. For high-traffic sites or applications requiring dedicated resources, consider our Dedicated Cloud Hosting. Our team can help you choose the right plan based on your specific needs.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes! We offer a 30-day money-back guarantee on all our hosting plans. If you're not completely satisfied with our service within the first 30 days, we'll refund your hosting fees. This gives you peace of mind to try our services risk-free.",
  },
  {
    question: "How do I migrate my existing website to your hosting?",
    answer:
      "We offer free website migration services! Our expert team will handle the entire process for you, ensuring zero downtime during the transfer. Simply provide us with your current hosting details, and we'll take care of moving your files, databases, and email accounts safely to our servers.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 technical support through live chat, email, and phone. Our support team consists of experienced hosting professionals who can help with everything from basic account questions to complex technical issues. We also maintain a comprehensive knowledge base with tutorials and guides.",
  },
  {
    question: "Are SSL certificates included with hosting plans?",
    answer:
      "Yes! All our hosting plans include free SSL certificates. We automatically install and configure SSL certificates for your domains, ensuring your website is secure and trusted by visitors. SSL certificates are essential for SEO and building customer trust.",
  },
//   {
//     question: "How often do you backup my website?",
//     answer:
//       "We perform daily automated backups of all websites and databases. Backups are stored securely and can be easily restored through your control panel. For premium plans, we also offer on-demand backup creation and longer retention periods to ensure your data is always protected.",
//   },
//   {
//     question: "Can I upgrade or downgrade my hosting plan?",
//     answer:
//       "Absolutely! You can upgrade or downgrade your hosting plan at any time through your account dashboard. Upgrades take effect immediately, while downgrades are processed at your next billing cycle. We'll help ensure a smooth transition and assist with any technical requirements.",
//   },
//   {
//     question: "What is your uptime guarantee?",
//     answer:
//       "We guarantee 99.9% uptime for all our hosting services. Our infrastructure is built with redundancy and monitored 24/7 to ensure maximum availability. In the rare event we don't meet our uptime guarantee, we provide service credits as compensation for any inconvenience caused.",
//   },
];

const FAQs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to the most common questions about our hosting
              services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-down"
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <details  data-aos="fade-in"  className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-10 h-10 bg-button to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </div>
                    </div>
                  </summary>
                  <div data-aos="fade-in" className="px-6 pb-6" >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? Our support team is here to help!
            </p>
            <button className="bg-button text-white px-10 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
