import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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
    title: 'Power BI Dashboards',
    category: 'Power BI',
    description: 'Interactive business intelligence dashboards with advanced visualizations and data modeling.',
    tools: ['Power BI', 'DAX', 'Power Query'],
    color: 'from-yellow-500 to-amber-500',
    image: '/images/purchase/powerbi.png'
  },
  {
    id: 4,
    title: 'Tableau Visualizations',
    category: 'Tableau',
    description: 'Beautiful and insightful data visualizations for data exploration and storytelling.',
    tools: ['Tableau', 'Tableau Prep', 'Tableau Server'],
    color: 'from-purple-500 to-pink-500',
    image: '/images/purchase/tableau.png'
  },
  {
    id: 5,
    title: 'SQL Queries & Analysis',
    category: 'SQL',
    description: 'Advanced SQL queries, stored procedures, and database optimization techniques.',
    tools: ['SQL Server', 'PostgreSQL', 'MySQL'],
    color: 'from-blue-500 to-cyan-500',
    image: '/images/purchase/sql.png'
  },
  {
    id: 6,
    title: 'Python Data Analysis',
    category: 'Python',
    description: 'Data analysis, machine learning, and automation scripts using Python.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    color: 'from-indigo-500 to-blue-600',
    image: '/images/purchase/python.png'
  },
  {
    id: 7,
    title: 'Capstone Projects',
    category: 'Capstone',
    description: 'End-to-end data projects showcasing complete data analysis workflows.',
    tools: ['Power BI', 'Python', 'SQL', 'Tableau'],
    color: 'from-green-500 to-emerald-600',
    image: '/images/placeholder.jpg'
  },
  {
    id: 8,
    title: 'Data Integration',
    category: 'Power BI',
    description: 'Connecting multiple data sources and creating unified dashboards.',
    tools: ['Power BI', 'SQL', 'APIs'],
    color: 'from-orange-500 to-red-600',
    image: '/images/placeholder.jpg'
  }
];


const Dashboards = () => {
  // Group dashboards by category
  const dashboardsByCategory = dashboards.reduce((acc, dashboard) => {
    if (!acc[dashboard.category]) {
      acc[dashboard.category] = [];
    }
    acc[dashboard.category].push(dashboard);
    return acc;
  }, {} as Record<string, typeof dashboards>);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Excel': 'from-green-600 to-emerald-700',
      'Power BI': 'from-yellow-500 to-amber-500',
      'Tableau': 'from-purple-500 to-pink-500',
      'SQL': 'from-blue-500 to-cyan-500',
      'Python': 'from-indigo-500 to-blue-600',
      'Capstone': 'from-green-500 to-emerald-600',
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Excel': 'XLS',
      'Power BI': 'PBI',
      'Tableau': 'TBL',
      'SQL': 'SQL',
      'Python': 'PY',
      'Capstone': 'CP',
    };
    return icons[category] || '';
  };

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
                  Dashboard Portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Data Analytics Portfolio
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
        {/* Category Sections */}
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
                className="mb-8 flex items-center"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold text-white mr-4 ${getCategoryColor(category)}`}>
                  {getCategoryIcon(category)}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category} Projects</h2>
                <div className="ml-4 flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
              </motion.div>

              {/* Dashboard Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {categoryDashboards.map((dashboard, index) => (
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
                          <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(category)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
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
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                            {dashboard.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-5 flex-grow">{dashboard.description}</p>
                          
                          <div className="w-full mt-auto py-2 px-4 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 text-sm font-medium rounded-lg group-hover:from-indigo-100 group-hover:to-blue-100 transition-all duration-300 flex items-center justify-center border border-indigo-100">
                            View Project
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
