import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();
  
  // Add animation variants for the glowing text effect
  const glowVariants = {
    animate: {
      textShadow: [
        "0 0 4px rgba(74, 222, 128, 0)",
        "0 0 8px rgba(74, 222, 128, 0.3)",
        "0 0 4px rgba(74, 222, 128, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Gradient border animation
  const borderVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/truck.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />

      {/* Content */}
      <div className="relative container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 sm:px-4">
        {/* Left content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-12 py-8 lg:py-24"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            {t('hero.title')} {' '}
            <motion.span 
              variants={glowVariants}
              animate="animate"
              className="text-green-400 inline-block"
            >
              Services
            </motion.span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 max-w-xl leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* Feature cards - visible on all screens */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative mt-8 lg:mt-0">
          <motion.div 
            variants={borderVariants}
            animate="animate"
            className="space-y-4 mx-2 sm:mx-4 lg:mr-12"
            style={{
              background: "linear-gradient(90deg, rgba(74, 222, 128, 0.1) 0%, rgba(74, 222, 128, 0.2) 50%, rgba(74, 222, 128, 0.1) 100%)",
              backgroundSize: "200% 200%"
            }}
          >
            {/* Feature Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl transition-all duration-300 max-w-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.feature1.title')}</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">{t('hero.feature1.description')}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl lg:translate-x-8 max-w-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.feature2.title')}</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">{t('hero.feature2.description')}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl max-w-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.feature3.title')}</h3>
                  <p className="text-gray-300 text-xs lg:text-sm">{t('hero.feature3.description')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative elements with animation */}
          <motion.div 
            animate={{ 
              y: [-10, 10, -10],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 right-4 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"
          />
          
          {/* Add a new floating element */}
          <motion.div
            animate={{
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-20 top-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    </div>
  )
}
