'use client';
import Hero from './Components/Hero'
import Services from './services/services'
import Contact from './contact/contact'
import BusinessPartnership from './Components/BusinessPartnership'
import Navbar from './Components/Navbar'
export default function Home() {
  return (
    <>
    <Navbar />

    <main className="min-h-screen pt-16">
      <div id="hero" className="animate-fadeIn">
        <Hero />
      </div>
      <section id="about" className="py-10 sm:py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-emerald-800 animate-slideDown">About Us</h2>
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-emerald-600">Your Reliable Partner in Transport & Trade</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 animate-slideUp">
              AM Agro Trade Services e.K. is an innovative company specializing in transport, logistics, and trade.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed animate-slideUp delay-100">
              Our mission: efficiently connecting businesses and ensuring smooth operations across the entire supply chain.
            </p>
          </div>
        </div>
      </section>
      <section id="why-choose-us" className="py-10 sm:py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Industry Expertise</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Years of experience and deep industry knowledge to serve you better
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Flexible Solutions</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Customized approaches to meet your specific requirements
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-600">Strong Network</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Extensive partnerships ensuring reliable and efficient service delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-10 sm:py-20 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">Our Services</h2>
          <Services />
        </div>
      </section>
      <div id="partnership" className="animate-fadeIn">
        <BusinessPartnership />
      </div>
      <section id="contact" className="py-10 sm:py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-emerald-800">Contact Us</h2>
          <Contact />
        </div>
      </section>
    </main>
    </>
  )
}