'use client';

import { motion } from 'framer-motion';
import { Mail, BookOpen, Calculator, Atom, Pi } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Cute Dino Guide 1 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 left-8 z-10"
      >        <div className="relative">
          <div className="text-6xl dino-bounce">🦕</div>
          <div className="absolute -top-8 -right-4 bg-white p-3 rounded-2xl shadow-lg border-2 border-green-300 max-w-xs">            
            <div className="text-sm font-medium text-gray-700">
              Welcome to Joshua&apos;s Tutoring Site!
            </div>
            <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        </div>
      </motion.div>      {/* Cute Dino Guide 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-40 right-12 z-10"
      >        <div className="relative">
          {/* <div className="text-5xl transform -scale-x-100 dino-bounce">🦖</div> */}
      
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {/* Josh's Name - Much Bigger */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center lg:text-left"
              >                <h1 className="text-8xl lg:text-9xl font-black text-transparent bg-gradient-to-r from-green-600 via-blue-500 via-emerald-500 to-green-700 bg-clip-text leading-none mb-4 josh-glow">
                  JOSHUA BAER
                </h1>
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent -mt-4">
                  Your STEM Success Story Starts Here! 
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed"
              >                Transform your understanding of Chemistry, Physics, and Math with Joshua Baer&apos;s 
                personalized tutoring approach. From confusion to confidence, let&apos;s make learning an adventure! 
              </motion.p>
            </div>            {/* Subject Icons - Green and Blue themed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 text-green-600">
                <Atom className="h-7 w-7" />
                <span className="font-bold text-lg">Chemistry</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Calculator className="h-7 w-7" />
                <span className="font-bold text-lg">Physics</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <Pi className="h-7 w-7" />
                <span className="font-bold text-lg">Math</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Green and Blue themed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
                <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                >
                <Mail className="h-6 w-6" />
                <span>Start Your Journey with Josh! </span>
                </button>
            </motion.div>

            {/* Achievement Stats - Green themed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-green-200"
            >
              <div className="text-center">
                <div className="text-4xl font-black text-green-600">30+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-emerald-600">95%</div>
                <div className="text-sm text-gray-600 font-medium">Grade Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-700">6+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </motion.div>
        {/* Right Content - Circular Profile with Curly Arrows */}
          </motion.div>          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* Curly Arrow pointing to Josh's face from left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute -left-16 top-1/4 text-6xl text-green-500 z-10"
            >
              
            </motion.div>
            
            {/* Curly Arrow pointing to Josh's face from right */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute -right-16 top-1/3 text-6xl text-green-500 z-10 transform scale-x-[-1]"
            >
              
            </motion.div>

            {/* Circular Profile Picture Container */}
            <div className="relative">
              {/* Main circular profile picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-gradient-to-br from-green-400 to-emerald-600 bg-gradient-to-br from-green-400 to-emerald-600 p-2"
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/Josh_professional.JPG" 
                    alt="Joshua Baer - Your Amazing STEM Tutor!"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>

              {/* Fun text around the picture */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg z-20"
              >
                That&apos;s Josh! 👨‍🏫
              </motion.div> */}
            </div>
                {/* Floating Elements - Green and Blue themed */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-8 left-8 bg-white p-4 rounded-full shadow-lg border-2 border-blue-300"
            >
              <Calculator className="h-8 w-8 text-blue-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/2 -right-8 bg-white p-4 rounded-full shadow-lg border-2 border-emerald-300"
            >
              <Atom className="h-8 w-8 text-emerald-600" />
            </motion.div>
            
            <motion.div
              animate={{ y: [-5, 15, -5], rotate: [10, 3, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-12 left-1/4 bg-white p-4 rounded-full shadow-lg border-2 border-green-300"
            >
              <BookOpen className="h-8 w-8 text-green-700" />
            </motion.div>            
            {/* Large Arrow pointing to Josh's profile picture from top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="absolute -top-16 -left-20 z-10"
            >
              <Image 
                src="/arrow-transparent.png" 
                alt="Arrow pointing to Josh"
                width={250}
                height={150}
                className="transform rotate-45"
              />
            </motion.div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
}
