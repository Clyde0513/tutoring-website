'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, BookOpen, Calculator, Atom, Book, Pi } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Master{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  STEM
                </span>{' '}
                with Professional Guidance
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Unlock your potential in Chemistry, Physics, and Math with personalized tutoring 
                by Joshua Baer. Transform challenges into confidence and achieve academic excellence.
              </motion.p>
            </div>

            {/* Subject Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2 text-blue-600">
                <Atom className="h-6 w-6" />
                <span className="font-medium">Chemistry</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600">
                <Calculator className="h-6 w-6" />
                <span className="font-medium">Physics</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600">
                <Pi className="h-6 w-6" />
                <span className="font-medium">Math</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Start Learning Today</span>
              </button>
              <a 
                href="tel:+1234567890"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-sm text-gray-600">Students Tutored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Grade Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">6+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
        {/* Right Content - Professional Photo */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Josh's Professional Photo */}
              <Image 
                src="/Josh_professional.JPG" 
                alt="Joshua Baer - STEM Tutor"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-10 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
              
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 left-6 bg-white p-3 rounded-lg shadow-lg"
            >
              <Calculator className="h-6 w-6 text-blue-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/2 -right-6 bg-white p-3 rounded-lg shadow-lg"
            >
              <Atom className="h-6 w-6 text-purple-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-6 left-1/3 bg-white p-3 rounded-lg shadow-lg"
            >
              <BookOpen className="h-6 w-6 text-green-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
