import { motion } from "framer-motion";


const About = () => {
  const stats = [
    { label: "YouTube Subscribers", value: "180K+" },
    { label: "Dashboards Built", value: "100+" },
    { label: "Years Experience", value: "10+" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-blue-900 to-gray-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/about.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">About Me</h2>
            <p className="text-lg text-white mb-6 leading-relaxed">
              I help businesses unlock the power of data by designing insightful dashboards, training teams, and simplifying analytics. Whether you're just getting started or optimizing enterprise-level reporting, I'm here to guide you every step of the way.
            </p>
            <p className="text-sm text-white/70 italic mb-8">
              "Data without context is noise — I turn that noise into insight."
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="p-5 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm shadow-md"
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">{stat.value}</h3>
                  <p className="text-sm text-white/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">My Mission</h3>
            <p className="text-sm text-white">
              To empower individuals and businesses to make smarter decisions by simplifying data complexity through education, tools, and visuals.
            </p>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">How I Work</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li className="text-sm text-white">Understand business goals & KPIs</li>
              <li className="text-sm text-white">Build meaningful dashboards with modern tools</li>
              <li className="text-sm text-white">Train teams to be self-sufficient in analytics</li>
              <li className="text-sm text-white/80">Train teams to be self-sufficient in analytics</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
