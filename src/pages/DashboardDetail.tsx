import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  FaArrowLeft, 
  FaGithub, 
  FaDownload, 
  FaChartLine
} from 'react-icons/fa';

// Custom hook to handle scroll to top on route change
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

interface Dashboard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  color: string;
  // Optional fields with default values
  powerBiUrl: string | null;
  youtubeVideoId?: string;
  features?: string[];
  lastUpdated?: string;
  downloadUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
}

// Dashboard data
const dashboardsData = [
  {
    id: 1,
    title: 'Sales Performance',
    category: 'Sales',
    description: 'Track revenue, deals, and sales team performance with interactive visualizations and real-time metrics.',
    tools: ['Power BI', 'SQL', 'Excel'],
    color: 'from-blue-500 to-indigo-600',
    image: '/images/purchase/powerbi.png',
    powerBiUrl: null
  },
  {
    id: 2,
    title: 'Marketing Analytics',
    category: 'Marketing',
    description: 'Analyze campaign performance, ROI, and customer engagement across multiple channels.',
    tools: ['Tableau', 'Google Analytics', 'Excel'],
    color: 'from-purple-500 to-pink-600',
    image: '/images/purchase/tableau.png',
    powerBiUrl: null
  },
  {
    id: 3,
    title: 'Financial Overview',
    category: 'Finance',
    description: 'Comprehensive view of financial health, expenses, revenue, and profitability metrics.',
    tools: ['Power BI', 'Excel', 'SQL'],
    color: 'from-emerald-500 to-teal-600',
    image: '/images/purchase/excel.png',
    powerBiUrl: null
  }
];

// Enhance the dashboard data with default values
const enhancedDashboards: Dashboard[] = dashboardsData.map((dashboard: Dashboard) => ({
  ...dashboard,
  powerBiUrl: null, // Set to null to show the placeholder
  youtubeVideoId: 'dQw4w9WgXcQ',
  features: [
    'Interactive visualizations',
    'Real-time data',
    'Export to PDF/Excel',
    'Responsive design'
  ],
  lastUpdated: '2023-11-15',
  downloadUrl: `#${dashboard.title.toLowerCase().replace(/\s+/g, '-')}-download`,
  githubUrl: 'https://github.com/yourusername/dashboards',
  documentationUrl: '#'
}));

const DashboardDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Type guard to ensure id is defined
  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The requested dashboard could not be found. Please check the URL and try again.</p>
          <Link 
            to="/dashboards" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" /> Back to Dashboards
          </Link>
        </div>
      </div>
    );
  }

  const dashboard = enhancedDashboards.find((d: Dashboard) => d.id === Number(id));

  if (!dashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The dashboard you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/dashboards" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" /> Browse All Dashboards
          </Link>
        </div>
      </div>
    );
  }

  // Use the scroll to top hook
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Dashboard Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl font-bold text-gray-900">{dashboard.title}</h1>
                <p className="text-gray-600 mt-1">{dashboard.category} Dashboard</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/dashboards"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Dashboards
                </Link>
                <a 
                  href={dashboard.downloadUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <FaDownload className="mr-2" />
                  Download
                </a>
                <a 
                  href={dashboard.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700">{dashboard.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {dashboard.tools.map((tool: string, index: number) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: '70vh' }}>
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 p-6 text-center">
                <FaChartLine className="h-12 w-12 mb-4 text-gray-300" />
                <h3 className="text-lg font-medium text-gray-900">Dashboard Preview</h3>
                <p className="mt-1 text-sm text-gray-500 mb-4">Interactive dashboard would be displayed here</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <button 
                    onClick={() => window.open(dashboard.downloadUrl, '_blank')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FaDownload className="mr-2" />
                    Download Dashboard
                  </button>
                </div>
              </div>
            </div>
            
            {/* Features Section */}
            {dashboard.features && dashboard.features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {dashboard.features.map((feature: string, index: number) => (
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
        </div>
      </main>
      
      {/* Footer CTA */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-indigo-100">
              Download this dashboard template or explore our other data solutions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href={dashboard.downloadUrl || '#'}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <FaDownload className="mr-2" />
                Download Template
              </a>
              <Link
                to="/dashboards"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Browse All Dashboards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DashboardDetail;
