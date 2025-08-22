import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  ChartPieIcon,
  AcademicCapIcon,
  UserGroupIcon,

  LightBulbIcon,
  CodeBracketIcon,

  ServerIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

// SEO Metadata
const seoData = {
  title: 'Data Analytics Services | Power BI, Tableau, SQL & Python Training',
  description: 'Expert data analytics services including Power BI dashboard development, Tableau consulting, SQL optimization, and Python data analysis. Corporate training and 1:1 mentorship available.',
  keywords: 'Power BI Services, Tableau Consulting, SQL Training, Python Data Analysis, Business Intelligence Solutions, Data Visualization Services, Corporate Training, Data Analytics Mentorship, Dashboard Development, Data Modeling',
  ogTitle: 'Professional Data Analytics Services & Training',
  ogDescription: 'Transform your data into actionable insights with our expert analytics services. Specializing in Power BI, Tableau, SQL, and Python solutions for businesses and individuals.',
  ogImage: '/images/data-analytics-services.jpg',
  canonicalUrl: 'https://datatutorials.in/services',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Dashboard Development",
        "provider": {
          "@type": "Person",
          "name": "Swapnjeet S"
        },
        "description": "Interactive Power BI and Tableau dashboards for data-driven decision making"
      },
      {
        "@type": "Service",
        "name": "Data Analysis & Visualization",
        "provider": {
          "@type": "Person",
          "name": "Swapnjeet S"
        },
        "description": "Advanced analytics and visualization using Python, R, and modern BI tools"
      },
      {
        "@type": "Service",
        "name": "Corporate Training",
        "provider": {
          "@type": "Person",
          "name": "Swapnjeet S"
        },
        "description": "Customized data analytics training programs for teams and organizations"
      }
    ]
  }
};

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  keywords?: string[];
  tools?: string[];
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
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

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Power BI & Tableau Dashboards',
      description: 'Interactive, real-time dashboards that transform your data into actionable business intelligence. Specializing in Power BI and Tableau for enterprise analytics.',
      icon: ChartPieIcon,
      color: 'from-blue-500 to-purple-600',
      keywords: ['Power BI Development', 'Tableau Consulting', 'Business Intelligence', 'Data Visualization'],
      tools: ['Power BI', 'Tableau', 'DAX', 'Power Query', 'Tableau Prep']
    },
    {
      title: 'SQL Database Solutions',
      description: 'Optimize your database performance with expert SQL development, query optimization, and data modeling for SQL Server, MySQL, and PostgreSQL.',
      icon: CircleStackIcon,
      color: 'from-amber-500 to-orange-600',
      keywords: ['SQL Development', 'Database Optimization', 'Data Modeling', 'ETL Processes'],
      tools: ['SQL Server', 'MySQL', 'PostgreSQL', 'Azure SQL', 'BigQuery']
    },
    {
      title: 'Python Data Analysis',
      description: 'Advanced data analysis and machine learning solutions using Python, pandas, NumPy, and scikit-learn for predictive analytics and data science projects.',
      icon: CodeBracketSquareIcon,
      color: 'from-emerald-500 to-teal-600',
      keywords: ['Python Programming', 'Data Science', 'Machine Learning', 'Predictive Analytics'],
      tools: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Jupyter']
    },
    {
      title: 'Data Engineering',
      description: 'End-to-end data pipeline development, ETL processes, and data warehouse solutions to ensure your data is clean, accessible, and ready for analysis.',
      icon: ServerIcon,
      color: 'from-rose-500 to-pink-600',
      keywords: ['ETL Development', 'Data Pipelines', 'Data Warehousing', 'Big Data'],
      tools: ['Apache Airflow', 'Apache Spark', 'Snowflake', 'Databricks', 'AWS Glue']
    },
    {
      title: 'Corporate Training',
      description: 'Customized training programs for teams looking to upskill in data analytics, visualization, and business intelligence tools and techniques.',
      icon: UserGroupIcon,
      color: 'from-indigo-500 to-blue-600',
      keywords: ['Team Training', 'Upskilling', 'Corporate Workshops', 'Technical Training'],
      tools: ['Power BI', 'Tableau', 'SQL', 'Python', 'Excel']
    },
    {
      title: '1:1 Mentorship',
      description: 'Personalized guidance for individuals seeking to build or advance their career in data analytics, from fundamentals to advanced concepts.',
      icon: AcademicCapIcon,
      color: 'from-purple-500 to-indigo-600',
      keywords: ['Career Coaching', 'Portfolio Review', 'Interview Preparation', 'Career Transition'],
      tools: ['Resume Building', 'Portfolio Development', 'Mock Interviews', 'Career Planning']
    },
    {
      title: 'Cloud Analytics',
      description: 'Leverage the power of cloud platforms for scalable data analytics solutions on AWS, Azure, and Google Cloud Platform.',
      icon: CloudIcon,
      color: 'from-cyan-500 to-blue-600',
      keywords: ['AWS Analytics', 'Azure Data', 'GCP', 'Cloud Data Warehousing'],
      tools: ['AWS Redshift', 'Azure Synapse', 'BigQuery', 'Snowflake', 'Databricks']
    },
    {
      title: 'AI & Machine Learning',
      description: 'Implement machine learning models and AI solutions to extract valuable insights and automate decision-making processes.',
      icon: CodeBracketIcon,
      color: 'from-fuchsia-500 to-purple-600',
      keywords: ['Predictive Modeling', 'Deep Learning', 'AI Solutions', 'ML Ops'],
      tools: ['scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow']
    },
    {
      title: 'Data Strategy & Consulting',
      description: 'Expert guidance on building a data-driven organization, from tool selection to implementation roadmaps and best practices.',
      icon: LightBulbIcon,
      color: 'from-yellow-400 to-amber-600',
      keywords: ['Data Governance', 'Analytics Strategy', 'Tool Selection', 'Implementation Planning'],
      tools: ['Data Catalog', 'Data Quality', 'BI Strategy', 'Analytics Maturity']
    },
    {
      title: 'YouTube Content Collaboration',
      description: 'Partner with me to create engaging, educational data analytics content for your YouTube channel or platform.',
      icon: UserGroupIcon,
      color: 'from-green-500 to-lime-500',
      keywords: ['Content Creation', 'Video Tutorials', 'Educational Content', 'Data Analytics Education'],
      tools: ['YouTube', 'Video Editing', 'Content Strategy', 'Audience Engagement']
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content="Swapnjeet S" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.ogTitle} />
        <meta name="twitter:description" content={seoData.ogDescription} />
        <meta name="twitter:image" content={seoData.ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonicalUrl} />
      </Helmet>
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
            variants={staggerContainer}
            className="text-center relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Data Analytics Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive analytics services and expert training programs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <div className="relative py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive data analytics solutions tailored to your needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`p-6 bg-gradient-to-r ${service.color} h-48 flex items-center justify-center`}>
                  <service.icon className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.tools && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-10 md:p-16">
            <motion.div variants={staggerItem} className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
                Let's work together to unlock the full potential of your data. Whether you need a custom dashboard, training program, or strategic consultation, I'm here to help.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:bg-gray-100"
                aria-label="Contact me to discuss your data analytics needs"
              >
                Get Started Today
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
