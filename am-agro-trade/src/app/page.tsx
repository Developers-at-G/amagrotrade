'use client';
import { useState } from 'react';
import Hero from './Components/Hero'
import Services from './services/services'
import ContactForm from './ContactForm/ContactForm'
import BusinessPartnership from './Components/BusinessPartnership'
import Navbar from './Components/Navbar'
import { useLanguage } from './context/LanguageContext'

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <Navbar />
      <div className="min-h-screen pt-16">
        <div id="hero" className="animate-fadeIn">
          <Hero />
        </div>
        <section id="about" className="py-10 sm:py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-emerald-800 animate-slideDown">
              {t('about.title')}
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-600">
                {t('about.subtitle')}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 animate-slideUp">
                {t('about.description1')}
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed animate-slideUp delay-100">
                {t('about.description2')}
              </p>
            </div>
          </div>
        </section>
        <section id="why-choose-us" className="py-10 sm:py-20 px-4 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">
              {t('whyUs.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    {t('whyUs.expertise.title')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('whyUs.expertise.description')}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    {t('whyUs.solutions.title')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('whyUs.solutions.description')}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-600">
                    {t('whyUs.network.title')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {t('whyUs.network.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-10 sm:py-20 px-4 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">
              {t('services.title')}
            </h2>
            <Services />
          </div>
        </section>
        <div id="partnership" className="animate-fadeIn">
          <BusinessPartnership />
        </div>
        <section id="contact" className="py-10 sm:py-16 px-4 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">
              {t('contact.title')}
            </h2>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  )
}