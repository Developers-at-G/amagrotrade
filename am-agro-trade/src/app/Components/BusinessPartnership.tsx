import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const BusinessPartnership = () => {
  const { scrollYProgress } = useScroll();
  const regions = [
    { area: 'West Africa', countries: ['Senegal', 'Gambia'] },
    { area: 'North Africa', countries: ['Morocco', 'Tunisia', 'Algeria'] },
  ];
  const { t } = useLanguage();

  const services = [
    {
      title: t('partnership.service1.title'),
      description: t('partnership.service1.description'),
    },
    {
      title: t('partnership.service2.title'),
      description: t('partnership.service2.description'),
    },
    {
      title: t('partnership.service3.title'),
      description: t('partnership.service3.description'),
    },
  ];

  // Smooth spring config
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Create smooth scroll-driven animations
  const scaleProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.8, 1]),
    springConfig
  );

  // Slower trade route animation
  const tradeRouteVariant = {
    initial: { pathLength: 0 },
    animate: {
      pathLength: 1,
      transition: { duration: 4, ease: "easeInOut" }
    }
  };

  // Slower connection dots animation
  const connectionDotVariant = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Gentler floating card animation
  const floatingCardVariant = {
    initial: { y: 0 },
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const values = [
    'partnership.value1',
    'partnership.value2',
    'partnership.value3'
  ];

  // Enhanced hero section animation
  const heroBackgroundVariant = {
    initial: { 
      x: "100%",
      skewX: -12
    },
    animate: { 
      x: 0,
      skewX: -12,
      transition: {
        duration: 2.5,
        ease: "easeOut"
      }
    }
  };

  // Gradient overlay animation
  const gradientOverlayVariant = {
    initial: { 
      opacity: 0
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-emerald-50 min-h-screen relative overflow-hidden">
      {/* Replace SVG trade routes with subtle gradient lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-700 to-transparent top-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-700 to-transparent top-2/4 transform -translate-y-1/2"></div>
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-700 to-transparent top-3/4 transform -translate-y-1/2"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        style={{ scale: scaleProgress }}
      >
        {/* Enhanced Hero Section with delayed slide-in animation */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-emerald-900 text-white p-8 md:p-16 mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 1.2 }}
        >
          {/* Base background */}
          <div className="absolute inset-0 bg-emerald-800" />
          
          {/* Sliding gradient background */}
          <motion.div 
            className="absolute inset-0"
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              delay: 0.3
            }}
            style={{
              background: "linear-gradient(90deg, #059669 0%, #10b981 100%)"
            }}
          />

          {/* Overlay for depth */}
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: "easeOut"
            }}
            style={{
              background: "linear-gradient(90deg, rgba(6,78,59,0.9) 0%, transparent 100%)"
            }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut"
              }}
            >
              {t('partnership.title')}
            </motion.h2>
            <motion.div 
              className="max-w-2xl space-y-4 md:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{
                duration: 1,
                delay: 1.5,
                ease: "easeOut"
              }}
            >
              <p className="text-emerald-50 text-lg md:text-xl">{t('partnership.intro1')}</p>
              <p className="text-emerald-50 text-lg md:text-xl">{t('partnership.intro2')}</p>
              <p className="text-emerald-50 text-lg md:text-xl">{t('partnership.intro3')}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section with Floating Cards */}
        <motion.div 
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {values.map((valueKey, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={{
                  hidden: { 
                    opacity: 0,
                    y: 50
                  },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    background: [
                      "linear-gradient(120deg, #047857 0%, #059669 100%)",
                      "linear-gradient(120deg, #059669 0%, #10b981 100%)",
                      "linear-gradient(120deg, #10b981 0%, #047857 100%)",
                      "linear-gradient(120deg, #047857 0%, #059669 100%)"
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  style={{
                    opacity: 0.15
                  }}
                />
                <div className="relative bg-emerald-100/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-200 overflow-hidden">
                  {/* Enhanced gradient overlay */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    style={{
                      background: "radial-gradient(circle at center, #047857 0%, transparent 70%)",
                    }}
                  />
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      borderWidth: [0, 2, 0],
                      borderColor: ["rgba(4, 120, 87, 0)", "rgba(4, 120, 87, 0.3)", "rgba(4, 120, 87, 0)"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    style={{
                      border: "solid"
                    }}
                  />
                  <div className="relative z-10">
                    <motion.h4 
                      className="text-2xl font-bold mb-4 text-emerald-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    >
                      {t(valueKey)}
                    </motion.h4>
                    <motion.p 
                      className="text-emerald-800 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    >
                      {t('partnership.valueDescription')}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section - Removed dots, using subtle connecting lines instead */}
        <motion.div className="mb-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center relative">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2,
                  delay: index * 0.3 
                }}
              >
                {/* Connecting line between services */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-emerald-200 to-transparent transform translate-x-1/2" />
                )}
                
                <div className="bg-emerald-100/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-200">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl text-emerald-800">{index + 1}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-emerald-900">{service.title}</h4>
                  <p className="text-emerald-800 text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regions Section */}
        <motion.div className="relative">
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  className="bg-emerald-100/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1.2,
                    delay: index * 0.3 
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.4 }
                  }}
                >
                  <h4 className="text-2xl font-bold mb-4 text-emerald-900">{region.area}</h4>
                  <div className="flex flex-wrap gap-3">
                    {region.countries.map((country, idx) => (
                      <span key={idx} className="px-4 py-2 bg-emerald-200 text-emerald-900 rounded-full text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BusinessPartnership;