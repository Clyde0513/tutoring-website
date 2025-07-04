'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Bachelor's Degree",
      description: "B.S. in Chemistry from UCLA with Science Education Minor"
    },
    // {
    //   icon: <Award className="h-8 w-8" />,
    //   title: "Certified Educator",
    //   description: "Professional teaching certification with 5+ years of experience"
    // },
    {
      icon: <Users className="h-8 w-8" />,
      title: "30+ Students",
      description: "Successfully tutored over 30 high school and college students"
    },
    // {
    //   icon: <Star className="h-8 w-8" />,
    //   title: "Proven Results",
    //   description: "95% of students show significant grade improvement within 6 months"
    // }
  ];

  return (    
  <section id="about" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Cute Dino Guide */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-10 right-8 z-10"
      >
        <div className="relative">
          {/* <div className="text-5xl">🦖</div> */}
          
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >         
         <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-green-600 via-blue-500 via-emerald-500 to-green-700 bg-clip-text mb-6">
            About Me!
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Your passionate STEM educator who makes complex concepts fun and accessible for every student! 
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >            
          {/* <h3 className="text-3xl font-bold text-green-800">
              Joshua&apos;s Learning Journey
            </h3> */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! I&apos;m Joshua, a UCLA chemistry graduate with a focus in physics. I&apos;ve been tutoring for 6 years, helping students excel in chemistry, physics, and calculus. There&apos;s nothing more rewarding than seeing that &ldquo;Aha!&rdquo; moment when concepts finally click.
              </p>
              
              <p>
                My unique approach focuses on symbolic problem-solving rather than just plugging in numbers. Students learn to derive equations and understand the &ldquo;why&rdquo; behind each step, building skills that transfer to future courses. This method transforms confusion into confidence and creates lasting understanding.
              </p>
              
              <p>
                With straight A&apos;s in advanced coursework and 5&apos;s on all AP exams, plus recognition as a physical sciences award recipient, I bring both academic excellence and genuine passion for teaching to every session.
              </p>
            </div>

           
          </motion.div>

          {/* Right Content - Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-200"
              >              <div className="text-green-600 mb-4">
                {achievement.icon}
              </div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {achievement.description}
              </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >          
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl relative">
            <h3 className="text-2xl font-bold mb-4">Joshua&apos;s Teaching Philosophy </h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              &ldquo;I believe that understanding comes from making connections, not memorization! By relating 
              complex concepts to real-world applications and building on what students already know, 
              we can make any STEM subject not just understandable, but genuinely exciting!&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
