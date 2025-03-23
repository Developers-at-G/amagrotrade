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

  // Keep just a simple fade-in animation
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    viewport: { once: true }
  };

  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16">
        {/* Hero section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About section */}
        <section id="about" className="py-8 sm:py-16 px-4 bg-gradient-to-b from-white to-emerald-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeIn}
          >
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
          </motion.div>
        </section>

        {/* Why Choose Us section */}
        <section id="why-choose-us" className="py-8 sm:py-16 px-4 bg-emerald-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeIn}
          >
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
          </motion.div>
        </section>

        {/* Services section */}
        <section id="services" className="py-8 sm:py-16 px-4 bg-emerald-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeIn}
          >
            <Services />
          </motion.div>
        </section>

        {/* Partnership section */}
        <section id="partnership" className="py-8 sm:py-16 px-4 bg-emerald-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeIn}
          >
            <BusinessPartnership />
          </motion.div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-8 sm:py-14 px-4 bg-emerald-50">
          <motion.div 
            className="max-w-7xl mx-auto"
            {...fadeIn}
          >
            <ContactForm />
          </motion.div>
        </section>
      </div>
      <Analytics />
    </main>
  )
}