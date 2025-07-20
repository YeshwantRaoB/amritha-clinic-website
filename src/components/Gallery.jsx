import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, Loader2 } from 'lucide-react';

const images = [
  {
    src: '/images/Reception.avif',
    title: 'Reception Area',
    description: 'Our welcoming reception area provides a calm environment for all visitors.',
  },
  {
    src: 'https://via.placeholder.com/800x600?text=Image+2',
    title: 'Consultation Room',
    description: 'Private and well-equipped consultation rooms for patient-doctor discussions.',
  },
  {
    src: 'https://via.placeholder.com/800x600?text=Image+3',
    title: 'Diagnostic Lab',
    description: 'State-of-the-art diagnostic lab with modern testing equipment.',
  },
  {
    src: 'https://via.placeholder.com/800x600?text=Image+4',
    title: 'Radiology Suite',
    description: 'Advanced imaging facilities including X-ray and ultrasound.',
  },
  {
    src: 'https://via.placeholder.com/800x600?text=Image+5',
    title: 'Pharmacy',
    description: 'On-site pharmacy for quick access to prescribed medications.',
  },
  {
    src: 'https://via.placeholder.com/800x600?text=Image+6',
    title: 'Waiting Lounge',
    description: 'Comfortable seating and a peaceful atmosphere in our patient lounge.',
  },
];

// Image loading component with skeleton
const ImageWithLoader = ({ src, alt, className, onLoad }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => {
          setLoaded(true);
          onLoad?.();
        }}
        loading="lazy"
      />
    </div>
  );
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
/*   const [loadingStates, setLoadingStates] = useState({});
 */  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClose = () => setSelectedImage(null);
  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') {
          handleClose();
        } else if (e.key === 'ArrowLeft') {
          handlePrev(e);
        } else if (e.key === 'ArrowRight') {
          handleNext(e);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
      <motion.div
        className="text-center mb-8 sm:mb-12 md:mb-16"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-3 sm:mb-4">
          Photo Gallery
        </h1>
        <motion.p
          className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore our facilities and amenities through our photo gallery. {!isMobile && 'Click or tap'} any image to view in fullscreen.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl relative group shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setSelectedImage(idx)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300 }}
            aria-label={`View ${img.title}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedImage(idx)}
          >
            <div className="relative overflow-hidden aspect-[4/3] w-full">
              <ImageWithLoader 
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5 md:p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <div className="flex items-center justify-center sm:justify-start mb-1 sm:mb-2">
                    <ZoomIn size={isMobile ? 20 : 24} className="mr-1 sm:mr-2" />
                    <span className="text-sm sm:text-base font-medium">View Details</span>
                  </div>
                  <motion.p 
                    className="text-xs sm:text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center sm:text-left"
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {img.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
            <div className="p-3 sm:p-4 bg-white">
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg">{img.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{img.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center px-4 py-6 sm:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div 
              className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="relative w-full h-full max-h-[80vh] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithLoader 
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              <motion.div 
                className="mt-4 sm:mt-6 text-center px-4 max-w-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1">
                  {images[selectedImage].title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  {images[selectedImage].description}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  {selectedImage + 1} of {images.length}
                </p>
              </motion.div>

              {/* Navigation Buttons */}
              {!isMobile && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={isMobile ? 24 : 28} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/60 hover:bg-black/80 p-2 sm:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next image"
                  >
                    <ChevronRight size={isMobile ? 24 : 28} />
                  </button>
                </>
              )}

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black/80 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close gallery"
              >
                <X size={isMobile ? 20 : 24} />
              </button>

              {/* Mobile Swipe Instructions */}
              {isMobile && (
                <div className="fixed bottom-8 left-0 right-0 flex justify-center">
                  <div className="bg-black/60 text-white text-xs px-3 py-1.5 rounded-full flex items-center">
                    <span className="mr-2">Swipe to navigate</span>
                    <ChevronLeft className="w-4 h-4 mx-1" />
                    <ChevronRight className="w-4 h-4 mx-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Touch Swipe Handlers for Mobile */}
            {isMobile && (
              <div className="fixed inset-0 flex">
                <div 
                  className="w-1/2 h-full cursor-ew-resize" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev(e);
                  }}
                />
                <div 
                  className="w-1/2 h-full cursor-ew-resize"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext(e);
                  }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
