import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";
import { FiTrendingUp, FiBook, FiCode, FiUsers } from "react-icons/fi";



const About = () => {
  const timeline = [
    { year: '2015', title: 'Started Data Career', description: 'Began journey in data analytics' },
    { year: '2017', title: 'First Dashboard Project', description: 'Delivered first client dashboard' },
    { year: '2019', title: 'Launched YouTube Channel', description: 'Started sharing knowledge online' },
    { year: '2021', title: '100K Subscribers', description: 'Reached first major YouTube milestone' },
    { year: '2023', title: 'Enterprise Solutions', description: 'Started working with enterprise clients' },
  ];


  const stats = [
    { label: "YouTube Subscribers", value: "180K+" },
    { label: "Dashboards Built", value: "100+" },
    { label: "Years Experience", value: "10+" },
  ];


  const testimonials = [
    {
      author: "John Doe",
      role: "Student",
      quote: "The courses here completely transformed my understanding of data science. The hands-on approach made all the difference!",
      rating: 5
    },
    {
      author: "Jane Smith",
      role: "Data Analyst",
      quote: "As a working professional, I appreciated the practical, real-world applications in the curriculum. Highly recommended!",
      rating: 5
    },
    {
      author: "Alex Johnson",
      role: "Career Changer",
      quote: "The instructors are incredibly knowledgeable and supportive. I was able to land a job within 3 months of completing the course.",
      rating: 4
    },
    {
      author: "Sarah Williams",
      role: "Team Lead",
      quote: "We've sent several team members through their training programs and the results have been outstanding. Great return on investment.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-bg.jpg" alt="About background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Helping data enthusiasts turn raw data into meaningful insights and beautiful visualizations.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Personal Story Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-medium">My Story</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">The Journey to Data Mastery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">From Novice to Data Educator</h3>
                  <p className="text-gray-600 mb-6">
                    My journey in data began over a decade ago, driven by curiosity about how data could reveal hidden patterns and insights. 
                    What started as academic interest evolved into a passion for making data accessible to everyone.
                  </p>
                  <p className="text-gray-600 mb-6">
                    After years in the industry, I realized that my true calling was in teaching and mentoring. I wanted to break down complex 
                    data concepts into digestible, practical lessons that anyone could understand and apply in their careers.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 italic">
                      "The goal is to turn data into information, and information into insight." — Carly Fiorina
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Core Values</h3>
                <div className="space-y-4">
                  {[
                    { icon: <FiTrendingUp className="w-6 h-6 text-blue-500" />, title: 'Continuous Learning', desc: 'Always staying updated with the latest in data science' },
                    { icon: <FiCode className="w-6 h-6 text-purple-500" />, title: 'Practical Skills', desc: 'Focusing on real-world applications' },
                    { icon: <FiUsers className="w-6 h-6 text-green-500" />, title: 'Community First', desc: 'Building a supportive learning community' },
                    { icon: <FiBook className="w-6 h-6 text-yellow-500" />, title: 'Clear Teaching', desc: 'Breaking down complex topics simply' },
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
      <div className="bg-gradient-to-b from-blue-600 to-purple-700 py-16 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              My Expertise
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Here are the tools and technologies I work with to transform data into insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border border-white/20"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <p className="text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
              My Journey
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Key milestones in my data analytics career
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                <div className="w-1/2 px-6">
                  <div className={`p-6 rounded-xl ${index % 2 === 0 ? 'bg-blue-900/30 border-l-4 border-blue-500' : 'bg-purple-900/30 border-r-4 border-purple-500'} backdrop-blur-sm`}>
                    <div className="text-blue-400 font-bold mb-1">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What People Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Feedback from clients and students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-white/20'}`} />
                  ))}
                </div>
                <p className="text-white/90 italic text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to turn your data into actionable insights and beautiful visualizations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all"
              >
                View Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
