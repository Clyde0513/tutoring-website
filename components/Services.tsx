'use client';

import { motion } from 'framer-motion';
import { Calculator, Atom, Pi, Clock, Users, CheckCircle } from 'lucide-react';

export default function Services() {  const subjects = [
    {
      icon: <Atom className="h-12 w-12" />,
      title: "Chemistry",
      levels: ["High school / Honors Chemistry", "AP Chemistry", "College General Chemistry"],
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Physics",
      levels: ["AP Physics C: Mechanics", "AP Physics C: Electricity & Magnetism", "College General Physics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Pi className="h-12 w-12" />,
      title: "Calculus",
      levels: ["AP Calculus AB", "College Calculus 1"],
      color: "from-green-600 to-green-700"
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
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-100 relative overflow-hidden">
      {/* Cute Dino Guide */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-16 left-8 z-10"
      >
        <div className="relative">
          <div className="text-5xl"></div>
              {/* <div className="absolute -top-6 -left-8 bg-white p-3 rounded-2xl shadow-lg border-2 border-green-300 max-w-xs">
                <div className="text-sm font-medium text-gray-700">
                  Check out Josh&apos;s amazing tutoring services! So many options! 
                </div>
                <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
              </div> */}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-green-600 via-blue-500 via-emerald-500 to-green-700 bg-clip-text mb-6">
            JOSHUA&apos;S SERVICES! 
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Here are the physical science and math classes Joshua can assist you with!
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-bold mt-4">
            Please note that Joshua tutors exclusively ONLINE using the Zoom app.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
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
                My proven tutoring approach has helped 30+ students achieve their academic goals. 
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
            
            <div className="text-center flex items-center h-full">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl w-full">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Session Pricing</h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">$50</div>
                    <div className="text-gray-600">per hour</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>• Individual sessions</p>
                    <p>• Customized lesson plans</p>
                    <p>• Progress tracking</p>
                    <p>• Homework support</p>
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
