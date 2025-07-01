'use client';

import { motion } from 'framer-motion';
import { Calculator, Atom, Pi } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-12 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Cute Dino Guide 1 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 left-8 z-10"
      >        <div className="relative">
          {/* <div className="text-6xl dino-bounce">🦕</div> */}
          <div className="absolute -top-8 -right-4 bg-white p-3 rounded-2xl shadow-lg border-2 border-green-300 max-w-xs">            
            {/* <div className="text-sm font-medium text-gray-700">
              Welcome to Joshua&apos;s Tutoring Site!
            </div> */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              >                
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black text-transparent bg-gradient-to-r from-green-600 via-blue-500 via-emerald-500 to-green-700 bg-clip-text leading-tight mb-4">
                  JOSHUA BAER
                </h1>
                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                  One-on-one tutoring that improves understanding and grades in STEM!
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                >
                  Transform your understanding of Chemistry, Physics, and Calculus with Joshua Baer&apos;s 
                  personalized tutoring approach. From confusion to confidence, embark on your journey of learning today!
                </motion.p>
              </motion.div>
            </div>            {/* Subject Icons - Green and Blue themed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 text-green-600">
                <Atom className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="font-bold text-base sm:text-lg">Chemistry</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Calculator className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="font-bold text-base sm:text-lg">Physics</span>
              </div>
              <div className="flex items-center space-x-2 text-green-700">
                <Pi className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="font-bold text-base sm:text-lg">Calculus</span>
              </div>
            </motion.div>

            {/* Achievement Stats - Green themed */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t-2 border-green-200"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-green-600">30+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-green-700">6+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Years Experience</div>
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
              className="absolute -left-12 top-1/4 text-4xl text-green-500 z-10 hidden lg:block"
            >
              
            </motion.div>
            
            {/* Curly Arrow pointing to Josh's face from right */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute -right-12 top-1/3 text-4xl text-green-500 z-10 transform scale-x-[-1] hidden lg:block"
            >
              
            </motion.div>

            {/* Circular Profile Picture Container */}
            <div className="relative">
              {/* Main circular profile picture */}
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-gradient-to-br from-green-400 to-emerald-600 bg-gradient-to-br from-green-400 to-emerald-600 p-1 sm:p-2"
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

              {/* Decorative circular border */}
            </div>
               
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
               className="absolute top-10 sm:top-8 lg:top-6 -left-18 sm:-left-24 lg:-left-28 z-10 hidden lg:block"
            >
              <Image 
                src="/arrow-transparent.png" 
                alt="Arrow pointing to Josh"
                width={200}
                height={120}
                className="transform rotate-45 sm:w-[240px] sm:h-[145px] lg:w-[280px] lg:h-[170px]"
              />
            </motion.div>

        
          </motion.div>
        </div>
      </div>
    </section>
  );
}
