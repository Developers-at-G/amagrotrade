'use client'

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 1,
        rootMargin: '-50px 0px'
      }
    );

    const sections = ['hero', 'about', 'why-choose-us', 'services', 'partnership', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const getNavItemClass = (sectionId: string, isMobile: boolean = false) => {
    const baseClasses = "transition-colors font-medium";
    const isActive = activeSection === sectionId;
    
    if (isMobile) {
      return `block w-full text-left px-3 py-2 rounded-md ${baseClasses} ${
        isActive
          ? "text-green-700 bg-green-50"
          : "text-gray-700 hover:text-green-700 hover:bg-green-50"
      }`;
    }

    return `${baseClasses} ${
      isActive
        ? "text-green-700 border-b-2 border-green-700"
        : "text-gray-700 hover:text-green-700"
    }`;
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-2xl font-bold text-green-800 hover:text-green-700 transition-colors"
            >
              AM Agro Trade
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className={getNavItemClass('about')}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className={getNavItemClass('why-choose-us')}
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={getNavItemClass('services')}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('partnership')}
              className={getNavItemClass('partnership')}
            >
              Partnership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={getNavItemClass('contact')}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700 transition-colors focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
              <button
                onClick={() => scrollToSection('about')}
                className={getNavItemClass('about', true)}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className={getNavItemClass('why-choose-us', true)}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={getNavItemClass('services', true)}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('partnership')}
                className={getNavItemClass('partnership', true)}
              >
                Partnership
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={getNavItemClass('contact', true)}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
