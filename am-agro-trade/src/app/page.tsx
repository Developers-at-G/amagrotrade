'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './Components/Hero'
import Services from './services/services'
import ContactForm from './ContactForm/ContactForm'
import BusinessPartnership from './Components/BusinessPartnership'
import Navbar from './Components/Navbar'
import { useLanguage } from './context/LanguageContext'

export default function Home() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();

  // Smooth spring animation config
  const springConfig = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  };

  // Create smooth scroll-driven animations
  const backgroundY = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
    springConfig
  );

  const parallaxY = useSpring(
    useTransform(scrollYProgress, [0, 1], ['0%', '30%']),
    springConfig
  );

  // Refined animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const smoothReveal = {
    initial: { 
      opacity: 0, 
      y: 30,  // Reduced from 100 to 30 for subtler movement
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,  // Reduced from 1.2 to 0.8 for snappier animation
        ease: "easeOut",  // Changed to simple easeOut for smoother motion
      }
    },
    viewport: { 
      once: true, 
      margin: "-50px",  // Changed from -100px to -50px to start animation sooner
      amount: 0.3  // Only needs 30% of the element to be visible to start animating
    }
  };

  const cardHoverEffect = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <main>
      <Navbar />
      <motion.div 
        className="min-h-screen pt-16"
        style={{
          backgroundPositionY: backgroundY
        }}
      >
        {/* Hero section with floating animation */}
        <motion.div 
          id="hero" 
          initial="initial"
          animate="animate"
          variants={floatingAnimation}
        >
          <Hero />
        </motion.div>

        {/* About section with smooth parallax */}
        <motion.section
          id="about"
          className="py-8 sm:py-16 px-4 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden"
          style={{ y: parallaxY }}
        >
          <motion.div 
            className="max-w-7xl mx-auto"
            variants={smoothReveal}
            initial="initial"
            whileInView="whileInView"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-emerald-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1]
                }
              }}
              viewport={{ once: true }}
            >
              {t('about.title')}
            </motion.h2>
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <motion.h3 {...smoothReveal} className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-600">
                {t('about.subtitle')}
              </motion.h3>
              <motion.p {...smoothReveal} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                {t('about.description1')}
              </motion.p>
              <motion.p {...smoothReveal} className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {t('about.description2')}
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Why Choose Us section with interactive cards */}
        <motion.section id="why-choose-us" className="py-8 sm:py-16 px-4 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800"
              variants={smoothReveal}
              initial="initial"
              whileInView="whileInView"
            >
              {t('whyUs.title')}
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {['expertise', 'solutions', 'network'].map((item, index) => (
                <motion.div
                  key={item}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHoverEffect}
                  className="flex items-center justify-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:bg-emerald-50"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        delay: index * 0.2,
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                      }
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-emerald-600">
                      {t(`whyUs.${item}.title`)}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services section with smooth reveal */}
        <motion.section 
          id="services" 
          className="py-8 sm:py-16 px-4 bg-emerald-50"
          variants={smoothReveal}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </motion.section>

        {/* Replace the simple div with motion.section for partnership */}
        <motion.section 
          id="partnership" 
          className="py-8 sm:py-16 px-4 bg-emerald-50"
          variants={smoothReveal}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="max-w-7xl mx-auto">
            <BusinessPartnership />
          </div>
        </motion.section>

        {/* Update the contact section to match other sections */}
        <motion.section 
          id="contact" 
          className="py-8 sm:py-14 px-4 bg-emerald-50"
          variants={smoothReveal}
          initial="initial"
          whileInView="whileInView"
        >
          <div className="max-w-7xl mx-auto">
            <ContactForm />
          </div>
        </motion.section>
      </motion.div>
    </main>
  )
}