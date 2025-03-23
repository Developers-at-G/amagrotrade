import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image with better visibility */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/truck.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Main content with simplified layout */}
      <div className="relative h-full container mx-auto">
        <div className="absolute bottom-[45%] sm:bottom-[45%] left-0 w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Elegant company name display */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
              <span className="opacity-90">AM Agro Trade</span>
              <span className="block text-4xl sm:text-5xl md:text-7xl mt-2 sm:mt-3 text-green-400">
                Services e.K
              </span>
            </h1>
            
            {/* Company description with enhanced visibility */}
            <p className="text-lg sm:text-xl md:text-2xl text-white mt-4 sm:mt-6 max-w-2xl font-medium">
              {t('hero.description')}
            </p>
          </motion.div>
        </div>

        {/* Service indicators moved lower */}
        <div className="absolute bottom-[8%] sm:bottom-[10%] left-0 w-full px-2 sm:px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center sm:justify-start mx-auto max-w-[95%] sm:max-w-none gap-2 sm:gap-4"
          >
            {[
              { icon: "🚛", title: 'hero.services.freight' },
              { icon: "🏭", title: 'hero.services.logistics' },
              { icon: "🛍️", title: 'hero.services.trade' },
              { icon: "🤝", title: 'hero.services.brokerage' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="flex items-center gap-1.5 sm:gap-3 bg-white/10 backdrop-blur-sm 
                         px-3 sm:px-4 py-2 sm:py-2 rounded-full border border-white/20
                         w-[85%] sm:w-auto justify-center"
              >
                <span className="text-lg sm:text-xl">{service.icon}</span>
                <span className="text-white/90 text-sm sm:text-sm font-medium">
                  {t(service.title)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-1/3 h-full"
        >
          <div className="absolute top-[20%] right-[-20%] w-full h-[70%] 
                        border-l-2 border-white/10 transform -rotate-12" />
          <div className="absolute top-[25%] right-[-15%] w-full h-[60%] 
                        border-l-2 border-white/10 transform -rotate-12" />
        </motion.div>
      </div>
    </section>
  );
}
