'use client';

import { motion } from 'framer-motion';
import { Award, GraduationCap, Star, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Bachelor's Degree",
      description: "B.S. in Chemistry "
    },
    // {
    //   icon: <Award className="h-8 w-8" />,
    //   title: "Certified Educator",
    //   description: "Professional teaching certification with 5+ years of experience"
    // },
    {
      icon: <Users className="h-8 w-8" />,
      title: "30+ Students",
      description: "Successfully tutored over 30 Students from high school to college levels"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Proven Results",
      description: "95% of students show significant grade improvement within 6 months"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              STEM Expert
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate educator dedicated to making complex STEM concepts accessible and engaging for every student.
          </p>
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
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Learning Through Personalized Approach
            </h3>            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Hi! I&apos;m Joshua, a UCLA chemistry graduate with a physics concentration. I&apos;ve been tutoring for 6 years, helping students excel in AP Chemistry, AP Physics C, and AP Calculus AB. There&apos;s nothing more rewarding than seeing that &ldquo;Aha!&rdquo; moment when concepts finally click.
              </p>
              
              <p>
                My unique approach focuses on symbolic problem-solving rather than just plugging in numbers. Students learn to derive equations and understand the &ldquo;why&rdquo; behind each step, building skills that transfer to future courses. This method transforms confusion into confidence and creates lasting understanding.
              </p>
              
              <p>
                With straight A&apos;s in advanced coursework and 5&apos;s on all AP exams, plus recognition as a physical sciences award recipient, I bring both academic excellence and genuine passion for teaching to every session.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">5.0 Rating from 50+ Reviews</span>
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
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">My Teaching Philosophy</h3>            <p className="text-lg opacity-90 max-w-4xl mx-auto">
              &ldquo;I believe that understanding comes from connection, not memorization. By relating 
              complex concepts to real-world applications and building on what students already know, 
              we can make any STEM subject not just understandable, but genuinely exciting.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
