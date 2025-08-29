import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaTools, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import { powerBIDashboards } from '../data/powerBIDashboards';
import { motion } from 'framer-motion';

// Combine all dashboard data sources
const allDashboards = [...powerBIDashboards];

const DashboardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Find the dashboard by ID
  const dashboard = allDashboards.find(d => d.id === parseInt(id || '0'));

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading if needed
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Not Found</h1>
          <p className="text-gray-600 mb-6">The requested dashboard could not be found or is no longer available.</p>
          <button
            onClick={() => navigate('/dashboards')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Dashboards
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute -bottom-1/3 -right-1/4 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div className="mb-4 md:mb-0">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {dashboard.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {dashboard.title}
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mb-6">{dashboard.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {dashboard.tools.map((tool, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/dashboards')}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-gray-800 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 transition-all mt-6"
            >
              <FaArrowLeft className="mr-2 h-3.5 w-3.5" />
              Back to Dashboards
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FaInfoCircle className="mr-2 text-blue-500" />
                  Dashboard Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Category</p>
                    <p className="text-sm font-medium text-gray-900">{dashboard.category}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tools Used</p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {dashboard.tools.map((tool, index) => (
                        <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaTools className="mr-2 text-blue-500" />
                Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Interactive visualizations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Real-time data updates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Responsive design</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="flex items-center justify-center h-96 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading dashboard preview...</p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {dashboard.embedUrl ? (
                  <div className="relative pt-[56.25%] bg-gray-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6 max-w-md">
                        <div className="animate-pulse flex flex-col items-center">
                          <FaChartLine className="h-10 w-10 text-gray-300 mb-4" />
                          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-32 mb-4"></div>
                        </div>
                      </div>
                    </div>
                    <iframe
                      title={dashboard.title}
                      src={dashboard.embedUrl}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allowFullScreen={true}
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      loading="eager"
                    ></iframe>
                  </div>
                ) : (
                  <div className="p-12 text-center bg-gray-50 rounded-xl">
                    <div className="mx-auto h-24 w-24 text-gray-300">
                      <FaChartLine className="h-full w-full" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No preview available</h3>
                    <p className="mt-1 text-sm text-gray-500">This dashboard doesn't have an embedded preview.</p>
                  </div>
                )}
              </div>
            )}

            {/* Dashboard Description */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Dashboard</h3>
              <div className="prose max-w-none text-gray-600">
                <p>
                  This dashboard provides comprehensive insights and analytics for {dashboard.title.toLowerCase()}.
                  It includes various visualizations and metrics to help you understand the data better and make informed decisions.
                </p>
                <p className="mt-4">
                  The data is updated regularly to ensure you have access to the most current information.
                  Use the interactive elements to filter and explore the data in more detail.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Performance', 'Engagement', 'Growth'].map((metric) => (
                    <div key={metric} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">{metric}</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {Math.floor(Math.random() * 100)}%
                      </p>
                      <div className="mt-1 flex items-center text-xs">
                        <span className="text-green-600 font-medium">+{Math.floor(Math.random() * 10)}%</span>
                        <span className="text-gray-500 ml-1">vs last period</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Info */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Dashboard Details</h3>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {dashboard.embedUrl && (
                    <a
                      href={dashboard.embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                      Open in New Tab
                    </a>
                  )}
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-full shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Back to Top
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
