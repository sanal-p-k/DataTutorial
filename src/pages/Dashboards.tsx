import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDatabase, FaArrowRight } from 'react-icons/fa';
import { ChartPieIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Purchase Materials Data
const purchaseMaterials = [
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
    title: 'SQL Mastery Kit',
    description: 'Advanced SQL queries and database solutions',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    features: ['50+ Queries', '$25'],
    image: 'sql.png',
    price: '$25'
  }
];

// Animation variants
const container = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Helper function to get image path based on tool name
const getToolImage = (tool: string) => {
  const toolImages: {[key: string]: string} = {
    'Power BI': '/images/purchase/powerbi.png',
    'Tableau': '/images/purchase/tableau.png',
    'SQL': '/images/purchase/sql.png',
    'Excel': '/images/purchase/excel.png',
    'Python': '/images/purchase/python.png',
    'Google Analytics': '/images/placeholder.jpg',
    'HRIS': '/images/placeholder.jpg',
    'SAP': '/images/placeholder.jpg',
    'CRM': '/images/placeholder.jpg'
  };
  return toolImages[tool] || '/images/placeholder.jpg';
};

const dashboards = [
  {
    id: 1,
    title: 'Sales Performance',
    category: 'Sales',
    description: 'Track revenue, deals, and sales team performance with interactive visualizations and real-time metrics.',
    tools: ['Power BI', 'SQL', 'Excel'],
    color: 'from-blue-500 to-indigo-600',
    image: '/images/purchase/powerbi.png'
  },
  {
    id: 2,
    title: 'Marketing Analytics',
    category: 'Marketing',
    description: 'Analyze campaign performance, ROI, and customer engagement across multiple channels.',
    tools: ['Tableau', 'Google Analytics', 'Excel'],
    color: 'from-purple-500 to-pink-600',
    image: '/images/purchase/tableau.png'
  },
  {
    id: 3,
    title: 'Financial Overview',
    category: 'Finance',
    description: 'Comprehensive view of financial health, expenses, revenue, and profitability metrics.',
    tools: ['Power BI', 'Excel', 'SQL'],
    color: 'from-emerald-500 to-teal-600',
    image: '/images/purchase/excel.png'
  },
  {
    id: 4,
    title: 'HR Analytics',
    category: 'HR',
    description: 'Track employee performance, engagement, and workforce planning metrics.',
    tools: ['Tableau', 'HRIS', 'Power BI'],
    color: 'from-amber-500 to-orange-600',
    image: '/images/placeholder.jpg'
  },
  {
    id: 5,
    title: 'Supply Chain',
    category: 'Operations',
    description: 'Monitor inventory, logistics, and supply chain performance in real-time.',
    tools: ['Power BI', 'SAP', 'SQL'],
    color: 'from-rose-500 to-red-600',
    image: '/images/placeholder.jpg'
  },
  {
    id: 6,
    title: 'Customer Success',
    category: 'Operations',
    description: 'Track customer health, satisfaction, and success metrics.',
    tools: ['Tableau', 'CRM', 'Power BI'],
    color: 'from-violet-500 to-fuchsia-600',
    image: '/images/placeholder.jpg'
  }
];

const categories = ['All', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations'];

const Dashboards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Sales': 'bg-blue-100 text-blue-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Finance': 'bg-green-100 text-green-800',
      'HR': 'bg-amber-100 text-amber-800',
      'Operations': 'bg-rose-100 text-rose-800',
      'All': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredDashboards = selectedCategory === 'All' 
    ? dashboards 
    : dashboards.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={container}
            className="text-center relative z-10"
          >
            <motion.div variants={staggerItem} className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Dashboard Portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Interactive Dashboards
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with our interactive dashboard solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div 
          variants={container}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={staggerItem}
              custom={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.id}
              variants={staggerItem}
              custom={index}
              className="h-full"
            >
              <Link 
                to={`/dashboards/${dashboard.id}`}
                className="block h-full"
              >
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  {/* Dashboard Preview Image */}
                  <div className="relative h-40 bg-gray-100 overflow-hidden">
                    <img 
                      src={dashboard.image} 
                      alt={dashboard.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${dashboard.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    <div className="absolute bottom-3 right-3 flex -space-x-1">
                      {dashboard.tools.slice(0, 3).map((tool, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full bg-white border-2 border-white shadow-md overflow-hidden"
                          title={tool}
                        >
                          <img 
                            src={getToolImage(tool)} 
                            alt={tool}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/placeholder.jpg';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(dashboard.category)} w-fit mb-3`}>
                      {dashboard.category}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                      {dashboard.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-5 flex-grow">{dashboard.description}</p>
                    
                    <div className="w-full mt-auto py-2.5 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 text-sm font-medium rounded-lg group-hover:from-indigo-100 group-hover:to-blue-100 transition-all duration-300 flex items-center justify-center border border-indigo-100">
                      Explore Dashboard
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Purchase Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Learning Materials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your skills with our professionally curated materials and templates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purchaseMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-40 bg-gray-100 overflow-hidden">
                  <img 
                    src={`/images/purchase/${material.image}`} 
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">{material.price}</span>
                      <div className="flex -space-x-1">
                        {material.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
                      {material.icon}
                    </div>
                    <span className="text-sm font-medium text-indigo-600">Premium</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{material.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{material.description}</p>
                  
                  <a 
                    href="https://topmate.io/data_tutorials" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Access
                    <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={staggerItem}
            className="text-3xl font-bold text-white mb-4"
          >
            Need a Custom Dashboard?
          </motion.h2>
          <motion.p 
            variants={staggerItem}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Let's create a tailored analytics solution for your business needs.
          </motion.p>
          <motion.div variants={staggerItem}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-white hover:bg-gray-100 md:py-3 md:text-lg md:px-8 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
