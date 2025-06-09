import { motion } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/outline';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NEW
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // close mobile menu on route change
  }, [location.pathname]);

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
    <motion.nav className="fixed top-0 w-full z-50" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div
        className={`transition-all duration-300 ${isBackgroundVisible ? 'bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-700' : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <motion.img
                src="/logo.png"
                alt="Data Tutorials Logo"
                className="h-10 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-xl font-semibold text-yellow-400">Data Tutorials</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="relative group"
                  >
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors ${isActive
                          ? 'text-purple-700'
                          : 'text-white/90 hover:text-purple-600'
                        }`}
                    >
                      {link.name}
                    </Link>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-purple-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Icon */}
            <div className="md:hidden">
              <Bars3Icon
                className="h-6 w-6 text-purple-400 cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 text-white px-6 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-base font-medium ${isActive ? 'text-purple-400' : 'hover:text-purple-300'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)} // close menu on click
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </motion.nav>
  );
};



export default Navbar;
