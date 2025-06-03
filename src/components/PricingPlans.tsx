
import React, { useState } from 'react';

const PricingPlans = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Pro',
      description: 'Perfect for personal websites and blogs',
      monthlyPrice: 21000,
      annualPrice: 2.99,
      features: [
        '1 Website',
        '10 GB SSD Storage',
        'Free SSL Certificate',
        '24/7 Support',
        'Free Domain (1st year)',
        '100 GB Bandwidth'
      ],
      isPopular: false
    },
    {
      name: 'Starter',
      description: 'Ideal for growing businesses',
      monthlyPrice: 0o0,
      annualPrice: 6.99,
      features: [
        '10 Websites',
        '50 GB SSD Storage',
        'Free SSL Certificate',
        '24/7 Priority Support',
        'Free Domain (1st year)',
        'Unlimited Bandwidth',
        'Free Website Migration',
        'Daily Backups'
      ],
      isPopular: true
    },
    {
      name: 'Business',
      description: 'For high-traffic websites',
      monthlyPrice: 139999,
      annualPrice: 14.99,
      features: [
        'Unlimited Websites',
        '200 GB SSD Storage',
        'Free SSL Certificate',
        '24/7 VIP Support',
        'Free Domain (1st year)',
        'Unlimited Bandwidth',
        'Free Website Migration',
        'Daily Backups',
        'Advanced Security',
        'Performance Optimization'
      ],
      isPopular: false
    }
  ];

  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-teal-600 max-w-3xl mx-auto mb-8">
            Flexible hosting solutions that grow with your business
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-teal-600 text-white'
                  : 'text-teal-600 hover:text-teal-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingPeriod === 'annual'
                  ? 'bg-teal-600 text-white'
                  : 'text-teal-600 hover:text-teal-600'
              }`}
            >
              Annual
              <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                Save 40%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-teal-600 scale-105' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Best Value
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-teal-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-5xl font-bold text-teal-900">
                    #{billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-teal-600">/month</span>
                </div>
                
                {billingPeriod === 'annual' && (
                  <p className="text-sm text-green-600">
                    Billed annually (${(plan.annualPrice * 12).toFixed(2)}/year)
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-teal-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.isPopular
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-teal-100 text-teal-900 hover:bg-teal-200'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
     
        
        
      </div>
    </section>
  );
};

export default PricingPlans;
