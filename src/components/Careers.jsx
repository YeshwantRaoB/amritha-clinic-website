import React from 'react';
import { motion } from 'framer-motion';

const positions = [
  {
    title: 'Registered Nurse',
    dept: 'General Surgery',
    description: 'Full-time position requiring RN license and 2+ years of surgical experience.',
    contact: 'hr@amrithaclinic.com',
  },
  {
    title: 'Lab Technician',
    dept: 'Diagnostic Center',
    description: 'Certified lab technician for imaging and pathology tests.',
    contact: 'hr@amrithaclinic.com',
  },
  {
    title: 'Receptionist',
    dept: 'Front Office',
    description: 'Friendly front-desk professional with excellent communication skills.',
    contact: 'hr@amrithaclinic.com',
  },
];

export default function Careers() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16 space-y-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Careers at Amritha Clinic
      </motion.h1>

      <p className="text-center text-gray-700">
        Join our dedicated team of healthcare professionals. Explore open positions below and send your resume to the contact email.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {positions.map((pos, idx) => (
          <motion.div
            key={pos.title}
            className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">{pos.title}</h2>
            <h3 className="text-md font-medium mb-2 text-gray-600">Department: {pos.dept}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{pos.description}</p>
            <motion.a
              href={`mailto:${pos.contact}`}
              className="inline-block text-blue-600 font-medium hover:underline"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Apply: {pos.contact}
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
