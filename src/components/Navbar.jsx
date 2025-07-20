import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Book an Appointment', path: '/appointment' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Close menu when route changes
    const unlisten = () => {
      setIsMenuOpen(false);
    };
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unlisten();
    };
  }, [location]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/40 shadow-lg border-b border-white/20'
          : 'backdrop-blur-lg bg-white/30'
      }`}
      style={{
        '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgb(255 255 255 / 0.4))',
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(240, 249, 255, 0.6))',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src="/logo.png"
                alt="Amritha Clinic Logo"
                className="h-8 w-auto object-contain"
                variants={itemVariants}
              />
              <div className="ml-2">
                <motion.h1 
                  className="text-lg font-bold text-blue-950 group-hover:text-blue-700 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Amritha Clinic</span>
                </motion.h1>
                <motion.p 
                  className="text-[10px] text-blue-700/80 group-hover:text-blue-900 transition-colors duration-300 hidden sm:block"
                  variants={itemVariants}
                >
                  Multispeciality & Diagnostic Center
                </motion.p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  to={link.path}
                  className={`px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-blue-700 bg-blue-50/50 font-semibold shadow-inner'
                      : 'text-blue-900 hover:text-blue-700 hover:bg-blue-50/30'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="ml-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="tel:+1234567890"
              className="flex items-center px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 text-blue-900 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full transition-all"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/90 backdrop-blur-2xl overflow-hidden border-t border-white/30 shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === link.path
                        ? 'bg-blue-50 text-blue-900 font-medium'
                        : 'text-blue-800 hover:bg-blue-50/80 hover:text-blue-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-4 pt-4 border-t border-blue-800/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <a
                  href="tel:+1234567890"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now: +1 (234) 567-890
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;