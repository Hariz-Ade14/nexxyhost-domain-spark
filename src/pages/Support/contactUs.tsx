"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Users } from "lucide-react";
import Layout from "@/components/Layout";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      availability: "24/7 Available",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@hostpro.com",
      availability: "Response within 2 hours",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available on website",
      availability: "24/7 Available",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Tech Street, San Francisco, CA",
      availability: "Mon-Fri 9AM-6PM PST",
    },
  ];

  const departments = [
    {
      name: "Sales Team",
      description: "Questions about our services and pricing",
      email: "sales@hostpro.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Technical Support",
      description: "Help with technical issues and troubleshooting",
      email: "support@hostpro.com",
      phone: "+1 (555) 123-4568",
    },
    {
      name: "Billing Department",
      description: "Account and billing related inquiries",
      email: "billing@hostpro.com",
      phone: "+1 (555) 123-4569",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-900 border-teal-200">
                  Get in Touch
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-teal-900">
                  Contact Our Team
                </h1>
                <p className="text-base text-black mb-8 font-light leading-relaxed">
                  Have questions about our hosting services? Need technical
                  support? Our expert team is here to help you succeed.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-black" />
                    <span>24/7 Support Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-black" />
                    <span>Expert Team Ready</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <svg
                  width="400"
                  height="300"
                  viewBox="0 0 400 300"
                  className="w-full max-w-md"
                >
                  <defs>
                    <linearGradient
                      id="contactGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  {/* Customer service representative */}
                  <circle
                    cx="200"
                    cy="120"
                    r="50"
                    fill="url(#contactGradient)"
                    opacity="0.1"
                  />
                  <circle
                    cx="200"
                    cy="100"
                    r="25"
                    fill="url(#contactGradient)"
                  />
                  <rect
                    x="175"
                    y="125"
                    width="50"
                    height="60"
                    rx="25"
                    fill="url(#contactGradient)"
                    opacity="0.8"
                  />

                  {/* Headset */}
                  <path
                    d="M180 90 Q180 75 200 75 Q220 75 220 90"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle cx="180" cy="90" r="5" fill="white" />
                  <circle cx="220" cy="90" r="5" fill="white" />
                  <path
                    d="M180 90 L180 105 L190 105"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                  />

                  {/* Communication devices */}
                  <g>
                    {/* Phone */}
                    <rect
                      x="80"
                      y="80"
                      width="40"
                      height="60"
                      rx="8"
                      fill="white"
                      stroke="url(#contactGradient)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="100"
                      cy="95"
                      r="3"
                      fill="url(#contactGradient)"
                    />
                    <rect
                      x="90"
                      y="105"
                      width="20"
                      height="2"
                      fill="url(#contactGradient)"
                    />
                    <rect
                      x="90"
                      y="110"
                      width="20"
                      height="2"
                      fill="url(#contactGradient)"
                    />
                    <rect
                      x="90"
                      y="115"
                      width="20"
                      height="2"
                      fill="url(#contactGradient)"
                    />

                    {/* Email */}
                    <rect
                      x="280"
                      y="100"
                      width="50"
                      height="35"
                      rx="4"
                      fill="white"
                      stroke="url(#contactGradient)"
                      strokeWidth="2"
                    />
                    <path
                      d="M285 110 L305 120 L325 110"
                      stroke="url(#contactGradient)"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Chat bubble */}
                    <ellipse
                      cx="120"
                      cy="200"
                      rx="35"
                      ry="25"
                      fill="white"
                      stroke="url(#contactGradient)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="110"
                      cy="195"
                      r="3"
                      fill="url(#contactGradient)"
                    />
                    <circle
                      cx="120"
                      cy="195"
                      r="3"
                      fill="url(#contactGradient)"
                    />
                    <circle
                      cx="130"
                      cy="195"
                      r="3"
                      fill="url(#contactGradient)"
                    />
                  </g>

                  {/* Connection lines */}
                  <path
                    d="M120 110 Q150 115 175 125"
                    stroke="url(#contactGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M280 117 Q250 120 225 130"
                    stroke="url(#contactGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M155 200 Q175 190 175 160"
                    stroke="url(#contactGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />

                  {/* Support indicators */}
                  <circle cx="350" cy="60" r="8" fill="#10b981" />
                  <text
                    x="350"
                    y="65"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    24/7
                  </text>

                  <text
                    x="200"
                    y="260"
                    textAnchor="middle"
                    fill="#14b8a6"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    Always Here to Help
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                How Can We Help You?
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Choose the best way to reach our team
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                      {method.icon}
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-gray-900 mb-2">
                      {method.contact}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {method.availability}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Departments */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="What can we help you with?"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 font-medium"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Departments */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Contact Departments
                  </h3>
                  <p className="text-gray-600 font-light mb-6">
                    Reach out to the right team for faster assistance
                  </p>
                </div>
                {departments.map((dept, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-teal-500" />
                          <span className="text-sm">{dept.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-teal-500" />
                          <span className="text-sm">{dept.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
             <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7879.98923885757!2d7.447269579179605!3d9.064253557869336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5808f8b2d%3A0xa7190191916f082b!2sCentral%20Business%20District%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1749696260060!5m2!1sen!2sng"
            width=""
            height="350"
            className="w-[100%]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
         
        </section>
      </div>
    </Layout>
  );
}
