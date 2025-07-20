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
            className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
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
