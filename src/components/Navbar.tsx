import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Dashboards', path: '/dashboards' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top and close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Show background on scroll down after 50px
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setIsBackgroundVisible(currentScroll > lastScroll && currentScroll > 50);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isBackgroundVisible ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src="/logo.png"
                alt="Data Tutorials Logo"
                className="h-8 w-auto sm:h-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-xl font-semibold text-yellow-400">Data Tutorials</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="relative group"
                  >
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-purple-700' : 'text-gray-800 hover:text-purple-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-purple-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-800 hover:text-purple-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-0 left-0 w-full h-screen bg-white z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center gap-3">
                <motion.img
                  src="/logo.png"
                  alt="Data Tutorials Logo"
                  className="h-8 w-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                <span className="text-xl font-semibold text-yellow-400">Data Tutorials</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? 'text-purple-700' : 'text-gray-800 hover:text-purple-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
