import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Facebook', icon: <FacebookIcon />, url: 'https://facebook.com/YourPage' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com/YourPage' },
];

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-gray-300 pt-12 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Amritha Clinic</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Providing compassionate, high-quality care since 2005. Our multidisciplinary team
            ensures personalized treatment plans for every patient.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Services', 'Gallery', 'FAQ', 'Careers', 'Contact'].map(link => (
              <li key={link}>
                <Link
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, icon, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.2 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Amritha Multispeciality Clinic & Diagnostic Center. All rights reserved.
      </div>
    </motion.footer>
  );
}
