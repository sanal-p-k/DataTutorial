import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronRight, FaDatabase, FaPython, FaQuoteLeft, FaYoutube } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChartPieIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { PurchaseMaterial } from '../components/PurchaseMaterial';
import type { PurchaseMaterialType, Service, Tool, Skill } from '../types';
import { Helmet } from 'react-helmet';

// Animation variants
const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
};

const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideUp = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// SEO Metadata
const seoData = {
  title: 'Data Analytics Training & Mentorship | Learn from Industry Expert',
  description: 'Master Data Analytics with expert-led training in Power BI, Tableau, SQL & Python. Join 200K+ learners and transform your career with hands-on projects and 1:1 mentorship.',
  keywords: 'Data Analytics Mentor, Power BI Training, Tableau Certification, SQL for Data Analysts, Python Data Analysis, Business Intelligence Expert, Data Analytics Career Coach, Learn Data Analytics Online',
  ogTitle: 'Data Analytics Training & Mentorship | 10+ Years Experience',
  ogDescription: 'Join 200K+ learners in mastering Data Analytics with expert guidance. 4200+ mentorship sessions completed. Start your journey today!',
  ogImage: '/images/data-analytics-mentor.jpg',
  canonicalUrl: 'https://datatutorials.in',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Analytics Training & Mentorship",
    "description": "Master Data Analytics with expert-led training in Power BI, Tableau, SQL & Python. Transform your career with hands-on projects and 1:1 mentorship.",
    "publisher": {
      "@type": "Person",
      "name": "Swapnjeet S",
      "jobTitle": "Data Analytics Mentor & Trainer"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://datatutorials.in"
    }
  }
};

