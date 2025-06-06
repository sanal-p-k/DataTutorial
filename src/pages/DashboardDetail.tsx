import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Dashboard {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  powerBiUrl: string;
  youtubeVideoId: string;
}

const dashboards: Dashboard[] = [
  {
    id: 1,
    title: 'Sales Performance Dashboard',
    category: 'Sales',
    image: '/dashboard-sales.jpg',
    description: 'Track your sales performance with real-time metrics and KPIs',
    tools: ['Power BI', 'SQL', 'Python'],
    powerBiUrl: 'https://your-powerbi-embed-url-here',
    youtubeVideoId: 'your-video-id-1' // Replace with actual video ID
  },
  {
    id: 2,
    title: 'HR Analytics Dashboard',
    category: 'HR',
    image: '/dashboard-hr.jpg',
    description: 'Analyze employee data and workforce metrics',
    tools: ['Tableau', 'Excel', 'Power BI'],
    powerBiUrl: 'https://your-powerbi-embed-url-here',
    youtubeVideoId: 'your-video-id-2' // Replace with actual video ID
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Finance',
    image: '/dashboard-finance.jpg',
    description: 'Monitor financial health and key metrics',
    tools: ['Power BI', 'SQL'],
    powerBiUrl: 'https://your-powerbi-embed-url-here',
    youtubeVideoId: 'your-video-id-3' // Replace with actual video ID
  }
];

const DashboardDetail = () => {
  const { id } = useParams();
  if (!id) {
    return <div>Dashboard ID not found in URL</div>;
  }

  const dashboard = dashboards.find(d => d.id === parseInt(id));

  if (!dashboard) {
    return <div>Dashboard not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 max-w-6xl text-white"
      >
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-purple-400/90 mb-6">{dashboard.title}</h2>
            <p className="text-xl text-white/80 mb-6">{dashboard.description}</p>
            <p className="text-lg text-white/70">
              This dashboard provides comprehensive insights and analytics for {dashboard.category.toLowerCase()} operations. 
              It leverages advanced data visualization techniques to deliver actionable insights that help optimize business performance.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400/90">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Real-time data visualization</li>
              <li>Interactive data exploration</li>
              <li>Customizable metrics and KPIs</li>
              <li>Mobile-responsive design</li>
              <li>Automatic data refresh</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          {/* Power BI Dashboard */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Dashboard Preview</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={dashboard.powerBiUrl}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>

          {/* Tools and Video */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Tools Used</h3>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Tools & Technologies</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {dashboard.tools.map((tool) => (
                      <div 
                        key={tool}
                        className="bg-purple-600/10 p-3 rounded-lg text-center"
                      >
                        <span className="text-purple-600 font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Tutorial Video</h3>
                  <p className="text-white/80">
                    Watch the detailed tutorial video to learn how to use this dashboard effectively. 
                    The video covers all features and best practices for data analysis.
                  </p>
                  <div className="flex justify-end">
                    <a 
                      href={`https://www.youtube.com/watch?v=${dashboard.youtubeVideoId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      View on YouTube
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    {dashboard.youtubeVideoId ? (
                      <iframe 
                        src={`https://www.youtube.com/embed/${dashboard.youtubeVideoId}`}
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Tutorial Video"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <p>No tutorial video available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


export default DashboardDetail;
