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

// Animation variants
const staggerContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-gray-900 pt-16">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 py-16 max-w-6xl mx-auto"
      >
        <div className="bg-gray-800 rounded-xl shadow-lg p-8">
        <motion.div 
          variants={staggerItem}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Get in Touch
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={staggerItem}
          className="space-y-6"
        >
            <div>
              <label className="block text-sm font-semibold text-white/80">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white/80">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white/80">Message</label>
              <textarea
                rows={4}
                placeholder="Let's build something amazing..."
                className="mt-1 w-full rounded-md border-gray-700 bg-gray-700 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Contact Info Cards */}
            {contactInfo.map(({ Icon, label, value, link }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-4 p-5 bg-purple-900 rounded-xl shadow hover:shadow-md transition-all"
              >
                <Icon className="h-7 w-7 text-yellow-400 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white">{label}</h4>
                  <p className="text-white">{value}</p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
