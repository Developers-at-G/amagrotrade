import { motion } from 'framer-motion';

const BusinessPartnership = () => {
  const regions = [
    { area: 'West Africa', countries: ['Senegal', 'Gambia'] },
    { area: 'North Africa', countries: ['Morocco', 'Tunisia', 'Algeria'] },
  ];

  const services = [
    {
      title: 'Business Partner Matchmaking',
      description: 'We connect companies from Europe and Africa for import, export, and joint ventures.',
    },
    {
      title: 'Market Analysis & Consulting',
      description: 'Looking to enter a new market? We provide key insights and local contacts.',
    },
    {
      title: 'Logistics Services',
      description: 'We facilitate connections with reliable logistics partners for cross-border trade.',
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

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <motion.div 
        className="max-w-7xl mx-auto space-y-20"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-bold mb-12 text-emerald-800">
            Connecting Europe and Africa – Business Partners, Markets & Opportunities
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-700">
              Africa offers immense economic potential, but businesses often face challenges when entering these markets. 
              We bridge the gap between the two continents and help you find the right partners.
            </p>
            <p className="text-gray-700">
              We support companies from Europe and Africa in establishing successful business relationships. 
              As an intermediary, we overcome cultural, bureaucratic, and logistical barriers to connect the right partners.
            </p>
            <p className="text-gray-700">
              Africa is rapidly evolving, with new resource discoveries, growing infrastructure, and increasing demand 
              for international cooperation. We help businesses seize these opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          {/* <h3 className="text-3xl font-semibold text-center mb-12">
            We ensure a transparent and professional matchmaking process based on:
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Trust', 'Intercultural Competence', 'Economic Development'].map((title, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-emerald-800">{title}</h4>
                <p className="text-gray-700">Our network is built on strong relationships and careful selection.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          {/* <h3 className="text-3xl font-semibold text-center mb-12">Our Services</h3> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-emerald-800">{service.title}</h4>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          {/* <h3 className="text-3xl font-semibold text-center mb-12">
            We focus on high-growth regions in Africa
          </h3> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-emerald-50"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-emerald-800">{region.area}</h4>
                <p className="text-gray-700">{region.countries.join(', ')}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-10 text-gray-700">
            Other Markets: We support clients based on their specific needs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BusinessPartnership;