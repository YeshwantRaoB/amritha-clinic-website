import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Stethoscope, HeartPulse, Award, Smile, Mail, Briefcase, Users, CheckCircle, ChevronRight, Star } from 'lucide-react';

// Image loading component with skeleton
/* const ImageWithLoader = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
}; */

const positions = [
  {
    title: 'Registered Nurse',
    dept: 'General Surgery',
    description: 'Full-time position requiring RN license and 2+ years of surgical experience.',
    location: 'Main Campus',
    shift: 'Day/Night',
    perks: ['Team Support', 'Modern Facilities'],
    contact: 'hr@amrithaclinic.com',
    icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
  },
  {
    title: 'Lab Technician',
    dept: 'Diagnostic Center',
    description: 'Certified lab technician for imaging and pathology tests.',
    location: 'Diagnostics Wing',
    shift: 'Day',
    perks: ['Growth Opportunities', 'Cutting-edge Equipment'],
    contact: 'hr@amrithaclinic.com',
    icon: <Award className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Receptionist',
    dept: 'Front Office',
    description: 'Friendly front-desk professional with excellent communication skills.',
    location: 'Reception',
    shift: 'Day',
    perks: ['People-first Culture', 'Training Provided'],
    contact: 'hr@amrithaclinic.com',
    icon: <Smile className="w-8 h-8 text-blue-500" />,
  },
];

const testimonials = [
  {
    name: 'Anjali S.',
    role: 'Nurse',
    quote: 'Amritha Clinic is like a second family. The support and teamwork are amazing!',
    img: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'Rahul M.',
    role: 'Lab Technician',
    quote: 'I love the opportunities for learning and the modern lab facilities.',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
  {
    name: 'Priya K.',
    role: 'Receptionist',
    quote: 'Welcoming patients and working with such a caring team is truly rewarding.',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const whyWork = [
  { icon: <Users className="w-7 h-7 text-blue-500" />, text: 'Supportive, friendly team' },
  { icon: <Star className="w-7 h-7 text-yellow-500" />, text: 'Growth & learning opportunities' },
  { icon: <CheckCircle className="w-7 h-7 text-green-500" />, text: 'Modern, safe environment' },
  { icon: <Briefcase className="w-7 h-7 text-pink-500" />, text: 'Competitive pay & benefits' },
];

const steps = [
  { icon: <Mail className="w-8 h-8 text-blue-600" />, title: 'Apply Online', desc: 'Send your resume and cover letter to our HR team.' },
  { icon: <User className="w-8 h-8 text-green-600" />, title: 'Interview', desc: 'Meet our team and discuss your fit and goals.' },
  { icon: <Stethoscope className="w-8 h-8 text-blue-500" />, title: 'Join Us', desc: 'Become a valued member of Amritha Clinic.' },
];

/* const PositionCard = ({ position, index }) => (
  <motion.div
    className="bg-white/90 backdrop-blur-sm border border-blue-50 rounded-2xl p-5 md:p-7 flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
  >
    <div className="mb-3">{position.icon}</div>
    <h2 className="text-lg md:text-xl font-bold text-blue-800 mb-1">{position.title}</h2>
    <div className="text-blue-600 text-sm mb-2">{position.dept}</div>
    <div className="flex items-center text-gray-600 text-sm mb-1">
      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {position.location}
    </div>
    <div className="flex items-center text-gray-600 text-sm mb-3">
      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {position.shift}
    </div>
    <p className="text-gray-700 text-sm mb-4 flex-grow">{position.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {position.perks.map((perk) => (
        <span key={perk} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
          {perk}
        </span>
      ))}
    </div>
    <motion.a
      href={`mailto:${position.contact}?subject=Application for ${position.title} Position`}
      className="inline-flex items-center text-blue-600 font-semibold text-sm group mt-auto w-fit"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.3 }}
    >
      Apply Now
      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  </motion.div>
); */

/* const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    key={testimonial.name}
    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 flex flex-col items-center h-full hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative mb-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full -z-10 transform rotate-6"></div>
      <ImageWithLoader 
        src={testimonial.img} 
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
      />
    </div>
    <h3 className="text-lg font-semibold text-blue-800 mb-1">{testimonial.name}</h3>
    <div className="text-blue-500 text-sm font-medium mb-3">{testimonial.role}</div>
    <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed">"{testimonial.quote}"</p>
  </motion.div>
); */

export default function Careers() {
/*   const [setIsMobile] = useState(false);
 */
  useEffect(() => {
    const checkMobile = () => {
/*       setIsMobile(window.innerWidth < 768);
 */    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-blue-50/60 via-white/80 to-blue-100/60">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center px-2 py-10 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl px-6 py-8 border border-blue-100"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          >
            Careers at Amritha Clinic
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-blue-800/90 font-medium mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Join our team of dedicated healthcare professionals and make a difference every day.
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519494080410-f9aa8f52f228?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </section>

      {/* Why Work With Us */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Why Work With Us?</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {whyWork.map((item, idx) => (
            <motion.div
              key={item.text}
              className="flex items-center gap-3 bg-white/80 rounded-lg p-4 shadow hover:shadow-lg transition"
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

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Open Positions</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((pos, idx) => (
            <motion.div
              key={pos.title}
              className="bg-white/90 border rounded-xl p-7 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="mb-2">{pos.icon}</div>
              <h2 className="text-xl font-semibold mb-1 text-blue-700">{pos.title}</h2>
              <div className="text-gray-600 text-sm mb-1">Department: {pos.dept}</div>
              <div className="text-gray-600 text-sm mb-1">Location: {pos.location}</div>
              <div className="text-gray-600 text-sm mb-1">Shift: {pos.shift}</div>
              <p className="text-gray-700 leading-relaxed mb-2 text-center">{pos.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {pos.perks.map((perk) => (
                  <span key={perk} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{perk}</span>
                ))}
              </div>
              <motion.a
                href={`mailto:${pos.contact}`}
                className="inline-flex items-center text-blue-600 font-medium hover:underline mt-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Apply <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
          {/* General Application Card */}
          <motion.div
            className="bg-gradient-to-br from-blue-100 via-white to-blue-200 border rounded-xl p-7 flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: positions.length * 0.15 }}
          >
            <Briefcase className="w-8 h-8 text-blue-500 mb-1" />
            <h2 className="text-lg font-semibold text-blue-700 mb-1">Didn't find your role?</h2>
            <p className="text-gray-700 text-sm mb-2 text-center">We're always looking for talented professionals. Send us your resume and we'll contact you if a suitable position opens up.</p>
            <motion.a
              href="mailto:hr@amrithaclinic.com"
              className="inline-flex items-center text-blue-600 font-medium hover:underline mt-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Send Resume <ChevronRight className="w-4 h-4 ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>Our Application Process</motion.h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="flex-1 bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="mb-3">{step.icon}</div>
              <h3 className="font-semibold text-blue-700 mb-1">{step.title}</h3>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>What Our Staff Say</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover shadow mb-3 border-4 border-blue-100" />
              <h3 className="text-base font-semibold text-blue-800 mb-1">{t.name}</h3>
              <div className="text-blue-500 text-xs mb-2">{t.role}</div>
              <p className="text-gray-600 text-sm text-center">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <motion.div
          className="inline-block bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-transform font-bold text-xl cursor-pointer"
          initial={{ scale: 0.96, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
          onClick={() => window.location = 'mailto:hr@amrithaclinic.com'}
        >
          Join Our Team
        </motion.div>
      </section>
    </div>
  );
}
