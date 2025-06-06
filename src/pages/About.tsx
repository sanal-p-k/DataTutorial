import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  UserGroupIcon,
  VideoCameraIcon 
} from '@heroicons/react/24/outline';

interface Stat {
  label: string;
  value: string;
}

// Animation variants
const staggerContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 py-16 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="md:w-1/2">
            <motion.div 
              variants={staggerItem}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                About Me
              </h2>
            </motion.div>

            <motion.p 
              variants={staggerItem}
              className="text-xl mb-4 leading-relaxed text-white/80"
            >
              I'm Swapnjeet S, a Senior Data Analyst with over 10 years of experience in the field. I specialize in Power BI, Tableau, SQL, and Python, and I'm passionate about turning complex data into actionable insights. Through my YouTube channel, "Data Tutorials," I've had the privilege of educating and mentoring a community of over 176K subscribers, helping aspiring data professionals navigate the world of analytics.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-2 mb-4"
            >
              {['Power BI', 'Tableau', 'SQL', 'Python'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3 flex justify-center md:justify-center">
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto"
            >
              <img
                src="/about.jpg"
                alt="Data Expert"
                className="rounded-xl shadow-2xl max-w-lg transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center max-w-2xl mx-auto">
          {[
            { label: 'YouTube Subscribers', value: '180K+' },
            { label: 'Dashboards Built', value: '100+' },
            { label: 'Years Experience', value: '10+' },
          ].map((stat: Stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-purple-500/10 transition-colors"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="md:w-1/2">
            <motion.div 
              variants={staggerItem}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                About Me
              </h2>
            </motion.div>

            <motion.p 
              variants={staggerItem}
              className="text-xl mb-4 leading-relaxed text-white/80"
            >
              I'm Swapnjeet S, a Senior Data Analyst with over 10 years of experience in the field. I specialize in Power BI, Tableau, SQL, and Python, and I'm passionate about turning complex data into actionable insights. Through my YouTube channel, "Data Tutorials," I've had the privilege of educating and mentoring a community of over 176K subscribers, helping aspiring data professionals navigate the world of analytics.
            </motion.p>

            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap gap-2 mb-4"
            >
              {['Power BI', 'Tableau', 'SQL', 'Python'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3 flex justify-center md:justify-center">
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto"
            >
              <img
                src="/about.jpg"
                alt="Data Expert"
                className="rounded-xl shadow-2xl max-w-lg transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center max-w-2xl mx-auto">
          {[
            { label: 'YouTube Subscribers', value: '180K+' },
            { label: 'Dashboards Built', value: '100+' },
            { label: 'Years Experience', value: '10+' },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-purple-500/10 transition-colors"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
              <p className="text-white/80">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
};

export default About;
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 max-w-6xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="md:w-1/2">
            <motion.div 
                variants={staggerItem}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-white mb-8">
                  About Me
                </h2>
              </motion.div>

              <motion.p 
                variants={staggerItem}
                className="text-xl mb-4 leading-relaxed text-white/80"
              >
                I'm Swapnjeet S, a Senior Data Analyst with over 10 years of experience in the field. I specialize in Power BI, Tableau, SQL, and Python, and I'm passionate about turning complex data into actionable insights. Through my YouTube channel, "Data Tutorials," I've had the privilege of educating and mentoring a community of over 176K subscribers, helping aspiring data professionals navigate the world of analytics.
              </motion.p>

              <motion.div 
                variants={staggerItem}
                className="flex flex-wrap gap-2 mb-4"
              >
              {['Power BI', 'Tableau', 'SQL', 'Python'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 text-white text-sm font-medium px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3 flex justify-center md:justify-center">
            <motion.div
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto"
            >
              <img
                src="/about.jpg"
                alt="Data Expert"
                className="rounded-xl shadow-2xl max-w-lg transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center max-w-2xl mx-auto">
          {[
            { label: 'YouTube Subscribers', value: '180K+' },
            { label: 'Dashboards Built', value: '100+' },
            { label: 'Years Experience', value: '10+' },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-purple-500/10 transition-colors"
            >
              <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>

            {/* Image Section */}
            <div className="md:w-2/3 flex justify-center md:justify-center">
              <motion.div
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto"
              >
                <img
                  src="/about.jpg"
                  alt="Data Expert"
                  className="rounded-xl shadow-2xl max-w-lg transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center max-w-2xl mx-auto">
            {[
              { label: 'YouTube Subscribers', value: '180K+' },
              { label: 'Dashboards Built', value: '100+' },
              { label: 'Years Experience', value: '10+' },
            ].map(({ label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-purple-500/10 transition-colors"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
                <p className="text-white/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
};

export default About;
