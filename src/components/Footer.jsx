import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com/YourPage' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/YourPage' },
];

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.04 } })
};

export default function Footer() {
  return (
    <motion.footer
      className="relative z-10 bg-white/70 backdrop-blur-xl shadow-2xl text-gray-700 pt-10 pb-6 sm:pt-12 sm:pb-8"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-start">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="text-blue-900 text-lg font-bold mb-4 tracking-wide">About Amritha Clinic</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Providing compassionate, high-quality care since 2005. Our multidisciplinary team ensures personalized treatment plans for every patient. We blend modern medicine with a personal touch for every family.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container => ({})}
        >
          <h3 className="text-blue-900 text-lg font-bold mb-4 tracking-wide">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
            {['Home', 'About Us', 'Services', 'Gallery', 'FAQ', 'Careers', 'Contact'].map((link, i) => (
              <motion.div 
                key={link} 
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-600 hover:text-blue-700 font-medium transition-colors duration-200 px-3 py-2 -mx-2 rounded-lg hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="text-blue-900 text-lg font-bold mb-4 tracking-wide">Follow Us</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map(({ name, icon, url }, i) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-blue-100 to-blue-300 text-blue-700 rounded-full shadow hover:bg-blue-200 transition-all border border-blue-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Follow us on ${name}`}
              >
                <span className="sr-only">{name}</span>
                {React.cloneElement(icon, { className: 'w-5 h-5' })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Divider */}
      <motion.div
        className="mx-auto w-24 sm:w-32 h-1 sm:h-1.5 rounded-full mt-10 sm:mt-14 mb-6 bg-gradient-to-r from-blue-400/80 via-blue-200/60 to-cyan-200/80 animate-pulse"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
      />

      {/* Credits Section */}
      <motion.div
        className="text-center text-gray-500 text-xs sm:text-sm mt-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <div className="mb-2">
          © {new Date().getFullYear()} Amritha Multispeciality Clinic & Diagnostic Center. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs">
          <span>Website designed &amp; developed by</span>
          <motion.a
            href="https://yrb-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:rounded px-1 -mx-1"
            whileHover={{ color: '#0ea5e9' }}
            whileTap={{ scale: 0.98 }}
          >
            Yeshwant Rao
          </motion.a>
          <span>•</span>
          <span>Content support by</span>
          <motion.a
            href="https://dummy-link-peer-mohammad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:rounded px-1 -mx-1"
            whileHover={{ color: '#0ea5e9' }}
            whileTap={{ scale: 0.98 }}
          >
            Peer Mohammad
          </motion.a>
        </div>
      </motion.div>
    </motion.footer>
  );
}
