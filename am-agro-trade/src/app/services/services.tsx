'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TbTruckDelivery, TbPackages, TbWorld } from 'react-icons/tb';

export default function Services() {
  const { t } = useLanguage();

  const serviceCategories = [
    {
      icon: <TbTruckDelivery className="w-12 h-12" />,
      key: 'freightForwarding',
      subServices: ['shipping', 'management', 'express', 'brokerage']
    },
    {
      icon: <TbPackages className="w-12 h-12" />,
      key: 'supplyChain',
      subServices: ['warehousing', 'distribution', 'optimization']
    },
    {
      icon: <TbWorld className="w-12 h-12" />,
      key: 'procurement',
      subServices: ['import', 'export']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-emerald-800 mb-12 sm:mb-16"
      >
        {t('services.title')}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-12 sm:space-y-16"
      >
        {serviceCategories.map((category, idx) => (
          <motion.div
            key={category.key}
            variants={itemVariants}
            className={`flex flex-col md:flex-row items-start gap-6 sm:gap-8 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/3 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 sm:p-6 rounded-full bg-emerald-100 text-emerald-600"
              >
                {category.icon}
              </motion.div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-4">
              <motion.h3 
                className="text-xl sm:text-2xl font-semibold text-emerald-700"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
              >
                {t(`services.${category.key}.title`)}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-4 text-sm sm:text-base"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
              >
                {t(`services.${category.key}.description`)}
              </motion.p>
              
              <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                variants={containerVariants}
              >
                {category.subServices.map((subService) => (
                  <motion.li
                    key={subService}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 text-sm sm:text-base border border-gray-100"
                  >
                    <span className="text-emerald-600 mr-2">•</span>
                    {t(`services.${category.key}.${subService}`)}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
