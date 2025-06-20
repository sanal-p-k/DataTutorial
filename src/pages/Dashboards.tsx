import { useState } from 'react';
import { motion } from 'framer-motion';
import { FilmIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const dashboardCategories = [
  'Finance',
  'HR',
  'Sales',
  'Education',
  'Marketing',
  'Healthcare'
];

const dashboards = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Sales',
    image: '/dashboard-sales.jpg',
    description: 'Track your sales performance with real-time metrics and KPIs',
    tools: ['Power BI', 'SQL', 'Python']
  },
  {
    id: 2,
    title: 'HR Analytics Dashboard',
    category: 'HR',
    image: '/dashboard-hr.jpg',
    description: 'Analyze employee data and workforce metrics',
    tools: ['Tableau', 'Excel', 'Power BI']
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Finance',
    image: '/dashboard-finance.jpg',
    description: 'Monitor financial health and key metrics',
    tools: ['Power BI', 'SQL']
  },
  // Add more dashboards as needed
];

const container = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const button = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Dashboards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredDashboards =
    selectedCategory === 'All'
      ? dashboards
      : dashboards.filter((d) => d.category === selectedCategory);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative min-h-[80vh] px-4 sm:px-6 pt-32 pb-12 bg-gray-950 text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dashboard.jpg"
          alt="Dashboard Background"
          className="w-full h-screen object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-purple-900/60" />
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 sm:p-12 md:p-16">
        <motion.div
          variants={item}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">Dashboard Showcase</h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Explore interactive dashboards built with Power BI, Tableau, and more.
          </p>
        </motion.div>

        {/* Tool Info Cards */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16"
        >
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-white">Power BI</h4>
              <span className="px-2 py-0.5 text-xs bg-purple-100 text-purple-800 rounded-full">Microsoft</span>
            </div>
            <p className="text-gray-400 mb-4">
              Power BI is a business analytics service by Microsoft. It connects to hundreds of data sources,
              simplifies data prep, and provides rich dashboards and natural language queries.
            </p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <span>Cloud</span>
              <span>Enterprise</span>
              <span>AI</span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold text-white">Tableau</h4>
              <span className="px-2 py-0.5 text-xs bg-purple-100 text-purple-800 rounded-full">Salesforce</span>
            </div>
            <p className="text-gray-400 mb-4">
              Tableau helps people see and understand data. Connect to nearly any database, drag and drop
              to analyze, and share your work easily.
            </p>
            <div className="flex items-center space-x-3 text-sm text-white/70">
              <span>Visualization</span>
              <span>Analytics</span>
              <span>Reporting</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <motion.div
        variants={item}
        className="relative z-10 max-w-6xl mx-auto mt-20 mb-10"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <FilmIcon className="h-5 w-5 text-purple-400" />
          <span className="text-sm text-white/60">Filter by category</span>
        </div>
        <div className="flex justify-center flex-wrap gap-3">
          {['All', ...dashboardCategories].map((category, index) => (
            <motion.button
              variants={button}
              custom={index}
              key={category}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-purple-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Dashboard Cards Grid */}
      <motion.div
        variants={container}
        className="relative z-10 max-w-6xl mx-auto mt-16"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDashboards.map((dashboard, i) => (
            <motion.div
              key={dashboard.id}
              custom={i}
              variants={item}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Link to={`/dashboard/${dashboard.id}`}>
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-48 object-cover"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = '/placeholder.jpg';
                  }}
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-purple-400 mb-1">{dashboard.title}</h3>
                  <p className="text-lg bg-gradient-to-r from-blue-300/80 to-blue-500/80 bg-clip-text text-transparent max-w-2xl mx-auto mb-12">{dashboard.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    {dashboard.tools.map((tool: string) => (
                      <span key={tool} className="bg-purple-700/40 px-2 py-0.5 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboards;
