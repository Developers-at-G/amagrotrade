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
      
      {/* Content */}
      <div className="relative container mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-2 sm:px-4">
        {/* Left content - Refined design */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-12 py-8 lg:py-24 rounded-xl relative overflow-hidden"
        >
          {/* Lighter backdrop that lets the image show through */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent backdrop-blur-[2px] rounded-xl" />

          {/* Content wrapper */}
          <div className="relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
            >
              {t('hero.title')} {' '}
              <motion.span 
                variants={glowVariants}
                animate="animate"
                className="text-green-400 inline-block drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
              >
                Services
              </motion.span>
              {' '} 
              <span className="text-white/90">e.K</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 font-medium max-w-xl leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
            >
              {t('hero.subtitle')}
            </motion.p>
          </div>

          {/* Subtle decorative element */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-green-400/10 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Feature cards - Updated with service details */}
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
            {/* Freight Card */}
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
                  <span className="text-2xl">🚛</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.services.freight')}</h3>
                </div>
              </div>
            </motion.div>

            {/* Logistics Card */}
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
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.services.logistics')}</h3>
                </div>
              </div>
            </motion.div>

            {/* Trade Card */}
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
                  <span className="text-2xl">🛍️</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.services.trade')}</h3>
                </div>
              </div>
            </motion.div>

            {/* Brokerage Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20 shadow-xl lg:translate-x-4 max-w-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-400/20 rounded-lg">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base lg:text-lg">{t('hero.services.brokerage')}</h3>
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

      {/* Removed the bottom gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
    </div>
  )
}
