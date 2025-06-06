import { motion } from "framer-motion";
import { useEffect } from "react";

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
      className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gray-950"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/70 to-purple-900/60" />
      </div>

      {/* Glassy Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-lg p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Block */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-purple-100/90 mb-6 leading-relaxed">
              I help businesses unlock the power of data by designing insightful dashboards, training teams, and simplifying analytics. Whether you're just getting started or optimizing enterprise-level reporting, I'm here to guide you every step of the way.
            </p>
            <p className="text-sm text-white/70 italic mb-8">
              "Data without context is noise — I turn that noise into insight."
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 bg-white/10 border border-white/10 rounded-xl backdrop-blur-sm shadow-md"
                >
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  <p className="text-sm text-white/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Optional Additional Content Block */}
          <div className="text-purple-100 space-y-6">
            <h3 className="text-2xl font-semibold">My Mission</h3>
            <p className="text-sm">
              To empower individuals and businesses to make smarter decisions by simplifying data complexity through education, tools, and visuals.
            </p>
            <h3 className="text-2xl font-semibold">How I Work</h3>
            <ul className="list-disc ml-5 text-sm space-y-2">
              <li>Understand business goals & KPIs</li>
              <li>Build meaningful dashboards with modern tools</li>
              <li>Train teams to be self-sufficient in analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
