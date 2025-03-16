import { useState } from 'react';
import { motion } from 'framer-motion';
import Notification from '../Components/Notification';
import { useLanguage } from '../context/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [showNotification, setShowNotification] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setShowNotification(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error:', error);
      setIsError(true);
      setShowNotification(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setShowNotification(false);
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-3 px-6 rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium text-lg shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </div>
          
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white">
            <h3 className="text-3xl font-bold mb-8">{t('contact.info.title')}</h3>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-emerald-600/50 transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">AM Agro Trade</p>
                  <p className="text-emerald-100 mt-1">Your Trusted Agricultural Partner</p>
                </div>
              </motion.div>
              {/* Add similar motion.div blocks for phone, email, and address with appropriate icons */}
            </div>
          </div>
        </div>
      </motion.div>
      <Notification 
        show={showNotification}
        message={isError ? t('contact.form.error') : t('contact.form.success')}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
}

export default ContactForm;
