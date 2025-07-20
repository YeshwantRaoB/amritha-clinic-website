import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Zap, 
  Waves, 
  ScanLine, 
  TestTube, 
  X, 
  Scan, 
  UserCheck, 
  Scissors, 
  Users, 
  Shield, 
  Ear, 
  Smile,
  Pill,
  ChevronRight,
  Clock,
  Star,
  CheckCircle,
  Search,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const servicesList = [
  {
    id: 1,
    title: 'Pharmacy',
    description: 'Complete pharmaceutical services with a wide range of medications and health products.',
    icon: <Pill size={32} />,
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    features: ['Prescription medications', 'Over-the-counter drugs', 'Health supplements', 'Medical supplies'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 2,
    title: 'TMT (Treadmill Test)',
    description: 'Comprehensive cardiac stress testing to evaluate heart function during physical activity.',
    icon: <Activity size={32} />,
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    features: ['Exercise stress testing', 'Cardiac monitoring', 'Risk assessment', 'Performance evaluation'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 3,
    title: 'Echo Cardiogram',
    description: 'Advanced ultrasound imaging of the heart to assess cardiac structure and function.',
    icon: <Heart size={32} />,
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    features: ['2D/3D heart imaging', 'Doppler studies', 'Valve assessment', 'Chamber evaluation'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 4,
    title: 'ECG (Electrocardiogram)',
    description: 'Precise electrical activity monitoring of the heart for diagnostic purposes.',
    icon: <Zap size={32} />,
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    features: ['12-lead ECG', 'Rhythm analysis', 'Arrhythmia detection', 'Quick diagnostics'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 5,
    title: 'NCV & Evoked Potentials',
    description: 'Neurological testing to assess nerve conduction and brain response patterns.',
    icon: <Waves size={32} />,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    features: ['Nerve conduction studies', 'Evoked potential testing', 'Neurological assessment', 'Diagnostic evaluation'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 6,
    title: 'Ultra Sound/Colour Doppler',
    description: 'High-resolution ultrasound imaging with advanced Doppler technology.',
    icon: <ScanLine size={32} />,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    features: ['Abdominal ultrasound', 'Vascular Doppler', 'Obstetric scanning', 'Soft tissue imaging'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 7,
    title: 'Laboratory',
    description: 'Comprehensive diagnostic laboratory services with accurate and timely results.',
    icon: <TestTube size={32} />,
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    features: ['Blood tests', 'Urine analysis', 'Biochemistry', 'Microbiology'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 8,
    title: 'X-Ray',
    description: 'Digital radiography services for accurate bone and tissue imaging.',
    icon: <X size={32} />,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    textColor: 'text-gray-600',
    features: ['Digital X-rays', 'Bone imaging', 'Chest X-rays', 'Orthopedic studies'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 9,
    title: 'CT Scan',
    description: 'Advanced computed tomography for detailed cross-sectional imaging.',
    icon: <Scan size={32} />,
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    features: ['Multi-slice CT', 'Contrast studies', '3D reconstruction', 'Emergency imaging'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 10,
    title: 'Physiotherapy',
    description: 'Comprehensive rehabilitation services for optimal recovery and mobility.',
    icon: <UserCheck size={32} />,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    features: ['Physical rehabilitation', 'Exercise therapy', 'Pain management', 'Mobility training'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 11,
    title: 'Day Care Procedures',
    description: 'Same-day medical procedures with comprehensive care and monitoring.',
    icon: <Clock size={32} />,
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    features: ['Minor surgeries', 'Endoscopic procedures', 'Same-day discharge', 'Post-procedure care'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 12,
    title: 'Minor OT',
    description: 'Fully equipped minor operation theater for outpatient surgical procedures.',
    icon: <Scissors size={32} />,
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    features: ['Minor surgeries', 'Sterile environment', 'Local anesthesia', 'Quick procedures'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 13,
    title: 'Consultation',
    description: 'Expert medical consultations with experienced healthcare professionals.',
    icon: <Stethoscope size={32} />,
    color: 'from-violet-400 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    features: ['General medicine', 'Specialist consultations', 'Follow-up care', 'Treatment planning'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 14,
    title: 'Health Check Lounge',
    description: 'Comprehensive health screening packages in a comfortable environment.',
    icon: <Shield size={32} />,
    color: 'from-lime-400 to-lime-600',
    bgColor: 'bg-lime-50',
    textColor: 'text-lime-600',
    features: ['Executive health checks', 'Preventive screening', 'Wellness packages', 'Health reports'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 15,
    title: 'E.N.T',
    description: 'Specialized ear, nose, and throat care with advanced diagnostic tools.',
    icon: <Ear size={32} />,
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    features: ['Hearing tests', 'Endoscopy', 'Allergy treatment', 'Voice therapy'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
  },
  {
    id: 16,
    title: 'Dental',
    description: 'Complete dental care services for optimal oral health and aesthetics.',
    icon: <Smile size={32} />,
    color: 'from-sky-400 to-sky-600',
    bgColor: 'bg-sky-50',
    textColor: 'text-sky-600',
    features: ['General dentistry', 'Cosmetic procedures', 'Oral surgery', 'Preventive care'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&crop=center'
  }
];

const stats = [
  { number: '16+', label: 'Specialized Services', icon: <Star size={24} /> },
  { number: '24/7', label: 'Emergency Care', icon: <Clock size={24} /> },
  { number: '100%', label: 'Patient Satisfaction', icon: <CheckCircle size={24} /> },
  { number: '15+', label: 'Years Experience', icon: <Users size={24} /> }
];

// Typing animation hook
const useTypingEffect = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(text);
      return;
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, prefersReducedMotion]);

  return displayText;
};

// Floating shapes component
const FloatingShapes = () => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return null;
  }
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(4)].map((_, i) => {
        const duration = 20 + Math.random() * 10;
        const delay = Math.random() * 3;
        const size = 30 + Math.random() * 70;
        
        return (
          <motion.div
            key={i}
            className="absolute bg-white/10 backdrop-blur-sm"
            style={{
              width: size,
              height: size,
              borderRadius: Math.random() > 0.5 ? '50%' : '20%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              willChange: 'transform, opacity',
            }}
            initial={{
              y: -10,
              x: -5,
              rotate: 0,
              opacity: 0
            }}
            animate={{
              y: [0, 10, 0, -10, 0],
              x: [0, 5, 0, -5, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.1, 0.1, 0.1, 0]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
              opacity: {
                duration: duration * 0.8,
                times: [0, 0.1, 0.4, 0.6, 1],
                ease: "easeInOut"
              }
            }}
          />
        );
      })}
    </div>
  );
};

const ServiceCard = React.memo(({ service, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl ${service.bgColor} group`}
      initial={prefersReducedMotion ? { opacity: 1 } : { y: 20, opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={prefersReducedMotion ? {} : { y: -5 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${service.title}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${service.bgColor} shadow-lg mb-2`}>
            {React.cloneElement(service.icon, { className: `${service.textColor} w-6 h-6` })}
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          Learn more
          <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const prefersReducedMotion = useReducedMotion();
  
  // Smooth scroll to top on filter change
  const filterRef = useCallback((node) => {
    if (node && !prefersReducedMotion) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [prefersReducedMotion]);
  
  const typingText = useTypingEffect(
    "Comprehensive healthcare solutions with state-of-the-art technology and expert medical professionals",
    30
  );

  const categories = React.useMemo(() => [
    { id: 'all', name: 'All Services' },
    { id: 'diagnostic', name: 'Diagnostic', services: [2, 3, 4, 5, 6, 7, 8, 9] },
    { id: 'treatment', name: 'Treatment', services: [10, 11, 12, 13] },
    { id: 'specialty', name: 'Specialty', services: [15, 16] },
    { id: 'wellness', name: 'Wellness', services: [1, 14] }
  ], []);

  const filteredServices = React.useMemo(() => 
    filter === 'all' 
      ? servicesList 
      : servicesList.filter(service => 
          categories.find(cat => cat.id === filter)?.services?.includes(service.id)
        ),
    [filter, categories]
  );

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
    hidden: prefersReducedMotion ? {} : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  


  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-12">
        <FloatingShapes />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-800/20"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Medical Services
          </motion.h1>
          <motion.div
            className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-blue-100 h-16 flex items-center justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-light">{typingText}<span className="animate-pulse">|</span></span>
          </motion.div>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [-10, -20, -10],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.div 
                    className="relative z-10 flex justify-center mb-4 text-blue-600"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: index * 0.1 + 0.5 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-gray-600 font-medium relative z-10">{stat.label}</div>
                  
                  {/* Pulse effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-0"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setFilter(category.id);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ x: '-100%' }}
                  animate={{ x: filter === category.id ? '0%' : '-100%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16" ref={filterRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              role="list"
              aria-label="List of medical services"
            >
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredServices.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600 mb-6">We couldn't find any services matching your filter. Try a different category or view all services.</p>
                <button
                  onClick={() => setFilter('all')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  View All Services
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              role="document"
            >
              <div className="relative">
                <div className="h-64 bg-gray-100 relative overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="eager"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${selectedService.bgColor} shadow-lg mb-2`}>
                          {React.cloneElement(selectedService.icon, { 
                            className: `${selectedService.textColor} w-6 h-6`,
                            'aria-hidden': 'true'
                          })}
                        </div>
                        <h2 id="modal-title" className="text-2xl font-bold text-white">
                          {selectedService.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        aria-label="Close modal"
                      >
                        <X className="w-5 h-5 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{selectedService.description}</p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle 
                            className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" 
                            aria-hidden="true" 
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-end gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back to Services
                    </button>
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        navigate('/contact', { state: { service: selectedService.title } });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      Book Appointment
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
