import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { powerBIDashboards } from '../data/powerBIDashboards';

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

// Helper function to get category color

// Other dashboard examples (non-Power BI)
const otherDashboards = [
  {
    id: 1,
    title: 'Excel Dashboards',
    category: 'Excel',
    description: 'Interactive Excel dashboards with pivot tables, formulas, and data visualization.',
    tools: ['Excel', 'Power Query', 'Power Pivot'],
    color: 'from-green-600 to-emerald-700',
    image: '/images/purchase/excel.png'
  },
  {
    id: 2,
    title: 'Data Analysis with Excel',
    category: 'Excel',
    description: 'Advanced data analysis using Excel functions, what-if analysis, and solver.',
    tools: ['Excel', 'Advanced Formulas', 'Data Analysis'],
    color: 'from-green-600 to-emerald-700',
    image: '/images/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Tableau Visualizations',
    category: 'Tableau',
    description: 'Beautiful and insightful data visualizations for data exploration and storytelling.',
    tools: ['Tableau', 'Tableau Prep', 'Tableau Server'],
    color: 'from-purple-500 to-pink-500',
    image: '/images/purchase/tableau.png'
  },
  {
    id: 4,
    title: 'SQL Queries & Analysis',
    category: 'SQL',
    description: 'Advanced SQL queries, stored procedures, and database optimization techniques.',
    tools: ['SQL Server', 'PostgreSQL', 'MySQL'],
    color: 'from-blue-500 to-cyan-500',
    image: '/images/purchase/sql.png'
  },
  {
    id: 5,
    title: 'Python Data Analysis',
    category: 'Python',
    description: 'Data analysis, machine learning, and automation scripts using Python.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    color: 'from-indigo-500 to-blue-600',
    image: '/images/purchase/python.png'
  },
  {
    id: 6,
    title: 'Capstone Projects',
    category: 'Capstone',
    description: 'End-to-end data projects showcasing complete data analysis workflows.',
    tools: ['Power BI', 'Python', 'SQL', 'Tableau'],
    color: 'from-green-500 to-emerald-600',
    image: '/images/placeholder.jpg'
  }
];


const Dashboards = () => {
  // Combine all dashboards
  const allDashboards = [...powerBIDashboards, ...otherDashboards];
  
  // Group dashboards by category
  const dashboardsByCategory = allDashboards.reduce((acc, dashboard) => {
    if (!acc[dashboard.category]) {
      acc[dashboard.category] = [];
    }
    acc[dashboard.category].push(dashboard);
    return acc;
  }, {} as Record<string, typeof allDashboards>);
  
  // Define the order of categories
  const categoryOrder = ['Power BI', 'Tableau', 'Excel', 'SQL', 'Python', 'Capstone'];

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
                  Resource Tab
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dashboards
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore my collection of data analytics projects, dashboards, and visualizations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryOrder.map((category) => {
          const categoryDashboards = dashboardsByCategory[category] || [];
          if (categoryDashboards.length === 0) return null;

          return (
            <section key={category} className="mb-16 last:mb-0">
              {/* Category Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {category}
                  <span className="ml-3 text-sm font-normal text-gray-500">
                    ({categoryDashboards.length} {categoryDashboards.length === 1 ? 'dashboard' : 'dashboards'})
                  </span>
                </h2>
              </motion.div>

              {/* Dashboard Cards - Horizontal scroll for all categories */}
              <div className="relative">
                <div className="flex space-x-6 pb-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                  {categoryDashboards.map((dashboard) => (
                    <motion.div
                      key={dashboard.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-80 snap-center"
                    >
                      <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                        {dashboard.category === 'Power BI' ? (
                          <div className="aspect-video bg-gray-100 overflow-hidden relative">
                            <img
                              src={dashboard.image}
                              alt={`${dashboard.title} Preview`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/images/placeholder.jpg';
                              }}
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="text-4xl mb-2">🚧</div>
                              <p className="text-gray-500 font-medium">Coming Soon</p>
                            </div>
                          </div>
                        )}
                        <div className="p-5 flex-grow flex flex-col">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{dashboard.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{dashboard.description}</p>
                          <div className="mt-auto">
                            {dashboard.category === 'Power BI' ? (
                              <Link
                                to={`/dashboards/${dashboard.id}`}
                                className="inline-flex items-center text-sm font-medium text-blue-600"
                              >
                                View Dashboard
                                <svg
                                  className="ml-1 w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </Link>
                            ) : (
                              <button 
                                onClick={() => alert('This dashboard is under construction. Coming soon!')}
                                className="inline-flex items-center text-sm font-medium text-blue-600 bg-transparent border-none p-0 m-0"
                              >
                                View Dashboard
                                <svg
                                  className="ml-1 w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
              </div>
            </section>
          );
        })}
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
