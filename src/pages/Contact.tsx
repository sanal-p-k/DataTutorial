import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon as MailIcon } from '@heroicons/react/24/outline';

// Animation variants
const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
};

const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

interface ContactItem {
  Icon: React.ElementType;
  label: string;
  value: string;
  link?: string | null;
}

export default function Contact() {
  const contactInfo: ContactItem[] = [
    {
      Icon: MailIcon,
      label: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-11 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center relative z-10"
          >
            <motion.div variants={staggerItem} className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have questions or want to work together? I'd love to hear from you.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Glassy Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-10 md:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Schedule a Meeting</h2>
          <p className="text-lg text-gray-600">Book a time that works best for you</p>
        </motion.div>

        {/* Schedule Meeting Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full mt-8"
        >
          <div className="w-full h-[600px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <iframe
              src="https://cal.com/username/30min"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="yes"
              className="block w-full h-full"
              title="Schedule a meeting"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item: ContactItem) => (
              <div key={item.label} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                <item.Icon className="h-6 w-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-gray-500 text-sm mb-1">{item.label}</p>
                  <p className="text-gray-900 font-medium">
                    {item.link ? (
                      <a href={item.link} className="text-purple-600 hover:text-purple-800 transition">
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
    </div>
  );
}
