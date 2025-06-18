'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');    try {

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'dinojosh2014@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! 
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS failed:', error);
      setStatus('error');
      
      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:dinojosh2014@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } finally {
      setIsLoading(false);
    }
  };

  // Simple direct email function
  const handleQuickEmail = () => {
    window.location.href = 'mailto:dinojosh2014@gmail.com';
  };
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "dinojosh2014@gmail.com",
      action: "mailto:dinojosh2014@gmail.com",
      color: "text-green-600"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "(818) 826-9912",
      action: "tel:+18188269912",
      color: "text-emerald-600"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Text Message",
      value: "(818) 826-9912",
      action: "sms:+1(818) 826-9912",
      color: "text-green-700"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Math Tutoring",
    "Physics Tutoring", 
    "Chemistry Tutoring",
    "Test Preparation",
    "Schedule a Session"
  ];
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
      {/* Cute Dino Guide */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-20 right-12 z-10"
      >
        <div className="relative">
          <div className="text-6xl">🦕</div>
          <div className="absolute -top-20 -left-44 bg-white p-3 rounded-2xl shadow-lg border-2 border-green-300 max-w-xs">
            <div className="text-sm font-medium text-gray-700">
              Ready to start your STEM adventure with Josh? Let&apos;s go! 
            </div>
            <div className="absolute bottom-0 right-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </div>
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
          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text mb-6">
            CONTACT JOSH! 📞
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Ready to start your amazing STEM journey? Contact Josh today and let&apos;s make learning an adventure! 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Let&apos;s Connect with Josh!   
              </h3>
              <p className="text-gray-600 mb-8">
                Josh is here to help you achieve your academic dreams! Reach out through any of the methods below, 
                and he&apos;ll get back to you within 24 hours. Let&apos;s make STEM awesome together! 
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{method.title}</div>
                    <div className="text-gray-600">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Availability</span>
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>• Everyday: After 12 PM</p>
                {/* <p>• Saturday: 9:00 AM - 6:00 PM</p>
                <p>• Sunday: 12:00 PM - 6:00 PM</p> */}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span>Location</span>
              </h4>
              <div className="text-gray-600">
                <p>Online sessions available worldwide</p>
                <p>There are no In-person sessions available yet</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your goals, current challenges, or any questions you have..."
                />
              </div>              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>

              {/* Status Messages */}              {status === 'success' && (
                <div className="text-green-600 text-center mt-4">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-center mt-4">
                  Failed to send message. Your email client will open as a backup.
                </div>
              )}
            </form>

            {/* Quick Email Button */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Or send a quick email directly:</p>
              <button
                onClick={handleQuickEmail}
                className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center space-x-2 mx-auto"
              >
                <Mail className="h-5 w-5" />
                <span>Quick Email</span>
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>I typically respond within 24 hours</p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Excel in STEM?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join over 100 students who have transformed their academic journey with personalized tutoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dinojosh2014@gmail.com"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Me Now
              </a>
              {/* <a
                href="tel:+18188269912"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Today
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
