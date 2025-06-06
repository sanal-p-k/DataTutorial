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

const Dashboards = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDashboards = selectedCategory === 'All' 
    ? dashboards 
    : dashboards.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white container mx-auto px-4 py-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-600 mb-4 text-center">
            Dashboard Showcase
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-center mb-8">
            Explore my collection of interactive data dashboards built with Power BI and Tableau
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <FilmIcon className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-gray-500">Filter by category:</span>
          </div>
          <div className="flex justify-center gap-3 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                selectedCategory === 'All' 
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-purple-50'
              }`}
            >
              All
            </motion.button>
            {dashboardCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  selectedCategory === category 
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Dashboards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDashboards.map((dashboard) => (
            <Link to={`/dashboard/${dashboard.id}`}>
              <motion.div
                key={dashboard.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl shadow-lg p-6 transition duration-300 hover:shadow-2xl cursor-pointer"
              >
                <img 
                  src={dashboard.image} 
                  alt={dashboard.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-purple-600 hover:text-white">{dashboard.title}</h3>
                      <span className="text-sm text-gray-500">{dashboard.category}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{dashboard.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {dashboard.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2 py-0.5 text-sm bg-purple-100 text-purple-800 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboards;
