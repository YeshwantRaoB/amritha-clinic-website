import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, ShieldCheck, Clock, PhoneCall, ArrowRight } from 'lucide-react';

// Import your images or use placeholder URLs
const heroImages = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
];

const TypingText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 30; // Faster typing speed
    const cursorBlinkSpeed = 500;

    const typingTimer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, typingSpeed);

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorBlinkSpeed);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [currentIndex, text]);

  return (
    <span className="inline-block">
      {displayText}
      <span className={`inline-block w-1 h-10 bg-yellow-400 ml-1 transition-opacity duration-300 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

const ImageSlider = ({ images, currentIndex }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0
          }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const services = [
    { 
      title: 'General Surgery', 
      description: 'Expert surgical care with the latest techniques and technology.',
      icon: <HeartPulse className="w-8 h-8 text-blue-600 mb-4" />
    },
    { 
      title: 'Pediatrics', 
      description: 'Specialized healthcare for infants, children, and adolescents.',
      icon: <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
    },
    { 
      title: 'Diagnostic Imaging', 
      description: 'Advanced imaging services for accurate diagnosis and treatment.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
    },
    { 
      title: 'Cardiology', 
      description: 'Comprehensive heart care with state-of-the-art facilities.',
      icon: <HeartPulse className="w-8 h-8 text-blue-600 mb-4" />
    },
    { 
      title: 'Orthopedics', 
      description: 'Specialized care for bones, joints, and musculoskeletal system.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
    },
    { 
      title: 'Dermatology', 
      description: 'Expert care for all your skin, hair, and nail conditions.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
    },
  ];

  const features = [
    { 
      title: '24/7 Emergency', 
      description: 'Round-the-clock medical care when you need it most.',
      icon: <Clock className="w-6 h-6 text-blue-600" />
    },
    { 
      title: 'Expert Doctors', 
      description: 'Experienced and compassionate healthcare professionals.',
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />
    },
    { 
      title: 'Modern Equipment', 
      description: 'State-of-the-art medical technology for accurate diagnosis.',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Slideshow */}
        <ImageSlider 
          images={heroImages} 
          currentIndex={currentSlide} 

        />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-block px-6 py-2 rounded-full bg-white/20 backdrop-blur-sm text-base sm:text-lg font-medium"
          >
            Welcome to Amritha Multispeciality Clinic & Diagnostic Center
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypingText text="Your Health, Our Priority" />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-white/90 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience comprehensive healthcare with a personal touch. Our expert team is dedicated to providing exceptional medical care for you and your family.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base"
            >
              Book an Appointment
              <ArrowRight className="w-6 h-6" />
            </Link>
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-base hover:bg-white/10"
            >
              <PhoneCall className="w-5 h-5" />
              Emergency Call
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: [0, 8, 0]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.8 }
          }}
        >
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 8] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">Comprehensive Healthcare Solutions</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take control of your health?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Schedule an appointment with our expert healthcare providers today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book an Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
