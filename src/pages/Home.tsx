import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaDatabase, FaPython, FaQuoteLeft, FaYoutube } from 'react-icons/fa';
import { 
  ChartPieIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  VideoCameraIcon, 
  ChartBarIcon, 
  UsersIcon
} from '@heroicons/react/24/outline';

import { PurchaseMaterial } from '../components/PurchaseMaterial';
import type { PurchaseMaterialType, Service, Tool, Skill } from '../types';

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

const slideUp = {
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

// Data
const skills: Skill[] = [
  { name: 'Power BI', icon: <ChartPieIcon className="w-8 h-8" /> },
  { name: 'Tableau', icon: <ChartBarIcon className="w-8 h-8" /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
  { name: 'SQL', icon: <FaDatabase className="w-8 h-8" /> }
];

const purchaseMaterials: PurchaseMaterialType[] = [
  {
    id: 1,
    title: 'Data Analytics Complete Material',
    description: 'Professional templates for various business scenarios',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    features: ['30+ Material', '$15'],
    image: 'data_analytics_roadmap.png',
    price: '$15'
  },
  {
    id: 2,
    title: 'Power BI Projects',
    description: 'Real-world project templates and solutions',
    icon: <ChartPieIcon className="h-6 w-6 text-white" />,
    features: ['20+ Projects', '$20'],
    image: 'powerbi.png',
    price: '$20'
  },
  {
    id: 3,
    title: 'Tableau Workbooks',
    description: 'Interactive dashboards and visualizations',
    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
    features: ['15+ Workbooks', '$18'],
    image: 'tableau.png',
    price: '$18'
  },
  {
    id: 4,
    title: 'SQL Training Package',
    description: 'Comprehensive SQL learning materials',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    features: ['50+ Queries', '$12'],
    image: 'sql.png',
    price: '$12'
  },
  {
    id: 5,
    title: 'Spotify Analysis',
    description: 'Spotify Analysis using Power BI',
    icon: <FaPython className="h-6 w-6 text-white" />,
    features: ['40+ Scripts', '$16'],
    image: 'python.png',
    price: '$16'
  }
];

// Services data
const services: Service[] = [
  {
    icon: ChartPieIcon,
    title: 'Data Visualization',
    description: 'Transform your data into meaningful insights.',
    features: [
      'Interactive dashboards',
      'Real-time analytics',
      'Custom visualizations'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Data Analysis',
    description: 'Comprehensive data analysis and insights extraction.',
    features: [
      'Data cleaning',
      'Statistical analysis',
      'Predictive modeling'
    ]
  },
  {
    icon: VideoCameraIcon,
    title: 'Training & Support',
    description: 'Expert training and continuous support.',
    features: [
      'Hands-on workshops',
      'Custom training programs',
      '24/7 support'
    ]
  }
];

const tools: Tool[] = [
  { 
    icon: ChartBarIcon, 
    name: 'Power BI',
    description: 'Create interactive dashboards and reports'
  },
  { 
    icon: AcademicCapIcon, 
    name: 'Tableau',
    description: 'Visualize data with powerful charts and graphs'
  },
  { 
    icon: FaPython, 
    name: 'Spotify Analysis',
    description: 'Spotify Analysis using Power BI'
  },
  { 
    icon: FaDatabase, 
    name: 'SQL',
    description: 'Database management and data querying'
  }
];

const careerPointsData = [
  {
    icon: AcademicCapIcon,
    title: 'Learn Fundamentals',
    description: 'Master the basics of data analysis and visualization'
  },
  {
    icon: ChartBarIcon,
    title: 'Build Projects',
    description: 'Apply your knowledge in real-world projects'
  },
  {
    icon: UsersIcon,
    title: 'Join Community',
    description: 'Connect with other data professionals'
  }
];

// Component
const Home: React.FC = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const careerPointsRef = useRef<HTMLDivElement>(null);
  const materialsLength = purchaseMaterials.length;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSliding) return;
      if (e.key === 'ArrowLeft') {
        handleSwipe('left');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('right');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSliding]);

  // Update active dot when slide position changes
  useEffect(() => {
    const dotIndex = slidePosition % materialsLength;
    setActiveDot(dotIndex >= 0 ? dotIndex : materialsLength + dotIndex);
  }, [slidePosition]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) return;
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      if (Math.abs(distance) > 50) { // Minimum swipe distance
        handleSwipe(distance > 0 ? 'left' : 'right');
      }
      setTouchStart(null);
      setTouchEnd(null);
    }
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isSliding) return;
    setIsSliding(true);

    const newPosition = direction === 'left' 
      ? slidePosition - 1 
      : slidePosition + 1;

    // Calculate the correct position for infinite loop
    const clampedPosition = newPosition % materialsLength;
    const adjustedPosition = clampedPosition < 0 ? materialsLength + clampedPosition : clampedPosition;

    setSlidePosition(adjustedPosition);
    
    // Reset position to create infinite loop effect
    setTimeout(() => {
      if (direction === 'left' && newPosition <= 0) {
        setSlidePosition(materialsLength - 1);
        setActiveDot(materialsLength - 1);
      } else if (direction === 'right' && newPosition >= materialsLength - 1) {
        setSlidePosition(0);
        setActiveDot(0);
      }
      setIsSliding(false);
    }, 800);
  };

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe('left');
    }, 4000);  // Increased interval time for smoother automatic sliding

    return () => clearInterval(interval);
  }, [handleSwipe]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (careerPointsRef.current) {
      observer.observe(careerPointsRef.current);
    }

    return () => {
      if (careerPointsRef.current) {
        observer.unobserve(careerPointsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/hero.jpg" 
            alt="Data Analysis Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 backdrop-blur-sm" />
        </div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-b from-purple-900/10 to-purple-800/15 p-12 sm:p-16 rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-blue-600 bg-clip-text text-transparent">
                Transforming Raw Data Into Powerful Insights
              </h1>
              <p className="text-2xl md:text-3xl mb-8 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent">
                Power BI | Tableau | SQL | Python | Analytics Education
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-b from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full transition duration-300 flex items-center gap-3">
                  Explore Dashboards
                  <FaArrowRight className="w-5 h-5" />
                </button>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white px-8 py-4 rounded-full transition duration-300 flex items-center gap-3">
                  Watch on YouTube
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Animation Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full blur-2xl opacity-30" />
            <div className="absolute -top-40 -right-40 w-56 h-56 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-2xl opacity-30" />
            
            <div className="relative bg-gradient-to-b from-purple-900/10 to-purple-800/15 rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    My Skills
                  </h2>
                  <p className="text-white/80 mb-8">
                    Expertise in modern data analysis and visualization tools
                  </p>
                  <motion.div 
                    className="grid grid-cols-2 gap-6"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                  >
                    {tools.map((tool) => (
                      <motion.div
                        key={tool.name}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-gradient-to-r from-purple-900/20 to-purple-800/25 rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:shadow-xl transition-all duration-300"
                      >
                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">{tool.name}</h3>
                          <p className="text-sm text-white/70">{tool.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <motion.div 
                  className="md:w-1/2 relative h-80 mt-8 md:mt-0"
                  variants={slideUp}
                >
                  <div className="skills-container absolute inset-0 flex items-center justify-center">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item absolute bg-gradient-to-r from-purple-900/20 to-purple-800/25 rounded-3xl p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300"
                        variants={slideUp}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: activeSkillIndex === index ? 1 : 0.5,
                          scale: activeSkillIndex === index ? 1.1 : 0.9,
                          x: activeSkillIndex === index ? 0 : (index % 2 === 0 ? -50 : 50),
                          y: activeSkillIndex === index ? 0 : (index > 1 ? 50 : -50)
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                          <p className="text-sm text-white/70">Expert</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
              >
                <div className="text-purple-600">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">{service.title}</h3>
                <p className="text-white/80 mb-4 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-white/80">
                      <span className="text-gradient-to-r from-purple-500 to-purple-700 mr-2 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Material Package Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Purchase Material Package</h2>
          <div className="relative overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-1000 ease-in-out bg-gradient-to-b from-purple-900 to-purple-800 p-4 rounded-xl shadow-lg"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: `translateX(-${slidePosition * 100}%)`
              }}
            >
              {purchaseMaterials.map(material => (
                <PurchaseMaterial
                  key={material.id}
                  material={material}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center gap-6">
              <button
                onClick={() => handleSwipe('left')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-lg transition-all duration-200 flex items-center justify-center relative overflow-hidden shadow-md hover:shadow-lg active:shadow-md"
                disabled={isSliding}
              >
                <FaChevronLeft className="h-5 w-5 transition-transform duration-200" />
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 rounded-lg transition-all duration-200 flex items-center justify-center relative overflow-hidden shadow-md hover:shadow-lg active:shadow-md"
                disabled={isSliding}
              >
                <FaChevronRight className="h-5 w-5 transition-transform duration-200" />
              </button>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: materialsLength }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeDot === i
                      ? 'bg-purple-500'
                      : 'bg-purple-400/50 hover:bg-purple-400'
                  }`}
                  onClick={() => handleSwipe(i > activeDot ? 'right' : 'left')}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Live Dashboard Example</h2>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-800 flex items-center justify-center">
            <p className="text-gray-500">Power BI Dashboard Embed Here</p>
          </div>
        </div>
      </section>
             
      {/* Career Path Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Fastest Way to Launch Your Data Career</h2>
          <div ref={careerPointsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPointsData.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="text-purple-600">
                  <point.icon className="h-10 w-10" />
                </div>
                <h3 className="text-lg font-medium bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">{point.title}</h3>
                <p className="text-white/80 mt-2 bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 p-8 rounded-xl shadow-lg border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <FaQuoteLeft className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">John Doe</h3>
                  <p className="text-purple-400">Data Analyst</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "The dashboard development service was exceptional. They understood our business needs and delivered a solution that provided real value to our team."
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 p-8 rounded-xl shadow-lg border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <FaQuoteLeft className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Jane Smith</h3>
                  <p className="text-purple-400">Business Manager</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "Our team's data skills improved dramatically after the training sessions. The instructor was knowledgeable and made complex concepts easy to understand."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div 
                key={item}
                whileHover={{ scale: 1.1 }}
                className="opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <div className="w-24 h-24 bg-gray-800 rounded-lg shadow-sm flex items-center justify-center">
                  <span className="text-white/80 font-medium">Client {item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;