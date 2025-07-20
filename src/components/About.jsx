import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 py-16 space-y-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        About Amritha Clinic
      </motion.h1>

      {/* Mission & Vision Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
        <motion.img
          src="https://via.placeholder.com/400x300"
          alt="Clinic Building"
          className="rounded-lg shadow-lg w-full md:w-1/2 object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To deliver compassionate, high-quality healthcare to individuals and families in our community,
              guided by clinical excellence and innovation.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading multispeciality clinic renowned for patient-centered care,
              state-of-the-art diagnostics, and continuous improvement.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Values Section */}
      <div>
        <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Compassion', desc: 'We treat every patient with empathy and respect.' },
            { title: 'Excellence', desc: 'We strive for the highest quality in all we do.' },
            { title: 'Integrity', desc: 'We uphold honesty and transparency.' },
            { title: 'Innovation', desc: 'We embrace new technologies and treatments.' },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
