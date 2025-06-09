
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Ifeanyi Fred',
      // company: 'Digital Marketing Agency',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b932?w=100&h=100&fit=crop&crop=face',
      text: "Very friendly and helped with what I wanted without stressing me out.",
      rating: 5
    },
    {
      name: 'Divine Uche',
      // company: 'E-commerce Store Owner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: "Great experience! Weldone.",
      rating: 5
    },
    {
      name: 'Christian Okoro',
      // company: 'Blogger & Content Creator',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      text: "Good job nexxyhost. Keep it up.",
      rating: 5
    },
    {
      name: 'Muhammad Saghir Husseini',
      // company: 'Startup Founder',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      text: "Great Customer Support. Please keep it up.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-teal-300">
            Join thousands of satisfied customers who trust NexxyHost
          </p>
        </div>

        <div className="relative">
          <div className="bg-teal-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-teal-400 mr-1">⭐</div>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-teal-100">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                {/* <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div className="text-left">
                  <div className="text-xl font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-teal-400">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-teal-500' : 'bg-teal-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">50,000+</div>
            <div className="text-teal-400">Websites Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.98%</div>
            <div className="text-teal-400">Uptime Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
            <div className="text-teal-400">Expert Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">15+</div>
            <div className="text-teal-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
