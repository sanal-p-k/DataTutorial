import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { FaArrowLeft, FaExternalLinkAlt, FaTools, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import { powerBIDashboards } from '../data/powerBIDashboards';
import { tableauDashboards } from '../data/tableauDashboards';
import { motion } from 'framer-motion';
import type { Dashboard } from '../types/dashboard';

// Combine all dashboard data sources
const allDashboards: Dashboard[] = [...powerBIDashboards as Dashboard[], ...tableauDashboards as Dashboard[]];

const DashboardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Find the dashboard by ID (handles both string and number IDs)
  const dashboard = allDashboards.find(d => 
    d.id.toString() === id || d.id === parseInt(id || '0')
  );

  const embedContainerRef = useRef<HTMLDivElement>(null);

  // Handle Tableau embed script injection
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (dashboard?.isTableau && dashboard.embedUrl) {
      setIsLoading(true);
      
      // Check if Tableau JS API is already loaded
      if (!window.tableau) {
        const script = document.createElement('script');
        script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
        script.async = true;
        script.onload = () => initializeTableauViz();
        script.onerror = () => handleTableauError('Failed to load Tableau JS API');
        document.body.appendChild(script);
        
        // Cleanup function
        return () => {
          document.body.removeChild(script);
        };
      } else {
        initializeTableauViz();
      }
    } else {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
    
    function initializeTableauViz() {
      if (!dashboard?.isTableau || !dashboard.embedUrl || !embedContainerRef.current) return;
      
      try {
        // Clear previous content
        embedContainerRef.current.innerHTML = '';
        
        // Create a container for the Tableau viz
        const container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.minHeight = '600px';
        
        // Create the Tableau viz element
        const vizElement = document.createElement('tableau-viz');
        vizElement.setAttribute('id', `tableau-viz-${Date.now()}`);
        vizElement.setAttribute('src', dashboard.embedUrl);
        vizElement.setAttribute('hide-tabs', 'true');
        vizElement.setAttribute('toolbar', 'bottom');
        vizElement.style.width = '100%';
        vizElement.style.height = '800px';
        
        // Add the viz to the container
        container.appendChild(vizElement);
        embedContainerRef.current.appendChild(container);
        
        // Set up a mutation observer to detect when the viz is loaded
        const observer = new MutationObserver((_mutations, obs) => {
          if (vizElement.shadowRoot?.querySelector('iframe')) {
            setIsLoading(false);
            obs.disconnect(); // Stop observing once loaded
          }
        });
        
        // Start observing the viz element
        observer.observe(vizElement, { childList: true, subtree: true });
        
        // Set a timeout in case the viz fails to load
        const loadTimeout = setTimeout(() => {
          if (isLoading) {
            handleTableauError('Tableau visualization is taking longer than expected to load.');
          }
        }, 10000); // 10 second timeout
        
        // Cleanup function
        return () => {
          clearTimeout(loadTimeout);
          observer.disconnect();
          if (embedContainerRef.current) {
            embedContainerRef.current.innerHTML = '';
          }
        };
        
      } catch (error) {
        console.error('Error initializing Tableau viz:', error);
        handleTableauError('Failed to initialize Tableau visualization.');
      }
    }
    
    function handleTableauError(message: string) {
      setIsLoading(false);
      if (embedContainerRef.current) {
        embedContainerRef.current.innerHTML = `
          <div class="bg-red-50 border-l-4 border-red-400 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-700">
                  ${message} Please try refreshing the page or check your network connection.
                </p>
                ${dashboard?.embedUrl ? `
                  <div class="mt-2">
                    <a href="${dashboard.embedUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Open in Tableau Public →
                    </a>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        `;
      }
    }
  }, [id, dashboard]);

  useEffect(() => {
    if (!dashboard) {
      // Redirect to dashboards page if dashboard is not found
      navigate('/dashboards', { replace: true });
    }
  }, [dashboard, navigate]);

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-gray-100">
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
                  <div className="relative w-full bg-gray-50" style={{ height: '800px' }}>
                    <div className="relative w-full h-full">
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading dashboard...</p>
                          </div>
                        </div>
                      )}
                      <div 
                        ref={embedContainerRef} 
                        className="w-full h-full min-h-[600px] bg-gray-50"
                      />
                      {dashboard.isTableau && !isLoading && (
                        <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-gray-200">
                          <span className="text-purple-600 font-medium">Tableau</span> Visualization
                        </div>
                      )}
                    </div>
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
                  {dashboard.detailedDescription || `This dashboard provides comprehensive insights and analytics for ${dashboard.title.toLowerCase()}.
                  It includes various visualizations and metrics to help you understand the data better and make informed decisions.`}
                </p>
                
                {dashboard.features && dashboard.features.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-base font-medium text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {dashboard.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Dashboard Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {dashboard.dataSource && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Data Source</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{dashboard.dataSource}</p>
                    </div>
                  )}
                  
                  {dashboard.lastUpdated && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Last Updated</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {new Date(dashboard.lastUpdated).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  
                  {dashboard.views !== undefined && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Views</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {dashboard.views.toLocaleString()}
                      </p>
                    </div>
                  )}
                  
                  {dashboard.favorites !== undefined && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Favorites</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">
                        {dashboard.favorites.toLocaleString()}
                      </p>
                    </div>
                  )}
                  
                  {dashboard.category && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Category</p>
                      <p className="text-sm font-medium text-gray-900 mt-1">{dashboard.category}</p>
                    </div>
                  )}
                  
                  {dashboard.tools && dashboard.tools.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs font-medium text-gray-500">Tools Used</p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {dashboard.tools.map((tool, index) => (
                          <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* Dashboard Info */}
        <div className="bg-white shadow rounded-lg overflow-hidden mt-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Dashboard Details</h3>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
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
