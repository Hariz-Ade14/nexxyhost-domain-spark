const EmailPricing = ({ type }: { type: string }) => {
  const pricingPlans = [
    {
      id: 1,
      name: "Business Starter",
      price: "$4.99",
      period: "/month",
      mailboxes: "5 Mailboxes",
      storage: "10GB per mailbox",
      isPopular: false,
      features: [
        "5 Professional Email Accounts",
        "Webmail Access",
        "Mobile App Support",
        "Basic Spam Protection",
        "24/7 Email Support",
      ],
      buttonText: "Get Started",
      buttonClasses:
        "w-full bg-button text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all",
      cardClasses: "bg-white rounded-2xl shadow-lg p-8",
    },
    {
      id: 2,
      name: "Business Professional",
      price: "$9.99",
      period: "/month",
      mailboxes: "25 Mailboxes",
      storage: "25GB per mailbox",
      isPopular: true,
      popularLabel: "Most Popular",
      features: [
        "25 Professional Email Accounts",
        "Advanced Webmail Interface",
        "Mobile & Desktop Sync",
        "Advanced Spam Protection",
        "Shared Calendars",
        "Priority Support",
      ],
      buttonText: "Get Started",
      buttonClasses:
        "w-full bg-button to-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-all",
      cardClasses:
        "bg-white rounded-2xl shadow-lg p-8 ring-4 ring-teal-500 transform scale-105",
    },
  ];
  return (
    <section className="bg-gradient-to-br from-gray-50 to-teal-50 py-20 md:px-0 px-3">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            {type} Email Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Simple, transparent pricing for professional email hosting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={plan.cardClasses}>
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="text-center mb-4">
                  <span className="bg-button text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {plan.popularLabel}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-teal-600">
                    {plan.price}
                  </span>
                  <span className="text-black">{plan.period}</span>
                </div>
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg mb-6">
                  <div className="text-sm text-black">
                    <div className="font-semibold">{plan.mailboxes}</div>
                    <div>{plan.storage}</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-button rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={plan.buttonClasses}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailPricing;
