import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const faqs = [
  {
    question: 'What are your visiting hours?',
    answer: 'We are open Monday–Saturday, 8:00 AM – 8:00 PM. Emergency services are available 24/7.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance plans. Our dedicated billing team can verify your coverage and help you understand your benefits. We recommend contacting our billing department before your visit to confirm your specific coverage details.',
  },
  {
    question: 'How can I schedule an appointment?',
    answer: 'You can schedule an appointment in several ways: (1) Call us directly at (123) 456-7890 during business hours, (2) Use our online booking system available 24/7, or (3) Visit our clinic in person. We recommend booking at least 24-48 hours in advance for non-urgent appointments.',
  },
  {
    question: 'Are telemedicine consultations available?',
    answer: 'Yes, we offer secure and convenient telemedicine consultations for many of our services. These virtual visits are conducted through our HIPAA-compliant platform and are ideal for follow-ups, medication management, and non-emergency consultations. A stable internet connection and a device with a camera are required.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your photo ID, insurance card, list of current medications, medical records if available, and any relevant test results or imaging. New patients should also complete the new patient forms available on our website before their visit.',
  },
  {
    question: 'How do I get my test results?',
    answer: 'Test results are typically available within 2-3 business days. You can access your results through our secure patient portal, or our staff will contact you with the results. For urgent results, we will contact you immediately by phone.',
  },
  {
    question: 'What COVID-19 safety measures are in place?',
    answer: 'We follow all CDC and local health department guidelines, including enhanced cleaning protocols, mandatory mask-wearing, social distancing in waiting areas, and health screenings for all visitors. Telehealth appointments are encouraged when appropriate.',
  },
  {
    question: 'Do you provide emergency services?',
    answer: 'While we handle many urgent care needs during our regular hours, we are not an emergency room. For life-threatening emergencies, please call 911 or go to the nearest emergency room. Our providers are on call after hours for urgent medical concerns of existing patients.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function FAQ() {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Everything you need to know about our services and how we can help you.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
              whileHover={{ scale: 1.005 }}
            >
              <motion.button
                className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none transition-colors ${openIndex === index ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: openIndex !== index ? '#f9fafb' : '' }}
              >
                <span className="text-lg font-semibold text-left pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg
                    className={`w-6 h-6 ${openIndex === index ? 'text-white' : 'text-blue-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white text-gray-700 border-t border-gray-100">
                      <motion.p 
                        className="leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-20 text-center bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6 text-lg">Our friendly team is here to help you with any questions you might have.</p>
            <motion.div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.03, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.03, backgroundColor: 'rgob(239, 246, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (123) 456-7890
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
