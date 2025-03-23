'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './Components/Hero'
import Services from './services/services'
import ContactForm from './ContactForm/ContactForm'
import BusinessPartnership from './Components/BusinessPartnership'
import Navbar from './Components/Navbar'
import { useLanguage } from './context/LanguageContext'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  const { t } = useLanguage();

  // Enhanced animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="bg-emerald-50">
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Hero section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About section */}
        <motion.section 
          id="about" 
          className="py-8 sm:py-16 px-4 bg-gradient-to-b from-white to-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-emerald-800">
              {t('about.title')}
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-600">
                {t('about.subtitle')}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('about.description1')}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us section */}
        <motion.section 
          id="why-choose-us" 
          className="py-8 sm:py-16 px-4 bg-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">
              {t('whyUs.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {['expertise', 'solutions', 'network'].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-emerald-600">
                      {t(`whyUs.${item}.title`)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services section */}
        <motion.section 
          id="services" 
          className="py-8 sm:py-16 px-4 bg-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </motion.section>

        {/* Partnership section */}
        <motion.section 
          id="partnership" 
          className="py-8 sm:py-12 px-4 bg-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <BusinessPartnership />
          </div>
        </motion.section>

        {/* Contact section */}
        <motion.section 
          id="contact" 
          className="py-8 sm:py-14 px-4 bg-emerald-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="max-w-7xl mx-auto">
            <ContactForm />
          </div>
        </motion.section>
      </div>
      <Analytics />
    </main>
  )
}