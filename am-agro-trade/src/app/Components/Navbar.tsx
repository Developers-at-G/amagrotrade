import { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();

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
        threshold: .8,
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
    <nav className="bg-white backdrop-blur-sm shadow-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-9xl mx-auto px-4 py-2">
        <div className="flex justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex items-center pl-0 md:p-8 md-max:px-0">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-2xl font-bold text-green-800 hover:text-green-700 transition-colors flex items-center"
            >
              <img 
                src="/images/TransparentLogo.png" 
                alt="AM Agro Trade" 
                className="h-24 md:h-40 w-auto object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className={getNavItemClass('about')}
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className={getNavItemClass('why-choose-us')}
              >
                {t('nav.whyUs')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={getNavItemClass('services')}
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('partnership')}
                className={getNavItemClass('partnership')}
              >
                {t('nav.partnership')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={getNavItemClass('contact')}
              >
                {t('nav.contact')}
              </button>
              <div className="ml-8 pl-8 border-l border-gray-200">
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-500"
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
          <div className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="px-4 py-3 space-y-2 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
              <button
                onClick={() => scrollToSection('about')}
                className={getNavItemClass('about', true)}
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className={getNavItemClass('why-choose-us', true)}
              >
                {t('nav.whyUs')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={getNavItemClass('services', true)}
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('partnership')}
                className={getNavItemClass('partnership', true)}
              >
                {t('nav.partnership')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={getNavItemClass('contact', true)}
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