// Data
const skills: Skill[] = [
  { 
    name: 'Power BI', 
    icon: <ChartPieIcon className="w-8 h-8" />,
    description: 'Master data visualization and business intelligence with Power BI'
  },
  { name: 'Tableau', icon: <ChartBarIcon className="w-8 h-8" /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
  { name: 'SQL', icon: <FaDatabase className="w-8 h-8" /> },
];

const purchaseMaterials: PurchaseMaterialType[] = [
  {
    id: 1,
    title: 'Data Analytics Complete Material',
    description: 'Professional templates for various business scenarios',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    features: ['30+ Material'],
    image: 'data_analytics_roadmap.png'
  },
  {
    id: 2,
    title: 'Power BI Projects',
    description: 'Real-world project templates and solutions',
    icon: <ChartPieIcon className="h-6 w-6 text-white" />,
    features: ['20+ Projects'],
    image: 'powerbi.png'
  },
  {
    id: 3,
    title: 'Tableau Workbooks',
    description: 'Interactive dashboards and visualizations',
    icon: <ChartBarIcon className="h-6 w-6 text-white" />,
    features: ['15+ Workbooks'],
    image: 'tableau.png'
  },
  {
    id: 4,
    title: 'SQL Training Package',
    description: 'Comprehensive SQL learning materials',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    features: ['50+ Queries'],
    image: 'sql.png'
  },
  {
    id: 5,
    title: 'Spotify Analysis',
    description: 'Spotify Analysis using Power BI',
    icon: <FaPython className="h-6 w-6 text-white" />,
    features: ['40+ Scripts'],
    image: 'python.png'
  }
];

const services: Service[] = [
  {
    icon: ChartPieIcon,
    title: 'Data Visualization',
    description: 'Transform your data into meaningful insights.',
    features: ['Interactive dashboards', 'Real-time analytics', 'Custom visualizations']
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analysis',
    description: 'Comprehensive data analysis and insights extraction.',
    features: ['Data cleaning', 'Statistical analysis', 'Predictive modeling']
  },
  {
    icon: ChartPieIcon,
    title: 'Training & Support',
    description: 'Expert training and continuous support.',
    features: ['Hands-on workshops', 'Custom training programs', '24/7 support']
  }
];

const tools: Tool[] = [
  {
    icon: ChartPieIcon,
    name: 'Power BI',
    description: 'Create interactive dashboards and reports'
  },
  {
    icon: ChartBarIcon,
    name: 'Tableau',
    description: 'Visualize data with powerful charts and graphs'
  },
  {
    icon: FaPython,
    name: 'Python',
    description: 'Data analysis and automation'
  },
  {
    icon: FaDatabase,
    name: 'SQL',
    description: 'Database management and data querying'
  }
];

const careerPointsData = [
  {
    icon: ChartPieIcon,
    title: 'Learn Fundamentals',
    description: 'Master the basics of data analysis and visualization'
  },
  {
    icon: ChartBarIcon,
    title: 'Build Projects',
    description: 'Apply your knowledge in real-world projects'
  },
  {
    icon: ChartPieIcon,
    title: 'Join Community',
    description: 'Connect with other data professionals'
  }
];

// Component
const Home: React.FC = () => {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [slidePosition, setSlidePosition] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const materialsLength = purchaseMaterials.length;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSliding) return;
      if (e.key === 'ArrowLeft') {
        handleSwipe('right');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('left');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSliding]);

  // Update active dot


  const handleSwipe = (direction: 'left' | 'right') => {
    if (isSliding) return;
    setIsSliding(true);
    const newPosition = direction === 'left' ? slidePosition + 1 : slidePosition - 1;
    setSlidePosition(newPosition);
    setTimeout(() => {
      if (newPosition >= materialsLength) {
        setSlidePosition(0);
      } else if (newPosition < 0) {
        setSlidePosition(materialsLength - 1);
      }
      setIsSliding(false);
    }, 500); // Match transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const LOOP_SPEED = 90; // px per second

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section - Modern Design */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" id="home">
        {/* Schema.org Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://datatutorials.in"
            }]
          })}
        </script>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIwYTQgNCAwIDExIDggMHYxNGg0YTIgMiAwIDExIDAgNGgtNHY0YTIgMiAwIDExLTQgMHYtNGgtNGEyIDIgMCAxMS0yLTJoNGE0IDQgMCAxMS04IDBIMjRhNCA0IDAgMTE4IDB2MTBoLTJhNCA0IDAgMTAwIDhoNnY2YTIgMiAwIDEwNCAwdjZoNmEyIDIgMCAxMDAgNGgtNnYtNmEyIDIgMCAxMC00IDB2LTZoLTJhNCA0IDAgMTAwLThoNnptMCAwVjI2aDRhMiAyIDAgMTAwLTRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome to DataTutorials
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Master Data
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                Unlock the power of data with expert-led tutorials in Power BI, Tableau, SQL, and Python. Transform data into insights today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.a
                  whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href="Contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Start Learning Now
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.youtube.com/@datatutorials1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <FaYoutube className="w-5 h-5" />
                  Watch on YouTube
                </motion.a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6">
                {['Power BI', 'Tableau', 'SQL', 'Python','Excel'].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span className="text-sm font-medium text-gray-200">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative hidden md:block"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0, 0.2, 1] }}
            >
              <div className="relative z-10 w-full h-full">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-purple-500/20 rounded-2xl rotate-12 blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-500/20 rounded-2xl -rotate-12 blur-xl"></div>
                <div className="relative z-10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
                  <div className="mt-2 flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm text-gray-300 h-64 overflow-y-auto">
                    <div className="text-purple-400">// Welcome to DataTutorials</div>
                    <div className="text-blue-400">const</div> <span className="text-green-400">skills</span> = [
                    <div className="ml-4">'Power BI',</div>
                    <div className="ml-4">'Tableau',</div>
                    <div className="ml-4">'Excel',</div>
                    <div className="ml-4">'SQL',</div>
                    <div className="ml-4">'Python',</div>
                    <div className="ml-4">'Business Intelligence'</div>
                    ];
                    <div className="mt-2">
                      <span className="text-blue-400">function</span> <span className="text-yellow-400">transform</span>(<span className="text-green-400">data</span>) {
                      <div className="ml-4"><span className="text-blue-400">return</span> <span className="text-pink-400">insights</span>;</div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Bar */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              { value: '200K+', label: 'YouTube Subscribers' },
              { value: '500+', label: 'Tutorials Created' },
              { value: '10+', label: 'Years Experience' },
              { value: '80K+', label: 'Students Trained' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Animation Section */}
      <section className="py-12 bg-gradient-to-b from-blue-900 to-purple-800">
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
                        <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full text-white">
                          {React.createElement(tool.icon, { className: 'w-6 h-6' })}
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
                        className="skill-item absolute bg-gradient-to-r from-purple-900/20 to-purple-800/25 rounded-full p-6 shadow-lg flex items-center gap-4 hover:shadow-xl transition-all duration-300"
                        variants={slideUp}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: activeSkillIndex === index ? 1 : 0.5,
                          scale: activeSkillIndex === index ? 1.1 : 0.9,
                          x: activeSkillIndex === index ? 0 : (index % 2 === 0 ? -100 : 100),
                          y: activeSkillIndex === index ? 0 : (index > 1 ? 100 : -100)
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive data solutions to transform your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Material Package Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Purchase Material Package</h2>

          <div className="overflow-hidden relative rounded-xl shadow-lg bg-gradient-to-b from-purple-900 to-purple-800 p-4">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                ease: 'linear',
                duration: window.innerWidth < 768 ? 30 : 30, // Faster on mobile (15s) than desktop (30s)
                repeat: Infinity
              }}
            >
              {[...purchaseMaterials, ...purchaseMaterials].map((material, index) => (
                <div
                  key={`${material.id}-${index}`}
                  className="flex-none w-64 flex justify-center"
                >
                  <PurchaseMaterial material={material} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Dashboard Showcase</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore our sample dashboards to see the power of data visualization</p>
          </div>
          
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-dashboard',
                prevEl: '.swiper-button-prev-dashboard',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="dashboard-swiper"
            >
            {/* Dashboard 1 */}
            <SwiperSlide>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-1 bg-gray-100 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2 px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 font-medium">
                    Blinkit Sales Dashboard
                  </div>
                  <div className="w-24"></div>
                </div>
                <div className="aspect-video bg-gray-100">
                  <iframe 
                    title="Blinkit Sales Dashboard"
                    className="w-full h-full border-0"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMWVmMzk2MWMtMWM5OC00ODEwLWJjMWEtZWFiMGRlMWRiMDJmIiwidCI6ImNmYzRlN2U1LWYzM2QtNDU5YS05YTc0LWMwMzY0MTMzMDUzZCJ9"
                    allowFullScreen={true}
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

            {/* Dashboard 2 */}
            <SwiperSlide>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-1 bg-gray-100 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2 px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 font-medium">
                    E-commerce Analytics
                  </div>
                  <div className="w-24"></div>
                </div>
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ChartBarIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">E-commerce Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Dashboard 3 */}
            <SwiperSlide>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-1 bg-gray-100 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2 px-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-sm text-gray-500 font-medium">
                    Financial Dashboard
                  </div>
                  <div className="w-24"></div>
                </div>
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ChartPieIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">Financial Performance Dashboard</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev-dashboard absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-12 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-dashboard absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-12 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Latest Tutorials</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Check out our latest video tutorials to enhance your data skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'video1',
                title: 'India Election Analysis',
                description: 'Learn how to create interactive dashboards in Power BI',
                videoId: 'R5AhEuNclew',
                embedUrl: 'https://www.youtube.com/embed/R5AhEuNclew?autoplay=1&rel=0&modestbranding=1&showinfo=0',
                thumbnail: 'https://img.youtube.com/vi/R5AhEuNclew/maxresdefault.jpg',
                duration: '12:34'
              },
              {
                id: 'video2',
                title: 'Data Analyst Roadmap',
                description: 'Data Analyst Roadmap 2025',
                videoId: 'hXSLLttoxOA',
                embedUrl: 'https://www.youtube.com/embed/GrJQLWTGXO4?si=0aIlvUNinsm6D_JX',
                thumbnail: 'https://i.ytimg.com/vi/GrJQLWTGXO4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBwffsh9byuLj1J5yOBE-aNheGJiQ',
                duration: '15:20'
              },
              {
                id: 'video3',
                title: 'Data Analysis Capstone',
                description: 'Master data analysis with this comprehensive project',
                videoId: 'kFznX8U2N3o',
                embedUrl: 'https://www.youtube.com/embed/kFznX8U2N3o?autoplay=1&rel=0&modestbranding=1&showinfo=0',
                thumbnail: 'https://img.youtube.com/vi/kFznX8U2N3o/maxresdefault.jpg',
                duration: '18:45'
              }
            ].map((video) => {
              const [isHovered, setIsHovered] = React.useState(false);
              
              return (
                <motion.div
                  key={video.id}
                  className="group block overflow-hidden rounded-xl bg-gradient-to-br from-purple-800/20 to-blue-800/20 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {!isHovered ? (
                      <div className="relative w-full h-full">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src={video.embedUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-white/70">{video.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.youtube.com/@datatutorials1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 hover:scale-105 transform transition-transform"
            >
              <FaYoutube className="mr-2 text-xl" />
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Path to Data Mastery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Follow these steps to launch your data career</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {careerPointsData.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-20'}`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      {typeof point.icon === 'function' ? 
                        React.createElement(point.icon, { className: 'h-8 w-8 text-blue-600' }) : 
                        <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                      }
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hear from professionals who transformed their careers with our training</p>
          </div>
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {[
              {
                name: 'Rahul Sharma',
                role: 'Senior Data Analyst',
                content: 'The Power BI training transformed how I approach data visualization. The practical examples and real-world scenarios made complex concepts easy to understand and implement.',
                rating: 5
              },
              {
                name: 'Priya Patel',
                role: 'Business Intelligence Lead',
                content: 'Exceptional SQL training! The course structure and hands-on exercises helped me optimize our database queries, reducing report generation time by 60%.',
                rating: 5
              },
              {
                name: 'Michael Johnson',
                role: 'Data Scientist',
                content: 'The Python for Data Analysis course provided exactly what I needed to transition from research to industry. The mentorship was invaluable in helping me understand real-world applications.',
                rating: 5
              },
              {
                name: 'Ananya Gupta',
                role: 'Data Engineer',
                content: 'The ETL process training was comprehensive and immediately applicable. I was able to implement what I learned to streamline our data pipeline in just two weeks.',
                rating: 4
              },
              {
                name: 'David Wilson',
                role: 'Analytics Manager',
                content: 'The Tableau training helped my team create more impactful dashboards. The instructor\'s industry experience brought a practical perspective that you won\'t find in standard courses.',
                rating: 5
              },
              {
                name: 'Sanjay Mehta',
                role: 'BI Consultant',
                content: 'The data modeling concepts I learned helped me design more efficient data warehouses. The training paid for itself within the first month of implementation.',
                rating: 5
              },
              {
                name: 'Neha Reddy',
                role: 'Data Analyst',
                content: 'The Power BI DAX training was game-changing. I can now create complex calculations and measures that have significantly improved our reporting capabilities.',
                rating: 5
              },
              {
                name: 'Amit Kumar',
                role: 'Senior Manager - Analytics',
                content: 'The training provided practical insights that I could immediately apply to improve our data governance framework. The instructor\'s expertise in the field was evident.',
                rating: 4
              },
              {
                name: 'Sophie Martin',
                role: 'Data Visualization Expert',
                content: 'The advanced visualization techniques I learned helped me create more impactful dashboards. The course materials were well-structured and easy to follow.',
                rating: 5
              },
              {
                name: 'Vikram Singh',
                role: 'Lead Data Analyst',
                content: 'The end-to-end data analytics training covered everything from data cleaning to advanced visualization. The hands-on projects were particularly valuable for my professional development.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col">
                  <div className="flex-grow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaQuoteLeft className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-blue-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 relative">
                      <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-2 -left-2 -z-10" />
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex mt-auto">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      {/* Launch Your Data Career Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="flex-1 text-center">
              <h2 className="text-3xl font-extrabold text-white mb-4">Launch Your Data Career</h2>
              <p className="text-white/80 max-w-md mx-auto">
                Start your journey in data analytics and visualization with our comprehensive resources and guidance
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-b from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full transition duration-300 flex items-center gap-3">
                Contact Direct
                <FaChevronRight className="w-5 h-5" />
              </Link>
              <a href="https://www.youtube.com/@datatutorials1" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 rounded-full transition duration-300 flex items-center gap-3">
                Subscribe on YouTube
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;