import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://via.placeholder.com/800x600?text=Image+1',
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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);
  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-blue-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Photo Gallery
      </motion.h1>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-600 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore our facilities and amenities through our photo gallery. Click any image to view in fullscreen.
      </motion.p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-xl relative group shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedImage(idx)}
            transition={{ type: 'spring', stiffness: 300 }}
            aria-label={`View ${img.title}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(idx)}
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={img.src}
                alt={img.title}
                className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-110"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <ZoomIn size={24} className="mr-2" />
                    <span className="font-medium"></span>
                  </div>
                  <motion.p 
                    className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {img.description}
                  </motion.p>
                </div>
              </motion.div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-gray-800 text-lg">{img.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{img.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="max-w-5xl w-full flex flex-col items-center text-white space-y-4">
              <motion.img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full max-h-[70vh] object-contain rounded-md shadow-xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              <div className="text-center px-4">
                <h2 className="text-2xl font-semibold">{images[selectedImage].title}</h2>
                <p className="text-gray-300 text-sm mt-1">{images[selectedImage].description}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-80 transition"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
