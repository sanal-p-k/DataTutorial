import { useState } from 'react';
import { motion } from 'framer-motion';
import { FilmIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

// Animation variants
const staggerContainer = {
  initial: { opacity: 0 },
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
      ease: 'easeOut',
    },
  },
};

const dashboardCategories = ['Finance', 'HR', 'Sales', 'Education', 'Marketing', 'Healthcare'];

const dashboards = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Sales',
    image: '/dashboard-sales.jpg',
    description: 'Track your sales performance with real-time metrics and KPIs.',
    tools: ['Power BI', 'SQL', 'Python'],
  },
  {
    id: 2,
    title: 'HR Analytics Dashboard',
    category: 'HR',
    image: '/dashboard-hr.jpg',
    description: 'Analyze employee data and workforce metrics.',
    tools: ['Tableau', 'Excel', 'Power BI'],
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Finance',
    image: '/dashboard-finance.jpg',
    description: 'Monitor financial health and key metrics.',
    tools: ['Power BI', 'SQL'],
  },
];

const Dashboards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDashboards =
    selectedCategory === 'All' ? dashboards : dashboards.filter(d => d.category === selectedCategory);

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
          src="/dashboard.jpg"
          alt="Dashboards Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-purple-900/60" />
      </div>

      {/* Glassy Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
        <motion.div variants={staggerItem} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Dashboard Showcase</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore interactive dashboards built with Power BI, Tableau, and more.
          </p>
        </motion.div>

        <motion.div variants={staggerItem} className="mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <FilmIcon className="h-5 w-5 text-purple-500" />
            <span className="text-sm text-gray-400">Filter by category</span>
          </div>
          <div className="flex justify-center flex-wrap gap-3">
            {['All', ...dashboardCategories].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDashboards.map((dashboard) => (
            <motion.div
              key={dashboard.id}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <Link to={`/dashboard/${dashboard.id}`}>
                <img
                  src={dashboard.image}
                  alt={dashboard.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-1">{dashboard.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{dashboard.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dashboard.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-xs bg-purple-100 text-purple-800 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboards;
