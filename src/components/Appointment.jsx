import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  UserCheck,
  Clock,
  Users,
  Shield,
  Star,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

// Floating background shapes
const FloatingShapes = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(4)].map((_, i) => {
      const size = 80 + Math.random() * 80;
      const left = Math.random() * 90;
      const top = Math.random() * 80;
      return (
        <motion.div
          key={i}
          className="absolute bg-blue-200/30 rounded-full blur-2xl"
          style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
          animate={{
            y: [0, 20, 0, -20, 0],
            opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
          }}
          transition={{ duration: 16 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    })}
  </div>
);

const benefits = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Same-Day Slots",
    desc: "Get quick appointments with minimal wait times.",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    title: "Expert Doctors",
    desc: "Consult with experienced, compassionate professionals.",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-500" />,
    title: "Confidential & Secure",
    desc: "Your data and privacy are always protected.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Patient Satisfaction",
    desc: "We’re rated 4.9/5 by our patients.",
  },
];

const processSteps = [
  {
    icon: <Calendar className="w-7 h-7 text-blue-500" />,
    title: "Choose Service",
    desc: "Select your desired specialty or doctor.",
  },
  {
    icon: <Mail className="w-7 h-7 text-pink-500" />,
    title: "Fill Form",
    desc: "Provide your details and preferred date/time.",
  },
  {
    icon: <Clock className="w-7 h-7 text-green-600" />,
    title: "Get Confirmation",
    desc: "We’ll confirm your slot by email/SMS.",
  },
  {
    icon: <Users className="w-7 h-7 text-blue-700" />,
    title: "Visit Clinic",
    desc: "Arrive on time for your appointment!",
  },
];

const faqs = [
  {
    q: "How do I reschedule or cancel?",
    a: "Contact us at least 24 hours in advance by phone or email to reschedule or cancel your appointment.",
  },
  {
    q: "What should I bring?",
    a: "Bring your ID, insurance card, and any relevant medical documents or test results.",
  },
  {
    q: "Are telemedicine appointments available?",
    a: "Yes, you can request a video consultation for select services.",
  },
  {
    q: "Is my information secure?",
    a: "All data submitted is encrypted and kept strictly confidential.",
  },
];

export default function AppointmentSection() {
  const [openFAQ, setOpenFAQ] = useState(null);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50/70 via-white/80 to-blue-100/60 overflow-x-hidden">
      <FloatingShapes />
      {/* Hero Section */}
      <section className="relative z-10 py-16 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl px-8 py-12 border border-blue-100"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Hassle-free, secure, and quick booking with Amritha Clinic.
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-2 pb-8 px-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center p-6 border border-blue-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{ y: -6 }}
          >
            {b.icon}
            <span className="font-bold text-blue-900 mt-3 mb-1 text-lg">{b.title}</span>
            <span className="text-gray-600 text-sm">{b.desc}</span>
          </motion.div>
        ))}
      </section>

      {/* Process/Stepper Section */}
      <section className="relative z-10 max-w-4xl mx-auto py-10 px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center bg-white/70 backdrop-blur rounded-xl shadow-md px-6 py-6 border border-blue-100 min-w-[180px] max-w-xs"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.13, duration: 0.6, type: "spring" }}
            >
              <div className="mb-2">{step.icon}</div>
              <div className="font-semibold text-blue-900 mb-1">{step.title}</div>
              <div className="text-gray-600 text-sm mb-1">{step.desc}</div>
              {i < processSteps.length - 1 && (
                <ChevronRight className="w-5 h-5 text-blue-300 mt-2 md:rotate-0 rotate-90" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="relative z-10 py-8 px-4 max-w-3xl mx-auto">
        <motion.div
          className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-10 border border-blue-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeS1yjW48mrM1I4iim5xJKAhSTv7tTqwSMWawbmggzw5RduQA/viewform?embedded=true"
            width="100%"
            height="700"
            className="border-none w-full rounded-xl"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Appointment Form"
          >
            Loading…
          </iframe>
        </motion.div>
        {/* Support Card */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex items-center bg-blue-50/80 border border-blue-100 rounded-xl px-6 py-4 shadow-lg gap-3">
            <Phone className="w-6 h-6 text-blue-600" />
            <span className="font-medium text-blue-900">Need help? Call us:</span>
            <a href="tel:+15551234567" className="ml-2 text-blue-700 underline hover:text-blue-900 transition">+1 (555) 123-4567</a>
          </div>
          <div className="flex items-center bg-blue-50/80 border border-blue-100 rounded-xl px-6 py-4 shadow-lg gap-3">
            <Mail className="w-6 h-6 text-pink-600" />
            <span className="font-medium text-blue-900">Email:</span>
            <a href="mailto:info@amrithaclinic.com" className="ml-2 text-blue-700 underline hover:text-blue-900 transition">info@amrithaclinic.com</a>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-3xl mx-auto py-8 px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              className="bg-white/80 border border-blue-100 rounded-xl shadow p-4 cursor-pointer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, type: "spring" }}
              onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                <span className="font-semibold text-blue-900">{faq.q}</span>
              </div>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.p
                    className="text-gray-700 mt-2 pl-7 pr-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
