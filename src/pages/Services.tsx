import React from 'react';
import { motion } from 'framer-motion';
import {
  ChartPieIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ScaleIcon,
  DocumentMagnifyingGlassIcon,
  LightBulbIcon,
  CodeBracketIcon,
  BeakerIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
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

const Services: React.FC = () => {
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
      className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-blue-900 to-gray-950"
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

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-20">
        {/* Services Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">My Services</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              I help teams and organizations make sense of their data by offering tailored services in analytics, education, and consulting.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
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
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-1">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        

        {/* Process Roadmap Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A clear, structured approach from initial consultation to successful deployment
            </p>
          </motion.div>

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            {/* Main timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 -z-10"></div>
            
            {/* Timeline items */}
            <div className="space-y-16 md:space-y-20">
              {[
                {
                  icon: DocumentMagnifyingGlassIcon,
                  title: "1. Requirement Gathering",
                  description: "We'll discuss your business needs, goals, and data sources to understand your requirements.",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: LightBulbIcon,
                  title: "2. Solution Design",
                  description: "Creating wireframes and architecture for your dashboard or solution.",
                  color: "from-purple-500 to-indigo-500"
                },
                {
                  icon: CodeBracketIcon,
                  title: "3. Development",
                  description: "Building the solution with clean, efficient code and best practices.",
                  color: "from-pink-500 to-rose-500"
                },
                {
                  icon: BeakerIcon,
                  title: "4. Testing & Review",
                  description: "Rigorous testing to ensure quality, performance, and accuracy.",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  icon: RocketLaunchIcon,
                  title: "5. Deployment",
                  description: "Smooth deployment with documentation and knowledge transfer.",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: CheckCircleIcon,
                  title: "6. Support & Maintenance",
                  description: "Ongoing support and updates to keep your solution running smoothly.",
                  color: "from-teal-500 to-cyan-500"
                }
              ].map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    variants={staggerItem}
                    className={`relative w-full group ${isEven ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                  >
                    <div className={`flex flex-col items-center ${isEven ? 'md:items-end' : 'md:items-start'} relative`}>
                      {/* Icon with connecting line */}
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-8 w-8 text-white" />
                        </div>
                        {index < 5 && (
                          <div className="hidden md:block absolute left-1/2 -bottom-16 h-16 w-0.5 bg-gradient-to-b from-blue-500/30 to-purple-500/30"></div>
                        )}
                      </div>
                      
                      {/* Content card */}
                      <div className={`w-full md:max-w-md ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                        <motion.div 
                          className="p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                          whileHover={{ 
                            y: -4,
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                          }}
                        >
                          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                          <p className="text-white/80 leading-relaxed">{item.description}</p>
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Center line connector for mobile */}
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-blue-500/30 to-purple-500/30 mx-auto"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
          <motion.div variants={staggerItem} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Let's work together to unlock the full potential of your data. Whether you need a custom dashboard, training program, or strategic consultation, I'm here to help.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Today
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
