import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon as MailIcon,
  PhoneIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import {
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800/95 pt-16 pb-20 max-w-8xl mx-auto"
    >
      <div className="container mx-auto px-8 max-w-8xl mx-auto text-white/80">
        <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 max-w-8xl mx-auto">
          {/* Brand & Mission */}
          <div className="max-w-sm text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/logo.png" alt="Data Tutorials Logo" className="h-10 w-auto mr-3" />
              <span className="text-xl font-semibold text-purple-600">Data Tutorials</span>
            </div>
            <p className="text-white-300 text-sm text-center mb-4">
              Helping aspiring data analysts and professionals master Power BI, Tableau, SQL, and Python through real-world use cases and hands-on education.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white-400">
              <li><Link to="/" className="hover:text-purple-600 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-purple-600 transition-colors">Services</Link></li>
              <li><Link to="/dashboards" className="hover:text-purple-600 transition-colors">Dashboards</Link></li>
              <li><Link to="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-purple-600 font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-white-400">
              <li className="flex items-center space-x-2">
                <MailIcon className="h-4 w-4" />
                <span>swapnjeet@datatutorials.io</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <GlobeAltIcon className="h-4 w-4" />
                <span>www.datatutorials.io</span>
              </li>
            </ul>
          </div>

          {/* Follow Me / Socials */}
          <div className="text-center">
            <h3 className="text-purple-600 font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center space-x-6 mb-10 text-white/70">
              <a href="https://youtube.com/@datatutorials1" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <FaYoutube size={20} />
              </a>
              <a href="https://linkedin.com/in/datatutorials" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-800 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-400 max-w-6xl mx-auto">
          © {new Date().getFullYear()} Data Tutorials. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
