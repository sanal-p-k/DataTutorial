import { motion } from 'framer-motion';
import { FaStar, FaLinkedin, FaYoutube, FaChevronRight } from 'react-icons/fa';
import { FiCode, FiUsers, FiBarChart2, FiLayers, FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import { Helmet } from 'react-helmet';

// Animation variants
const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
};

const staggerItem = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

// SEO Metadata
const seoData = {
  title: 'About Me | Data Analytics Mentor & Trainer | 10+ Years Experience',
  description: 'Learn about my journey as a Data Analytics mentor. With 10+ years of industry experience, I help professionals master Power BI, Tableau, SQL & Python through personalized training.',
  keywords: 'About Data Analytics Mentor, Data Analytics Trainer Profile, Power BI Expert, Tableau Consultant, SQL Trainer, Python Data Analysis Coach, Business Intelligence Professional',
  ogTitle: 'About Me | Data Analytics Mentor & Trainer | 10+ Years Experience',
  ogDescription: 'Discover my journey in Data Analytics and how I help professionals build successful careers through expert training and mentorship.',
  ogImage: '/images/about-mentor.jpg',
  canonicalUrl: 'https://datatutorials.in/about',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Swapnjeet S",
    "jobTitle": "Data Analytics Mentor & Trainer",
    "description": "Helping professionals master Data Analytics through expert training and mentorship",
    "url": "https://datatutorials.in/about",
    "sameAs": [
      "https://www.youtube.com/@datatutorials1",
      "https://www.linkedin.com/in/datatutorials/"
    ],
    "knowsAbout": [
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization",
      "SQL",
      "Power BI",
      "Tableau",
      "Python",
      "AWS",
      "Azure",
      "Google Cloud"
    ]
  }
};
// Data
const stats = [
  { 
    id: 1,
    value: '10+',
    label: 'Years Experience',
    description: 'In data analytics and business intelligence'
  },
  {
    id: 2,
    value: '200K+',
    label: 'YouTube Subscribers',
    description: 'Growing community of data enthusiasts'
  },
  {
    id: 3,
    value: '4200+',
    label: 'Mentorship Sessions',
    description: '1:1 guidance and career coaching'
  },
  {
    id: 4,
    value: '50+',
    label: 'Countries Reached',
    description: 'Global impact with students worldwide'
  }
];

