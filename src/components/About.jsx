import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, HeartPulse, Stethoscope, Users, CheckCircle, Calendar, Star } from 'lucide-react';

const team = [
  {
    name: 'Dr. Priya Nair',
    role: 'Chief Physician',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: '20+ years of experience in internal medicine and patient care.'
  },
  {
    name: 'Dr. Arjun Menon',
    role: 'Consultant Cardiologist',
    img: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'Expert in cardiac diagnostics and interventional cardiology.'
  },
  {
    name: 'Dr. S. Lakshmi',
    role: 'Pediatrician',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Specialist in child health and preventive pediatrics.'
  },
  {
    name: 'Dr. Rakesh Kumar',
    role: 'Radiologist',
    img: 'https://randomuser.me/api/portraits/men/68.jpg',
    bio: 'Advanced imaging and diagnostics expert.'
  }
];

const milestones = [
  { year: '2008', title: 'Clinic Founded', icon: <Award className="w-6 h-6 text-blue-600" /> },
  { year: '2012', title: 'Expanded to Multispeciality', icon: <Users className="w-6 h-6 text-blue-600" /> },
  { year: '2016', title: '24/7 Emergency Care', icon: <HeartPulse className="w-6 h-6 text-blue-600" /> },
  { year: '2021', title: 'Awarded Best Clinic', icon: <Star className="w-6 h-6 text-blue-600" /> },
];

const whyChoose = [
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: '24/7 Emergency & Outpatient Care' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'State-of-the-art Diagnostics' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'Experienced, Compassionate Doctors' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'Modern, Comfortable Facilities' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'Patient-Centered Approach' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'Comprehensive Family Care' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-50/80 via-white/90 to-blue-100/80">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center text-center px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm sm:backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 border border-blue-100 mx-2 sm:mx-4"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 mb-3 sm:mb-4 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            About Amritha Multispeciality Clinic
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-800/90 font-medium mb-1 sm:mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Excellence in healthcare, compassion in service.
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </section>

      {/* Clinic Intro & Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 flex items-center justify-center gap-2">
            <Stethoscope className="w-7 h-7 text-blue-500" /> Welcome to Amritha
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Amritha Multispeciality Clinic & Diagnostic Center has been serving the community with dedication and care for over a decade. Our team of expert doctors and staff provide comprehensive, patient-centered healthcare using the latest technology and a personal touch. We believe in building lasting relationships with our patients and their families.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
              <User className="w-8 h-8 text-blue-600 mb-2" />
              <span className="font-bold text-xl text-blue-900">10,000+</span>
              <span className="text-gray-600 text-sm">Happy Patients</span>
            </motion.div>
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
              <HeartPulse className="w-8 h-8 text-pink-500 mb-2" />
              <span className="font-bold text-xl text-blue-900">15+</span>
              <span className="text-gray-600 text-sm">Specialties</span>
            </motion.div>
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}>
              <Calendar className="w-8 h-8 text-green-600 mb-2" />
              <span className="font-bold text-xl text-blue-900">365</span>
              <span className="text-gray-600 text-sm">Days Open</span>
            </motion.div>
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <Award className="w-8 h-8 text-yellow-500 mb-2" />
              <span className="font-bold text-xl text-blue-900">5+</span>
              <span className="text-gray-600 text-sm">Awards</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img
              src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f228?auto=format&fit=crop&w=600&q=80"
              alt="Clinic Building"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </motion.div>
          <motion.div className="space-y-8" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver compassionate, high-quality healthcare to individuals and families in our community, guided by clinical excellence and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading multispeciality clinic renowned for patient-centered care, state-of-the-art diagnostics, and continuous improvement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <HeartPulse className="w-6 h-6 text-pink-500" />, title: 'Compassion', desc: 'We treat every patient with empathy and respect.' },
                  { icon: <Star className="w-6 h-6 text-yellow-500" />, title: 'Excellence', desc: 'We strive for the highest quality in all we do.' },
                  { icon: <User className="w-6 h-6 text-blue-600" />, title: 'Integrity', desc: 'We uphold honesty and transparency.' },
                  { icon: <Award className="w-6 h-6 text-green-600" />, title: 'Innovation', desc: 'We embrace new technologies and treatments.' },
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/80 p-3 sm:p-4 rounded-lg shadow flex-1 min-w-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-1">{value.icon}<span className="font-semibold text-blue-900">{value.title}</span></div>
                    <div className="text-gray-600 text-sm">{value.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Meet Our Team</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              className="bg-white/80 rounded-xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 flex flex-col items-center hover:scale-[1.02] sm:hover:scale-105 hover:shadow-xl sm:hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover shadow mb-3 border-4 border-blue-100" />
              <h3 className="text-lg font-semibold text-blue-800 mb-1">{member.name}</h3>
              <div className="text-blue-500 text-sm mb-2">{member.role}</div>
              <p className="text-gray-600 text-sm text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clinic Timeline / Milestones */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Our Journey</motion.h2>
        <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.year}
              className="flex flex-col items-center text-center px-2 sm:px-4 flex-shrink-0 w-32 sm:w-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
            >
              <div className="mb-2">{m.icon}</div>
              <div className="font-bold text-xl text-blue-800">{m.year}</div>
              <div className="text-blue-600 font-medium mb-1">{m.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Why Choose Amritha?</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {whyChoose.map((item, idx) => (
            <motion.div
              key={item.text}
              className="flex items-start sm:items-center gap-3 bg-white/80 rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md sm:hover:shadow-lg transition"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {item.icon}
              <span className="text-blue-900 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
        <motion.div
          className="inline-block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 transition-transform font-semibold sm:font-bold text-lg sm:text-xl cursor-pointer"
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
        >
          Book an Appointment
        </motion.div>
      </section>
    </div>
  );
}
