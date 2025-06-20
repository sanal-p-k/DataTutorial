import React from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

interface ContactItem {
  Icon: React.ElementType;
  label: string;
  value: string;
  link?: string | null;
}

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo: ContactItem[] = [
    {
      Icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: null,
    },
    {
      Icon: MailIcon,
      label: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
    },
    {
      Icon: MapPinIcon,
      label: 'Location',
      value: 'New York, NY',
      link: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-900 to-gray-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact-bg.jpg"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-purple-900/60" />
      </div>

      {/* Glassy Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Me</h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 resize-none"
              placeholder="Your Message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-200 font-semibold"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item: ContactItem) => (
              <div key={item.label} className="flex items-start">
                <item.Icon className="h-6 w-6 text-purple-500 mr-3" />
                <div>
                  <p className="text-white/80 mb-1">{item.label}</p>
                  <p className="text-white">
                    {item.link ? (
                      <a href={item.link} className="hover:text-purple-500 transition">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