const expertise = [
  {
    icon: <FiBarChart2 className="w-6 h-6 text-blue-500" />,
    title: 'Data Visualization',
    description: 'Master Power BI & Tableau for impactful dashboards'
  },
  {
    icon: <FiCode className="w-6 h-6 text-purple-500" />,
    title: 'SQL & Python',
    description: 'Advanced data analysis and automation skills'
  },
  {
    icon: <FiLayers className="w-6 h-6 text-green-500" />,
    title: 'Cloud Analytics',
    description: 'AWS, Azure & GCP data solutions'
  },
  {
    icon: <FiTarget className="w-6 h-6 text-yellow-500" />,
    title: 'Career Growth',
    description: 'Job placement support and career guidance'
  }
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Data Analyst',
    content: 'The Power BI training transformed how I approach data visualization. The practical examples and real-world scenarios made complex concepts easy to understand and implement.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Business Intelligence Lead',
    content: 'Exceptional SQL training! The course structure and hands-on exercises helped me optimize our database queries, reducing report generation time by 60%.',
    rating: 5
  },
  {
    name: 'Michael Johnson',
    role: 'Data Scientist',
    content: 'The Python for Data Analysis course provided exactly what I needed to transition from research to industry. The mentorship was invaluable in helping me understand real-world applications.',
    rating: 5
  },
  {
    name: 'Ananya Gupta',
    role: 'Data Engineer',
    content: 'The ETL process training was comprehensive and immediately applicable. I was able to implement what I learned to streamline our data pipeline in just two weeks.',
    rating: 4
  },
  {
    name: 'David Wilson',
    role: 'Analytics Manager',
    content: 'The Tableau training helped my team create more impactful dashboards. The instructor\'s industry experience brought a practical perspective that you won\'t find in standard courses.',
    rating: 5
  },
  {
    name: 'Sanjay Mehta',
    role: 'BI Consultant',
    content: 'The data modeling concepts I learned helped me design more efficient data warehouses. The training paid for itself within the first month of implementation.',
    rating: 5
  },
  {
    name: 'Neha Reddy',
    role: 'Data Analyst',
    content: 'The Power BI DAX training was game-changing. I can now create complex calculations and measures that have significantly improved our reporting capabilities.',
    rating: 5
  },
  {
    name: 'Amit Kumar',
    role: 'Senior Manager - Analytics',
    content: 'The training provided practical insights that I could immediately apply to improve our data governance framework. The instructor\'s expertise in the field was evident.',
    rating: 4
  },
  {
    name: 'Sophie Martin',
    role: 'Data Visualization Expert',
    content: 'The advanced visualization techniques I learned helped me create more impactful dashboards. The course materials were well-structured and easy to follow.',
    rating: 5
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Data Analyst',
    content: 'The end-to-end data analytics training covered everything from data cleaning to advanced visualization. The hands-on projects were particularly valuable for my professional development.',
    rating: 5
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
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
            <motion.div variants={staggerItem} className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Data Analytics Mentor & Trainer
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Helping professionals transform their careers through data analytics training and mentorship
              </p>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            >
              <motion.a
                href="/Contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
              >
                Connect with me <FaChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@datatutorials1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <FaYoutube className="w-5 h-5 text-red-400" /> Watch Free Tutorials
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={staggerItem}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  My Journey
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  From Data Analyst to Mentor
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={staggerItem}
              className="grid md:grid-cols-2 gap-12 items-center mt-12"
            >
              <div className="relative">
                <img 
                  src="/about.jpg" 
                  alt="Data Analytics Mentor"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hi, I'm Swapnjeet</h3>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience in data analytics and business intelligence, I've helped thousands of professionals transform their careers through data. My journey began in 2015 when I discovered my passion for turning raw data into actionable insights.
                </p>
                <p className="text-gray-600 mb-6">
                  As a Microsoft Certified Data Analyst and Tableau Desktop Certified Associate, I specialize in helping professionals master data visualization, SQL, Python, and cloud analytics. My approach combines technical expertise with practical, real-world applications.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href="https://www.linkedin.com/in/datatutorials/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" /> Connect on LinkedIn
                  </a>
                  <a
                    href="https://youtube.com/@datatutorials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <FaYoutube className="w-5 h-5 text-red-600" /> Watch My Videos
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={staggerItem}>
              <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4">
                My Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What I Can Help You With
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-xl mb-6 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">From Novice to Industry-Recognized Data Analytics Mentor</h3>
                  <p className="text-gray-600 mb-6">
                    With over a decade of hands-on experience in data analytics, business intelligence, and data visualization, I've successfully mentored thousands of professionals to launch and advance their data careers. My expertise spans across the entire data analytics lifecycle - from data extraction and transformation to building interactive dashboards and deriving actionable business insights using Power BI, Tableau, SQL, and Python.
                  </p>
                  <p className="text-gray-600 mb-6">
                    As a Microsoft Certified Data Analyst Associate and Tableau Desktop Certified Professional, I bring industry-recognized expertise to my mentorship. I've helped professionals from diverse backgrounds - from complete beginners to experienced analysts - master data analytics tools and techniques. My training methodology focuses on practical, project-based learning that mirrors real-world business scenarios, ensuring you develop job-ready skills that employers value.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FiAward className="text-blue-500 mr-2" />
                      <span>10+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="text-purple-500 mr-2" />
                      <span>200K+ YouTube Subscribers</span>
                    </div>
                    <div className="flex items-center">
                      <FiCode className="text-green-500 mr-2" />
                      <span>100+ Dashboards Built</span>
                    </div>
                    <div className="flex items-center">
                      <FiTrendingUp className="text-yellow-500 mr-2" />
                      <span>4200+ Mentorship Sessions</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 italic">
                      "Data is the new oil, but only when processed and analyzed effectively. That's where true value is created." — Swapnjeet S
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Core Expertise</h3>
                <div className="space-y-4">
                  {[
                    { icon: <FiTrendingUp className="w-6 h-6 text-blue-500" />, title: 'Data Visualization', desc: 'Master Power BI & Tableau for impactful dashboards' },
                    { icon: <FiCode className="w-6 h-6 text-purple-500" />, title: 'SQL & Python', desc: 'Advanced data analysis and automation skills' },
                    { icon: <FiUsers className="w-6 h-6 text-green-500" />, title: 'Cloud Analytics', desc: 'AWS, Azure & GCP data solutions' },
                    { icon: <FiAward className="w-6 h-6 text-yellow-500" />, title: 'Certification Ready', desc: 'Microsoft, Tableau & AWS certification prep' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full mix-blend-soft-light blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full mix-blend-soft-light blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                By The Numbers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                Data Analytics Training & Expertise
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Comprehensive training in Power BI, Tableau, SQL, and Python with industry-recognized certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">{stat.value}</p>
                <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Student Success Stories
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              See how our data analytics training has transformed careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-lg mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
