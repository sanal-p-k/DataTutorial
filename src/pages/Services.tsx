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

const Services = () => {
  const services: Service[] = [
    {
      title: 'Dashboard Development',
      description:
        'Expert Power BI and Tableau dashboard creation tailored to your business needs.',
      icon: ChartPieIcon,
      color: 'purple',
    },
    {
      title: 'Corporate Training',
      description:
        'Custom training programs for teams to master data analytics tools and techniques.',
      icon: AcademicCapIcon,
      color: 'blue',
    },
    {
      title: 'YouTube Collaborations',
      description:
        'Partner with me to create engaging data analytics content for your audience.',
      icon: UserGroupIcon,
      color: 'green',
    },
    {
      title: 'Data Consultation',
      description:
        'Strategic guidance on data architecture, analytics strategy, and tool selection.',
      icon: ScaleIcon,
      color: 'orange',
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
        <motion.div 
          variants={staggerItem}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            I offer a range of services to help you transform your data into valuable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 bg-purple-500/10">
                <service.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
