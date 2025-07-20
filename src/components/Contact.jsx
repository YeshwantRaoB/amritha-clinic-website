import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, XCircle } from 'lucide-react';

const contactInfo = [
  { 
    icon: <MapPin size={24} className="text-blue-600" />, 
    title: 'Our Location',
    text: '123 Medical Center Dr, Health City, HC 12345',
    link: '#'
  },
  { 
    icon: <Mail size={24} className="text-blue-600" />, 
    title: 'Email Us',
    text: 'info@amrithaclinic.com',
    link: 'mailto:info@amrithaclinic.com'
  },
  { 
    icon: <Phone size={24} className="text-blue-600" />, 
    title: 'Call Us',
    text: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  { 
    icon: <Clock size={24} className="text-blue-600" />, 
    title: 'Working Hours',
    text: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM',
    link: '#'
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus({ success: false, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.' 
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-40"
          animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Get in Touch</h1>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Have questions or want to book an appointment? We'd love to hear from you. 
            Fill out the form or use the contact information below.
          </p>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 border border-blue-100 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                className="flex items-start gap-4 bg-white/90 rounded-xl shadow p-4 border border-blue-50 hover:shadow-lg transition-all duration-300 mb-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -2, scale: 1.03 }}
              >
                <div className="flex-shrink-0 bg-blue-50 rounded-full p-2 mr-2">
                  {info.icon}
                </div>
                <div>
                  <div className="text-blue-900 font-semibold text-base mb-1">{info.title}</div>
                  {info.link && info.link !== '#' ? (
                    <a href={info.link} className="text-blue-600 hover:underline text-sm break-all">{info.text}</a>
                  ) : (
                    <div className="text-gray-700 text-sm whitespace-pre-line">{info.text}</div>
                  )}
                </div>
              </motion.div>
            ))}


          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-blue-100 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Map Section */}
              <div className="h-64 md:h-auto md:w-1/2 bg-gray-100 relative">
                <div className="w-full h-full">
                  <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.818516382934!2d74.84144335045502!3d12.855933079572747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bb42d6e91df%3A0x2330e3cc56c6235!2sAmritha%20Multispeciality%20Clinic%20%26%20Diagnostic%20Center!5e0!3m2!1sen!2sin!4v1752829039570!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ pointerEvents: 'auto' }}
                  ></iframe>
                </div>
                {/* Location overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 text-white z-10">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-sm text-blue-100">KMC, Nandigudda Rd, next to Chakrapani Temple before, Attavar, Mangaluru, Karnataka 575001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="p-5 sm:p-6 md:p-8 lg:p-10 md:w-1/2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-message"
                      className="text-center py-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      {submitStatus.success ? (
                        <div className="text-green-500">
                          <CheckCircle size={64} className="mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                          <p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
                        </div>
                      ) : (
                        <div className="text-red-500">
                          <XCircle size={64} className="mx-auto mb-4" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h3>
                          <p className="text-gray-600 mb-6">Please try again later or contact us directly.</p>
                        </div>
                      )}
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <form onSubmit={handleSubmit} className="space-y-7 flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="peer block w-full rounded-lg border border-blue-200 bg-white/80 px-4 pt-5 pb-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label htmlFor="name" className="absolute left-3 top-2 text-xs text-blue-700 font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-700 bg-white/80 px-1 rounded">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="peer block w-full rounded-lg border border-blue-200 bg-white/80 px-4 pt-5 pb-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="absolute left-3 top-2 text-xs text-blue-700 font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-700 bg-white/80 px-1 rounded">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="peer block w-full rounded-lg border border-blue-200 bg-white/80 px-4 pt-5 pb-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all placeholder-transparent resize-none"
                      placeholder="Your Message"
                    />
                    <label htmlFor="message" className="absolute left-3 top-2 text-xs text-blue-700 font-medium transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-700 bg-white/80 px-1 rounded">
                      Message
                    </label>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-2.5 px-6 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold shadow-md hover:from-blue-800 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Send className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                  <AnimatePresence>
                    {submitStatus.message && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className={`mt-2 text-center text-sm font-medium ${submitStatus.success ? 'text-green-600' : 'text-red-500'}`}
                      >
                        {submitStatus.success ? <CheckCircle className="inline w-4 h-4 mr-1 align-middle" /> : <XCircle className="inline w-4 h-4 mr-1 align-middle" />}
                        {submitStatus.message}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
