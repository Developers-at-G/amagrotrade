import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
const BusinessPartnership = () => {
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const values = [
    'partnership.value1',
    'partnership.value2',
    'partnership.value3'
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 min-h-screen">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Hero Section with Diagonal Design */}
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-emerald-800 text-white p-6 md:p-16 mb-20"
          variants={fadeInUp}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-700 transform -skew-x-12 hidden md:block" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight">
              {t('partnership.title')}
            </h2>
            <div className="max-w-2xl space-y-3 md:space-y-4">
              <p className="text-emerald-50 text-base md:text-lg">{t('partnership.intro1')}</p>
              <p className="text-emerald-50 text-base md:text-lg">{t('partnership.intro2')}</p>
              <p className="text-emerald-50 text-base md:text-lg">{t('partnership.intro3')}</p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={fadeInUp} className="mb-12 md:mb-20 px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {values.map((valueKey, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transform rotate-45 rounded-xl -z-10 group-hover:rotate-[60deg] transition-transform duration-300" />
                <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-xl z-10">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-emerald-800">{t(valueKey)}</h4>
                  <p className="text-sm md:text-base text-gray-600">{t('partnership.valueDescription')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={fadeInUp} className="mb-12 md:mb-20 px-2 md:px-0">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`w-full md:w-1/3 transform ${
                  index % 2 === 0 ? 'md:-translate-y-8' : ''
                }`}
                whileHover={{ scale: 1.05, translateY: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border-2 border-emerald-100">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <span className="text-xl md:text-2xl text-emerald-600">{index + 1}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-emerald-800">{service.title}</h4>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regions Section */}
        <motion.div variants={fadeInUp} className="relative px-2 md:px-0">
          <div className="absolute inset-0 bg-emerald-50 transform -skew-y-6" />
          <div className="relative py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-lg bg-white/80 p-6 md:p-8 rounded-2xl shadow-xl border border-emerald-100"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-emerald-800">{region.area}</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs md:text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-6 md:mt-10 text-sm md:text-base text-gray-700 font-medium px-4">
              {t('partnership.regions.other')}
            </p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BusinessPartnership;