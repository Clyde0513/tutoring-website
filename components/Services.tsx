'use client';

import { motion } from 'framer-motion';
import { Calculator, Atom, Beaker, Clock, Users, Target, CheckCircle } from 'lucide-react';

export default function Services() {
  const subjects = [
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Mathematics",
      levels: ["Algebra I & II", "Geometry", "Trigonometry", "Pre-Calculus", "Calculus", "Statistics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Atom className="h-12 w-12" />,
      title: "Physics",
      levels: ["Conceptual Physics", "AP Physics 1 & 2", "AP Physics C", "College Physics", "Advanced Mechanics"],
      color: "from-purple-500 to-purple-600"
    },    {
      icon: <Beaker className="h-12 w-12" />,
      title: "Chemistry",
      levels: ["General Chemistry", "AP Chemistry", "Organic Chemistry", "Physical Chemistry", "Biochemistry"],
      color: "from-green-500 to-green-600"
    }
  ];

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "One-on-One Sessions",
      description: "Personalized attention tailored to your learning style and pace"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Available evenings and weekends to fit your busy schedule"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal-Oriented",
      description: "Focused approach to help you achieve specific academic objectives"
    }
  ];

  const benefits = [
    "Improved test scores and grades",
    "Enhanced problem-solving skills",
    "Increased confidence in STEM subjects",
    "Better understanding of fundamental concepts",
    "Preparation for standardized tests",
    "College and career readiness"
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Tutoring{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive STEM tutoring designed to build confidence, improve grades, and foster a love for learning.
          </p>
        </motion.div>

        {/* Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${subject.color} p-6 text-white`}>
                <div className="flex items-center space-x-4">
                  {subject.icon}
                  <h3 className="text-2xl font-bold">{subject.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Levels Covered:</h4>
                <ul className="space-y-2">
                  {subject.levels.map((level, levelIndex) => (
                    <li key={levelIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose My Tutoring Services?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Academic Journey
              </h3>
              <p className="text-gray-600 mb-6">
                My proven tutoring approach has helped hundreds of students achieve their academic goals. 
                Here&apos;s what you can expect when you work with me:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Session Pricing</h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">$40</div>
                    <div className="text-gray-600">per hour</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>• Individual sessions</p>
                    <p>• Customized lesson plans</p>
                    <p>• Progress tracking</p>
                    <p>• Homework support</p>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Book a Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
