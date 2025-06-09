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

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll for glass effect
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const isScrollingDown = currentScroll > lastScroll;
      lastScroll = currentScroll;
      
      // Show glass effect when scrolling down after 50px
      setIsBackgroundVisible(isScrollingDown && currentScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isBackgroundVisible ? 'bg-gradient-to-r from-transparent to-white/5 backdrop-blur-lg border-b border-gray-200/10' : 'bg-transparent'
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
                        isActive ? 'text-purple-700' : 'text-white hover:text-purple-600'
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
                className="p-2 rounded-md text-gray-800 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
                aria-label="Toggle navigation"
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
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
            onClick={(e: React.MouseEvent) => {
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-xl z-50"
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
                  <span className="text-xl font-semibold text-white">Data Tutorials</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2"
                  aria-label="Close navigation"
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
                        isActive ? 'text-purple-700' : 'text-white hover:text-purple-600'
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
        </>
      )}
    </>
  );
};

export default Navbar;
