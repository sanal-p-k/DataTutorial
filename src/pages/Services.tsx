import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartPieIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  const services: Service[] = [
    {
      title: 'Dashboard Development',
      description:
        'Expert Power BI and Tableau dashboard creation tailored to your business needs.',
      icon: ChartPieIcon,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Corporate Training',
      description:
        'Custom training programs for teams to master data analytics tools and techniques.',
      icon: AcademicCapIcon,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'YouTube Collaborations',
      description:
        'Partner with me to create engaging data analytics content for your audience.',
      icon: UserGroupIcon,
      color: 'from-green-500 to-lime-500',
    },
    {
      title: 'Data Consultation',
      description:
        'Strategic guidance on data architecture, analytics strategy, and tool selection.',
      icon: ScaleIcon,
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/service-bg.jpg"
          alt="Services Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-purple-900/60" />
      </div>

      {/* Glassy Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
        {/* Header */}
        <motion.div variants={staggerItem} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I help teams and organizations make sense of their data by offering tailored services in analytics, education, and consulting.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.03 }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg transition-transform"
            >
              <div
                className={`w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-md`}
              >
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
