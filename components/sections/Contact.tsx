"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-gray-900 py-24 sm:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs text-gray-500 tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="tel:+35799123456"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-steel/20 transition-colors">
                      <Phone size={18} className="text-steel" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-white group-hover:text-steel transition-colors">
                        +357 99 123 456
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@glmetalworks.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-steel/20 transition-colors">
                      <Mail size={18} className="text-steel" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-white group-hover:text-steel transition-colors">
                        info@glmetalworks.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-steel" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-white">
                        Limassol, Cyprus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-steel/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-steel" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Working Hours</p>
                      <p className="text-white">
                        Mon - Fri: 8:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="bg-gray-800/50 rounded-2xl p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 bg-steel/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-steel" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-steel hover:text-steel-light transition-colors text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-gray-800/50 rounded-2xl p-8 sm:p-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-steel transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-steel transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-steel transition-colors"
                        placeholder="+357 99 123 456"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm text-gray-400 mb-2"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-steel transition-colors appearance-none"
                      >
                        <option value="" className="bg-gray-900">Select a type</option>
                        <option value="structural" className="bg-gray-900">Structural Steel</option>
                        <option value="warehouse" className="bg-gray-900">Warehouse</option>
                        <option value="staircase" className="bg-gray-900">Staircase</option>
                        <option value="custom" className="bg-gray-900">Custom Fabrication</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-steel transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-steel hover:bg-steel-light text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

